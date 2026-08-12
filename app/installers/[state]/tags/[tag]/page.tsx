import { notFound, permanentRedirect } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  MIN_STATE_TAG_INSTALLERS,
  getDirectoryTagBySlug,
  getInstallersByTagInState,
  getStateDirectoryTags,
  getTagFaqs,
  getTagH1,
  getTagIntro,
  getTagMetaDescription,
  getTagSeoTitle,
} from '@/lib/directory-tags'
import {
  getStateBySlug,
  states,
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
import { LIST_BASE, SITE, SITE_URL} from '@/lib/site'

type Props = { params: Promise<{ state: string; tag: string }> }

export function generateStaticParams() {
  return Object.keys(states).flatMap((state) =>
    getStateDirectoryTags(state).map((tag) => ({ state, tag: tag.slug })),
  )
}

export async function generateMetadata({ params }: Props) {
  const { state, tag: tagSlug } = await params
  const s = getStateBySlug(state)
  const tag = getDirectoryTagBySlug(tagSlug)
  if (!s || !tag) return {}
  const matches = getInstallersByTagInState(tag, state)
  if (matches.length < MIN_STATE_TAG_INSTALLERS) return {}
  return pageMetadata({
    title: getTagSeoTitle(tag, matches.length, s.name),
    description: getTagMetaDescription(tag, matches.length, s.name),
    path: `${LIST_BASE}/${s.slug}/tags/${tag.slug}`,
  })
}

export default async function StateDirectoryTagPage({ params }: Props) {
  const { state, tag: tagSlug } = await params
  const s = getStateBySlug(state)
  const tag = getDirectoryTagBySlug(tagSlug)
  if (!s || !tag) notFound()

  const matches = sortInstallersBySignal(
    getInstallersByTagInState(tag, state),
  )
  if (matches.length < MIN_STATE_TAG_INSTALLERS) {
    permanentRedirect(
      tag.kind === 'brand'
        ? `${LIST_BASE}/${s.slug}?brands=${tag.id}`
        : `${LIST_BASE}/tags/${tag.slug}`,
    )
  }

  const faqs = getTagFaqs(tag, matches.length, s.name)

  return (
    <>
      <FAQJsonLd items={faqs} />
      <StateTagJsonLd state={s} tag={tag} count={matches.length} />
      <BreadcrumbListJsonLd
        items={[
          { label: 'Home', href: '/' },
          { label: 'Installers', href: LIST_BASE },
          { label: s.name, href: `${LIST_BASE}/${s.slug}` },
          {
            label: tag.shortLabel,
            href: `${LIST_BASE}/${s.slug}/tags/${tag.slug}`,
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-10">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Installers', href: LIST_BASE },
            { label: s.name, href: `${LIST_BASE}/${s.slug}` },
            { label: tag.shortLabel },
          ]}
        />
        <span className="eyebrow mt-6 block w-fit">
          {s.abbr} · {tag.eyebrow}
        </span>
        <h1 className="t-display mt-4">{getTagH1(tag, s.name)}</h1>
        <p className="t-body mt-6 max-w-3xl text-[18px]">
          {getTagIntro(tag, matches.length, TOTAL_INSTALLERS, s.name)}
        </p>
        {tag.slug === 'tesla' ? (
          <p className="t-body-sm mt-4 max-w-3xl">
            Use this {s.name} shortlist whether you need a brand specialist,
            installer, or service shop. Then verify authorization and scope
            directly.
          </p>
        ) : null}
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-10">
        <InstallerDotMap
          installers={matches.map(toInstallerMapItem)}
          title={`${tag.shortLabel} in ${s.abbr}`}
          eyebrow={
            tag.kind === 'brand' ? 'State brand filter' : 'State intent filter'
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
            installers={matches.map(toInstallerListItem)}
            title={`${tag.shortLabel} · ${s.name}`}
            eyebrow={tag.kind === 'brand' ? 'State brand list' : 'State list'}
          />
        </Suspense>
        <InstallerLinkList
          installers={matches.map(toInstallerListItem)}
          title={`All ${tag.shortLabel} matches in ${s.name}`}
        />
      </section>

      <DirectoryTagCrossLinks
        tag={tag}
        stateSlug={s.slug}
        stateName={s.name}
      />

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 lg:px-10">
        <p className="t-body-sm">
          Prefer the full state list?{' '}
          <Link href={`${LIST_BASE}/${s.slug}`} className="link">
            Browse all {s.name} installers
          </Link>
          .
        </p>
        <FAQ items={faqs} />
      </section>
    </>
  )
}

function StateTagJsonLd({
  state,
  tag,
  count,
}: {
  state: { name: string; slug: string }
  tag: { label: string; slug: string; shortLabel: string }
  count: number
}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name:
      tag.slug === 'tesla'
        ? `${state.name} Brand-tagged installers`
        : `${state.name} EV charger installers: ${tag.label}`,
    description: `${count} researched installers in ${state.name} matching ${tag.shortLabel}.`,
    url: `${SITE_URL}${LIST_BASE}/${state.slug}/tags/${tag.slug}`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE_URL },
    about: {
      '@type': 'Thing',
      name:
        tag.slug === 'tesla'
          ? `Brand-tagged installers in ${state.name}`
          : `${tag.label} EV charger installers in ${state.name}`,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
