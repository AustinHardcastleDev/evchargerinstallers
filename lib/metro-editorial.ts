import type { Installer } from './installer-model'
import type { Metro } from './metros'
import { METRO_RADIUS_MILES, getMetrosByState } from './metros'
import { getStateEditorial } from './state-editorial'
import metroEditorialData from './data/metro-editorial.json'

export type MetroEditorial = {
  intro: string
  marketNote: string
  cityClusters: { city: string; count: number }[]
  metaDescription?: string
  source: 'flash' | 'composed'
}

type GeneratedMetroEditorial = {
  intro?: string
  marketNote?: string
  metaDescription?: string
  generatedAt?: string
  model?: string
}

const generatedEditorial = metroEditorialData as Record<
  string,
  GeneratedMetroEditorial
>

export function metroEditorialKey(metro: Metro): string {
  return `${metro.stateSlug}/${metro.slug}`
}

function getGeneratedMetroEditorial(
  metro: Metro,
): GeneratedMetroEditorial | undefined {
  const entry = generatedEditorial[metroEditorialKey(metro)]
  if (!entry?.intro?.trim() || !entry?.marketNote?.trim()) return undefined
  return entry
}

function cityClusters(
  nearby: Installer[],
  limit = 4,
): { city: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const installer of nearby) {
    const city = (installer.city || '').trim()
    if (!city) continue
    counts.set(city, (counts.get(city) || 0) + 1)
  }
  return [...counts.entries()]
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city))
    .slice(0, limit)
}

function densityLabel(count: number): 'thin' | 'moderate' | 'solid' | 'busy' {
  if (count >= 80) return 'busy'
  if (count >= 35) return 'solid'
  if (count >= 12) return 'moderate'
  return 'thin'
}

function variantIndex(seed: string, modulo: number): number {
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return hash % modulo
}

function withoutEmDashes(value: string): string {
  return value.replace(/\u2014/g, ', ').replace(/\s+,/g, ',').replace(/,\s*,/g, ',')
}

function formatClusters(
  clusters: { city: string; count: number }[],
): string | null {
  if (clusters.length === 0) return null
  const parts = clusters.map((row) => `${row.city} (${row.count})`)
  if (parts.length === 1) return parts[0]
  if (parts.length === 2) return `${parts[0]} and ${parts[1]}`
  return `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}`
}

function fuelSentence(
  metro: Metro,
  fuel: NonNullable<ReturnType<typeof getStateEditorial>>['fuel'],
): string | null {
  if (!fuel) return null
  const gas = fuel.utilityGasPct
  const propane = fuel.propanePct
  const electric = fuel.electricPct

  if (fuel.bucket === 'gas-heavy' || gas >= 50) {
    return `Around ${metro.name}, utility gas is common statewide (${gas}% of homes), so many whole-house quotes start with a natural-gas run rather than a tank package.`
  }
  if (propane >= 10 || fuel.bucket === 'propane-heavy') {
    return `${metro.state} still leans propane in many counties (${propane}% statewide), so buyers near ${metro.name} should ask early whether the quote assumes utility gas or a propane tank.`
  }
  if (electric >= 55) {
    return `${metro.state}'s housing stock is heavily electric heat (${electric}% statewide). That often shows up in load calcs and transfer-switch sizing for ${metro.name}-area homes.`
  }
  return `Fuel paths near ${metro.name} split like the rest of ${metro.state}: utility gas ${gas}%, electric ${electric}%, propane ${propane}% (ACS 2024). Ask which path the quote assumes before you compare prices.`
}

function outageSentence(
  metro: Metro,
  outage: NonNullable<ReturnType<typeof getStateEditorial>>['outage'],
): string | null {
  if (!outage) return null
  const hours = outage.saidi2024Hours
  const vsNational =
    hours > 10.2
      ? 'above the 10.2-hour U.S. average'
      : hours < 10.2
        ? 'below the 10.2-hour U.S. average'
        : 'near the U.S. average'
  return `In 2024, ${metro.state} electricity customers averaged ${hours} hours without power (${vsNational}). Local outage drivers in this research pass: ${outage.dominantDriver.toLowerCase()}.`
}

/**
 * Prefer Flash-written landscape intros from metro-editorial.json.
 * Falls back to the deterministic composer when a metro is missing.
 */
export function getMetroEditorial(
  metro: Metro,
  nearby: Installer[],
): MetroEditorial {
  const generated = getGeneratedMetroEditorial(metro)
  if (generated) {
    return {
      intro: withoutEmDashes(generated.intro!.trim()),
      marketNote: withoutEmDashes(generated.marketNote!.trim()),
      cityClusters: cityClusters(nearby),
      metaDescription: generated.metaDescription?.trim()
        ? withoutEmDashes(generated.metaDescription.trim())
        : undefined,
      source: 'flash',
    }
  }
  return composeMetroEditorial(metro, nearby)
}

/**
 * Unique metro intro + market note composed from nearby installer signal
 * and state editorial facts. Deterministic for a given metro + nearby set.
 */
