# 08 — Market, housing, and demand

**Verified as of:** 2026-08-11

## Executive summary

Home charging feasibility tracks housing form and parking: single-family detached with a garage is
easier than street parking or multifamily common areas. Owner-occupancy affects who can authorize
electrical work. Do not invent city adoption statistics. Use Census ACS and EIA figures only when
populated with year and URL.

## Detailed findings

- AFDC: multifamily charging needs additional considerations vs single-family.
- State table fields for owner-occupied and single-family detached percentages are reserved for
  Census ACS pulls (API key required in this environment; rows may remain 0 = not populated).
- Residential electricity rates belong to EIA retail sales data by state and year.

## Claims we can make

- "Garage and driveway access make dedicated Level 2 installs more straightforward than shared lots."
- "Multifamily common-area charging raises ownership, metering, and allocation questions."
- Statewide housing or rate figures only when the state row has non-zero sourced values.

## Claims to avoid

- City-level EV adoption percentages without a named primary source.
- Treating zero placeholders in the research table as real rates or percentages.

## Known gaps

- Census ACS and EIA API keys were not available during this build session; housing/rate columns
  may remain unpopulated until a keyed refresh.

## Sources

- AFDC home / multifamily notes
- U.S. Census ACS (housing tenure and units)
- EIA electricity retail sales (residential price)
