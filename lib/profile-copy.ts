import type { Installer } from './installer-model'
import { getGeneratedProfile } from './generated-profiles'
import { hedgeCredentialClaims } from './claim-hedge'
import { truncateText } from './seo'

type EvidenceTier = 'rich' | 'medium' | 'thin'

function locationLabel(
  installer: Pick<Installer, 'city' | 'stateAbbr' | 'state'>,
): string {
  if (installer.city) return `${installer.city}, ${installer.stateAbbr}`
  return installer.state
}

function dedicatedPagePath(url: string | null): string | null {
  if (!url) return null
  try {
    const parsed = new URL(url)
    const path = parsed.pathname.replace(/\/$/, '')
    return path || null
  } catch {
    return null
  }
}

function formatRating(score: number | null): string | null {
  if (typeof score !== 'number') return null
  return score.toFixed(1)
}

function reviewCountPhrase(count: number): string | null {
  if (!count) return null
  return `${count.toLocaleString()} Google review${count === 1 ? '' : 's'}`
}

function secondaryCategories(installer: Installer): string[] {
  const primary = (installer.categoryName || '').toLowerCase()
  return (installer.categories || [])
    .filter((category) => category && category.toLowerCase() !== primary)
    .slice(0, 2)
}

function dominantSiteLanguage(installer: Installer): string | null {
  const { level2, loadManagement, residential, panelUpgrade, hardwired, nema1450 } =
    installer.relatedMentions
  const entries = [
    { label: 'Level 2', count: level2 },
    { label: 'residential', count: residential },
    { label: 'load management', count: loadManagement },
    { label: 'panel upgrade', count: panelUpgrade },
    { label: 'hardwired', count: hardwired },
    { label: 'NEMA 14-50', count: nema1450 },
  ]
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count)

  if (entries.length === 0) return null
  const top = entries[0]
  if (entries.length === 1) return top.label
  return `${top.label} and ${entries[1].label}`
}

function websiteConfidence(installer: Installer): string {
  return (
    installer.lanes?.residential_l2?.confidence ||
    installer.generatorConfidence ||
    'medium'
  )
}

function websiteMentions(installer: Installer): number {
  return (
    installer.lanes?.residential_l2?.mentions ||
    installer.generatorMentions ||
    0
  )
}

function evReviewCount(installer: Installer): number {
  return (
    installer.evReviewCountByLane?.residential_l2 ||
    installer.generatorReviewCount ||
    0
  )
}

function topReviewThemes(
  installer: Installer,
  limit: number,
): { label: string; matchedReviewCount: number }[] {
  const tags =
    installer.evScopedTags?.length
      ? installer.evScopedTags
      : installer.generatorScopedTags?.length
        ? installer.generatorScopedTags
        : installer.reviewTags || []
  return [...tags]
    .sort((a, b) => b.matchedReviewCount - a.matchedReviewCount)
    .slice(0, limit)
}

function getEvidenceTier(installer: Installer): EvidenceTier {
  const tagCount =
    (installer.evScopedTags?.length ||
      installer.generatorScopedTags?.length ||
      installer.reviewTags?.length ||
      0)
  const topTag = topReviewThemes(installer, 1)[0]
  const strongTags =
    topTag &&
    (topTag.matchedReviewCount >= 3 || evReviewCount(installer) >= 3)
  const confidence = websiteConfidence(installer)

  if (
    confidence === 'explicit' &&
    ((installer.dedicatedPage ?? null) || tagCount >= 2 || strongTags)
  ) {
    return 'rich'
  }
  if (
    confidence !== 'medium' ||
    installer.reviewsCount >= 5 ||
    tagCount >= 1 ||
    evReviewCount(installer) >= 1
  ) {
    return 'medium'
  }
  return 'thin'
}

function composeIdentitySentence(installer: Installer): string {
  const loc = locationLabel(installer)
  const extras = secondaryCategories(installer)
  const pagePath = dedicatedPagePath(installer.dedicatedPage ?? null)

  if (pagePath) {
    return `${installer.name} operates from ${loc} and publishes a dedicated EV charger page at ${pagePath}.`
  }

  const topTags = topReviewThemes(installer, 2)
  if (topTags.length > 0 && topTags[0].matchedReviewCount >= 3) {
    const leadTag = topTags[0].label.toLowerCase()
    const second =
      topTags[1] && topTags[1].matchedReviewCount >= 2
        ? ` and ${topTags[1].label.toLowerCase()}`
        : ''
    return `${installer.name} in ${loc} shows up repeatedly in Google reviews mentioning ${leadTag}${second}.`
  }

  const category = installer.categoryName || 'installer'
  if (extras.length > 0) {
    return `${installer.name} is listed as a ${category.toLowerCase()} in ${loc}, with Google categories that also include ${extras.join(' and ').toLowerCase()}.`
  }

  return `${installer.name} is a ${category.toLowerCase()} based in ${loc}.`
}

