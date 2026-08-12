import { installers } from './installers'
import type { Installer } from './installer-model'
import {
  BRAND_TAGS,
  MIN_NATIONAL_BRAND_INSTALLERS,
  MIN_STATE_BRAND_INSTALLERS,
  getBrandBySlug,
  installerHasBrand,
  type BrandTag,
} from './brands'

type FAQItem = { q: string; a: string }

export const MIN_NATIONAL_TAG_INSTALLERS = MIN_NATIONAL_BRAND_INSTALLERS
export const MIN_STATE_TAG_INSTALLERS = MIN_STATE_BRAND_INSTALLERS

export type DirectoryTagKind = 'brand' | 'intent'

export type DirectoryTag = {
  slug: string
  id: string
  kind: DirectoryTagKind
  label: string
  shortLabel: string
  description: string
  groupLabel: string
  eyebrow: string
  matches: (installer: Installer) => boolean
}

function hasReviewTag(installer: Installer, tagId: string): boolean {
  const tags = [...(installer.evScopedTags || []), ...(installer.reviewTags || [])]
  return tags.some((tag) => tag.id === tagId)
}

function hasEvScopedTag(installer: Installer, tagId: string): boolean {
  return (installer.evScopedTags || []).some((tag) => tag.id === tagId)
}

function related(installer: Installer) {
  return (
    installer.relatedMentions || {
      level2: 0,
      hardwired: 0,
      nema1450: 0,
      loadManagement: 0,
      panelUpgrade: 0,
      permitting: 0,
      residential: 0,
      commercial: 0,
      dcFast: 0,
    }
  )
}

function claimsBrand(installer: Installer, brandId: string): boolean {
  if (installerHasBrand(installer, brandId)) return true
  return (installer.brandEvidence || []).some(
    (b) =>
      b.brand === brandId &&
      (b.relationship === 'claims_to_install' ||
        b.relationship === 'certified' ||
        b.relationship === 'authorized' ||
        b.relationship === 'listed_in_official_directory'),
  )
}

export const NATIONAL_TAG_PREVIEW_LIMIT = 75
export const NATIONAL_TAG_MAP_LIMIT = 200

export const INTENT_TAGS: DirectoryTag[] = [
  {
    slug: 'home-level-2',
    id: 'home_level_2',
    kind: 'intent',
    label: 'Home Level 2',
    shortLabel: 'Level 2',
    groupLabel: 'Job type',
    eyebrow: 'Level 2 signal',
    description:
      'Installers with residential Level 2 EV charger install signal on their website or in EV-scoped reviews.',
    matches: (installer) => {
      const lane = installer.lanes?.residential_l2
      return Boolean(
        lane?.confidence ||
          related(installer).level2 > 0 ||
          hasReviewTag(installer, 'level2_install'),
      )
    },
  },
  {
    slug: 'panel-upgrade',
    id: 'panel_upgrade',
    kind: 'intent',
    label: 'Panel upgrade',
    shortLabel: 'Panel upgrade',
    groupLabel: 'Job type',
    eyebrow: 'Panel signal',
    description:
      'Installers whose sites or EV-scoped reviews mention panel or service upgrades with EV charging work.',
    matches: (installer) =>
      related(installer).panelUpgrade > 0 ||
      hasEvScopedTag(installer, 'panel_upgrade'),
  },
  {
    slug: 'load-management',
    id: 'load_management',
    kind: 'intent',
    label: 'Load management',
    shortLabel: 'Load management',
    groupLabel: 'Job type',
    eyebrow: 'Load management',
    description:
      'Installers with load-management or energy-management language tied to EV charging.',
    matches: (installer) =>
      related(installer).loadManagement > 0 ||
      hasEvScopedTag(installer, 'load_management'),
  },
  {
    slug: 'commercial',
    id: 'commercial',
    kind: 'intent',
    label: 'Commercial EVSE',
    shortLabel: 'Commercial',
    groupLabel: 'Job type',
    eyebrow: 'Commercial signal',
    description:
      'Installers with commercial Level 2 or workplace/multifamily EVSE signal. Separate from the default residential ranking.',
    matches: (installer) =>
      Boolean(installer.lanes?.commercial_l2?.confidence) ||
      related(installer).commercial > 0 ||
      hasEvScopedTag(installer, 'commercial_evse') ||
      hasEvScopedTag(installer, 'multifamily'),
  },
]

