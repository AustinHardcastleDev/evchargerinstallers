import type { PinCategory } from './tokens'

export type EvLane = 'residential_l2' | 'commercial_l2' | 'dc_fast'
export type EvConfidence = 'explicit' | 'high' | 'medium'
export type EvidenceSource =
  | 'website'
  | 'google_maps'
  | 'google_review'
  | 'official_directory'
export type EvidenceStatus = 'verified' | 'claimed' | 'inferred' | 'not_found'
export type BrandRelationship =
  | 'mentions'
  | 'claims_to_install'
  | 'certified'
  | 'authorized'
  | 'listed_in_official_directory'

export type EvidenceRecord = {
  sourceType: EvidenceSource
  sourceUrl: string
  capturedAt: string
  excerpt: string
  status: EvidenceStatus
}

export type LaneEvidence = {
  confidence: EvConfidence
  reasoning: string
  dedicatedPage: string | null
  mentions: number
  score: number
  evidenceIds: string[]
}

export type BrandEvidence = {
  brand: string
  relationship: BrandRelationship
  evidenceIds: string[]
}

export type CredentialEvidence = {
  credential:
    | 'evitp_approved_contractor'
    | 'evitp_certified_electrician'
    | 'manufacturer_authorized'
    | 'electrical_license'
  subjectType: 'company' | 'electrician' | 'unknown'
  status: EvidenceStatus
  evidenceIds: string[]
}

export type InstallerReviewTagConfidence = 'single' | 'repeated' | 'strong'

export type InstallerReviewTag = {
  id: string
  label: string
  matchedReviewCount: number
  confidence: InstallerReviewTagConfidence
}

export type InstallerReviewSnippet = {
  reviewId: string
  rating: number | null
  publishedAt: string | null
  text: string
  matchedSignals: string[]
}

export type Installer = {
  id: string
  slug: string
  name: string
  city: string
  state: string
  stateAbbr: string
  stateSlug: string
  address: string
  phone: string
  emails?: string[]
  website: string
  lat: number | null
  lng: number | null
  reviewsCount: number
  totalScore: number | null
  categoryName: string
  categories: string[]
  fitForDirectory: 'high'
  primaryLane: EvLane
  lanes: Partial<Record<EvLane, LaneEvidence>>
  relatedMentions: {
    level2: number
    hardwired: number
    nema1450: number
    loadManagement: number
    panelUpgrade: number
    permitting: number
    residential: number
    commercial: number
    dcFast: number
  }
  evidence: Record<string, EvidenceRecord>
  brandEvidence: BrandEvidence[]
  credentialEvidence: CredentialEvidence[]
  primaryBrands: string[]
  sourceKeywords: string[]
  reviewTags?: InstallerReviewTag[]
  evReviewCountByLane?: Partial<Record<EvLane, number>>
  evReviewShareByLane?: Partial<Record<EvLane, number>>
  evScopedTags?: InstallerReviewTag[]
  evReviewSnippets?: InstallerReviewSnippet[]
  sourceCheckedAt: string
  reviewsCheckedAt?: string
  sponsored?: boolean
  /** Deterministic fallback copy until Flash profile exists. */
  writeup?: string
  generatorConfidence?: EvConfidence
  generatorReasoning?: string
  generatorMentions?: number
  dedicatedPage?: string | null
  generatorReviewCount?: number
  generatorReviewShare?: number
  generatorScopedTags?: InstallerReviewTag[]
  generatorReviewSnippets?: InstallerReviewSnippet[]
}


export type InstallerListItem = Pick<
  Installer,
  | 'id'
  | 'slug'
  | 'name'
  | 'city'
  | 'state'
  | 'stateAbbr'
  | 'stateSlug'
  | 'lat'
  | 'lng'
  | 'reviewsCount'
  | 'totalScore'
  | 'categoryName'
  | 'primaryLane'
  | 'lanes'
  | 'writeup'
  | 'reviewTags'
  | 'primaryBrands'
  | 'evReviewCountByLane'
  | 'sponsored'
> & {
  distanceMiles?: number
  generatorConfidence?: EvConfidence
  generatorReviewCount?: number
}

export const EV_REVIEW_FILTERS = [
  { id: '1', min: 1, label: '1+ EV reviews' },
  { id: '5', min: 5, label: '5+ EV reviews' },
  { id: '10', min: 10, label: '10+ EV reviews' },
] as const

export type EvReviewFilterId = (typeof EV_REVIEW_FILTERS)[number]['id']

export function evReviewCount(
  installer: Pick<Installer, 'evReviewCountByLane' | 'primaryLane'>,
  lane?: EvLane,
): number {
  const active = lane || installer.primaryLane || 'residential_l2'
  return installer.evReviewCountByLane?.[active] || 0
}

export function laneConfidence(
  installer: Pick<Installer, 'lanes' | 'primaryLane'>,
  lane?: EvLane,
): EvConfidence | undefined {
  const active = lane || installer.primaryLane || 'residential_l2'
  return installer.lanes?.[active]?.confidence
}

