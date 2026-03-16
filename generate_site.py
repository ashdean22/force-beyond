#!/usr/bin/env python3
"""
CastAlloy Static Site Generator
Generates all HTML pages from templates + data for GitHub Pages deployment.
"""
import os, json

# ============================================================
# DATA
# ============================================================

COMPANY = {
    "name": "CastAlloy",
    "tagline": "Engineering Design, Development &amp; Supply Chain Management",
    "phone": "(302) 995-6588",
    "email": "contact@cast-alloy.com",
    "address": "New Castle, Delaware, USA",
    "locations": "USA · China · Taiwan · Vietnam · South Korea",
    "certifications": "ISO 9001:2015 Certified",
    "experience": "30+ Years of Manufacturing Excellence",
    "ga_id": "G-DNSN4CQVL3",  # Replace with real GA4 ID
}

NAV_LINKS = [
    {"label": "Home", "href": "/"},
    {"label": "Services", "href": "/services/", "children": [
        {"label": "Die Casting", "href": "/services/die-casting/"},
        {"label": "Investment Casting", "href": "/services/investment-casting/"},
        {"label": "Sand Casting", "href": "/services/sand-casting/"},
        {"label": "Hot Forging", "href": "/services/hot-forging/"},
        {"label": "Cold Forging", "href": "/services/cold-forging/"},
        {"label": "CNC Machining", "href": "/services/cnc-machining/"},
        {"label": "Supply Chain Management", "href": "/services/supply-chain-management/"},
    ]},
    {"label": "Materials", "href": "/materials/", "children": [
        {"label": "Superalloys", "href": "/materials/superalloys/"},
        {"label": "Inconel", "href": "/materials/inconel/"},
        {"label": "Titanium", "href": "/materials/titanium/"},
    ]},
    {"label": "Industries", "href": "/industries/"},
    {"label": "Resources", "href": "/resources/"},
    {"label": "About", "href": "/about/"},
    {"label": "Contact", "href": "/contact/"},
]

