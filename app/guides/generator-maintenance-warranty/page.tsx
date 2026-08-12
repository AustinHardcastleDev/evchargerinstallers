import { permanentRedirect } from 'next/navigation'

export default function LegacyGuideRedirect() {
  permanentRedirect('/guides/rebates-and-tax-credits')
}
