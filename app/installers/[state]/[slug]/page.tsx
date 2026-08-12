import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  installers,
  getInstallerBySlug,
  getNearbyInstallers,
  getStateBySlug,
  confidenceLabel,
  confidenceDescription,
  toInstallerListItem,
} from '@/lib/installers'
import {
  getProfileLead,
  getProfileSubhead,
  getReviewSummaryText,
  getFaqGeneratorAnswer,
  getProfileMetaDescription,
  getProfileSeoTitle,
} from '@/lib/profile-copy'
import { FAQ, FAQJsonLd, type FAQItem } from '@/components/FAQ'
import { pageMetadata, seoDescription, seoTitle } from '@/lib/seo'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { InstallerCard, ConfidenceBadge } from '@/components/InstallerCard'
import { SponsoredTag } from '@/components/SponsoredTag'
import { ButtonLink } from '@/components/Button'
import { getBrandById } from '@/lib/brands'
import { resolveBrandTagPageHref } from '@/lib/internal-links'
import { LIST_BASE, SITE, SITE_URL} from '@/lib/site'

type Props = { params: Promise<{ state: string; slug: string }> }

export function generateStaticParams() {
  return installers.map((i) => ({
    state: i.stateSlug,
    slug: i.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { state, slug } = await params
  const installer = getInstallerBySlug(state, slug)
  if (!installer) return {}
  const location = installer.city
    ? `${installer.city}, ${installer.stateAbbr}`
    : installer.state
  const title = getProfileSeoTitle(installer)
  const name = seoTitle(installer.name)
  const description = seoDescription(
    getProfileMetaDescription(
      installer,
      `EV charger research notes for ${name} in ${location}: website signal, reviews, contact links, and questions to confirm before requesting a quote.`,
    ),
  )
  return pageMetadata({
    title,
    description,
    path: `${LIST_BASE}/${installer.stateSlug}/${installer.slug}`,
    absoluteTitle: true,
  })
}

export default async function InstallerProfilePage({ params }: Props) {
  const { state, slug } = await params
  const installer = getInstallerBySlug(state, slug)
  if (!installer) notFound()

  const s = getStateBySlug(state)
  const nearby = getNearbyInstallers(installer, 6)
  const location = installer.city
    ? `${installer.city}, ${installer.stateAbbr}`
    : installer.state
  const profileLead = getProfileLead(installer)
  const profileSubhead = getProfileSubhead(installer)
  const reviewSummary = getReviewSummaryText(installer)
  const faqGeneratorAnswer = getFaqGeneratorAnswer(installer)
  const displayTags =
    installer.generatorScopedTags?.length
      ? installer.generatorScopedTags
      : installer.reviewTags
  const snippets = installer.generatorReviewSnippets || []

  const faqs: FAQItem[] = [
    {
      q: `Does ${installer.name} install EV chargers?`,
      a:
        faqGeneratorAnswer ||
        installer.generatorReasoning ||
        `${confidenceDescription((installer.generatorConfidence || installer.lanes?.residential_l2?.confidence || 'medium'))} Confirm scope, recent projects, and service area directly before you make any commitment.`,
    },
    {
      q: `Is ${installer.name} recommended?`,
      a: 'No. This page is researched website signal, not an endorsement. Confirm licensing, insurance, references, load calc, fuel work, permits, and warranty path yourself.',
    },
    {
      q: 'What does the website-signal label mean?',
      a: confidenceDescription((installer.generatorConfidence || installer.lanes?.residential_l2?.confidence || 'medium')),
    },
    {
      q: 'How do I request a correction?',
      a: 'Use the For Installers page and include the correct URL that shows your EV charger work.',
    },
  ]

  return (
    <>
      <FAQJsonLd items={faqs} />
      <LocalBusinessJsonLd
        installer={installer}
        description={profileLead}
      />
      <BreadcrumbListJsonLd
        items={[
          { label: 'Home', href: '/' },
          { label: 'Installers', href: LIST_BASE },
          { label: s?.name || installer.state, href: `${LIST_BASE}/${state}` },
          {
            label: installer.name,
            href: `${LIST_BASE}/${installer.stateSlug}/${installer.slug}`,
          },
        ]}
      />

      <article className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Installers', href: LIST_BASE },
            {
              label: s?.name || installer.state,
              href: `${LIST_BASE}/${state}`,
            },
            { label: installer.name },
          ]}
        />

        <header className="mt-8 border-b border-[var(--color-border)] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              {installer.categoryName || 'Installer'}
            </span>
            {installer.sponsored ? <SponsoredTag /> : null}
          </div>
          <h1 className="t-display mt-4">{installer.name}</h1>
          <p className="t-body mt-4 max-w-3xl text-[18px] text-[var(--color-body)]">
            {profileSubhead}
          </p>
          <p className="meta mt-3">{location}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <ConfidenceBadge confidence={(installer.generatorConfidence || installer.lanes?.residential_l2?.confidence || 'medium')} />
            {installer.reviewsCount > 0 ? (
              <span className="meta meta-soft">
                {installer.totalScore != null
                  ? `${installer.totalScore.toFixed(1)} · `
                  : ''}
                {installer.reviewsCount.toLocaleString()} Google reviews
                <span className="text-[var(--color-faint)]">
                  {' '}
                  (third-party · not verified here)
                </span>
              </span>
            ) : null}
          </div>
          <p className="t-body mt-6 max-w-3xl text-[18px]">{profileLead}</p>
          {reviewSummary ? (
            <p className="t-body-sm mt-4 max-w-3xl">{reviewSummary}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {installer.website ? (
              <ButtonLink href={installer.website} external>
                Visit website
              </ButtonLink>
            ) : null}
            {installer.phone ? (
              <a href={`tel:${installer.phone}`} className="btn btn-secondary">
                Call {installer.phone}
              </a>
            ) : null}
            <ButtonLink href={`${LIST_BASE}/${state}`} variant="secondary">
              Back to {s?.name || 'state'} list
            </ButtonLink>
          </div>
        </header>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="panel p-6">
            <h2 className="t-heading">Website signal</h2>
            <p className="t-body-sm mt-3">
              {confidenceDescription((installer.generatorConfidence || installer.lanes?.residential_l2?.confidence || 'medium'))}
            </p>
            <p className="meta meta-soft mt-3">
              Label: {confidenceLabel((installer.generatorConfidence || installer.lanes?.residential_l2?.confidence || 'medium'))}
            </p>
            {installer.dedicatedPage ? (
              <p className="mt-4 text-[15px]">
                <a
                  href={installer.dedicatedPage}
                  className="link font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open their EV charger page →
                </a>
              </p>
            ) : null}
            {installer.primaryBrands?.length ? (
              <p className="meta meta-soft mt-4">
                Brand mentions:{' '}
                {installer.primaryBrands.map((brandId, index) => {
                  const brand = getBrandById(brandId)
                  const label = brand?.label || brandId.replace(/_/g, ' ')
                  const href = resolveBrandTagPageHref(installer, brandId)
                  return (
                    <span key={brandId}>
                      {index > 0 ? ', ' : ''}
                      {href ? (
                        <Link href={href} className="link">
                          {label}
                        </Link>
                      ) : (
                        label
                      )}
                    </span>
                  )
                })}
              </p>
            ) : null}
            {typeof installer.generatorReviewCount === 'number' &&
            installer.generatorReviewCount > 0 ? (
              <p className="meta meta-soft mt-3">
                {installer.generatorReviewCount} EV-specific reviews in
                the scraped sample
                {installer.generatorReviewShare != null
                  ? ` (${Math.round(installer.generatorReviewShare * 100)}% of text sample)`
                  : ''}
              </p>
            ) : null}
          </div>
          <div className="panel p-6">
            <h2 className="t-heading">Contact</h2>
            <dl className="mt-4 space-y-3 text-[15.5px]">
              {installer.address ? (
                <div>
                  <dt className="meta">Address</dt>
                  <dd className="mt-1 text-[var(--color-ink)]">
                    {installer.address}
                  </dd>
                </div>
              ) : null}
              {installer.phone ? (
                <div>
                  <dt className="meta">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${installer.phone}`} className="link">
                      {installer.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {installer.emails?.[0] ? (
                <div>
                  <dt className="meta">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${installer.emails[0]}`} className="link">
                      {installer.emails[0]}
                    </a>
                  </dd>
                </div>
              ) : null}
              {installer.website ? (
                <div>
                  <dt className="meta">Website</dt>
                  <dd className="mt-1 break-all">
                    <a
                      href={installer.website}
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {installer.website.replace(/^https?:\/\//, '')}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </section>

        {displayTags && displayTags.length > 0 ? (
          <section className="mt-12">
            <h2 className="t-heading">Themes in reviews</h2>
            <p className="t-body-sm mt-2 max-w-2xl">
              Tags come from scraped Google reviews
              {installer.generatorScopedTags?.length
                ? ', preferring EV-related reviews when available'
                : ''}
              . Not an endorsement.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {displayTags.slice(0, 12).map((tag) => (
                <li
                  key={tag.id}
                  className="rounded-btn border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-1.5 text-[13px] font-semibold text-[var(--color-ink)]"
                >
                  {tag.label}
                  <span className="meta meta-soft ml-2 tabular">
                    {tag.matchedReviewCount}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {snippets.length > 0 ? (
          <section className="mt-12">
            <h2 className="t-heading">EV charger review excerpts</h2>
            <p className="t-body-sm mt-2 max-w-2xl">
              Short excerpts that mention EV chargers, Level 2 installs, or
              related brands. Confirm details directly with the shop.
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {snippets.slice(0, 3).map((snip) => (
                <li key={snip.reviewId} className="panel p-5">
                  {snip.rating != null ? (
                    <p className="meta">{snip.rating.toFixed(1)} stars</p>
                  ) : null}
                  <p className="t-body-sm mt-2">&ldquo;{snip.text}&rdquo;</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {nearby.length > 0 ? (
          <section className="mt-16">
            <h2 className="t-section">Nearby in {s?.name || installer.state}</h2>
            <p className="t-body-sm mt-2">
              Other researched installers nearby, still not endorsements.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {nearby.map((item) => (
                <InstallerCard
                  key={item.id}
                  installer={toInstallerListItem(item)}
                />
              ))}
            </div>
          </section>
        ) : null}

        <FAQ items={faqs} />

        <p className="t-body-sm mt-10">
          <Link href="/for-installers" className="link">
            Claim or correct this listing
          </Link>
          {' · '}
          <Link href="/guides/questions-to-ask-ev-charger-installer" className="link">
            Questions to ask before you call
          </Link>
        </p>
      </article>
    </>
  )
}

function LocalBusinessJsonLd({
  installer,
  description,
}: {
  installer: {
    name: string
    address: string
    city: string
    stateAbbr: string
    phone: string
    website: string
    stateSlug: string
    slug: string
    lat: number | null
    lng: number | null
    totalScore: number | null
    reviewsCount: number
    categoryName?: string
  }
  description: string
}) {
  const profileUrl = `${SITE_URL}${LIST_BASE}/${installer.stateSlug}/${installer.slug}`
  const json: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${profileUrl}#business`,
    name: installer.name,
    description,
    url: installer.website || profileUrl,
    telephone: installer.phone || undefined,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE.name,
      url: SITE_URL,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: installer.address || undefined,
      addressLocality: installer.city || undefined,
      addressRegion: installer.stateAbbr || undefined,
      addressCountry: 'US',
    },
  }
  if (installer.website) json.sameAs = installer.website
  if (installer.lat != null && installer.lng != null) {
    json.geo = {
      '@type': 'GeoCoordinates',
      latitude: installer.lat,
      longitude: installer.lng,
    }
  }
  // Google review totals stay in the UI with attribution; omit AggregateRating
  // from JSON-LD; these are not first-party reviews hosted by this site.
  if (installer.categoryName) {
    json.knowsAbout = [
      installer.categoryName,
      'Level 2 EV charger installation',
      'Home EV charger installation',
      'Automatic transfer switch installation',
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
