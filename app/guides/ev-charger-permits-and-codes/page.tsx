import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'EV Charger Permits and Codes',
  description:
    'NEC Article 625 basics, outdoor listings, AHJ permits, and why your local adopted code edition beats a national blog.',
  path: '/guides/ev-charger-permits-and-codes',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Do I always need a permit?',
    a: 'Usually yes for a new branch circuit, but your AHJ decides. Ask the installer who pulls the permit and what inspection is required. “No permit needed” without naming the jurisdiction is a red flag.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Codes"
      title="EV charger permits and codes"
      lead="National model code language is useful context. The adopted edition in your city or county is the document that actually binds the job."
      faqs={FAQS}
      slug="ev-charger-permits-and-codes"
      sources={sourcesForGuide('ev-charger-permits-and-codes')}
    >
      <h2>NEC Article 625 is the model starting point</h2>
      <p>
        NEC Article 625 covers electric vehicle power transfer systems. AFDC
        compliance guidance points readers there, then back to local adoption.
        Amendments and older editions mean two neighboring towns can differ.
      </p>
      <h2>Outdoor listing is not optional outdoors</h2>
      <p>
        AFDC states outdoor EVSE must be listed/rated for outdoor use. Plan
        weatherproofing, mounting height, and strain relief with that listing in
        mind.
      </p>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Name the AHJ and permit type in the contract</li>
        <li>Ask which NEC edition the jurisdiction enforces</li>
        <li>Keep inspection approval with the final paperwork</li>
      </ul>
    </GuideLayout>
  )
}
