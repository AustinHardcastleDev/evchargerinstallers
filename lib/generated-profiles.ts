import generatedData from './data/generated-profiles.json'
import type { Installer } from './installer-model'

export type GeneratedProfileCopy = {
  subhead: string
  lead: string
  reviewSummary: string | null
  /** Legacy generator field name; EV profiles use faqEvAnswer. */
  faqGeneratorAnswer?: string
  faqEvAnswer?: string
  metaDescription: string
  generatedAt: string
  model: string
}

const generated = generatedData as unknown as Record<string, GeneratedProfileCopy>

export function getGeneratedProfile(
  installer: Pick<Installer, 'id'>,
): GeneratedProfileCopy | undefined {
  const row = generated[installer.id]
  if (!row) return undefined
  return {
    ...row,
    faqGeneratorAnswer: row.faqGeneratorAnswer || row.faqEvAnswer || '',
  }
}

export function hasGeneratedProfile(installer: Pick<Installer, 'id'>): boolean {
  return Boolean(generated[installer.id]?.lead)
}

export function generatedProfileCount(): number {
  return Object.keys(generated).length
}
