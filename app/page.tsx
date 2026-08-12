import Link from 'next/link'
import {
  installers,
  NATIONAL_EXPLICIT,
  REGIONS,
  states,
  TOTAL_INSTALLERS,
  TOTAL_STATES,
  toInstallerListItem,
} from '@/lib/installers'
import { InstallerLinkList } from '@/components/InstallerLinkList'
import { FAQ, type FAQItem } from '@/components/FAQ'
import { SITE, LIST_BASE, SITE_URL } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import { ZipSearchForm } from '@/components/ZipSearchForm'
import { ChargerCostCta } from '@/components/ChargerCostCta'
import { ButtonLink } from '@/components/Button'
import { CountChip } from '@/components/CountChip'
import { GUIDES } from '@/lib/guides'
import { Container, SectionHeading } from '@/components/Section'
import { HeroGeneratorPhoto } from '@/components/EVChargerPhotos'
import { getHomepageDiscoverySample } from '@/lib/homepage-discovery'
import { brandCounts } from '@/lib/brands'
import { intentTagCounts } from '@/lib/directory-tags'

const discoverySample = getHomepageDiscoverySample()

export const metadata = pageMetadata({
  title: 'EV Charger Installation Directory | Home Level 2 Installers',
  description: SITE.description,
  path: '/',
})

const FAQS: FAQItem[] = [
  {
    q: 'How does EVChargerInstallerList decide who makes the list?',
    a: 'We cast a wide net, then check installer websites ourselves. A company stays on the list when their own site shows residential Level 2 EV charger signal: a dedicated page, repeated mentions, or at least one clear mention worth a first call. That is website signal, not a license check or endorsement.',
  },
  {
    q: 'What is a dedicated EV charger page?',
    a: 'A page on the installer’s own website about home Level 2 or EVSE work. It is the strongest website signal we track. You still need to verify licensing, insurance, panel capacity, and scope yourself.',
  },
  {
    q: 'Does it matter which charger brand I want?',
    a: 'No. Tesla Wall Connector, ChargePoint, Wallbox, Emporia, or another brand—this directory is not tied to one manufacturer. We filter installer websites for real EV charger signal, then let you narrow by brand if you already have a preference.',
  },
  {
    q: 'Where should I search if I want installers near me?',
    a: 'Use the Near Me page for ZIP distance sorting. Many electricians cover a wide radius, so a state or metro list is usually more useful than a single city name.',
  },
  {
    q: 'What should I ask before requesting a quote?',
    a: 'Ask who holds the electrical license, whether a panel upgrade or load management is needed, what the quote includes, who pulls permits, and how warranty service works. Use our questions-to-ask guide for a full checklist.',
  },
  {
    q: 'I am an installer. How do I get listed or correct an entry?',
    a: 'Open the For Installers page and send the correction or the URL that shows your EV charger work. Include enough detail for us to match the right listing.',
  },
]

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 md:pt-12 lg:px-10">
        <ZipSearchForm compact />
      </section>
      <BrandDiscovery />
      <BuyerGuides />
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
        <ChargerCostCta />
      </section>
      <StateGrid />
      <HowItWorks />
      <PullQuote />
      <Container>
        <FAQ items={FAQS} />
      </Container>
      <DiscoveryInstallers />
      <ClosingCta />
    </>
  )
}

