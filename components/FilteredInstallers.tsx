'use client'

import { useMemo, type ReactNode } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  confidenceLabel,
  GENERATOR_REVIEW_FILTERS,
  generatorReviewCount,
  sortInstallersBySignal,
  type GeneratorConfidence,
  type GeneratorReviewFilterId,
  type InstallerListItem,
  legacyConfidence,
} from '@/lib/installer-model'
import { BRAND_TAGS } from '@/lib/brand-meta'
import { InstallerCard } from './InstallerCard'

const SIGNAL_OPTIONS: { id: GeneratorConfidence; label: string }[] = [
  { id: 'explicit', label: confidenceLabel('explicit') },
  { id: 'high', label: confidenceLabel('high') },
  { id: 'medium', label: confidenceLabel('medium') },
]

type FilterInstaller = InstallerListItem

function parseCsv(value: string | null): string[] {
  if (!value) return []
  return value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
}

function brandLabel(id: string): string {
  return (
    BRAND_TAGS.find((b) => b.id === id)?.shortLabel ||
    id.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  )
}

export function FilteredInstallers({
  installers,
  title = 'Matching installers',
  eyebrow = 'Filters',
  emptyText = 'No installers match every selected filter. Clear one or more filters and try again.',
}: {
  installers: FilterInstaller[]
  title?: string
  eyebrow?: string
  emptyText?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectedSignals = useMemo(() => {
    const allowed = new Set(SIGNAL_OPTIONS.map((o) => o.id))
    return parseCsv(searchParams.get('signal')).filter((id): id is GeneratorConfidence =>
      allowed.has(id as GeneratorConfidence),
    )
  }, [searchParams])

  const selectedBrands = useMemo(() => {
    return parseCsv(searchParams.get('brands'))
  }, [searchParams])

  const selectedTags = useMemo(() => {
    return parseCsv(searchParams.get('tags'))
  }, [searchParams])

  const selectedGenReviews = useMemo(() => {
    const allowed = new Set(
      GENERATOR_REVIEW_FILTERS.map((option) => option.id),
    )
    const value = searchParams.get('genReviews')
    if (value && allowed.has(value as GeneratorReviewFilterId)) {
      return value as GeneratorReviewFilterId
    }
    return null
  }, [searchParams])

  const signalCounts = useMemo(() => {
    const counts: Record<GeneratorConfidence, number> = {
      explicit: 0,
      high: 0,
      medium: 0,
    }
    for (const installer of installers) {
      counts[legacyConfidence(installer) as GeneratorConfidence] += 1
    }
    return counts
  }, [installers])

  const brandCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const installer of installers) {
      for (const brand of installer.primaryBrands || []) {
        counts.set(brand, (counts.get(brand) || 0) + 1)
      }
    }
    return [...counts.entries()]
      .map(([id, count]) => ({ id, label: brandLabel(id), count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
  }, [installers])

  const tagCounts = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>()
    for (const installer of installers) {
      for (const tag of installer.reviewTags || []) {
        const prev = counts.get(tag.id)
        if (prev) prev.count += 1
        else counts.set(tag.id, { label: tag.label, count: 1 })
      }
    }
    return [...counts.entries()]
      .map(([id, value]) => ({ id, label: value.label, count: value.count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
  }, [installers])

  const genReviewCounts = useMemo(() => {
    const counts: Record<GeneratorReviewFilterId, number> = {
      '1': 0,
      '5': 0,
      '10': 0,
    }
    for (const installer of installers) {
      const n = generatorReviewCount(installer)
      for (const option of GENERATOR_REVIEW_FILTERS) {
        if (n >= option.min) counts[option.id] += 1
      }
    }
    return counts
  }, [installers])

  const filtered = useMemo(() => {
    const minGenReviews = selectedGenReviews
      ? GENERATOR_REVIEW_FILTERS.find((option) => option.id === selectedGenReviews)
          ?.min || 0
      : 0
    const next = installers.filter((installer) => {
      if (
        selectedSignals.length > 0 &&
        !selectedSignals.includes(legacyConfidence(installer))
      ) {
        return false
      }
      if (selectedBrands.length > 0) {
        const brands = installer.primaryBrands || []
        if (!selectedBrands.some((id) => brands.includes(id))) return false
      }
      if (selectedTags.length > 0) {
        const ids = new Set((installer.reviewTags || []).map((tag) => tag.id))
        if (!selectedTags.every((id) => ids.has(id))) return false
      }
      if (
        minGenReviews > 0 &&
        generatorReviewCount(installer) < minGenReviews
      ) {
        return false
      }
      return true
    })
    return sortInstallersBySignal(next)
  }, [
    installers,
    selectedSignals,
    selectedBrands,
    selectedTags,
    selectedGenReviews,
  ])

  const activeCount =
    selectedSignals.length +
    selectedBrands.length +
    selectedTags.length +
    (selectedGenReviews ? 1 : 0)

  function replaceParams(mutate: (params: URLSearchParams) => void) {
    const params = new URLSearchParams(searchParams.toString())
    mutate(params)
    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }

  function setCsv(key: string, values: string[]) {
    replaceParams((params) => {
      if (values.length) params.set(key, values.join(','))
      else params.delete(key)
    })
  }

  function toggle(key: string, current: string[], value: string) {
    setCsv(
      key,
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    )
  }

  function setGenReviews(id: GeneratorReviewFilterId | null) {
    replaceParams((params) => {
      if (id) params.set('genReviews', id)
      else params.delete('genReviews')
    })
  }

  function clearAll() {
    replaceParams((params) => {
      params.delete('signal')
      params.delete('brands')
      params.delete('tags')
      params.delete('genReviews')
    })
  }

  return (
    <section className="overflow-hidden rounded-card border border-[var(--color-ink)] bg-[var(--color-panel)]">
      <div className="grid min-w-0 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="min-w-0 border-b border-[var(--color-ink)] bg-[var(--color-page)] p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6">
          <div className="flex items-baseline gap-3">
            <span className="eyebrow">{eyebrow}</span>
            <span className="rule flex-1" />
          </div>
          <h2 className="t-heading mt-3 text-[24px] sm:text-[26px]">
            Narrow the list.
          </h2>
          <p className="t-body-sm mt-3">
            Lists sort by EV-specific review count. Website signal and
            brand filters match any selected option. Review themes require every
            selected tag.
          </p>

          <details className="mt-5 lg:hidden">
            <summary className="cursor-pointer rounded-btn border border-[var(--color-ink)] px-4 py-3 text-[15px] font-semibold">
              Open filters{activeCount ? ` (${activeCount})` : ''}
            </summary>
            <FilterGroups
              className="mt-4"
              signalCounts={signalCounts}
              brandCounts={brandCounts}
              tagCounts={tagCounts}
              genReviewCounts={genReviewCounts}
              selectedSignals={selectedSignals}
              selectedBrands={selectedBrands}
              selectedTags={selectedTags}
              selectedGenReviews={selectedGenReviews}
              onToggleSignal={(id) => toggle('signal', selectedSignals, id)}
              onToggleBrand={(id) => toggle('brands', selectedBrands, id)}
              onToggleTag={(id) => toggle('tags', selectedTags, id)}
              onSelectGenReviews={setGenReviews}
            />
          </details>

          <FilterGroups
            className="mt-6 hidden lg:block"
            signalCounts={signalCounts}
            brandCounts={brandCounts}
            tagCounts={tagCounts}
            genReviewCounts={genReviewCounts}
            selectedSignals={selectedSignals}
            selectedBrands={selectedBrands}
            selectedTags={selectedTags}
            selectedGenReviews={selectedGenReviews}
            onToggleSignal={(id) => toggle('signal', selectedSignals, id)}
            onToggleBrand={(id) => toggle('brands', selectedBrands, id)}
            onToggleTag={(id) => toggle('tags', selectedTags, id)}
            onSelectGenReviews={setGenReviews}
          />
        </aside>

        <div className="min-w-0 p-4 sm:p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{title}</span>
              <div className="mt-2 text-[30px] font-extrabold leading-none tracking-[-0.035em] text-[var(--color-ink)] tabular sm:text-[34px]">
                {filtered.length.toLocaleString()}
                <span className="ml-2 text-[15px] font-semibold tracking-normal text-[var(--color-muted)]">
                  matching installer{filtered.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>
            {activeCount > 0 ? (
              <button
                type="button"
                onClick={clearAll}
                className="rounded-btn border border-[var(--color-ink)] px-4 py-2 text-[15px] font-semibold transition-colors hover:bg-[var(--color-page)]"
              >
                Clear filters
              </button>
            ) : null}
          </div>

          {activeCount > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedGenReviews ? (
                <ActiveChip
                  label={
                    GENERATOR_REVIEW_FILTERS.find(
                      (option) => option.id === selectedGenReviews,
                    )?.label || selectedGenReviews
                  }
                  onRemove={() => setGenReviews(null)}
                />
              ) : null}
              {selectedSignals.map((id) => (
                <ActiveChip
                  key={`signal-${id}`}
                  label={confidenceLabel(id)}
                  onRemove={() => toggle('signal', selectedSignals, id)}
                />
              ))}
              {selectedBrands.map((id) => (
                <ActiveChip
                  key={`brand-${id}`}
                  label={brandLabel(id)}
                  onRemove={() => toggle('brands', selectedBrands, id)}
                />
              ))}
              {selectedTags.map((id) => {
                const tag = tagCounts.find((item) => item.id === id)
                return (
                  <ActiveChip
                    key={`tag-${id}`}
                    label={tag?.label || id}
                    onRemove={() => toggle('tags', selectedTags, id)}
                  />
                )
              })}
            </div>
          ) : null}

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {filtered.map((installer) => (
                <InstallerCard key={installer.id} installer={installer} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-card border border-[var(--color-border)] bg-[var(--color-page)] p-6 text-[16px] text-[var(--color-body)]">
              {emptyText}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ActiveChip({
  label,
  onRemove,
}: {
  label: string
  onRemove: () => void
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex max-w-full items-center gap-2 rounded-btn bg-[var(--color-ink)] px-3 py-1.5 text-[13px] font-semibold text-white"
    >
      <span className="min-w-0 break-words">{label}</span>
      <span aria-hidden="true">×</span>
    </button>
  )
}

function FilterGroups({
  className,
  signalCounts,
  brandCounts,
  tagCounts,
  genReviewCounts,
  selectedSignals,
  selectedBrands,
  selectedTags,
  selectedGenReviews,
  onToggleSignal,
  onToggleBrand,
  onToggleTag,
  onSelectGenReviews,
}: {
  className?: string
  signalCounts: Record<GeneratorConfidence, number>
  brandCounts: { id: string; label: string; count: number }[]
  tagCounts: { id: string; label: string; count: number }[]
  genReviewCounts: Record<GeneratorReviewFilterId, number>
  selectedSignals: GeneratorConfidence[]
  selectedBrands: string[]
  selectedTags: string[]
  selectedGenReviews: GeneratorReviewFilterId | null
  onToggleSignal: (id: GeneratorConfidence) => void
  onToggleBrand: (id: string) => void
  onToggleTag: (id: string) => void
  onSelectGenReviews: (id: GeneratorReviewFilterId | null) => void
}) {
  const visibleSignals = SIGNAL_OPTIONS.filter((option) => signalCounts[option.id] > 0)
  const visibleBrands = brandCounts.filter((brand) => brand.count > 0)
  const visibleTags = tagCounts.filter((tag) => tag.count > 0).slice(0, 16)
  const visibleGenReviews = GENERATOR_REVIEW_FILTERS.filter(
    (option) => genReviewCounts[option.id] > 0,
  )

  return (
    <div className={className}>
      {visibleGenReviews.length > 0 ? (
        <FilterBlock title="EV reviews">
          {visibleGenReviews.map((option) => (
            <FilterButton
              key={option.id}
              label={option.label}
              count={genReviewCounts[option.id]}
              checked={selectedGenReviews === option.id}
              onClick={() =>
                onSelectGenReviews(
                  selectedGenReviews === option.id ? null : option.id,
                )
              }
            />
          ))}
        </FilterBlock>
      ) : null}

      {visibleSignals.length > 0 ? (
        <FilterBlock title="Website signal">
          {visibleSignals.map((option) => (
            <FilterButton
              key={option.id}
              label={option.label}
              count={signalCounts[option.id]}
              checked={selectedSignals.includes(option.id)}
              onClick={() => onToggleSignal(option.id)}
            />
          ))}
        </FilterBlock>
      ) : null}

      {visibleBrands.length > 0 ? (
        <FilterBlock title="Brand signal">
          {visibleBrands.map((brand) => (
            <FilterButton
              key={brand.id}
              label={brand.label}
              count={brand.count}
              checked={selectedBrands.includes(brand.id)}
              onClick={() => onToggleBrand(brand.id)}
            />
          ))}
        </FilterBlock>
      ) : null}

      {visibleTags.length > 0 ? (
        <FilterBlock title="Review themes">
          {visibleTags.map((tag) => (
            <FilterButton
              key={tag.id}
              label={tag.label}
              count={tag.count}
              checked={selectedTags.includes(tag.id)}
              onClick={() => onToggleTag(tag.id)}
            />
          ))}
        </FilterBlock>
      ) : null}
    </div>
  )
}

function FilterBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="text-[15px] font-extrabold tracking-tight text-[var(--color-ink)]">
        {title}
      </div>
      <div className="mt-2 grid gap-1.5">{children}</div>
    </div>
  )
}

function FilterButton({
  label,
  count,
  checked,
  onClick,
}: {
  label: string
  count: number
  checked: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'grid min-w-0 grid-cols-[minmax(0,1fr)_auto] gap-2 rounded-btn border px-3 py-2 text-left text-[13px] font-semibold transition-colors',
        checked
          ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-white'
          : 'border-[var(--color-border)] bg-[var(--color-panel)] text-[var(--color-body)] hover:border-[var(--color-ink)]',
      ].join(' ')}
    >
      <span className="min-w-0 break-words">{label}</span>
      <span
        className={
          checked
            ? 'tabular text-white/70'
            : 'tabular text-[var(--color-muted)]'
        }
      >
        {count}
      </span>
    </button>
  )
}
