export type BrandTag = {
  id: string
  slug: string
  label: string
  shortLabel: string
  description: string
}

export type BrandMeta = BrandTag

export const MIN_NATIONAL_BRAND_INSTALLERS = 10
export const MIN_STATE_BRAND_INSTALLERS = 3

/** Client-safe brand metadata. Counts stay on the server. */
export const BRAND_TAGS: BrandTag[] = [
  {
    id: 'tesla',
    slug: 'tesla',
    label: 'Tesla',
    shortLabel: 'Tesla',
    description:
      'Installers whose websites show Tesla Wall Connector or Tesla charger install language. Website mention is not manufacturer authorization.',
  },
  {
    id: 'chargepoint',
    slug: 'chargepoint',
    label: 'ChargePoint',
    shortLabel: 'ChargePoint',
    description:
      'Installers whose websites show ChargePoint install language. Confirm product line and commissioning scope directly.',
  },
  {
    id: 'wallbox',
    slug: 'wallbox',
    label: 'Wallbox',
    shortLabel: 'Wallbox',
    description:
      'Installers whose websites show Wallbox install language, including Pulsar and related home units.',
  },
  {
    id: 'emporia',
    slug: 'emporia',
    label: 'Emporia',
    shortLabel: 'Emporia',
    description:
      'Installers whose websites show Emporia charger install language.',
  },
  {
    id: 'enphase',
    slug: 'enphase',
    label: 'Enphase',
    shortLabel: 'Enphase',
    description:
      'Installers whose websites show Enphase or ClipperCreek EV charger install language.',
  },
  {
    id: 'autel',
    slug: 'autel',
    label: 'Autel',
    shortLabel: 'Autel',
    description:
      'Installers whose websites show Autel EV charger install language.',
  },
  {
    id: 'flo',
    slug: 'flo',
    label: 'FLO',
    shortLabel: 'FLO',
    description:
      'Installers whose websites show FLO charger install language.',
  },
  {
    id: 'blink',
    slug: 'blink',
    label: 'Blink',
    shortLabel: 'Blink',
    description:
      'Installers whose websites show Blink charger install language.',
  },
]

export const BRAND_META = BRAND_TAGS

export function getBrandBySlug(slug: string): BrandTag | undefined {
  return BRAND_TAGS.find((b) => b.slug === slug)
}

export function getBrandById(id: string): BrandTag | undefined {
  return BRAND_TAGS.find((b) => b.id === id)
}

export function brandMetaBySlug(slug: string): BrandTag | undefined {
  return getBrandBySlug(slug)
}
