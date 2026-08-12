#!/usr/bin/env node
/**
 * Regenerates lib/data/homepage-discovery.json with one installer per state
 * for the current week. Intended for weekly CI so the homepage sample
 * actually rotates on the live static site.
 *
 * Usage: node scripts/rotate-homepage-discovery.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outPath = join(root, 'lib/data/homepage-discovery.json')

const OEM_HOST_SUFFIXES = [
  'tesla.com',
  'chargepoint.com',
  'wallbox.com',
  'emporiaenergy.com',
  'enphase.com',
  'clippercreek.com',
  'electrifyamerica.com',
  'evgo.com',
  'blinkcharging.com',
]

const SUPPLY_ONLY_CATEGORIES = new Set([
  'Electrical supply store',
  'Industrial equipment supplier',
  'Equipment rental agency',
  'Electrical equipment supplier',
  'Power plant equipment supplier',
  'Wholesaler',
  'Equipment supplier',
  'Construction equipment supplier',
  'Building materials supplier',
  'Material handling equipment supplier',
  'Irrigation equipment supplier',
  'Warehouse',
  'Distribution service',
  'Corporate office',
  'Auto parts store',
  'Electric motor store',
])

const SUPPLY_OR_RENTAL_NAME_PATTERNS = [
  /^united rentals\b/i,
  /^sunbelt rentals\b/i,
  /^ferguson(\s+hvac)?\s+supply\b/i,
  /^elliott electric supply\b/i,
  /^briggs equipment\b/i,
  /^lincoln electric supply\b/i,
]

const OEM_NAME_PATTERNS = [
  /^cummins(\s+sales\s+and\s+service|\s+inc\.?|\s+onan|\s+power-gen)?$/i,
  /^generac(\s+power\s+systems|\s+power\s+products|\s+distribution|\s+mobile|\s+oshkosh|\s+clean\s+energy|\s+customer|\s+janesville)?/i,
  /^briggs\s*&\s*stratton(\s+corporation|\s*,?\s*llc)?$/i,
  /^kohler(\s+generator\s+warehouse|\s+power)?$/i,
  /^rehlko\b/i,
  /^champion\s+power\s+equipment\b/i,
  /^firman\s+power\s+equipment\b/i,
]

function websiteHost(website) {
  if (!website) return ''
  try {
    return new URL(website).hostname.toLowerCase().replace(/^www\./, '')
  } catch {
    return ''
  }
}

function isOemCorporateWebsite(website) {
  const host = websiteHost(website)
  if (!host) return false
  return OEM_HOST_SUFFIXES.some(
    (suffix) => host === suffix || host.endsWith(`.${suffix}`),
  )
}

function isManufacturerListing(installer) {
  const category = (installer.categoryName || '').trim()
  if (category === 'Manufacturer') return true
  if (isOemCorporateWebsite(installer.website)) return true
  if (OEM_NAME_PATTERNS.some((pattern) => pattern.test(installer.name.trim()))) {
    if (
      category === 'Electric generator shop' ||
      category === 'HVAC contractor' ||
      category === 'Electrical installation service'
    ) {
      return false
    }
    if (
      /distribution|warehouse|corporate|headquarters|customer contact|engineering center/i.test(
        installer.name,
      )
    ) {
      return true
    }
    if (category !== 'Electrician') return true
  }
  return false
}

function isSupplyOrRentalOnlyListing(installer) {
  const category = (installer.categoryName || '').trim()
  if (SUPPLY_ONLY_CATEGORIES.has(category)) return true
  return SUPPLY_OR_RENTAL_NAME_PATTERNS.some((pattern) =>
    pattern.test(installer.name.trim()),
  )
}

function confidenceRank(confidence) {
  return confidence === 'explicit' ? 0 : confidence === 'high' ? 1 : 2
}

function weekKey(now = Date.now()) {
  return Math.floor(now / (7 * 24 * 60 * 60 * 1000))
}

function pickSample(source, week) {
  const stateSlugs = [...new Set(source.map((i) => i.stateSlug))].sort()
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
      return stateInstallers[week % stateInstallers.length]
    })
    .filter(Boolean)
}

const raw = JSON.parse(
  readFileSync(join(root, 'lib/data/installers.json'), 'utf8'),
)
const directory = raw.filter(
  (installer) =>
    !isManufacturerListing(installer) && !isSupplyOrRentalOnlyListing(installer),
)

const week = weekKey()
const sample = pickSample(directory, week)
const payload = {
  weekKey: week,
  generatedAt: new Date().toISOString(),
  installerIds: sample.map((installer) => installer.id),
}

let previous = null
try {
  previous = JSON.parse(readFileSync(outPath, 'utf8'))
} catch {
  previous = null
}

const unchanged =
  previous &&
  previous.weekKey === payload.weekKey &&
  Array.isArray(previous.installerIds) &&
  previous.installerIds.length === payload.installerIds.length &&
  previous.installerIds.every((id, index) => id === payload.installerIds[index])

writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

if (unchanged) {
  console.log(
    `Homepage discovery snapshot unchanged for week ${week} (${payload.installerIds.length} installers).`,
  )
  process.exit(0)
}

console.log(
  `Wrote homepage discovery snapshot for week ${week}: ${payload.installerIds.length} installers → ${outPath}`,
)
process.exit(0)