export function composeMetroEditorial(
  metro: Metro,
  nearby: Installer[],
): MetroEditorial {
  const clusters = cityClusters(nearby)
  const clusterPhrase = formatClusters(clusters)
  const explicit = nearby.filter((i) => i.generatorConfidence === 'explicit').length
  const high = nearby.filter((i) => i.generatorConfidence === 'high').length
  const medium = nearby.filter((i) => i.generatorConfidence === 'medium').length
  const density = densityLabel(nearby.length)
  const siblings = getMetrosByState(metro.stateSlug).filter(
    (entry) => entry.slug !== metro.slug,
  )
  const isLargest =
    getMetrosByState(metro.stateSlug)[0]?.slug === metro.slug &&
    getMetrosByState(metro.stateSlug).length > 1
  const editorial = getStateEditorial(metro.stateSlug)
  const v = variantIndex(`${metro.stateSlug}:${metro.slug}`, 3)

  const leadOptions = [
    `Home EV charger installation near ${metro.name} usually means calling across electricians, HVAC shops, and EV charger companies within about ${METRO_RADIUS_MILES} miles, not just offices inside city limits.`,
    `${metro.name}, ${metro.stateAbbr} buyers looking for EV charger installation hit the same category blur as everywhere else: the useful shops are mixed in with general electrical and HVAC work.`,
    `If you need EV charger installation near ${metro.name}, start with shops that show home Level 2 EV charger work on their own websites, then confirm scope and travel from your address.`,
  ]

  const countOptions = [
    `This directory lists ${nearby.length} researched installers with offices inside that ${METRO_RADIUS_MILES}-mile ring (${explicit} with a dedicated EV charger page, ${high} with repeated signal, ${medium} with at least one clear mention).`,
    `Within ${METRO_RADIUS_MILES} miles of ${metro.name} we found ${nearby.length} researched listings: ${explicit} dedicated EV charger pages, ${high} repeated-signal shops, and ${medium} single-mention starts.`,
    `${nearby.length} researched installers sit within ${METRO_RADIUS_MILES} miles of ${metro.name}. ${explicit} lead with a dedicated EV charger page; ${high + medium} more show EV charger signal worth a first call.`,
  ]

  let densitySentence = ''
  if (density === 'busy') {
    densitySentence = `That is a busy metro list by national standards, so filters for EV-specific reviews help more here than in thinner markets.`
  } else if (density === 'solid') {
    densitySentence = `That is a solid metro shortlist: enough options to compare scopes without drowning in statewide noise.`
  } else if (density === 'moderate') {
    densitySentence = `Coverage is moderate. Widen to the full ${metro.state} list if your ZIP sits on the edge of the ring.`
  } else {
    densitySentence = `Coverage is thin inside the ring. Use the statewide ${metro.state} page if you need a wider net.`
  }

  const clusterSentence = clusterPhrase
    ? v === 0
      ? `Directory pins cluster most around ${clusterPhrase}.`
      : v === 1
        ? `The densest city clusters in this radius are ${clusterPhrase}.`
        : `Most of the nearby listings concentrate in ${clusterPhrase}.`
    : ''

  const sizeSentence = isLargest
    ? `${metro.name} is the largest metro page we publish in ${metro.state}.`
    : siblings.length > 0
      ? `Other ${metro.stateAbbr} metro pages include ${siblings
          .slice(0, 3)
          .map((s) => s.name)
          .join(', ')}${siblings.length > 3 ? ', and more' : ''}.`
      : `${metro.name} is currently the only metro page we publish for ${metro.state}.`

  const intro = [
    leadOptions[v],
    countOptions[v],
    densitySentence,
    clusterSentence,
    sizeSentence,
    'Sorted by distance, then EV-specific review count. Website signal is a starting filter, not an endorsement.',
  ]
    .filter(Boolean)
    .join(' ')

  const fuel = fuelSentence(metro, editorial?.fuel)
  const outage = outageSentence(metro, editorial?.outage)
  const nec = editorial?.necEdition
    ? `Code context for ${metro.state} in this research pass: NEC ${withoutEmDashes(editorial.necEdition)}. Confirm the edition your AHJ enforces before you approve a design.`
    : `Confirm electrical and fuel permits with the local AHJ serving ${metro.name}. Statewide notes are a starting point, not a substitute for the inspector.`

  const marketNote = [outage, fuel, nec].filter(Boolean).join(' ')

  // Prefer a tight market note even if state editorial is missing pieces.
  const fallbackNote = `Ask who holds the electrical license, how they size the circuit for your panel, and how warranty service works after install. Use the ${nearby.length} researched listings near ${metro.name} as a place to start, then verify recent Level 2 work yourself.`

  return {
    intro: withoutEmDashes(intro),
    marketNote: withoutEmDashes(marketNote.trim() || fallbackNote),
    cityClusters: clusters,
    source: 'composed',
  }
}

export function getMetroSeoTitle(metro: Metro, nearbyCount: number): string {
  if (nearbyCount <= 0) {
    return `EV Charger Installation Near ${metro.name}, ${metro.stateAbbr}`
  }
  if (nearbyCount === 1) {
    return `1 EV Charger Installer Near ${metro.name}, ${metro.stateAbbr}`
  }
  return `${nearbyCount} EV Charger Installers Near ${metro.name}`
}

export function getMetroMetaDescription(
  metro: Metro,
  nearbyCount: number,
  explicitCount: number,
): string {
  const generated = getGeneratedMetroEditorial(metro)
  if (generated?.metaDescription?.trim()) {
    return withoutEmDashes(generated.metaDescription.trim()).slice(0, 160)
  }
  const pageProof =
    explicitCount === 1
      ? '1 dedicated EV charger page'
      : `${explicitCount} dedicated EV charger pages`
  return `Compare ${nearbyCount} researched EV charger installers within ${METRO_RADIUS_MILES} miles of ${metro.name}, ${metro.stateAbbr}. ${pageProof}. Sorted by distance and website signal.`
}
