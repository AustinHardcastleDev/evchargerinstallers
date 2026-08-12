import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'Hardwired vs NEMA 14-50 EV Charger Installs',
  description:
    'Tradeoffs between a hardwired Level 2 EVSE and a receptacle install, including listing, outdoor rating, and cord rules.',
  path: '/guides/hardwired-vs-nema-14-50',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Is a NEMA 14-50 always cheaper?',
    a: 'Sometimes on day-one labor, not always on total project cost or safety fit. Receptacle installs still need a correctly sized circuit, listing, and often a permit. Hardwired units can be cleaner outdoors and for higher continuous ratings.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Mounting"
      title="Hardwired vs NEMA 14-50 EV charger installs"
      lead="Both can be legitimate Level 2 paths. The right choice follows the EVSE listing, mounting location, and how permanently you want the circuit dedicated."
      faqs={FAQS}
      slug="hardwired-vs-nema-14-50"
      sources={sourcesForGuide('hardwired-vs-nema-14-50')}
    >
      <h2>Hardwired</h2>
      <p>
        The EVSE lands on a dedicated circuit without a general-purpose
        receptacle in between. Common for wall-mounted residential units,
        outdoor installs, and higher continuous ratings where the manufacturer
        specifies hardwiring.
      </p>
      <h2>NEMA 14-50 (and similar receptacles)</h2>
      <p>
        A receptacle install can make sense when the EVSE is cord-and-plug
        listed for that configuration. It is not a DIY “dryer outlet”
        shortcut: conductors, breaker, GFCI rules where required, and outdoor
        covers still matter.
      </p>
      <h2>Decision rules</h2>
      <ul>
        <li>Follow the EVSE installation manual listing first</li>
        <li>Outdoor mounts need outdoor-rated equipment and fittings</li>
        <li>Ask whether the receptacle is dedicated to EVSE use</li>
        <li>Do not reuse an undersized or shared dryer circuit as a cheat code</li>
      </ul>
    </GuideLayout>
  )
}
