# Fuel Systems: Natural Gas, Propane (LP), and Diesel

> **Internal research document — not published content.** This is a working reference for writers building FAQ sections and buyer guides for EVChargerInstallerList.com. Every figure below is traced to a named source. Do not publish verbatim. All research conducted and accessed **August 7, 2026**.

---

## Executive summary

- **Natural gas costs roughly half what propane does per unit of energy.** March 2026 national averages: natural gas $16.25/Mcf (~$16.25/MMBtu), propane $2.674/gal (~$29.22/MMBtu) — propane is about **1.8× more expensive per BTU**. ([EIA NG](https://www.eia.gov/dnav/ng/ng_sum_lsum_a_EPG0_PRS_DMcf_m.htm), [EIA propane](https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=W_EPLLPA_PRS_NUS_DPG))
- **Almost every air-cooled unit is field-convertible.** Generac ships factory-configured for natural gas; conversion to LP is an orange knob rotated 180° above the fuel mixer plus a controller menu change. Cummins RS-series is "single fuel — natural gas or propane vapor, field selectable."
- **Units rate higher on LP.** Generac's 7209 is 24,000 W on LP but 21,000 W on NG — a **12.5% derate**. The kW number on the box is usually the LP number.
- **The derate is not universal.** Generac's 14 kW (7224) rates 14,000 W on both fuels; the 18 kW (7226) drops only to 17,000 W.
- **BTU demand is large.** A 24 kW Generac at full load pulls **306,000 BTU/hr** on natural gas — like adding three tankless water heaters at once.
- **Generators have zero load diversity.** NFPA 54 tables assume appliances don't all run at once; a generator runs at 100% load with no fudge factor, which is why undersized pipe is a top install failure.
- **Required inlet pressure is tight.** Generac air-cooled: **3.5–7.0 in. w.c. NG, 10–12 in. w.c. LP**. Kohler 26RCA: 3.5–11 / 7–11. Cummins RS20A: min 3.5 NG / 6.0 LP, max 12.0 both.
- **Utilities will not guess for you.** Every major gas utility requires a written load form itemizing BTU for every existing and new appliance. NJNG quotes 15 business days to review and ~6 weeks for upgrade work.
- **2 psi service is the standard fix for long runs and big units.** NJNG notes elevated pressure "may be necessary for generators larger than 24KW, or when the distance between the generator and meter is greater than 75 ft," with the customer responsible for the step-down regulator.
- **Propane tanks are 80% usable.** A "500 gallon" tank holds 400; a "120 gallon" (420 lb) vertical holds ~96.
- **A 500-gallon tank runs a 24 kW unit about 4 days at full load, 6.5 days at half load.**
- **Cold weather, not tank capacity, is the propane constraint.** A 500-gallon tank at 0°F and 40% full vaporizes only ~182,000 BTU/hr — well short of the 355,000 BTU/hr a 24 kW Generac needs on LP.
- **NFPA 58 setbacks: 10 ft** from important buildings and buildable property lines for aboveground ASME tanks of 125–500 gallons; **25 ft** for 501–2,000 gallons (reducible to 10 ft for a single container ≤1,200 gal).
- **Natural gas held up in the 2024 hurricanes; propane delivery did not hold up in winter 2025–26.** Peoples Gas lost ~1,400 of 500,000 customers across Helene and Milton, mostly to structural damage. Virginia families waited 5+ weeks for propane refills in early 2026.
- **Gasoline is the least reliable disaster fuel** — Florida station outages peaked above 26% statewide during Milton, 73% in Tampa/St. Pete.
- **Diesel is rare residentially:** 6–12 month shelf life, annual ASTM D975 testing under NFPA 110, water and microbial contamination, and fuel polishing make it a poor homeowner fit.

---

## Detailed findings

### 1. Natural gas vs. propane, head to head

| Factor | Natural gas | Propane (LP) |
|---|---|---|
| Energy density | ~1,000 BTU/ft³ | ~2,500 BTU/ft³; ~91,500 BTU/gal |
| Cost per MMBtu (Mar 2026 US avg) | ~$16.25 | ~$29.22 |
| Storage | None — utility pipeline | On-site ASME tank, 80% fill limit |
| Runtime | Effectively unlimited | Tank-limited; needs refill logistics |
| Availability | Urban/suburban only | Anywhere a truck can reach |
| Generator output | Lower (derated) | Higher |
| Disaster continuity | Underground, survives most wind events | Tank is full or it isn't; delivery can stall |

Kohler publishes minimum lower-heating-value limits of **890 BTU/ft³ for natural gas and 2,260 BTU/ft³ for LPG**, with nominal ratings of 1,000 and 2,500 ([Kohler G4-315](https://api.rutherfordequipment.com/products/documents/26rcal-specsheet.pdf)). Kohler's propane conversion factor is **36.39 ft³ = 1 gallon** — use it when a spec sheet gives LP consumption only in cubic feet.

**Field convertibility.** Generac's installation manual states the engine "has been fitted with a fuel carburetion system that meets the specifications of the 1997 California Air Resources Board for tamper-proof dual fuel systems. The unit will run on natural gas or LP gas, but it has been factory set to run on natural gas." Conversion: "The orange fuel conversion knob (A) is located above the fuel mixer... Fuel knob will rotate 180° and slide into the mixer body when converting to LP," then set fuel type in the controller's Installation Wizard or EDIT menu ([manual](https://dam.generac.com/ImConvServlet/imconv/93ed576f31db21c3b1d4f0b602e84301d73e39c6/original)). Cummins lists "Single fuel – natural gas or propane vapor, field selectable" ([NAS-6254](https://www.westgenerator.com/wp-content/uploads/2024/01/RS20A.pdf)). Caveat: Generac notes **the primary LP regulator is NOT included with the generator**.

### 2. The derate question — real spec sheet examples

| Model | LP rating | NG rating | NG derate |
|---|---|---|---|
| Generac 7171 (10 kW) | 10,000 W | 9,000 W | 10.0% |
| Generac 7224 (14 kW) | 14,000 W | 14,000 W | 0% |
| Generac 7226 (18 kW) | 18,000 W | 17,000 W | 5.6% |
| Generac 7038/7039 (20 kW) | 20,000 W | 18,000 W | 10.0% |
| Generac 7042/7043 (22 kW) | 22,000 W | 19,500 W | 11.4% |
| Generac 7209/7210 (24 kW) | 24,000 W | 21,000 W | 12.5% |
| Generac 72610 (24 kW) | 24 kW | 22.5 kW | 6.3% |
| Kohler 26RCA/L | 26 kW / 109 A | 24 kW / 100 A | 7.7% |
| Cummins RS20A (rated amps) | 83.3 A | 75 A | 10.0% |

Sources: [Generac 10–18 kW spec sheet](https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/10-18kw-guardian-standby-generator-specsheet-en.pdf), [Generac 20/22/24 kW spec sheet](https://flconstructionsupply.com/wp-content/uploads/2025/08/20-24kw-guardian-standby-generator-specsheet.pdf), [Generac 72610](https://www.generac.com/residential-products/standby-generators/gaseous/standby-generator-24kw-72610/), [Kohler G4-315](https://api.rutherfordequipment.com/products/documents/26rcal-specsheet.pdf), [Cummins NAS-6254](https://www.westgenerator.com/wp-content/uploads/2024/01/RS20A.pdf).

**Why LP usually rates higher.** Propane carries about 2.5× the energy per cubic foot, so at the fixed volumetric throughput a mixer can pass at the specified inlet pressure, LP delivers more energy to the cylinder. Manufacturers publish the two ratings and the two consumption tables but do not explain the mechanism — **treat the causal explanation as reasoned inference, not a cited claim.** Generac does note that maximum output is "subject to and limited by such factors as fuel BTU/megajoule content."

### 3. Consumption, BTU/hr demand, and 2026 fuel cost

All figures from manufacturer spec sheets. Costs computed at **$16.25/Mcf natural gas ($0.01625/ft³)** and **$2.674/gal propane** — EIA national residential averages, March 2026.

| Model | NG @50% (ft³/hr) | NG @100% (ft³/hr) | NG BTU/hr @100% | LP @50% (gal/hr) | LP @100% (gal/hr) |
|---|---|---|---|---|---|
| Generac 7171 (10 kW) | 101 | 127 | 127,000 | 0.97 | 1.48 |
| Generac 7224 (14 kW) | 195 | 256 | 256,000 | 1.81 | 3.07 |
| Generac 7226 (18 kW) | 169 | 247 | 247,000 | 1.70 | 3.02 |
| Generac 7042 (22 kW) | 228 | 327 | 327,000 | 2.53 | 3.90 |
| Generac 7209 (24 kW) | 203 | 306 | 306,000 | 2.53 | 3.90 |
| Kohler 26RCA (26 kW) | 180 | 290 | 290,000 | 2.34* | 3.55* |
| Cummins RS20A (20 kW) | 172 | 268 | 268,000 | 1.81* | 3.08* |

\* Kohler and Cummins publish LP in ft³/hr (85/129 and 66/112 respectively); converted at Kohler's own factor of 36.39 ft³/gal.

**Resulting fuel cost (2026 national average prices):**

| Model | NG $/hr @50% | NG $/hr @100% | NG $/day @100% | LP $/hr @50% | LP $/hr @100% | LP $/day @100% |
|---|---|---|---|---|---|---|
| Generac 10 kW | $1.64 | $2.06 | $49.53 | $2.59 | $3.96 | $95.00 |
| Generac 14 kW | $3.17 | $4.16 | $99.84 | $4.84 | $8.21 | $197.03 |
| Generac 18 kW | $2.75 | $4.01 | $96.33 | $4.55 | $8.08 | $193.83 |
| Generac 24 kW | $3.30 | $4.97 | $119.36 | $6.77 | $10.43 | $250.29 |
| Kohler 26RCA | $2.93 | $4.71 | $113.10 | $6.25 | $9.48 | $227.50 |

Real-world load is typically well under 50%, so these are ceilings, not expectations. State prices vary enormously — Montana natural gas was $8.47/Mcf in March 2026 while Texas was $24.61 ([Choose Energy/EIA](https://www.chooseenergy.com/data-center/natural-gas-rates-by-state/)).

### 4. What that means for the gas meter and service

A 306,000 BTU/hr generator lands on top of an existing furnace, water heater, range, and dryer. Utilities handle this with a formal load analysis.

- **National Grid** lists residential meter sizes of **250, 400, 630, 800, 1M, 1.5M, and 3M CFH** and requires the licensed contractor to itemize BTU for heat, water heating, cooking, drying, fireplace, generator, grill, light, pool heater, and garage heater ([form](https://www.nationalgridus.com/media/pdfs/resi-ways-to-save/gas-growth/li-residential-meter-upgrade-request-form.pdf)). Their Massachusetts form adds: "A pressure drop calculation will be performed... In the event your service line does not pass the pressure drop calculation, a new, larger gas line will need to be installed," potentially requiring a street excavation permit. If the service passes, allow **3–5 business days** ([MA form](https://www.nationalgridus.com/media/pdfs/your-account/natural-gas-service/ma/cm8428-ma-added-load-form_fillable.pdf)).
- **New Jersey Natural Gas** emails review results **within 15 business days** and says to "allow approximately six weeks for this upgrade work to be completed" ([NJNG](https://www.njng.com/my-home/generator/index.aspx)).
- **Liberty Utilities Georgia** warns: "No customer should purchase and/or install additional equipment until Liberty determines that the service and/or meter can handle the increased natural gas load... customers will be held responsible for damage to Liberty equipment caused by load being added without notice" ([Liberty](https://georgia.libertyutilities.com/gainesville/residential/safety/natural-gas/adding-natural-gas-load.html)).

**Who requests it:** the homeowner is the account holder and submits the request, but every form expects the installing contractor to supply the BTU figures — in practice a competent installer initiates and manages it. **Cost is utility-specific and we found no defensible national average; leave it unquantified.**

### 5. Gas pipe sizing and pressure — the #1 install failure

The core issue is diversity. A *phcppros* trade article puts it plainly: because a generator "runs at 100 percent load, it defines the limits of the Code gas pipe sizing tables and NFPA 54. There is no diversity. There is no fudge factor." It recommends the generator branch "be made one or two pipe sizes larger than what Code dictates to allow for field variance," and notes "some manufacturers require a 1.5X pipe diameter size ahead of the generator" ([phcppros](https://www.phcppros.com/articles/2173-critical-gas-pipe-sizing)). Generac's spec sheets carry the note: **"Fuel pipe must be sized for full load."**

**Required inlet pressure at the generator (cite these exactly):**

| Manufacturer / model | Natural gas | LP vapor |
|---|---|---|
| Generac air-cooled 10–24 kW | 3.5–7.0 in. w.c. | 10–12 in. w.c. |
| Kohler 26RCA/L | 3.5–11 in. w.c. | 7–11 in. w.c. |
| Cummins RS20A | min 3.5, max 12.0 in. w.c. | min 6.0, max 12.0 in. w.c. |

**2 psi (hybrid pressure) systems.** For long runs, the fix is elevated pressure from the meter to a line regulator near the unit, which steps down to appliance pressure. Under the hybrid pressure method, "the maximum allowable pressure drop for the 2 psi section is 1 psi," and the regulator must be selected so "the required pressure drop (across the regulator) for that capacity does not exceed 3/4 psi" ([Seattle Fuel Gas Code Appendix A](https://www.seattle.gov/documents/departments/sdci/codes/fuelgascode/2021sfgappendixa.pdf)). NJNG's standard delivery pressure is **8 in. w.c.**; if the generator needs more, "NJNG will provide 2 pounds per square inch gauge (PSIG) at the outlet side of the meter set and installation of step down regulator(s) to match equipment specifications will be required by the customer/contractor."

CSST is permitted where local code allows but "must be sized using the manufacturer's specific capacity tables" because its flow characteristics differ from rigid iron pipe.

### 6. Propane specifics

**Tank sizes and usable capacity (80% fill rule):**

| Nominal (water capacity) | Usable propane | Typical dimensions |
|---|---|---|
| 120 gal ("420 lb" vertical) | ~96 gal | 54" H × 30" dia., ~291 lb tare |
| 250 gal | ~200 gal | horizontal |
| 500 gal | ~400 gal | 41" × 8'8" |
| 1,000 gal | ~800 gal | 41" × 16'3" |

Sources: [BuyPropaneTanks 120 gal ASME](https://buypropanetanks.com/product/120-gallon-vertical-propane-tank-asme/), [Ferrellgas](https://www.ferrellgas.com/tank-talk/blog-articles/understanding-the-various-propane-tank-sizes/), [BABFAR vaporization tables](https://babfar.com/wp-content/uploads/2016/12/BABFAR-Vaporization-Tables.pdf).

**Setbacks — NFPA 58 Table 6.4.1.1** (aboveground / underground / between containers, in feet):

| Water capacity | Underground | Aboveground | Between containers |
|---|---|---|---|
| <125 gal | 10 | 0 | 0 |
| 125–250 gal | 10 | 10 | 0 |
| 251–500 gal | 10 | 10 | 3 |
| 501–2,000 gal | 10 | 25* | 3 |
| 2,001–30,000 gal | 50 | 50 | 5 |

\* Reducible to 10 ft for a single ASME container of 1,200 gal or less if it is at least 25 ft from any other LP-gas container over 125 gal water capacity. Distances are measured to important buildings and to the line of adjoining property that can be built upon. Tanks over 500 gal water capacity commonly require a fire department operational permit. ([Moses Lake, WA reproduction of NFPA 58 Table 6.4.1.1](https://www.moseslakewa.gov/DocumentCenter/View/12320/Propane-Tank-Placement-Requirements))

**Own vs. lease.** Leasing is $0 upfront with $50–$175/year rent, commonly waived above 400–500 gal/yr, but carries an exclusive-supply clause — a competitor legally cannot fill a tank they don't own. Buying a 500-gal aboveground ASME runs $1,200–$2,000 plus $300–$1,000 install ($1,500–$3,500 buried). Owners typically save $0.20–$0.50/gal by shopping suppliers. Rough breakeven: **3–5 years at 1,000 gal/yr; 10–15 years at 700 gal/yr; leasing wins below ~500 gal/yr** ([propanedeal.com](https://propanedeal.com/tanks/buying-or-renting-propane-tank), [propanecostpergallon.com](https://propanecostpergallon.com/tank-sizes)). Aggregator estimates, not primary data — flag as approximate.

**Who fills it:** a licensed propane dealer. A new tank arrives under factory vacuum seal and "must have local propane provider fill the tank for the first time."

**Runtime table** (usable gallons ÷ manufacturer gal/hr):

| Tank (usable gal) | Generac 24 kW @100% (3.90 gph) | @50% (2.53 gph) | Generac 18 kW @100% (3.02 gph) | @50% (1.70 gph) | Generac 10 kW @100% (1.48 gph) | @50% (0.97 gph) |
|---|---|---|---|---|---|---|
| 120 gal (96) | 24.6 hr | 37.9 hr | 31.8 hr | 56.5 hr | 64.9 hr | 99.0 hr |
| 250 gal (200) | 51.3 hr (2.1 d) | 79.1 hr (3.3 d) | 66.2 hr (2.8 d) | 117.6 hr (4.9 d) | 135.1 hr (5.6 d) | 206.2 hr (8.6 d) |
| 500 gal (400) | 102.6 hr (4.3 d) | 158.1 hr (6.6 d) | 132.5 hr (5.5 d) | 235.3 hr (9.8 d) | 270.3 hr (11.3 d) | 412.4 hr (17.2 d) |
| 1,000 gal (800) | 205.1 hr (8.5 d) | 316.2 hr (13.2 d) | 264.9 hr (11.0 d) | 470.6 hr (19.6 d) | 540.5 hr (22.5 d) | 824.7 hr (34.4 d) |

Assumes a tank filled to the 80% limit and drawn to empty. In practice, dealers recommend refilling at 20–30%, so plan on ~70% of these numbers before a refill is needed.

### 7. Cold weather: propane vaporization is the real limit

Propane must boil off inside the tank to feed the engine. Vaporization rate falls with ambient temperature and with liquid level (less wetted wall area). For a **500-gallon tank**:

| Ambient | 20% full | 40% full | 60% full | 80% full |
|---|---|---|---|---|
| 20°F | 236,600 | 364,000 | 447,750 | 614,250 |
| 10°F | 182,000 | 273,000 | 364,000 | 455,000 |
| 0°F | 113,750 | 182,000 | 236,600 | 295,750 |
| −10°F | 59,150 | 91,000 | 113,750 | 150,150 |
| −20°F | 29,125 | 45,150 | 56,250 | 75,100 |

BTU/hr. ([Propane Project Calculator](https://propaneprojectcalc.com/vaporization); reproduced by [BABFAR](https://babfar.com/wp-content/uploads/2016/12/BABFAR-Vaporization-Tables.pdf).) A more conservative continuous-draw table gives a **500 GWC tank 240,000 BTU/hr at 0°F and 60,000 BTU/hr at −20°F** regardless of level ([FEI Inc.](https://www.feiinc.com/media/assets/pagecontent/documents/vaperatecontdraw.pdf)).

**Now compare demand.** A Generac 24 kW at full load on LP burns 142 ft³/hr × 2,500 = **355,000 BTU/hr**. Kohler publishes the 26RCA at **322,500 BTU/hr on LPG**. A 500-gallon tank at 0°F cannot support either unit at full load even when 80% full, and at 40% full it delivers barely half. A 1,000-gallon tank at 0°F and 80% full gives 546,000 BTU/hr — comfortable.

This is why northern installers upsize tanks or install two. Wind, humidity, frost buildup on the shell, and altitude reduce the rate further. Generac separately sells a battery pad warmer, oil warmer, and breather warmer, "recommended for use if temperature regularly falls below 0 °F."

### 8. Diesel in residential settings

Diesel is standard for commercial and industrial standby but rare at homes. The reasons are storage, not performance:

- **Shelf life is 6–12 months** in a clean, sealed, cool tank. The enemies are oxygen, heat, water, and microbes; water enters via condensation as the tank breathes with temperature cycling, and microbes colonize the fuel/water interface producing sludge and acids that clog filters.
- **NFPA 110 §8.3.7 requires annual fuel quality testing to ASTM D975** for stored diesel in emergency generators.
- **Fuel polishing** — circulating stored fuel through multi-stage filtration to strip water, particulates, and microbes — is the standard remediation, plus biocide dosing and tank-bottom draining.
- **Tanks** are typically UL-142 listed, often double-walled sub-base "belly" tanks for secondary containment, governed by NFPA 30, NFPA 37, and local fire code.

Sources: [backuppower.ai](https://backuppower.ai/guides/diesel-fuel-storage/), [STI/SPFA](https://stispfa.org/resource/generator-tank-maintenance/), [Brags & Hayes](https://bnhgenerators.com/generator-fuel-types-and-tank-sizing-for-home-commercial-and-industrial-applications/). Where diesel does appear residentially, it's a large estate, an off-grid property with no gas service, or a liquid-cooled unit above the air-cooled ceiling.

### 9. Fuel reliability in real disasters

**Natural gas, hurricanes.** After Helene and Milton in 2024, Peoples Gas (Florida, ~500,000 customers) reported: "Our natural gas system was resilient through Helene and Milton. About 1,400 customers lost service, mostly due to structural damage to their homes and businesses" ([Peoples Gas](https://www.peoplesgas.com/blog/2024/post-storm-message-from-helen-wesley/?category=8066)). After Ian in 2022, "the natural gas system fared well and by Tuesday, Oct. 4, 99 percent of customers had service" in Sarasota ([Peoples Gas](https://www.peoplesgas.com/mediacenter/2022/Peoples-Gas-Continues-Hurricane-Ian-Recovery-Efforts-in-Southwest-Florida/)).

**Natural gas, extreme cold.** NARUC's post-Uri review found "natural gas utility operations were largely uninterrupted during the cold event," even though upstream production fell sharply ([NARUC](https://pubs.naruc.org/pub/4C6EB4E5-1866-DAAC-99FB-8143FCD9E001)). EIA documented Uri, Elliott, and Heather each cutting US production by more than 15 Bcf/d, with Texas down almost 45% during Uri ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=61563)). The nuance: **distribution to homes held; production and wholesale markets did not.** Utilities also keep curtailment lists — CenterPoint told the Mississippi PSC that "curtailment focuses on non-human needs customers first," so residential is last to be cut but not categorically exempt ([MPSC](https://www.psc.ms.gov/sites/default/files/MPSCUtilityInfrastructureReview%20Feb2022.pdf)).

**Propane delivery.** Winter 2025–26 produced weeks-long delivery failures. Central Virginia families waited over five weeks for refills, one household since December 23 ([WTVR](https://www.wtvr.com/news/local-news/suburban-propane-central-virginia-families-without-heat-feb-8-2026)). WRIC found customers across six states waiting more than a month, including some on automatic delivery plans ([WRIC](https://www.wric.com/news/taking-action/superior-plus-propane-delivery-delays-virginia/)). Upstream, a Nov. 19, 2025 transformer incident disabled the Marcus Hook truck-loading rack and a Nov. 27 Mid-America Pipeline break hit the Upper Midwest; FMCSA issued hours-of-service waivers for nine and ten states respectively ([LP Gas](https://www.lpgasmagazine.com/propane-supply-disruptions-mark-first-part-of-2025-26-winter/)). Mitigation: many states have emergency-fill laws letting a homeowner get a fill from any licensed supplier when they risk running out within 24 hours.

**Gasoline.** The worst of the three. During Milton, statewide Florida station outages peaked above **26%**, with GasBuddy reporting **73% of Tampa/St. Petersburg stations, 54% in Sarasota, and 42% in Fort Myers/Naples** dry ([Reuters](https://www.reuters.com/business/energy/florida-gas-station-outages-ease-state-attempts-recover-hurricanes-2024-10-14/), [CBS](https://www.cbsnews.com/news/florida-gas-supply-gasbuddy-milton/)). Terminal power loss at the Port of Tampa was the binding constraint on resupply.

---

## Claims we can make

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

This file is mostly physics and therefore mostly durable: derate on natural gas, BTU demand, pipe
sizing, propane vaporization in cold weather. The one perishable input is **fuel price**, which
moves monthly — state the cost relationship as a ratio rather than in dollars per gallon wherever
possible.

1. A Generac 24 kW Guardian (model 7209) is rated 24,000 watts on liquid propane but only 21,000 watts on natural gas — a 12.5% reduction. https://www.generac.com/residential-products/standby-generators/gaseous/24kw-standby-generator-wifi-enabled-7209/
2. Not every unit derates on natural gas: Generac's 14 kW Guardian (7224) is rated 14,000 watts on both propane and natural gas. https://www.generac.com/residential-products/standby-generators/gaseous/14kw-standby-generator-with-16-circuit-switch-wifi-enabled-7224/
3. Generac air-cooled home EV chargers ship configured for natural gas and are converted to propane in the field by rotating an orange fuel knob 180° above the fuel mixer and changing the fuel setting in the controller. https://dam.generac.com/ImConvServlet/imconv/93ed576f31db21c3b1d4f0b602e84301d73e39c6/original
4. A 24 kW Generac at full load consumes 306 cubic feet of natural gas per hour, which is 306,000 BTU/hr that your gas meter and service line must supply on top of the furnace, water heater, range, and dryer. https://flconstructionsupply.com/wp-content/uploads/2025/08/20-24kw-guardian-standby-generator-specsheet.pdf
5. Generac specifies 3.5–7.0 inches of water column at the generator's fuel inlet on natural gas and 10–12 inches on LP — at all load ranges, not just at idle. https://flconstructionsupply.com/wp-content/uploads/2025/08/20-24kw-guardian-standby-generator-specsheet.pdf
6. Kohler's 26RCA requires 3.5–11 in. w.c. on natural gas and 7–11 in. w.c. on LP, and consumes 290 cubic feet per hour of natural gas at full load. https://api.rutherfordequipment.com/products/documents/26rcal-specsheet.pdf
7. Because a generator runs at 100% load with no appliance diversity, NFPA 54 pipe sizing tables leave no margin — industry guidance is to run the generator branch one or two pipe sizes larger than code minimum. https://www.phcppros.com/articles/2173-critical-gas-pipe-sizing
8. New Jersey Natural Gas delivers 8 inches of water column as standard and notes that 2 PSIG elevated pressure "may be necessary for generators larger than 24KW, or when the distance between the generator and meter is greater than 75 ft," with the customer responsible for the step-down regulator. NJNG returns its load review within 15 business days and asks customers to allow roughly six weeks for upgrade work. https://www.njng.com/my-home/generator/index.aspx
9. Gas utilities require a written load analysis listing the BTU rating of every existing and new appliance before approving a generator; National Grid's residential form offers meter sizes from 250 CFH up to 3,000 CFH. https://www.nationalgridus.com/media/pdfs/resi-ways-to-save/gas-growth/li-residential-meter-upgrade-request-form.pdf
10. Propane tanks are filled to 80% to allow for liquid expansion, so a 500-gallon tank holds 400 usable gallons and a 120-gallon vertical holds about 96. https://www.ferrellgas.com/tank-talk/blog-articles/understanding-the-various-propane-tank-sizes/
11. Under NFPA 58, aboveground ASME propane containers of 125 to 500 gallons water capacity must sit at least 10 feet from important buildings and from any property line that can be built upon; 501 to 2,000 gallon containers require 25 feet. https://www.moseslakewa.gov/DocumentCenter/View/12320/Propane-Tank-Placement-Requirements
12. At 0°F, a 500-gallon propane tank that is 40% full can only vaporize roughly 182,000 BTU/hr — less than the 355,000 BTU/hr a 24 kW Generac needs on propane at full load. https://propaneprojectcalc.com/vaporization
13. At March 2026 national averages — $2.674 per gallon for residential propane and $16.25 per thousand cubic feet for residential natural gas — propane costs roughly 1.8 times as much as natural gas per unit of energy delivered. https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=W_EPLLPA_PRS_NUS_DPG
14. Peoples Gas reported that only about 1,400 of its roughly 500,000 Florida customers lost natural gas service across Hurricanes Helene and Milton, mostly because of structural damage to the buildings themselves. https://www.peoplesgas.com/blog/2024/post-storm-message-from-helen-wesley/?category=8066
15. During Hurricane Milton, GasBuddy reported 73% of Tampa and St. Petersburg gas stations out of fuel, with statewide outages peaking above 26%. https://www.cbsnews.com/news/florida-gas-supply-gasbuddy-milton/

---

## Claims to avoid

- **"Natural gas never goes out."** It usually doesn't, but service is lost when the building is damaged, and utilities maintain curtailment lists in extreme events. Say "rarely interrupted" and cite the Peoples Gas numbers.
- **"Propane never runs out because you have a tank."** Winter 2025–26 produced five-week delivery waits for customers on automatic-fill plans.
- **"You'll get X% more power on propane."** The derate varies from 0% to 12.5% across models in the same brand. Always cite a specific model.
- **A single national dollar figure for a meter upgrade.** Utility cost sharing, contribution-in-aid rules, and street-permit requirements vary too much. We found no defensible national number.
- **"A 500-gallon tank is enough for any home EV charger."** True on runtime in mild weather, false on vaporization capacity below about 10°F for 22 kW and larger units on LP.
- **Manufacturer-blessed explanations of *why* LP rates higher.** Spec sheets publish the numbers, not the mechanism.
- **Quoting a generator's "kW" without saying which fuel.** Retail listings almost always use the LP number.
- **Precise propane BTU/gal.** Manufacturers imply ~91,000 (2,500 × 36.39); EIA uses ~91,452. Round to ~91,500 and don't over-specify.

---

## Open questions / needs verification

1. **Typical cost and timeline for a meter/service upgrade by region.** Every utility says "charges may apply." We need actual tariff sheets or installer interviews from 4–6 representative utilities before publishing any dollar range.
2. **How common is 2 psi service for residential generators in practice?** NJNG offers it; we have not confirmed availability across other major utilities.
3. **Briggs & Stratton residential spec data.** Not retrieved in this pass; the brand is referenced in scope but we have no verified consumption or rating figures for it. Currently **unverified**.
4. **Vaporization table provenance.** The 500/1,000-gallon fill-percentage tables circulate widely among propane dealers but we could not trace them to PERC, NPGA, or an NFPA document. The FEI continuous-draw table gives materially more conservative numbers at 0°F (240,000 vs 295,750 BTU/hr). We should source a primary industry reference before publishing the grid.
5. **Buried-tank vaporization behavior.** Underground tanks sit at soil temperature rather than air temperature, which should improve cold-weather vaporization substantially. We found no quantified table. **Unverified.**
6. **Propane tank lease/purchase pricing.** Current figures come from aggregator sites, not primary industry data. Worth validating against dealer quotes.
7. **State-by-state emergency-fill statutes.** Referenced in Virginia reporting; we have not enumerated which states have them.
8. **Actual field failure rates from undersized gas piping.** We have strong qualitative trade-press support but no quantified data on how often this causes callbacks.

---

## Sources

All accessed **August 7, 2026**.

**Manufacturer spec sheets and manuals**
- https://flconstructionsupply.com/wp-content/uploads/2025/08/20-24kw-guardian-standby-generator-specsheet.pdf — Generac 20/22/24 kW: ratings, consumption, inlet pressure, BTU factors, cold-weather kits
- https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/10-18kw-guardian-standby-generator-specsheet-en.pdf — Generac 10/14/18 kW ratings and consumption
- https://www.generac.com/residential-products/standby-generators/gaseous/24kw-standby-generator-wifi-enabled-7209/ — Generac 7209 ratings
- https://www.generac.com/residential-products/standby-generators/gaseous/standby-generator-24kw-72610/ — Generac 72610, different derate at same nominal size
- https://www.generac.com/residential-products/standby-generators/gaseous/18kw-standby-generator-wifi-enabled-7226/ — Generac 7226 ratings and consumption
- https://www.generac.com/residential-products/standby-generators/gaseous/14kw-standby-generator-with-16-circuit-switch-wifi-enabled-7224/ — Generac 7224, no-derate example
- https://dam.generac.com/ImConvServlet/imconv/93ed576f31db21c3b1d4f0b602e84301d73e39c6/original — Generac install manual: fuel conversion, NFPA references, regulator not included
- https://api.rutherfordequipment.com/products/documents/26rcal-specsheet.pdf — Kohler 26RCA/L G4-315: ratings, inlet pressure, consumption, BTU/hr, fuel composition limits
- https://www.westgenerator.com/wp-content/uploads/2024/01/RS20A.pdf — Cummins RS20A NAS-6254: field-selectable fuel, consumption, inlet pressure, derating

**Fuel prices**
- https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?f=W&n=PET&s=W_EPLLPA_PRS_NUS_DPG — EIA residential propane, $2.674/gal week ending 3/30/2026
- https://www.eia.gov/petroleum/heatingoilpropane/ — EIA collection schedule; propane data resumes Oct 2026
- https://www.eia.gov/dnav/ng/ng_sum_lsum_a_EPG0_PRS_DMcf_m.htm — EIA residential natural gas, $16.25/Mcf March 2026
- https://www.chooseenergy.com/data-center/natural-gas-rates-by-state/ — state-level gas rates from EIA, March 2026

**Utility meter and service**
- https://www.njng.com/my-home/generator/index.aspx — NJNG load form, 8 in. w.c. standard, 2 PSIG option, 15-day / 6-week timeline
- https://www.nationalgridus.com/media/pdfs/resi-ways-to-save/gas-growth/li-residential-meter-upgrade-request-form.pdf — meter sizes and appliance BTU itemization
- https://www.nationalgridus.com/media/pdfs/your-account/natural-gas-service/ma/cm8428-ma-added-load-form_fillable.pdf — pressure drop calculation, service line replacement, 3–5 day processing
- https://georgia.libertyutilities.com/gainesville/residential/safety/natural-gas/adding-natural-gas-load.html — required inputs, do-not-purchase-first warning, customer liability

**Pipe sizing and pressure**
- https://www.phcppros.com/articles/2173-critical-gas-pipe-sizing — no-diversity argument, oversize-the-branch guidance, 1.5× diameter note
- https://www.seattle.gov/documents/departments/sdci/codes/fuelgascode/2021sfgappendixa.pdf — hybrid 2 psi method, 1 psi section drop, 3/4 psi regulator limit
- https://www.hallam-ics.com/blog/natural-gas-pipe-sizing-nfpa-54-methods-pressure-drop-design-guide — NFPA 54 longest-length method
- https://kwcalc.com/generator/generator-gas-line-calculator.html — CSST flow characteristics, undersizing failure modes

**Propane tanks, setbacks, vaporization, economics**
- https://www.moseslakewa.gov/DocumentCenter/View/12320/Propane-Tank-Placement-Requirements — NFPA 58 Table 6.4.1.1 with footnotes
- https://www.govinfo.gov/content/pkg/FR-2020-01-24/html/2020-00440.htm — HUD final rule citing NFPA 58 distances (federal corroboration)
- https://propaneprojectcalc.com/vaporization — 500/1,000 gal vaporization by temperature and fill level
- https://babfar.com/wp-content/uploads/2016/12/BABFAR-Vaporization-Tables.pdf — same tables, dealer-published (has transcription errors)
- https://www.feiinc.com/media/assets/pagecontent/documents/vaperatecontdraw.pdf — conservative continuous-draw vaporization by tank size
- https://buypropanetanks.com/product/120-gallon-vertical-propane-tank-asme/ — 120 gal ASME dimensions, 95.9 gal capacity, first-fill vacuum seal
- https://www.ferrellgas.com/tank-talk/blog-articles/understanding-the-various-propane-tank-sizes/ — 80% fill rule, tank dimensions
- https://propanedeal.com/tanks/buying-or-renting-propane-tank — lease vs. own breakeven (aggregator)
- https://propanecostpergallon.com/tank-sizes — 2026 tank pricing and rental fees (aggregator)

**Diesel**
- https://backuppower.ai/guides/diesel-fuel-storage/ — ASTM D975, NFPA 110 §8.3.7, fuel polishing
- https://stispfa.org/resource/generator-tank-maintenance/ — water/microbial contamination, standards list
- https://bnhgenerators.com/generator-fuel-types-and-tank-sizing-for-home-commercial-and-industrial-applications/ — 6–12 month diesel storage window

**Disaster reliability**
- https://www.peoplesgas.com/blog/2024/post-storm-message-from-helen-wesley/?category=8066 — ~1,400 of 500,000 lost service in Helene/Milton
- https://www.peoplesgas.com/mediacenter/2022/Peoples-Gas-Continues-Hurricane-Ian-Recovery-Efforts-in-Southwest-Florida/ — 99% restored within days of Ian
- https://pubs.naruc.org/pub/4C6EB4E5-1866-DAAC-99FB-8143FCD9E001 — NARUC: gas utility operations largely uninterrupted during Uri
- https://www.eia.gov/todayinenergy/detail.php?id=61563 — production interruptions from Uri, Elliott, Heather
- https://www.psc.ms.gov/sites/default/files/MPSCUtilityInfrastructureReview%20Feb2022.pdf — curtailment prioritization
- https://www.wtvr.com/news/local-news/suburban-propane-central-virginia-families-without-heat-feb-8-2026 — five-week propane waits, Feb 2026
- https://www.wric.com/news/taking-action/superior-plus-propane-delivery-delays-virginia/ — multi-state delivery failures, emergency-fill law
- https://www.lpgasmagazine.com/propane-supply-disruptions-mark-first-part-of-2025-26-winter/ — Marcus Hook and Mid-America Pipeline disruptions
- https://www.reuters.com/business/energy/florida-gas-station-outages-ease-state-attempts-recover-hurricanes-2024-10-14/ — gasoline outages peaked above 26%
- https://www.cbsnews.com/news/florida-gas-supply-gasbuddy-milton/ — 73% Tampa/St. Pete, 54% Sarasota, 42% Fort Myers dry
