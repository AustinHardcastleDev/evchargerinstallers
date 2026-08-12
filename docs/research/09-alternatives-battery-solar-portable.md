# Alternatives to a Standby Generator: Batteries, Solar, and Portables

**Internal research document — not published content.** This is source material for FAQ blocks, buyer guides, and comparison pages on EVChargerInstallerList.com. Nothing here should be copied verbatim to the site. Research conducted August 7, 2026.

> **Incentives are deliberately out of scope.** Tax credits, rebates, state storage programs, and utility VPP payments were researched and then removed from this library because they change on legislative and funding cycles and cannot be kept accurate. The site makes no incentive claims of any kind. See `README.md`.

---

## Executive summary

- **The core physical difference in one sentence:** a battery holds a fixed number of kilowatt-hours; a generator on a gas line manufactures kilowatt-hours for as long as fuel flows.
- **Real capacity numbers:** Tesla Powerwall 3 is 13.5 kWh at 11.5 kW continuous; Enphase IQ Battery 5P is 5.0 kWh at 3.84 kVA; FranklinWH aPower 2 is 15 kWh at 10 kW. All three can carry motor loads (185 LRA, 48 A LRA, and 15 kW peak respectively).
- **Lawrence Berkeley National Laboratory found most paired residential systems are a single 10 or 13.5 kWh battery at 5 kW rated output — a *duration of 2 to 2.7 hours* at full rated power** ([LBNL Tracking the Sun 2024](https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_report.pdf)). That is the single most useful sizing reality check we have.
- **Installed battery cost, 2026:** roughly $15,650 for 13.5 kWh per EnergySage marketplace data, with wide state variation from about $7,600 (Alabama) to $18,400 (Wyoming) ([EnergySage](https://www.energysage.com/energy-storage/how-much-do-batteries-cost/)). Whole-home backup sizing runs about $34,000.
- **Generators are not cheap either.** Generac's own installed-cost guidance is $8,000–$16,000; Zonda's 2025 Cost vs. Value Report puts a national "Backup Power Generator" job at $13,534 (see `02-costs-and-pricing.md`). Upfront cost is not a decisive differentiator between the two categories anymore.
- **Portable generators kill about 100 Americans a year via carbon monoxide** and are the single consumer product under CPSC jurisdiction associated with the most CO deaths ([CPSC](https://www.cpsc.gov/Newsroom/News-Releases/2025/As-Winter-Storms-Threaten-Millions-in-the-US-CPSC-Issues-Safety-Tips-to-Help-Families-Prevent-Carbon-Monoxide-Poisoning-and-Fires)). This is the most important consumer-safety point on the entire site.
- **CO-shutoff standards work, and one is meaningfully better than the other.** CPSC/NIST modeling of 511 real fatalities found UL 2201-compliant generators would avert nearly 100% of deaths; PGMA G300-2018-compliant units about 87% ([CPSC, 2022](https://www.cpsc.gov/Newsroom/News-Releases/2022/New-CPSC-Report-Finds-Industry-Voluntary-Standards-Can-Reduce-Risk-of-Carbon-Monoxide-Death-and-Injury-from-Portable-Generators-Yet-Compliance-with-Standards-Is-Minimal-Supports-Mandatory-Rulemaking-Process)). Both are industry standards rather than federal mandates, and CPSC found market conformance minimal — but confirm the regulatory status before writing it, since a mandatory rule has been in process.
- **Backfeeding through a dryer outlet violates NEC 702.5**, which requires transfer equipment that prevents inadvertent interconnection with the utility supply. A code-compliant hookup is cheap: $400–$900 installed for an interlock kit.
- **Batteries recharge from sunlight during a multi-day outage; generators need refueling or a gas line.** This is the one durability argument that genuinely favors storage, and it only holds if there is solar on the roof.
- **A generator generally cannot recharge a battery.** Tesla's own compatibility table states plainly: charging Powerwall from an upstream generator — No; automatic generator control — No ([Tesla](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Compatibility/en-us/Powerwall-Compatibility-Table-EN.pdf)). FranklinWH's aGate is the notable exception with a dedicated generator module.
- **Honest guidance we should publish:** if a household's outages average a few hours a year, a $13,000 EV charger is a poor purchase. EIA data shows non-major-event interruptions average about two hours per customer per year ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=66744)).

---

## Detailed findings

### 1. Home battery systems: what is actually on the market in 2026

Three products dominate residential quotes, and their published specifications differ in ways that matter for backup.

**Tesla Powerwall 3** is a battery with an integrated solar inverter. Nominal energy is 13.5 kWh AC. Nominal AC output is configurable at 5.8, 7.6, 10, or 11.5 kW, with a maximum continuous off-grid discharge of 15.4 kW when the on-grid rating is set to 11.5 kW. It starts loads up to 185 LRA, accepts up to 20 kW DC of solar, and carries a 10-year warranty. Operating range is −4°F to 122°F ([Tesla Powerwall 3 datasheet](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf)). Up to four units plus three expansion units per system.

**Enphase IQ Battery 5P** is the modular option: 5.0 kWh usable, 3.84 kVA continuous, 7.68 kVA peak for three seconds and 6.14 kVA for ten, LFP chemistry, six embedded microinverters, 96% DC round-trip efficiency, 48 A LRA motor start, and a 15-year / 6,000-cycle warranty ([Enphase datasheet](https://enphase.com/download/iq-battery-5p-data-sheet)). One unit alone will not run a central air conditioner; the design intent is to stack them.

**FranklinWH aPower 2** is the highest single-unit capacity of the three: 15 kWh AC, 10 kW / 11.5 kVA continuous, 15 kW peak for ten seconds, 8 kW charge power, LFP, scalable to 15 units (225 kWh) per aGate controller, with a 15-year or 60 MWh throughput warranty. Notably it is rated at 30 dBA typical and 45 dBA maximum ([FranklinWH datasheet](https://www.franklinwh.com/document/download/apower-2-datasheet)).

**Whole-home versus partial-home.** Marketing language is loose here and we should not repeat it uncritically. A single 10–11.5 kW battery can *power* most of a typical home's simultaneous load, which is what "home EV backup" claims usually mean. It cannot *sustain* home EV consumption for long. EnergySage's own framing is blunt: backing up a few critical loads is cheaper; genuine home EV backup runs about $34,000 and off-grid capability over $115,000 ([EnergySage](https://www.energysage.com/energy-storage/how-much-do-batteries-cost/)). Most installs still route selected circuits to a critical-load subpanel or use smart-panel load management.

**Installed cost.** EnergySage marketplace data for the first half of 2026 puts a typical 13.5 kWh install at $15,647, with brand-level averages of $967/kWh (Tesla), $1,232/kWh (FranklinWH), and $1,429/kWh (Enphase). State medians range from $7,601 in Alabama to $18,414 in Wyoming ([EnergySage](https://www.energysage.com/energy-storage/how-much-do-batteries-cost/)). Berkeley Lab's regression on 2023 paired PV+storage data implied a price premium of roughly $750–$1,000 per kWh of storage, and noted battery costs have been flat or rising in real terms even as total paired-system prices fell ([LBNL](https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_report.pdf)). Label the LBNL figure as 2023-vintage data when using it.

### 2. The duration math, worked honestly

The average U.S. residential utility customer bought 10,791 kWh in 2022, about 899 kWh per month or roughly 30 kWh per day ([EIA FAQ](https://www.eia.gov/tools/faqs/faq.php?id=97&t=1) — 2022 data, EIA's most recent figure on that page). More recent utility-sales analysis puts 2024 nearer 865 kWh/month. Either way, call it 28–30 kWh/day for an average home under normal use.

**A single 13.5 kWh battery against that load lasts under half a day.** In practice nobody runs normally during an outage, so the honest framing is three tiers:

- *Survival mode* (refrigerator, a few lights, internet, phone charging, gas furnace blower): roughly 5–8 kWh/day, so a 13.5 kWh battery gives about **1.5 to 2.5 days**.
- *Comfortable mode* (add well pump, some cooking, a TV, laundry): roughly 12–18 kWh/day, so about **18 to 27 hours**.
- *Business as usual with central AC or electric heat*: a 3-ton AC compressor plus air handler pulls on the order of 3–4 kW while running, and a 13.5 kWh battery is **empty in well under a day**, often in a single hot afternoon.

Berkeley Lab's structural framing is the cleanest way to make the point: the majority of paired residential systems are a single 10 or 13.5 kWh battery rated at 5 kW continuous, giving a **duration of 2 to 2.7 hours at full rated power** ([LBNL](https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_report.pdf)). That is not the same as backup duration at real household loads, and we must not conflate the two — but it correctly conveys that these are hours-scale, not days-scale, energy stores when pushed hard.

**The generator side of the math has no such ceiling.** A pipeline-fed standby unit runs continuously while the gas flows. For scale, Kohler publishes 290 cubic feet per hour of natural gas at full load for the 26RCA (see `04-fuel-systems.md`) — a real consumption rate, but drawn from a utility main that does not deplete. Propane and diesel reintroduce a finite tank, which is a genuine constraint covered in the fuel-systems research and which the winter 2025–26 propane delivery failures made concrete.

**The counterweight is solar.** A battery paired with a 7–8 kW rooftop array recharges every clear day. On a good day that array can produce 25–40 kWh, which fully refills a 13.5 kWh battery and runs daytime loads besides. In a week-long outage with sun, solar-plus-storage can outlast a propane tank. In a week-long outage in December in Michigan, under snow-covered panels, it cannot. Both facts belong in the same paragraph whenever we publish this.

### 3. Head-to-head comparison

| Dimension | Home battery (single unit, e.g., 13.5 kWh) | Standby generator (air-cooled, NG/LP) |
|---|---|---|
| Upfront installed cost | ~$15,650 for 13.5 kWh; ~$34,000 for genuine home EV sizing ([EnergySage](https://www.energysage.com/energy-storage/how-much-do-batteries-cost/)) | $8,000–$16,000 per Generac's own guidance; $13,534 national job cost per Zonda 2025 (see `02-costs-and-pricing.md`) |
| Backup duration | Hours to ~2 days depending on load; 2–2.7 hours at full rated power ([LBNL](https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_report.pdf)) | Indefinite on a natural gas line; tank-limited on propane |
| Recharge / refuel during outage | Recharges from solar daily if PV is present; otherwise dead until grid returns | Requires continued fuel supply; no self-replenishment |
| Ongoing fuel cost | None (charged from solar or off-peak grid) | Real and metered — gas burn during every outage plus weekly exercise cycles |
| Maintenance | Essentially none; no moving parts, passive cooling on several models | Oil, filters, plugs, battery, annual service; see `06-maintenance-warranty-lifespan.md` |
| Noise | 30 dBA typical / 45 dBA max (FranklinWH aPower 2 spec) | Engine noise during every run and every weekly exercise — a recurring HOA and neighbor issue |
| Permitting complexity | Electrical permit plus utility interconnection review; no gas or mechanical permit | Electrical *and* gas permit, setback compliance, sometimes mechanical and zoning review |
| Siting | Outdoor or garage/indoor depending on listing and local code; wall or pedestal mount | Outdoors only, with manufacturer and code-mandated clearances from windows, doors, and vents |
| Cold weather | Powerwall 3 operating range −4°F to 122°F; Enphase charging range −4°F to 122°F. Charge acceptance and usable capacity degrade toward the extremes | Starts and runs in deep cold with a block heater; propane vapor pressure drops sharply below freezing, which is a tank-sizing problem (see `04-fuel-systems.md`) |
| Lifespan / warranty | 10 years (Powerwall 3); 15 years / 6,000 cycles (Enphase 5P); 15 years or 60 MWh (aPower 2) | Typically 5–10 year warranties; service life measured in run-hours |
Two honest asymmetries a writer should keep in mind. First, a battery can earn its keep in normal years through time-of-use arbitrage; a generator only ever costs money until the power fails. Second, a generator's value is entirely uncorrelated with sunshine and entirely correlated with fuel logistics — which is why the two technologies complement rather than substitute for each other in the highest-resilience homes.

### 4. Solar + storage versus generator, and hybrid setups

**Solar alone is not backup.** A grid-tied array without storage shuts down during an outage under anti-islanding rules. Homeowners are routinely surprised by this, and it is a good FAQ entry.

**Solar + storage** is the configuration that competes seriously with a generator on duration. The battery covers the night and the generator's role of instant seamless transfer; the array covers the days. Cost is the barrier: a new solar-plus-battery system commonly runs $30,000–$60,000, well above a EV charger.

**Hybrid — solar + battery + generator** is the belt-and-suspenders answer for medically dependent households, rural well-water homes, and anyone facing multi-day winter outages. The battery handles the first night silently and instantaneously; the generator handles the ugly second and third day and any stretch without sun.

**Can a generator charge a battery?** Usually not, and this is a real design constraint we should state clearly rather than hand-wave.

- **Tesla is explicit.** The Powerwall compatibility table lists "Charging of Powerwall from upstream generator: **No**" and "Automatic generator control: **No**." Powerwall 3 *can* be installed with a downstream generator ([Tesla](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Compatibility/en-us/Powerwall-Compatibility-Table-EN.pdf)). In practice that means an external automatic or manual transfer switch, with the generator taking over only once the Powerwall is depleted or overloaded ([Tesla application note, Powerwall and Third Party Backup](https://truesouthsolar.net/wp-content/uploads/2025/01/tesla-generator-info.pdf)).
- **FranklinWH is the counterexample.** The aGate supports an optional Generator Module that provides automatic generator start, battery charging from the generator, and shutdown once a target state of charge is reached ([FranklinWH](https://www.franklinwh.com/blog/franklinwh-apower-2-the-new-standard-for-home-energy-storage)).

How common are hybrids? We do not have a defensible national market-share figure — flagged in open questions below.

### 5. Portable generator + manual transfer switch or interlock: the budget path

This is the most common real-world alternative and deserves a fair, specific treatment.

**Realistic total cost.** A code-compliant hookup — interlock kit or manual transfer switch plus an exterior power inlet box — runs roughly **$1,400–$3,700 installed**, with the generator purchased separately ([AJ Long Electric, 2026](https://ajlongelectric.com/blog/generator-cost-northern-virginia-2026)). The cheapest compliant path is a generator interlock kit at **$400–$900 installed** ([HomeGuide](https://homeguide.com/costs/generator-transfer-switch-installation-cost), [UseCalcPro 2026](https://usecalcpro.com/blog/transfer-switch-installation-cost-calculator-2026)); a 6–10 circuit manual transfer switch runs $1,000–$2,200. Add an electrical permit at roughly $100–$350. With a mid-size portable at $800–$1,500, a total of **$2,000–$4,000** is realistic — a quarter to a third of a standby install.

**What it can run.** Sized correctly (7,500–12,000 running watts), a portable through an interlock can carry a furnace blower, refrigerator, well pump, lights, outlets, and a 240 V load such as a well pump or range. What it usually cannot do is start and hold central air conditioning while carrying everything else, and it cannot do any of it automatically.

**The labor during an outage is the part buyers underestimate,** and it is the honest argument for a standby unit. Every outage requires going outside in the weather, fueling, choke-starting, plugging in a heavy L14-30 or L14-50 cord, killing the main breaker, engaging the interlock, and flipping the generator breaker. Then refueling every 8–12 hours around the clock, including at 3 a.m., plus periodic oil checks, plus shutting down and cooling before refueling. Multiply that by a five-day ice storm and the standby premium starts to look rational.

**Portable power stations** are the third path. The EcoFlow DELTA Pro 3 is 4,096 Wh with 4,000 W continuous (6,000 W with X-Boost), expandable to 48 kWh, at roughly $2,399–$3,699 ([EcoFlow](https://us.ecoflow.com/products/delta-pro-3-portable-power-station?variant=41385721004105)). Note the real limitation: as a standalone unit it does 120 V or 240 V, **not both simultaneously**. The Anker SOLIX F3800 is 3,840 Wh with 6,000 W continuous and native simultaneous 120/240 V. Both integrate with a manual transfer switch. They produce zero emissions and zero noise, which makes them the correct recommendation for apartments, condos, and anyone who would otherwise run a gasoline generator in or near a living space.

### 6. Carbon monoxide: the safety case, stated forcefully

This is where the site can do genuine public good, and every number below is from CPSC or NIST.

**About 100 consumers die every year in the United States from CO poisoning caused by portable generators** ([CPSC, February 2025](https://www.cpsc.gov/Newsroom/News-Releases/2025/As-Winter-Storms-Threaten-Millions-in-the-US-CPSC-Issues-Safety-Tips-to-Help-Families-Prevent-Carbon-Monoxide-Poisoning-and-Fires)). Generators are the single product under CPSC jurisdiction associated with the most CO deaths. Since 2010, portable generators alone have been associated with an estimated 796 non-fire CO poisoning deaths — 40% of all non-fire CO deaths tied to consumer products in CPSC's jurisdiction ([CPSC 2020 Annual Estimates](https://www.cpsc.gov/s3fs-public/Non-Fire-Carbon-Monoxide-Deaths-Associated-with-the-Use-of-Consumer-Products-2020-Annual-Estimates.pdf)).

CPSC's incident-level report covering 2012–2022 counted **872 engine-driven-tool CO fatalities from 699 incidents, of which 749 deaths (86%) involved generators alone** ([CPSC, Generators and OEDT CO Poisoning Fatalities Report](https://www.cpsc.gov/s3fs-public/Generators-and-OEDT-CO-Poisoning-Fatalities-Report-2023-final.pdf)). Two details from that report are worth publishing because they break common assumptions:

- **"Outdoors" is not automatically safe.** In 5% of generator-related fatalities the generator *was* outdoors — placed near a window, an air conditioner, or a soffit vent that let CO infiltrate the house.
- **The median home in a fatal incident was about 1,290 square feet**, smaller than the 1,473 sq ft national median housing unit. Smaller air volume means faster lethal accumulation.

**The safety standards and their measured effectiveness.** Two ANSI-approved voluntary standards adopted CO hazard-mitigation requirements in 2018: ANSI/PGMA G300-2018 and UL 2201. Both require the generator to shut off at defined CO concentrations near the unit; UL 2201 *additionally* requires a reduced CO emission rate. CPSC staff ran more than 140,000 NIST simulations against 511 real fatalities and found that **UL 2201-compliant generators would avert nearly 100% of those deaths, while PGMA G300-compliant generators would avert about 87%** ([CPSC, 2022](https://www.cpsc.gov/Newsroom/News-Releases/2022/New-CPSC-Report-Finds-Industry-Voluntary-Standards-Can-Reduce-Risk-of-Carbon-Monoxide-Death-and-Injury-from-Portable-Generators-Yet-Compliance-with-Standards-Is-Minimal-Supports-Mandatory-Rulemaking-Process); methodology in [NIST TN 2202r1](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=935544)).

Three caveats we should carry with those numbers, because they are what makes the advice honest rather than promotional:

1. **Both standards are voluntary.** CPSC's own market review found conformance with UL 2201 "appears to be minimal," and G300 conformance, while greater, is "still lacking for most models or units."
2. **Shutoff is not a force field.** CPSC documented a 2021 incident in which three people died using a generator advertised as certified to ANSI/PGMA G300-2018. It was outside the home, under eaves with soffit vents into the attic, exhaust pointed at a closed door. It never shut off and ran until the tank was dry.
3. **The correct advice is unchanged by the technology:** outdoors only, at least 20 feet from the house, exhaust pointed away, never in a garage even with the door open, and working CO alarms with battery backup on every level.

A EV charger, by contrast, is a permanently installed outdoor appliance sited under code-mandated clearances from openings and never handled by the homeowner during an outage. That is a legitimate safety advantage and we should say so plainly.

### 7. Backfeeding: why the dryer-outlet trick is both lethal and illegal

A "suicide cord" is a cord with male plugs on both ends, run from a portable generator into a 240 V dryer or range receptacle. It energizes the panel backward. Three distinct hazards follow:

1. **Utility line workers.** Power flows out past the meter onto the distribution system, where a crew is working on conductors they have every reason to believe are dead. The step-up through the distribution transformer restores line voltage.
2. **Anyone touching the cord.** The exposed prongs on the far end are live. It is energized on a plug designed to be handled.
3. **The panel itself.** If the main breaker is not opened — or gets closed while the generator is still connected — utility power returns onto an out-of-phase source. That is a destructive fault inside the service panel.

**The code.** NEC Article 702.5 requires transfer equipment that prevents inadvertent interconnection of the normal utility supply and the standby source for optional standby systems. NEC 406.6(B) separately prohibits installing a receptacle that would require inserting an energized attachment plug as its supply ([code summary](https://sparkshift.app/code/nec-702); [How to Look at a House](https://www.howtolookatahouse.com/Blog/Entries/2020/5/can-i-backfeed-generator-to-house-through-dryer-outlet-plug.html)). Consumer Reports quotes a safety expert calling suicide cords "rogue products" that are not listed by any nationally recognized testing laboratory and never will be ([Consumer Reports](https://www.consumerreports.org/home-garden/generators/why-suicide-extension-cords-are-so-dangerous-a1189731437/)).

**Insurance is the practical argument that lands with homeowners.** A fire traced to unpermitted, non-code-compliant wiring is close to a textbook claim denial. And the compliant alternative costs $400–$900.

Be careful with the word "illegal": the NEC is adopted at the state or local level, so the accurate phrasing is that backfeeding violates the National Electrical Code as adopted in essentially every U.S. jurisdiction, and creates civil and potentially criminal liability if someone is injured. We should not assert a specific criminal statute.

### 8. When is each the right answer — including when a generator is the wrong purchase

This is the section that earns trust. A directory that only ever says "buy a generator" is a lead-gen page; one that tells a reader when not to buy is a resource.

**A EV charger is the right answer when:**
- The home has a natural gas service line. This is the single strongest indicator — unlimited runtime, no fuel logistics, no tank.
- Outages in the area are measured in days, not hours: hurricane coasts, ice-storm belts, long rural distribution feeders.
- The home has electric heat, well water, a sump pump, or a septic pump — loads that are both essential and energy-hungry, and that a single battery cannot sustain for days.
- Someone in the household is medically dependent on powered equipment.
- The homeowner is older, travels, or otherwise cannot reliably wrestle a portable into place at 2 a.m. Automatic transfer is the product.
- Winter outages dominate, and rooftop solar would be snow-covered or short-daylight-limited exactly when it is needed.

**A home battery is the right answer when:**
- The home already has, or is getting, solar. Storage without solar is an expensive uninterruptible power supply.
- The utility has time-of-use rates or poor net-metering compensation, so the battery earns money in the 8,758 hours a year the grid is up.
- Outages are frequent but short — the profile where a battery's instantaneous, silent, automatic transfer beats a generator's 10-second start and hours of engine noise.
- Local ordinances, HOA rules, lot setbacks, or a condo/townhouse configuration make a permanently installed engine impractical.
- Fuel storage is undesirable or prohibited.

**A portable plus interlock is the right answer when:**
- The budget is $2,000–$4,000 rather than $13,000.
- Outages are occasional and someone healthy is reliably home to run the thing.
- The goal is furnace, fridge, well pump, and lights — not central air and business as usual.
- The buyer is honest with themselves about refueling at 3 a.m. in an ice storm.

**Cases where we should tell the reader a generator is the wrong purchase:**
1. **The home rarely loses power.** If local outages track the national non-major-event average of roughly two hours per year ([EIA](https://www.eia.gov/todayinenergy/detail.php?id=66744)), a $13,000 standby unit costs thousands of dollars per hour of avoided inconvenience. A $200 battery power station for the router and phones is the proportionate purchase.
2. **The property is a condo, townhouse, or urban lot with no compliant siting.** Manufacturer and code clearances from windows, doors, and vents are not negotiable, and neither is the gas meter setback.
3. **The homeowner is renting or plans to move within a couple of years.** Zonda's 2025 data shows 95.3% cost recouped at resale (see `02-costs-and-pricing.md`), which is strong for a remodeling project but still a loss on a short horizon once financing is counted.
4. **They already have solar and are shopping for backup.** Adding storage to an existing array is usually the better spend, and it earns in normal years.
5. **They want a generator primarily to save money on utility bills.** Generators only consume fuel. There is no operating-cost payback. Batteries can have one; generators cannot.
6. **They cannot afford the installed cost and are considering financing a standby unit on a 9.99% / 132-month plan** (see `02-costs-and-pricing.md`) for a risk they face once every few years. A $600 interlock plus a $900 portable covers the same failure mode for a fraction of the money.
7. **Fuel supply is the actual constraint.** In propane-only areas that experienced multi-week delivery failures in winter 2025–26 (see `04-fuel-systems.md`), a generator sized without an honest tank-capacity conversation is a false sense of security.

---

## Incentives — removed from this library

This section originally covered federal Section 25D and 48E treatment, California SGIP, Connecticut
Energy Storage Solutions, Maryland RCES, NYSERDA residential storage, and the Massachusetts and
Rhode Island utility dispatch programs. All of it was researched and then deliberately deleted.
Every one of those programs is governed by legislation or by funding cycles that reopen, exhaust,
and restructure on a timescale we cannot track, and a stale incentive figure is the kind of error
that costs a reader real money.

**The site makes no incentive, rebate, or tax-credit claims — for generators or for batteries.** If
a future page needs to address the question, point readers to [DSIRE](https://www.dsireusa.org/)
and their tax advisor rather than restating any figure here.

One durable, non-numeric point survives and is safe to make in comparison copy: **subsidy programs
of this kind attach to energy storage, not to fuel-burning generators.** State the asymmetry
qualitatively if it is useful; never attach a dollar figure, a program name, or a deadline to it.

---

## Claims we can make

Each sentence below is written to be publishable as-is, with its source.

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

The durable spine of this file is the **physical difference**: a battery holds a fixed number of
kilowatt-hours, while a generator on a gas line manufactures them for as long as fuel flows. Battery
capacities, prices, and model lineups all move; that sentence does not. The carbon monoxide material
is likewise permanent and is the most important safety content on the site.

1. A Tesla Powerwall 3 stores 13.5 kWh and delivers up to 11.5 kW of continuous AC power, with the ability to start loads rated up to 185 LRA. — https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf

2. An Enphase IQ Battery 5P provides 5.0 kWh of usable capacity at 3.84 kVA continuous and 7.68 kVA peak, and is warranted for 15 years or 6,000 cycles. — https://enphase.com/download/iq-battery-5p-data-sheet

3. A FranklinWH aPower 2 provides 15 kWh at 10 kW continuous and 15 kW peak, scales to 225 kWh per controller, and is warranted for 15 years or 60 MWh of throughput. — https://www.franklinwh.com/document/download/apower-2-datasheet

4. Berkeley Lab found that most paired residential solar-plus-storage systems use a single 10 or 13.5 kWh battery rated at 5 kW, giving a storage duration of just 2 to 2.7 hours at full rated output. — https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_report.pdf

5. A typical 13.5 kWh home battery costs about $15,650 installed in 2026, ranging from roughly $7,600 in Alabama to $18,400 in Wyoming. — https://www.energysage.com/energy-storage/how-much-do-batteries-cost/

6. The average U.S. household bought about 899 kWh of electricity per month, roughly 30 kWh per day — more than twice what a single 13.5 kWh battery holds. — https://www.eia.gov/tools/faqs/faq.php?id=97&t=1

7. U.S. electricity customers averaged 11 hours without power in 2024, but 80% of that came from major events like Hurricanes Beryl, Helene, and Milton; ordinary non-major-event outages average about two hours a year. — https://www.eia.gov/todayinenergy/detail.php?id=66744

8. About 100 Americans die each year from carbon monoxide poisoning caused by portable generators, which are the single consumer product under CPSC jurisdiction associated with the most CO deaths. — https://www.cpsc.gov/Newsroom/News-Releases/2025/As-Winter-Storms-Threaten-Millions-in-the-US-CPSC-Issues-Safety-Tips-to-Help-Families-Prevent-Carbon-Monoxide-Poisoning-and-Fires

9. Between 2012 and 2022, CPSC documented 872 carbon monoxide deaths from engine-driven tools, 749 of them (86%) involving generators alone — and in 5% of generator deaths the generator was actually outdoors, near a window or vent. — https://www.cpsc.gov/s3fs-public/Generators-and-OEDT-CO-Poisoning-Fatalities-Report-2023-final.pdf

10. CPSC modeling of 511 real fatalities found that generators meeting the UL 2201 standard would have prevented nearly 100% of those deaths, and generators meeting ANSI/PGMA G300-2018 about 87% — but CPSC found that few units on the market actually conformed to either. — https://www.cpsc.gov/Newsroom/News-Releases/2022/New-CPSC-Report-Finds-Industry-Voluntary-Standards-Can-Reduce-Risk-of-Carbon-Monoxide-Death-and-Injury-from-Portable-Generators-Yet-Compliance-with-Standards-Is-Minimal-Supports-Mandatory-Rulemaking-Process

11. NEC Article 702.5 requires transfer equipment that prevents any inadvertent interconnection between a generator and the utility supply, which is why backfeeding through a dryer outlet is a code violation everywhere the NEC is adopted. — https://sparkshift.app/code/nec-702

12. A code-compliant portable generator hookup costs about $400 to $900 installed for an interlock kit, or $1,400 to $3,700 for a full transfer switch and inlet box. — https://homeguide.com/costs/generator-transfer-switch-installation-cost and https://ajlongelectric.com/blog/generator-cost-northern-virginia-2026

13. Tesla's published compatibility documentation states that a Powerwall cannot be charged from an upstream generator and offers no automatic generator control. — https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Compatibility/en-us/Powerwall-Compatibility-Table-EN.pdf

---

## Claims to avoid

- **Do not make any incentive, rebate, or tax-credit claim** — federal, state, or utility, for generators or for batteries. This material was researched and removed because it cannot be kept accurate. Send readers to DSIRE and their tax advisor.
- **Do not publish "home EV backup" for a single battery without qualification.** It describes power output, not duration.
- **Do not say a battery lasts "2 to 3 days."** Only true in rationed survival mode. Give load-dependent ranges.
- **Do not present the LBNL "2 to 2.7 hours" figure as real-world backup duration.** It is energy capacity divided by rated power output.
- **Do not state the federal regulatory status of the CO-shutoff standards in the present tense.** A CPSC mandatory rule has been in process since 2023 and may or may not have landed. "UL 2201 and ANSI/PGMA G300 are industry standards, and CPSC found few units conform to either" is durable; "the standards are voluntary and no federal rule exists" is a claim with an expiry date.
- **Do not claim CO-shutoff generators are safe to run indoors or in a garage.** CPSC documented a triple fatality with a G300-certified unit whose shutoff never triggered. Shutoff reduces risk; it does not permit indoor use.
- **Do not assert backfeeding is "a felony" or cite a specific criminal penalty.** Say it violates the NEC as adopted locally and creates civil and potential criminal liability.
- **Do not claim generators "always work in the cold."** Propane vapor pressure and tank sizing are real winter failure modes (see `04-fuel-systems.md`).
- **Do not quote hardware MSRP as installed cost** for either batteries or generators. Equipment is roughly 50–60% of a battery project and about 40–55% of a generator project.
- **Do not claim solar keeps working during an outage** without noting that a grid-tied array without storage shuts down under anti-islanding rules.

---

## Open questions / needs verification

1. **What share of new residential battery installs also include a generator?** No credible national figure found. FranklinWH markets to this segment heavily, which suggests it is non-trivial, but that is vendor signal, not data.
2. **Has CPSC advanced its mandatory portable-generator CO rule?** The supplemental notice of proposed rulemaking dates to April 2023. Because this is unresolved, write about the standards without a present-tense regulatory status — "UL 2201 and PGMA G300 are industry standards" is durable; "the rule is still pending" is not.
3. **Is there a post-2022 CPSC non-fire CO annual estimates report?** Our "~100 deaths/year" and "796 since 2010" figures trace to the 2020 Annual Estimates report; CPSC notes those estimates may rise as state death-certificate data arrives.
4. **Real-world battery capacity derating below freezing.** Manufacturers publish operating temperature ranges but not usable-capacity curves. We have no citable cold-weather derate percentage.
5. **EIA 2025 reliability data** (Electric Power Annual) — check whether it has published, since 2024 was an outlier hurricane year and the 11-hour figure may not be representative.
6. **EnergySage state pricing anomalies** — several states show 40.5 kWh median battery sizes (ND, NE, SD), which is almost certainly a small-sample artifact. Do not cite those states.

---

## Sources

All URLs accessed **August 7, 2026** unless noted.

**Battery product specifications**
- [Tesla Powerwall 3 datasheet](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/3/Datasheet/en-us/Powerwall-3-Datasheet.pdf) — 13.5 kWh, 11.5 kW, 185 LRA, 15.4 kW off-grid, 10-yr warranty.
- [Tesla Powerwall Compatibility Table](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Compatibility/en-us/Powerwall-Compatibility-Table-EN.pdf) — no upstream generator charging, no automatic generator control.
- [Tesla — Powerwall and Third Party Backup application note](https://truesouthsolar.net/wp-content/uploads/2025/01/tesla-generator-info.pdf) — ATS/MTS cascading configurations with generators.
- [Enphase IQ Battery 5P datasheet](https://enphase.com/download/iq-battery-5p-data-sheet) — 5.0 kWh, 3.84 kVA, 7.68 kVA peak, 48 A LRA, LFP, 15-yr warranty.
- [FranklinWH aPower 2 datasheet](https://www.franklinwh.com/document/download/apower-2-datasheet) — 15 kWh, 10 kW, 15 kW peak, 225 kWh scaling, 30/45 dBA, 15-yr/60 MWh.
- [FranklinWH — aPower 2 product blog](https://www.franklinwh.com/blog/franklinwh-apower-2-the-new-standard-for-home-energy-storage) — aGate generator module and native generator integration.
- [EcoFlow DELTA Pro 3 product page](https://us.ecoflow.com/products/delta-pro-3-portable-power-station?variant=41385721004105) — 4,096 Wh, 4,000 W, X-Boost, 120V/240V exclusivity limitation, pricing.

**Cost data**
- [EnergySage — Solar battery cost 2026](https://www.energysage.com/energy-storage/how-much-do-batteries-cost/) — $15,647 for 13.5 kWh; per-brand and per-state pricing; home EV and off-grid sizing costs. Updated July 13, 2026.
- [LBNL Tracking the Sun 2024](https://eta-publications.lbl.gov/sites/default/files/2024-08/tracking_the_sun_2024_report.pdf) — 2 to 2.7 hour duration; $750–$1,000/kWh premium (2023 data).
- [LBNL Tracking the Sun landing page](https://emp.lbl.gov/tracking-the-sun/) — dataset scope, ~4.5M systems through 2024.
- [HomeGuide — transfer switch installation cost 2026](https://homeguide.com/costs/generator-transfer-switch-installation-cost) — interlock kit $400–$850 installed.
- [UseCalcPro — transfer switch installation cost 2026](https://usecalcpro.com/blog/transfer-switch-installation-cost-calculator-2026) — interlock $400–$900; manual TS $1,000–$2,200; ATS $1,800–$5,500.
- [AJ Long Electric — backup power cost 2026](https://ajlongelectric.com/blog/generator-cost-northern-virginia-2026) — full portable hookup $1,400–$3,700; permit $100–$350. Regional (Northern Virginia); treat as directional.

**Consumption and reliability**
- [EIA FAQ — household electricity use](https://www.eia.gov/tools/faqs/faq.php?id=97&t=1) — 10,791 kWh/yr, 899 kWh/month (2022 data; label vintage).
- [EIA Today in Energy — 2024 outage hours](https://www.eia.gov/todayinenergy/detail.php?id=66744) — 11 hours average; 80% from major events; ~2 hours non-major; SC at 53 hours.
- [EIA Electric Power Annual, Table 11.1](https://eia.gov/electricity/annual/html/epa_11_01.html) — SAIDI/SAIFI/CAIDI underlying values.

**Carbon monoxide and safety standards**
- [CPSC news release, Feb 2025 — winter storm CO safety](https://www.cpsc.gov/Newsroom/News-Releases/2025/As-Winter-Storms-Threaten-Millions-in-the-US-CPSC-Issues-Safety-Tips-to-Help-Families-Prevent-Carbon-Monoxide-Poisoning-and-Fires) — ~100 deaths/year figure.
- [CPSC — Generators and OEDT CO Poisoning Fatalities Report, 2012–2022](https://www.cpsc.gov/s3fs-public/Generators-and-OEDT-CO-Poisoning-Fatalities-Report-2023-final.pdf) — 872 deaths / 749 generator-only; outdoor-placement cases; median home size; the 2021 G300-certified triple fatality.
- [CPSC — Non-Fire CO Deaths, 2020 Annual Estimates](https://www.cpsc.gov/s3fs-public/Non-Fire-Carbon-Monoxide-Deaths-Associated-with-the-Use-of-Consumer-Products-2020-Annual-Estimates.pdf) — 796 portable generator deaths since 2010 = 40% of consumer-product non-fire CO deaths.
- [CPSC news release, 2022 — voluntary standards effectiveness](https://www.cpsc.gov/Newsroom/News-Releases/2022/New-CPSC-Report-Finds-Industry-Voluntary-Standards-Can-Reduce-Risk-of-Carbon-Monoxide-Death-and-Injury-from-Portable-Generators-Yet-Compliance-with-Standards-Is-Minimal-Supports-Mandatory-Rulemaking-Process) — UL 2201 ~100%, PGMA G300 ~87%; minimal market conformance.
- [NIST Technical Note 2202r1](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=935544) — simulation methodology; G300 vs UL 2201 shutoff thresholds and emission-rate requirement.
- [Federal Register, April 20, 2023 — CPSC SNPR](https://www.govinfo.gov/content/pkg/FR-2023-04-20/pdf/2023-07870.pdf) — 511-death simulation results in the rulemaking record.

**Backfeeding and code**
- [NEC 702 summary — Optional Standby Systems](https://sparkshift.app/code/nec-702) — 702.5 transfer equipment requirement; interlock as compliant path. Secondary source; verify against NFPA 70 text before publishing code citations.
- [Consumer Reports — why suicide cords are dangerous](https://www.consumerreports.org/home-garden/generators/why-suicide-extension-cords-are-so-dangerous-a1189731437/) — expert framing; transfer switch benefits.
- [How to Look at a House — backfeeding through a dryer outlet](https://www.howtolookatahouse.com/Blog/Entries/2020/5/can-i-backfeed-generator-to-house-through-dryer-outlet-plug.html) — NEC 406.6(B) citation; failure modes.

**Internal cross-references**
- `02-costs-and-pricing.md` — Generac $8,000–$16,000 installed guidance; Zonda 2025 Cost vs. Value $13,534 job cost and 95.3% cost recouped; Consumer Reports installation ranges.
- `04-fuel-systems.md` — Kohler 26RCA at 290 ft³/hr natural gas at full load; propane tank sizing, cold-weather vapor pressure, and winter 2025–26 delivery failures.
- `06-maintenance-warranty-lifespan.md` — generator service intervals and service life, for the maintenance row of the comparison table.
