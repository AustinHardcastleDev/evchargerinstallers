import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'EV Charger Installation Cost',
  description:
    'What drives home Level 2 install quotes: circuit length, panel capacity, mounting, permits, and when load management changes the bill.',
  path: '/guides/ev-charger-installation-cost',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'How much does a home Level 2 charger cost to install?',
    a: 'There is no single national average this directory can defend from a primary survey. Quotes move with circuit length, panel or service capacity, indoor vs outdoor mounting, hardwired vs receptacle scope, permit fees, and whether load management can defer a service upgrade. Compare itemized local quotes, not a blog headline.',
  },
  {
    q: 'What usually makes two quotes differ most?',
    a: 'Electrical upgrades and labor. Equipment purchase price is only part of the project. A long run from the panel, outdoor weatherproofing, or a panel/service upgrade can swing the total far more than swapping charger brands.',
  },
  {
    q: 'Do rebates change the out-of-pocket cost?',
    a: 'Sometimes. State and utility incentives may offset equipment or install cost, but amounts and deadlines change. Confirm the current program on AFDC, DSIRE, your utility, or state energy office before you treat any dollar figure as locked.',
  },
  {
    q: 'Does electricity rate matter more than equipment brand?',
    a: 'For many households, yes. Time-of-use rates can change the operating cost of overnight charging more than the brand sticker on the wall unit. Ask your utility about EV or off-peak rates after you understand the install scope.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Cost"
      title="EV charger installation cost"
      lead="The number on the charger box is not the number you write the check for. Home Level 2 quotes are a circuit-and-panel problem first, and a product-shopping problem second."
      faqs={FAQS}
      slug="ev-charger-installation-cost"
      sources={sourcesForGuide('ev-charger-installation-cost')}
    >
      <h2>Start with cost drivers, not a national average</h2>
      <p>
        Marketing pages love a single “average install price.” This guide does
        not. Our research library treats those headlines as usually undefended
        for a national directory. What we can stand behind is the driver list
        that shows up in real quotes:
      </p>
      <ul>
        <li>Circuit length and routing from the panel to the parking spot</li>
        <li>Panel / service capacity and whether a load calc passes</li>
        <li>Indoor garage vs outdoor-rated mounting and weatherproofing</li>
        <li>Hardwired EVSE vs NEMA 14-50 (or similar) receptacle scope</li>
        <li>Permit and inspection fees in your AHJ</li>
        <li>Whether listed load management can defer a service upgrade</li>
      </ul>

      <h2>Equipment is only one line item</h2>
      <p>
        Labor, materials, and electrical upgrades often dominate the variance
        between two installers quoting “the same Level 2 charger.” Ask every
        bidder for the same itemization: EVSE, breaker and wire, labor hours,
        panel work, load-management gear if any, permit, and contingency.
      </p>

      <h2>Operating cost is a separate conversation</h2>
      <p>
        AFDC notes that most U.S. EV drivers charge overnight at home on Level 1
        or Level 2 equipment. Once the hardware is in, time-of-use rates can
        change what that overnight energy costs more than brand choice. Confirm
        utility EV or off-peak rates after the install scope is clear.
      </p>

      <h2>Incentives: link out, do not freeze dollars</h2>
      <p>
        Some utilities and states offset equipment or installation. Those
        dollars and deadlines change. Use AFDC’s laws/incentives tools and
        DSIRE, then verify on the live program page before you subtract anything
        from a quote.
      </p>

      <h2>Buyer checklist</h2>
      <ul>
        <li>Get three itemized quotes with the same scope assumptions</li>
        <li>Ask each bidder to show the load calculation result</li>
        <li>Separate EVSE price from panel/service upgrade price</li>
        <li>Confirm outdoor listing if the unit mounts outdoors</li>
        <li>Check current utility/state incentives on AFDC or DSIRE the week you sign</li>
      </ul>
    </GuideLayout>
  )
}
