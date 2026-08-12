import { permanentRedirect } from 'next/navigation'

export default function BlogSlugRedirectPage() {
  permanentRedirect('/guides')
}
