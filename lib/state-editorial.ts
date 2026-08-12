import editorialData from './data/state-editorial.json'

export type StateEditorial = {
  marketOverview: string
  /** @deprecated Prefer homeInstallContext for EV copy. */
  costContext: string
  homeInstallContext?: string
  buyerNote: string
  fuel?: {
    utilityGasPct: number
    propanePct: number
    electricPct: number
    fuelOilPct: number
    bucket: string
  }
  outage?: {
    saidi2024Hours: number
    dominantDriver: string
  }
  necEdition?: string
  licensingNote?: string
  verifiedAsOf?: string
  generatedAt?: string
  source?: string
  model?: string
  metaDescription?: string
}

const editorial = editorialData as Record<string, StateEditorial>

export function getStateEditorial(stateSlug: string): StateEditorial | undefined {
  const entry = editorial[stateSlug]
  if (!entry?.marketOverview?.trim()) return undefined
  return entry
}

export function hasStateEditorial(stateSlug: string): boolean {
  return Boolean(getStateEditorial(stateSlug))
}
