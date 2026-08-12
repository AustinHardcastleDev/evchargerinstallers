import { installers } from './installers'
import type { Installer } from './installer-model'
import { BRAND_TAGS, type BrandTag } from './brand-meta'

export {
  BRAND_TAGS,
  MIN_NATIONAL_BRAND_INSTALLERS,
  MIN_STATE_BRAND_INSTALLERS,
  getBrandById,
  getBrandBySlug,
  type BrandTag,
} from './brand-meta'

export function getInstallersByBrandInState(
  brandId: string,
  stateSlug: string,
): Installer[] {
  return installers.filter(
    (i) => i.stateSlug === stateSlug && installerHasBrand(i, brandId),
  )
}

export function installerHasBrand(installer: Installer, brandId: string): boolean {
  const evidence = installer.brandEvidence || []
  if (
    evidence.some(
      (row) =>
        row.brand === brandId &&
        (row.relationship === 'claims_to_install' ||
          row.relationship === 'certified' ||
          row.relationship === 'authorized' ||
          row.relationship === 'listed_in_official_directory'),
    )
  ) {
    return true
  }
  // Mentions-only brands do not qualify for brand landing pages.
  return false
}

export function getInstallersByBrand(brandId: string): Installer[] {
  return installers.filter((i) => installerHasBrand(i, brandId))
}

export function brandCounts(): { brand: BrandTag; count: number }[] {
  return BRAND_TAGS.map((brand) => ({
    brand,
    count: getInstallersByBrand(brand.id).length,
  })).filter((row) => row.count > 0)
}