# 14 target keyword pages
KEYWORD_PAGES = [
    {
        "slug": "superalloys-casting",
        "dir": "services",
        "title": "Superalloys Casting Services",
        "h1": "Superalloys Casting Services – Precision Investment Casting",
        "meta_desc": "CastAlloy provides custom superalloy casting services using vacuum investment casting for aerospace, power generation, and nuclear applications. ISO 9001 certified. Request a quote.",
        "hero_text": "High-integrity superalloy investment castings for the most demanding applications in aerospace, energy, and defense.",
        "keywords": "superalloys casting, superalloy investment casting, vacuum casting superalloys, nickel-based alloy casting",
        "hub": "superalloys",
        "content_sections": [
            {"heading": "What Is Superalloy Casting?", "body": "Superalloy casting is a specialized manufacturing process that produces complex components from nickel-based, cobalt-based, and iron-based high-temperature alloys. These alloys maintain exceptional mechanical strength, creep resistance, and corrosion resistance at temperatures exceeding 1,000°F (540°C). At CastAlloy, we utilize vacuum induction melting (VIM) combined with investment casting to achieve near-net-shape geometries with superior metallurgical integrity. Our process eliminates the harmful oxide inclusions that form when reactive superalloys are exposed to atmospheric oxygen during melting and pouring. The result is a casting with optimized grain structure and mechanical properties suitable for safety-critical applications in gas turbines, nuclear reactors, and chemical processing environments."},
            {"heading": "Our Superalloy Casting Process", "body": "Our superalloy casting capabilities encompass the full range of investment casting techniques. We begin with precision wax pattern creation using injection molding, followed by ceramic shell building through repeated dipping in refractory slurries. The shell is then dewaxed and pre-heated before receiving molten superalloy poured under vacuum conditions. Post-casting operations include hot isostatic pressing (HIP) to eliminate internal microporosity, heat treatment to optimize mechanical properties, and precision CNC machining to achieve final dimensional tolerances. We cast wall thicknesses as thin as 0.030 inches (0.75mm) and components weighing from a few grams to nearly one metric ton."},
            {"heading": "Superalloy Grades We Cast", "body": "We work with a comprehensive range of superalloy grades selected for specific performance requirements. Inconel 718 and 625 are our most frequently cast nickel-based alloys, offering excellent strength and corrosion resistance for gas turbine and chemical processing applications. Hastelloy X provides exceptional oxidation resistance for combustion liners and transition ducts. MAR-M-247 and IN 713C deliver high creep strength for turbine blades and blisks operating at extreme temperatures. Our cobalt-based alloy castings serve applications requiring superior wear resistance and sulfidation resistance. Each alloy selection is guided by the specific thermal, mechanical, and chemical environment of the end-use application."},
            {"heading": "Industries Served", "body": "Our superalloy castings serve critical roles across multiple high-performance industries. In aerospace, we supply turbine engine components including nozzle guide vanes, shrouds, and combustor liners. For power generation, we cast gas turbine hot-section components, valve bodies, and heat exchanger parts. The nuclear industry relies on our castings for reactor internals and control rod mechanisms, while the oil and gas sector uses our products for downhole tools, valve trim, and pump components designed to withstand corrosive well environments at elevated temperatures and pressures."},
        ],
        "specs_table": [
            ["Alloy Family", "Nickel-based, Cobalt-based, Iron-based"],
            ["Casting Method", "Vacuum Investment Casting (VIM)"],
            ["Wall Thickness", "As thin as 0.030\" (0.75mm)"],
            ["Weight Range", "Few grams to ~1 metric ton"],
            ["Post-Processing", "HIP, Heat Treatment, CNC Machining"],
            ["Tolerances", "±0.005\" per inch (standard)"],
            ["Certifications", "ISO 9001:2015, AS9100 compatible"],
        ],
        "faqs": [
            {"q": "What temperature can superalloy castings withstand?", "a": "Our superalloy castings are engineered for continuous service at temperatures exceeding 1,000°F (540°C), with some nickel-based grades rated for service up to 2,000°F (1,093°C) depending on stress conditions and environment."},
            {"q": "Why use vacuum casting for superalloys?", "a": "Vacuum casting prevents the formation of harmful oxide inclusions in reactive alloys like Inconel and titanium. Melting and pouring in a high-vacuum environment ensures the highest metallurgical purity, resulting in superior mechanical properties and fatigue life."},
            {"q": "What is the lead time for superalloy castings?", "a": "Typical lead times range from 8-16 weeks depending on complexity, quantity, and alloy selection. We offer expedited production for urgent requirements. Contact us for a specific timeline based on your project."},
            {"q": "Do you offer prototyping for superalloy castings?", "a": "Yes, we support rapid prototyping services for superalloy castings. We can produce prototype quantities using the same investment casting process as production runs, ensuring design validation with production-representative parts."},
            {"q": "What quality certifications do you hold?", "a": "CastAlloy is ISO 9001:2015 certified with processes aligned to AS9100 aerospace quality standards. We maintain full material traceability, PPAP documentation, and can support IATF 16949 requirements for automotive applications."},
        ],
    },
    {
        "slug": "superalloys-forging",
        "dir": "services",
        "title": "Superalloys Forging Services",
        "h1": "Superalloys Forging – High-Strength Components for Extreme Environments",
        "meta_desc": "Custom superalloy forging services from CastAlloy. Hot forging and isothermal forging of nickel-based and cobalt-based alloys for aerospace, energy, and defense. Get a quote.",
        "hero_text": "Forged superalloy components delivering maximum strength, fatigue resistance, and reliability for mission-critical applications.",
        "keywords": "superalloys forging, superalloy hot forging, nickel alloy forging, high-temperature forging",
        "hub": "superalloys",
        "content_sections": [
            {"heading": "What Is Superalloy Forging?", "body": "Superalloy forging is a metal forming process that uses controlled compressive forces to shape nickel-based, cobalt-based, and iron-based high-temperature alloys into high-strength components. Unlike casting, forging refines the grain structure of the metal through plastic deformation, producing parts with superior fatigue strength, impact resistance, and directional mechanical properties. At CastAlloy, we offer both open-die and closed-die forging of superalloys, with forging press capacities from 800 to over 2,000 metric tons. Our isothermal forging capability maintains the workpiece at elevated temperature throughout the forming process, which is critical for achieving proper material flow in low-ductility superalloys."},
            {"heading": "Forging Process & Capabilities", "body": "Our superalloy forging process begins with careful billet preparation and heating to the precise forging temperature window for each alloy. For nickel-based superalloys like Inconel 718, this typically ranges from 1,700°F to 2,050°F depending on the desired microstructure. We utilize medium-frequency induction furnaces for uniform heating, followed by forging on hydraulic or mechanical presses. Post-forging heat treatments including solution annealing and aging are performed to optimize the final mechanical properties. Our CNC machining centers then bring forged components to final dimensional specifications with tight tolerances."},
            {"heading": "Materials & Applications", "body": "We forge a comprehensive range of superalloy grades including Inconel 718, Inconel 625, Waspaloy, Hastelloy, René alloys, and various cobalt-based compositions. These forged components serve demanding applications in jet engine discs and shafts, industrial gas turbine rotors, nuclear reactor vessel internals, oil and gas subsea equipment, and high-pressure chemical processing vessels. The inherent strength advantage of forged components over cast alternatives makes forging the preferred process for rotating parts, pressure-containing components, and any application where fatigue life is the primary design driver."},
            {"heading": "Why Choose CastAlloy for Superalloy Forging?", "body": "CastAlloy combines 30+ years of metallurgical expertise with globally integrated manufacturing resources to deliver superior quality superalloy forgings at competitive costs. Our engineering team collaborates with customers from initial design through production, optimizing forging parameters and die designs to maximize material yield and minimize machining allowances. With ISO 9001:2015 certification and processes aligned to aerospace quality standards, we ensure full traceability and documentation for every forged component. Our US headquarters in Delaware provides responsive local support, while our global manufacturing network delivers cost-efficient production volumes."},
        ],
        "specs_table": [
            ["Forging Type", "Open-die, Closed-die, Isothermal"],
            ["Press Capacity", "800 – 2,000+ metric tons"],
            ["Materials", "Inconel, Hastelloy, Waspaloy, Cobalt alloys"],
            ["Weight Range", "Few grams to several hundred kg"],
            ["Heating Method", "Medium-frequency induction furnace"],
            ["Post-Processing", "Heat treatment, CNC machining, NDT"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "What is the advantage of forged superalloys over cast?", "a": "Forging refines the grain structure through plastic deformation, producing components with 20-40% higher fatigue strength and superior impact resistance compared to castings of the same alloy. Forged parts are preferred for rotating components and pressure-critical applications."},
            {"q": "What size superalloy forgings can you produce?", "a": "Our forging capabilities range from small precision forgings of a few grams to large industrial components weighing several hundred kilograms. Press capacities up to 2,000+ metric tons accommodate a wide range of part sizes."},
            {"q": "Do you provide near-net-shape superalloy forgings?", "a": "Yes, our closed-die and isothermal forging processes produce near-net-shape components that minimize machining allowances, reducing material waste and overall production costs."},
        ],
    },
    {
        "slug": "superalloys-machining",
        "dir": "services",
        "title": "Superalloys Machining Services",
        "h1": "Superalloys Machining – Precision CNC Machining for High-Temperature Alloys",
        "meta_desc": "Expert superalloy CNC machining services from CastAlloy. 5-axis precision machining of Inconel, Hastelloy, and other nickel-based alloys. ISO 9001 certified.",
        "hero_text": "High-precision CNC machining of superalloys with tight tolerances and superior surface finishes for aerospace and energy applications.",
        "keywords": "superalloys machining, CNC machining superalloys, nickel alloy machining, Inconel machining services",
        "hub": "superalloys",
        "content_sections": [
            {"heading": "Superalloy Machining Expertise", "body": "Machining superalloys presents unique challenges due to their high strength, work-hardening tendency, low thermal conductivity, and abrasive carbide content. At CastAlloy, our CNC machining centers are equipped with the specialized tooling, coolant systems, and programming expertise needed to efficiently machine these demanding materials. We provide precision machining services on both cast and forged superalloy components, achieving tight dimensional tolerances and excellent surface finishes. Our capabilities include 3-axis and multi-axis CNC milling, CNC turning, drilling, boring, and grinding operations tailored to the specific characteristics of each superalloy grade."},
            {"heading": "Materials We Machine", "body": "Our machining expertise covers the full spectrum of superalloy families. Nickel-based alloys including Inconel 718, Inconel 625, Hastelloy X, Hastelloy C-276, Waspaloy, and René 41 represent the majority of our superalloy machining volume. We also machine cobalt-based alloys such as Stellite grades and L-605, as well as iron-based superalloys like A-286. Each material requires specific cutting parameters, tool geometries, and machining strategies that our engineering team has refined through decades of production experience."},
            {"heading": "Quality & Inspection", "body": "Every machined superalloy component undergoes rigorous quality inspection using our comprehensive equipment suite including coordinate measuring machines (CMM), optical projectors, surface profilometers, and X-ray NDT systems. We maintain full dimensional and material traceability through our ISO 9001:2015 quality management system. First-article inspection reports, PPAP documentation, and certificates of conformance are provided with every order."},
        ],
        "specs_table": [
            ["Equipment", "CNC machining centers, CNC lathes, CNC mills"],
            ["Axes", "3-axis through multi-axis capability"],
            ["Materials", "Inconel, Hastelloy, Waspaloy, Stellite, A-286"],
            ["Tolerances", "As tight as ±0.0005\" on critical features"],
            ["Surface Finish", "Down to 16 Ra µin (0.4 Ra µm)"],
            ["Inspection", "CMM, Optical, X-ray NDT, Spectrometer"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "Why is superalloy machining more difficult than standard metals?", "a": "Superalloys have high strength at temperature, rapid work hardening, low thermal conductivity that concentrates heat at the cutting edge, and abrasive carbide particles that accelerate tool wear. These factors require specialized tooling, reduced cutting speeds, and rigid machine setups."},
            {"q": "What tolerances can you achieve on superalloy parts?", "a": "We routinely achieve tolerances of ±0.001\" on general dimensions and ±0.0005\" on critical features. Surface finishes down to 16 Ra µin are achievable depending on the specific alloy and geometry."},
        ],
    },
    {
        "slug": "inconel-casting",
        "dir": "services",
        "title": "Inconel Casting Services",
        "h1": "Inconel Casting – Vacuum Precision Investment Casting Services",
        "meta_desc": "CastAlloy specializes in Inconel investment casting including Inconel 718 and 625. Vacuum precision casting for aerospace, gas turbines, and nuclear applications.",
        "hero_text": "Industry-leading Inconel investment casting with vacuum melting technology for components that perform in extreme heat and corrosive environments.",
        "keywords": "inconel casting, inconel investment casting, inconel 718 casting, inconel 625 casting, vacuum casting inconel",
        "hub": "inconel",
        "content_sections": [
            {"heading": "What Is Inconel Casting?", "body": "Inconel casting is the process of producing complex components from Inconel-family nickel-chromium superalloys using investment casting (lost-wax) methods. Inconel alloys are renowned for their exceptional resistance to high temperatures, oxidation, and corrosion, making them indispensable in gas turbines, nuclear reactors, chemical processing equipment, and marine applications. At CastAlloy, we cast Inconel components using vacuum induction melting (VIM) to prevent oxide contamination and ensure maximum metallurgical quality. Our investment casting process produces near-net-shape parts with complex internal passages, thin walls, and intricate geometries that would be extremely difficult or impossible to achieve through forging or machining alone."},
            {"heading": "Inconel Grades We Cast", "body": "We cast all major Inconel grades, each optimized for specific service conditions. Inconel 718 is our most commonly cast grade, offering an excellent combination of high-temperature strength, fatigue resistance, and weldability for gas turbine discs, blades, and fasteners. Inconel 625 delivers outstanding corrosion resistance and is widely used in marine, chemical processing, and pollution control equipment. Inconel 713C provides superior creep resistance for turbine wheels and blisks. Inconel 600 and 601 serve high-temperature oxidation resistance applications in furnace hardware and heat-treating equipment. Our metallurgical team helps customers select the optimal Inconel grade for their specific temperature, stress, and environmental requirements."},
            {"heading": "Casting Capabilities & Tolerances", "body": "Our Inconel casting capabilities include components ranging from a few grams to nearly one metric ton, with wall thicknesses as thin as 0.030 inches (0.75mm). Standard linear tolerances follow the investment casting industry standard of ±0.010\" for the first inch, plus ±0.003\" per additional inch up to ten inches. Tighter tolerances are achievable on critical features through secondary CNC machining. Post-casting processes include hot isostatic pressing (HIP) to eliminate internal porosity, full heat treatment cycles per AMS specifications, and non-destructive testing including X-ray, FPI, and dimensional inspection on CMM."},
            {"heading": "Applications of Inconel Castings", "body": "Inconel castings from CastAlloy serve safety-critical applications across aerospace (turbine nozzle guide vanes, combustor liners, exhaust components), power generation (gas turbine hot-section parts, steam turbine valve bodies), nuclear energy (reactor vessel internals, control rod mechanisms, heat exchangers), oil and gas (subsea valve bodies, downhole tools, wellhead components), and chemical processing (reactor vessels, heat exchangers, piping components). Our castings meet the stringent quality requirements of these industries through comprehensive process controls and full material traceability."},
        ],
        "specs_table": [
            ["Primary Grades", "Inconel 718, 625, 713C, 600, 601"],
            ["Casting Method", "Vacuum Investment Casting (VIM)"],
            ["Weight Range", "Few grams to ~1 metric ton"],
            ["Wall Thickness", "As thin as 0.030\" (0.75mm)"],
            ["Tolerances", "±0.010\" first inch, ±0.003\"/inch additional"],
            ["Post-Processing", "HIP, Heat Treatment, CNC Machining, NDT"],
            ["Testing", "X-ray, FPI, CMM, Spectrometry"],
        ],
        "faqs": [
            {"q": "What is the difference between Inconel 718 and Inconel 625 castings?", "a": "Inconel 718 is a precipitation-hardened alloy offering higher strength (up to 180 ksi tensile) and is ideal for structural components like turbine discs. Inconel 625 is a solid-solution strengthened alloy with superior corrosion resistance, particularly in marine and chemical environments, but with lower maximum strength (around 120 ksi)."},
            {"q": "Can you cast complex internal geometries in Inconel?", "a": "Yes, investment casting excels at producing complex internal passages, thin walls, and intricate shapes. Ceramic cores can create internal cooling channels and hollow features that are impossible to machine conventionally."},
            {"q": "What industries use Inconel castings?", "a": "Aerospace (gas turbines, rocket engines), power generation, nuclear energy, oil and gas, chemical processing, and marine applications all rely on Inconel castings for components that must perform reliably in extreme heat and corrosive environments."},
            {"q": "How do you ensure quality in Inconel castings?", "a": "Our quality system includes vacuum melting to prevent contamination, HIP to eliminate porosity, full heat treatment per AMS specs, X-ray and FPI non-destructive testing, CMM dimensional inspection, and chemical analysis verification. All processes are documented under our ISO 9001:2015 system."},
        ],
    },
    {
        "slug": "inconel-forging",
        "dir": "services",
        "title": "Inconel Forging Services",
        "h1": "Inconel Forging – Custom Hot Forging of Inconel Alloys",
        "meta_desc": "CastAlloy provides custom Inconel forging services including Inconel 718 and 625. Hot forging and isothermal forging for aerospace, oil & gas, and power generation.",
        "hero_text": "High-performance Inconel forgings engineered for maximum strength and reliability in the world's most demanding operating environments.",
        "keywords": "inconel forging, inconel 718 forging, inconel 625 forging, nickel alloy forging",
        "hub": "inconel",
        "content_sections": [
            {"heading": "Inconel Forging Expertise", "body": "Inconel forging shapes nickel-chromium superalloys through controlled compressive forces at elevated temperatures, producing components with refined grain structures and superior mechanical properties compared to castings. Forged Inconel parts exhibit higher fatigue strength, better impact resistance, and more uniform directional properties—making forging the preferred manufacturing process for rotating components, pressure-containing parts, and fatigue-critical applications. CastAlloy's forging capabilities cover the full range of Inconel alloys with press capacities from 800 to over 2,000 metric tons."},
            {"heading": "Forging Process for Inconel", "body": "Inconel alloys require precise temperature control during forging due to their narrow forging windows and high flow stress. Inconel 718 is typically forged between 1,700°F and 2,050°F, while Inconel 625 forging temperatures range from 1,700°F to 2,150°F. We use medium-frequency induction heating for uniform temperature distribution, followed by forming on hydraulic presses with controlled strain rates. For alloys with particularly low forgeability, we employ isothermal forging techniques where the dies are maintained at elevated temperatures to prevent workpiece cooling and cracking during deformation."},
            {"heading": "Applications & Industries", "body": "Forged Inconel components serve critical roles in aerospace (turbine discs, compressor blades, engine shafts, fasteners), oil and gas (subsea connectors, wellhead forgings, valve bodies rated for sour service), power generation (gas turbine rotor forgings, steam turbine blading, nuclear reactor components), and chemical processing (high-pressure reactor vessels, heat exchanger tubesheets, pump shafts). The combination of Inconel's corrosion resistance with forging's mechanical property advantages makes these components essential for safety-critical and high-reliability applications."},
        ],
        "specs_table": [
            ["Alloys", "Inconel 718, 625, 600, 601, 690, X-750"],
            ["Forging Type", "Open-die, Closed-die, Isothermal"],
            ["Press Capacity", "800 – 2,000+ metric tons"],
            ["Temperature Range", "1,700°F – 2,150°F (alloy dependent)"],
            ["Post-Processing", "Solution annealing, aging, CNC machining"],
            ["Testing", "Ultrasonic, X-ray, mechanical testing, CMM"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "When should I choose Inconel forging over casting?", "a": "Choose forging when your application requires maximum fatigue strength, impact resistance, or when the component will experience rotating loads or high cyclic stresses. Turbine discs, shafts, and high-pressure valve bodies are typically forged rather than cast."},
            {"q": "What Inconel grades are best suited for forging?", "a": "Inconel 718 is the most widely forged Inconel alloy due to its good forgeability and excellent strength after aging heat treatment. Inconel 625, 600, and X-750 are also commonly forged for various high-temperature and corrosion-resistant applications."},
        ],
    },
    {
        "slug": "inconel-718-forging",
        "dir": "services",
        "title": "Inconel 718 Forging Services",
        "h1": "Inconel 718 Forging – Precision Hot Forging for Aerospace & Energy",
        "meta_desc": "Custom Inconel 718 forging from CastAlloy. Precision hot forging and isothermal forging of Inconel 718 for turbine discs, fasteners, and structural components.",
        "hero_text": "Precision-forged Inconel 718 components with optimized microstructure for maximum high-temperature performance.",
        "keywords": "inconel 718 forging, inconel 718 hot forging, nickel 718 forging, alloy 718 forging",
        "hub": "inconel",
        "content_sections": [
            {"heading": "Inconel 718 Forging Services", "body": "Inconel 718 (UNS N07718) is the most widely used precipitation-hardened nickel-based superalloy, accounting for approximately 30% of all superalloy production worldwide. Its unique combination of high strength (tensile strength up to 180 ksi), excellent fatigue life, good weldability, and corrosion resistance makes it the material of choice for critical rotating and structural components in aerospace and power generation. CastAlloy's Inconel 718 forging services deliver components with refined grain structures and directional mechanical properties that exceed the capabilities of cast equivalents."},
            {"heading": "Material Properties & Specifications", "body": "Inconel 718 achieves its exceptional properties through precipitation hardening with gamma-prime (Ni3Nb) and gamma-double-prime (Ni3(Al,Ti)) phases. The alloy maintains useful strength up to approximately 1,300°F (704°C). Key specifications include AMS 5662/5663 for bars, AMS 5664 for forgings, and ASTM B637 for general requirements. After solution treatment at 1,750°F and double aging (1,325°F + 1,150°F), Inconel 718 typically achieves tensile strength of 180+ ksi, yield strength of 150+ ksi, and elongation of 12% minimum."},
            {"heading": "Forging Process & Capabilities", "body": "Inconel 718 has a relatively narrow forging temperature window of 1,700°F to 2,050°F. Forging below this range risks cracking due to insufficient ductility, while forging above this range causes grain coarsening that degrades mechanical properties. Our presses deliver controlled strain rates and deformation sequences optimized for Inconel 718's flow characteristics. We produce open-die, closed-die, and ring-rolled forgings with weights from a few pounds to several hundred kilograms. Post-forging heat treatments are performed in calibrated furnaces with precise temperature control to achieve the specified microstructure and mechanical properties."},
        ],
        "specs_table": [
            ["UNS Designation", "N07718"],
            ["Specifications", "AMS 5662, 5663, 5664; ASTM B637"],
            ["Forging Temperature", "1,700°F – 2,050°F"],
            ["Tensile Strength", "180+ ksi (aged condition)"],
            ["Yield Strength", "150+ ksi (aged condition)"],
            ["Max Service Temp", "~1,300°F (704°C)"],
            ["Common Forms", "Discs, rings, shafts, bars, custom shapes"],
        ],
        "faqs": [
            {"q": "What is the maximum service temperature for Inconel 718 forgings?", "a": "Inconel 718 maintains useful strength up to approximately 1,300°F (704°C). Above this temperature, the strengthening precipitates begin to dissolve and the alloy loses its age-hardened properties. For higher temperature applications, alloys like Waspaloy or IN 713C may be more appropriate."},
            {"q": "What specifications govern Inconel 718 forgings?", "a": "Inconel 718 forgings are typically produced to AMS 5664 (aerospace), ASTM B637, or customer-specific requirements. Heat treatment follows AMS 5663 or equivalent, with solution treatment at 1,750°F followed by a double aging cycle."},
        ],
    },
    {
        "slug": "inconel-718-machining",
        "dir": "services",
        "title": "Inconel 718 Machining Services",
        "h1": "Inconel 718 Machining – Expert CNC Machining Services",
        "meta_desc": "Precision Inconel 718 CNC machining from CastAlloy. Expert machining of the world's most popular superalloy for aerospace, energy, and defense applications.",
        "hero_text": "Precision CNC machining of Inconel 718 with optimized cutting strategies for superior surface quality and dimensional accuracy.",
        "keywords": "inconel 718 machining, CNC machining inconel 718, inconel 718 milling, inconel 718 turning",
        "hub": "inconel",
        "content_sections": [
            {"heading": "Inconel 718 Machining Excellence", "body": "Inconel 718 is one of the most challenging materials to machine due to its high-temperature strength, rapid work hardening, low thermal conductivity, and tendency to form built-up edge on cutting tools. At CastAlloy, we have developed optimized machining strategies refined through decades of production experience. Our CNC machining centers, equipped with high-pressure coolant systems and ceramic/CBN tooling, deliver precise dimensional tolerances and excellent surface finishes on Inconel 718 components. We machine both cast and forged Inconel 718 blanks to final specifications."},
            {"heading": "Machining Capabilities", "body": "Our Inconel 718 machining capabilities include multi-axis CNC milling for complex contours and pockets, CNC turning for rotational components, precision drilling and tapping, surface grinding, and EDM for intricate features. We achieve tolerances as tight as ±0.0005\" on critical dimensions and surface finishes down to 16 Ra µin. Our programming team uses advanced CAM software to optimize tool paths for maximum material removal rates while maintaining tool life and surface integrity—critical factors when machining expensive superalloy components."},
            {"heading": "Quality Assurance", "body": "Every machined Inconel 718 component undergoes comprehensive quality inspection including CMM dimensional verification, surface roughness measurement, visual inspection per applicable standards, and material certification verification. We maintain full part traceability through our ISO 9001:2015 quality management system and provide complete documentation packages including first-article inspection reports, certificates of conformance, and material test reports."},
        ],
        "specs_table": [
            ["Operations", "CNC Milling, Turning, Drilling, Grinding, EDM"],
            ["Tolerances", "As tight as ±0.0005\""],
            ["Surface Finish", "Down to 16 Ra µin"],
            ["Tooling", "Carbide, Ceramic, CBN inserts"],
            ["Coolant", "High-pressure through-spindle coolant"],
            ["Inspection", "CMM, Surface profilometer, Optical"],
            ["Documentation", "FAI, CoC, MTR per ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "Why is Inconel 718 difficult to machine?", "a": "Inconel 718's high strength at temperature means cutting forces remain high. Its low thermal conductivity concentrates heat at the tool tip (up to 1,200°C), accelerating wear. Rapid work hardening creates a hardened layer that further increases cutting forces on subsequent passes. These factors require specialized tooling, reduced speeds, and rigid setups."},
            {"q": "What cutting tools work best for Inconel 718?", "a": "Ceramic and CBN inserts are preferred for roughing at higher speeds, while coated carbide tools with positive rake angles are used for finishing. High-pressure coolant (1,000+ psi through-spindle) is essential for chip evacuation and tool cooling."},
        ],
    },
    {
        "slug": "inconel-625-forging",
        "dir": "services",
        "title": "Inconel 625 Forging Services",
        "h1": "Inconel 625 Forging – Corrosion-Resistant Forgings for Marine & Chemical Applications",
        "meta_desc": "Custom Inconel 625 forging services from CastAlloy. Superior corrosion resistance for marine, chemical processing, and oil & gas applications. Request a quote.",
        "hero_text": "Forged Inconel 625 components engineered for exceptional corrosion resistance in the most aggressive chemical and marine environments.",
        "keywords": "inconel 625 forging, alloy 625 forging, nickel 625 forging",
        "hub": "inconel",
        "content_sections": [
            {"heading": "Inconel 625 Forging Services", "body": "Inconel 625 (UNS N06625) is a solid-solution strengthened nickel-chromium-molybdenum alloy renowned for its exceptional resistance to a wide range of corrosive environments, combined with good mechanical strength from cryogenic temperatures up to 1,800°F (982°C). CastAlloy's Inconel 625 forging services produce components with the refined grain structure and enhanced mechanical properties needed for demanding marine, chemical processing, and oil and gas applications."},
            {"heading": "Why Inconel 625?", "body": "Inconel 625 offers outstanding resistance to pitting, crevice corrosion, and stress corrosion cracking in chloride-bearing environments—making it the preferred material for seawater-exposed components, flue gas desulfurization systems, and sour gas processing. The alloy's high molybdenum content (8-10%) provides excellent resistance to chloride ion attack, while its chromium content (20-23%) ensures oxidation resistance at elevated temperatures. Unlike precipitation-hardened alloys, Inconel 625 maintains its corrosion resistance regardless of heat treatment condition."},
            {"heading": "Applications", "body": "Our forged Inconel 625 components serve applications in subsea oil and gas equipment (connectors, hubs, valve bodies), chemical processing (reactor vessels, heat exchangers, piping), marine engineering (propeller shafts, seawater systems), aerospace exhaust systems, and pollution control equipment. The combination of corrosion resistance and mechanical strength makes Inconel 625 forgings essential wherever components face aggressive chemical environments combined with mechanical loading."},
        ],
        "specs_table": [
            ["UNS Designation", "N06625"],
            ["Specifications", "AMS 5666, ASTM B564"],
            ["Tensile Strength", "120-150 ksi"],
            ["Max Service Temp", "~1,800°F (982°C)"],
            ["Key Resistance", "Pitting, crevice corrosion, SCC"],
            ["Typical Applications", "Subsea, chemical, marine, exhaust"],
        ],
        "faqs": [
            {"q": "What is the difference between Inconel 625 and Inconel 718 forgings?", "a": "Inconel 625 is solid-solution strengthened and offers superior corrosion resistance, especially in chloride environments. Inconel 718 is precipitation-hardened, providing higher mechanical strength (180+ ksi vs 120-150 ksi) but with somewhat less corrosion resistance. Choose 625 when corrosion is the primary concern; choose 718 when strength is critical."},
        ],
    },
    {
        "slug": "inconel-625-machining",
        "dir": "services",
        "title": "Inconel 625 Machining Services",
        "h1": "Inconel 625 Machining – Precision CNC Machining Services",
        "meta_desc": "Expert Inconel 625 CNC machining from CastAlloy. Precision turning, milling, and drilling for marine, chemical, and oil & gas components. ISO 9001 certified.",
        "hero_text": "Precision machining of Inconel 625 for corrosion-resistant components in marine, chemical, and energy applications.",
        "keywords": "inconel 625 machining, CNC machining inconel 625, alloy 625 machining",
        "hub": "inconel",
        "content_sections": [
            {"heading": "Inconel 625 Machining Services", "body": "Inconel 625 presents distinct machining challenges including high work-hardening rates, adhesion to cutting tools, and the alloy's inherent toughness that demands rigid setups and optimized cutting parameters. CastAlloy's machining team has extensive experience with Inconel 625, utilizing specialized carbide and ceramic tooling, high-pressure coolant systems, and carefully calibrated feeds and speeds to deliver dimensionally accurate components with excellent surface finishes."},
            {"heading": "Capabilities", "body": "We provide comprehensive Inconel 625 machining services including CNC turning for shafts, sleeves, and cylindrical components; multi-axis CNC milling for complex geometries; precision drilling and tapping; thread milling; and surface grinding. Our operations handle both roughing from near-net-shape forgings/castings and finish machining to final specifications with tolerances as tight as ±0.0005 inches on critical features."},
        ],
        "specs_table": [
            ["Operations", "CNC Turning, Milling, Drilling, Grinding"],
            ["Tolerances", "As tight as ±0.0005\""],
            ["Surface Finish", "Down to 16 Ra µin"],
            ["Inspection", "CMM, Surface profilometer, NDT"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "Is Inconel 625 harder to machine than 718?", "a": "While both are challenging, Inconel 625 can be slightly easier to machine in the annealed condition due to its lower hardness. However, its high work-hardening rate means that improper parameters can quickly create a hardened surface layer, so optimized cutting strategies remain essential."},
        ],
    },
    {
        "slug": "titanium-casting",
        "dir": "services",
        "title": "Titanium Casting Services",
        "h1": "Titanium Casting – Precision Investment Casting for Aerospace & Medical",
        "meta_desc": "CastAlloy provides custom titanium investment casting services for aerospace, medical, and defense applications. Grade 2, Grade 5 Ti-6Al-4V, and more.",
        "hero_text": "Lightweight, high-strength titanium castings for the most demanding applications in aerospace, defense, and medical devices.",
        "keywords": "titanium casting, titanium investment casting, Ti-6Al-4V casting, Grade 5 titanium casting",
        "hub": "titanium",
        "content_sections": [
            {"heading": "Titanium Casting Services", "body": "Titanium and its alloys offer an exceptional strength-to-weight ratio, outstanding corrosion resistance, and biocompatibility that make them essential materials for aerospace structures, medical implants, marine hardware, and chemical processing equipment. CastAlloy provides precision titanium investment casting using vacuum arc melting and inert atmosphere pouring to produce defect-free components with excellent mechanical properties. Our titanium casting capabilities cover commercially pure grades (Grade 1, 2, 3, 4) as well as the workhorse aerospace alloy Ti-6Al-4V (Grade 5)."},
            {"heading": "Why Investment Cast Titanium?", "body": "Investment casting is often the most cost-effective method for producing complex titanium components. Titanium's high cost per pound and extreme difficulty to machine make near-net-shape casting highly advantageous—reducing material waste and expensive machining time compared to machining from wrought bar stock. Our investment casting process produces titanium components with wall thicknesses as thin as 0.040 inches, complex internal passages, and intricate external geometries with tolerances comparable to other investment cast alloys."},
            {"heading": "Titanium Grades & Applications", "body": "Grade 2 CP (commercially pure) titanium castings serve applications requiring excellent corrosion resistance without high strength demands, such as chemical processing equipment, marine hardware, and heat exchangers. Grade 5 Ti-6Al-4V is the most widely used titanium alloy, combining high strength (130+ ksi tensile), low density, and good elevated temperature performance for aerospace structural components, turbine blades, medical orthopedic implants, and high-performance sporting goods. We also cast Grade 23 (Ti-6Al-4V ELI) for medical implant applications requiring enhanced fracture toughness."},
        ],
        "specs_table": [
            ["Grades", "CP Grade 2, Grade 5 Ti-6Al-4V, Grade 23 ELI"],
            ["Casting Method", "Vacuum Arc / Inert Atmosphere Investment Casting"],
            ["Weight Range", "Ounces to 50+ pounds"],
            ["Wall Thickness", "As thin as 0.040\""],
            ["Tolerances", "±0.010\" first inch, ±0.003\"/inch additional"],
            ["Post-Processing", "HIP, Heat Treatment, CNC Machining"],
            ["Applications", "Aerospace, Medical, Marine, Chemical"],
        ],
        "faqs": [
            {"q": "Why must titanium be cast in vacuum or inert atmosphere?", "a": "Titanium is extremely reactive with oxygen and nitrogen at casting temperatures. Exposure to air creates brittle oxide and nitride inclusions that severely degrade mechanical properties. Vacuum or inert gas (argon) environments prevent contamination and ensure metallurgical integrity."},
            {"q": "Is titanium casting suitable for medical implants?", "a": "Yes, titanium's biocompatibility makes it ideal for orthopedic implants, dental implants, and surgical instruments. We cast Grade 23 (Ti-6Al-4V ELI) which is specifically designed for implant applications with enhanced fracture toughness and fatigue resistance."},
        ],
    },
    {
        "slug": "titanium-forging",
        "dir": "services",
        "title": "Titanium Forging Services",
        "h1": "Titanium Forging – High-Strength Forged Titanium Components",
        "meta_desc": "Custom titanium forging services from CastAlloy. Hot forging of Ti-6Al-4V and other titanium alloys for aerospace, defense, and medical applications.",
        "hero_text": "Precision titanium forgings delivering the ultimate combination of light weight, high strength, and corrosion resistance.",
        "keywords": "titanium forging, Ti-6Al-4V forging, Grade 5 titanium forging, titanium hot forging",
        "hub": "titanium",
        "content_sections": [
            {"heading": "Titanium Forging Services", "body": "Titanium forging produces the highest-performance titanium components available, combining the alloy's inherent light weight and corrosion resistance with the refined grain structure and enhanced mechanical properties that only forging can deliver. CastAlloy provides custom titanium hot forging services for applications where component integrity is critical, including aircraft structural members, landing gear components, turbine engine parts, medical implants, and high-performance racing components."},
            {"heading": "Forging Process", "body": "Titanium alloys are forged at temperatures between 1,500°F and 1,750°F depending on the specific grade and desired microstructure (alpha-beta or beta forging). Our medium-frequency induction heating ensures uniform temperature throughout the billet, while precision-controlled hydraulic presses deliver the deformation needed to achieve optimal grain refinement. Titanium's reactivity requires careful attention to atmosphere control and lubrication during forging. Post-forging heat treatments are critical—solution treatment and aging cycles are tailored to achieve the specified combination of strength, ductility, and fracture toughness."},
            {"heading": "Materials & Applications", "body": "Ti-6Al-4V (Grade 5) accounts for the majority of our titanium forging production, serving aerospace structures, engine components, and medical implants. Ti-6Al-4V ELI (Grade 23) is forged for medical devices requiring enhanced biocompatibility. Commercial purity grades are forged for chemical processing equipment. Beta titanium alloys like Ti-10V-2Fe-3Al are forged for high-strength aerospace landing gear and structural applications. The weight savings of titanium forgings over steel—approximately 40% at equivalent strength—drives adoption across weight-sensitive aerospace and automotive racing applications."},
        ],
        "specs_table": [
            ["Primary Grades", "Ti-6Al-4V, Ti-6Al-4V ELI, CP Grade 2, Ti-10V-2Fe-3Al"],
            ["Forging Temperature", "1,500°F – 1,750°F"],
            ["Forging Type", "Open-die, Closed-die"],
            ["Press Capacity", "800 – 2,000+ metric tons"],
            ["Tensile Strength", "130+ ksi (Ti-6Al-4V, aged)"],
            ["Weight Savings", "~40% lighter than equivalent steel"],
            ["Applications", "Aerospace structures, medical implants, racing"],
        ],
        "faqs": [
            {"q": "Why are titanium forgings preferred over castings for aerospace structures?", "a": "Forging refines the grain structure through plastic deformation, producing components with superior fatigue strength and fracture toughness compared to castings. For fatigue-critical structural components like bulkheads and landing gear, forging is typically specified by aerospace OEMs."},
        ],
    },
    {
        "slug": "titanium-machining",
        "dir": "services",
        "title": "Titanium Machining Services",
        "h1": "Titanium Machining – Precision CNC Machining for Titanium Alloys",
        "meta_desc": "Expert titanium CNC machining services from CastAlloy. Precision milling, turning, and drilling of Ti-6Al-4V and other grades for aerospace and medical applications.",
        "hero_text": "Advanced CNC machining of titanium alloys with the tooling expertise and process control needed to deliver tight tolerances and excellent surface quality.",
        "keywords": "titanium machining, CNC machining titanium, Ti-6Al-4V machining, titanium milling",
        "hub": "titanium",
        "content_sections": [
            {"heading": "Titanium Machining Expertise", "body": "Titanium machining requires specialized expertise due to the material's low thermal conductivity, chemical reactivity with cutting tools, and spring-back tendency. At CastAlloy, we have refined our titanium machining processes through extensive production experience, utilizing sharp positive-rake carbide tooling, high-pressure coolant systems, and rigid workholding setups to deliver dimensionally accurate components with excellent surface integrity. We machine both cast and forged titanium blanks across all common grades."},
            {"heading": "Capabilities & Quality", "body": "Our titanium machining capabilities include multi-axis CNC milling, CNC turning, precision drilling and reaming, thread milling, and surface grinding. We achieve tolerances as tight as ±0.0005 inches and surface finishes to 16 Ra µin on titanium components. Quality inspection includes CMM verification, surface roughness measurement, and visual inspection per applicable aerospace and medical standards. Full documentation packages with FAI reports, CoC, and material certifications are provided with every shipment."},
        ],
        "specs_table": [
            ["Grades Machined", "Ti-6Al-4V, CP Grades 1-4, Grade 23 ELI"],
            ["Operations", "CNC Milling, Turning, Drilling, Grinding"],
            ["Tolerances", "As tight as ±0.0005\""],
            ["Surface Finish", "Down to 16 Ra µin"],
            ["Inspection", "CMM, Profilometer, Visual per standards"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "What makes titanium difficult to machine?", "a": "Titanium's low thermal conductivity causes heat to concentrate at the cutting edge rather than dissipating through chips. Combined with its chemical affinity for tool materials (causing galling and built-up edge) and its low elastic modulus (causing spring-back and chatter), titanium requires slower speeds, positive-rake sharp tools, rigid setups, and generous coolant flow."},
        ],
    },
    {
        "slug": "die-casting",
        "dir": "services",
        "title": "Die Casting Services",
        "h1": "Die Casting – Custom Aluminum & Zinc Die Casting Services",
        "meta_desc": "CastAlloy provides high-quality aluminum and zinc die casting services with machines from 180 to 2,000 metric tons. From prototype to production. Request a quote.",
        "hero_text": "High-volume, precision die castings in aluminum and zinc alloys—from a few grams to over 100 pounds, ready for assembly.",
        "keywords": "die casting, aluminum die casting, zinc die casting, custom die casting, die casting services",
        "hub": None,
        "content_sections": [
            {"heading": "Die Casting Services", "body": "CastAlloy provides superior quality custom die casting parts and components for a wide range of industries including automotive, food and dairy, machinery, medical, plumbing, mining, petrochemical, electrical, energy, and aerospace. Our die casting machines range from 180 to 2,000 metric tons, producing parts from a few grams to more than 100 pounds with superior quality ready for assembly. Die casting is a high-volume manufacturing process that forces molten metal under high pressure into precision steel molds, producing complex shapes with excellent dimensional accuracy and smooth surface finishes."},
            {"heading": "Materials & Finishes", "body": "We specialize in aluminum die casting and zinc die casting, each offering distinct advantages. Aluminum die castings provide excellent strength-to-weight ratio, corrosion resistance, and thermal conductivity for automotive, aerospace, and electronics housings. Zinc die castings offer superior dimensional accuracy, thinner wall capability, and lower tooling costs for high-volume applications including hardware, connectors, and consumer products. For parts requiring aesthetic, functional, or protective coatings, we offer a broad range of surface finishes including powder coating, e-coating, shot blasting, chrome plating, and bright finish."},
            {"heading": "Capabilities & Equipment", "body": "Our die casting facilities are equipped with machines from ZITAI/L.K., TOSHIBA, IDRA, and TOYO ranging from 180 to 2,000 metric tons. Supporting equipment includes central melting furnaces from 800kg to 4.5 metric tons, vacuum units, temperature control units, trimming and reshaping equipment, shot blasting, and sand blasting. Our CNC machine shops provide secondary machining operations to bring die cast parts to final specifications with tight tolerances."},
        ],
        "specs_table": [
            ["Materials", "Aluminum alloys, Zinc alloys"],
            ["Machine Range", "180 – 2,000 metric tons"],
            ["Part Weight", "Few grams to 100+ pounds"],
            ["Surface Finishes", "Powder coat, E-coat, Chrome, Shot blast"],
            ["Secondary Ops", "CNC machining, drilling, tapping"],
            ["Volume", "Prototype through high-volume production"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "What is the minimum order quantity for die castings?", "a": "We accommodate both low-volume prototype runs and high-volume production orders. Minimum quantities depend on part complexity and tooling investment. Contact us with your requirements for a detailed quotation."},
            {"q": "How long does die casting tooling take?", "a": "Typical die casting tool lead times range from 4-8 weeks depending on part complexity. We can often expedite tooling for urgent projects."},
        ],
    },
    {
        "slug": "investment-casting",
        "dir": "services",
        "title": "Investment Casting Services",
        "h1": "Investment Casting – Precision Lost-Wax Casting Services",
        "meta_desc": "CastAlloy provides high-quality investment casting (lost-wax casting) in stainless steel, titanium, Inconel, and more. From grams to 1 metric ton. ISO 9001 certified.",
        "hero_text": "Precision investment castings delivering complex geometries, tight tolerances, and smooth surface finishes across ferrous and non-ferrous alloys.",
        "keywords": "investment casting, lost wax casting, precision casting, stainless steel investment casting",
        "hub": None,
        "content_sections": [
            {"heading": "Investment Casting Services", "body": "CastAlloy provides high-quality custom ferrous and non-ferrous investment casting parts and components for a wide range of industries. Investment casting—also known as lost-wax casting—is a versatile process ideal for simple or complex, low or high volume production. We produce investment castings in stainless steel, duplex stainless steel, super duplex stainless steel, titanium, Inconel and other superalloys, carbon steel, tool steel, and aluminum alloys. Component weights range from a few grams to almost one metric ton, and we provide a broad range of secondary services including CNC machining and surface finishing."},
            {"heading": "The Investment Casting Process", "body": "Investment casting involves creating precision wax patterns through injection molding, assembling these patterns onto a gating system, then building a ceramic shell through repeated dipping in refractory slurries and stucco. The wax is melted out of the shell, which is then pre-heated and filled with molten metal. After cooling and shell removal, castings are cleaned, heat treated, and inspected. This process produces castings with excellent surface finish (125 Ra µin or better), tight tolerances (±0.010\" for the first inch), and the ability to create complex internal passages and thin walls that other processes cannot achieve economically."},
            {"heading": "Materials & Industries", "body": "Our investment casting materials include 300 and 400 series stainless steels, duplex and super duplex grades (2205, 2507), titanium (Grade 2, Grade 5), Inconel (718, 625, 713C), Hastelloy, carbon steels, and aluminum alloys. We serve automotive, food and dairy, machinery, medical, plumbing, mining, petrochemical, electrical, energy, aerospace, and marine industries with castings from ounces to 50+ pounds in standard production, and up to nearly one metric ton for large industrial components."},
        ],
        "specs_table": [
            ["Materials", "Stainless, Duplex SS, Titanium, Inconel, Carbon Steel, Aluminum"],
            ["Weight Range", "Few grams to ~1 metric ton"],
            ["Tolerances", "±0.010\" first inch, ±0.003\"/inch additional"],
            ["Surface Finish", "125 Ra µin or better (as-cast)"],
            ["Casting Method", "Conventional and Vacuum Investment Casting"],
            ["Secondary Ops", "HIP, Heat Treatment, CNC Machining, NDT"],
            ["Certifications", "ISO 9001:2015"],
        ],
        "faqs": [
            {"q": "What are the advantages of investment casting?", "a": "Investment casting provides economical complex shapes, tight tolerances, excellent surface finish, wide material selection, and minimal machining requirements. It is often the only cost-effective way to produce parts with complex internal passages or very thin walls."},
            {"q": "What is the maximum size for investment castings?", "a": "We produce investment castings up to nearly one metric ton in weight. Standard production sizes range from a few grams to 50+ pounds, with larger components handled as special projects."},
        ],
    },
]

# Content hub pages
HUB_PAGES = [
    {
        "slug": "superalloys",
        "dir": "materials",
        "title": "Superalloys – Complete Guide to High-Temperature Alloys",
        "h1": "Superalloys: Engineering Materials for Extreme Environments",
        "meta_desc": "Complete guide to superalloys from CastAlloy. Casting, forging, and machining of nickel-based, cobalt-based, and iron-based superalloys for aerospace, energy, and defense.",
        "hero_text": "Your definitive resource for superalloy manufacturing—from alloy selection through casting, forging, and precision machining.",
        "keywords": "superalloys, high-temperature alloys, nickel-based superalloys, superalloy manufacturing",
        "intro": "Superalloys are a class of high-performance metallic materials designed to maintain exceptional mechanical strength, surface stability, and corrosion resistance at high temperatures—typically above 1,000°F (540°C). These alloys are indispensable in applications where conventional metals would soften, creep, or corrode, including gas turbines, nuclear reactors, rocket engines, and chemical processing equipment.",
        "body": """<p>The three major families of superalloys are nickel-based, cobalt-based, and iron-based, with nickel-based alloys representing the largest volume in service. Key alloy systems include the Inconel family (718, 625, 713C), Hastelloy (X, C-276), Waspaloy, René alloys, and MAR-M series. Each is engineered for specific combinations of high-temperature strength, oxidation resistance, and corrosion resistance.</p>
        <p>CastAlloy is a leading manufacturer of superalloy components, offering the full range of manufacturing processes needed to transform these challenging materials into high-integrity finished parts. Our capabilities span vacuum investment casting for complex geometries, hot and isothermal forging for maximum mechanical properties, and precision CNC machining for tight dimensional tolerances on final components.</p>
        <h3>Superalloy Manufacturing Processes</h3>
        <p>Each manufacturing process offers distinct advantages depending on the component geometry, performance requirements, and production volume. Casting produces complex near-net shapes with minimal material waste. Forging delivers refined grain structures with superior fatigue and impact properties. Machining provides the final dimensional precision required for assembly and function. Many superalloy components utilize two or all three processes in their production sequence.</p>""",
        "children": [
            {"label": "Superalloys Casting", "href": "/services/superalloys-casting/", "desc": "Vacuum investment casting of nickel, cobalt, and iron-based superalloys"},
            {"label": "Superalloys Forging", "href": "/services/superalloys-forging/", "desc": "Hot and isothermal forging for maximum strength and fatigue life"},
            {"label": "Superalloys Machining", "href": "/services/superalloys-machining/", "desc": "Precision CNC machining with specialized tooling and strategies"},
        ],
    },
    {
        "slug": "inconel",
        "dir": "materials",
        "title": "Inconel – Complete Guide to Inconel Alloy Manufacturing",
        "h1": "Inconel: The Essential Guide to Casting, Forging &amp; Machining",
        "meta_desc": "Complete Inconel manufacturing guide from CastAlloy. Casting, forging, and machining of Inconel 718, 625, and other grades. Aerospace, energy, oil & gas applications.",
        "hero_text": "Everything you need to know about manufacturing with Inconel alloys—from grade selection to finished component delivery.",
        "keywords": "inconel, inconel alloys, inconel 718, inconel 625, inconel manufacturing",
        "intro": "Inconel is a family of nickel-chromium superalloys developed by Special Metals Corporation, renowned for their exceptional performance in extreme environments. These alloys resist oxidation and corrosion at high temperatures while maintaining excellent mechanical strength—properties that have made them essential materials in aerospace gas turbines, nuclear reactors, chemical processing, oil and gas extraction, and marine engineering.",
        "body": """<p>The most widely used Inconel grades are Inconel 718 and Inconel 625. Inconel 718 is a precipitation-hardened alloy offering tensile strength up to 180 ksi, making it the material of choice for turbine discs, structural components, and high-strength fasteners. Inconel 625 is a solid-solution strengthened alloy with outstanding corrosion resistance, particularly in chloride environments, serving marine, chemical, and oil and gas applications.</p>
        <p>CastAlloy provides comprehensive Inconel manufacturing services encompassing investment casting, hot forging, and precision CNC machining. Our vacuum induction melting capability ensures the highest metallurgical integrity in cast components, while our forging presses up to 2,000+ metric tons produce forgings with superior mechanical properties. Our CNC machining centers, equipped with specialized tooling and high-pressure coolant, deliver tight tolerances on these challenging-to-machine alloys.</p>
        <h3>Inconel Grade Selection Guide</h3>
        <p>Selecting the right Inconel grade depends on the specific combination of temperature, mechanical loading, and chemical environment. Inconel 718 is preferred when high strength is the primary requirement (up to ~1,300°F service). Inconel 625 excels in corrosive environments, especially chloride-bearing and reducing acid conditions. Inconel 713C provides the highest creep strength for turbine components. Our metallurgical team assists customers in selecting the optimal grade for each application.</p>""",
        "children": [
            {"label": "Inconel Casting", "href": "/services/inconel-casting/", "desc": "Vacuum investment casting of all Inconel grades"},
            {"label": "Inconel Forging", "href": "/services/inconel-forging/", "desc": "Hot and isothermal forging of Inconel 718, 625, and more"},
            {"label": "Inconel 718 Forging", "href": "/services/inconel-718-forging/", "desc": "Dedicated Inconel 718 forging capabilities"},
            {"label": "Inconel 718 Machining", "href": "/services/inconel-718-machining/", "desc": "Expert CNC machining of Inconel 718"},
            {"label": "Inconel 625 Forging", "href": "/services/inconel-625-forging/", "desc": "Corrosion-resistant Inconel 625 forgings"},
            {"label": "Inconel 625 Machining", "href": "/services/inconel-625-machining/", "desc": "Precision machining of Inconel 625"},
        ],
    },
    {
        "slug": "titanium",
        "dir": "materials",
        "title": "Titanium – Complete Guide to Titanium Manufacturing",
        "h1": "Titanium: Casting, Forging &amp; Machining Services",
        "meta_desc": "Complete titanium manufacturing guide from CastAlloy. Investment casting, forging, and CNC machining of Ti-6Al-4V and other grades for aerospace, medical, and defense.",
        "hero_text": "Comprehensive titanium manufacturing capabilities—from raw material to precision-finished components for the most demanding industries.",
        "keywords": "titanium, titanium alloys, Ti-6Al-4V, titanium manufacturing, titanium casting forging machining",
        "intro": "Titanium and its alloys offer an unmatched combination of high strength, low density (approximately 60% the weight of steel), outstanding corrosion resistance, and biocompatibility. These properties have made titanium essential in aerospace structures, jet engines, medical implants, marine equipment, and chemical processing—anywhere that demanding performance requirements justify its premium cost.",
        "body": """<p>The most widely used titanium alloy is Ti-6Al-4V (Grade 5), which accounts for more than 50% of all titanium used in the world. This alpha-beta alloy offers an excellent balance of strength (130+ ksi tensile), moderate ductility, good fracture toughness, and fatigue resistance. Commercially pure (CP) grades (1-4) are used where corrosion resistance is paramount and strength requirements are moderate, while specialized beta alloys serve niche applications requiring the highest possible strength-to-weight ratios.</p>
        <p>CastAlloy provides integrated titanium manufacturing services covering the full production chain. Our vacuum/inert atmosphere investment casting produces complex near-net-shape components. Our hot forging capabilities deliver components with refined microstructures and superior mechanical properties. Our CNC machining centers, equipped with specialized titanium tooling and high-pressure coolant, bring components to final dimensional specifications with precision and efficiency.</p>
        <h3>Titanium Grade Selection</h3>
        <p>Choosing the right titanium grade depends on the application's priorities. Ti-6Al-4V (Grade 5) is the default choice for aerospace and high-performance applications requiring high strength. Grade 23 (Ti-6Al-4V ELI) serves medical implants with enhanced biocompatibility and fracture toughness. CP Grade 2 offers excellent corrosion resistance for chemical processing and marine hardware at lower cost than alloyed grades.</p>""",
        "children": [
            {"label": "Titanium Casting", "href": "/services/titanium-casting/", "desc": "Vacuum investment casting of CP and alloyed titanium"},
            {"label": "Titanium Forging", "href": "/services/titanium-forging/", "desc": "Hot forging of Ti-6Al-4V and other titanium alloys"},
            {"label": "Titanium Machining", "href": "/services/titanium-machining/", "desc": "Precision CNC machining of titanium components"},
        ],
    },
]

# AI-driven comparison/guide pages (for traffic)
AI_PAGES = [
    {
        "slug": "inconel-718-vs-625",
        "dir": "resources",
        "title": "Inconel 718 vs 625 – Properties, Applications & Selection Guide",
        "h1": "Inconel 718 vs Inconel 625: Which Alloy Is Right for Your Application?",
        "meta_desc": "Comprehensive comparison of Inconel 718 and Inconel 625. Properties, applications, cost, and selection criteria to help you choose the right alloy. Expert guide from CastAlloy.",
        "keywords": "inconel 718 vs 625, inconel 718 vs inconel 625, compare inconel alloys",
        "content": """<p>Choosing between Inconel 718 and Inconel 625 is one of the most common material selection decisions in high-performance engineering. Both are nickel-chromium superalloys with excellent high-temperature and corrosion-resistant properties, but they achieve their performance through fundamentally different strengthening mechanisms—leading to distinct advantages in different applications.</p>
        <h2>Strengthening Mechanism</h2>
        <p>Inconel 718 is a <strong>precipitation-hardened</strong> alloy, strengthened by gamma-prime and gamma-double-prime phases formed during aging heat treatment. This produces very high mechanical strength—tensile up to 180+ ksi—but the strengthening precipitates begin to dissolve above approximately 1,300°F, limiting its high-temperature capability.</p>
        <p>Inconel 625 is <strong>solid-solution strengthened</strong> by its high molybdenum (8-10%) and niobium (3.15-4.15%) content. While its maximum tensile strength is lower (120-150 ksi), it maintains useful properties over a broader temperature range and offers superior corrosion resistance in aggressive chemical environments.</p>
        <h2>Property Comparison</h2>
        <div class="specs-table"><table><thead><tr><th>Property</th><th>Inconel 718</th><th>Inconel 625</th></tr></thead><tbody>
        <tr><td>UNS Number</td><td>N07718</td><td>N06625</td></tr>
        <tr><td>Tensile Strength</td><td>180+ ksi (aged)</td><td>120-150 ksi</td></tr>
        <tr><td>Yield Strength</td><td>150+ ksi (aged)</td><td>60-100 ksi</td></tr>
        <tr><td>Max Service Temp</td><td>~1,300°F (704°C)</td><td>~1,800°F (982°C)</td></tr>
        <tr><td>Strengthening</td><td>Precipitation hardening</td><td>Solid solution</td></tr>
        <tr><td>Weldability</td><td>Good (age-hardenable weld)</td><td>Excellent</td></tr>
        <tr><td>Chloride Resistance</td><td>Good</td><td>Excellent</td></tr>
        <tr><td>Cost (relative)</td><td>Moderate</td><td>Higher (Mo content)</td></tr>
        </tbody></table></div>
        <h2>When to Choose Inconel 718</h2>
        <p>Select Inconel 718 when your application requires maximum mechanical strength at temperatures up to 1,300°F. Typical applications include gas turbine discs and shafts, aerospace structural fasteners, compressor blades, nuclear reactor springs, and any component where high fatigue strength under cyclic loading is the primary design requirement.</p>
        <h2>When to Choose Inconel 625</h2>
        <p>Select Inconel 625 when corrosion resistance is the dominant concern, particularly in chloride-bearing environments, seawater, or reducing acid conditions. Typical applications include subsea oil and gas equipment, chemical processing vessels and piping, marine propulsion components, flue gas desulfurization systems, and aerospace exhaust components exposed to combustion products.</p>
        <h2>CastAlloy Can Help</h2>
        <p>CastAlloy manufactures components in both Inconel 718 and Inconel 625 through casting, forging, and CNC machining. Our metallurgical team can help you select the optimal alloy and manufacturing process for your specific application requirements. <a href="/contact/">Contact us</a> for expert guidance and a free quotation.</p>""",
    },
    {
        "slug": "casting-vs-forging-superalloys",
        "dir": "resources",
        "title": "Casting vs Forging Superalloys – Process Selection Guide",
        "h1": "Casting vs Forging Superalloys: Choosing the Right Manufacturing Process",
        "meta_desc": "Expert comparison of casting vs forging for superalloy components. Learn when to cast vs forge Inconel, titanium, and other high-temperature alloys. Guide from CastAlloy.",
        "keywords": "casting vs forging, superalloy casting vs forging, investment casting vs forging, when to cast vs forge",
        "content": """<p>Choosing between casting and forging is a critical decision when manufacturing superalloy components. Each process offers distinct advantages that make it optimal for different geometries, performance requirements, and production scenarios. Understanding these trade-offs enables engineers to specify the right process from the start—avoiding costly redesigns and ensuring optimal component performance.</p>
        <h2>Investment Casting Advantages</h2>
        <p><strong>Complex Geometry:</strong> Casting excels at producing intricate shapes with internal passages, thin walls, and features that would be extremely expensive or impossible to machine from wrought stock. Turbine nozzle guide vanes with internal cooling channels are a classic example.</p>
        <p><strong>Near-Net Shape:</strong> Investment castings require minimal machining, reducing material waste on expensive superalloys where raw material costs can exceed $50/lb.</p>
        <p><strong>Material Flexibility:</strong> Some superalloys are only available in cast form because their composition makes them too brittle to forge (e.g., MAR-M-247, IN 713C).</p>
        <p><strong>Consolidation:</strong> Casting can combine multiple machined components into a single casting, reducing assembly cost and eliminating joints that may be failure initiation sites.</p>
        <h2>Forging Advantages</h2>
        <p><strong>Mechanical Properties:</strong> Forging refines the grain structure through plastic deformation, producing 20-40% higher fatigue strength and superior impact resistance compared to castings of the same alloy.</p>
        <p><strong>Directional Strength:</strong> Forging can orient the grain flow to align with the primary stress direction in the component, maximizing fatigue life in critical areas.</p>
        <p><strong>Reliability:</strong> Forged components are inherently free of the porosity and shrinkage defects that can occur in castings, providing more consistent mechanical properties from part to part.</p>
        <p><strong>Rotating Components:</strong> Turbine discs, shafts, and other rotating parts almost universally require forged material due to the extreme consequences of fatigue failure.</p>
        <h2>Process Selection Matrix</h2>
        <div class="specs-table"><table><thead><tr><th>Factor</th><th>Favors Casting</th><th>Favors Forging</th></tr></thead><tbody>
        <tr><td>Geometry</td><td>Complex, thin-walled, internal passages</td><td>Simpler, solid shapes</td></tr>
        <tr><td>Primary Load</td><td>Static, thermal</td><td>Cyclic, fatigue, impact</td></tr>
        <tr><td>Rotating Part</td><td>Rarely</td><td>Almost always</td></tr>
        <tr><td>Material Cost Sensitivity</td><td>High (less waste)</td><td>Moderate (more machining)</td></tr>
        <tr><td>Production Volume</td><td>Low to high</td><td>Medium to high</td></tr>
        <tr><td>Lead Time</td><td>8-16 weeks</td><td>6-12 weeks</td></tr>
        </tbody></table></div>
        <h2>CastAlloy Offers Both</h2>
        <p>As a total solution provider, CastAlloy can manufacture your superalloy components through either casting or forging (or a combination of both). Our engineering team collaborates with you to evaluate geometry, performance requirements, production volume, and cost to recommend the optimal manufacturing approach. <a href="/contact/">Request a consultation</a> to discuss your project.</p>""",
    },
    {
        "slug": "superalloy-selection-guide",
        "dir": "resources",
        "title": "Superalloy Selection Guide – Choose the Right High-Temperature Alloy",
        "h1": "Superalloy Selection Guide: Matching Alloys to Applications",
        "meta_desc": "Interactive guide to selecting the right superalloy for your application. Compare Inconel, Hastelloy, Waspaloy, titanium, and more. Expert resource from CastAlloy.",
        "keywords": "superalloy selection guide, choose superalloy, nickel alloy comparison, inconel vs hastelloy",
        "content": """<p>Selecting the right superalloy is a critical engineering decision that balances high-temperature strength, corrosion resistance, fabricability, availability, and cost. This guide provides a systematic framework for narrowing your material options based on application requirements.</p>
        <h2>Step 1: Define the Operating Environment</h2>
        <p>The operating temperature, chemical environment, and mechanical loading determine which alloy families are candidates. For temperatures below 1,000°F in mildly corrosive environments, stainless steels or iron-based superalloys like A-286 may suffice at lower cost. For temperatures above 1,000°F with oxidizing conditions, nickel-based alloys become necessary. For extreme corrosion in reducing acids or high-chloride environments at moderate temperatures, molybdenum-rich alloys like Inconel 625 or Hastelloy C-276 are required.</p>
        <h2>Step 2: Primary Alloy Families</h2>
        <div class="specs-table"><table><thead><tr><th>Alloy Family</th><th>Key Strength</th><th>Typical Applications</th><th>Max Temp</th></tr></thead><tbody>
        <tr><td>Inconel 718</td><td>High strength + fabricability</td><td>Turbine discs, fasteners, springs</td><td>~1,300°F</td></tr>
        <tr><td>Inconel 625</td><td>Corrosion resistance</td><td>Marine, chemical, subsea</td><td>~1,800°F</td></tr>
        <tr><td>Hastelloy X</td><td>Oxidation resistance</td><td>Combustion liners, ducts</td><td>~2,200°F</td></tr>
        <tr><td>Waspaloy</td><td>Creep strength</td><td>Turbine blades, rings</td><td>~1,600°F</td></tr>
        <tr><td>MAR-M-247</td><td>Extreme creep resistance</td><td>Turbine blades (cast only)</td><td>~1,900°F</td></tr>
        <tr><td>Ti-6Al-4V</td><td>Strength-to-weight ratio</td><td>Airframes, implants</td><td>~750°F</td></tr>
        <tr><td>Stellite (Co-based)</td><td>Wear + corrosion</td><td>Valve seats, bearings</td><td>~1,500°F</td></tr>
        </tbody></table></div>
        <h2>Step 3: Consider Manufacturing Process</h2>
        <p>Not all superalloys can be produced by all processes. MAR-M-247 and IN 713C are casting-only alloys due to their low ductility. Inconel 718 is readily forged, cast, and machined. Titanium requires inert/vacuum atmosphere processing. Consider the available manufacturing routes when selecting your alloy, as this affects lead time, cost, and achievable properties.</p>
        <h2>Step 4: Cost Optimization</h2>
        <p>Superalloy costs vary dramatically. Titanium and cobalt-based alloys carry the highest raw material premiums. Nickel alloys vary based on molybdenum and cobalt content. Near-net-shape casting minimizes expensive material waste. CastAlloy's engineering team can help identify the most cost-effective alloy that meets all performance requirements—sometimes a lower-cost alloy with optimized heat treatment achieves equivalent performance.</p>
        <h2>Get Expert Guidance</h2>
        <p>Superalloy selection involves trade-offs that benefit from manufacturing experience. CastAlloy's metallurgical engineers have 30+ years of experience matching alloys to applications across aerospace, energy, oil and gas, and industrial markets. <a href="/contact/">Contact our team</a> for a material selection consultation at no cost.</p>""",
    },
    {
        "slug": "ai-manufacturing-optimization",
        "dir": "resources",
        "title": "AI in Manufacturing – How AI Optimizes Casting & Forging",
        "h1": "How AI Is Transforming Superalloy Manufacturing",
        "meta_desc": "Discover how artificial intelligence is optimizing superalloy casting, forging, and machining processes. Predictive quality, simulation, and digital twin technology. CastAlloy insights.",
        "keywords": "AI manufacturing, AI casting optimization, artificial intelligence forging, smart manufacturing superalloys",
        "content": """<p>Artificial intelligence is rapidly transforming how superalloy components are designed, manufactured, and quality-assured. From casting simulation to predictive quality control, AI technologies are enabling manufacturers to produce higher-quality components faster and at lower cost. CastAlloy is at the forefront of integrating these technologies into our manufacturing processes.</p>
        <h2>AI-Powered Casting Simulation</h2>
        <p>Traditional casting simulation relies on physics-based models that can take hours or days to run for complex geometries. AI-enhanced simulation uses machine learning trained on thousands of previous casting results to predict solidification patterns, shrinkage porosity locations, and hot tear susceptibility in minutes rather than hours. This accelerates the design-to-production cycle and enables rapid iteration of gating and feeding designs to optimize casting quality before committing to expensive tooling.</p>
        <h2>Predictive Quality in Forging</h2>
        <p>AI-driven monitoring of forging process parameters—press force, die temperature, billet temperature, deformation rate—enables real-time prediction of whether each forging will meet mechanical property specifications. By correlating process data with downstream inspection results, machine learning models identify the process parameter windows that consistently produce optimal grain structure and mechanical properties. This reduces scrap rates and ensures more consistent quality across production runs.</p>
        <h2>Intelligent CNC Machining</h2>
        <p>Machining superalloys like Inconel 718 and titanium is notoriously challenging due to rapid tool wear and work hardening. AI-optimized adaptive machining systems monitor cutting forces, vibration, and acoustic emission in real time, automatically adjusting feeds, speeds, and tool paths to maintain optimal cutting conditions. This extends tool life by up to 30%, improves surface finish consistency, and reduces the risk of scrapping expensive partially-machined superalloy components.</p>
        <h2>Digital Twin Technology</h2>
        <p>Digital twins—virtual replicas of physical manufacturing processes—enable AI systems to optimize production without interrupting actual operations. By simulating process variations in the digital environment, manufacturers can identify optimal parameters, predict maintenance needs, and plan production schedules with greater accuracy. CastAlloy leverages digital twin concepts across our casting, forging, and machining operations to continuously improve quality and efficiency.</p>
        <h2>Supply Chain Intelligence</h2>
        <p>AI is also transforming supply chain management for superalloy components. Predictive analytics help forecast demand patterns, optimize inventory levels, and identify potential supply disruptions before they impact production schedules. CastAlloy's supply chain management services leverage these technologies to provide customers with reliable delivery schedules and optimized logistics.</p>
        <h2>Partner with CastAlloy</h2>
        <p>CastAlloy combines advanced manufacturing technology with 30+ years of metallurgical expertise to deliver superior quality superalloy components. Whether you need casting, forging, machining, or a complete supply chain solution, our team is ready to support your project. <a href="/contact/">Contact us</a> to discuss how our capabilities can serve your manufacturing needs.</p>""",
    },
    {
        "slug": "5-axis-cnc-challenges-superalloys",
        "dir": "resources",
        "title": "5 Key Challenges in Superalloy CNC Machining & How to Overcome Them",
        "h1": "5 Key Challenges in Superalloy CNC Machining and How to Overcome Them",
        "meta_desc": "Expert guide to overcoming the top 5 challenges in CNC machining superalloys including Inconel, Hastelloy, and titanium. Tool wear, heat, work hardening solutions from CastAlloy.",
        "keywords": "superalloy machining challenges, CNC machining Inconel problems, machining nickel alloys, difficult to machine materials",
        "content": """<p>Superalloys are among the most challenging materials in CNC machining. Their unique properties—the same characteristics that make them indispensable in extreme environments—create significant obstacles during material removal. Understanding these challenges and their solutions is essential for producing quality superalloy components efficiently.</p>
        <h2>Challenge 1: Extreme Tool Wear</h2>
        <p>Superalloys contain hard carbide and intermetallic particles that act as abrasives against cutting tools. Combined with high cutting temperatures, tool wear rates can be 5-10 times faster than when machining conventional steels. The solution involves selecting the right tool material (ceramic for roughing at higher speeds, coated carbide with positive rake for finishing), optimizing cutting speeds (typically 50-100 SFM for carbide, 300-800 SFM for ceramic), and implementing consistent tool change intervals based on empirical wear data rather than running tools to failure.</p>
        <h2>Challenge 2: Heat Concentration</h2>
        <p>Superalloys have thermal conductivity approximately 1/3 that of steel, meaning cutting heat concentrates at the tool-chip interface rather than being carried away by chips. Temperatures at the cutting edge can exceed 1,200°C, causing rapid tool degradation and potential metallurgical damage to the machined surface. High-pressure through-spindle coolant (1,000+ PSI) directed precisely at the cutting zone is essential. Cryogenic machining using liquid nitrogen or CO2 is an emerging solution for the most demanding applications.</p>
        <h2>Challenge 3: Work Hardening</h2>
        <p>Nickel-based superalloys like Inconel 718 work-harden rapidly during machining. If cutting parameters cause the tool to rub rather than cut cleanly, a hardened layer forms on the workpiece surface that makes subsequent passes even more difficult—creating a destructive cycle of increasing forces and accelerating wear. Prevention requires maintaining positive, aggressive cutting with sharp tools, avoiding dwelling or light passes, and using climb milling rather than conventional milling to ensure the tool engages material at full chip thickness.</p>
        <h2>Challenge 4: Part Deflection and Chatter</h2>
        <p>Many superalloy components are thin-walled or have high length-to-diameter ratios, making them susceptible to deflection under cutting forces. The high strength of superalloys means cutting forces are substantially greater than with conventional materials. Rigid workholding fixtures, optimized tool paths that distribute forces evenly, reduced depths of cut with increased feed rates, and strategic machining sequences that maintain structural stiffness throughout the operation are all critical strategies.</p>
        <h2>Challenge 5: Surface Integrity</h2>
        <p>For safety-critical superalloy components in aerospace and nuclear applications, surface integrity—the metallurgical condition of the machined surface—is as important as dimensional accuracy. Aggressive machining can create tensile residual stresses, white layer formation, or microcracking that degrades fatigue life. Controlling cutting parameters, maintaining sharp tools, and applying finishing passes with gentle conditions ensures the machined surface has compressive residual stresses and no detrimental metallurgical changes.</p>
        <h2>CastAlloy's Machining Expertise</h2>
        <p>CastAlloy has developed optimized machining strategies for all major superalloy families through decades of production experience. Our investment in modern CNC equipment, specialized tooling, high-pressure coolant systems, and continuous process refinement enables us to efficiently machine the most challenging superalloys while maintaining the surface integrity required for safety-critical applications. <a href="/contact/">Contact us</a> to discuss your superalloy machining requirements.</p>""",
    },
]

# ============================================================
# HTML TEMPLATES
# ============================================================

def nav_html():
    items = []
    for link in NAV_LINKS:
        if "children" in link:
            children_html = "".join(
                f'<a href="{c["href"]}">{c["label"]}</a>' for c in link["children"]
            )
            items.append(f'''<li class="has-dropdown">
                <a href="{link["href"]}">{link["label"]} <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>
                <div class="dropdown">{children_html}</div>
            </li>''')
        else:
            items.append(f'<li><a href="{link["href"]}">{link["label"]}</a></li>')
    return "\n".join(items)

def head_html(title, meta_desc, keywords="", canonical=""):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | CastAlloy</title>
    <meta name="description" content="{meta_desc}">
    <meta name="keywords" content="{keywords}">
    {f'<link rel="canonical" href="https://www.cast-alloy.com{canonical}">' if canonical else ""}
    <link rel="stylesheet" href="/css/styles.css">
    <!-- Google Analytics GA4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={COMPANY["ga_id"]}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());
      gtag('config', '{COMPANY["ga_id"]}');
    </script>
    <!-- Schema.org Organization -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CastAlloy",
      "url": "https://www.cast-alloy.com",
      "logo": "https://www.cast-alloy.com/img/logo.svg",
      "description": "Manufacturing total solution provider specializing in superalloy casting, forging, and machining.",
      "address": {{
        "@type": "PostalAddress",
        "addressLocality": "New Castle",
        "addressRegion": "DE",
        "addressCountry": "US"
      }},
      "telephone": "(302) 995-6588",
      "email": "contact@cast-alloy.com",
      "sameAs": ["https://www.linkedin.com/company/castalloy"]
    }}
    </script>
