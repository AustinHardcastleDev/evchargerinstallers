export const SITE = {
  name: 'ChargerInstallerList',
  domain: 'www.chargerinstallerlist.com',
  url: 'https://www.chargerinstallerlist.com',
  tagline: "Find someone who's installed one before.",
  description:
    'A buyer-first directory of EV charger installers across 50 states. Find electricians whose websites show Level 2 and home EV charging work.',
}

function resolveSiteUrl(raw?: string): string {
  const configured = raw?.replace(/\/$/, '')
  if (!configured || configured.includes('vercel.app')) return SITE.url
  return configured
}

export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

/** Base path for the directory. */
export const LIST_BASE = '/installers'

export const NAV = [
  { href: '/', label: 'Home' },
  { href: LIST_BASE, label: 'States' },
  { href: `${LIST_BASE}/near-me`, label: 'Near Me' },
  { href: '/guides/ev-charger-installation-cost', label: 'Cost Guide' },
  { href: '/about', label: 'About' },
  { href: '/for-installers', label: 'For Installers' },
]

/** Top nav omits States and For Installers so the bar stays one line on mobile. */
export const HEADER_NAV = NAV.filter(
  (item) => item.href !== LIST_BASE && item.href !== '/for-installers',
)
