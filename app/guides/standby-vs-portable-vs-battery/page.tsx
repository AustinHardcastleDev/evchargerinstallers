import { permanentRedirect } from 'next/navigation'

export default function LegacyGuideRedirect() {
  permanentRedirect('/guides/hardwired-vs-nema-14-50')
}