function Hero() {
  const liveExplicit = installers.filter(
    (i) =>
      (i.lanes?.residential_l2?.confidence || i.generatorConfidence) ===
      'explicit',
  ).length
  const liveHigh = installers.filter(
    (i) =>
      (i.lanes?.residential_l2?.confidence || i.generatorConfidence) === 'high',
  ).length
  const liveMedium = installers.filter(
    (i) =>
      (i.lanes?.residential_l2?.confidence || i.generatorConfidence) ===
      'medium',
  ).length

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <div className="grid items-end gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <span className="eyebrow">
            Est. 2026 · {TOTAL_INSTALLERS.toLocaleString()} installers ·{' '}
            {TOTAL_STATES} states
          </span>
          <h1 className="t-display mt-5">
            Home EV charger installation, researched first.
          </h1>
          <p className="t-body mt-8 max-w-2xl text-[19px]">
            Residential Level 2 installs hide behind ordinary electrician and
            solar shop titles. We checked installer websites in {TOTAL_STATES}{' '}
            states ({TOTAL_INSTALLERS.toLocaleString()} listings) for real home
            EV charger experience, whatever brand they work with, and kept the
            list independent. No broker layer, no lead resale. Just a better
            place to start.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={LIST_BASE}>Browse by state</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              See the method
            </ButtonLink>
          </div>
        </div>
        <div className="md:border-l md:border-[var(--color-border)] md:pl-6">
          <HeroGeneratorPhoto />
          <div className="meta mt-6">What the research found</div>
          <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-[var(--color-body)]">
            <p>
              <span className="tabular text-[22px] font-extrabold text-[var(--color-ink)]">
                {NATIONAL_EXPLICIT.toLocaleString()}
              </span>{' '}
              installers nationwide with a dedicated EV charger page on their
              site.
            </p>
            <p>
              <span className="tabular text-[22px] font-extrabold text-[var(--color-ink)]">
                {liveExplicit}
              </span>{' '}
              dedicated, {liveHigh} repeated, {liveMedium} signal across the
              live directory.
            </p>
            <p className="text-[14px] text-[var(--color-muted)]">
              Website signal is a starting filter, not a license check, not an
              endorsement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StateGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="Start here"
        title="Pick the state where you're installing"
        subtitle={`${TOTAL_INSTALLERS.toLocaleString()} researched installers across ${TOTAL_STATES} states, sorted by website signal.`}
      />
      <div className="mt-12 grid gap-8">
        {Object.entries(REGIONS).map(([region, slugs]) => (
          <div key={region}>
            <div className="flex items-center gap-4">
              <span className="eyebrow-bare">{region}</span>
              <div className="rule flex-1" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {slugs.map((slug) => {
                const s = states[slug]
                if (!s) return null
                return (
                  <Link
                    key={slug}
                    href={`${LIST_BASE}/${slug}`}
                    className="card group block p-5"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="t-heading group-hover:underline">
                        {s.name}
                      </span>
                      <CountChip count={s.totalListings} />
                    </div>
                    <div className="meta meta-soft mt-2">
                      {s.explicitCount} dedicated
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DiscoveryInstallers() {
  return (
    <InstallerLinkList
      installers={discoverySample.map(toInstallerListItem)}
      title="A few more places to start"
      description="One researched installer from each state: a quick cross-country sample if you want to browse beyond your home market. We refresh this set weekly."
      eyebrow="Around the country"
      className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10"
      showConfidence={false}
    />
  )
}

function BrandDiscovery() {
  const intents = intentTagCounts()
  const brands = brandCounts()
  if (intents.length === 0 && brands.length === 0) return null
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      {intents.length > 0 ? (
        <>
          <SectionHeading
            eyebrow="Optional job-type filter"
            title="Home Level 2, panel upgrade, or commercial?"
            subtitle="Narrow the national directory by residential Level 2 signal, panel-upgrade language, load management, or commercial EV work."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {intents.map(({ tag, count }) => (
              <Link
                key={tag.slug}
                href={`${LIST_BASE}/tags/${tag.slug}`}
                className="rounded-btn border border-[var(--color-border)] px-4 py-2 text-[15px] font-semibold"
              >
                {tag.shortLabel}{' '}
                <span className="tabular text-[var(--color-muted)]">{count}</span>
              </Link>
            ))}
          </div>
        </>
      ) : null}
      {brands.length > 0 ? (
        <div className={intents.length > 0 ? 'mt-16' : undefined}>
          <SectionHeading
            eyebrow="Optional brand filter"
            title="Already know the charger brand?"
            subtitle="The directory is brand-agnostic. Use brand tags only when you already know the wall connector or network you want installed."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map(({ brand, count }) => (
              <Link
                key={brand.slug}
                href={`${LIST_BASE}/tags/${brand.slug}`}
                className="rounded-btn border border-[var(--color-border)] px-4 py-2 text-[15px] font-semibold"
              >
                {brand.label}{' '}
                <span className="tabular text-[var(--color-muted)]">{count}</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'We cast a wide net',
      b: 'Electricians, solar shops, EV specialists—anyone who might install a home Level 2 charger for any brand.',
    },
    {
      n: '02',
      t: 'We check the website',
      b: 'Dedicated EV charger pages rank highest. Repeated mentions next. A single clear signal still makes the list.',
    },
    {
      n: '03',
      t: 'You make the calls',
      b: 'Licenses, panel capacity, load management, permits, warranty path: that verification is still yours. We just filter the noise.',
    },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="The method"
        title="Real website signal. Independent ranking."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.n} className="panel p-6">
            <div className="meta">{step.n}</div>
            <h3 className="t-heading mt-3">{step.t}</h3>
            <p className="t-body-sm mt-3">{step.b}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BuyerGuides() {
  const picks = GUIDES.filter((g) => g.phase === 'P0')
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
      <SectionHeading
        eyebrow="Buyer guides"
        title="Read before you request quotes"
        subtitle="Cost, panel capacity, and the first-call questions, written from primary sources, not installer blogs."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {picks.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="card p-6">
            <span className="eyebrow-bare">{guide.eyebrow}</span>
            <h3 className="t-heading mt-3">{guide.title}</h3>
            <p className="t-body-sm mt-3">{guide.description}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/guides" className="link text-[16px] font-semibold">
          All buyer guides →
        </Link>
      </div>
    </section>
  )
}

function PullQuote() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-10">
      <blockquote className="max-w-3xl border-l-4 border-[var(--color-accent)] pl-6">
        <p className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[var(--color-ink)] sm:text-[32px]">
          Not an endorsement. A better place to start.
        </p>
        <footer className="meta mt-4">
          Website signal · Buyer-first research · Brand-agnostic
        </footer>
      </blockquote>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="band-dark mt-16">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-10">
        <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
          Start with your state.
        </h2>
        <p className="mt-4 max-w-xl text-[17px] text-[var(--color-band-body)]">
          {TOTAL_INSTALLERS.toLocaleString()} researched installers across{' '}
          {TOTAL_STATES} states, with unique market notes on every state page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={LIST_BASE}>Open the state list</ButtonLink>
          <ButtonLink href={`${LIST_BASE}/near-me`} variant="secondary">
            Search near me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

function HomeJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE.name,
        url: SITE_URL,
        description: SITE.description,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE.name,
        url: SITE_URL,
        description: SITE.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
