import discoveryData from './data/homepage-discovery.json'
import { installers, type Installer } from './installers'
import { pickHomepageDiscoverySample } from './internal-links'

export type HomepageDiscoverySnapshot = {
  weekKey: number
  generatedAt: string
  installerIds: string[]
}

const snapshot = discoveryData as HomepageDiscoverySnapshot

/**
 * Homepage “one per state” list. Prefer the committed weekly snapshot so
 * production actually rotates when the GitHub Action regenerates the file.
 */
export function getHomepageDiscoverySample(): Installer[] {
  const byId = new Map(installers.map((installer) => [installer.id, installer]))
  const fromSnapshot = snapshot.installerIds
    .map((id) => byId.get(id))
    .filter((installer): installer is Installer => Boolean(installer))

  if (fromSnapshot.length >= Math.min(40, new Set(installers.map((i) => i.stateSlug)).size)) {
    return fromSnapshot
  }

  return pickHomepageDiscoverySample(installers, snapshot.weekKey)
}

export function getHomepageDiscoveryMeta(): {
  weekKey: number
  generatedAt: string
  count: number
} {
  return {
    weekKey: snapshot.weekKey,
    generatedAt: snapshot.generatedAt,
    count: snapshot.installerIds.length,
  }
}
