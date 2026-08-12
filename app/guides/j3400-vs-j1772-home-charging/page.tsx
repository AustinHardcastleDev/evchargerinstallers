import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'J3400 vs J1772 for Home Charging',
  description:
    'How connector standards affect home EVSE choice, adapters, and why vehicle inlet support still needs a model-year check.',
  path: '/guides/j3400-vs-j1772-home-charging',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Is J3400 the same as NACS?',
    a: 'SAE J3400 is the standardized designation for the connector derived from Tesla’s North American Charging Standard. Older marketing may still say NACS. For technical copy, prefer J3400 and explain the legacy wording when useful.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Connectors"
      title="J3400 vs J1772 for home charging"
      lead="Home AC charging still comes down to matching the vehicle inlet, the EVSE connector, and any adapter the OEM actually supports—not the loudest standard war online."
      faqs={FAQS}
      slug="j3400-vs-j1772-home-charging"
      sources={sourcesForGuide('j3400-vs-j1772-home-charging')}
    >
      <h2>What each name usually means at home</h2>
      <p>
        SAE J1772 has been the common AC inlet/connector language for many
        non-Tesla vehicles. SAE J3400 is the standardized name for the
        NACS-derived connector now appearing across more OEMs. Your model year
        still decides what sits on the car.
      </p>
      <h2>Adapters are not a strategy by themselves</h2>
      <p>
        Some drivers use OEM-approved adapters. Treat adapter claims as
        vehicle-specific: check the manufacturer’s current guidance for your
        year and trim before you buy a wall unit that only works with an
        adapter chain.
      </p>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Confirm inlet type on your exact vehicle</li>
        <li>Buy an EVSE whose native connector or supported adapter path matches</li>
        <li>Ignore public DC-fast connector drama when shopping a garage Level 2</li>
      </ul>
    </GuideLayout>
  )
}