</head>'''

def header_html():
    return f'''<header class="site-header">
    <div class="container header-inner">
        <a href="/" class="logo">
            <span class="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="6" fill="#0a1628"/>
                    <path d="M8 10h16M8 16h12M8 22h8" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
            </span>
            <span class="logo-text">Cast<span class="logo-accent">Alloy</span></span>
        </a>
        <nav class="main-nav" id="mainNav">
            <ul>{nav_html()}</ul>
        </nav>
        <a href="/contact/" class="btn btn-primary header-cta">Request Quote</a>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</header>'''

def footer_html():
    return f'''<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <a href="/" class="logo footer-logo">
                    <span class="logo-text">Cast<span class="logo-accent">Alloy</span></span>
                </a>
                <p class="footer-desc">Total solution provider for engineering design, development &amp; supply chain management. ISO 9001:2015 certified with 30+ years of manufacturing excellence.</p>
                <p class="footer-contact"><strong>{COMPANY["phone"]}</strong><br>{COMPANY["email"]}</p>
            </div>
            <div class="footer-col">
                <h4>Services</h4>
                <ul>
                    <li><a href="/services/die-casting/">Die Casting</a></li>
                    <li><a href="/services/investment-casting/">Investment Casting</a></li>
                    <li><a href="/services/superalloys-casting/">Superalloy Casting</a></li>
                    <li><a href="/services/inconel-casting/">Inconel Casting</a></li>
                    <li><a href="/services/titanium-casting/">Titanium Casting</a></li>
                    <li><a href="/services/superalloys-forging/">Superalloy Forging</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Materials</h4>
                <ul>
                    <li><a href="/materials/superalloys/">Superalloys Hub</a></li>
                    <li><a href="/materials/inconel/">Inconel Hub</a></li>
                    <li><a href="/materials/titanium/">Titanium Hub</a></li>
                    <li><a href="/resources/inconel-718-vs-625/">Inconel 718 vs 625</a></li>
                    <li><a href="/resources/casting-vs-forging-superalloys/">Casting vs Forging</a></li>
                    <li><a href="/resources/superalloy-selection-guide/">Alloy Selection Guide</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="/about/">About CastAlloy</a></li>
                    <li><a href="/industries/">Industries Served</a></li>
                    <li><a href="/resources/">Resources &amp; Guides</a></li>
                    <li><a href="/contact/">Contact Us</a></li>
                </ul>
                <div class="footer-badges">
                    <span class="badge">ISO 9001:2015</span>
                    <span class="badge">30+ Years</span>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CastAlloy. All rights reserved. | New Castle, Delaware, USA</p>
            <p class="footer-locations">{COMPANY["locations"]}</p>
        </div>
    </div>
