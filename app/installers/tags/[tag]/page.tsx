import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  DIRECTORY_TAGS,
  NATIONAL_TAG_MAP_LIMIT,
  NATIONAL_TAG_PREVIEW_LIMIT,
  getDirectoryTagBySlug,
  getInstallersByTag,
  getStateCountsForTag,
  getTagFaqs,
  getTagH1,
  getTagIntro,
  getTagMetaDescription,
  getTagSeoTitle,
} from '@/lib/directory-tags'
import {
  sortInstallersBySignal,
  toInstallerListItem,
  toInstallerMapItem,
  TOTAL_INSTALLERS,
} from '@/lib/installers'
import { FAQ, FAQJsonLd } from '@/components/FAQ'
import { pageMetadata } from '@/lib/seo'
import { InstallerDotMap } from '@/components/InstallerDotMap'
import { FilteredInstallers } from '@/components/FilteredInstallers'
import { InstallerLinkList } from '@/components/InstallerLinkList'
import { BreadcrumbListJsonLd, BreadcrumbNav } from '@/components/Breadcrumbs'
import { DirectoryTagCrossLinks } from '@/components/DirectoryTagCrossLinks'
import { CountChip } from '@/components/CountChip'
import { LIST_BASE, SITE, SITE_URL} from '@/lib/site'

type Props = { params: Promise<{ tag: string }> }

