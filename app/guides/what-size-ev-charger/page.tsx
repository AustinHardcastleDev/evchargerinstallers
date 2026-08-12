import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'What Size EV Charger Do You Need?',
  description:
    'Level 1 vs Level 2, amperage choices, and how overnight charging needs map to circuit size—not marketing miles-per-hour claims.',
  path: '/guides/what-size-ev-charger',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Is Level 2 always better than Level 1?',
    a: 'Level 2 is faster and is what most home “charger install” quotes mean. Level 1 (120 V) can still work for low daily mileage if you can leave the car plugged in long enough. Match overnight hours and daily miles before you overspend on amperage.',
  },
  {
    q: 'What amperage should I buy?',
    a: 'Buy what your vehicle, EVSE listing, and electrical service can support after a real load calculation. Higher amperage is not automatically better if the panel cannot feed it or you never need that charge window.',
  },
  {
    q: 'Can I trust “miles per hour of charge” marketing?',
    a: 'Treat it as approximate. Real rate depends on vehicle onboard charger limits, circuit size, and temperature. Prefer circuit rating and vehicle OEM guidance over a single miles-per-hour claim.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Sizing"
      title="What size EV charger do you need?"
      lead="Sizing is an overnight math problem: how many miles you add per day, how many hours the car sits, and what your panel can feed—not which marketing tile looks fastest."
      faqs={FAQS}
      slug="what-size-ev-charger"
      sources={sourcesForGuide('what-size-ev-charger')}
    >
      <h2>Start with Level 1 vs Level 2</h2>
      <p>
        AFDC describes home charging as usually AC Level 1 (120 V) or AC Level 2
        (208/240 V). Most shoppers asking for an “EV charger install” mean a
        dedicated Level 2 circuit. Level 1 can still cover light daily driving
        if the car parks long enough.
      </p>

      <h2>Amperage follows the vehicle and the panel</h2>
      <p>
        Level 2 commonly uses a dedicated 208/240 V branch circuit. Exact
        breaker and conductor sizing depend on the EVSE listing and the
        electrician’s load calculation. Buying a 48 A or 60 A unit does not help
        if the vehicle’s onboard charger caps lower, or if the service cannot
        support the continuous load.
      </p>

      <h2>DC fast charging is a different product class</h2>
      <p>
        Public and fleet DC-fast equipment is not a residential garage EVSE.
        Do not size a home project against station kW ratings you see on a
        highway map.
      </p>

      <h2>Buyer checklist</h2>
      <ul>
        <li>List typical daily miles and overnight plug-in hours</li>
        <li>Check the vehicle’s onboard AC charge limit in the OEM manual</li>
        <li>Ask for a written load calculation before upsizing amperage</li>
        <li>Confirm indoor vs outdoor listing for the mounting location</li>
      </ul>
    </GuideLayout>
  )
}
