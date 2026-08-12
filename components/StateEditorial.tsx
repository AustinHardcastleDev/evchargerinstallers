import { getStateEditorial } from '@/lib/state-editorial'

export function StateEditorial({ stateSlug }: { stateSlug: string }) {
  const editorial = getStateEditorial(stateSlug)
  if (!editorial) return null

  const homeContext = editorial.homeInstallContext || editorial.costContext

  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-12 lg:px-10">
      <div className="panel p-5 sm:p-6 md:p-8">
        <span className="eyebrow">State market notes</span>
        <div className="mt-6 space-y-6">
          <EditorialBlock title="Installer landscape" body={editorial.marketOverview} />
          <EditorialBlock title="Home install context" body={homeContext} />
          <EditorialBlock title="Before you call" body={editorial.buyerNote} />
        </div>
        {editorial.verifiedAsOf ? (
          <p className="meta meta-soft mt-6">
            Market notes generated from directory signal and the research
            library; verified as of {editorial.verifiedAsOf}. Not legal advice.
            Confirm permits, licensing, and utility rules with your AHJ.
          </p>
        ) : null}
      </div>
    </section>
  )
}

function EditorialBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-w-0">
      <h2 className="t-heading">{title}</h2>
      <p className="t-body-sm mt-2 max-w-3xl">{body}</p>
    </div>
  )
}