export type InstallerMapItem = Pick<
  Installer,
  | 'id'
  | 'slug'
  | 'name'
  | 'city'
  | 'stateAbbr'
  | 'stateSlug'
  | 'lat'
  | 'lng'
  | 'reviewsCount'
  | 'totalScore'
  | 'primaryLane'
  | 'lanes'
  | 'sponsored'
> & {
  distanceMiles?: number
  generatorConfidence?: EvConfidence
}

export type StateMeta = {
  slug: string
  name: string
  abbr: string
  totalListings: number
  explicitCount: number
  highCount: number
  mediumCount: number
  withPhone: number
  withEmail: number
  withCoords?: number
  withReviewTags?: number
  withGeneratorReviews?: number
  topCities: { city: string; count: number }[]
  allCities?: string[]
}

export function confidenceRank(conf: EvConfidence | string | undefined): number {
  if (conf === 'explicit') return 0
  if (conf === 'high') return 1
  if (conf === 'medium') return 2
  return 9
}

export function sortInstallersByDistanceSignal<T extends InstallerListItem>(
  rows: T[],
): T[] {
  return [...rows].sort((a, b) => {
    if (a.sponsored && !b.sponsored) return -1
    if (!a.sponsored && b.sponsored) return 1
    const da = a.distanceMiles ?? Number.POSITIVE_INFINITY
    const db = b.distanceMiles ?? Number.POSITIVE_INFINITY
    if (da !== db) return da - db
    const ca = confidenceRank(laneConfidence(a, 'residential_l2'))
    const cb = confidenceRank(laneConfidence(b, 'residential_l2'))
    if (ca !== cb) return ca - cb
    return (b.reviewsCount || 0) - (a.reviewsCount || 0)
  })
}

export type SignalTier = 'dedicated' | 'repeated' | 'signal'

export function signalTier(confidence: EvConfidence): SignalTier {
  if (confidence === 'explicit') return 'dedicated'
  if (confidence === 'high') return 'repeated'
  return 'signal'
}

export function pinCategory(
  installer: Pick<Installer, 'sponsored' | 'lanes' | 'primaryLane'> & {
    generatorConfidence?: EvConfidence
  },
): PinCategory {
  if (installer.sponsored) return 'sponsored'
  return signalTier(legacyConfidence(installer))
}

export function pinCategoryForInstaller(
  installer: Pick<Installer, 'sponsored' | 'lanes' | 'primaryLane'> & {
    generatorConfidence?: EvConfidence
  },
): PinCategory {
  return pinCategory(installer)
}

/** @deprecated Compatibility aliases during Task 10 rename. Prefer Ev* names. */
export type GeneratorConfidence = EvConfidence
export const GENERATOR_REVIEW_FILTERS = EV_REVIEW_FILTERS
export type GeneratorReviewFilterId = EvReviewFilterId

export function generatorReviewCount(
  installer: Pick<Installer, 'evReviewCountByLane' | 'primaryLane'> & {
    generatorReviewCount?: number
  },
): number {
  if (typeof installer.generatorReviewCount === 'number') {
    return installer.generatorReviewCount
  }
  return evReviewCount(installer)
}

/** Temporary accessor until call sites use laneConfidence(). */
export function legacyConfidence(
  installer: Pick<Installer, 'lanes' | 'primaryLane'> & {
    generatorConfidence?: EvConfidence
  },
): EvConfidence {
  return (
    installer.generatorConfidence ||
    laneConfidence(installer, 'residential_l2') ||
    'medium'
  )
}

function sponsoredRank(installer: { sponsored?: boolean }): number {
  return installer.sponsored ? 0 : 1
}

export function sortInstallersBySignal<
  T extends Pick<Installer, 'lanes' | 'primaryLane' | 'reviewsCount' | 'slug' | 'sponsored' | 'evReviewCountByLane'> & {
    generatorConfidence?: EvConfidence
    generatorReviewCount?: number
  },
>(list: T[]): T[] {
  return [...list].sort((a, b) => {
    const sponsor = sponsoredRank(a) - sponsoredRank(b)
    if (sponsor !== 0) return sponsor
    const gen = evReviewCount(b) - evReviewCount(a)
    if (gen !== 0) return gen
    const signal =
      confidenceRank(legacyConfidence(a)) - confidenceRank(legacyConfidence(b))
    if (signal !== 0) return signal
    return (
      (b.reviewsCount || 0) - (a.reviewsCount || 0) || a.slug.localeCompare(b.slug)
    )
  })
}

export function confidenceLabel(c: EvConfidence): string {
  return c === 'explicit'
    ? 'Dedicated EV charger page'
    : c === 'high'
      ? 'Repeated site signal'
      : 'EV charger signal found'
}

export function confidenceDescription(c: EvConfidence): string {
  return c === 'explicit'
    ? 'Their website has a dedicated EV charger installation page. That is the strongest signal we track.'
    : c === 'high'
      ? 'Their website mentions EV charger installation multiple times. Worth a first call if the rest of the fit checks out.'
      : 'Their website mentions EV charger installation at least once. Use this as a starting point, then confirm scope directly.'
}