function brandToDirectoryTag(brand: BrandTag): DirectoryTag {
  return {
    slug: brand.slug,
    id: brand.id,
    kind: 'brand',
    label: brand.label,
    shortLabel: brand.shortLabel,
    groupLabel: 'Brand',
    eyebrow: 'Brand signal',
    description: brand.description,
    matches: (installer) => claimsBrand(installer, brand.id),
  }
}

export const DIRECTORY_TAGS: DirectoryTag[] = [
  ...INTENT_TAGS,
  ...BRAND_TAGS.map(brandToDirectoryTag),
]

export function getDirectoryTagBySlug(slug: string): DirectoryTag | undefined {
  return DIRECTORY_TAGS.find((tag) => tag.slug === slug)
}

export function getInstallersByTag(tag: DirectoryTag): Installer[] {
  return installers.filter((installer) => tag.matches(installer))
}

export function getInstallersByTagInState(
  tag: DirectoryTag,
  stateSlug: string,
): Installer[] {
  return installers.filter(
    (installer) => installer.stateSlug === stateSlug && tag.matches(installer),
  )
}

export function getNationalDirectoryTags(): DirectoryTag[] {
  return DIRECTORY_TAGS.filter(
    (tag) => getInstallersByTag(tag).length >= MIN_NATIONAL_TAG_INSTALLERS,
  )
}

export function getStateDirectoryTags(stateSlug: string): DirectoryTag[] {
  return DIRECTORY_TAGS.filter(
    (tag) =>
      getInstallersByTagInState(tag, stateSlug).length >= MIN_STATE_TAG_INSTALLERS,
  )
}

export function directoryTagTitle(
  tag: DirectoryTag,
  opts?: { stateName?: string; count?: number },
): string {
  const stateName = opts?.stateName
  const count = opts?.count
  if (tag.kind === 'brand') {
    if (stateName) {
      if (!count) return `${tag.label} EV Charger Installers in ${stateName}`
      if (count === 1) return `1 ${tag.label} EV Charger Installer in ${stateName}`
      return `${count} ${tag.label} EV Charger Installers in ${stateName}`
    }
    return `${tag.label} EV Charger Installers`
  }
  if (stateName) {
    if (!count) return `${tag.label} EV Charger Installers in ${stateName}`
    if (count === 1) return `1 ${tag.label} Installer in ${stateName}`
    return `${count} ${tag.label} Installers in ${stateName}`
  }
  return `${tag.label} EV Charger Installers`
}

export function directoryTagDescription(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): string {
  const where = stateName ? ` in ${stateName}` : ''
  return `${count.toLocaleString()} researched installers${where} with ${tag.label.toLowerCase()} signal. Sorted by website evidence and EV-specific reviews for the active lane.`
}

export function directoryTagMetaDescription(
  tag: DirectoryTag,
  stateName?: string,
): string {
  return stateName
    ? `${tag.label} EV charger installation in ${stateName}`
    : `${tag.label} EV charger installation`
}

export function directoryTagIntro(
  tag: DirectoryTag,
  count: number,
  totalNational: number,
  stateName?: string,
): string {
  const countLabel = count.toLocaleString()
  const scope = stateName ? `in ${stateName}` : 'nationwide'
  if (tag.kind === 'brand') {
    return `${countLabel} researched installers ${scope} whose websites claim ${tag.label} install work. Brand pages require install language, not a keyword alone. Confirm licensing, product fit, and commissioning directly.`
  }
  return `${countLabel} installers ${scope} with ${tag.label.toLowerCase()} signal. ${tag.description}`
}

