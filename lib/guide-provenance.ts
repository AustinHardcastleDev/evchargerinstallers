import { absoluteUrl } from './seo'

/** Shared editorial provenance for buyer guides. */
export const GUIDE_REVIEWED_LABEL = 'Reviewed August 2026'
export const GUIDE_DATE_PUBLISHED = '2026-08-11'
export const GUIDE_DATE_MODIFIED = '2026-08-11'

export const GUIDE_AUTHOR = {
  name: 'ChargerInstallerList Editorial',
  url: '/about',
}

export type GuideSource = {
  label: string
  href: string
}

export const AFDC_HOME: GuideSource = {
  label: 'U.S. DOE Alternative Fuels Data Center: Home charging',
  href: 'https://afdc.energy.gov/fuels/electricity-charging-home',
}

export const AFDC_LAWS: GuideSource = {
  label: 'AFDC laws and incentives finder',
  href: 'https://afdc.energy.gov/laws',
}

export const DSIRE: GuideSource = {
  label: 'DSIRE: Database of State Incentives for Renewables & Efficiency',
  href: 'https://www.dsireusa.org/',
}

export const NEC_625: GuideSource = {
  label: 'NFPA 70 (NEC) Article 625 — Electric Vehicle Power Transfer Systems',
  href: 'https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70',
}

/** Default citations when a guide does not pass a custom list. */
export const DEFAULT_GUIDE_SOURCES: GuideSource[] = [AFDC_HOME, NEC_625]

/** Per-guide citation map for Article schema + visible source lists. */
export const GUIDE_CLAIMS: Record<string, GuideSource[]> = {
  'ev-charger-installation-cost': [AFDC_HOME, AFDC_LAWS, DSIRE],
  'what-size-ev-charger': [AFDC_HOME, NEC_625],
  'questions-to-ask-ev-charger-installer': [AFDC_HOME, NEC_625],
  'ev-charger-installation-process': [AFDC_HOME, NEC_625],
  'panel-upgrade-vs-load-management': [AFDC_HOME, NEC_625],
  'hardwired-vs-nema-14-50': [AFDC_HOME, NEC_625],
  'ev-charger-permits-and-codes': [NEC_625, AFDC_HOME],
  'j3400-vs-j1772-home-charging': [AFDC_HOME],
  'multifamily-condo-ev-charging': [AFDC_HOME],
  'rebates-and-tax-credits': [AFDC_LAWS, DSIRE, AFDC_HOME],
}

export function sourcesForGuide(slug: string): GuideSource[] {
  return GUIDE_CLAIMS[slug] || DEFAULT_GUIDE_SOURCES
}

export function guideArticleJsonLd({
  title,
  description,
  slug,
  sources = DEFAULT_GUIDE_SOURCES,
}: {
  title: string
  description: string
  slug: string
  sources?: GuideSource[]
}) {
  const url = absoluteUrl(`/guides/${slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: GUIDE_DATE_PUBLISHED,
    dateModified: GUIDE_DATE_MODIFIED,
    author: {
      '@type': 'Organization',
      name: GUIDE_AUTHOR.name,
      url: absoluteUrl(GUIDE_AUTHOR.url),
    },
    citation: sources.map((s) => ({
      '@type': 'CreativeWork',
      name: s.label,
      url: s.href,
    })),
  }
}