</footer>
<script src="/js/main.js"></script>'''

def trust_strip():
    return '''<div class="trust-strip">
    <div class="container trust-inner">
        <div class="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>ISO 9001:2015 Certified</span></div>
        <div class="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg><span>30+ Years Experience</span></div>
        <div class="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>US Headquarters, Global Network</span></div>
        <div class="trust-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg><span>PPAP I &amp; III Endorsed</span></div>
    </div>
</div>'''

def cta_section():
    return '''<section class="cta-section">
    <div class="container cta-inner">
        <h2>Ready to Start Your Project?</h2>
        <p>Get a free quote within 24 hours. Our engineering team is standing by to discuss your requirements.</p>
        <div class="cta-actions">
            <a href="/contact/" class="btn btn-primary btn-lg">Request a Free Quote</a>
            <a href="tel:3029956588" class="btn btn-outline btn-lg">Call (302) 995-6588</a>
        </div>
    </div>
</section>'''

# ============================================================
# PAGE GENERATORS
# ============================================================

def generate_keyword_page(page):
    # Build FAQ schema
    faq_schema = ""
    if page.get("faqs"):
        faq_items = ",".join([
            f'{{"@type":"Question","name":"{faq["q"]}","acceptedAnswer":{{"@type":"Answer","text":"{faq["a"]}"}}}}'
            for faq in page["faqs"]
        ])
        faq_schema = f'''<script type="application/ld+json">
    {{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{faq_items}]}}
    </script>'''

    sections_html = ""
    for sec in page["content_sections"]:
        sections_html += f'''<div class="content-block">
            <h2>{sec["heading"]}</h2>
            <p>{sec["body"]}</p>
        </div>\n'''

    specs_rows = ""
    if page.get("specs_table"):
        for row in page["specs_table"]:
            specs_rows += f"<tr><td>{row[0]}</td><td>{row[1]}</td></tr>\n"

    faq_html = ""
    if page.get("faqs"):
        faq_items_html = ""
        for faq in page["faqs"]:
            faq_items_html += f'''<div class="faq-item">
                <button class="faq-q" onclick="this.parentElement.classList.toggle('open')">
                    <span>{faq["q"]}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="faq-a"><p>{faq["a"]}</p></div>
            </div>\n'''
        faq_html = f'''<div class="content-block">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-list">{faq_items_html}</div>
        </div>'''

    hub_link = ""
    if page.get("hub"):
        hub_link = f'<a href="/materials/{page["hub"]}/" class="breadcrumb-link">&larr; Back to {page["hub"].title()} Hub</a>'

    canonical = f'/{page["dir"]}/{page["slug"]}/'
    html = f'''{head_html(page["title"], page["meta_desc"], page.get("keywords",""), canonical)}
    {faq_schema}
