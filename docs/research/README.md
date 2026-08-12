# EV charger installation research library

**Internal only. Nothing in `docs/` is ever served.** Next.js only publishes routes under `app/`
and static assets under `public/`. This directory is committed for the team's reference and is not
reachable from the site, the sitemap, or any build output.

Compiled 2026-08-11. Built for EVChargerInstallerList buyer guides, state/metro editorial, and claim hedges.

## Why this exists

We rank installers from website and review signal. These briefs are the raw material for guides and
editorial, and the register of what we refuse to claim.

## The files

| File | Covers |
|---|---|
| `01-equipment-and-charging-speeds.md` | Level 1/2/DC-fast, J1772/J3400, equipment classes |
| `02-costs-and-pricing.md` | Cost drivers, no unsourced rebate dollars |
| `03-codes-permits-compliance.md` | NEC 625, continuous load, permits, AHJ variation |
| `04-panel-capacity-load-management.md` | Load calc vs open slots, EMS, service upgrades |
| `05-installation-process-and-timeline.md` | Site visit through commissioning |
| `06-equipment-warranty-networking.md` | Listing, outdoor rating, networking, warranties |
| `07-choosing-an-installer.md` | Licensing hedges, EVITP language, quote checks |
| `08-market-housing-and-demand.md` | Housing form, owner-occupancy, demand patterns |
| `09-multifamily-commercial-and-accessibility.md` | Common-area, workplace, fleets, ADA |
| `10-state-and-regional-variation.md` | 50-state table scaffold + regional patterns |
| `source-register.json` | Every cited primary/near-primary source |

Every brief: executive summary, detailed findings, claims we can make, claims to avoid, known gaps, sources.

## Do not publish

- No claim that every home needs a panel upgrade.
- No claim that a 200 A panel automatically has capacity.
- No generic national permit price or timeline.
- No active rebate amount or deadline without primary-source refresh metadata.
- No manufacturer certification claim from website copy alone.
- No EVITP-certified contractor claim: EVITP certifies electricians, while contractors in its directory are described as EVITP Approved.
- No claim that a NEMA 14-50 receptacle is always cheaper, safer, or preferred.
- No claim that hardwiring is required everywhere.
- No connector-compatibility claim without current SAE/manufacturer sourcing.
- No "future-proof" promise.
- No claim that the federal Section 30C credit applies to equipment placed in service after June 30, 2026. Re-check the current IRS primary source before publishing any federal-credit statement.
- No claim that FAQ JSON-LD will produce Google rich results. Google retired FAQ rich results in May 2026; keep useful FAQs visible without FAQ schema.