export function generateStaticParams() {
  return DIRECTORY_TAGS.map((tag) => ({ tag: tag.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { tag: tagSlug } = await params
  const tag = getDirectoryTagBySlug(tagSlug)
  if (!tag) return {}
  const matches = getInstallersByTag(tag)
  return pageMetadata({
    title: getTagSeoTitle(tag, matches.length),
    description: getTagMetaDescription(tag, matches.length),
    path: `${LIST_BASE}/tags/${tag.slug}`,
  })
}

export default async function DirectoryTagPage({ params }: Props) {
  const { tag: tagSlug } = await params
  const tag = getDirectoryTagBySlug(tagSlug)
  if (!tag) notFound()

  const matches = sortInstallersBySignal(getInstallersByTag(tag))
  const preview = matches.slice(0, NATIONAL_TAG_PREVIEW_LIMIT)
  const mapPreview = matches.slice(0, NATIONAL_TAG_MAP_LIMIT)
  const stateCounts = getStateCountsForTag(tag)
  const faqs = getTagFaqs(tag, matches.length)
  const remaining = Math.max(0, matches.length - preview.length)

  return (
    <>
      <FAQJsonLd items={faqs} />
      <TagCollectionJsonLd
        tag={tag}
        totalCount={matches.length}
        preview={preview}
      />
      <BreadcrumbListJsonLd
        items={[
          { label: 'Home', href: '/' },
          { label: 'Installers', href: LIST_BASE },
          {
            label: tag.shortLabel,
            href: `${LIST_BASE}/tags/${tag.slug}`,
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Installers', href: LIST_BASE },
            { label: tag.shortLabel },
          ]}
        />
        <span className="eyebrow mt-6 block w-fit">{tag.eyebrow}</span>
        <h1 className="t-display mt-4">{getTagH1(tag)}</h1>
        <p className="t-body mt-6 max-w-3xl text-[18px]">
          {getTagIntro(tag, matches.length, TOTAL_INSTALLERS)}
        </p>
        {tag.slug === 'tesla' ? (
          <div className="t-body-sm mt-6 max-w-3xl space-y-3">
            <p>
              <strong className="text-[var(--color-ink)]">Dealer.</strong>{' '}
              Looking for a specific charger brand? Start here, then
              ask if they are an authorized or Premier dealer and how warranty
              registration works.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Installer.</strong>{' '}
              Need the electrical, fuel, and transfer-switch work? Confirm load
              calc, permits, and recent installs of that brand, not just a logo on
              the site.
            </p>
            <p>
              <strong className="text-[var(--color-ink)]">Service.</strong>{' '}
              Already own a unit? Ask about maintenance plans, parts access, and
              whether they service your model.
            </p>
          </div>
        ) : null}
      </section>

      {matches.length > 0 ? (
        <>
          <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-10">
            <div className="mb-6">
              <span className="eyebrow">Browse by state</span>
              <h2 className="t-heading mt-2">
                {tag.shortLabel} matches by state
              </h2>
              <p className="t-body-sm mt-2 max-w-2xl">
                Open a state page for the full {tag.shortLabel.toLowerCase()}{' '}
                list in that market. National pages preview the strongest{' '}
                {NATIONAL_TAG_PREVIEW_LIMIT} matches only.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {stateCounts.map((entry) => (
                <li key={entry.stateSlug}>
                  <Link
                    href={`${LIST_BASE}/${entry.stateSlug}/tags/${tag.slug}`}
                    className="flex items-center justify-between gap-2 rounded-card border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2.5 text-[15px] text-[var(--color-ink)] transition hover:border-[var(--color-ink)]"
                  >
                    <span className="truncate font-medium">
                      {entry.stateName}
                    </span>
                    <CountChip count={entry.count} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-10">
            <InstallerDotMap
              installers={mapPreview.map(toInstallerMapItem)}
              title={`${tag.shortLabel} installers (preview)`}
              eyebrow={
                tag.kind === 'brand'
                  ? 'National brand filter'
                  : 'National intent filter'
              }
            />
          </section>
          <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-10">
            <Suspense
              fallback={
                <p className="text-[16px] text-[var(--color-muted)]">
                  Loading filters…
                </p>
              }
            >
              <FilteredInstallers
                installers={preview.map(toInstallerListItem)}
                title={`Top ${preview.length} ${tag.shortLabel} matches`}
                eyebrow={tag.kind === 'brand' ? 'Brand list' : 'Intent list'}
              />
            </Suspense>
            <InstallerLinkList
              installers={preview.map(toInstallerListItem)}
              title={`Top ${preview.length} ${tag.shortLabel} profile links`}
            />
            {remaining > 0 ? (
              <p className="t-body-sm mt-6 max-w-2xl">
                Showing {preview.length.toLocaleString()} of{' '}
                {matches.length.toLocaleString()} national matches. Use the
                state grid above for the rest (
                {remaining.toLocaleString()} more), or open{' '}
                <Link href={LIST_BASE} className="link">
                  all installers by state
                </Link>
                .
              </p>
            ) : null}
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-10">
          <p className="t-body">
            No matches for {tag.label} yet.{' '}
            <Link href={LIST_BASE} className="link">
              Browse all installers by state
            </Link>
            .
          </p>
        </section>
      )}

      <DirectoryTagCrossLinks tag={tag} />

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-10">
        <FAQ items={faqs} />
      </section>
    </>
  )
}

function TagCollectionJsonLd({
  tag,
  totalCount,
  preview,
}: {
  tag: { label: string; slug: string; shortLabel: string }
  totalCount: number
  preview: { name: string; stateSlug: string; slug: string }[]
}) {
  const pageUrl = `${SITE_URL}${LIST_BASE}/tags/${tag.slug}`
  const json = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': pageUrl,
    name:
      tag.slug === 'tesla'
        ? 'Tesla-related installers'
        : `${tag.label} EV charger installers`,
    description: `${totalCount} researched installers matching ${tag.shortLabel}.`,
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE.name,
      url: SITE_URL,
    },
    about: {
      '@type': 'Thing',
      name:
        tag.slug === 'tesla'
          ? 'Brand-tagged installers and service'
          : `${tag.label} EV charger installers`,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: preview.length,
      itemListElement: preview.map((installer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}${LIST_BASE}/${installer.stateSlug}/${installer.slug}`,
        name: installer.name,
      })),
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