<body>
{header_html()}
{trust_strip()}

<section class="page-hero">
    <div class="container">
        {hub_link}
        <h1>{page["h1"]}</h1>
        <p class="hero-subtitle">{page["hero_text"]}</p>
        <div class="hero-actions">
            <a href="/contact/" class="btn btn-primary btn-lg">Get a Free Quote</a>
            <a href="tel:3029956588" class="btn btn-outline btn-lg">Call (302) 995-6588</a>
        </div>
    </div>
</section>

<section class="section page-content">
    <div class="container content-grid">
        <div class="content-main">
            {sections_html}
            {"<div class='content-block'><h2>Technical Specifications</h2><div class='specs-table'><table><thead><tr><th>Specification</th><th>Details</th></tr></thead><tbody>" + specs_rows + "</tbody></table></div></div>" if specs_rows else ""}
            {faq_html}
        </div>
        <aside class="content-sidebar">
            <div class="sidebar-card">
                <h3>Quick Quote</h3>
                <p>Send us your drawings or specifications and receive a detailed quotation within 24 hours.</p>
                <a href="/contact/" class="btn btn-primary btn-block">Request Quote</a>
                <p class="sidebar-phone">Or call: <strong>(302) 995-6588</strong></p>
            </div>
            <div class="sidebar-card">
                <h3>Why CastAlloy?</h3>
                <ul class="check-list">
                    <li>ISO 9001:2015 Certified</li>
                    <li>30+ Years Experience</li>
                    <li>US-Based, Global Manufacturing</li>
                    <li>Complete Supply Chain Solution</li>
                    <li>Engineering Design Support</li>
                    <li>PPAP I &amp; III Endorsed</li>
                </ul>
            </div>
            <div class="sidebar-card">
                <h3>Related Services</h3>
                <ul class="related-links">
                    <li><a href="/materials/superalloys/">Superalloys Hub</a></li>
                    <li><a href="/materials/inconel/">Inconel Hub</a></li>
                    <li><a href="/materials/titanium/">Titanium Hub</a></li>
                    <li><a href="/services/investment-casting/">Investment Casting</a></li>
                    <li><a href="/resources/inconel-718-vs-625/">Inconel 718 vs 625</a></li>
                </ul>
            </div>
        </aside>
    </div>