function composeWebsiteSentence(installer: Installer): string | null {
  const mentions = websiteMentions(installer)
  const siteLanguage = dominantSiteLanguage(installer)
  const confidence = websiteConfidence(installer)

  if (confidence === 'explicit') {
    const base = `Their website mentions EV charger work ${mentions} time${mentions === 1 ? '' : 's'}`
    if (siteLanguage) {
      return `${base}, with heavier ${siteLanguage} language across the site.`
    }
    return `${base} and markets Level 2 charging directly to buyers.`
  }

  if (confidence === 'high') {
    return `Their website repeats EV charger language ${mentions} times, but does not lead with a dedicated charger page.`
  }

  if (confidence === 'medium') {
    if (siteLanguage) {
      return `Their website references EV charging ${mentions} time${mentions === 1 ? '' : 's'} while talking more about ${siteLanguage} work.`
    }
    return `Their website references EV charging ${mentions} time${mentions === 1 ? '' : 's'}.`
  }

  return null
}

function composeReviewThemesSentence(installer: Installer): string | null {
  const countPhrase = reviewCountPhrase(installer.reviewsCount)
  const rating = formatRating(installer.totalScore)
  const topTags = topReviewThemes(installer, 3)
  const genCount = evReviewCount(installer)

  if (topTags.length > 0) {
    const themeParts = topTags.map((tag) => {
      const count =
        tag.matchedReviewCount > 1 ? ` (${tag.matchedReviewCount} mentions)` : ''
      return `${tag.label.toLowerCase()}${count}`
    })
    const themes = themeParts.join(', ')
    if (genCount > 0 && countPhrase && rating) {
      return `${countPhrase} average ${rating}/5; ${genCount} EV-specific review${genCount === 1 ? '' : 's'}; tagged language most often mentions ${themes}.`
    }
    if (countPhrase && rating) {
      return `${countPhrase} average ${rating}/5; tagged review language most often mentions ${themes}.`
    }
    if (countPhrase) {
      return `${countPhrase}; tagged review language most often mentions ${themes}.`
    }
    return `Tagged review language most often mentions ${themes}.`
  }

  if (genCount > 0 && countPhrase && rating) {
    return `${countPhrase} average ${rating}/5, including ${genCount} EV-specific review${genCount === 1 ? '' : 's'}.`
  }
  if (countPhrase && rating) {
    return `${countPhrase} average ${rating}/5.`
  }
  if (countPhrase) {
    return `${countPhrase}.`
  }
  return null
}

function composeThinLead(installer: Installer): string {
  const loc = locationLabel(installer)
  const website = composeWebsiteSentence(installer)
  const countPhrase = reviewCountPhrase(installer.reviewsCount)

  if (website && countPhrase) {
    return `${installer.name} in ${loc} is a light file in this directory: ${website.replace(/\.$/, '')}. ${countPhrase}. Verify EV charger scope directly before you spend time on a quote.`
  }
  if (website) {
    return `${installer.name} in ${loc} is a light file in this directory: ${website.replace(/\.$/, '')}. Verify EV charger scope directly before you spend time on a quote.`
  }
  return `${installer.name} in ${loc} has limited website and review signal in our dataset. Treat this as a starting lead, not a confirmed EV charger specialist.`
}

export function composeProfileLead(installer: Installer): string {
  const tier = getEvidenceTier(installer)
  if (tier === 'thin') return composeThinLead(installer)

  const sentences = [composeIdentitySentence(installer)]
  const website = composeWebsiteSentence(installer)
  const reviews = composeReviewThemesSentence(installer)

  if (website) sentences.push(website)
  if (reviews) sentences.push(reviews)

  return sentences.slice(0, tier === 'rich' ? 3 : 2).join(' ')
}

