import Link from 'next/link'
import { LIST_BASE } from '@/lib/site'
import type { InstallerListItem } from '@/lib/installer-model'
import { confidenceLabel } from '@/lib/installer-model'

type LinkItem = Pick<
  InstallerListItem,
  'id' | 'slug' | 'name' | 'city' | 'stateAbbr' | 'stateSlug' | 'lanes' | 'primaryLane' | 'generatorConfidence'
>

export function InstallerLinkList({
  installers,
  title = 'All installers in this view',
  description = 'Every installer we found in this view. Open a profile for website signal, reviews, and contact paths.',
  eyebrow,
  className = 'mt-14',
  showConfidence = true,
}: {
  installers: LinkItem[]
  title?: string
  description?: string
  eyebrow?: string
  className?: string
  showConfidence?: boolean
}) {
  if (installers.length === 0) return null
  return (
    <section className={className}>
      {eyebrow ? (
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="eyebrow">{eyebrow}</span>
          <span className="rule min-w-8 flex-1" />
          <span className="meta tabular">
            {installers.length} profile{installers.length === 1 ? '' : 's'}
          </span>
        </div>
      ) : null}
      <h2 className={`t-section ${eyebrow ? 'mt-3' : ''}`}>{title}</h2>
      <p className="t-body-sm mt-2 max-w-2xl">{description}</p>
      <ul className="mt-6 columns-1 gap-x-8 sm:columns-2 lg:columns-3">
        {installers.map((installer) => (
          <li key={installer.id} className="mb-2 break-inside-avoid text-[15px]">
            <Link
              href={`${LIST_BASE}/${installer.stateSlug}/${installer.slug}`}
              className="link font-semibold"
            >
              {installer.name}
            </Link>
            <span className="text-[var(--color-muted)]">
              {' '}
              · {installer.city || installer.stateAbbr}
              {showConfidence
                ? ` · ${confidenceLabel(installer.generatorConfidence || (installer.lanes?.residential_l2?.confidence as any) || "medium")}`
                : ''}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
