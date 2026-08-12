import type { StateMeta } from '@/lib/installer-model'

/** Count-led SERP title for state directory pages. */
export function getStateSeoTitle(state: StateMeta): string {
  const n = state.totalListings
  if (n <= 0) return `EV Charger Installer Research in ${state.name}`
  if (n === 1) return `1 EV Charger Installer in ${state.name}`
  return `${n} EV Charger Installers in ${state.name}`
}

/**
 * Direct-response meta description for state directory pages.
 * Soft-capped to 155 chars by pageMetadata / seoDescription.
 */
export function getStateMetaDescription(state: StateMeta): string {
  const n = state.totalListings
  if (n <= 0) {
    return `We’re researching EV charger installers in ${state.name}. Check back as listings are added, or browse nearby states for shops with real website signal.`
  }
  if (n === 1) {
    return `1 ${state.name} installer with EV charger signal on their website. Use it as a starting point, then verify licensing, references, and fit yourself.`
  }
  const pageProof =
    state.explicitCount === 1
      ? '1 dedicated EV charger page'
      : `${state.explicitCount} dedicated EV charger pages`
  return `Compare ${n} ${state.name} EV charger installers. ${pageProof}. Website signal research, not paid rankings.`
}
