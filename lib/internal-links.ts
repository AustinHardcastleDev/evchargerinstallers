import {
  getInstallersByState,
  installers,
  type Installer,
} from './installers'
import {
  MIN_NATIONAL_BRAND_INSTALLERS,
  MIN_STATE_BRAND_INSTALLERS,
  getBrandById,
  installerHasBrand,
} from './brands'
import {
  getDirectoryTagBySlug,
  getStateDirectoryTags,
  getTopStateLinksForTag,
  nationalTagQualifies,
  stateTagQualifies,
} from './directory-tags'

export {
  getStateDirectoryTags,
  getTopStateLinksForTag,
  nationalTagQualifies,
  stateTagQualifies,
}

/** @deprecated Prefer getStateDirectoryTags */
export function getStateBrandTags(stateSlug: string) {
  return getStateDirectoryTags(stateSlug).filter((tag) => tag.kind === 'brand')
}

/** Prefer a state×brand tag page when the state shortlist qualifies. */
export function resolveBrandTagPageHref(
  installer: Pick<Installer, 'stateSlug' | 'primaryBrands'>,
  brandId: string,
): string | undefined {
  if (!installerHasBrand(installer as Installer, brandId)) return undefined
  const meta = getBrandById(brandId)
  if (!meta) return undefined

  const stateCount = getInstallersByState(installer.stateSlug).filter((item) =>
    installerHasBrand(item, brandId),
  ).length
  if (stateCount >= MIN_STATE_BRAND_INSTALLERS) {
    return `/installers/${installer.stateSlug}/tags/${meta.slug}`
  }

  const nationalCount = installers.filter((item) =>
    installerHasBrand(item, brandId),
  ).length
  if (nationalCount >= MIN_NATIONAL_BRAND_INSTALLERS) {
    return `/installers/tags/${meta.slug}`
  }

  return undefined
}

export function resolveDirectoryTagPageHref(
  installer: Pick<Installer, 'stateSlug'>,
  tagSlug: string,
): string | undefined {
  const tag = getDirectoryTagBySlug(tagSlug)
  if (!tag) return undefined
  if (stateTagQualifies(installer.stateSlug, tag)) {
    return `/installers/${installer.stateSlug}/tags/${tag.slug}`
  }
  if (nationalTagQualifies(tag)) {
    return `/installers/tags/${tag.slug}`
  }
  return undefined
}

/** @deprecated Prefer getTopStateLinksForTag */
export function getTopStateBrandLinksForNationalTag(
  brand: { slug: string },
  limit = 12,
) {
  const tag = getDirectoryTagBySlug(brand.slug)
  if (!tag) return []
  return getTopStateLinksForTag(tag, limit)
}

/** @deprecated Prefer nationalTagQualifies */
export function nationalBrandTagQualifies(brandId: string): boolean {
  const tag = getDirectoryTagBySlug(
    brandId === 'briggs_stratton' ? 'briggs-stratton' : brandId,
  )
  return tag ? nationalTagQualifies(tag) : false
}

/** @deprecated Prefer stateTagQualifies */
export function stateBrandTagQualifies(
  stateSlug: string,
  brandId: string,
): boolean {
  const tag = getDirectoryTagBySlug(
    brandId === 'briggs_stratton' ? 'briggs-stratton' : brandId,
  )
  return tag ? stateTagQualifies(stateSlug, tag) : false
}

/** ISO-week-ish bucket used to rotate the homepage one-per-state sample. */
export function homepageDiscoveryWeekKey(now = Date.now()): number {
  return Math.floor(now / (7 * 24 * 60 * 60 * 1000))
}

/**
 * One installer per state for the homepage sample. Pass an explicit weekKey
 * when writing the committed snapshot (CI) so the set is deterministic.
 */
export function pickHomepageDiscoverySample(
  source = installers,
  weekKey: number = homepageDiscoveryWeekKey(),
): Installer[] {
  const stateSlugs = [...new Set(source.map((installer) => installer.stateSlug))].sort()

  return stateSlugs
    .map((stateSlug) => {
      const stateInstallers = source
        .filter((installer) => installer.stateSlug === stateSlug)
        .slice()
        .sort((a, b) => {
          const signal =
            confidenceRank(a.generatorConfidence) -
            confidenceRank(b.generatorConfidence)
          if (signal !== 0) return signal
          const genReviews =
            (b.generatorReviewCount || 0) - (a.generatorReviewCount || 0)
          if (genReviews !== 0) return genReviews
          return (
            (b.reviewsCount || 0) - (a.reviewsCount || 0) ||
            a.slug.localeCompare(b.slug)
          )
        })
      if (stateInstallers.length === 0) return null
      return stateInstallers[weekKey % stateInstallers.length]
    })
    .filter((installer): installer is Installer => installer !== null)
}

function confidenceRank(
  confidence: Installer['generatorConfidence'],
): number {
  return confidence === 'explicit' ? 0 : confidence === 'high' ? 1 : 2
}
