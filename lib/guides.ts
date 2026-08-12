export type GuideMeta = {
  slug: string
  title: string
  description: string
  eyebrow: string
  phase: 'P0' | 'P1' | 'P2'
  primaryKeyword: string
}

export const GUIDES: GuideMeta[] = [
  {
    slug: 'ev-charger-installation-cost',
    title: 'EV charger installation cost',
    description:
      'What drives home Level 2 install quotes: circuit length, panel capacity, mounting, permits, and when load management changes the bill.',
    eyebrow: 'Cost',
    phase: 'P0',
    primaryKeyword: 'EV charger installation cost',
  },
  {
    slug: 'what-size-ev-charger',
    title: 'What size EV charger do you need?',
    description:
      'Level 1 vs Level 2, amperage choices, and how overnight charging needs map to circuit size—not marketing miles-per-hour claims.',
    eyebrow: 'Sizing',
    phase: 'P0',
    primaryKeyword: 'what size EV charger do I need',
  },
  {
    slug: 'questions-to-ask-ev-charger-installer',
    title: 'Questions to ask an EV charger installer',
    description:
      'A first-call checklist: license, load calc, panel work, permits, warranty path, and red flags before you deposit.',
    eyebrow: 'Hiring',
    phase: 'P0',
    primaryKeyword: 'questions to ask EV charger installer',
  },
  {
    slug: 'ev-charger-installation-process',
    title: 'EV charger installation process and timeline',
    description:
      'From site walk to first charge: load calculation, permits, circuit work, inspection, and what usually sets the clock.',
    eyebrow: 'Process',
    phase: 'P1',
    primaryKeyword: 'EV charger installation process',
  },
  {
    slug: 'panel-upgrade-vs-load-management',
    title: 'Panel upgrade vs load management',
    description:
      'When a service upgrade is the honest answer, and when listed load-management gear can keep a Level 2 install on the existing panel.',
    eyebrow: 'Electrical',
    phase: 'P1',
    primaryKeyword: 'EV charger panel upgrade',
  },
  {
    slug: 'hardwired-vs-nema-14-50',
    title: 'Hardwired vs NEMA 14-50 EV charger installs',
    description:
      'Tradeoffs between a hardwired Level 2 EVSE and a receptacle install, including listing, outdoor rating, and cord rules.',
    eyebrow: 'Mounting',
    phase: 'P1',
    primaryKeyword: 'hardwired vs NEMA 14-50 EV charger',
  },
  {
    slug: 'ev-charger-permits-and-codes',
    title: 'EV charger permits and codes',
    description:
      'NEC Article 625 basics, outdoor listings, AHJ permits, and why your local adopted code edition beats a national blog.',
    eyebrow: 'Codes',
    phase: 'P2',
    primaryKeyword: 'EV charger permit requirements',
  },
  {
    slug: 'j3400-vs-j1772-home-charging',
    title: 'J3400 vs J1772 for home charging',
    description:
      'How connector standards affect home EVSE choice, adapters, and why vehicle inlet support still needs a model-year check.',
    eyebrow: 'Connectors',
    phase: 'P2',
    primaryKeyword: 'J3400 vs J1772',
  },
  {
    slug: 'multifamily-condo-ev-charging',
    title: 'Multifamily and condo EV charging',
    description:
      'Why apartment and HOA installs behave more like shared infrastructure than a private garage job—and what to confirm first.',
    eyebrow: 'Housing',
    phase: 'P2',
    primaryKeyword: 'apartment EV charger installation',
  },
  {
    slug: 'rebates-and-tax-credits',
    title: 'EV charger rebates and tax credits',
    description:
      'How to confirm utility, state, and federal incentives without hardcoding dollars that go stale—start with AFDC and DSIRE.',
    eyebrow: 'Incentives',
    phase: 'P2',
    primaryKeyword: 'EV charger rebate',
  },
]

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug)
}