export function composeProfileSubhead(installer: Installer): string {
  const loc = locationLabel(installer)
  const pagePath = dedicatedPagePath(installer.dedicatedPage ?? null)
  const topTag = topReviewThemes(installer, 1)[0]
  const confidence = websiteConfidence(installer)
  const mentions = websiteMentions(installer)

  if (pagePath) {
    return `Dedicated EV charger page · ${mentions} site mention${mentions === 1 ? '' : 's'} · ${loc}`
  }

  if (topTag && topTag.matchedReviewCount >= 3) {
    return `Review signal: ${topTag.label.toLowerCase()} · ${loc}`
  }

  if (confidence === 'explicit') {
    return `Strong website EV charger signal · ${loc}`
  }

  if (confidence === 'high') {
    return `Repeated EV charger language on site · ${loc}`
  }

  return `EV charger mention found on site · ${loc}`
}

export function composeReviewSummary(installer: Installer): string | null {
  const topTags = topReviewThemes(installer, 2)
  if (topTags.length === 0) return null

  const lead = topTags[0]
  const second = topTags[1]
  const leadPhrase = `${lead.label.toLowerCase()} (${lead.matchedReviewCount} tagged mention${lead.matchedReviewCount === 1 ? '' : 's'})`

  if (second && second.matchedReviewCount >= 2) {
    return `Across tagged Google reviews, ${leadPhrase} is the most common theme, followed by ${second.label.toLowerCase()}.`
  }

  return `Across tagged Google reviews, ${leadPhrase} is the most common theme.`
}

function isFullInstaller(
  installer: Pick<Installer, 'id' | 'writeup'> & Partial<Installer>,
): installer is Installer {
  return (
    (typeof installer.generatorMentions === 'number' ||
      typeof installer.lanes?.residential_l2?.mentions === 'number') &&
    Boolean(installer.relatedMentions) &&
    (typeof installer.generatorConfidence === 'string' ||
      typeof installer.lanes?.residential_l2?.confidence === 'string')
  )
}

/** Prefer Gemini Flash copy, then rule-based composition, then stored writeup. */
export function getProfileLead(
  installer: Pick<Installer, 'id' | 'writeup' | 'name' | 'generatorConfidence'> &
    Partial<Installer>,
): string {
  const generated = getGeneratedProfile(installer)
  if (generated?.lead) return hedgeCredentialClaims(generated.lead)
  if (isFullInstaller(installer)) {
    return hedgeCredentialClaims(composeProfileLead(installer))
  }
  return hedgeCredentialClaims(
    installer.writeup ||
      `${installer.name} shows EV charger website signal. Confirm licensing, scope, and recent work directly.`,
  )
}

export function getProfileSubhead(installer: Installer): string {
  const generated = getGeneratedProfile(installer)
  if (generated?.subhead) return hedgeCredentialClaims(generated.subhead)
  return hedgeCredentialClaims(composeProfileSubhead(installer))
}

export function getReviewSummaryText(installer: Installer): string | null {
  const generated = getGeneratedProfile(installer)
  if (generated?.reviewSummary) {
    return hedgeCredentialClaims(generated.reviewSummary)
  }
  const composed = composeReviewSummary(installer)
  return composed ? hedgeCredentialClaims(composed) : null
}

export function getFaqGeneratorAnswer(installer: Installer): string | null {
  const generated = getGeneratedProfile(installer)
  if (generated?.faqGeneratorAnswer) {
    return hedgeCredentialClaims(generated.faqGeneratorAnswer)
  }
  return null
}

export function getFaqEvChargerAnswer(installer: Installer): string | null {
  return getFaqGeneratorAnswer(installer)
}

export function getProfileMetaDescription(
  installer: Installer,
  fallback: string,
): string {
  const generated = getGeneratedProfile(installer)
  if (generated?.metaDescription) {
    return hedgeCredentialClaims(generated.metaDescription)
  }
  return hedgeCredentialClaims(fallback)
}

/**
 * SERP title: shorten company name first so “EV Charger Installer” + city/state stay.
 * Used as an absolute title (no long site-name suffix).
 */
export function getProfileSeoTitle(installer: Installer): string {
  const loc = locationLabel(installer)
  const suffix = ` EV Charger Installer in ${loc}`
  const nameBudget = Math.max(18, 58 - suffix.length)
  const name = truncateText(installer.name, nameBudget).replace(/…$/, '').trim()
  return `${name}${suffix}`
}