export function directoryTagFaqs(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): FAQItem[] {
  const where = stateName ? ` in ${stateName}` : ''
  if (tag.kind === 'brand') {
    return [
      {
        q: stateName
          ? `Does a ${tag.label} mention mean authorization in ${stateName}?`
          : `Does a ${tag.label} mention mean manufacturer authorization?`,
        a: `No. We record website install language for ${tag.label}. Authorization, certification, and warranty registration still need a current official source and a direct conversation with the shop.`,
      },
      {
        q: stateName
          ? `How many ${stateName} installers show ${tag.label} signal?`
          : `How many installers show ${tag.label} signal?`,
        a: `${count.toLocaleString()} researched installers${where} currently qualify for this brand tag.`,
      },
      {
        q: 'Is this an endorsement?',
        a: 'No. This directory surfaces website and review signal so you can call someone useful. Confirm licensing, scope, and commissioning yourself.',
      },
    ]
  }
  return [
    {
      q: `What counts as ${tag.label.toLowerCase()} signal?`,
      a: tag.description,
    },
    {
      q: stateName
        ? `How many ${stateName} installers match this filter?`
        : 'How many installers match this filter?',
      a: `${count.toLocaleString()} researched installers${where} currently match.`,
    },
    {
      q: 'Is this an endorsement?',
      a: 'No. Filters are research aids based on website and EV-specific review signal.',
    },
  ]
}

export function getBrandDirectoryTag(slug: string): DirectoryTag | undefined {
  const brand = getBrandBySlug(slug)
  if (!brand) return undefined
  return brandToDirectoryTag(brand)
}

export function directoryTagCounts(): { tag: DirectoryTag; count: number }[] {
  return DIRECTORY_TAGS.map((tag) => ({
    tag,
    count: getInstallersByTag(tag).length,
  })).filter((row) => row.count > 0)
}

export function intentTagCounts(): { tag: DirectoryTag; count: number }[] {
  return directoryTagCounts().filter((row) => row.tag.kind === 'intent')
}

export function nationalTagQualifies(tag: DirectoryTag): boolean {
  return getInstallersByTag(tag).length >= MIN_NATIONAL_TAG_INSTALLERS
}

export function stateTagQualifies(stateSlug: string, tag: DirectoryTag): boolean {
  return (
    getInstallersByTagInState(tag, stateSlug).length >= MIN_STATE_TAG_INSTALLERS
  )
}

export function getStateCountsForTag(
  tag: DirectoryTag,
): { stateSlug: string; stateName: string; stateAbbr: string; count: number }[] {
  const counts = new Map<
    string,
    { stateSlug: string; stateName: string; stateAbbr: string; count: number }
  >()
  for (const installer of installers) {
    if (!tag.matches(installer)) continue
    const existing = counts.get(installer.stateSlug)
    if (existing) {
      existing.count += 1
      continue
    }
    counts.set(installer.stateSlug, {
      stateSlug: installer.stateSlug,
      stateName: installer.state,
      stateAbbr: installer.stateAbbr,
      count: 1,
    })
  }
  return [...counts.values()]
    .filter((entry) => entry.count >= MIN_STATE_TAG_INSTALLERS)
    .sort((a, b) => b.count - a.count)
}

export function getTopStateLinksForTag(
  tag: DirectoryTag,
  limit = 12,
): { stateSlug: string; stateName: string; stateAbbr: string; count: number }[] {
  return getStateCountsForTag(tag).slice(0, limit)
}

export function getTagSeoTitle(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): string {
  return directoryTagTitle(tag, { stateName, count })
}

export function getTagMetaDescription(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): string {
  return directoryTagDescription(tag, count, stateName)
}

export function getTagH1(tag: DirectoryTag, stateName?: string): string {
  return directoryTagMetaDescription(tag, stateName)
}

export function getTagIntro(
  tag: DirectoryTag,
  count: number,
  totalNational: number,
  stateName?: string,
): string {
  return directoryTagIntro(tag, count, totalNational, stateName)
}

export function getTagFaqs(
  tag: DirectoryTag,
  count: number,
  stateName?: string,
): FAQItem[] {
  return directoryTagFaqs(tag, count, stateName)
}
