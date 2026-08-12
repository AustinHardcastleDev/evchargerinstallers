import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'EV Charger Rebates and Tax Credits',
  description:
    'How to confirm utility, state, and federal incentives without hardcoding dollars that go stale—start with AFDC and DSIRE.',
  path: '/guides/rebates-and-tax-credits',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'Why doesn’t this page list today’s rebate amounts?',
    a: 'Incentive dollars and deadlines change. Publishing a frozen number as if it were durable would mislead buyers. Use AFDC and DSIRE, then verify on the live program page the week you apply.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Incentives"
      title="EV charger rebates and tax credits"
      lead="Treat incentives like weather: check the current conditions, do not memorize last year’s screenshot."
      faqs={FAQS}
      slug="rebates-and-tax-credits"
      sources={sourcesForGuide('rebates-and-tax-credits')}
    >
      <h2>The durable process</h2>
      <ol>
        <li>Search your state and utility on AFDC’s laws and incentives tools</li>
        <li>Cross-check DSIRE for energy-efficiency and related programs</li>
        <li>Open the live utility or state program page and note eligibility, caps, and deadlines</li>
        <li>Ask your installer which paperwork they will complete vs what you file</li>
      </ol>
      <h2>Claims this directory will not freeze in copy</h2>
      <ul>
        <li>Exact rebate dollar amounts without a capture date and refresh path</li>
        <li>Federal credit eligibility after program changes without a fresh IRS primary check</li>
      </ul>
      <h2>Buyer checklist</h2>
      <ul>
        <li>Screenshot or PDF the program rules the day you apply</li>
        <li>Confirm whether the incentive is for equipment, labor, or both</li>
        <li>Do not let a rebate rumor change electrical scope against code</li>
      </ul>
    </GuideLayout>
  )
}
