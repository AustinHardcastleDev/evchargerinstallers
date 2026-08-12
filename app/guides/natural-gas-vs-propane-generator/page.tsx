import { permanentRedirect } from 'next/navigation'

export default function LegacyGuideRedirect() {
  permanentRedirect('/guides/panel-upgrade-vs-load-management')
}
