# Equipment Types and Sizing — Internal Research

**Internal research brief for EVChargerInstallerList.com. This is not published content.** It is source material for FAQ blocks and buyer guides. Every claim below carries a source URL. Claims are labeled as **[CODE]** (hard NEC/NFPA requirement), **[MFR]** (manufacturer specification or requirement), **[PRACTICE]** (common industry practice, not a requirement), **[MARKETING]** (manufacturer marketing claim), or **[VENDOR-EST]** (vendor/aggregator estimate, not authoritative). Research conducted August 7, 2026.

---

## Executive summary

- **Home EV chargers are permanently installed, run on natural gas or LP, and start automatically via an automatic transfer switch (ATS).** Consumer Reports puts typical output at roughly 5,000–20,000 W, versus 3,000–8,500 W for the portable generators it tests and 900–7,600 W for inverter generators. ([Consumer Reports](https://www.consumerreports.org/home-garden/generators/buying-guide/))
- **Air-cooled residential units now run about 10–28 kW.** Generac's Next Generation line launched January 2025 topping out at 28 kW (25 kW on natural gas) — currently the largest air-cooled home standby on the market. ([Generac PR, Jan 21 2025](https://www.prnewswire.com/news-releases/generac-unveils-the-most-powerful-air-cooled-home-standby-generator-on-the-market-302355605.html))
- **The air-cooled/liquid-cooled crossover sits at roughly 25–32 kW and varies by brand.** Cummins' air-cooled line stops at 20 kW and its liquid-cooled QuietConnect picks up at 25 kW; Kohler air-cooled stops at 26 kW with liquid-cooled starting at 24 kW; Generac air-cooled now reaches 28 kW before the 32 kW liquid-cooled XG Protector.
- **Air-cooled units run at 3,600 rpm; liquid-cooled units run at 1,800 rpm.** That halved engine speed, plus thermostatically controlled coolant, is the real durability difference — not the cooling medium alone.
- **Price gap is large.** Generac's own MSRP list (accessed Aug 2026) shows 28 kW air-cooled at $8,159 versus 32 kW liquid-cooled single-phase at $21,099 — roughly a 2.6× jump in equipment cost for a 4 kW gain. ([Generac](https://www.generac.com/residential-products/standby-generators/))
- **NEC 702.4 gives installers two legal paths with an ATS:** size the generator for the full Article 220 calculated load, or install an energy management system (load shedding) per 750.30 and size for the maximum load the EMS will permit. **[CODE]** ([NC OSFM](https://www.ncosfm.gov/electrical/articles-702-705-706-710-optional-standby-systems-stand-alone-systems-energy-storage-systems/open))
- **Load management is why most homes don't need a 40 kW generator.** A straight Article 220 calculation sizes for service-entrance demand and routinely produces an oversized, uneconomical unit. ([ExpertCE](https://expertce.com/learn-articles/standby-generator-load-calculation-residential/))
- **Generac supports up to eight Smart Management Modules per system, each set to a unique priority 1–8**, shedding loads when generator frequency drops. **[MFR]** ([Generac SMM manual](https://www.generac.com/globalassets/residential/dealers--installers/generac-installer-programs/solar--battery-installer-support/100a-smm---install--owners-manual-english.pdf))
- **Central AC is almost always the sizing driver.** The number that matters is locked-rotor amps (LRA) off the condenser data plate, multiplied by 240 V — not tonnage and not square footage.
- **Manufacturers publish motor-starting capacity directly**, and it's the cleanest cross-brand comparison: Kohler 26RCAL is rated 39 kVA peak motor starting at 240 V, Cummins RS20A 40 kVA at 30% voltage dip, Briggs PP13 37 kVA, Generac's 26 kW claims 230 LRA / 55.2 kVA.
- **Service-rated ATS vs non-service-rated is the key install distinction.** A service-rated switch contains the utility service disconnect and mounts between meter and main panel (whole-house); a non-service-rated switch mounts downstream, typically feeding an essential-circuits subpanel.
- **Common residential ATS amperages are 100, 150, 200, and 400 A.** Essential-circuit switches are sold by circuit count — Generac's small package uses a 16-circuit switch.
- **Warranty length is a real differentiator.** Generac and Kohler air-cooled: 5 years. Cummins: 5 years/2,000 hours. Briggs & Stratton: 7 years comprehensive standard, 10 years dealer-exclusive. Champion: 10 years limited.
- **Published noise ratings cluster at 62–67 dB(A) under load at 23 ft for air-cooled**, dropping to 55–57 dB(A) in low-speed exercise mode. Liquid-cooled Kohler RCL models publish 52–61 dB(A). Always state the measurement distance.
- **Two brand-level changes matter for 2025–2026:** Generac's full Next Generation air-cooled platform rollout (EFIC fuel/ignition control, no on-unit LCD, cellular standard), and Briggs & Stratton's PowerProtect+ line announced May 2026 with front-facing exhaust.

---

## Detailed findings

### 1. Home standby vs portable vs inverter

Consumer Reports splits the category four ways: home standby, portable, inverter, and portable power stations. Home standby units are permanently installed, connect to natural gas or LP, and start automatically. Portables are moved into position and typically deliver 3,000–8,500 W in CR's test group. Inverter generators throttle engine speed to match demand, which makes them quieter and cleaner electrically, and CR tests them from 900 to 7,600 W. ([Consumer Reports](https://www.consumerreports.org/home-garden/generators/buying-guide/))

The practical dividing line for our audience: anything requiring a 240 V load (well pump, central AC, electric range) or unattended automatic operation points to standby. **[CODE]** NEC 702.5 requires transfer equipment for all fixed or portable optional standby systems, with a narrow exception for supervised temporary portable connections. ([EC&M / Mike Holt](https://www.ecmweb.com/national-electrical-code/qa/article/20898908/code-qa-sizing-an-optional-standby-generator))

### 2. Air-cooled vs liquid-cooled

| | Air-cooled | Liquid-cooled (residential-adjacent) |
|---|---|---|
| Typical kW | ~10–28 kW | ~24–60 kW |
| Engine speed | 3,600 rpm | 1,800 rpm |
| Engine | Small V-twin, ~460–999 cc | Automotive/industrial, 2.2–6.2 L |
| Example MSRP | Generac 28 kW: $8,159 | Generac 32 kW: $21,099 |
| Noise at 23 ft | 62–67 dB(A) loaded | 52–61 dB(A) |

Generac's 22–28 kW air-cooled units use a 997 cc G-Force 1000 two-cylinder engine at 3,600 rpm, weigh 451–524 lb, and measure 46.4 × 26.3 × 30.7 in. ([Generac 22–28 kW spec](https://productmanuals.generac.com/api/manualfiles/G0072820/A0005151077/0)) The liquid-cooled XG Protector 32/40/48 kW uses a 4.5 L inline-four running at 1,800 rpm (1,200 rpm during exercise), delivers <5% THD and ±1% voltage regulation, and ships in an aluminum enclosure. ([Generac XG spec sheet](https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/xg03245-xg04045_hsb_specsheet.pdf))

**Lifespan is where we should be careful.** No manufacturer we found publishes an engine-hour life expectancy for residential standby units. Third-party figures range from 800–1,000 hours for air-cooled and 8,000+ for liquid-cooled (an electrical engineer's comment on GreenBuildingAdvisor, [source](https://www.greenbuildingadvisor.com/question/air-vs-liquid-cooled-standby-generator-for-winter-outages)) to 10,000–15,000 vs 20,000–30,000 hours on SEO-driven sites. That's a 10× spread. **[VENDOR-EST / unverified]** — do not state a number. State the mechanism instead: 1,800 rpm halves friction cycles per hour and thermostatic coolant control holds a stable operating temperature, so liquid-cooled engines are less mechanically stressed.

**Enclosures.** Generac Guardian and Next Gen air-cooled: aluminum. ([Generac 10–26 kW brochure](https://www.generac.com/globalassets/products/residential/standby-generators/brochure/10-26kw_hsb_brochure.pdf)) Kohler 14/20/26RCA: corrosion-proof aluminum; the smaller 10RESV/12RESV use powder-coated steel. ([Kohler/Rehlko brochure](https://aingroup.com/wp-content/uploads/2025/08/Kohler_Energy_brochure2.pdf)) Champion mixes both: the 14 kW uses steel, the 22 kW aluminum-zinc coated steel, and the 26 kW aluminum. ([Champion](https://www.championpowerequipment.com/products/generators/home-standby-generators/))

### 3. Sizing methodology

**[CODE]** With automatic transfer equipment, NEC 702.4 requires one of two things: (a) the standby source supplies the **full load** transferred, calculated per Article 220 Parts I–IV or another approved method; or (b) an **energy management system** per 750.30 automatically manages connected load, in which case the source must supply the maximum load the EMS will permit. ([NC OSFM code text](https://www.ncosfm.gov/electrical/articles-702-705-706-710-optional-standby-systems-stand-alone-systems-energy-storage-systems/open); [Mike Holt, 2023 NEC](https://www.mikeholt.com/newsletters.php?action=display&letterID=2925))

**[CODE]** The Article 220 optional method (220.82) applies to dwellings served by a single 120/240 V or 120/208 V 3-wire service of 100 A or larger. It takes 100% of the first 10 kVA plus 40% of the remainder of: 3 VA/ft², 1,500 VA per 20 A small-appliance and laundry circuit, and the nameplate VA of all fastened-in-place appliances and motors (excluding HVAC). It then adds the largest of six heating/cooling scenarios. ([EC&M](https://www.ecmweb.com/national-electrical-code/code-basics/article/20900596/one-family-dwelling-unit-load-calculations))

**[CODE]** For existing homes, 220.87 permits sizing from actual demand data: one year of maximum demand, or the average of 15-minute peaks over at least 30 days. ([EC&M](https://www.ecmweb.com/national-electrical-code/qa/article/20898908/code-qa-sizing-an-optional-standby-generator)) This is the underused option that lets an installer justify a smaller unit on a retrofit.

**Why load management exists.** Article 220 sizes service and feeder conductors, assuming loads that *could* be on simultaneously. Applying it directly to a generator commonly produces a significantly oversized unit, which is exactly why the 702.4 EMS path exists. ([ExpertCE](https://expertce.com/learn-articles/standby-generator-load-calculation-residential/)) A jurisdiction example: Leon County, FL requires a load management system whenever the generator output is less than the panel main breaker rating on an ATS install. ([Leon County](https://cms.leoncountyfl.gov/Portals/0/DeptFiles/DSEM/Building/Generator%20Requirements%20for%20FBC%208th%20Edition%20(2023)%20and%20NEC%202020.pdf))

**[CODE]** 750.30(A) prohibits an EMS from overriding load-shedding controls that preserve minimum capacity for fire pumps, emergency systems, legally required standby, and critical operations power systems. ([UpCodes, NFPA 70-2023](https://up.codes/s/load-shedding-controls)) Rarely relevant in single-family homes, but it's the reason the code language exists.

**[MFR] Load management hardware.** Generac Smart Management Modules come in 50 A (model 7000) and 100 A (7006) versions, install in NEMA 3R enclosures, require no control wiring, and shed loads by sensing a frequency drop. Up to eight per system, each on a unique priority 1–8. Priority 1 recovers five minutes after a shed event, with each subsequent priority waiting an additional 15 seconds. Generac's 200 A smart ATS separately manages up to four 24 VAC-controlled HVAC loads with no added hardware. ([Generac SMM manual](https://www.generac.com/globalassets/residential/dealers--installers/generac-installer-programs/solar--battery-installer-support/100a-smm---install--owners-manual-english.pdf); [Generac RXSW200A3 listing](https://www.fergusonhome.com/generac-rxsw200a3/s1449472))

### 4. Sizes actually sold, 2025–2026

**Generac** (MSRPs from generac.com, accessed Aug 7 2026): Next Generation "Cellular" air-cooled at 10 kW $3,769, 14 kW $4,889, 18 kW $5,709, 22 kW $6,309, 24 kW $6,729, 26 kW $7,159, 28 kW $8,159. Legacy Guardian "WiFi Enabled" models 10–26 kW remain listed. Liquid-cooled XG Protector single-phase: 32 kW $21,099, 40 kW $23,869, 48 kW $25,179, 60 kW $27,699, 80 kW $33,999. ([Generac](https://www.generac.com/residential-products/standby-generators/))

Generac 28 kW: 28 kW LP / 25 kW NG, 116/104 A at 240 V, 125 A main line breaker, 997 cc, 524 lb, 67 dB(A) at normal load and 55 dB(A) in Quiet-Test at 23 ft. ([spec](https://productmanuals.generac.com/api/manualfiles/G0072820/A0005151077/0)) Legacy 26 kW: 26 kW LP / 22.5 kW NG. ([Generac 7291](https://www.generac.com/residential-products/standby-generators/gaseous/26kw-standby-generator-with-whole-house-switch-wifi-enabled-7291/))

**Kohler** (Rehlko): air-cooled 10RESV, 12RESV, 14RCA ($4,997 MSRP, 14 kW LP / 12 kW NG, 33 kVA motor starting, CH740), 20RCA (20/18 kW), 26RCA/26RCAL ($8,114 MSRP for the switch-included RCAL, 26 kW LP / 24 kW NG, 109/100 A, 39 kVA motor starting, CH1006, 56 dB(A) exercise, 10-second response). Liquid-cooled RCL: 24RCLA (24/21), 30RCLA (30/30), 38RCLC (38/38), 48RCLC (48/48), 60RCLB (60/58), all 1,800 rpm with powder-coated aluminum enclosures and 18-inch reduced setback. ([26RCAL](https://www.kohlerhomeenergy.rehlko.com/products/home-generators/26rcal); [14RCA](https://www.kohlerhomeenergy.rehlko.com/products/home+generators/14rca); [RCL sell sheet](https://atozelectricbayfield.com/wp-content/uploads/2024/07/rcl-generators.pdf))

**Cummins QuietConnect:** air-cooled RS13A, RS17A, RS20A, RS20AC (999 cc V-twin, 3,600 rpm, 65 dB(A)); liquid-cooled residential-capable line starts at RS25 and continues 30/36/40/50/60 kW. ([Cummins brochure](https://swiftpower.com/wp-content/uploads/2025/04/CumminsQuietConnectSeries.pdf); [RS20A spec](https://www.cummins.com/calculator/cummins-generator-calculator/spec-sheets/RS20A-EN.pdf))

**Briggs & Stratton PowerProtect:** 13, 18, 22, 26 kW. PP13 is 13 kW LP / 11.5 kW NG at 28 × 25 × 38 in with 37 kVA motor starting; PP18 and PP22 are each 45 kVA. ([Briggs PR, May 2026](https://www.globenewswire.com/news-release/2026/05/27/3301906/0/en/BRIGGS-STRATTON-INTRODUCES-POWERPROTECT-STANDBY-GENERATORS.html))

**Champion:** 14 kW (754 cc, 62 dB(A)), 22 kW (999 cc, 67 dB(A)), 26 kW — all air-cooled, 3,600 rpm, sold as systems bundled with 100/150/200 A aXis service-entrance ATSs that include load management. ([Champion 22 kW/150 A](https://www.championpowerequipment.com/product/201378-22-kw-whole-house-home-standby-generator-and-150a-switch-with-axis-technology/))

### 5. Motor starting loads

A central AC compressor's inrush is what breaks undersized generators. The correct number is **LRA × 240 V**, read off the outdoor condenser data plate — not RLA, not tonnage. **[PRACTICE]** ([ShelterVolt](https://www.sheltervolt.com/blog/can-you-run-central-air-on-a-generator); [BTUSize](https://btusize.com/calculators/generator-sizing/))

Well pumps are the second common driver, and they're routinely underestimated because running watts look harmless. **[VENDOR-EST]** Published ranges: 1/2 HP roughly 700–1,100 W running and 2,000–4,000 W starting; 1 HP roughly 1,500–2,000 W running and 4,000–6,000 W starting. Submersibles start against a vertical water column, so they surge harder than the running number suggests. ([SizeMyGenerator](https://sizemygenerator.com/well-pump-starting-watts/))

**Soft starters** ramp compressor voltage over several seconds instead of applying it instantly. Vendor sources put the inrush reduction at 50–75%. **[VENDOR-EST]** — the range across sources is wide enough that we should quote it as "roughly half or better" rather than a precise percentage. ([BTUSize](https://btusize.com/calculators/generator-sizing/); [GeneratorPicker](https://generatorpicker.com/appliances/central-ac-3-ton))

**Why square-footage rules of thumb fail.** Two 2,500 ft² homes can differ by 15 kW depending on whether heat is gas or electric, how many HVAC compressors there are, whether there's a well pump, and whether there's an EV charger or pool pump. Square footage enters the NEC optional calculation only as a 3 VA/ft² general-lighting term — one input among many, and usually not the dominant one. The better method is: inventory the loads you intend to run, add running watts, add the single largest starting surge, then compare against the generator's published continuous rating and motor-starting kVA. ([Cummins sizing guidance](https://www.cummins.com/news/2025/06/24/what-size-portable-generator-do-you-need-heres-how-decide))

### 6. Automatic transfer switches

**What an ATS does:** monitors utility voltage, signals the generator to start after a set delay, transfers the load to the generator once it's up to voltage and frequency, then retransfers to utility and shuts the generator down after utility power stabilizes. Residential ATSs are **open transition** — there's a brief break in power during transfer. ([Generac RXSW200A3](https://www.fergusonhome.com/generac-rxsw200a3/s1449472))

**Service-rated vs non-service-rated.** A service-rated (service-entrance rated) switch includes the utility service disconnect breaker and installs between the meter and the main panel — it becomes the service disconnect, so neutral-to-ground bonding moves into the switch and must be removed from the main panel. A non-service-rated switch has no main breaker and installs downstream, typically feeding an essential-circuits subpanel. Generac's RXSW line is service-entrance rated; the RXSC line is not. ([Generac ATS manual](https://www.generac.com/globalassets/products/residential/standby-generator-transfer-switches/automatic-transfer-switches/owners-manual/100-200a-automatic-transfer-switch-owners-manual.pdf); [Buckeye Power Systems](https://buckeyepowersystems.com/pages/choosing-the-right-transfer-switch))

**Amperages:** 100, 150, 200 A cover most single-family homes; 400 A appears on large services. Essential-circuit products are sold by circuit count instead — Generac lists 10 kW and 14 kW packages with a 16-circuit switch. ([Generac product list](https://www.generac.com/residential-products/standby-generators/)) **[CODE-adjacent]** Generac's residential ATSs are UL listed for optional standby systems under NEC Article 702 only; the 200 A model carries a 22,000 A withstand rating at 240 V.

### 7. Brand landscape

Generac is the clear volume leader. Its own marketing claims "8 out of 10 home EV chargers installed are Generac" **[MARKETING]** ([Generac](https://www.generac.com/residential-products/standby-generators/26kW-Standby-Generator-With-Whole-House-Switch-WiFi-Enabled-7291/)). Third-party market-share numbers circulating for 2025 (68–75% US residential) trace back to paid market-research summaries republished on SEO sites rather than to primary filings — treat as **unverified** and attribute loosely.

Warranties, all **[MFR]**:

| Brand | Standard warranty |
|---|---|
| Generac (air-cooled) | 5-year limited |
| Kohler / Rehlko | 5-year / 2,000-hr premium limited (parts, labor, dealer travel); 7- and 10-year extensions offered |
| Cummins | 5-year / 2,000-hr limited (ATS: 2-year) |
| Briggs & Stratton | 7-year comprehensive (parts, labor, travel); 10-year dealer-exclusive |
| Champion | 10-year limited |

Sources: [Generac brochure](https://www.generac.com/globalassets/products/residential/standby-generators/brochure/10-26kw_hsb_brochure.pdf), [Kohler RCL sheet](https://atozelectricbayfield.com/wp-content/uploads/2024/07/rcl-generators.pdf), [Cummins RS20A spec](https://www.cummins.com/calculator/cummins-generator-calculator/spec-sheets/RS20A-EN.pdf), [Briggs](https://energy.briggsandstratton.com/en-us/resources/article-categories/resource-articles/generator-warranties-explained), [Champion](https://www.championpowerequipment.com/product/100837-14-kw-whole-house-home-standby-generator-and-200a-switch-with-axis-technology/).

Published noise, all at 23 ft (7 m): Generac air-cooled 67 dB(A) loaded / 55 dB(A) Quiet-Test (Next Gen), 65–67 / 55–57 (Guardian). Kohler 26RCA 56 dB(A) exercise. Cummins 65 dB(A) across the RS air-cooled line. Champion 62 dB(A) (14 kW), 67 dB(A) (22 kW). Kohler liquid-cooled RCL: 52/60 dB(A) for 24–38 kW, 61/61 for 48–60 kW.

### 8. What changed in 2025–2026

- **Generac Next Generation air-cooled platform.** Announced January 21, 2025; available second half of 2025; 10–28 kW. Adds Electronic Fuel & Ignition Control (replacing carburetors), hydraulic lifters, redesigned enclosure, cellular connectivity standard, and removal of the on-unit LCD in favor of the installer-facing Field Pro app. ([Generac PR](https://www.prnewswire.com/news-releases/generac-unveils-the-most-powerful-air-cooled-home-standby-generator-on-the-market-302355605.html); [City Electric Supply, Sept 2025](https://blog.cityelectricsupply.com/generac-next-generation-home-standby-generators/))
- **Briggs & Stratton PowerProtect+.** Announced May 27, 2026: 18, 22, and 26 kW with 64 engineering changes and an industry-exclusive front-facing exhaust; the 13 kW carries over. ([Briggs PR](https://www.globenewswire.com/news-release/2026/05/27/3301906/0/en/BRIGGS-STRATTON-INTRODUCES-POWERPROTECT-STANDBY-GENERATORS.html))
- **Kohler Energy is now Rehlko** (September 17, 2024), majority-owned by Platinum Equity. Generators continue to be sold under the KOHLER brand; the consumer site now lives at kohlerhomeenergy.rehlko.com. ([Rehlko](https://www.rehlko.com/kohler-energy-is-now-rehlko))
- **Outage context:** Generac reported the US experienced nearly 1.5 billion hours of power outages in 2024, the highest since it began tracking in 2010. **[MARKETING — Generac's own tracking, not a government dataset.]** ([Generac PR](https://www.prnewswire.com/news-releases/generac-unveils-the-most-powerful-air-cooled-home-standby-generator-on-the-market-302355605.html))

---

## Claims we can make

**Write these principle-first.** Where a claim carries a dated figure — a price, a year's outage
data, a code edition — lead with the durable point and let the number follow as support. A sentence
built that way degrades into "roughly" rather than into "false." Always carry the year.

The durable material in this file is the **physics and the code method**: air-cooled versus
liquid-cooled, why locked-rotor amps drive sizing, how load management changes the calculation.
Model numbers and kW lineups shift with product cycles, so treat any specific model as an example
rather than as the claim.

1. "With an automatic transfer switch, the NEC gives you two compliant options: size the generator to carry the home's full calculated load under Article 220, or install a load-management system and size the generator to the maximum load that system will allow on at once." — https://www.ncosfm.gov/electrical/articles-702-705-706-710-optional-standby-systems-stand-alone-systems-energy-storage-systems/open
2. "For an existing home, the NEC also lets an electrician size the generator from recorded demand data — a year of maximum demand, or the average of 15-minute peaks over at least 30 days — instead of a paper calculation." — https://www.ecmweb.com/national-electrical-code/qa/article/20898908/code-qa-sizing-an-optional-standby-generator
3. "The NEC's optional dwelling calculation counts general lighting at 3 VA per square foot, 1,500 VA for each 20-amp small-appliance and laundry circuit, and the nameplate rating of fixed appliances — then applies 100% to the first 10 kVA and 40% to the rest, plus the largest heating or cooling load." — https://www.ecmweb.com/national-electrical-code/code-basics/article/20900596/one-family-dwelling-unit-load-calculations
4. "A Generac system can use up to eight Smart Management Modules, each assigned a unique priority from 1 to 8, which shed loads automatically when generator frequency drops and restore them in priority order." — https://www.generac.com/globalassets/residential/dealers--installers/generac-installer-programs/solar--battery-installer-support/100a-smm---install--owners-manual-english.pdf
5. "The largest air-cooled home EV charger currently on the market is Generac's 28 kW, introduced in January 2025, rated 28 kW on propane and 25 kW on natural gas." — https://www.prnewswire.com/news-releases/generac-unveils-the-most-powerful-air-cooled-home-standby-generator-on-the-market-302355605.html
6. "Generac's 28 kW air-cooled unit is rated 67 dB(A) at 23 feet under normal load and 55 dB(A) during its low-speed weekly exercise." — https://productmanuals.generac.com/api/manualfiles/G0072820/A0005151077/0
7. "Kohler's 26RCAL delivers 26 kW on propane and 24 kW on natural gas, with 39 kVA of peak motor-starting capacity at 240 volts and a published 56 dB(A) exercise level." — https://www.kohlerhomeenergy.rehlko.com/products/home-generators/26rcal
8. "Every Cummins QuietConnect air-cooled model — RS13A, RS17A, RS20A, and RS20AC — carries the same 65 dB(A) rating and a 5-year/2,000-hour limited warranty." — https://www.cummins.com/calculator/cummins-generator-calculator/spec-sheets/RS20A-EN.pdf
9. "Briggs & Stratton backs its PowerProtect generators with a 7-year warranty covering parts, labor, and technician travel, with a 10-year version available through authorized dealers." — https://energy.briggsandstratton.com/en-us/resources/article-categories/resource-articles/generator-warranties-explained
10. "Air-cooled home EV chargers run at 3,600 rpm; liquid-cooled units run at 1,800 rpm, which is the main reason liquid-cooled engines are considered longer-lived." — https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/xg03245-xg04045_hsb_specsheet.pdf
11. "Moving from the largest air-cooled unit to the smallest liquid-cooled one is a significant price step: Generac lists its 28 kW air-cooled at $8,159 and its 32 kW liquid-cooled single-phase at $21,099." — https://www.generac.com/residential-products/standby-generators/
12. "A service-entrance-rated transfer switch contains the utility service disconnect and installs between the meter and the main panel; a non-service-rated switch installs downstream and typically feeds a subpanel of essential circuits." — https://www.generac.com/globalassets/products/residential/standby-generator-transfer-switches/automatic-transfer-switches/owners-manual/100-200a-automatic-transfer-switch-owners-manual.pdf
13. "To size for your air conditioner, read the locked-rotor amps (LRA) off the outdoor condenser's data plate and multiply by 240 volts — that surge, not the running load, determines whether the generator can start it." — https://btusize.com/calculators/generator-sizing/
14. "Kohler's energy business rebranded as Rehlko in September 2024, but its home EV chargers are still built and sold under the KOHLER name." — https://www.rehlko.com/kohler-energy-is-now-rehlko
15. "Consumer Reports puts typical home standby output at roughly 5,000 to 20,000 watts, versus 3,000 to 8,500 watts for the portable generators it tests." — https://www.consumerreports.org/home-garden/generators/buying-guide/

---

## Claims to avoid

- **"An air-cooled generator lasts X hours; a liquid-cooled one lasts Y."** No manufacturer publishes this. Third-party estimates span 800 to 15,000 hours for air-cooled — a range so wide it's meaningless.
- **"A 2,000 sq ft home needs a 16 kW generator."** Square footage is one 3 VA/ft² input in the NEC calculation, not a sizing method. Fuel type for heat, HVAC count, and well pumps swamp it.
- **"Generac has 75% market share."** Generac's own marketing says 8 of 10 installs. Independent share figures we found all trace to resold market-research summaries, not primary sources. Say "the largest brand by a wide margin" instead.
- **"A soft starter cuts inrush by 70%."** Vendor sources claim 50–75% with no consistent test basis. Say "roughly half or better, depending on the unit."
- **"You need a 22 kW generator to run a 5-ton AC."** Depends entirely on the compressor's LRA, whether a soft starter is fitted, and what else runs simultaneously. Several 18 kW units are rated for a 5-ton AC by their manufacturers.
- **"Liquid-cooled is always quieter."** Kohler's 48RCLC and 60RCLB publish 61 dB(A), essentially the same as many air-cooled units. The quiet advantage is real at 24–38 kW, not universal.
- **"Westinghouse makes home EV chargers."** We could not verify a current Westinghouse residential automatic standby line. Unverified — leave them out of standby comparisons.
- **Any installed-cost figure.** Every number we found is a vendor aggregator estimate. If we publish costs, label them as such and cite the aggregator explicitly.

---

## Open questions / needs verification

1. **Next Generation rollout status.** As of a November 2025 dealer post, only 14, 18, 22, and 28 kW Next Gen units had shipped, with Guardian models still in the catalog. Generac's August 2026 site lists 10–28 kW Cellular models alongside legacy WiFi models. Whether Guardian is formally discontinued is **unverified** — worth a dealer call.
2. **Kohler air-cooled lineup under Rehlko.** The 2025 brochure still lists 10RESV/12RESV, but the current consumer site emphasizes 14/20/26 RCA/RCAL. Whether the RESV models remain in production is unverified.
3. **Cummins RS25–RS40 residential positioning.** These are listed in the QuietConnect home-and-small-business brochure but may be sold primarily as light-commercial. Needs confirmation before we present them as residential options.
4. **Motor-starting kVA test conditions.** Kohler publishes "peak motor starting kVA @ 240 V," Cummins publishes "motor starting kVA at 30% voltage dip," Briggs calculates "from locked rotor amps at a 35% voltage drop." These are **not directly comparable**. We should either footnote the voltage-dip basis or avoid cross-brand kVA tables.
5. **Real installer sizing practice.** We have the code and the manufacturer math, but no data on what installers actually do in the field. A survey of our 9,331 listed installers would be genuinely proprietary content.
6. **NFPA 37 / manufacturer clearances.** Cummins cites "NFPA 37 – 18 inches" and Kohler cites an "18-inch reduced setback." Whether 18 in is a code minimum or a listing-specific allowance needs to be resolved by the installation/clearance researcher.
7. **2026 NEC adoption.** All code references here are 2020/2023 NEC. State adoption status for the 2026 edition is not covered.

---

## Sources

All accessed **August 7, 2026**.

**Manufacturer (primary)**
- https://www.generac.com/residential-products/standby-generators/ — full current Generac lineup and MSRPs, air-cooled and liquid-cooled.
- https://productmanuals.generac.com/api/manualfiles/G0072820/A0005151077/0 — Generac 22–28 kW owner's manual: outputs, dB(A), dimensions, engine specs.
- https://www.generac.com/globalassets/products/residential/standby-generators/brochure/10-26kw_hsb_brochure.pdf — Guardian 10–26 kW brochure (rev. 08/22, older vintage): model numbers, dB(A), aluminum enclosure, 5-year warranty.
- https://www.generac.com/residential-products/standby-generators/gaseous/26kw-standby-generator-with-whole-house-switch-wifi-enabled-7291/ — 26 kW outputs and the "8 out of 10" marketing claim.
- https://www.generac.com/globalassets/products/residential/standby-generators/spec-sheets/xg03245-xg04045_hsb_specsheet.pdf — XG Protector 32/40/48 kW: 4.5 L engine, 1,800 rpm, currents, THD.
- https://www.generac.com/globalassets/residential/dealers--installers/generac-installer-programs/solar--battery-installer-support/100a-smm---install--owners-manual-english.pdf — Smart Management Module operation, eight-module limit, priority timing.
- https://www.generac.com/globalassets/products/residential/standby-generator-transfer-switches/automatic-transfer-switches/owners-manual/100-200a-automatic-transfer-switch-owners-manual.pdf — 100–200 A service-entrance vs non-service-entrance ATS, UL/NEC 702 listing.
- https://www.kohlerhomeenergy.rehlko.com/products/home-generators/26rcal — Kohler 26RCAL outputs, 39 kVA motor starting, 56 dB(A), MSRP, RCA vs RCAL.
- https://www.kohlerhomeenergy.rehlko.com/products/home+generators/14rca — Kohler 14RCA specs and MSRP.
- https://aingroup.com/wp-content/uploads/2025/08/Kohler_Energy_brochure2.pdf — Kohler air-cooled lineup and enclosure materials (10RESV through 26RCA, 38RCLC).
- https://atozelectricbayfield.com/wp-content/uploads/2024/07/rcl-generators.pdf — Kohler RCL liquid-cooled 24–60 kW: outputs, dB(A), warranty, 18-in setback.
- https://www.cummins.com/calculator/cummins-generator-calculator/spec-sheets/RS20A-EN.pdf — Cummins RS13A/17A/20A/20AC specs, motor-starting kVA, warranty, UL 2200.
- https://swiftpower.com/wp-content/uploads/2025/04/CumminsQuietConnectSeries.pdf — Cummins QuietConnect full model table (13–150 kW), confirming the 20→25 kW air-to-liquid crossover.
- https://energy.briggsandstratton.com/en-us/resources/article-categories/resource-articles/generator-warranties-explained — Briggs 7-year comprehensive and 10-year dealer-exclusive warranty terms.
- https://www.championpowerequipment.com/products/generators/home-standby-generators/ — Champion 14/22/26 kW lineup and enclosure materials.
- https://www.championpowerequipment.com/product/100837-14-kw-whole-house-home-standby-generator-and-200a-switch-with-axis-technology/ — Champion 14 kW full spec table, aXis ATS, 10-year warranty.
- https://www.championpowerequipment.com/product/201378-22-kw-whole-house-home-standby-generator-and-150a-switch-with-axis-technology/ — Champion 22 kW specs and 150 A service-entrance ATS.

**Press releases / corporate**
- https://www.prnewswire.com/news-releases/generac-unveils-the-most-powerful-air-cooled-home-standby-generator-on-the-market-302355605.html — Next Gen launch, Jan 21 2025; 10–28 kW range; 2024 outage-hours figure.
- https://www.globenewswire.com/news-release/2026/05/27/3301906/0/en/BRIGGS-STRATTON-INTRODUCES-POWERPROTECT-STANDBY-GENERATORS.html — PowerProtect+ launch, May 27 2026; kVA figures; footprint.
- https://www.rehlko.com/kohler-energy-is-now-rehlko — Kohler Energy → Rehlko rebrand, Sept 17 2024.
- https://blog.cityelectricsupply.com/generac-next-generation-home-standby-generators/ — distributor detail on EFIC, Field Pro app, removal of on-unit display (Sept 2025).

**Code and code commentary**
- https://www.ncosfm.gov/electrical/articles-702-705-706-710-optional-standby-systems-stand-alone-systems-energy-storage-systems/open — NC State Fire Marshal reproduction of NEC 702.4 and 750.30 with commentary.
- https://www.ecmweb.com/national-electrical-code/qa/article/20898908/code-qa-sizing-an-optional-standby-generator — Mike Holt in EC&M on 702.4(B) and 220.87 (written against the 2011 NEC; principles carry forward, verify section numbering against the adopted edition).
- https://www.ecmweb.com/national-electrical-code/code-basics/article/20900596/one-family-dwelling-unit-load-calculations — EC&M on the Article 220 standard and optional dwelling calculations.
- https://www.mikeholt.com/newsletters.php?action=display&letterID=2925 — Mike Holt on Articles 700/701/702 under the 2023 NEC.
- https://up.codes/s/load-shedding-controls — NFPA 70 (2023) 750.30(A) load-shedding controls text.
- https://blog.se.com/homes/2025/07/07/2023-national-electrical-code-explained-learning-more-about-the-capacity-requirements-for-optional-standby-systems-nec-section-702-4/ — Schneider Electric explainer on 702.4 and EMS/PCS (July 2025).
- https://cms.leoncountyfl.gov/Portals/0/DeptFiles/DSEM/Building/Generator%20Requirements%20for%20FBC%208th%20Edition%20(2023)%20and%20NEC%202020.pdf — example AHJ permit requirements tying load management to generator-vs-main-breaker sizing.
- https://expertce.com/learn-articles/standby-generator-load-calculation-residential/ — continuing-education explainer on why a straight Article 220 calc oversizes generators.

**Consumer / trade guidance**
- https://www.consumerreports.org/home-garden/generators/buying-guide/ — generator category definitions and tested output ranges.
- https://www.cummins.com/news/2025/06/24/what-size-portable-generator-do-you-need-heres-how-decide — manufacturer's four-step load-inventory sizing method (June 2025).
- https://www.greenbuildingadvisor.com/question/air-vs-liquid-cooled-standby-generator-for-winter-outages — practitioner discussion of 3,600 vs 1,800 rpm wear mechanics. Forum commentary; used for mechanism, not numbers.

**Vendor-sourced estimates (labeled as such throughout)**
- https://btusize.com/calculators/generator-sizing/ — LRA × voltage method, soft-start reduction ranges.
- https://generatorpicker.com/appliances/central-ac-3-ton — 3-ton AC surge ranges.
- https://www.sheltervolt.com/blog/can-you-run-central-air-on-a-generator — how to read LRA off a condenser data plate.
- https://sizemygenerator.com/well-pump-starting-watts/ — well pump running/starting watt ranges by horsepower.
- https://www.fergusonhome.com/generac-rxsw200a3/s1449472 — retail listing for Generac 200 A service-disconnect ATS: DPM, four HVAC loads, open transition, withstand rating.
- https://buckeyepowersystems.com/pages/choosing-the-right-transfer-switch — dealer explainer on service-entrance vs non-service-entrance ATS sizing (100/200/400 A).
