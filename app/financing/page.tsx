import { permanentRedirect } from 'next/navigation'

/** Generator financing hub retired; send buyers to the cost guide path. */
export default function FinancingRedirectPage() {
  permanentRedirect('/guides/ev-charger-installation-cost')
}
