import { permanentRedirect } from 'next/navigation'

export default function LegacyGuideRedirect() {
  permanentRedirect('/guides/ev-charger-permits-and-codes')
}
