export type FAQItem = { q: string; a: string }

export function FAQ({
  title = 'Common questions',
  items,
}: {
  title?: string
  items: FAQItem[]
}) {
  return (
    <section className="mt-16 md:mt-20">
      <div className="flex flex-wrap items-center gap-4">
        <span className="eyebrow">Straight answers</span>
        <div className="rule hidden min-w-8 flex-1 sm:block" />
      </div>
      <h2 className="t-section mt-4">{title}</h2>
      <dl className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {items.map((item, i) => (
          <div key={i} className="py-7 md:grid md:grid-cols-[1fr_2fr] md:gap-10">
            <dt className="t-heading">{item.q}</dt>
            <dd className="t-body-sm mt-2 md:mt-0">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/** Visible FAQs stay on-page; do not emit FAQPage JSON-LD (playbook Task 10). */
export function FAQJsonLd(_props: { items: FAQItem[] }) {
  return null
}
