/**
 * Drop public charging networks, station operators, and equipment OEMs from
 * the buyer directory. Local electrical contractors stay even when their
 * business name contains Tesla, ChargePoint, EV, or charger language.
 */

const NETWORK_HOST_SUFFIXES = [
  'tesla.com',
  'chargepoint.com',
  'electrifyamerica.com',
  'evgo.com',
  'blinkcharging.com',
  'shellrecharge.com',
  'flo.com',
  'volta.com',
]

const NETWORK_PATH_HINTS = [
  'supercharger',
  'findus',
  'destination',
  'locator',
  'stations',
  'map',
]

const STATION_CATEGORIES = new Set([
  'Electric vehicle charging station',
  'Gas station',
  'Parking garage',
  'Parking lot',
  'Automobile dealer',
  'Car dealer',
  'Car manufacturer',
])

const STATION_NAME_PATTERNS: RegExp[] = [
  /\bsupercharger\b/i,
  /\bdestination\s+charger\b/i,
  /\bpublic\s+charging\b/i,
  /\bev\s+charging\s+station\b(?!\s+contractor)/i,
  /\bcharging\s+network\b/i,
]

function websiteParts(website: string | null | undefined): {
  host: string
  path: string
} {
  if (!website) return { host: '', path: '' }
  try {
    const url = new URL(website.startsWith('http') ? website : `https://${website}`)
    return {
      host: url.hostname.toLowerCase().replace(/^www\./, ''),
      path: url.pathname.toLowerCase(),
    }
  } catch {
    return { host: '', path: '' }
  }
}

export function isStationOperatorWebsite(
  website: string | null | undefined,
): boolean {
  const { host, path } = websiteParts(website)
  if (!host) return false
  const networkHost = NETWORK_HOST_SUFFIXES.some(
    (suffix) => host === suffix || host.endsWith(`.${suffix}`),
  )
  if (!networkHost) return false
  if (NETWORK_PATH_HINTS.some((hint) => path.includes(hint))) return true
  // Corporate network domains without a local contractor path.
  return true
}

export function isStationOrOperatorListing(installer: {
  name: string
  categoryName?: string | null
  website?: string | null
}): boolean {
  const category = (installer.categoryName || '').trim()
  if (category === 'Electric vehicle charging station contractor') return false
  if (STATION_CATEGORIES.has(category)) return true
  if (isStationOperatorWebsite(installer.website)) return true
  if (STATION_NAME_PATTERNS.some((pattern) => pattern.test(installer.name))) {
    return true
  }
  return false
}

export function withoutStationOperators<T extends {
  name: string
  categoryName?: string | null
  website?: string | null
}>(rows: T[]): T[] {
  return rows.filter((row) => !isStationOrOperatorListing(row))
}
