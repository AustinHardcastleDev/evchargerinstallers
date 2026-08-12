import installersData from './data/installers.json'
import statesData from './data/states.json'
import {
  sortInstallersBySignal,
  type Installer,
  type InstallerListItem,
  type InstallerMapItem,
  type StateMeta,
} from './installer-model'
import { withoutManufacturers } from './manufacturer-filter'
import { withoutStationOperators } from './station-operator-filter'
import { withoutSupplyOrRentalOnly } from './listing-eligibility'

export * from './installer-model'

/** Buyer-facing directory only. OEM corp + station/network + supply/rental-only pins excluded. */
export const installers = withoutStationOperators(
  withoutSupplyOrRentalOnly(
    withoutManufacturers(installersData as unknown as Installer[]),
  ),
)
export const states = statesData as unknown as Record<string, StateMeta>

/** @deprecated National directory is live; kept for a few legacy links. */
export const SAMPLE_STATE_SLUG = 'tn'

export const allStatesList: StateMeta[] = Object.values(states).sort(
  (a, b) => b.totalListings - a.totalListings,
)

export const NATIONAL_TOTAL = allStatesList.reduce(
  (sum, s) => sum + (s.totalListings || 0),
  0,
)

export const NATIONAL_EXPLICIT = allStatesList.reduce(
  (sum, s) => sum + (s.explicitCount || 0),
  0,
)

export const TOTAL_INSTALLERS = installers.length
export const TOTAL_STATES = Object.keys(states).length
export const LIVE_INSTALLERS = installers.length

export function getStateBySlug(slug: string): StateMeta | undefined {
  return states[slug]
}

export function getInstallersByState(stateSlug: string): Installer[] {
  return sortInstallersBySignal(
    installers.filter((i) => i.stateSlug === stateSlug),
  )
}

export function getInstallerBySlug(
  stateSlug: string,
  slug: string,
): Installer | undefined {
  return installers.find((i) => i.stateSlug === stateSlug && i.slug === slug)
}

export function getNearbyInstallers(
  installer: Pick<Installer, 'id' | 'stateSlug' | 'slug' | 'lat' | 'lng' | 'city'>,
  limit = 8,
): Installer[] {
  const same = installers.filter(
    (item) =>
      item.stateSlug === installer.stateSlug && item.slug !== installer.slug,
  )
  same.sort((a, b) => {
    if (installer.city) {
      const aMatch = a.city === installer.city ? 0 : 1
      const bMatch = b.city === installer.city ? 0 : 1
      if (aMatch !== bMatch) return aMatch - bMatch
    }
    return (b.reviewsCount || 0) - (a.reviewsCount || 0)
  })
  return same.slice(0, limit)
}

export function toInstallerListItem(installer: Installer): InstallerListItem {
  return {
    id: installer.id,
    slug: installer.slug,
    name: installer.name,
    city: installer.city,
    state: installer.state,
    stateAbbr: installer.stateAbbr,
    stateSlug: installer.stateSlug,
    lat: installer.lat,
    lng: installer.lng,
    reviewsCount: installer.reviewsCount,
    totalScore: installer.totalScore,
    categoryName: installer.categoryName,
    primaryLane: installer.primaryLane || 'residential_l2',
    lanes: installer.lanes || {},
    writeup: installer.writeup,
    reviewTags: installer.reviewTags,
    primaryBrands: installer.primaryBrands,
    evReviewCountByLane: installer.evReviewCountByLane,
    sponsored: installer.sponsored,
    generatorConfidence: installer.generatorConfidence || installer.lanes?.residential_l2?.confidence,
    generatorReviewCount: installer.generatorReviewCount || installer.evReviewCountByLane?.residential_l2,
  }
}

export function toInstallerMapItem(installer: Installer): InstallerMapItem {
  return {
    id: installer.id,
    slug: installer.slug,
    name: installer.name,
    city: installer.city,
    stateAbbr: installer.stateAbbr,
    stateSlug: installer.stateSlug,
    lat: installer.lat,
    lng: installer.lng,
    reviewsCount: installer.reviewsCount,
    totalScore: installer.totalScore,
    generatorConfidence: installer.generatorConfidence || installer.lanes?.residential_l2?.confidence,
    primaryLane: installer.primaryLane || 'residential_l2',
    lanes: installer.lanes || {},
    sponsored: installer.sponsored,
  }
}

export const REGIONS: Record<string, string[]> = {
  Southeast: ['tn', 'ky', 'al', 'ga', 'fl', 'sc', 'la', 'ms'],
  'Rural Heartland': ['tx', 'ok', 'ar', 'mo', 'ks', 'ia', 'ne', 'nd', 'sd'],
  'Great Lakes / Lower Midwest': ['mi', 'in', 'oh', 'il', 'wi', 'mn'],
  'Mid-Atlantic / Appalachia': ['nc', 'va', 'wv', 'pa', 'md', 'de'],
  Northeast: ['ny', 'nj', 'ma', 'ct', 'ri', 'me', 'nh', 'vt'],
  'Mountain West': ['co', 'id', 'mt', 'ut', 'wy'],
  'Southwest / Desert': ['az', 'nv', 'nm'],
  Pacific: ['ca', 'or', 'wa', 'ak', 'hi'],
}

export function isLiveState(stateSlug: string): boolean {
  return Boolean(states[stateSlug])
}
