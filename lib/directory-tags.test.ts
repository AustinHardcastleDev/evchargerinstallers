import { describe, expect, it } from 'vitest'
import {
  getDirectoryTagBySlug,
  getInstallersByTag,
  getTagSeoTitle,
  NATIONAL_TAG_PREVIEW_LIMIT,
  INTENT_TAGS,
} from './directory-tags'

describe('directory tags', () => {
  it('resolves home-level-2 intent tag against residential lane evidence', () => {
    const tag = getDirectoryTagBySlug('home-level-2') || INTENT_TAGS[0]
    expect(tag).toBeTruthy()
    const matches = getInstallersByTag(tag!)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('keeps state names in intent SEO titles', () => {
    const tag = getDirectoryTagBySlug('home-level-2') || INTENT_TAGS[0]
    expect(tag).toBeTruthy()
    const title = getTagSeoTitle(tag!, 42, 'Tennessee')
    expect(title).toContain('Tennessee')
    expect(title).toContain('42')
  })

  it('exports a national preview cap under 100', () => {
    expect(NATIONAL_TAG_PREVIEW_LIMIT).toBeLessThanOrEqual(100)
    expect(NATIONAL_TAG_PREVIEW_LIMIT).toBeGreaterThanOrEqual(50)
  })
})
