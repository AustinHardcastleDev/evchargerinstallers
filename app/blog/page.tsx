import { permanentRedirect } from 'next/navigation'

/** Empty blog stays out of navigation/sitemap; any hits redirect to guides. */
export default function BlogRedirectPage() {
  permanentRedirect('/guides')
}
