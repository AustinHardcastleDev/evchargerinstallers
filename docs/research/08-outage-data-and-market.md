# Outage Data, Market Demand, and Why People Buy

> **Internal research document — not published content.** This is source material for writers building FAQ sections, the homepage, and 50 state pages on EVChargerInstallerList.com. Every figure below carries its data year and a source URL. Do not publish this file as-is; pull from the "Claims we can make" section and rewrite in site voice.
>
> Research date: August 7, 2026. Latest full-year federal reliability data available: **2024** (EIA *Electric Power Annual*, released October 16, 2025; the 2025 edition is scheduled for October 2026).

---

## Executive summary

- **The average U.S. electricity customer went 662.6 minutes — about 11 hours — without power in 2024**, the worst year in at least a decade and nearly double the 2014–2023 average of roughly 5.8 hours. ([EIA Table 11.1, 2024](https://www.eia.gov/electricity/annual/html/epa_11_01.html))
- **Roughly 80% of that outage time came from major events** — chiefly Hurricanes Beryl, Helene, and Milton. Strip major event days out and the average customer lost only 131.6 minutes, about 2.2 hours. ([EIA, Dec 1, 2025](https://www.eia.gov/todayinenergy/detail.php?id=66744))
- **Two metrics run this whole story.** SAIDI = total minutes the average customer was without power in a year. SAIFI = how many times the average customer lost power in a year. Both are reported to EIA on Form EIA-861, with and without "major event days."
- **The honest trend is split.** Everyday ("blue-sky") reliability has been roughly flat and slightly worse: SAIDI excluding major events rose from 114.2 minutes in 2014 to 131.6 in 2024 (+15%), while SAIFI excluding major events barely moved (1.038 → 1.065). Major-event reliability is the part that has deteriorated sharply and become far more volatile: all-events SAIDI went from 236.2 minutes in 2014 to 662.6 in 2024.
- **South Carolina was the worst state in 2024 at 3,136.5 minutes (52.3 hours)**, driven almost entirely by Hurricane Helene. Maine was second (1,748.6 min), then North Carolina, Florida, Texas, and Georgia — all above 1,200 minutes. ([EIA Table 11.3, 2024](https://www.eia.gov/electricity/annual/html/epa_11_03.html))
- **The best 2024 performers were the District of Columbia (32.6 min), South Dakota (84.7), Arizona (87.5), North Dakota (99.1), and Massachusetts (102.0).**
- **A single hurricane can flip a state's ranking.** Florida's 2024 all-events SAIDI was 1,321.5 minutes (4th worst), but its SAIDI excluding major events was 66.4 minutes — the 7th *best* in the nation. Never quote one state number without saying which measure it is.
- **West Virginia is the standout for everyday unreliability**, with 486.1 minutes of non-major-event outage time in 2024 — nearly four times the national figure — followed by Vermont (275.0) and Maine (274.0).
- **Weather causes the overwhelming majority of large outages.** Of major U.S. outages reported 2000–2023, 80% (1,755 events) were weather-driven: 58% severe weather, 23% winter weather, 14% tropical cyclones. ([Climate Central, 2024](https://www.climatecentral.org/report/weather-related-power-outages-rising))
- **Home standby penetration of the addressable U.S. market sits in the mid-single digits and rises slowly.** The category's ceiling is far above its base. The only defensible source for a current figure is Generac's latest 10-K, and the definition of the denominator has been raised more than once, so successive years are not directly comparable.
- **Generator ownership of *any* kind is far higher than standby penetration.** Our own tabulation of the Census 2023 American Housing Survey microdata finds 21.1% of eligible households — about 23.0 million — report owning a generator for use during outages. Within Generac-style homes (owner-occupied, single-family detached, valued over $175,000), it's 26.2%. Most of that is portable, which makes the portable-to-standby upgrade the single largest addressable pool.
- **Demand is violently event-driven, and it decays just as hard.** Major storms produce record consultation and shipment quarters; sustained quiet stretches produce the category's worst ones. The manufacturer names this in its own SEC risk factors. Calendar seasonality is mild by comparison — storm timing is what moves the market.
- **The buyer skews older, higher-income, and overwhelmingly retrofit** rather than new-construction. Only a small fraction of installs replace an existing unit, so the category is still selling to first-time owners.
- **Installer capacity grows year over year even through down cycles**, via both manufacturer dealer networks and separate aligned-contractor programs.

---

## Detailed findings

### 1. What SAIDI and SAIFI actually mean

Every U.S. utility reports distribution reliability to the Energy Information Administration on Form EIA-861, which publishes it annually in the *Electric Power Annual*. Three indices matter:

- **SAIDI (System Average Interruption Duration Index)** — the total number of minutes of non-momentary outage the average customer experienced over the year. This is the headline "how much power did I lose" number.
- **SAIFI (System Average Interruption Frequency Index)** — the number of separate non-momentary interruptions the average customer experienced over the year.
- **CAIDI (Customer Average Interruption Duration Index)** — average minutes to restore a single interruption. Roughly SAIDI ÷ SAIFI.

The critical wrinkle for our purposes is the **major event day (MED)** adjustment. Under IEEE Standard 1366, a major event day is any day whose daily SAIDI exceeds a statistical threshold called T-med, computed from the prior five years of daily values. EIA publishes every metric twice: "all events" and "without major event days." Utilities that don't use IEEE methods self-determine what counts as a major event, which is why EIA also publishes an "any method" table that blends both. ([EIA Table 11.1](https://www.eia.gov/electricity/annual/html/epa_11_01.html))

For state pages, the practical translation is:

- **All-events SAIDI** answers "how bad was last year, including the hurricane." This is the number that sells generators, and it's the number that whipsaws.
- **SAIDI excluding major events** answers "what is a normal week like here." This is the honest baseline.

Quote both. A page that only quotes the disaster number reads like marketing; a page that explains the gap reads like expertise.

### 2. The national picture and the ten-year trend

Using EIA's IEEE-method national series ([Table 11.1](https://www.eia.gov/electricity/annual/html/epa_11_01.html)), all-events SAIDI in minutes per customer per year:

| Year | SAIDI, all events | SAIDI, excl. major events | SAIFI, all events | SAIFI, excl. major events |
|---|---|---|---|---|
| 2014 | 236.2 | 114.2 | 1.257 | 1.038 |
| 2015 | 209.0 | 117.0 | 1.275 | 1.073 |
| 2016 | 268.4 | 119.8 | 1.327 | 1.082 |
| 2017 | 505.9 | 117.0 | 1.420 | 1.023 |
| 2018 | 349.2 | 121.4 | 1.340 | 1.051 |
| 2019 | 295.5 | 122.2 | 1.332 | 1.040 |
| 2020 | 456.1 | 116.0 | 1.385 | 1.013 |
| 2021 | 475.8 | 125.7 | 1.436 | 1.039 |
| 2022 | 333.0 | 131.1 | 1.426 | 1.090 |
| 2023 | 366.6 | 123.9 | 1.348 | 1.022 |
| 2024 | **662.6** | **131.6** | **1.531** | **1.065** |

Three things jump out.

**First, the all-events column is dominated by hurricane years.** 2017 (Harvey, Irma, Maria), 2020 (Laura, Isaias, the August derecho), 2021 (Uri, Ida), and 2024 (Beryl, Helene, Milton) are the spikes. Everything else clusters in the 200–370 range.

**Second, the blue-sky column is remarkably stable.** In eleven years it never left the 114–132 band. It has drifted up about 15%, but SAIFI excluding major events is essentially unchanged. This is the finding most generator marketing gets wrong: your lights are not going out more often on ordinary days than they did a decade ago. They are going out for much longer when something big happens.

**Third, the gap is widening.** In 2014, major events accounted for 52% of outage minutes. In 2024 they accounted for 80%. EIA's own framing: interruptions attributed to major events averaged nearly nine hours in 2024 versus nearly four hours per year across 2014–2023, while non-major-event interruptions "routinely average about two hours per year." ([EIA, Dec 1, 2025](https://www.eia.gov/todayinenergy/detail.php?id=66744))

### 3. Is the grid getting better or worse? An honest answer

Both, and the distinction is the credibility play.

**Getting worse:** Major-event outage exposure. The 2024 figure was the highest in at least a decade, and the concentration of outage-hours into a handful of events keeps rising. Forward-looking risk is also elevated — NERC's 2025 Long-Term Reliability Assessment, published January 29, 2026, found that **13 of 23 North American assessment areas face elevated or high resource adequacy risk over 2026–2030**, with MISO, PJM, ERCOT, and parts of WECC in the high-risk category, driven by data-center demand growth outpacing new dispatchable generation. Summer peak demand is projected to grow 224 GW over ten years. ([NERC 2025 LTRA](https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf))

**Roughly flat:** Everyday distribution reliability. Utilities have poured money into vegetation management, automated reclosers, and grid hardening, and the blue-sky numbers show that work roughly offsetting an aging asset base. It has not produced a visible national improvement, but it has not collapsed either.

**Not proven:** That resource-adequacy warnings have yet translated into large-scale residential outages outside of specific events like Uri. NERC risk ratings are forecasts of shortfall probability, not records of blackouts. Presenting them as evidence that "the grid is failing today" is an overstatement we should avoid.

The defensible framing for the site: *the grid is not failing on ordinary days, but the events that knock it out are getting bigger, and a growing share of your annual outage risk sits in a small number of very bad days.* That is exactly the risk profile a EV charger addresses, and it's true.

### 4. What drives the major events

Climate Central's analysis of DOE Form OE-417 disturbance reports found that of all major U.S. power outages reported from 2000 to 2023 — events affecting at least 50,000 customers or interrupting 300 MW or more — **80% (1,755 events) were weather-related**. Within those: severe weather (high winds, thunderstorms) 58%, winter weather 23%, tropical cyclones 14%, extreme heat ~3%, wildfire ~2%. The states with the most weather-related major outages over that period were Texas (210), Michigan (157), California (145), North Carolina (111), and Ohio (88). ([Climate Central, 2024](https://www.climatecentral.org/report/weather-related-power-outages-rising))

**Hurricanes.** The 2024 season is the cleanest illustration of concentration. Hurricane Beryl left 2.6 million Texas customers without power in July 2024. Hurricane Helene left 5.9 million customers dark across 10 states in September 2024, at least 1.2 million of them in South Carolina. Hurricane Milton left 3.4 million Florida customers without power in October 2024. Those three storms are most of the reason the national number doubled. ([EIA, Dec 1, 2025](https://www.eia.gov/todayinenergy/detail.php?id=66744))

**Winter storms and ERCOT.** Winter Storm Uri in February 2021 remains the benchmark catastrophe. Extreme cold caused 1,045 generating units across Texas and the South Central U.S. to experience 4,124 outages, derates, or failures to start; ERCOT averaged 34,000 MW of unavailable generation for more than two consecutive days. More than 4.5 million Texas customers lost power, some for as long as four days. ([FERC/NERC February 2021 Cold Weather Report](https://www.ferc.gov/sites/default/files/2021-12/Cold%20Weather%20Report_%202021_120821.pdf)) Texas DSHS confirmed **246 deaths** across 77 counties in its final report, about two-thirds from hypothermia, with 19 from carbon monoxide poisoning — a directly relevant data point for our generator-safety content. ([Texas DSHS, Dec 2021](https://www.dshs.texas.gov/sites/default/files/news/updates/SMOC_FebWinterStorm_MortalitySurvReport_12-30-21.pdf))

**Wildfire and Public Safety Power Shutoffs.** California IOUs proactively de-energize lines in high fire-risk wind conditions. The signature event remains PG&E's October 9–12, 2019 shutoff, which de-energized approximately 729,000 customers across 35 counties, of which about 636,000 were residential and roughly 30,000 were medical baseline customers. ([PG&E PSPS report to CPUC, 2019](https://www.pge.com/assets/pge/docs/outages-and-safety/safety/PSPS-Report-Letter-10.09.19.pdf)) PSPS matters strategically because it is *scheduled* outage risk — a homeowner in a Tier 3 fire district can reasonably expect multi-day de-energizations most autumns, which is a very different sales conversation from hurricane risk. Note that PSPS scope has narrowed considerably since 2019 as utilities deployed sectionalizing and covered conductor; do not present 2019 numbers as current annual practice. Current-year data is filed with the CPUC in annual post-season reports. ([CPUC PSPS reports](https://www.cpuc.ca.gov/consumer-support/psps/utility-company-psps-reports-post-event-and-post-season))

**Disaster costs.** NOAA/NCEI **retired** its Billion-Dollar Weather and Climate Disasters product in May 2025, with no updates beyond calendar year 2024; the 1980–2024 archive remains authoritative. ([NOAA NESDIS notice, May 8, 2025](https://www.nesdis.noaa.gov/about/documents-reports/notice-of-changes/2025-notice-of-changes/billion-dollar-weather-and-climate-disasters)) Climate Central assumed stewardship of the dataset as of July 28, 2025 and reports 438 billion-dollar events totaling more than $3.2 trillion since 1980 as of June 2026 (CPI-adjusted to 2026). ([Climate Central](https://www.climatecentral.org/climate-services/billion-dollar-disasters)) If we cite billion-dollar-disaster counts, attribute post-2024 figures to Climate Central, not NOAA.

### 5. Market size and adoption

**The durable facts here are structural, not numeric.** Company financials and penetration
percentages restate every quarter, so this section deliberately holds no current figures — only what
stays true about where the numbers come from and how to read them.

**Standby generator penetration of the addressable US market is in the mid-single digits.** It has
risen slowly and steadily for more than a decade, which means the category's ceiling is far above
its current base — the growth story is real. The only defensible source for the current number is
Generac's own SEC filings, because it is the metric the company's investors hold it to. Pull it from
the latest 10-K rather than from any secondary summary.

**Read that number carefully, because the denominator moves.** Generac defines its addressable
market as owner-occupied single-family detached homes above a market-value threshold, and it has
raised that threshold more than once. Raising it shrinks the denominator and mechanically raises the
percentage. A multi-year penetration trend built from successive filings is therefore **not**
apples-to-apples, and we should never present it as one. If we cite penetration at all, cite a
single year with its stated definition attached.

**The addressable universe is roughly 61 million households.** Our own tabulation of the AHS 2023
public use file puts owner-occupied, single-family detached homes valued above $175,000 at about
61.4 million. That denominator is stable between AHS releases and is the useful half of the
calculation; multiply it by whatever penetration figure the current 10-K reports to size the
installed base. Generac has never published its own denominator, so any resulting figure is an
order-of-magnitude estimate and must be labeled as ours.

### 6. Who actually owns a generator: Census evidence

The 2023 American Housing Survey asks respondents in one-unit and small multi-unit structures whether their household "had a generator to provide electricity in case of a power outage" (variable `DPGENERT`, asked of a half sample and weighted with `SP2WEIGHT`). ([AHS 2023 definitions](https://www2.census.gov/programs-surveys/ahs/2023/2023%20AHS%20Definitions.pdf)) We downloaded the national public use file and tabulated it directly. Results — **our own analysis, not a published Census table**:

- **21.1% of the eligible universe (about 23.0 million of 108.9 million households) report owning a generator.** The question does not distinguish portable from permanently installed, so this is generator ownership of all kinds.
- **Owner-occupants: 24.8%. Renters: 8.0%.**
- **Within Generac's addressable definition (owner-occupied, single-family detached, valued over $175,000): 26.2%.** Set against a mid-single-digit standby penetration rate, roughly three of every four generator-owning households in that segment own something other than an automatic standby unit. That gap is the upgrade market, and it is large enough that the ratio holds regardless of which year's penetration figure you use.
- **Ownership rises with age of householder:** under 40, 14.0%; 40–49, 19.4%; 50–59, 23.5%; 60–69, **25.9%**; 70+, 23.5%.
- **Median household income of generator owners: $90,000, versus $75,000 for non-owners.** Median householder age 58 versus 53. Median home value was nearly identical ($356,591 vs. $346,366) — income and age discriminate; home value does not.
- **Experience drives ownership:** among households that reported a power outage in the prior 12 months, 27.4% owned a generator, versus 18.7% of those who did not.
- **By Census division, ownership is highest in New England (33.4%)**, then West South Central (23.4%), Middle Atlantic (23.3%), South Atlantic (22.3%), East North Central (21.3%), East South Central (20.0%), West North Central (19.1%), Mountain (16.7%), and lowest in the **Pacific division (14.7%)**.
- Separately, **25.6% of households reported at least one power outage in the prior 12 months** in the 2023 survey.

Generac's investor decks describe a consistent buyer profile that corroborates the AHS picture and adds one durable detail the Census data cannot supply: **the overwhelming majority of home standby sales are retrofits on existing homes, not new construction, and only a small fraction are replacements of an existing unit.** The buyer skews older and higher-income than the general homeowner population, and has broadened slightly younger over successive decks. Specific deck percentages are omitted here because they are restated with each investor presentation.

### 7. Buying behavior: the spike-and-decay cycle

This is the best-documented pattern in the category, and Generac describes it plainly in its own risk factors: "Sustained periods without major power disruptions can lead, and in the past have led, to reduced consumer awareness of the benefits of standby and portable generator products and can result and have previously resulted in reduced sales growth rates and excess inventory." ([FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1474735/000143774926004568/gnrc20251231_10k.htm))

**The shape of the cycle, which repeats.** A major outage event drives a sharp, immediate surge in
in-home consultations and shipments — the strongest quarters in the category's history have all
followed hurricanes or major winter storms. A sustained quiet stretch produces the mirror image:
consultations and residential sales fall hard, and the company's weakest quarters follow the calmest
weather. Installations lag shipments by a quarter or so, because the constraint is dealer labor
rather than factory output.

Specific quarterly figures are omitted here on purpose; they restate every ninety days and none of
them belong in buyer-facing copy. What matters is that the pattern is documented by the company
itself and is stable across cycles.

**What this means operationally for our content:**

1. **Lead times balloon after events, not before them.** The bottleneck is installation capacity, not equipment. Dealers absorbing a sudden flood of consultations is the mechanism. Content that tells homeowners to buy in a quiet season is genuinely good advice and is supported by the manufacturer's own disclosure.
2. **Close rates drop during surges.** A large share of post-hurricane consultations never convert — the panic-shopper cohort. Management attributes this to "historical trends following periods of elevated outage activity," meaning it is expected rather than anomalous. This validates advising homeowners to get multiple quotes rather than signing the first post-storm contract.
3. **Calendar seasonality is mild relative to event-driven swings.** Quarterly shares of annual sales sit within a few points of even. Storm timing, not season, is what moves the category.
4. **Installer capacity keeps expanding even through down cycles.** The manufacturer dealer networks grow year over year regardless of the demand cycle, and are supplemented by separate aligned-contractor programs. Our directory's installer count is a plausible order of magnitude for the total population, but see the open question on methodology before describing it as complete.
5. **Post-storm pricing.** Manufacturers cite "price realization" as a growth driver, but there is no public dataset on installed-price surges after storms. Anecdotal reports exist; we should not quantify them. Note that price gouging is separately enforceable in most storm-exposed states — see `05-installation-process-and-timeline.md`.

---

## State outage table

**Data year: 2024. Source: [U.S. EIA, *Electric Power Annual 2024*, Table 11.3 — Reliability Metrics Using Any Method of U.S. Distribution System by State](https://www.eia.gov/electricity/annual/html/epa_11_03.html), released October 16, 2025.** SAIDI is in minutes per customer per year; SAIFI is interruptions per customer per year. "Rank" is worst-to-best on 2024 all-events SAIDI among the 50 states plus D.C.

**Completeness: all 50 states and the District of Columbia are present. No state is missing.** Note that EIA's "any method" table combines utilities using the IEEE 1366 standard with those that self-determine major events, and the share of a state's customers covered by reporting utilities varies (nationally about 96% in 2024). The stricter IEEE-only state table is [Table 11.2](https://www.eia.gov/electricity/annual/html/epa_11_02.html); the 2014–2024 state time series is [Table 11.4](https://www.eia.gov/electricity/annual/html/epa_11_04.html).

| State | SAIDI 2024, all events (min) | = hours | Rank (worst=1) | SAIDI 2024 excl. major events (min) | SAIFI 2024, all events | SAIFI 2024 excl. major events | SAIDI 2023, all events (min) |
|---|---|---|---|---|---|---|---|
| Alabama | 279.4 | 4.7 | 27 | 117.8 | 1.870 | 1.037 | 294.2 |
| Alaska | 327.1 | 5.5 | 22 | 192.4 | 2.591 | 1.862 | 374.8 |
| Arizona | 87.5 | 1.5 | 49 | 72.0 | 0.988 | 0.898 | 106.8 |
| Arkansas | 509.1 | 8.5 | 17 | 194.6 | 2.128 | 1.587 | 911.2 |
| California | 279.6 | 4.7 | 26 | 158.2 | 1.345 | 1.154 | 346.6 |
| Colorado | 255.1 | 4.3 | 32 | 119.0 | 1.409 | 1.142 | 99.2 |
| Connecticut | 153.6 | 2.6 | 41 | 73.1 | 0.876 | 0.644 | 164.6 |
| Delaware | 116.1 | 1.9 | 45 | 65.9 | 0.843 | 0.717 | 108.2 |
| District of Columbia | 32.6 | 0.5 | 51 | 26.4 | 0.271 | 0.246 | 71.9 |
| Florida | 1321.5 | 22.0 | 4 | 66.4 | 1.770 | 0.762 | 160.1 |
| Georgia | 1229.1 | 20.5 | 6 | 212.3 | 2.122 | 1.264 | 349.2 |
| Hawaii | 320.6 | 5.3 | 23 | 225.6 | 2.616 | 2.180 | 491.8 |
| Idaho | 232.8 | 3.9 | 33 | 174.0 | 1.314 | 1.136 | 137.5 |
| Illinois | 156.9 | 2.6 | 40 | 59.4 | 0.852 | 0.644 | 208.2 |
| Indiana | 312.4 | 5.2 | 24 | 121.4 | 1.283 | 0.997 | 455.4 |
| Iowa | 166.7 | 2.8 | 38 | 89.8 | 1.150 | 0.887 | 104.9 |
| Kansas | 285.6 | 4.8 | 25 | 103.6 | 1.506 | 1.003 | 283.1 |
| Kentucky | 648.3 | 10.8 | 11 | 153.3 | 1.955 | 1.320 | 868.2 |
| Louisiana | 727.5 | 12.1 | 9 | 206.0 | 2.722 | 1.751 | 584.2 |
| Maine | 1748.6 | 29.1 | 2 | 274.0 | 3.636 | 2.139 | 1863.0 |
| Maryland | 118.1 | 2.0 | 44 | 75.1 | 0.817 | 0.686 | 166.2 |
| Massachusetts | 102.0 | 1.7 | 47 | 76.1 | 0.843 | 0.743 | 259.4 |
| Michigan | 470.4 | 7.8 | 18 | 160.1 | 1.356 | 0.986 | 1093.6 |
| Minnesota | 219.6 | 3.7 | 36 | 92.2 | 1.250 | 0.901 | 126.4 |
| Mississippi | 567.1 | 9.5 | 15 | 266.3 | 2.555 | 1.963 | 802.1 |
| Missouri | 224.3 | 3.7 | 34 | 106.0 | 1.189 | 0.919 | 371.8 |
| Montana | 351.5 | 5.9 | 20 | 156.6 | 1.621 | 1.161 | 118.7 |
| Nebraska | 641.7 | 10.7 | 12 | 73.6 | 1.232 | 0.595 | 72.6 |
| Nevada | 158.9 | 2.6 | 39 | 63.8 | 1.108 | 0.658 | 138.7 |
| New Hampshire | 922.7 | 15.4 | 8 | 132.3 | 2.021 | 0.985 | 645.8 |
| New Jersey | 174.2 | 2.9 | 37 | 99.7 | 1.119 | 0.948 | 108.3 |
| New Mexico | 278.8 | 4.6 | 28 | 156.5 | 1.321 | 1.109 | 168.9 |
| New York | 219.9 | 3.7 | 35 | 72.0 | 0.910 | 0.611 | 120.0 |
| North Carolina | 1441.0 | 24.0 | 3 | 141.4 | 1.812 | 1.172 | 252.0 |
| North Dakota | 99.1 | 1.7 | 48 | 84.2 | 0.915 | 0.857 | 208.6 |
| Ohio | 510.5 | 8.5 | 16 | 133.2 | 1.298 | 0.999 | 366.2 |
| Oklahoma | 270.9 | 4.5 | 30 | 119.6 | 1.731 | 1.147 | 896.6 |
| Oregon | 591.0 | 9.8 | 14 | 130.9 | 1.346 | 0.857 | 126.9 |
| Pennsylvania | 336.1 | 5.6 | 21 | 131.0 | 1.353 | 0.971 | 252.7 |
| Rhode Island | 104.3 | 1.7 | 46 | 60.8 | 0.896 | 0.761 | 104.6 |
| South Carolina | 3136.5 | 52.3 | 1 | 117.8 | 2.365 | 1.207 | 167.2 |
| South Dakota | 84.7 | 1.4 | 50 | 62.1 | 0.815 | 0.720 | 77.0 |
| Tennessee | 278.6 | 4.6 | 29 | 159.5 | 2.000 | 1.764 | 857.9 |
| Texas | 1270.6 | 21.2 | 5 | 129.4 | 2.114 | 1.218 | 496.2 |
| Utah | 119.8 | 2.0 | 43 | 106.7 | 1.030 | 0.966 | 127.1 |
| Vermont | 696.7 | 11.6 | 10 | 275.0 | 2.516 | 1.661 | 744.4 |
| Virginia | 418.3 | 7.0 | 19 | 166.4 | 1.627 | 1.342 | 221.1 |
| Washington | 623.5 | 10.4 | 13 | 158.6 | 1.752 | 1.087 | 151.7 |
| West Virginia | 1165.5 | 19.4 | 7 | 486.1 | 2.832 | 2.287 | 751.5 |
| Wisconsin | 266.1 | 4.4 | 31 | 91.3 | 1.020 | 0.729 | 183.0 |
| Wyoming | 137.8 | 2.3 | 42 | 109.1 | 0.999 | 0.869 | 127.0 |
| **U.S. total** | **611.3** | **10.2** | — | **126.0** | **1.521** | **1.043** | **342.0** |

**Editorial notes for state page writers:**

- The U.S. total in this "any method" table (611.3 min) differs slightly from the IEEE-only national figure (662.6 min) in Table 11.1. Pick one and be consistent; the IEEE figure is what EIA used in its public commentary.
- **Single-year state numbers are extremely volatile.** Compare South Carolina 2024 (3,136.5) with 2023 (167.2), or Michigan 2023 (1,093.6) with 2024 (470.4). For state pages, consider quoting both the 2024 figure and a multi-year context sentence, using [Table 11.4](https://www.eia.gov/electricity/annual/html/epa_11_04.html) for the 2014–2024 series.
- **Best "everyday reliability" argument states** (highest SAIDI excluding major events, 2024): West Virginia 486.1, Vermont 275.0, Maine 274.0, Mississippi 266.3, Hawaii 225.6, Georgia 212.3, Louisiana 206.0, Arkansas 194.6.
- **Highest interruption frequency, 2024:** Maine 3.636, West Virginia 2.832, Louisiana 2.722, Hawaii 2.616, Alaska 2.591, Mississippi 2.555.
- **Lowest interruption frequency, 2024:** D.C. 0.271, South Dakota 0.815, Maryland 0.817, Delaware 0.843, Massachusetts 0.843, Illinois 0.852.

---

## Claims we can make

Each of these is verified and ready to adapt into site copy.

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

This file is the one where that discipline matters most, because outage statistics swing violently
year to year. The durable spine is **claim 7: everyday reliability has been roughly flat for a
decade while major-event outage time has tripled.** That is the real story, it will still be true
next year, and it is far more interesting than any single year's total. Lead with it, then use the
current year's figures as evidence.

1. In 2024, the average U.S. electricity customer experienced 662.6 minutes — about 11 hours — of power interruptions, nearly double the annual average of the previous decade. — https://www.eia.gov/todayinenergy/detail.php?id=66744
2. Major events such as Hurricanes Beryl, Helene, and Milton accounted for 80% of all U.S. outage hours in 2024; excluding major event days, the average customer lost 131.6 minutes, about 2.2 hours. — https://www.eia.gov/electricity/annual/html/epa_11_01.html
3. SAIDI measures the total minutes of non-momentary outage the average customer experiences in a year, and SAIFI measures how many separate interruptions they experience; both are reported by utilities to the U.S. Energy Information Administration on Form EIA-861. — https://www.eia.gov/electricity/annual/html/epa_11_01.html
4. South Carolina customers experienced 3,136.5 minutes — 52.3 hours — without power in 2024, more than any other state, largely because of Hurricane Helene. — https://www.eia.gov/electricity/annual/html/epa_11_03.html
5. Hurricane Helene left 5.9 million customers without power across 10 states in September 2024, including at least 1.2 million in South Carolina; Hurricane Milton left 3.4 million Florida customers without power the following month. — https://www.eia.gov/todayinenergy/detail.php?id=66744
6. Florida illustrates why the measure matters: its 2024 all-events outage duration of 1,321.5 minutes was fourth-worst in the nation, but excluding major event days it was just 66.4 minutes, among the ten best. — https://www.eia.gov/electricity/annual/html/epa_11_03.html
7. Excluding major storms, national outage duration has been remarkably stable, ranging from 114.2 minutes in 2014 to 131.6 minutes in 2024, while all-events duration nearly tripled over the same period — the risk is concentrating in a small number of severe events. — https://www.eia.gov/electricity/annual/html/epa_11_01.html
8. Of all major U.S. power outages reported from 2000 to 2023, 80% (1,755 events) were weather-related, with severe weather accounting for 58%, winter weather 23%, and tropical cyclones 14%. — https://www.climatecentral.org/report/weather-related-power-outages-rising
9. During Winter Storm Uri in February 2021, more than 4.5 million Texas customers lost power, some for as long as four days, after 1,045 generating units experienced outages, derates, or failures to start. — https://www.ferc.gov/sites/default/files/2021-12/Cold%20Weather%20Report_%202021_120821.pdf
10. Texas confirmed 246 deaths related to the February 2021 winter storm, roughly two-thirds from hypothermia and 19 from carbon monoxide poisoning. — https://www.dshs.texas.gov/sites/default/files/news/updates/SMOC_FebWinterStorm_MortalitySurvReport_12-30-21.pdf
11. PG&E's October 9–12, 2019 Public Safety Power Shutoff de-energized approximately 729,000 customers across 35 California counties, including about 636,000 residential customers and roughly 30,000 medical baseline customers. — https://www.pge.com/assets/pge/docs/outages-and-safety/safety/PSPS-Report-Letter-10.09.19.pdf
12. In the 2023 American Housing Survey, 21.1% of eligible U.S. households — about 23.0 million — reported owning a generator for use during a power outage, though the survey does not distinguish portable units from permanently installed standby systems. *(Our tabulation of the Census AHS 2023 national public use file; label as such.)* — https://www.census.gov/programs-surveys/ahs/data/2023/ahs-2023-public-use-file--puf-/ahs-2023-national-public-use-file--puf-.html
13. Households that experienced a power outage in the prior 12 months were substantially more likely to own a generator — 27.4% versus 18.7% of households that did not. *(Our tabulation, AHS 2023.)* — https://www.census.gov/programs-surveys/ahs/data/2023/ahs-2023-public-use-file--puf-/ahs-2023-national-public-use-file--puf-.html
14. The overwhelming majority of home EV chargers are retrofits on existing homes rather than new-construction installations, and the typical buyer skews older and higher-income than the general homeowner population. — https://investors.generac.com/static-files/912cac6d-878b-496e-a28f-bd0d0fc5a53d
15. Home standby demand tracks outage events closely in both directions: manufacturers record their strongest consultation and shipment quarters immediately after major storms, and their weakest during sustained quiet stretches — a cycle Generac names in its own SEC risk factors, warning that periods without major disruptions have historically reduced consumer awareness and sales growth. — https://www.sec.gov/Archives/edgar/data/1474735/000143774926004568/gnrc20251231_10k.htm
16. NERC's 2025 Long-Term Reliability Assessment, published January 2026, found 13 of 23 North American assessment areas face elevated or high resource adequacy risk between 2026 and 2030, driven largely by data center demand growth outpacing new generation. — https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf

---

## Claims to avoid

- **Any market-size or CAGR figure from a paid research firm** ("the U.S. home EV charger market was $X billion and will grow at Y% CAGR"). These are resold across dozens of aggregator sites with no traceable methodology and frequently contradict each other by 2–3x. If a market figure is genuinely needed, take it from Generac's audited SEC filings. **Unverified.**
- **Quarterly or annual company financials of any kind** — segment revenue, shipment growth, dealer counts, consultation volume. They restate every ninety days, they are one brand's channel rather than the market, and they carry no value for a buyer. The durable version is the *pattern*: demand spikes after storms and decays in quiet years.
- **"About X million American homes have a EV charger."** No agency publishes this. Any such figure is an inference from a manufacturer's penetration percentage applied to an AHS-derived denominator; directionally reasonable, but it must be labeled an estimate and dated if used at all.
- **A penetration trend line across multiple years.** Each year's figure is sourced, but Generac has raised the home-value threshold in its denominator more than once across the series. Present a single current figure with its definition attached; never chart the series as a clean trend.
- **"1 in 5 American homes has a generator" without the universe caveat.** The AHS 21.1% applies to a restricted universe (one-unit structures, mobile homes, and 2–4 unit buildings) and includes portable generators. Conflating it with standby ownership overstates the installed standby base by roughly 3x.
- **"The grid is failing" / "the grid is collapsing" / "blackouts are becoming a daily reality."** EIA's own data shows non-major-event reliability essentially flat for a decade. This claim is falsifiable with the primary source we're citing elsewhere on the page, which is the worst kind of claim to make.
- **"Outages have doubled" without a timeframe and measure.** 2024 all-events SAIDI was roughly double the prior decade's average — that specific statement is true. "Outages have doubled since 2000" is not supported by anything we found.
- **NERC risk ratings presented as current outage data.** They are forward-looking resource-adequacy forecasts, not records of customer interruptions.
- **Post-2024 NOAA billion-dollar disaster figures.** NOAA retired the product in May 2025. Attribute later figures to Climate Central.
- **Any specific claim about post-storm price gouging or generator price increases.** Real phenomenon, no public dataset. Don't quantify.
- **Quoting a single state's 2024 SAIDI as "typical."** South Carolina went from 167.2 minutes in 2023 to 3,136.5 in 2024. Always give context.
- **Implying a home EV charger would have prevented deaths in a specific disaster.** Cite the Uri carbon-monoxide death figures as a safety argument for professional installation, not as a sales close.

---

## Open questions / needs verification

1. **The next edition of EIA reliability data.** *Electric Power Annual* publishes each October with the prior year's figures. Because 2024 was an outlier hurricane year, the following edition will almost certainly show a sharp drop. Re-run the state table on each release; every state page depends on it.
2. **Generac's addressable-market denominator.** The company publishes the percentage but not the household count. Our ~61.4 million AHS-derived figure is an approximation of their stated definition, not their number.
3. **State-level EV charger penetration.** Not available publicly. The AHS national PUF supports Census-division breakouts (which we computed) but not state-level estimates. AHS metro-area files cover only 15 large metros. If state-level penetration is important for state pages, the division figures plus state SAIDI are the best available proxy.
4. **Current PSPS scope.** The 2019 figures are well documented but almost certainly overstate present-day practice. Someone should pull recent CPUC post-season data reports for PG&E, SCE, SDG&E, and Liberty and compile customer-hours de-energized by year.
5. **Total U.S. home standby installer count.** Manufacturer dealer counts describe one brand's channel, and the major brands' networks overlap incompletely. Our directory's installer count should not be described as "all U.S. installers" without a defined methodology.
6. **Installed price trends over time.** No public index exists. Would require primary collection from installer quotes.
7. **Whether AHS `DPGENERT` respondents interpret "generator" to include solar-plus-battery systems.** The question wording doesn't exclude them, which may inflate ownership in states with high battery adoption (notably California, whose Pacific division shows the *lowest* ownership — suggesting this is probably not a large distortion).

---

## Sources

All URLs accessed **August 7, 2026**.

**Federal reliability data**
- [EIA, *Electric Power Annual 2024*, Table 11.1 — Reliability Metrics of U.S. Distribution System](https://www.eia.gov/electricity/annual/html/epa_11_01.html) — national SAIDI/SAIFI/CAIDI time series 2014–2024, with and without major event days; definitions of the indices. Released Oct 16, 2025.
- [EIA, Table 11.3 — Reliability Metrics Using Any Method by State, 2024 and 2023](https://www.eia.gov/electricity/annual/html/epa_11_03.html) — the source for the complete 50-state + D.C. table above.
- [EIA, Table 11.4 — SAIDI Values by State, 2014–2024](https://www.eia.gov/electricity/annual/html/epa_11_04.html) — state-level eleven-year time series for multi-year context.
- [EIA, *Electric Power Annual* index page](https://www.eia.gov/electricity/annual/index.php) — confirmed the 2024 edition released October 16, 2025 with the next release due October 2026.
- [EIA Today in Energy, "Hurricanes in 2024 led to the most hours without power in the United States in 10 years" (Dec 1, 2025)](https://www.eia.gov/todayinenergy/detail.php?id=66744) — plain-language framing, per-state highlights, hurricane customer counts, SAIDI/SAIFI definitions.

**Major event drivers**
- [Climate Central, "Weather-related Power Outages Rising" (2024)](https://www.climatecentral.org/report/weather-related-power-outages-rising) — analysis of DOE Form OE-417 major outages 2000–2023; weather share and cause breakdown; state event counts.
- [Climate Central, U.S. Billion-Dollar Weather and Climate Disasters](https://www.climatecentral.org/climate-services/billion-dollar-disasters) — current stewardship of the retired NOAA dataset; 438 events / $3.2T as of June 2026.
- [NOAA NESDIS, Notice of Changes: Billion Dollar Weather and Climate Disasters (May 8, 2025)](https://www.nesdis.noaa.gov/about/documents-reports/notice-of-changes/2025-notice-of-changes/billion-dollar-weather-and-climate-disasters) — official retirement notice; data frozen at CY2024.
- [FERC/NERC, *The February 2021 Cold Weather Outages in Texas and the South Central United States* (Dec 2021)](https://www.ferc.gov/sites/default/files/2021-12/Cold%20Weather%20Report_%202021_120821.pdf) — Winter Storm Uri generating unit failures, ERCOT unavailable capacity, 4.5M customers.
- [Texas DSHS, February 2021 Winter Storm-Related Deaths (Dec 30, 2021)](https://www.dshs.texas.gov/sites/default/files/news/updates/SMOC_FebWinterStorm_MortalitySurvReport_12-30-21.pdf) — official 246-death final count with cause breakdown including carbon monoxide.
- [PG&E, PSPS Report to the CPUC, October 9–12, 2019 De-Energization Event](https://www.pge.com/assets/pge/docs/outages-and-safety/safety/PSPS-Report-Letter-10.09.19.pdf) — ~729,000 customers de-energized, residential/medical baseline breakdown.
- [CPUC, Utility Company PSPS Reports: Post-Event, Post-Season and Pre-Season](https://www.cpuc.ca.gov/consumer-support/psps/utility-company-psps-reports-post-event-and-post-season) — location of current-year PSPS data for future verification.
- [NERC, 2025 Long-Term Reliability Assessment (published Jan 29, 2026)](https://www.nerc.com/globalassets/our-work/assessments/nerc_ltra_2025.pdf) — forward-looking resource adequacy risk categories and demand growth forecasts.

**Market size, penetration, and buyer behavior**

*Quarterly and annual company financials have been deliberately excluded from this library — see the
"claims to avoid" list above. The sources below are retained because they document durable structure
(how penetration is defined, the standing risk-factor language on the demand cycle, buyer profile),
not because their figures should be quoted.*

- [Generac Holdings, FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1474735/000143774926004568/gnrc20251231_10k.htm) — the penetration metric and, importantly, its stated definition; explicit risk-factor language on outage-driven demand and post-quiet-period softness. **Pull the current 10-K rather than quoting this edition's numbers.**
- [Generac Investor Presentation, November 2024](https://investors.generac.com/static-files/912cac6d-878b-496e-a28f-bd0d0fc5a53d) — buyer demographics and the retrofit-versus-new-construction split. Deck figures restate with each presentation; use the structure, not the percentages.

**Census / household ownership**
- [Census Bureau, AHS 2023 National Public Use File](https://www.census.gov/programs-surveys/ahs/data/2023/ahs-2023-public-use-file--puf-/ahs-2023-national-public-use-file--puf-.html) — microdata we downloaded and tabulated for all generator-ownership figures in Section 6 (variable `DPGENERT`, weighted with `SP2WEIGHT`; cross-tabs against `TENURE`, `BLD`, `MARKETVAL`, `HINCP`, `HHAGE`, `DIVISION`, `OUTAGE`).
- [Census Bureau, 2023 AHS Definitions (Appendix A)](https://www2.census.gov/programs-surveys/ahs/2023/2023%20AHS%20Definitions.pdf) — exact question wording for "generator present" and its restricted universe; confirms the half-sample design.

**Corroborating secondary coverage (not used for primary figures)**
- [Utility Dive, "Americans lost more power last year than any year in previous decade: EIA"](https://www.utilitydive.com/news/hurricane-power-outage-electricity-climate-change-helene-milton/806771/) — independent confirmation of the EIA 2024 findings.
- [POWER Magazine on the 2025 NERC LTRA](https://www.powermag.com/nerc-warns-long-term-grid-reliability-risks-mounting-from-surging-demand-lagging-resources/) — the "13 of 23 assessment areas" summary and publication date.
