/**
 * Drop EVSE equipment manufacturers and corporate OEM locations from the buyer
 * directory. Independent installers stay even when they mention a brand.
 */

const OEM_HOST_SUFFIXES = [
  'tesla.com',
  'chargepoint.com',
  'wallbox.com',
  'emporiaenergy.com',
  'enphase.com',
  'autelenergy.com',
  'blinkcharging.com',
  'flo.com',
]

const OEM_CORP_CATEGORIES = new Set([
  'Manufacturer',
  'Corporate office',
  'Warehouse',
  'Distribution service',
  'Electrical supply store',
])

const OEM_NAME_PATTERNS: RegExp[] = [
  /^tesla(\s+motors|\s+inc\.?)?$/i,
  /^chargepoint(\s+inc\.?|\s+holdings)?$/i,
  /^wallbox(\s+nv|\s+inc\.?)?$/i,
  /^emporia\s+energy\b/i,
  /^enphase\s+energy\b/i,
  /^autel\s+energy\b/i,
  /^blink\s+charging\b/i,
]

function websiteHost(website: string | null | undefined): string {
  if (!website) return ''
  try {
    const host = new URL(website).hostname.toLowerCase()
    return host.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export function isOemCorporateWebsite(website: string | null | undefined): boolean {
  const host = websiteHost(website)
  if (!host) return false
  return OEM_HOST_SUFFIXES.some(
    (suffix) => host === suffix || host.endsWith(`.${suffix}`),
  )
}

function nameLooksLikeOemCorporate(name: string): boolean {
  const trimmed = name.trim()
  return OEM_NAME_PATTERNS.some((pattern) => pattern.test(trimmed))
}

export function isManufacturerListing(installer: {
  name: string
  categoryName?: string | null
  website?: string | null
}): boolean {
  const category = (installer.categoryName || '').trim()
  if (category === 'Manufacturer') return true
  if (category === 'Electrical supply store') return true
  if (isOemCorporateWebsite(installer.website)) return true
  if (
    OEM_CORP_CATEGORIES.has(category) &&
    nameLooksLikeOemCorporate(installer.name)
  ) {
    return true
  }
  if (nameLooksLikeOemCorporate(installer.name) && isOemCorporateWebsite(installer.website)) {
    return true
  }
  if (
    nameLooksLikeOemCorporate(installer.name) &&
    category !== 'Electrician' &&
    category !== 'Electric vehicle charging station contractor'
  ) {
    const lower = installer.name.toLowerCase()
    if (/\bof\b|\bin\b/.test(lower)) return false
    return true
  }
  return false
}

export function withoutManufacturers<T extends {
  name: string
  categoryName?: string | null
  website?: string | null
}>(rows: T[]): T[] {
  return rows.filter((row) => !isManufacturerListing(row))
}
