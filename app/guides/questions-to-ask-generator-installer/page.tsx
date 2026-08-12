import { permanentRedirect } from 'next/navigation'

export default function LegacyGuideRedirect() {
  permanentRedirect('/guides/questions-to-ask-ev-charger-installer')
}
