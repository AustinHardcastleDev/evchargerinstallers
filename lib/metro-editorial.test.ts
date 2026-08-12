import { describe, expect, it } from 'vitest'
import {
  composeMetroEditorial,
  getMetroEditorial,
  getMetroMetaDescription,
  getMetroSeoTitle,
  metroEditorialKey,
} from './metro-editorial'
import { getInstallersNearMetro, metros } from './metros'
import metroEditorialData from './data/metro-editorial.json'

describe('metro editorial', () => {
  it('produces a unique composed intro for every metro page', () => {
    const intros = new Set<string>()
    for (const metro of metros) {
      const nearby = getInstallersNearMetro(metro)
      const editorial = composeMetroEditorial(metro, nearby)
      expect(editorial.intro.length).toBeGreaterThan(120)
      expect(editorial.intro).toContain(metro.name)
      expect(editorial.intro).not.toContain('—')
      expect(editorial.marketNote.length).toBeGreaterThan(40)
      expect(editorial.marketNote).not.toContain('—')
      expect(editorial.source).toBe('composed')
      intros.add(editorial.intro)
    }
    expect(intros.size).toBe(metros.length)
  })

  it('prefers Flash intros when present in metro-editorial.json', () => {
    const flashKeys = Object.keys(metroEditorialData).filter((key) => {
      const row = (metroEditorialData as Record<string, { intro?: string }>)[key]
      return Boolean(row?.intro?.trim())
    })
    if (flashKeys.length === 0) {
      // Flash metro editorial is generated in Task 13; composed intros cover launch until then.
      expect(flashKeys.length).toBe(0)
      return
    }

    for (const key of flashKeys.slice(0, 20)) {
      const metro = metros.find((m) => metroEditorialKey(m) === key)
      expect(metro).toBeTruthy()
      if (!metro) continue
      const nearby = getInstallersNearMetro(metro)
      const editorial = getMetroEditorial(metro, nearby)
      expect(editorial.source).toBe('flash')
      expect(editorial.intro).toContain(metro.name)
      expect(editorial.intro).not.toContain('—')
      expect(editorial.marketNote.length).toBeGreaterThan(40)
    }
  })

  it('keeps metro SEO titles short enough to retain the city name', () => {
    for (const metro of metros.slice(0, 40)) {
      const nearby = getInstallersNearMetro(metro)
      const title = getMetroSeoTitle(metro, nearby.length)
      expect(title).toContain(metro.name)
      const description = getMetroMetaDescription(
        metro,
        nearby.length,
        nearby.filter((i) => i.generatorConfidence === 'explicit').length,
      )
      expect(description).toContain(metro.name)
      expect(description.length).toBeLessThanOrEqual(160)
    }
  })
})
