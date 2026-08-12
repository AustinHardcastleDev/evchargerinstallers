import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact EVChargerInstallerList',
  description:
    'Send an installer correction, listing suggestion, buyer question, or update request for EVChargerInstallerList.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-10">
      <nav className="meta meta-soft mt-4 break-words">
        <Link href="/" className="hover:text-[var(--color-ink)]">
          Home
        </Link>
        <span className="mx-2 text-[var(--color-border)]">/</span>
        <span className="text-[var(--color-ink)]">Contact</span>
      </nav>

      <span className="eyebrow mt-8">Reach us</span>
      <h1 className="t-display mt-4">
        Send a correction, suggestion, or question.
      </h1>
      <p className="t-body mt-6 text-[19px]">
        Use the form for installer updates, missing listings, buyer questions,
        or anything that should make the directory more useful. Specific
        beats vague.
      </p>

      <div className="mt-10">
        <ContactForm
          topic="EVChargerInstallerList contact"
          intro="Tell us what needs attention. Installer corrections are easiest when you include the listing URL or the installer's website."
          includeCompany
          includeListingUrl
        />
      </div>
    </article>
  )
}
