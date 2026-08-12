# EVChargerInstallerList — build handoff

**Completed:** 2026-08-12  
**Showrunner:** autonomous Cursor agent per playbook

## What shipped

- National directory of **1,431** residential-first EV charger installers across **50** states
- Gemini Flash profiles for every M+ listing; **50** state editorials; **267** metro editorials
- 10 cited EV buyer guides; empty blog/financing retired
- Durable SQLite + launchd controller completed national Apify/Maps/reviews/profiles without Cursor ownership of paid runs

## Workspaces

| Role | Path |
|---|---|
| Site | `~/Documents/GitHub/evchargerinstallers` |
| Scrape / controller | `~/ev-charger-installer-scrape` |
| Pipeline data | `~/ev-charger-installer-data` |
| Playbook | Obsidian `EV Charger Installer Directory — Autonomous Build Playbook.md` |

## Spend

- Apify national run ≈ **$110** (Maps ≈ $84, reviews ≈ $26; backfilled into SQLite)
- Gemini Flash used for profiles + state/metro editorial (Flash-only guardrails enforced)

## Cap-rate supplements (deferred)

19 states hit ≥50% core-query caps. Recorded in scrape `docs/national-cap-rate-notes.json`. Run metro supplements later; do not re-POST completed Maps runs.

## Production

- **Live:** https://evchargerinstallers.vercel.app
- GitHub: https://github.com/AustinHardcastleDev/evchargerinstallers
- Smoke (2026-08-12): `/`, `/installers`, `/installers/near-me`, `/installers/tn`, `/installers/tx/metros/houston`, `/installers/tn/atomic-electric-service-inc` (explicit), `/installers/tn/baker-electric-co` (medium), cost guide, robots, sitemap — all HTTP 200

## Domain / DNS handoff

Custom domain `www.evchargerinstallerlist.com` was **not** purchased. Production uses the Vercel URL with `NEXT_PUBLIC_SITE_URL=https://evchargerinstallers.vercel.app` until you authorize DNS.

## Search Console

Connected GSC account currently has `barndobuilderlist.com` and `generatorinstallerlist.com` only. Adding `https://evchargerinstallers.vercel.app/` requires `GSC_ALLOW_DESTRUCTIVE=true`; deferred — submit sitemap after property is verified.

## Controller

```bash
launchctl print "gui/$(id -u)/com.austinhardcastle.evchargerpipeline"
cd ~/ev-charger-installer-scrape && python3 orchestration/controller.py status --json
```

National `COMPLETE.json` written when all 50 states validated.

## Verification snapshot

- `npm test` — pass
- `npx tsc --noEmit` — pass
- `npm run build` — pass
- SEO audit — `docs/seo-aeo-audit.md` launch-ready
