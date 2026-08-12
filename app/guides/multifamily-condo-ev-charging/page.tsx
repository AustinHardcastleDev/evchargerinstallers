import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'Multifamily and Condo EV Charging',
  description:
    'Why apartment and HOA installs behave more like shared infrastructure than a private garage job—and what to confirm first.',
  path: '/guides/multifamily-condo-ev-charging',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Can I just hire any residential electrician for my condo spot?',
    a: 'Maybe for a deeded garage with a clear panel path—but multifamily work often needs building management approval, metering decisions, and shared-infrastructure planning. Confirm ownership of the parking space and electrical room access first.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Housing"
      title="Multifamily and condo EV charging"
      lead="An assigned parking stall is not the same project as a private detached garage. Ownership, metering, and association rules usually decide the path before amperage does."
      faqs={FAQS}
      slug="multifamily-condo-ev-charging"
      sources={sourcesForGuide('multifamily-condo-ev-charging')}
    >
      <h2>Why these jobs feel different</h2>
      <p>
        AFDC notes multifamily charging often behaves more like shared or
        public infrastructure than a private garage install because of
        ownership, metering, and parking rules. Budget time for approvals, not
        just wire pulls.
      </p>
      <h2>Confirm before you request quotes</h2>
      <ul>
        <li>Who owns the parking space and the wall you want to mount on?</li>
        <li>Is the panel accessible, and who controls electrical-room keys?</li>
        <li>Will charging be individually metered, house-metered, or networked?</li>
        <li>Does the HOA or landlord have a written EV policy?</li>
      </ul>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Get written approval scope before deposits</li>
        <li>Ask whether the bid is residential branch-circuit work or a shared system</li>
        <li>Separate “my stall” solutions from building-wide programs</li>
      </ul>
    </GuideLayout>
  )
}
