import Link from 'next/link'
import {
  confidenceLabel,
  signalTier,
  type GeneratorConfidence,
  legacyConfidence,
  generatorReviewCount,
  type InstallerListItem,
} from '@/lib/installer-model'
import { LIST_BASE } from '@/lib/site'
import { SponsoredTag } from './SponsoredTag'

type Props = {
  installer: InstallerListItem
  variant?: 'default' | 'featured'
  sourceSection?: string
}

const ROW_TIER_CLASS: Record<ReturnType<typeof signalTier>, string> = {
  dedicated: 'row-dedicated',
  repeated: 'row-repeated',
  signal: 'row-signal',
}

/**
 * List row. The left rule reads sponsorship first, then website-signal tier.
 * Sponsored rows also take the warm surface and a labeled tag.
 */
export function InstallerCard({
  installer,
  variant = 'default',
  sourceSection,
}: Props) {
  const href = `${LIST_BASE}/${installer.stateSlug}/${installer.slug}`
  const isFeatured = variant === 'featured'
  const rowClass = installer.sponsored
    ? 'row-sponsored'
    : ROW_TIER_CLASS[signalTier(legacyConfidence(installer))]

  return (
    <div
      className={`group relative h-full min-w-0 row ${rowClass} ${isFeatured ? 'p-6 md:p-7' : 'p-5'}`}
      data-source-section={sourceSection}
    >
      <Link
        href={href}
        className="absolute inset-0 z-0"
        aria-label={`View ${installer.name} profile`}
      >
        <span className="sr-only">View {installer.name} profile</span>
      </Link>
      <div className="pointer-events-none relative z-[1]">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-2">
          <h3 className="t-heading min-w-0 break-words">{installer.name}</h3>
          {installer.sponsored ? <SponsoredTag /> : null}
          <GeneratorReviewsBadge count={generatorReviewCount(installer)} />
        </div>

        <div className="meta meta-soft mt-2 break-words">
          {installer.city
            ? `${installer.city}, ${installer.stateAbbr}`
            : installer.state}
          <span className="mx-2 text-[var(--color-border)]">·</span>
          {installer.categoryName || 'installer'}
          {typeof installer.distanceMiles === 'number' ? (
            <>
              <span className="mx-2 text-[var(--color-border)]">·</span>
              {installer.distanceMiles < 10
                ? installer.distanceMiles.toFixed(1)
                : Math.round(installer.distanceMiles)}{' '}
              mi
            </>
          ) : null}
        </div>

        <p className="t-body-sm mt-4 line-clamp-3">{installer.writeup}</p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <ReviewLine
            reviewsCount={installer.reviewsCount}
            totalScore={installer.totalScore}
          />
          <ConfidenceBadge confidence={legacyConfidence(installer)} />
        </div>
      </div>
    </div>
  )
}

export function GeneratorReviewsBadge({
  count,
}: {
  count?: number | null
}) {
  const n = count || 0
  if (n <= 0) return null
  return (
    <span
      className="tag-sponsored shrink-0 tabular"
      title="EV-specific reviews in the scraped sample"
    >
      {n} EV review{n === 1 ? '' : 's'}
    </span>
  )
}

export function ConfidenceBadge({
  confidence,
}: {
  confidence: GeneratorConfidence
}) {
  const tier = signalTier(confidence)
  const dotVar =
    tier === 'dedicated'
      ? 'var(--color-ink)'
      : tier === 'repeated'
        ? 'var(--color-muted)'
        : 'var(--color-faint)'

  return (
    <span className="tag-pill shrink-0 gap-2">
      <span
        aria-hidden
        className="inline-block size-2 rounded-full"
        style={{ background: dotVar }}
      />
      {confidenceLabel(confidence)}
    </span>
  )
}

export function ReviewLine({
  reviewsCount,
  totalScore,
}: {
  reviewsCount: number
  totalScore: number | null
}) {
  if (!reviewsCount) {
    return (
      <span className="text-[14px] text-[var(--color-faint)]">
        No public reviews listed
      </span>
    )
  }

  const score = typeof totalScore === 'number' ? totalScore.toFixed(1) : 'n/a'

  return (
    <span className="inline-flex max-w-full flex-wrap items-baseline gap-x-2 text-[14px] tabular text-[var(--color-muted)]">
      <span aria-hidden className="text-[var(--color-ink)]">
        {renderStars(typeof totalScore === 'number' ? totalScore : null)}
      </span>
      <span className="font-semibold text-[var(--color-ink)]">{score}</span>
      <span>
        · {reviewsCount.toLocaleString()} Google review
        {reviewsCount === 1 ? '' : 's'}
      </span>
    </span>
  )
}

function renderStars(score: number | null): string {
  if (typeof score !== 'number') return '☆☆☆☆☆'
  const filled = Math.round(score)
  return '★★★★★'.slice(0, filled) + '☆☆☆☆☆'.slice(filled)
}
