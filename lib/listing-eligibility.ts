/**
 * Drop supply / rental / warehouse pins that are not residential
 * EV charger installers. Station operators and OEM retail-only pages stay out.
 */

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

const SUPPLY_OR_RENTAL_NAME_PATTERNS: RegExp[] = [
  /^united rentals\b/i,
  /^sunbelt rentals\b/i,
  /^ferguson(\s+hvac)?\s+supply\b/i,
  /^elliott electric supply\b/i,
  /^briggs equipment\b/i,
  /^lincoln electric supply\b/i,
]

export function isSupplyOrRentalOnlyListing(installer: {
  name: string
  categoryName?: string | null
}): boolean {
  const category = (installer.categoryName || '').trim()
  if (SUPPLY_ONLY_CATEGORIES.has(category)) return true
  return SUPPLY_OR_RENTAL_NAME_PATTERNS.some((pattern) =>
    pattern.test(installer.name.trim()),
  )
}

export function withoutSupplyOrRentalOnly<
  T extends { name: string; categoryName?: string | null },
>(installers: T[]): T[] {
  return installers.filter((installer) => !isSupplyOrRentalOnlyListing(installer))
}
