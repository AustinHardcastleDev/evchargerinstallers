import { GuideLayout } from '@/components/GuideLayout'
import { pageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/components/FAQ'
import { sourcesForGuide } from '@/lib/guide-provenance'

export const metadata = pageMetadata({
  title: 'Questions to Ask an EV Charger Installer',
  description:
    'A first-call checklist: license, load calc, panel work, permits, warranty path, and red flags before you deposit.',
  path: '/guides/questions-to-ask-ev-charger-installer',
  type: 'article',
})

const FAQS: FAQItem[] = [
  {
    q: 'What is the single most important question?',
    a: 'Ask who holds the electrical license for the work and whether a written load calculation is included before you approve a panel upgrade or load-management add-on.',
  },
  {
    q: 'Should I require manufacturer certification?',
    a: 'Helpful when claimed with evidence, not magic. Ask what the certification covers (install, warranty labor, network commissioning) and how they prove it. Do not treat a logo as a substitute for a license.',
  },
]

export default function Page() {
  return (
    <GuideLayout
      eyebrow="Hiring"
      title="Questions to ask an EV charger installer"
      lead="A clean website signal gets a company on this directory. Your call still has to separate a real Level 2 crew from a vague “we do electrical” shop."
      faqs={FAQS}
      slug="questions-to-ask-ev-charger-installer"
      sources={sourcesForGuide('questions-to-ask-ev-charger-installer')}
    >
      <h2>Licensing and insurance</h2>
      <ul>
        <li>Who holds the electrical license for this address?</li>
        <li>Can you email license number, insurance certificate, and permit puller name?</li>
        <li>Will subcontractors do any of the work, and under whose license?</li>
      </ul>

      <h2>Scope and electrical design</h2>
      <ul>
        <li>Will you perform a load calculation before recommending a panel upgrade?</li>
        <li>Is the quote hardwired, NEMA 14-50, or either?</li>
        <li>What continuous amp rating are you designing for, and why?</li>
        <li>If capacity is tight, is listed load management an option before a service upgrade?</li>
      </ul>

      <h2>Permits, timeline, warranty</h2>
      <ul>
        <li>Who pulls the permit and schedules inspection?</li>
        <li>What is included vs change-order territory (trenching, panel, outdoor pedestal)?</li>
        <li>What warranty covers labor vs the EVSE manufacturer?</li>
        <li>Can you share two recent local Level 2 installs with similar scope?</li>
      </ul>

      <h2>Red flags</h2>
      <ul>
        <li>Cash-only, no permit, “inspection is optional”</li>
        <li>Quote that never mentions load calculation or continuous load</li>
        <li>Indoor-only unit proposed for outdoor mounting</li>
        <li>Brand certification claimed with no paperwork path</li>
      </ul>
    </GuideLayout>
  )
}
