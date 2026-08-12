# Maintenance, Warranty, and Lifespan

> **Internal research document — not published content.** Working reference for writers building FAQ sections and buyer guides for EVChargerInstallerList.com. Every figure below traces to a named source. Do not publish verbatim. Scope is US residential home standby (permanently installed, gaseous-fueled) units. All research accessed **August 7, 2026**.

---

## Executive summary

- **The headline oil interval is 200 hours or two years — not annual.** Generac's current air-cooled owner's manual (10–26 kW) sets Schedule A at "Every Two Years or 200 Hours" for oil, filter, and battery check, and Schedule B at "Every Four Years or 400 Hours" adding air filter, spark plugs, and valve clearance. ([Generac 10–26 kW manual](https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf)) An "annual oil change" on a Generac air-cooled unit is **common practice and a dealer service-plan structure, not a manufacturer requirement** — unless the unit lives below 40 °F or runs continuously above 85 °F, in which case Generac does require **yearly or 100 hours**.
- **Every brand requires a break-in service, and homeowners routinely miss it.** Generac: oil, filter, *and* valve clearance at the first 25 hours. Cummins: oil and filter at first 25 hours *and again* at 100 hours. Generac liquid-cooled: a 30-hour engine break-in service.
- **Kohler is the outlier that actually is annual.** Kohler RCA schedules call for oil change "Yearly or 150 hours" on 20/26 kW models and "Yearly or 100 hours" on 14 kW — roughly twice the frequency Generac requires. ([Kohler TP-7092](https://apelectric.com/content/PDF/Kohler/14kw-26kw_operation_manual.pdf))
- **Exercise duration varies 13× between brands.** Generac air-cooled: 5 minutes. Kohler RCA: 20 minutes. Kohler's 26 kW EcoExercise: 90 seconds. Cummins RS factory default: monthly, 5 minutes. Frequency on all three is homeowner/dealer-selectable (weekly, biweekly, monthly).
- **Exercise fuel cost is trivial on natural gas and non-trivial on propane.** Computed upper bounds using published 50%-load consumption: a Generac 24 kW at 5 min/week ≈ **$14/year** on natural gas. A Kohler 26RCA at 20 min/week ≈ **$51/year** on natural gas but ≈ **$109/year** on propane. Actual figures are lower because exercise runs unloaded at reduced speed.
- **Exercise noise is a real neighbor issue and manufacturers designed around it.** Generac 24 kW: 67 dB(A) at normal load, **57 dB(A) in Quiet-Test low-speed exercise**. Kohler 26RCA: 67 dB(A) full speed, **56 dB(A) during exercise**. Both measured at 23 ft.
- **Battery replacement is 3–5 years per Generac support — but Generac's own liquid-cooled manual prints a harder rule.** The Protector QS service schedule literally says "Replace battery every three years*" with the footnote "* Replace battery every two years in extreme conditions." That is the only *printed manufacturer interval* we found. Air-cooled manuals list battery *inspection*, not replacement.
- **"Battery is the #1 no-start cause" is verifiable, but from commercial/institutional data, not residential.** A ten-year study of 300 gensets found starter-battery failure was the most frequent failure mode at **at least 30% of total failures**. ([Periodica Polytechnica EE](https://doi.org/10.3311/ppee.15274)) No manufacturer publishes residential no-start cause breakdowns. Attribute it to emergency-genset reliability data, not to Generac.
- **Cold-weather accessory thresholds are published and specific.** Generac air-cooled: cold weather kit recommended below **32 °F**; battery pad warmer and oil warmer recommended below **0 °F** (battery pad "not necessary for AGM-style batteries"); breather warmer where heavy icing occurs. Cummins: no starting aids above 40 °F; alternator/regulator heaters (factory-supplied) 0–40 °F; below 0 °F add 0W30 oil plus the Extreme Cold Weather Kit A054B984. Kohler battery heater: thermostat on at 60–65 °F, off at 80 °F, recommended where temperature regularly falls below 32 °F.
- **Warranty terms differ far more than warranty *years*.** Generac's 5-year steps down (parts+labor+travel yrs 1–2 → parts only yr 3 → engine short block and alternator only yrs 4–5). Kohler's 5-year covers parts, labor, *and* travel for the whole term. Champion's 10-year is parts-only after year 2. Briggs & Stratton PowerProtect is 7 years parts+labor+travel, 10 years on dealer-exclusive DX models. **Year count alone is a misleading comparison.**
- **All four majors cap at 2,000 hours — and that cap is functionally unreachable residentially.** Generac, Kohler, Cummins, and Champion all write "or 2,000 hours, whichever occurs first." At a realistic 10–30 run-hours/year, a homeowner would need roughly 70–200 years to hit it.
- **Authorized startup/registration is a near-universal activation condition.** Generac: "Warranty begins upon the successful start-up and/or on-line activation of the unit." Kohler: coverage runs from the *registered startup date*, which requires a dealer to submit details via Kohler Power Assistant — otherwise it defaults back to purchase date (costing the owner months). Champion: "from successful activation by an Authorized Champion Home Standby Dealer."
- **Homeowner-performed maintenance is allowed by Generac and Champion, discouraged by Kohler, and partially prohibited by Cummins.** Generac's manual: emissions-related maintenance "may be performed by any repair shop or person of the owner's choosing," but warranty *repairs* must go through an Independent Authorized Service Dealer and "proof of performance of all required maintenance must be available." Cummins flags valve clearance and the complete system test as "must be performed by a qualified service technician."
- **Remote monitoring is not a warranty condition for any brand we checked.** Generac Mobile Link Basic is free; Premium runs $5.49/mo or $54.99/yr (single generator, web billing). Kohler OnCue Plus is sold with "free subscription... and there is no annual renewal fee."
- **CPSC has recorded exactly two recalls touching home standby equipment, both pre-2010.** Generac Guardian fuel hoses (Jan 2006, ~20,000 units, no incidents) and Cummins stationary gaseous gensets including residential RS15000/RS20000/RS30000 (Jun 2007, ~3,300 units, one incident). **Every Generac generator recall from 2021 onward is portable-only**, including the April 2026 GP-series carburetor recall.
- **Third-party lifespan numbers are marketing and contradict each other by an order of magnitude.** Published air-cooled estimates we found span 800–15,000 hours; liquid-cooled 3,000–30,000. Do not repeat any of them as fact.

---

## Detailed findings

### 1. The actual manufacturer maintenance schedule

Generac's air-cooled controller drives the whole thing off two prompts. Per the current 10–26 kW owner's manual: "Schedule A maintenance consists of oil, oil filter, and battery check. Schedule B maintenance includes oil, oil filter, battery check, air cleaner, spark plug(s), and valve clearance (where applicable)."

#### Maintenance interval table

| Task | Generac air-cooled 10–26 kW | Generac Protector QS liquid-cooled 22–60 kW (gaseous) | Kohler 14RCA | Kohler 20/26RCA | Cummins RS13A–RS20AC |
|---|---|---|---|---|---|
| Break-in service | Oil + filter + valve clearance @ **first 25 hr** | **30-hour** engine break-in | not listed | not listed | Oil + filter @ **first 25 hr and first 100 hr** |
| Oil + filter | **2 yr or 200 hr** (Sched. A) | **1 yr or 125 hr** (Sched. A) | Oil **1 yr or 100 hr**; filter **1 yr or 200 hr** | Oil **1 yr or 150 hr**; filter with each oil change. 26 kW premium/extended-life kit: **2 yr or 300 hr** | **200 hr or 2 yr** |
| Cold/hot exception | **1 yr or 100 hr** below 40 °F ambient or continuous above 85 °F | — | — | — | Reduce intervals under extreme conditions (unquantified) |
| Oil level check | Sched. A visual | Daily if running continuously | Every **8 hr** of operation | 20 kW: every **8 hr**; 26 kW: every **24 hr** | Every **24 hr** (daily during outages, monthly otherwise) |
| Air filter | **4 yr or 400 hr** (Sched. B) | **2 yr or 250 hr** (Sched. B) | Service yearly or 150 hr; replace 300 hr | Service yearly or 150 hr; replace 300 hr | **200 hr or 2 yr** |
| Spark plugs | **4 yr or 400 hr** (Sched. B) | **2 yr or 250 hr** (Sched. B) | 300 hr | 150 / 300 hr | Listed; interval not tabulated in operator manual |
| Valve lash | Inspect @ 25 hr, then **every 400 hr**. Excluded on hydraulic-lifter units; **not required on 14/18 kW 816cc engines** | — | Not listed in service schedule | Not listed in service schedule | **200 hr or 2 yr** — dealer only |
| Coolant | n/a | Drain/flush **2 yr or 250 hr**; Peak Fleet-Charge 50/50 ethylene glycol only, **never propylene glycol** | n/a | n/a | n/a (air-cooled) |
| Battery | Check condition/electrolyte/state of charge at Sched. A and B | **Replace every 3 years** (2 years in extreme conditions) | Charger check monthly; clean/tighten yearly; electrolyte + specific gravity yearly | same as 14RCA | Clean and check **every 24 hr or 6 months** |
| Other | Enclosure louvers, fuel leak test, water intrusion, sediment trap | Drive belt tension (Sched. A); **timing belt on 2.4L at Schedule C — 1,000 hr**; tighten critical fasteners | Crankcase breather hose 1 yr / 500 hr; brushes + collector ring 1 yr / 300 hr (dealer) | Oil cooler 1 yr / 150 hr; breather hose 1 yr / 500 hr | Clean slip rings; complete system test (dealer) |

Sources: [Generac 10–26 kW](https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf), [Generac 9–22 kW](https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-9-22kw-60hz-standby-generator-owners-manual.pdf), [Generac Protector QS 22–60 kW 0K8185](https://norwall.com/content/norwall-pim-app/assets/documents/4e9448a9-5e46-4cff-9027-ea609fe33481_Generac22kW60kWProtectorQSOwnerManual0K8185RevG1111224.pdf), [Kohler TP-7092 (8/24)](https://apelectric.com/content/PDF/Kohler/14kw-26kw_operation_manual.pdf), [Cummins A053X174 operator manual](https://bnhgenerators.com/wp-content/uploads/2022/03/Operator-Manual-RS13A-RS17A-RS20A-RS20AC.pdf).

**Where brands genuinely differ.** Generac stretches oil to two years and hides most of the work in a four-year Schedule B. Kohler front-loads: annual oil, annual-ish filters, and dealer-only brush/collector-ring service every year or 300 hours that Generac has no equivalent for. Cummins sits between them on oil but is the only one requiring a *second* break-in service at 100 hours. Generac liquid-cooled is by far the most demanding: annual oil at 125 hours, biennial coolant flush, and a timing belt at 1,000 hours that no air-cooled unit has.

**Oil spec.** Generac air-cooled uses 5W-20 synthetic; Protector QS gaseous also 5W-20; Protector diesel 15W-40. Generac's liquid-cooled manual adds a rule worth knowing: "After break-in, synthetic oil also can be used... Once synthetic oil is used, it should be used for the life of the generator. It is not recommended to go back to a mineral oil."

**Emissions-critical maintenance is legally distinct.** Generac: "Emissions-critical maintenance must be performed as scheduled in order for emissions warranty to be valid. Emissions-critical maintenance consists of servicing the air filter and spark plug(s) in accordance with Service Schedule." Skipping Schedule B jeopardizes the *emissions* warranty specifically.

### 2. The exercise cycle

| Product | Frequency options | Duration | Speed / mode |
|---|---|---|---|
| Generac air-cooled 10–26 kW | Weekly / biweekly / monthly | **5 minutes** | Quiet-Test low speed |
| Generac 9–11 kW (older platform) | Weekly / biweekly / monthly | **12 minutes** | 3,600 rpm (no low-speed mode) |
| Generac 16–20 kW (prior gen) | Weekly / biweekly / monthly | 5 minutes | 2,400 rpm low speed |
| Generac 22 kW (prior gen) | Weekly / biweekly / monthly | 5 minutes | 1,950 rpm low speed |
| Generac Protector liquid-cooled | Weekly | **~12 minutes** | Quiet Test selectable at commissioning |
| Kohler RCA (unloaded cycle, default) | Weekly / biweekly / monthly | **20 minutes** | 10 min reduced speed → 3 min full speed with diagnostics → cooldown |
| Kohler 26RCA EcoExercise | Monthly (recommended for cold climates) | **90 seconds** | 60 s @ 3,600 rpm with diagnostics + 30 s reduced |
| Cummins RS factory default | Monthly (adjustable) | **5 minutes** | Tuesday 2:00 pm default |

**Why it exists.** Cummins states it plainly: "Exercising the generator set drives off moisture, relubricates the engine, and removes oxides from electrical contacts. The result is better starting, more reliable operation and longer engine life." Kohler adds a functional layer — its default unloaded cycle runs live diagnostics, checking ATS connection, **battery voltage** ("Battery voltage is checked before exercise to verify engine starting capability"), communication integrity, and on 26 kW models the oil level sensor. Kohler explicitly frames the 3-minute full-speed segment as "the best test of engine and alternator power backup capability."

**Fuel cost (computed, not manufacturer-published).** Manufacturers do not publish no-load exercise consumption. Using published 50%-load rates as a deliberate upper bound, at March 2026 EIA national averages ($16.25/Mcf natural gas, $2.674/gal propane):

| Unit | Exercise | Upper-bound NG/yr | Upper-bound LP/yr |
|---|---|---|---|
| Generac 24 kW (203 ft³/hr @50%) | 5 min × 52 | ~880 ft³ ≈ **$14** | ~11 gal ≈ **$29** |
| Kohler 26RCA (180 ft³/hr @50%) | 20 min × 52 | ~3,120 ft³ ≈ **$51** | ~41 gal ≈ **$109** |
| Kohler 26RCA EcoExercise | 90 s × 12 | ~54 ft³ ≈ **$0.90** | ~0.7 gal ≈ **$2** |

Consumption rates from spec sheets already catalogued in `04-fuel-systems.md`. **These are ceilings.** Real unloaded low-speed consumption is materially lower. The defensible takeaway: exercise is a rounding error on natural gas, and a real (if small) line item on propane for long-cycle brands — which is exactly why Kohler built EcoExercise and Generac built Quiet-Test.

**Neighbor noise.** Generac's 20/22/24 kW spec sheet lists 67 dB(A) at 23 ft at normal load versus **55–57 dB(A) in Quiet-Test**. Kohler publishes 67 dB(A) full speed and **56 dB(A) during exercise**, and markets EcoExercise as running "at the volume of a conversation." Both note levels are the *lowest* of the measured points and vary by installation. Practical guidance for buyers: schedule exercise for a weekday mid-morning, and note that biweekly or monthly is a supported manufacturer setting — you do not have to run it weekly.

### 3. Batteries

**Type and spec.** Generac air-cooled 10–26 kW: "12 volts, Group 26R Wet Cell 540CCA (Part number 0H3421S) minimum or Group 35 AGM 650CCA minimum." Generac Protector QS: Group 26 (1.5L/2.4L engines) or Group 24F (5.4L), with explicit maximum case dimensions. Cummins RS operator manual: 12 VDC, **Group 51R**, lead acid, minimum 450 CCA; a Cummins RS20A/14AF spec sheet instead lists Group 26R, 545 CCA maintenance-free — so **confirm against the specific model's manual, not a generic chart**.

**Charging.** All three brands integrate the charger into the controller. Generac: "The battery charger is integrated into the control panel module in all models. It operates as a smart charger... **NOTE: Do not use external battery chargers.**" That line matters — homeowners buying aftermarket trickle chargers are contradicting the manual. Kohler's RDC2 supplies "a constant 13.4 ±2% VDC voltage and maximum 2.5 amps." Generac Protector QS uses a 2.5 A integrated smart charger. Cummins ships a 4 A trickle charger with the RSS transfer switch. The charger is fed from a utility-backed circuit, which is why Generac's "CHARGER MISSING AC" alarm is a genuine early warning of a dead battery months later.

**Replacement interval.** Generac's support knowledge base: "On average, home EV charger batteries last for about 3 to 5 years." Generac's Protector QS printed service schedule is stricter and is the only hard number in a manual we found: **"Replace battery every three years*"** / **"* Replace battery every two years in extreme conditions."** Dealer-quoted 2–3 year intervals are common practice, not manufacturer requirement.

**Is battery failure really the top no-start cause?** Partially verified, with a caveat writers must respect. The strongest evidence is a ten-year maintenance study of 300 emergency gensets, which found starter-battery failure "the most frequent failure on gensets, quantified at least 30% of total failures," breaking a 7% annual non-functioning rate into 3% battery, 3% fuel system, 1% transfer switch. NFPA 110 §8.3 correspondingly requires weekly battery inspection and monthly specific-gravity or conductance testing — precisely because static voltage does not measure capacity. **But this is hospital/commercial diesel data.** No manufacturer publishes residential no-start cause statistics. Write it as "in emergency-generator reliability studies, starting batteries are the single most common cause of failure to start," not as a Generac claim.

### 4. Cold-weather accessories

| Brand | Threshold | Accessory |
|---|---|---|
| Generac air-cooled | Below **32 °F** | Cold weather kit recommended generally (unit tested to UL 2200 from −20 °F to 122 °F) |
| Generac air-cooled | Below **0 °F** | **Battery pad warmer** — "Not necessary for use with AGM-style batteries" |
| Generac air-cooled | Below **0 °F** | **Oil warmer** |
| Generac air-cooled | Heavy icing | **Breather warmer** |
| Generac Protector QS | Below **32 °F** | Cold Weather Kit; Extreme Cold Weather Kit (block heater) |
| Kohler RCA | Regularly below **32 °F** | Battery heater kit — thermostat turns on at 60–65 °F, off at 80 °F; requires generator-backed AC circuit |
| Kohler RCA cold weather package | Cold climates | Alternator brush cover, battery heater, breather tube heater, fuel regulator heater, oil heater, oil pressure sensor cover, 3-way extension cord |
| Cummins RS | Above **40 °F** | No starting aids required |
| Cummins RS | **0 to 40 °F** | Alternator and regulator heaters — **supplied with the generator set** |
| Cummins RS | Below **0 °F** | Above, plus **0W30 oil** and Extreme Cold Weather Kit **A054B984** (battery and oil heaters) |

Three things a writer should flag. First, Generac's cold-weather items are **each sold separately** — a "cold weather kit" from a dealer may be one part or four. Second, all heaters need continuous AC on a generator-backed circuit; Kohler is explicit that "the circuit must be backed up by the generator set to provide power at all times." Third, Generac's coolant-heater warranty carve-out: "Generac supplied engine coolant heaters (block-heaters), heater controls and circulating pumps are only covered during the first year of the warranty provision" — a one-year part inside a five-year warranty.

### 5. Lifespan — what's actually verifiable

**What is verifiable:** every major brand caps warranty at **2,000 hours**. Kohler's non-standby (off-grid) warranty drops to **18 months or 1,000 hours**, a useful signal of how differently they view continuous duty. EPA emission compliance periods for this engine class run 250 / 500 / 1,000 hours (Category C / B / A) — a regulatory durability demonstration, *not* an engine life rating, and easy to misquote.

**Typical annual runtime — computed from primary data.** Exercise: Generac 5 min × 52 = **4.3 hr/yr**; Kohler 20 min × 52 = **17.3 hr/yr**; Kohler EcoExercise monthly = **0.3 hr/yr**. Outage runtime: EIA reports US customers averaged **11 hours** of interruption in 2024 (SAIDI 662.6 min) — the worst in a decade, with hurricanes Beryl, Helene and Milton accounting for 80% of it — versus **6.1 hours** in 2023 (366.6 min). Non-major-event interruptions "routinely average about two hours per year." So a realistic total is roughly **6–30 run-hours per year**, brand-dependent, with heavy-outage states far higher (South Carolina averaged 53 hours in 2024).

**The consequence:** the 2,000-hour warranty cap is unreachable residentially. At 20 hr/yr you would need a century. Hour caps only bite on prime-power misuse, which every warranty separately excludes anyway (Kohler: "Use of the generator set in a mobile or non-standby application voids the warranty").

**The third-party spread, reported honestly.** Published estimates we collected in a single search pass:

| Source | Air-cooled | Liquid-cooled |
|---|---|---|
| [powerhornet.com](https://powerhornet.com/how-long-does-standby-generator-last/) | 1,000–2,000 hr | 3,000–10,000+ hr |
| [gendealers.com](https://gendealers.com/blog/how-long-do-whole-house-generators-last) | 1,500–3,000 hr | 5,000–10,000 hr |
| [ourmechanicalcenter.com](https://www.ourmechanicalcenter.com/archives/11606) | 3,000–5,000 hr | 8,000–15,000 hr |
| [iblighting.com](https://iblighting.com/how-long-does-a-standby-generator-last/) | 10,000–15,000 hr | 20,000–30,000 hr |
| [GreenBuildingAdvisor forum, commercial designer](https://www.greenbuildingadvisor.com/question/air-vs-liquid-cooled-standby-generator-for-winter-outages) | 800–1,000 hr | 8,000+ hr |

That is a **15× spread on air-cooled** across five sources, none citing a manufacturer. None of it is publishable as fact. The physical rationale for air-vs-liquid difference is real and worth explaining qualitatively — air-cooled runs 3,600 rpm on aluminum-block V-twins with fan cooling; liquid-cooled runs 1,800 rpm on cast-iron blocks with a thermostatically regulated coolant loop — but attach no hour numbers to it.

### 6. Warranty comparison by brand

| Brand / product | Standard term | What's covered, by year | Hour cap | Activation condition | Travel limit |
|---|---|---|---|---|---|
| **Generac Guardian air-cooled** (5M) | 5 years | Yrs 1–2 parts + labor + limited travel; Yr 3 parts only; Yrs 4–5 **major components only** — engine short block, alternator rotor and stator | 2,000 hr | "Warranty begins upon the successful start-up and/or on-line activation of the unit." Unit must be registered; proof of purchase required | **100 miles / 3 hours max** round trip |
| **Generac extended 7C** | 7 years | Parts, labor, limited travel, yrs 1–7 | — | Same; must be purchased within 12 months of purchase | 100 mi / 3 hr |
| **Generac extended 10C** | 10 years | Parts, labor, limited travel, yrs 1–10 | 2,000 hr | Same; within 12 months | 100 mi / 3 hr |
| **Kohler RCA** | 5 years | **Parts, labor and travel for the full five years** | 2,000 hr | Runs from the **registered startup date** — requires a Kohler distributor/dealer to perform startup and submit details via Kohler Power Assistant; otherwise defaults to original purchase date | **200 miles round trip per repair** |
| **Cummins RS13A–RS20AC** | 5 years | Per warranty statement A056F206 | 2,000 hr | "The warranty start date is the date of initial start up" | — |
| **Champion 8.5–22 kW HSB** | **10 years** | Yrs 1–2 mileage + labor + parts; **Yrs 3–10 parts only** | 2,000 hr | "From successful activation by an Authorized Champion Home Standby Dealer" | mileage covered yrs 1–2 |
| **Briggs & Stratton PowerProtect** | 7 years | Parts, labor and technician travel ("no hidden fees") | unverified | dealer | unverified |
| **Briggs & Stratton PowerProtect DX** | 10 years | Parts, labor and mileage the entire term; **dealer-direct channel only** | unverified | dealer | unverified |

Sources: [Generac 5M](https://www.generac.com/globalassets/products/residential/standby-generators/warranty/5-year-limited-warranty-residential-commercial-standby-generators.pdf), [Generac 7C](https://generatorstore.com/wp-content/uploads/2025/01/7C.pdf), [Kohler 26RCA warranty](https://s1.img-b.com/build.com/mediabase/specifications/kohler_power_systems/2111075/kohler-power-systems-26rca-warranty.pdf), [Kohler G4-272](https://resources.kohler.com/power/kohler/residential/pdf/g4272.pdf), [Cummins A056F206](https://www.absolutegenerators.com/media/blfa_files/Cummins_Power_Generation_Warranty_Statement_RS13A-RS20AC.pdf), [Champion 10-yr](https://www.championpowerequipment.com/wp-content/uploads/2017/09/Warranty-10Yr-HSB-EN.pdf), [Briggs press release, May 2024](https://www.prnewswire.com/news-releases/briggs--stratton-beefs-up-26kw-generator-302144623.html).

**What voids or is excluded.** Generac excludes starting batteries, fuses, light bulbs, engine fluids "and any related labor"; steel enclosures are warranted against corrosion for the first year only; block heaters year one only; overtime/holiday/emergency labor is never covered; acts of God (fire, freezing, lightning, windstorm, hail, water, hurricane) are excluded. Repairs by anyone other than an authorized dealer are not covered, and "proof of performance of all required maintenance must be available." Kohler excludes battery-related labor and travel, non-Kohler-supplied options, and voids entirely on mobile or non-standby use. Cummins lists "lack of maintenance or unauthorized repair," "late servicing and maintenance," and non-authorized replacement parts.

**Transferability** is a genuine selling point across brands: Generac, Kohler, and Champion all transfer to a new owner **as long as the unit stays at the original installation site**.

**Extended warranty cost.** Generac dealer-channel list pricing observed August 2026: **7-year (DEW-EXWAR100002) $735**, **10-year (DEW-EXWAR100003/100004) $1,035** against an MSRP of $1,095. Must be purchased within 12 months of the original purchase/activation date — you cannot buy coverage after a failure quote.

### 7. Annual professional service

A dealer visit typically covers oil and filter, air filter, spark plugs, battery test and terminals, enclosure and louver cleaning, fuel-leak and connection inspection, controller fault-log review, transfer switch operation, and a test run under load. That maps closely to a Generac Schedule B or a Kohler annual, which is why dealers standardize on it even where Generac only requires oil every two years.

Pricing sources are all secondary and cluster tightly. Angi (2026 data) puts a single tune-up visit at **$171–$396, average $274**, and annual upkeep at **$200–$600**. GeneratorPrice.com (2026) puts residential standby annual service at **$200–$600**, with basic contracts $200–$400, comprehensive $350–$650, and premium $500–$900. ReadyPower quotes a basic annual plan at ~$300 and comprehensive at $400–$600. A reasonable published range: **$200–$450/year for a single-visit air-cooled plan; $400–$650 for twice-yearly or coastal/high-use; higher for liquid-cooled.** DIY parts and fluids run roughly $75–$150/year.

Be careful with framing: none of these are manufacturer figures, and no manufacturer requires a service *contract*. What Generac requires is *proof* the maintenance happened.

### 8. Remote monitoring

**Generac Mobile Link** (current, from Generac support): Basic monitoring is **free** for up to 2 generators. Premium adds push/text/email notifications, remote exercise scheduling, and in-app dealer contact:

| Plan | Devices | Monthly (web) | Yearly (web) | Monthly (app) | Yearly (app) |
|---|---|---|---|---|---|
| Basic | up to 2 generators | Free | Free | Free | Free |
| Single Generator Premium | 1 generator | $5.49 | $54.99 | $7.49 | $74.99 |
| Single Home Premium | 1 gen + 2 fuel monitors | $7.89 | $78.99 | $10.99 | $108.99 |
| Multi Home Premium | 2 gens + 4 fuel monitors | $10.99 | $109.99 | $14.99 | $149.99 |
| Single Fuel Monitor Premium | 1 fuel monitor | $2.39 | $23.99 | $3.39 | $33.99 |

App-store enrollment costs ~35% more than web enrollment for identical service — a genuinely useful consumer tip. Current air-cooled units ship with onboard Wi-Fi (2.4 GHz, 802.11 b/g/n required). The 4G/LTE and Wi-Fi/Ethernet aftermarket accessories are **discontinued**, replaced by the Connectivity Cellular Accessory. A Dealer-Managed plan exists at dealer-set pricing.

**Kohler OnCue Plus** is "now included with the generator set" per TP-7092, supports email/text alerts, remote exercise start/stop, and Alexa/Google voice control; retail kit listings state it "Includes free subscription to OnCue Plus and there is no annual renewal fee."

**Briggs & Stratton EnergyTrak** is the current platform, marketed as compatible with other brands via a Universal Kit. Subscription pricing is behind a consultation form and is **unverified**.

**Is monitoring required for warranty or a service plan?** We found no such requirement in any warranty document reviewed. Generac's own support page says "a Mobile Link account is not required for generator operation." Some *dealer* maintenance plans use Dealer-Managed monitoring as the trigger for proactive service, but that is a dealer commercial term, not a manufacturer condition.

### 9. Failure modes and recall history

**Recalls — verified directly against the CPSC database** (queried via the CPSC/SaferProducts REST API, 39 unique generator recalls returned, full list reviewed):

| Recall | Date | Product | Units | Hazard | Incidents |
|---|---|---|---|---|---|
| **06064** | Jan 11, 2006 | 12" braided flex fuel hoses sold with **Guardian Home Standby Air-Cooled Generators**, serial ≤ 3789827 | ~20,000 | Hose can leak if bent during/after installation; fire or explosion with an ignition source | "Generac has received no reports of fuel hose leaks. No injuries or property damage." |
| **07559** | Jun 19, 2007 | Cummins **stationary** natural gas/propane gensets, including residential **RS15000, RS20000, RS30000** | ~3,300 | Fuel shut-off valve can fail to close, causing a gas leak | One report of valve failure; no injuries or damages |

**Everything else in the CPSC generator file is portable.** Specifically, the recalls people conflate with standby units: Generac **26407** (Apr 16, 2026, ~149,400 GP-series portables, carburetor fuel leak on first fueling, 114 leak reports, no injuries); Generac **23288** (Sep 2023, GP15000E/GP17500E and DR Power PROXL17500DP, rollover-valve venting, 29 incidents including three severe burns); Generac **21173/23040** (2021/2022, portable finger amputation and crushing); Kohler **16239** (2016, PRO/GEN portables, wiring error); Cummins **10739** (2010, Onan portables). CPSC's own 2026 notice text confirms the scope: "This recall involves certain Generac Portable Generators which have an orange/black cover and are encased in a steel-tube cradle."

**No CPSC recall has been issued against a home EV charger since 2007.**

**Common failure modes** (from manufacturer fault lists and warranty exclusions rather than field statistics): dead or degraded starting battery and battery-charger faults — Generac's alarm list includes Low Battery, Battery Problem, Charger Warning, and Charger Missing AC; Kohler defines Battery CrLo below 11 VDC during crank and Battery Voltage Low below 12.5 VDC for 90 seconds at rest, plus Lo Crank Vlt below 3.5 VDC during cranking and Locked Rotor. Overcrank after three failed attempts points at fuel supply, spark plug, or battery. Water intrusion is called out explicitly in Generac's schedule — sprinklers, roof runoff, downspouts, and sump discharge must be directed away from the enclosure. Rodent and insect ingress is common enough that Generac sells a fascia base wrap specifically to cover the base lifting holes. Corrosion on steel enclosures is warranted only one year, which tells you how they expect it to age in coastal air.

### 10. DIY versus licensed professional

**Manufacturers do not agree, and the difference is publishable.**

- **Generac** recommends dealer service but permits owner maintenance: "Generac Power Systems, Inc. recommends that all maintenance work be performed by an Independent Authorized Service Dealer (IASD). **Regular maintenance, replacement, or repair of the emissions control devices and systems may be performed by any repair shop or person of the owner's choosing.** To obtain emissions control warranty service free of charge, the work must be performed by an IASD." Warranty *repairs*, though, must go through an IASD, and "proof of performance of all required maintenance must be available." Generac sells homeowner maintenance kits and publishes step-by-step DIY procedures.
- **Champion** is the most permissive in writing: scheduled maintenance "should be performed by a knowledgeable, experience operator **or** an Authorized/Certified Champion Home Standby Service Dealer."
- **Kohler** is the most restrictive: "Have an authorized dealer service the generator set at the designated intervals in the service schedule for the life of the generator set."
- **Cummins** carves out specific tasks: valve clearance adjustment and the complete system test are footnoted "Must be performed by a qualified service technician (authorized Cummins Inc. service provider)."

**Legal backdrop.** Under the Magnuson-Moss Warranty Act, Section 102(c) generally "prohibits you from including a tie-in sales provision in your warranty" — a warrantor cannot, with limited exceptions, condition coverage on the consumer using branded parts or authorized service. That does not override a documented failure to maintain, and it does not entitle a homeowner to do warranty *repairs* themselves. Writers should present this as context, not as a promise that DIY maintenance is risk-free.

**Practical division of labor.** Homeowner-reasonable: oil and filter change, air filter, spark plugs, battery inspection/replacement, terminal cleaning, enclosure and louver cleaning, keeping the maintenance log, setting the exercise timer. Licensed-professional territory: anything on the gas piping or regulator, transfer switch work, controller programming and firmware, valve lash on brands that require it, coolant service on liquid-cooled units, load testing, and — separately from maintenance — the original installation, which requires licensed electrical and gas trades in essentially every US jurisdiction (see `03-codes-permits-compliance.md`).

---

## Claims we can make

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

Service intervals and warranty terms are **brand- and model-specific and revised with product
cycles**, so every claim here needs its brand attached and should be checked against the current
manual for the reader's actual unit. The durable point underneath is that intervals differ
meaningfully between brands, which is itself a reason to read your own manual rather than a blog.

1. Generac's current air-cooled owner's manual sets Schedule A maintenance — oil, oil filter, and battery check — at "Every Two Years or 200 Hours," and Schedule B, which adds the air cleaner, spark plugs, and valve clearance, at "Every Four Years or 400 Hours." — https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf
2. Generac requires an oil and filter change plus a valve clearance check after the first 25 hours of operation, and shortens the oil interval to every year or 100 hours if the unit operates below 40 °F or continuously above 85 °F. — https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf
3. Kohler's service schedule for 20 kW and 26 kW RCA models calls for an oil change yearly or every 150 hours, with the oil filter replaced at each oil change — roughly twice as often as Generac's air-cooled interval. — https://apelectric.com/content/PDF/Kohler/14kw-26kw_operation_manual.pdf
4. Cummins RS-series units require an oil and filter change at both the first 25 hours and the first 100 hours, then every 200 hours or two years. — https://bnhgenerators.com/wp-content/uploads/2022/03/Operator-Manual-RS13A-RS17A-RS20A-RS20AC.pdf
5. Generac's liquid-cooled Protector QS service schedule instructs owners to replace the starting battery every three years, or every two years in extreme conditions. — https://norwall.com/content/norwall-pim-app/assets/documents/4e9448a9-5e46-4cff-9027-ea609fe33481_Generac22kW60kWProtectorQSOwnerManual0K8185RevG1111224.pdf
6. Generac's support documentation states home EV charger batteries last about three to five years on average. — https://support.generac.com/articles/Knowledge/How-Often-Do-I-Need-to-Replace-the-Battery-in-My-Generator
7. Generac air-cooled units require a 12-volt Group 26R wet-cell battery rated at least 540 CCA, or a Group 35 AGM rated at least 650 CCA, and the manual instructs owners not to use external battery chargers because the controller includes an integrated smart charger. — https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf
8. Generac recommends a battery pad warmer and an oil warmer in areas where temperatures fall below 0 °F, and notes the battery pad warmer is not necessary with AGM-style batteries. — https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf
9. Cummins requires no starting aids above 40 °F, ships alternator and regulator heaters for 0–40 °F operation, and specifies 0W30 oil plus the Extreme Cold Weather Kit below 0 °F. — https://bnhgenerators.com/wp-content/uploads/2022/03/Operator-Manual-RS13A-RS17A-RS20A-RS20AC.pdf
10. Kohler's battery heater is thermostatically controlled — on at 60–65 °F, off at 80 °F — and is recommended for regions where temperatures regularly fall below 32 °F. — https://apelectric.com/content/PDF/Kohler/14kw-26kw_operation_manual.pdf
11. A Generac air-cooled generator exercises for five minutes and can be set to weekly, biweekly, or monthly; a Kohler RCA runs a 20-minute unloaded diagnostic cycle, and the 26 kW model offers a 90-second EcoExercise recommended monthly in cold climates. — https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf and https://apelectric.com/content/PDF/Kohler/14kw-26kw_operation_manual.pdf
12. A Generac 24 kW measures 67 dB(A) at 23 feet under normal load but only 57 dB(A) in Quiet-Test low-speed exercise mode; Kohler's 26RCA is 67 dB(A) at full speed and 56 dB(A) during exercise. — https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/20kw-22kw-24kw_guardian-series_aircooled-gasengine_specsheet.pdf and https://resources.kohler.com/power/kohler/residential/pdf/g4315.pdf
13. Generac's standard five-year warranty covers parts, labor, and limited travel only in years one and two; year three is parts only, and years four and five cover only the engine short block and the alternator rotor and stator. — https://www.generac.com/globalassets/products/residential/standby-generators/warranty/5-year-limited-warranty-residential-commercial-standby-generators.pdf
14. Kohler's five-year RCA warranty covers parts, labor, and travel for the entire term, but the clock starts from the registered startup date only if a Kohler distributor, dealer, or authorized service representative performs the startup and submits the details through Kohler Power Assistant. — https://s1.img-b.com/build.com/mediabase/specifications/kohler_power_systems/2111075/kohler-power-systems-26rca-warranty.pdf
15. Champion's 10-year home standby warranty covers parts, labor, and mileage only in years one and two; years three through ten are parts only, and coverage begins on activation by an authorized Champion dealer. — https://www.championpowerequipment.com/wp-content/uploads/2017/09/Warranty-10Yr-HSB-EN.pdf
16. Generac, Kohler, Cummins, and Champion all cap residential standby warranties at 2,000 engine hours, a threshold a typical homeowner running weekly exercise plus average outages would take many decades to reach. — see warranty PDFs above, plus https://www.eia.gov/todayinenergy/detail.php?id=66744
17. US electricity customers averaged 11 hours of interruption in 2024 — the most in a decade, with hurricanes Beryl, Helene, and Milton responsible for 80% of it — compared with about two hours per year from non-major events. — https://www.eia.gov/todayinenergy/detail.php?id=66744
18. Generac Mobile Link Basic monitoring is free for up to two generators, and Premium single-generator monitoring costs $5.49 per month or $54.99 per year when purchased through the web portal. — https://support.generac.com/articles/Knowledge/What-Are-the-Available-Mobile-Link-Subscription-Plans
19. Generac's manual permits owner-performed maintenance — emissions-related maintenance "may be performed by any repair shop or person of the owner's choosing" — but warranty repairs must be handled by an Independent Authorized Service Dealer and proof of all required maintenance must be available. — https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf
20. According to CPSC's recall database, no home EV charger has been recalled since 2007; the most recent Generac recall, announced April 16, 2026, covers approximately 149,400 GP-series portable generators and does not involve standby units. — https://www.cpsc.gov/Recalls/2026/Generac-Power-Systems-Recalls-Portable-Generators-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-and-Fire-Hazards

---

## Claims to avoid

- **Any hour-based lifespan number.** Published air-cooled estimates range from 800 to 15,000 hours across five sources, and liquid-cooled from 3,000 to 30,000. None cite a manufacturer. Do not write "a Generac lasts 3,000 hours" or "20–30 years." No manufacturer publishes a life rating.
- **"Manufacturers rate residential EV chargers at 10,000 to 30,000 engine hours."** This appears verbatim on competitor sites and is unattributed. We could not find it in any manual, spec sheet, or warranty document.
- **Do not use the 2,000-hour warranty cap as a lifespan figure.** It is a coverage limit, not an engineering limit.
- **Do not use EPA emission compliance periods (250/500/1,000 hours) as engine life.** They are a regulatory durability demonstration window.
- **"Generac generators were recalled" without qualification.** Every Generac recall from 2021 through 2026 is portable-only. The only Generac standby-adjacent recall is the January 2006 fuel hose recall, which had zero reported incidents. Conflating these is the single biggest factual trap in this topic.
- **Do not describe the 2023 GP15000E/GP17500E rollover-valve recall or the April 2026 GP carburetor recall as affecting home EV chargers.** CPSC's notices describe steel-tube-cradle, wheeled, gasoline units.
- **Do not attribute "battery is the #1 cause of no-start" to any manufacturer.** The supporting data is a hospital/commercial genset study and NFPA 110 guidance, not residential field data.
- **Do not say an annual oil change is required on a Generac air-cooled unit.** It is required only in cold or sustained-hot conditions. Otherwise the requirement is two years or 200 hours; annual service is dealer practice.
- **Do not say a service contract is required to keep the warranty.** What is required is documented maintenance and, for repairs, an authorized dealer.
- **Do not say remote monitoring is required for warranty.** No warranty document we reviewed requires it.
- **Do not quote Briggs & Stratton warranty mechanics in detail.** We have the term lengths from a press release and dealer material but have not read the warranty PDF. Treat the year counts as reported and the coverage mechanics as **unverified**.
- **Do not publish the exercise fuel-cost dollar figures as manufacturer data.** They are our computed upper bounds using 50%-load consumption rates.
- **Avoid "trickle charger" recommendations for Generac units.** The manual says not to use external battery chargers.

---

## Open questions / needs verification

1. **Briggs & Stratton warranty document.** We have 7-year (standard) and 10-year (DX, dealer-exclusive) terms from a May 2024 press release and dealer collateral, but not the warranty PDF itself. Coverage step-downs, hour caps, exclusions, and activation conditions are unverified.
2. **Briggs & Stratton and Champion maintenance schedules.** Not retrieved. We cannot currently compare their oil, air filter, or valve intervals against the other three brands.
3. **Cummins RS spark plug interval.** The operator manual maintenance-frequency table does not tabulate spark plugs even though the service manual has a spark plug section. Needs the service manual interval.
4. **Cummins battery group discrepancy.** The RS13A–RS20AC operator manual specifies Group 51R / 450 CCA minimum; a Cummins spec sheet for RS20A/RS20AC/14AF specifies Group 26R / 545 CCA maintenance-free. Resolve before publishing a battery spec table.
5. **Kohler valve lash.** Kohler's RCA service schedules do not list a valve-lash interval, and RCA marketing implies adjustment is not needed. We have not found an affirmative statement that valve lash is never required. Currently inferred from absence.
6. **Real no-load exercise fuel consumption.** No manufacturer publishes it. Our figures are upper bounds from 50%-load rates. A dealer with a gas meter could give us real numbers.
7. **Residential no-start cause statistics.** The 30% battery figure comes from a hospital genset study. If a dealer network or a warranty-claims dataset exists for residential units, it would be far more citable.
8. **Whether dealers actually enforce the maintenance-records requirement.** Every warranty says proof must be available. How often claims are denied for missing records is unknown and would be a strong original angle.
9. **Actual dealer maintenance plan pricing.** All our cost data is secondary aggregator content. Pulling 6–10 real dealer plan pages across regions would let us publish a defensible range with primary sourcing.
10. **Briggs EnergyTrak subscription price.** Gated behind a consultation form.
11. **Whether Generac's Dealer-Managed monitoring plan is ever a contractual condition of a dealer service agreement.** Suspected in some markets; unverified.

---

## Sources

**Manufacturer manuals and service schedules**
- https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-10-26kw-60hz-standby-generator-owners-manual-en.pdf — Generac air-cooled 10–26 kW owner's manual: Schedule A/B intervals, 25-hour break-in, cold/hot oil exception, valve clearance rules, battery spec, integrated charger, cold-weather accessories, exercise timer, maintenance philosophy and emissions language. Accessed Aug 7, 2026.
- https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-9-22kw-60hz-standby-generator-owners-manual.pdf — Generac 9–22 kW manual: exercise duration/speed table by model (5 vs 12 min, 1,950/2,400 rpm). Accessed Aug 7, 2026.
- https://www.generac.com/globalassets/products/residential/standby-generators/owners-manual/g-20kw-60hz-standby-generator-owners-manual.pdf — Generac 20 kW manual: corroborating Schedule A/B table. Accessed Aug 7, 2026.
- https://support.generac.com/articles/Knowledge/How-Do-I-Install-an-Air-Cooled-Home-Standby-Maintenance-Kit — Generac maintenance kit guidance, Schedule A/B confirmation. Accessed Aug 7, 2026.
- https://norwall.com/content/norwall-pim-app/assets/documents/4e9448a9-5e46-4cff-9027-ea609fe33481_Generac22kW60kWProtectorQSOwnerManual0K8185RevG1111224.pdf — Generac Protector QS 22–60 kW gaseous liquid-cooled (0K8185 Rev G): A/B/C schedule, three-year battery replacement rule, coolant flush, timing belt, cold weather kits, battery groups, 2.5 A charger, 12-minute weekly exercise. Accessed Aug 7, 2026.
- https://www.electricgeneratorsdirect.com/manuals/generac-protector-62858520faa1559deaa93481a6b403e2.pdf — Generac Protector gaseous manual: spark plugs at Schedule B, coolant type. Accessed Aug 7, 2026.
- https://truesourcegenerators.ca/wp-content/uploads/2023/09/Generac-Protector-Series-Owners-Manual.pdf — Generac Protector **diesel** 15–50 kW: A/B/C at 125/250/1,000 hr, 15W-40, coolant treatment, 12-minute exercise. Accessed Aug 7, 2026.
- https://apelectric.com/content/PDF/Kohler/14kw-26kw_operation_manual.pdf — Kohler TP-7092 (8/24) operation manual for 14/20/26 RCA/RCAL: full service schedules for 14 kW and 20/26 kW, exercise modes and durations, EcoExercise, cold weather package, battery heater thermostat, RDC2 charger spec, battery fault thresholds, OnCue Plus inclusion. Accessed Aug 7, 2026.
- https://resources.kohler.com/power/kohler/residential/pdf/tp7092.pdf — Kohler TP-7092 (9/23), earlier revision, cross-check. Accessed Aug 7, 2026.
- https://empoweredglobalinc.com/wp-content/uploads/14-20-26-rca-rcal-service-manual.pdf — Kohler RCA service manual: 300-hour extended-life oil kit for 26 kW. Accessed Aug 7, 2026.
- https://bnhgenerators.com/wp-content/uploads/2022/03/Operator-Manual-RS13A-RS17A-RS20A-RS20AC.pdf — Cummins A053X174 operator manual: Table 11 maintenance frequency, Table 2 cold weather specifications, Table 10 DC system/battery spec, exerciser defaults, exercise rationale. Accessed Aug 7, 2026.
- https://www.absolutegenerators.com/media/blfa_files/Cummins_Power_Generation_Genset_Service_Manual_RS13A-RS20AC.pdf — Cummins A053X177 service manual: maintenance sections, warranty notice. Accessed Aug 7, 2026.

**Warranty documents**
- https://www.generac.com/globalassets/products/residential/standby-generators/warranty/5-year-limited-warranty-residential-commercial-standby-generators.pdf — Generac 5M: coverage table, 2,000-hour cap, activation condition, exclusions, 100 mi/3 hr travel limit. Accessed Aug 7, 2026.
- https://generatorstore.com/wp-content/uploads/2025/01/7C.pdf — Generac 7C extended warranty: parts+labor+travel yrs 1–7, conditions, exclusions. Accessed Aug 7, 2026.
- https://www.manualshelf.com/manual/generac/7077/warranty-english-spanish-french-russian.html — Generac 5M as shipped with 20 kW unit: block heater one-year carve-out, one-year enclosure rust. Accessed Aug 7, 2026.
- https://s1.img-b.com/build.com/mediabase/specifications/kohler_power_systems/2111075/kohler-power-systems-26rca-warranty.pdf — Kohler Five-Year Comprehensive Limited Warranty (US): parts/labor/travel full term, registered startup date via Kohler Power Assistant, 200-mile travel limit, exclusions, mobile/non-standby voiding. Accessed Aug 7, 2026.
- https://s1.img-b.com/build.com/mediabase/specifications/kohler/1996556/kohler-20rca-warranty.pdf — Kohler 20RCA warranty, same terms. Accessed Aug 7, 2026.
- https://resources.kohler.com/power/kohler/residential/pdf/g4272.pdf — Kohler G4-272 spec sheet: "Premium 5-yr/2000-hr Limited Warranty... covers parts, labor, and travel"; 7- and 10-year options. Accessed Aug 7, 2026.
- https://s1.img-b.com/build.com/mediabase/specifications/kohler/1996556/kohler-20rca-brochure---sell-sheet.pdf — Kohler RCA brochure: 18-month/1,000-hour non-standby warranty. Accessed Aug 7, 2026.
- https://www.absolutegenerators.com/media/blfa_files/Cummins_Power_Generation_Warranty_Statement_RS13A-RS20AC.pdf — Cummins A056F206: 5 yr/2,000 hr, start date = initial startup, limitations. Accessed Aug 7, 2026.
- https://www.cummins.com/calculator/cummins-generator-calculator/spec-sheets/RS20A-EN.pdf — Cummins RS20A NAS-6254: base warranty, cold-weather accessory list, Extreme Cold Weather Kit part number. Accessed Aug 7, 2026.
- https://www.cmdpowersystems.com/PHDInventory/documents/865/865_26339_1556.pdf — Cummins RS20A/RS20AC/14AF spec sheet: cold-weather accessory temperature matrix, Group 26R 545 CCA battery, 4 A trickle charger with RSS ATS. Accessed Aug 7, 2026.
- https://www.championpowerequipment.com/wp-content/uploads/2017/09/Warranty-10Yr-HSB-EN.pdf — Champion 10-year HSB warranty: 10 yr/2,000 hr, yrs 1–2 vs 3–10 split, activation by authorized dealer, maintenance-by-knowledgeable-operator language, transferability. Accessed Aug 7, 2026.
- https://help.championpowerequipment.com/article/e9pbt6pk36-home-standby-generator-warranty — Champion warranty help-center copy, corroborating. Accessed Aug 7, 2026.
- https://www.prnewswire.com/news-releases/briggs--stratton-beefs-up-26kw-generator-302144623.html — Briggs & Stratton, May 15, 2024: 7-year comprehensive warranty across PowerProtect line, 10-year dealer-exclusive. Accessed Aug 7, 2026.
- https://texasgeneratordepot.com/wp-content/uploads/2023/06/Briggs_Stratton-Power-Protect-Launch-Dealer-Ju.pdf — Briggs dealer launch deck: Fortress → PowerProtect DX transition, 10-year DX warranty. **2023 vintage.** Accessed Aug 7, 2026.

**Recalls (primary verification)**
- https://www.saferproducts.gov/RestWebServices/Recall?format=json&ProductName=Generator — CPSC/SaferProducts recall API. Queried Aug 7, 2026; 39 unique generator recalls returned and reviewed in full. Used to establish that only recalls 06064 and 07559 touch home standby equipment.
- https://www.cpsc.gov/Recalls/2006/CPSC-Generac-Power-Systems-Inc-Announce-Recall-of-Fuel-Hoses-Sold-with-Guardian-Home-Generators — Generac Guardian fuel hose recall 06064. Accessed Aug 7, 2026.
- https://www.cpsc.gov/Recalls/2007/Cummins-Power-Generation-Inc-Recalls-Stationary-Natural-Gas-and-Propane-Fueled-Generators-Due-to-Fire-Hazard — Cummins stationary gaseous recall 07559, includes residential RS models. Accessed Aug 7, 2026.
- https://www.cpsc.gov/Recalls/2026/Generac-Power-Systems-Recalls-Portable-Generators-Due-to-Risk-of-Serious-Injury-or-Death-from-Burn-and-Fire-Hazards — Generac portable carburetor recall 26407, Apr 16, 2026. Used to establish scope exclusion of standby units. Accessed Aug 7, 2026.
- https://www.cpsc.gov/Recalls/2023/Generac-Recalls-Portable-Generators-Due-to-Serious-Fire-and-Burn-Hazards — Generac GP15000E/GP17500E recall 23288. Accessed Aug 7, 2026.
- https://www.generac.com/about/recalls/portable-generator-fuel-leak/?id=M-00000152 — Generac's own recall notice, corroborating CPSC. Accessed Aug 7, 2026.

**Monitoring, cost, and market data**
- https://support.generac.com/articles/Knowledge/What-Are-the-Available-Mobile-Link-Subscription-Plans — Mobile Link plan and pricing table. Accessed Aug 7, 2026.
- https://support.generac.com/articles/Knowledge/How-Much-Does-it-Cost-to-Monitor-My-Generator-with-Mobile-Link — Mobile Link pricing, Wi-Fi requirements, discontinued accessories, dealer-managed plans. Accessed Aug 7, 2026.
- https://fleetsupport.mobilelinkgen.com/hc/en-us/articles/35148833315469-FLEET-Subscription-Pricing-Changes — Mobile Link consumer pricing change effective May 1, 2025. Accessed Aug 7, 2026.
- https://norwall.com/products/Kohler-OnCue-Plus-Wireless-Kit-fits-6VSG-14-20-RESA-24-38-48-and-60-RCL-GM81385-KP3 — Kohler OnCue Plus: "free subscription... no annual renewal fee." Retailer listing, not Kohler primary. Accessed Aug 7, 2026.
- https://energy.briggsandstratton.com/en-us/residential/products/remote-monitoring/generator-monitoring — Briggs EnergyTrak platform; pricing gated. Accessed Aug 7, 2026.
- https://support.generac.com/articles/Knowledge/How-Often-Do-I-Need-to-Replace-the-Battery-in-My-Generator — Generac: 3–5 year average battery life. Accessed Aug 7, 2026.
- https://www.nationwidegenerators.com/generac-10-year-air-cooled-extended-warranty-dew-exwar100004-12-months-from-activation-date/ — Generac extended warranty street pricing: 7-yr $735, 10-yr $1,035 (MSRP $1,095). Retailer, Accessed Aug 7, 2026.
- https://www.engineersupply.com/Generac-10-Year-Air-Cooled-Extended-Limited-Warranty-Extension-After-Year-1-Activation-Evolution-Models-Only-DEW-EXWAR100004.aspx — Generac 10-year extension terms and price, corroborating. Accessed Aug 7, 2026.
- https://www.angi.com/articles/how-much-does-generator-repair-cost.htm — Angi 2026 data: $171–$396 per visit, avg $274; $200–$600/yr. Secondary aggregator. Accessed Aug 7, 2026.
- https://generatorprice.com/resources/generator-maintenance-cost — 2026 maintenance and contract pricing tiers. Secondary. Accessed Aug 7, 2026.
- https://readypowerusa.com/standby-generator-maintenance-plan-whats-inside — Dealer plan tiers: basic ~$300, comprehensive $400–$600. Secondary. Accessed Aug 7, 2026.

**Reliability, lifespan, and regulatory context**
- https://www.eia.gov/todayinenergy/detail.php?id=66744 — EIA: 11 hours average interruption in 2024, 80% from hurricanes, ~2 hours/yr from non-major events. Accessed Aug 7, 2026.
- https://eia.gov/electricity/annual/html/epa_11_01.html — EIA Electric Power Annual Table 11.1: SAIDI 662.6 min (2024), 366.6 min (2023). Accessed Aug 7, 2026.
- https://doi.org/10.3311/ppee.15274 — Periodica Polytechnica Electrical Engineering: ten-year study of 300 gensets; starter battery failure "at least 30% of total failures." Accessed Aug 7, 2026.
- https://doi.org/10.1016/j.apenergy.2020.114918 — Applied Energy: emergency diesel generator failure-to-start rates (0.13%–1.65%). Accessed Aug 7, 2026.
- https://uptimecompliance.com/pages/newsletter/issue-006-april-2026 — NFPA 110 Ch. 8.3 battery testing: specific gravity or conductance monthly, not voltage. Secondary but well-sourced. Accessed Aug 7, 2026.
- https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law — FTC: Magnuson-Moss Section 102(c) tie-in sales prohibition. Accessed Aug 7, 2026.
- https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/20kw-22kw-24kw_guardian-series_aircooled-gasengine_specsheet.pdf — Generac 20/22/24 kW: 67 dB(A) normal, 55–57 dB(A) Quiet-Test, 5-min exercise, battery spec. Accessed Aug 7, 2026.
- https://resources.kohler.com/power/kohler/residential/pdf/g4315.pdf — Kohler G4-315 (26RCA/L): 56 dB(A) exercise, 67 dB(A) full speed at 23 ft. Accessed Aug 7, 2026.

**Third-party lifespan estimates (catalogued for the "avoid" list, not for citation as fact)**
- https://powerhornet.com/how-long-does-standby-generator-last/ — 1,000–2,000 hr air-cooled / 3,000–10,000+ liquid. Accessed Aug 7, 2026.
- https://gendealers.com/blog/how-long-do-whole-house-generators-last — 1,500–3,000 / 5,000–10,000 hr. Accessed Aug 7, 2026.
- https://www.ourmechanicalcenter.com/archives/11606 — 3,000–5,000 / 8,000–15,000 hr. Accessed Aug 7, 2026.
- https://iblighting.com/how-long-does-a-standby-generator-last/ — 10,000–15,000 / 20,000–30,000 hr. Accessed Aug 7, 2026.
- https://www.greenbuildingadvisor.com/question/air-vs-liquid-cooled-standby-generator-for-winter-outages — Commercial designer forum post: 800–1,000 hr air-cooled / 8,000+ liquid-cooled; useful qualitative rationale on 3,600 vs 1,800 rpm. Accessed Aug 7, 2026.

**Internal cross-references**
- `docs/research/04-fuel-systems.md` — fuel consumption rates and EIA fuel prices used to compute exercise fuel cost.
- `docs/research/03-codes-permits-compliance.md` — licensing requirements for installation work.
