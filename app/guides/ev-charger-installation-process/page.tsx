import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'EV Charger Installation Process',
  description:
    'From site walk to first charge: load calculation, permits, circuit work, inspection, and what usually sets the clock.',
  path: '/guides/ev-charger-installation-process',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'How long does a typical home Level 2 install take?',
    a: 'Simple garage circuits can finish in a day once permitted. Panel upgrades, outdoor pedestals, long runs, or busy inspection calendars stretch the timeline. Ask for permit lead time separately from labor hours.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Process"
      title="EV charger installation process and timeline"
      lead="Most delays are paperwork and capacity decisions, not the hour someone mounts the wall unit. Walk the process in order so quotes stay comparable."
      faqs={FAQS}
      slug="ev-charger-installation-process"
      sources={sourcesForGuide('ev-charger-installation-process')}
    >
      <h2>1. Site walk and parking reality</h2>
      <p>
        Confirm where the vehicle parks, cable reach, indoor vs outdoor
        mounting, and a realistic path back to the panel. AFDC notes outdoor
        equipment must be listed/rated for outdoor use.
      </p>
      <h2>2. Load calculation and equipment choice</h2>
      <p>
        The electrician sizes the branch circuit to the EVSE listing and the
        dwelling load calculation. This is where panel upgrade vs load
        management decisions belong—before you buy hardware.
      </p>
      <h2>3. Permit and materials</h2>
      <p>
        Your AHJ sets permit and inspection rules. NEC Article 625 is the
        national model language; the adopted local edition wins.
      </p>
      <h2>4. Install, inspect, commission</h2>
      <p>
        Circuit, breaker, mount, terminations, labeling, inspection, then a
        supervised first charge. Keep manufacturer warranty paperwork with the
        final invoice.
      </p>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Separate permit lead time from labor day estimate</li>
        <li>Freeze scope before ordering the EVSE</li>
        <li>Require inspection sign-off in writing</li>
      </ul>
    </GuideLayout>
  )
}
