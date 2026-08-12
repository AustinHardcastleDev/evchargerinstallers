import Link from 'next/link'
import { permanentRedirect } from 'next/navigation'
import {
  REGIONS,
  TOTAL_INSTALLERS,
  TOTAL_STATES,
  states,
  NATIONAL_EXPLICIT,
  getStateBySlug,
} from '@/lib/installers'
import { FAQ, FAQJsonLd, type FAQItem } from '@/components/FAQ'
import { pageMetadata } from '@/lib/seo'
import { ZipSearchForm } from '@/components/ZipSearchForm'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { CountChip } from '@/components/CountChip'
import { ButtonLink } from '@/components/Button'
import { brandCounts } from '@/lib/brands'
import { intentTagCounts } from '@/lib/directory-tags'
import { LIST_BASE } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'EV Charger Installation by State',
  description: `${TOTAL_INSTALLERS.toLocaleString()} EV charger installers researched across ${TOTAL_STATES} states, sorted by website signal so buyers can start with a cleaner list.`,
  path: LIST_BASE,
})

const FAQS: FAQItem[] = [
  {
    q: 'Which state has the most EV charger installers?',
    a: `Florida leads on researched volume with ${states.fl.totalListings} listings (${states.fl.explicitCount} with a dedicated EV charger page), followed by Texas at ${states.tx.totalListings}.`,
  },
  {
    q: 'How is each state list sorted?',
    a: 'EV-specific review count first (after any featured rows), then website signal, then overall Google review count. Filters let you require 1+, 5+, or 10+ EV reviews.',
  },
  {
    q: 'What is the best way to find EV charger installation near me?',
    a: 'Open the Near Me page for ZIP distance sorting, or start with a state hub and drill into a metro. Standby crews often cover a wide radius, so state or regional search usually beats a narrow city-only search.',
  },
  {
    q: 'Are these installers verified or endorsed?',
    a: 'No. This is website-signal research, not a license check or endorsement list. Confirm licensing, insurance, load calc, fuel work, permits, and warranty path yourself.',
  },
  {
    q: 'Do I need to know which charger brand I want first?',
    a: 'No. This directory is not tied to any one manufacturer. Filter by brand on the tags page if you already have a preference, or skip it entirely and start with website signal.',
  },
]

type Props = {
  searchParams: Promise<{ state?: string }>
}

export default async function InstallersIndexPage({ searchParams }: Props) {
  const sp = await searchParams
  const stateParam = (sp.state || '').trim().toLowerCase()
  if (stateParam) {
    const bySlug = getStateBySlug(stateParam)
    const byNameOrAbbr = Object.values(states).find(
      (s) =>
        s.abbr.toLowerCase() === stateParam ||
        s.slug === stateParam ||
        s.name.toLowerCase() === stateParam,
    )
    const match = bySlug || byNameOrAbbr
    if (match) permanentRedirect(`${LIST_BASE}/${match.slug}`)
  }

  const brands = brandCounts()
  const intents = intentTagCounts()

  return (
    <>
      <FAQJsonLd items={FAQS} />
      <BreadcrumbListJsonLd
        items={[
          { label: 'Home', href: '/' },
          { label: 'Installers', href: LIST_BASE },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-20 lg:px-10">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Installers' },
          ]}
        />
        <span className="eyebrow mt-6 block w-fit">Start with the state</span>
        <h1 className="t-display mt-4">
          EV charger installation research, sorted by state.
        </h1>
        <p className="t-body mt-6 max-w-3xl text-[18.5px]">
          {TOTAL_INSTALLERS.toLocaleString()} installers researched across{' '}
          {TOTAL_STATES} states, {NATIONAL_EXPLICIT.toLocaleString()} with a
          dedicated EV charger page. Pick where you&apos;re installing and start
          with a list sorted by website signal, not by brand.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`${LIST_BASE}/near-me`}>
            Find installation near me →
          </ButtonLink>
          <ButtonLink
            href="/guides/questions-to-ask-ev-charger-installer"
            variant="secondary"
          >
            Questions to ask
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-12 lg:px-10">
        <ZipSearchForm
          title="Or search by ZIP"
          body="Use ZIP search when you care more about driving distance than state lines."
          compact
        />
      </section>

      {intents.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="eyebrow">Job-type pages</span>
            <div className="rule hidden min-w-8 flex-1 sm:block" />
            <span className="meta">{intents.length} filters</span>
          </div>
          <p className="t-body-sm mt-3 max-w-2xl">
            Home Level 2 install signal, or shops with service and
            maintenance language in reviews.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {intents.map(({ tag, count }) => (
              <Link
                key={tag.slug}
                href={`${LIST_BASE}/tags/${tag.slug}`}
                className="rounded-btn border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-2 text-[15px] font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                {tag.shortLabel}{' '}
                <span className="tabular text-[var(--color-muted)]">{count}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {brands.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="eyebrow">Brand signal pages</span>
            <div className="rule hidden min-w-8 flex-1 sm:block" />
            <span className="meta">{brands.length} brands</span>
          </div>
          <p className="t-body-sm mt-3 max-w-2xl">
            Already know which brand you want? Filter by brands mentioned on
            installer websites. Brand tags cover manufacturers installers mention, and
            service from website signal, not dealer certification.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {brands.map(({ brand, count }) => (
              <Link
                key={brand.slug}
                href={`${LIST_BASE}/tags/${brand.slug}`}
                className="rounded-btn border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-2 text-[15px] font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                {brand.slug === 'tesla'
                  ? 'Tesla-related installers'
                  : brand.label}{' '}
                <span className="tabular text-[var(--color-muted)]">{count}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-10">
        <div className="grid gap-8">
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

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-10">
        <FAQ items={FAQS} />
      </section>
    </>
  )
}
