import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'Panel Upgrade vs Load Management',
  description:
    'When a service upgrade is the honest answer, and when listed load-management gear can keep a Level 2 install on the existing panel.',
  path: '/guides/panel-upgrade-vs-load-management',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Is load management a loophole?',
    a: 'No. It is a listed method some installs use so the EVSE shares capacity with other loads under controlled conditions. It still has to satisfy the electrician’s calculation and your AHJ. It is not a reason to skip permits.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Electrical"
      title="Panel upgrade vs load management"
      lead="If the panel is full, you are not choosing “cheap vs fancy.” You are choosing between a capacity fix and a listed control strategy—and both need a real load calculation."
      faqs={FAQS}
      slug="panel-upgrade-vs-load-management"
      sources={sourcesForGuide('panel-upgrade-vs-load-management')}
    >
      <h2>Run the math before you buy hardware</h2>
      <p>
        A Level 2 circuit is a continuous load conversation. When the existing
        service cannot support another large continuous branch, installers
        typically discuss a panel or service upgrade—or, where appropriate,
        listed load-management equipment that throttles charging when the home
        is already drawing hard.
      </p>
      <h2>When a panel/service upgrade is the honest answer</h2>
      <ul>
        <li>Load calc fails even with reasonable EVSE amperage</li>
        <li>Panel is obsolete, damaged, or has no physical space for a correct breaker</li>
        <li>You want simultaneous high EVSE amperage plus heavy household loads</li>
      </ul>
      <h2>When load management may keep the project on the existing service</h2>
      <ul>
        <li>Overnight charging can flex when dryer, HVAC, or range peaks</li>
        <li>The proposed gear is listed for the control method claimed</li>
        <li>Your AHJ accepts the approach with the documentation provided</li>
      </ul>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Demand the load calculation worksheet, not a verbal “you’re fine”</li>
        <li>Price upgrade path and load-management path as separate options</li>
        <li>Confirm who warrants the control gear and the labor</li>
      </ul>
    </GuideLayout>
  )
}