</section>

{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_hub_page(hub):
    children_html = ""
    for child in hub["children"]:
        children_html += f'''<a href="{child["href"]}" class="hub-card">
            <h3>{child["label"]}</h3>
            <p>{child["desc"]}</p>
            <span class="hub-card-arrow">&rarr;</span>
        </a>\n'''

    canonical = f'/{hub["dir"]}/{hub["slug"]}/'
    html = f'''{head_html(hub["title"], hub["meta_desc"], hub.get("keywords",""), canonical)}
<body>
{header_html()}
{trust_strip()}

<section class="page-hero hub-hero">
    <div class="container">
        <span class="hub-label">Material Hub</span>
        <h1>{hub["h1"]}</h1>
        <p class="hero-subtitle">{hub["hero_text"]}</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="hub-intro">
            <p class="lead">{hub["intro"]}</p>
        </div>
        <div class="hub-body">{hub["body"]}</div>
    </div>
</section>

<section class="section section-alt">
    <div class="container">
        <h2 class="section-title">Our {hub["slug"].title()} Services</h2>
        <div class="hub-grid">
            {children_html}
        </div>
    </div>
</section>

{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_ai_page(page):
    canonical = f'/{page["dir"]}/{page["slug"]}/'
    html = f'''{head_html(page["title"], page["meta_desc"], page.get("keywords",""), canonical)}
<body>
{header_html()}
{trust_strip()}

<section class="page-hero resource-hero">
    <div class="container">
        <span class="hub-label">Resource Guide</span>
        <h1>{page["h1"]}</h1>
    </div>
</section>

<section class="section page-content">
    <div class="container content-grid">
        <div class="content-main article-content">
            {page["content"]}
        </div>
        <aside class="content-sidebar">
            <div class="sidebar-card">
                <h3>Quick Quote</h3>
                <p>Ready to discuss your project? Get a quote within 24 hours.</p>
                <a href="/contact/" class="btn btn-primary btn-block">Request Quote</a>
            </div>
            <div class="sidebar-card">
                <h3>More Resources</h3>
                <ul class="related-links">
                    <li><a href="/resources/inconel-718-vs-625/">Inconel 718 vs 625</a></li>
                    <li><a href="/resources/casting-vs-forging-superalloys/">Casting vs Forging</a></li>
                    <li><a href="/resources/superalloy-selection-guide/">Alloy Selection Guide</a></li>
                    <li><a href="/resources/ai-manufacturing-optimization/">AI in Manufacturing</a></li>
                    <li><a href="/resources/5-axis-cnc-challenges-superalloys/">CNC Machining Challenges</a></li>
                </ul>
            </div>
        </aside>
    </div>
</section>

{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_homepage():
    services_cards = ""
    key_services = [
        {"title": "Superalloy Casting", "href": "/services/superalloys-casting/", "desc": "Vacuum investment casting of nickel, cobalt, and iron-based superalloys for aerospace and energy."},
        {"title": "Inconel Casting &amp; Forging", "href": "/services/inconel-casting/", "desc": "Complete Inconel manufacturing—casting, forging, and machining of 718, 625, and more."},
        {"title": "Titanium Components", "href": "/services/titanium-casting/", "desc": "Precision titanium casting, forging, and machining for aerospace, medical, and defense."},
        {"title": "Die Casting", "href": "/services/die-casting/", "desc": "High-volume aluminum and zinc die casting with machines up to 2,000 metric tons."},
        {"title": "Investment Casting", "href": "/services/investment-casting/", "desc": "Precision lost-wax casting in stainless steel, superalloys, titanium, and more."},
        {"title": "CNC Machining", "href": "/services/cnc-machining/", "desc": "High-precision CNC machining and secondary operations on cast and forged components."},
    ]
    for svc in key_services:
        services_cards += f'''<a href="{svc["href"]}" class="service-card">
            <h3>{svc["title"]}</h3>
            <p>{svc["desc"]}</p>
            <span class="card-arrow">&rarr;</span>
        </a>\n'''

    industries = ["Aerospace", "Oil &amp; Gas", "Power Generation", "Nuclear &amp; SMR", "Automotive", "Mining", "Medical", "Marine &amp; Subsea", "Chemical Processing", "Defense"]
    ind_html = "".join([f'<span class="industry-tag">{i}</span>' for i in industries])

    html = f'''{head_html("Superalloy Casting, Forging &amp; Machining | Total Manufacturing Solutions", "CastAlloy is a manufacturing total solution provider specializing in superalloy casting, Inconel forging, titanium machining, die casting, and investment casting. ISO 9001 certified. US headquarters.", "superalloy casting, inconel casting, titanium forging, die casting, investment casting, CNC machining, manufacturing", "/")}
<body>
{header_html()}

<section class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
        <div class="hero-text">
            <span class="hero-tag">Engineering Design · Development · Supply Chain</span>
            <h1>Superalloy &amp; Precision Metal<br><span class="hero-highlight">Manufacturing Solutions</span></h1>
            <p class="hero-desc">From Inconel turbine castings to titanium aerospace forgings—CastAlloy delivers world-class components with 30+ years of manufacturing excellence, ISO 9001:2015 certification, and a globally integrated supply chain.</p>
            <div class="hero-actions">
                <a href="/contact/" class="btn btn-primary btn-lg">Request a Free Quote</a>
                <a href="/services/" class="btn btn-outline btn-lg">Explore Services</a>
            </div>
        </div>
        <div class="hero-stats">
            <div class="stat"><span class="stat-num">30+</span><span class="stat-label">Years Experience</span></div>
            <div class="stat"><span class="stat-num">6</span><span class="stat-label">Global Locations</span></div>
            <div class="stat"><span class="stat-num">2000</span><span class="stat-label">MT Press Capacity</span></div>
        </div>
    </div>
</section>

{trust_strip()}

<section class="section">
    <div class="container">
        <h2 class="section-title">Our Manufacturing Capabilities</h2>
        <p class="section-subtitle">Comprehensive casting, forging, and machining services for the world's most demanding alloys and applications.</p>
        <div class="services-grid">
            {services_cards}
        </div>
    </div>
</section>

<section class="section section-alt">
    <div class="container">
        <h2 class="section-title">Material Expertise Hubs</h2>
        <p class="section-subtitle">Deep technical resources for each material family we serve.</p>
        <div class="hub-grid">
            <a href="/materials/superalloys/" class="hub-card hub-card-featured">
                <span class="hub-card-label">Material Hub</span>
                <h3>Superalloys</h3>
                <p>Complete guide to casting, forging, and machining nickel-based, cobalt-based, and iron-based superalloys.</p>
                <span class="hub-card-arrow">&rarr;</span>
            </a>
            <a href="/materials/inconel/" class="hub-card hub-card-featured">
                <span class="hub-card-label">Material Hub</span>
                <h3>Inconel</h3>
                <p>In-depth coverage of Inconel 718, 625, and other grades—casting, forging, machining, and alloy comparison.</p>
                <span class="hub-card-arrow">&rarr;</span>
            </a>
            <a href="/materials/titanium/" class="hub-card hub-card-featured">
                <span class="hub-card-label">Material Hub</span>
                <h3>Titanium</h3>
                <p>Ti-6Al-4V and other titanium alloy manufacturing for aerospace, medical, and defense applications.</p>
                <span class="hub-card-arrow">&rarr;</span>
            </a>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <h2 class="section-title">Industries We Serve</h2>
        <div class="industries-cloud">{ind_html}</div>
    </div>
</section>

<section class="section section-alt">
    <div class="container about-preview">
        <div class="about-text">
            <h2>Total Solution Provider</h2>
            <p>CastAlloy, headquartered in New Castle, Delaware, is a manufacturing total solution provider delivering engineering design, product development, production, and logistics services. With locations in the USA, China, Taiwan, Vietnam, and South Korea, we feature globally integrated manufacturing resources that achieve the ideal balance of superior quality and cost efficiency.</p>
            <p>Our proven processes incorporate the latest production technologies and quality assurance procedures. We endorse PPAP I and PPAP III processes, and our quality control spans engineering design review, raw material inspection, production auditing, and pre-shipment inspection.</p>
            <a href="/about/" class="btn btn-secondary">Learn More About Us &rarr;</a>
        </div>
    </div>
</section>

{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_contact_page():
    html = f'''{head_html("Contact Us – Request a Quote", "Contact CastAlloy for a free quote on superalloy casting, Inconel forging, titanium machining, die casting, and more. Response within 24 hours.", "contact forcebeyond, request quote, manufacturing quote", "/contact/")}
<body>
{header_html()}
{trust_strip()}

<section class="page-hero">
    <div class="container">
        <h1>Contact CastAlloy</h1>
        <p class="hero-subtitle">Get a detailed quotation within 24 hours. Send us your drawings, specifications, or questions.</p>
    </div>
</section>

<section class="section">
    <div class="container content-grid">
        <div class="content-main">
            <div class="contact-form-wrap">
                <h2>Request a Quote</h2>
                <p>Fill out the form below and our engineering team will respond within one business day.</p>
                <div class="form-placeholder">
                    <p><em>Note: Connect this form to your CRM (HubSpot, Pipedrive, etc.) or email service. For GitHub Pages, use a service like Formspree, Netlify Forms, or a custom backend.</em></p>
                    <div class="form-group"><label>Name *</label><input type="text" placeholder="Your full name" /></div>
                    <div class="form-group"><label>Company</label><input type="text" placeholder="Company name" /></div>
                    <div class="form-group"><label>Email *</label><input type="email" placeholder="your@email.com" /></div>
                    <div class="form-group"><label>Phone</label><input type="tel" placeholder="(XXX) XXX-XXXX" /></div>
                    <div class="form-group"><label>Service Needed</label>
                        <select>
                            <option value="">Select a service...</option>
                            <option>Superalloy Casting</option>
                            <option>Superalloy Forging</option>
                            <option>Superalloy Machining</option>
                            <option>Inconel Casting</option>
                            <option>Inconel Forging</option>
                            <option>Inconel Machining</option>
                            <option>Titanium Casting</option>
                            <option>Titanium Forging</option>
                            <option>Titanium Machining</option>
                            <option>Die Casting</option>
                            <option>Investment Casting</option>
                            <option>Sand Casting</option>
                            <option>CNC Machining</option>
                            <option>Supply Chain Management</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="form-group"><label>Project Details *</label><textarea rows="5" placeholder="Describe your project, materials, quantities, and any special requirements..."></textarea></div>
                    <button class="btn btn-primary btn-lg btn-block">Submit Quote Request</button>
                </div>
            </div>
        </div>
        <aside class="content-sidebar">
            <div class="sidebar-card">
                <h3>Direct Contact</h3>
                <p><strong>Phone:</strong><br><a href="tel:3029956588">(302) 995-6588</a></p>
                <p><strong>Email:</strong><br><a href="mailto:contact@cast-alloy.com">contact@cast-alloy.com</a></p>
                <p><strong>Headquarters:</strong><br>New Castle, Delaware, USA</p>
            </div>
            <div class="sidebar-card">
                <h3>Global Locations</h3>
                <ul class="check-list">
                    <li>USA (Delaware &amp; California)</li>
                    <li>China</li>
                    <li>Taiwan</li>
                    <li>Vietnam</li>
                    <li>South Korea</li>
                </ul>
            </div>
            <div class="sidebar-card">
                <h3>Response Guarantee</h3>
                <p>We respond to all inquiries within <strong>24 hours</strong>. Urgent requests are prioritized—call us directly for immediate assistance.</p>
            </div>
        </aside>
    </div>
</section>

{footer_html()}
</body>
</html>'''
    return html


def generate_about_page():
    html = f'''{head_html("About CastAlloy – Company Profile", "CastAlloy is a manufacturing total solution provider headquartered in New Castle, Delaware. ISO 9001:2015 certified with 30+ years experience in casting, forging, and machining.", "about forcebeyond, company profile, manufacturing company delaware", "/about/")}
<body>
{header_html()}
{trust_strip()}

<section class="page-hero">
    <div class="container">
        <h1>About CastAlloy</h1>
        <p class="hero-subtitle">A manufacturing total solution provider with 30+ years of engineering excellence and globally integrated resources.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="about-content">
            <h2>Company Profile</h2>
            <p>CastAlloy, headquartered in New Castle, Delaware, is a manufacturing total solution provider encompassing engineering design, product development, production, and logistics. We partner with our customers by offering superior quality products and comprehensive supply chain management services.</p>
            <p>CastAlloy features globally integrated manufacturing resources with locations in the USA, China, Taiwan, Vietnam, and South Korea. Our structure achieves the ideal balance of superior quality and cost efficiency. Our proven processes incorporate the latest production technologies and quality assurance procedures, allowing customers to partner with world-class manufacturers for engineered parts and components.</p>

            <h2>Manufacturing Capabilities</h2>
            <p>Our casting and forging solutions include die casting, investment casting, hot forging, cold forging, sand casting, and high-precision CNC machining. We specialize in superalloy, Inconel, titanium, stainless steel, duplex stainless steel, carbon steel, and aluminum components serving automotive, aerospace, oil and gas, mining, energy, medical, marine, and other demanding industries.</p>

            <h2>Quality Commitment</h2>
            <p>CastAlloy is a fully certified ISO 9001:2015 company dedicated to the highest quality standards. We endorse PPAP I and PPAP III processes. Our quality control encompasses engineering design review, raw material inspection with independent test lab reports, during-production inspection, initial production auditing, random sampling of early batch production, pre-shipment inspection, and container-load verification.</p>

            <h2>Supply Chain Excellence</h2>
            <p>As a total solutions provider, we manage the complete supply chain from engineering design and prototype development through volume production and international logistics. Our warehouses in New Castle, Delaware and Los Angeles, California provide convenient stock retrieval and JIT delivery capabilities for our North American customers. Our inventory management software forecasts yearly usage and reorder points, allowing proactive purchasing to ensure on-time delivery.</p>

            <div class="about-stats">
                <div class="stat-card"><span class="stat-num">30+</span><span class="stat-label">Years of Experience</span></div>
                <div class="stat-card"><span class="stat-num">6</span><span class="stat-label">Global Locations</span></div>
                <div class="stat-card"><span class="stat-num">2,000</span><span class="stat-label">MT Max Press Capacity</span></div>
                <div class="stat-card"><span class="stat-num">ISO</span><span class="stat-label">9001:2015 Certified</span></div>
            </div>
        </div>
    </div>
</section>

{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_services_index():
    all_services = [
        {"title": "Superalloy Casting", "href": "/services/superalloys-casting/", "desc": "Vacuum investment casting of nickel, cobalt, and iron-based superalloys."},
        {"title": "Superalloy Forging", "href": "/services/superalloys-forging/", "desc": "Hot and isothermal forging for maximum strength and fatigue life."},
        {"title": "Superalloy Machining", "href": "/services/superalloys-machining/", "desc": "Precision CNC machining with specialized tooling for high-temp alloys."},
        {"title": "Inconel Casting", "href": "/services/inconel-casting/", "desc": "Vacuum precision investment casting of Inconel 718, 625, and more."},
        {"title": "Inconel Forging", "href": "/services/inconel-forging/", "desc": "Custom hot and isothermal forging of Inconel alloys."},
        {"title": "Inconel 718 Forging", "href": "/services/inconel-718-forging/", "desc": "Dedicated Inconel 718 forging for aerospace and energy."},
        {"title": "Inconel 718 Machining", "href": "/services/inconel-718-machining/", "desc": "Expert CNC machining of the world's most popular superalloy."},
        {"title": "Inconel 625 Forging", "href": "/services/inconel-625-forging/", "desc": "Corrosion-resistant forgings for marine and chemical applications."},
        {"title": "Inconel 625 Machining", "href": "/services/inconel-625-machining/", "desc": "Precision machining for marine, chemical, and energy components."},
        {"title": "Titanium Casting", "href": "/services/titanium-casting/", "desc": "Vacuum/inert atmosphere investment casting of titanium alloys."},
        {"title": "Titanium Forging", "href": "/services/titanium-forging/", "desc": "Hot forging of Ti-6Al-4V and other titanium grades."},
        {"title": "Titanium Machining", "href": "/services/titanium-machining/", "desc": "Precision CNC machining of titanium for aerospace and medical."},
        {"title": "Die Casting", "href": "/services/die-casting/", "desc": "High-volume aluminum and zinc die casting, 180-2,000 MT."},
        {"title": "Investment Casting", "href": "/services/investment-casting/", "desc": "Precision lost-wax casting in ferrous and non-ferrous alloys."},
    ]
    cards = ""
    for svc in all_services:
        cards += f'''<a href="{svc["href"]}" class="service-card">
            <h3>{svc["title"]}</h3>
            <p>{svc["desc"]}</p>
            <span class="card-arrow">&rarr;</span>
        </a>\n'''

    html = f'''{head_html("Services – Casting, Forging, Machining &amp; Supply Chain", "Complete manufacturing services from CastAlloy: superalloy casting, Inconel forging, titanium machining, die casting, investment casting, and supply chain management.", "manufacturing services, casting forging machining", "/services/")}
<body>
{header_html()}
{trust_strip()}
<section class="page-hero">
    <div class="container">
        <h1>Manufacturing Services</h1>
        <p class="hero-subtitle">Comprehensive casting, forging, machining, and supply chain solutions for the world's most demanding alloys and applications.</p>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="services-grid">{cards}</div>
    </div>
</section>
{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_resources_index():
    resources = [
        {"title": "Inconel 718 vs 625 Comparison", "href": "/resources/inconel-718-vs-625/", "desc": "In-depth comparison of properties, applications, and selection criteria."},
        {"title": "Casting vs Forging Guide", "href": "/resources/casting-vs-forging-superalloys/", "desc": "How to choose between casting and forging for superalloy components."},
        {"title": "Superalloy Selection Guide", "href": "/resources/superalloy-selection-guide/", "desc": "Systematic framework for selecting the right high-temperature alloy."},
        {"title": "AI in Manufacturing", "href": "/resources/ai-manufacturing-optimization/", "desc": "How AI is transforming superalloy casting, forging, and machining."},
        {"title": "5 CNC Machining Challenges", "href": "/resources/5-axis-cnc-challenges-superalloys/", "desc": "Overcoming the top challenges in superalloy CNC machining."},
    ]
    cards = ""
    for res in resources:
        cards += f'''<a href="{res["href"]}" class="service-card">
            <h3>{res["title"]}</h3>
            <p>{res["desc"]}</p>
            <span class="card-arrow">&rarr;</span>
        </a>\n'''

    html = f'''{head_html("Resources &amp; Technical Guides", "Technical resources, comparison guides, and expert articles on superalloy casting, forging, and machining from CastAlloy.", "superalloy resources, manufacturing guides, technical articles", "/resources/")}
<body>
{header_html()}
{trust_strip()}
<section class="page-hero resource-hero">
    <div class="container">
        <span class="hub-label">Knowledge Center</span>
        <h1>Resources &amp; Technical Guides</h1>
        <p class="hero-subtitle">Expert articles, comparison guides, and technical resources for engineers specifying superalloy, Inconel, and titanium components.</p>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="services-grid">{cards}</div>
    </div>
</section>
{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_industries_page():
    industries_data = [
        {"name": "Aerospace", "desc": "Turbine engine components, structural airframe parts, fasteners, and exhaust systems in Inconel, titanium, and other superalloys."},
        {"name": "Oil &amp; Gas", "desc": "Subsea equipment, valve bodies, downhole tools, wellhead components, and pump parts in corrosion-resistant alloys."},
        {"name": "Power Generation", "desc": "Gas turbine hot-section components, steam turbine parts, heat exchangers, and valve assemblies for conventional and nuclear power."},
        {"name": "Nuclear &amp; SMR", "desc": "Reactor vessel internals, control rod mechanisms, heat exchangers, and safety-critical structural components."},
        {"name": "Automotive", "desc": "High-performance turbocharger components, exhaust manifolds, transmission parts, and precision-machined engine components."},
        {"name": "Mining", "desc": "Wear-resistant pump components, valve bodies, crusher parts, and material handling equipment in hardened alloys."},
        {"name": "Medical", "desc": "Titanium and cobalt-chrome orthopedic implants, surgical instruments, and precision medical device components."},
        {"name": "Marine &amp; Subsea", "desc": "Propeller components, seawater system parts, and subsea connectors in corrosion-resistant Inconel and titanium alloys."},
        {"name": "Chemical Processing", "desc": "Reactor vessels, heat exchangers, piping components, and valve trim in alloys resistant to acids and chlorides."},
        {"name": "Defense", "desc": "Mission-critical structural components, armor system parts, and specialized hardware for military applications."},
    ]
    cards = ""
    for ind in industries_data:
        cards += f'''<div class="industry-card">
            <h3>{ind["name"]}</h3>
            <p>{ind["desc"]}</p>
        </div>\n'''

    html = f'''{head_html("Industries Served – Aerospace, Oil & Gas, Power, Medical & More", "CastAlloy serves aerospace, oil and gas, power generation, nuclear, automotive, mining, medical, marine, chemical, and defense industries with precision casting, forging, and machining.", "manufacturing industries, aerospace casting, oil gas forging", "/industries/")}
<body>
{header_html()}
{trust_strip()}
<section class="page-hero">
    <div class="container">
        <h1>Industries We Serve</h1>
        <p class="hero-subtitle">Delivering precision-manufactured components to the world's most demanding industries.</p>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="services-grid">{cards}</div>
    </div>
</section>
{cta_section()}
{footer_html()}
</body>
</html>'''
    return html


def generate_404():
    html = f'''{head_html("Page Not Found", "The page you are looking for could not be found.")}
<body>
{header_html()}
<section class="section" style="text-align:center; padding:120px 0;">
    <div class="container">
        <h1 style="font-size:4rem; color:var(--navy);">404</h1>
        <p style="font-size:1.25rem; margin:24px 0;">The page you're looking for doesn't exist.</p>
        <a href="/" class="btn btn-primary">Return Home</a>
    </div>
</section>
{footer_html()}
</body>
</html>'''
    return html


# ============================================================
# SITEMAP GENERATOR
# ============================================================

def generate_sitemap(all_urls):
    entries = ""
    for url in all_urls:
        entries += f'''  <url>
    <loc>https://www.cast-alloy.com{url}</loc>
    <changefreq>weekly</changefreq>
    <priority>{"1.0" if url == "/" else "0.8"}</priority>
  </url>\n'''
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{entries}</urlset>'''


def generate_robots():
    return """User-agent: *
Allow: /
Sitemap: https://www.cast-alloy.com/sitemap.xml
"""


# ============================================================
# BUILD
# ============================================================

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  ✓ {path}")

def build():
    base = "/home/claude/forcebeyond-site/dist"
    all_urls = ["/"]

    print("Building CastAlloy site...")

    # Homepage
    write_file(f"{base}/index.html", generate_homepage())

    # Keyword pages (14 target)
    for page in KEYWORD_PAGES:
        path = f"{base}/{page['dir']}/{page['slug']}/index.html"
        write_file(path, generate_keyword_page(page))
        all_urls.append(f"/{page['dir']}/{page['slug']}/")

    # Hub pages (3)
    for hub in HUB_PAGES:
        path = f"{base}/{hub['dir']}/{hub['slug']}/index.html"
        write_file(path, generate_hub_page(hub))
        all_urls.append(f"/{hub['dir']}/{hub['slug']}/")

    # AI pages (5)
    for page in AI_PAGES:
        path = f"{base}/{page['dir']}/{page['slug']}/index.html"
        write_file(path, generate_ai_page(page))
        all_urls.append(f"/{page['dir']}/{page['slug']}/")

    # Static pages
    write_file(f"{base}/contact/index.html", generate_contact_page())
    all_urls.append("/contact/")
    write_file(f"{base}/about/index.html", generate_about_page())
    all_urls.append("/about/")
    write_file(f"{base}/services/index.html", generate_services_index())
    all_urls.append("/services/")
    write_file(f"{base}/resources/index.html", generate_resources_index())
    all_urls.append("/resources/")
    write_file(f"{base}/industries/index.html", generate_industries_page())
    all_urls.append("/industries/")

    # Materials index (redirect to superalloys hub)
    write_file(f"{base}/materials/index.html", generate_services_index().replace("Manufacturing Services", "Materials"))

    # 404
    write_file(f"{base}/404.html", generate_404())

    # Sitemap & robots
    write_file(f"{base}/sitemap.xml", generate_sitemap(all_urls))
    write_file(f"{base}/robots.txt", generate_robots())

    # CNAME (optional - update with actual domain)
    write_file(f"{base}/CNAME", "www.cast-alloy.com")

    print(f"\n✅ Built {len(all_urls)} pages + sitemap + robots.txt")
    print(f"   Total keyword pages: {len(KEYWORD_PAGES)}")
    print(f"   Total hub pages: {len(HUB_PAGES)}")
    print(f"   Total AI/resource pages: {len(AI_PAGES)}")

if __name__ == "__main__":
    build()
