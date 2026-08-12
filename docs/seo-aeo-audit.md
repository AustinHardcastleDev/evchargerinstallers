# SEO / AEO launch audit — EVChargerInstallerList

**Status:** launch-ready (P0/P1 closed for ship gate)  
**Verified as of:** 2026-08-12  
**Build:** `npm test` 14/14, `tsc --noEmit` clean, `npm run build` succeeded (50 states, 1,431 profiles, 267 metros).

## P0

None open.

## P1

None open after remediation:

| Finding | Fix |
|---|---|
| FAQPage JSON-LD still emitted | `FAQJsonLd` now returns null; visible FAQs remain |
| Empty blog indexable | `/blog` redirects to `/guides`; removed from nav/sitemap |
| Generator financing hub live | `/financing*` redirects to cost guide |
| Generator guide routes indexable | Legacy guide slugs permanentRedirect to EV guides |
| Site URL hard-locked to custom domain | `NEXT_PUBLIC_SITE_URL` override supported for Vercel host |

## P2 (acceptable at launch)

- Some TypeScript shim fields retain `generator*` names for compatibility; buyer-facing copy is EV-native.
- Metro Flash coverage is complete (267/267); composed fallbacks remain if a row is missing.
- Cap-rate ≥50% on 19 states — metro/query supplements deferred post-launch per playbook (do not delay national).
- Custom domain `www.evchargerinstallerlist.com` not purchased in this run; ship on Vercel URL until DNS authorized.

## AEO / schema checks

- Organization + WebSite `@id` present on homepage
- No SearchAction
- No AggregateRating from Google scores
- Article schema on guides with matching visible citations
- Absolute profile titles
- Sitemap lastmod uses content dates, not build stamps

## Smoke targets (post-deploy)

`/`, `/installers`, `/installers/near-me`, `/installers/tn`, `/installers/tx/metros/houston`, one explicit + one medium profile, `/guides/ev-charger-installation-cost`, `/robots.txt`, `/sitemap.xml`
