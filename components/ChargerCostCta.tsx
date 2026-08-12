import Link from 'next/link'
import { ButtonLink } from './Button'

export function ChargerCostCta({
  title = 'Budget the install before you compare quotes.',
  body = 'Home Level 2 cost depends on panel capacity, circuit length, permits, and whether you need load management. Read the researched cost range, then ask installers to itemize the same line items.',
  linkLabel = 'See EV charger install cost →',
}: {
  title?: string
  body?: string
  linkLabel?: string
}) {
  return (
    <aside className="band-dark rounded-card px-6 py-8 sm:px-8">
      <span className="eyebrow-bare text-[var(--color-band-muted)]">Cost & rebates</span>
      <h2 className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[30px]">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-[var(--color-band-body)]">
        {body}
      </p>
      <div className="mt-6">
        <ButtonLink href="/guides/ev-charger-installation-cost" variant="primary">
          {linkLabel}
        </ButtonLink>
      </div>
      <p className="mt-4 text-[13px] text-[var(--color-band-muted)]">
        Or browse{' '}
        <Link href="/guides" className="link">
          all buyer guides
        </Link>{' '}
        for panel, permitting, and first-call checklists.
      </p>
    </aside>
  )
}
