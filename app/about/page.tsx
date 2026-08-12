import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { ButtonLink } from '@/components/Button'
import { LIST_BASE } from '@/lib/site'
import { TOTAL_INSTALLERS, TOTAL_STATES } from '@/lib/installers'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'About EVChargerInstallerList',
  description:
    'How EVChargerInstallerList checks installer websites for EV charger signal and builds a buyer-first, brand-agnostic directory across 50 states.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-10">
      <nav className="meta meta-soft mt-4 break-words">
        <Link href="/" className="hover:text-[var(--color-ink)]">
          Home
        </Link>
        <span className="mx-2 text-[var(--color-border)]">/</span>
        <span className="text-[var(--color-ink)]">About</span>
      </nav>

      <span className="eyebrow mt-8">How the work gets done</span>
      <h1 className="t-display mt-4">We did the installer research.</h1>

      <p className="t-body mt-6 text-[19px]">
        EVChargerInstallerList is a working list of{' '}
        {TOTAL_INSTALLERS.toLocaleString()} EV-charger-friendly installers
        across {TOTAL_STATES} states. It exists because the first question most
        buyers ask is also the messiest one: who is actually worth calling? We
        do not care which brand you land on. We care whether the installer has
        real EV charger experience.
      </p>

      <div className="prose-content mt-10">
        <h2>Our standard</h2>
        <p>
          Every installer on this list shows EV charger signal on their
          own website: a dedicated EV charger page, repeated mentions, or clear
          install-and-service scope. We do not treat a listing as an
          endorsement. We treat it as a better place to start.
        </p>
        <p>Installers fall into confidence tiers sorted by signal strength:</p>
        <ul>
          <li>
            <strong>Explicit:</strong> dedicated EV charger page, the
            strongest signal we track.
          </li>
          <li>
            <strong>High:</strong> repeated EV charger mentions across the site.
          </li>
          <li>
            <strong>Medium:</strong> at least one clear mention, worth verifying
            on a first call.
          </li>
        </ul>

        <h2>The method</h2>
        <ol>
          <li>
            <strong>Statewide search.</strong> Multiple terms per state,
            covering EV charger installer, EV charger, whole-house
            EV charger, Level 2, and related labels. Different companies use different
            language, and we are not partial to any single manufacturer&apos;s
            terminology.
          </li>
          <li>
            <strong>Dedupe by place ID.</strong> The same company appears under
            multiple searches. We collapse duplicates so the list stays usable.
          </li>
          <li>
            <strong>Website crawl.</strong> We follow internal pages and look for
            EV charger signal where buyers would check: services, FAQs, galleries.
          </li>
          <li>
            <strong>Confidence scoring.</strong> Dedicated pages first. Repeated
            mentions next. Single mentions after that.
          </li>
          <li>
            <strong>Editorial review.</strong> We drop obvious mismatches and keep
            entries that give buyers a plausible next call.
          </li>
        </ol>

        <h2>Freshness</h2>
        <p>
          Website and review evidence for the national directory was last
          checked in <strong>August 2026</strong>. Profile copy may paraphrase
          public website language; credential claims such as licensed,
          certified, or authorized dealer status are not independently verified
          here. Confirm them directly with the shop and the manufacturer.
        </p>

        <h2>What we&apos;re not</h2>
        <p>
          We&apos;re not a marketplace, not a lead-gen funnel, and not a
          contractor verification program. We have not met most of the
          installers on the list. Ask for references, verify licenses, and read
          contracts carefully. Good installers expect those questions.
        </p>
        <h2>Buyer guides</h2>
        <p>
          The directory gives you a place to start. Our{' '}
          <Link href="/guides">buyer guides</Link> cover installed cost, sizing,
          fuel, permits, and hiring, grounded in research, not dealer marketing.
          We lead with durable principles, and dated figures carry the year.
        </p>
      </div>

      <div className="mt-10">
        <ContactForm
          topic="Question for EVChargerInstallerList"
          intro="Flag an installer, correct an entry, or ask a buyer question. Specific notes are easier to route."
          includeListingUrl
        />
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <ButtonLink href={LIST_BASE}>Browse states</ButtonLink>
        <ButtonLink href="/guides" variant="secondary">
          Buyer guides
        </ButtonLink>
      </div>
    </article>
  )
}
