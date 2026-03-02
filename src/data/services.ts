// ============================================================
// SINGLE SOURCE OF TRUTH — add entries here to generate new pages
// ============================================================

export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  secondaryKeywords: string[];
  material: string;
  process: string;
  heroTagline: string;
  heroDescription: string;
  overview: string;
  specifications: { label: string; value: string }[];
  applications: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const TARGET_KEYWORDS: ServicePage[] = [
  {
    slug: 'superalloys-casting',
    title: 'Superalloys Casting Services',
    metaTitle: 'Superalloys Casting | Vacuum Investment Casting – SuperAlloyPro',
    metaDescription: 'Premium superalloy casting including vacuum investment casting for Inconel, Hastelloy, and nickel-based alloys. ISO 9001. Request a quote.',
    keyword: 'superalloys casting',
    secondaryKeywords: ['superalloy investment casting', 'nickel alloy casting', 'vacuum casting superalloys'],
    material: 'superalloys',
    process: 'casting',
    heroTagline: 'Precision Superalloy Casting for Extreme Environments',
    heroDescription: 'Vacuum investment casting of nickel-based, cobalt-based, and iron-based superalloys for aerospace, energy, and gas turbine applications.',
    overview: `Superalloy casting forms complex components from high-performance alloys that maintain exceptional mechanical properties at temperatures exceeding 1,000°F. We specialize in vacuum investment casting (VIM) of nickel-based superalloys including Inconel, Hastelloy, Waspaloy, and René alloys.\n\nOur vacuum process eliminates oxide formation and porosity. Combined with Hot Isostatic Pressing (HIP), our castings deliver mechanical properties approaching forged components. We produce near-net-shape geometries with wall thicknesses as low as 0.030" (0.75mm).`,
    specifications: [
      { label: 'Alloy Families', value: 'Inconel, Hastelloy, Waspaloy, René, MAR-M, Stellite' },
      { label: 'Casting Process', value: 'Vacuum Investment Casting (VIM + HIP)' },
      { label: 'Weight Range', value: '0.02 – 220 lbs' },
      { label: 'Tolerances', value: 'ISO 8062 CT5–CT7 (±0.005"/inch)' },
      { label: 'Min Wall Thickness', value: '0.030" (0.75mm)' },
      { label: 'Quality Standards', value: 'ISO 9001, NADCAP, AMS specs' },
    ],
    applications: ['Gas turbine blades and vanes', 'Combustion liners', 'Nuclear reactor components', 'Pump impellers', 'Heat exchangers', 'Turbocharger wheels'],
    industries: ['Aerospace', 'Power Generation', 'Nuclear & SMR', 'Oil & Gas', 'Chemical Processing'],
    faqs: [
      { question: 'What is vacuum investment casting for superalloys?', answer: 'Vacuum investment casting melts and pours superalloy material under high vacuum using induction heating. The vacuum prevents harmful oxide formation in reactive alloys like Inconel and titanium, ensuring maximum purity and mechanical properties.' },
      { question: 'Which superalloys can be investment cast?', answer: 'Most nickel-based (Inconel 718, 625, Hastelloy X, Waspaloy), cobalt-based (Stellite, MAR-M-509), and iron-based superalloys can be investment cast. Choice depends on temperature, corrosion environment, and required properties.' },
      { question: 'How do superalloy casting costs compare to machining from bar stock?', answer: 'For complex geometries, investment casting is typically 30-60% cheaper than machining from bar stock because near-net-shape casting minimizes material waste and machining time on these expensive alloys.' },
    ],
    relatedSlugs: ['superalloys-forging', 'superalloys-machining', 'inconel-casting', 'inconel-718-casting'],
  },
  {
    slug: 'superalloys-forging',
    title: 'Superalloys Forging Services',
    metaTitle: 'Superalloys Forging | High-Performance Alloy Forging – SuperAlloyPro',
    metaDescription: 'Custom superalloy forging for aerospace, energy, and defense. Open-die and closed-die forging of Inconel, Waspaloy, and nickel alloys. Get a quote.',
    keyword: 'superalloys forging',
    secondaryKeywords: ['superalloy forging manufacturer', 'nickel alloy forging', 'aerospace forging'],
    material: 'superalloys',
    process: 'forging',
    heroTagline: 'High-Performance Superalloy Forging',
    heroDescription: 'Open-die and closed-die forging of nickel-based superalloys for applications requiring superior grain structure and fatigue resistance.',
    overview: `Superalloy forging produces components with superior grain structure, fatigue resistance, and mechanical integrity compared to cast equivalents. The controlled deformation aligns grain flow to follow part geometry, enabling components that withstand extreme cyclic stresses.\n\nOur capabilities span open-die forging for large components (up to 5,000 lbs), closed-die forging for complex near-net-shape parts, and rolled ring forging for seamless rings and flanges.`,
    specifications: [
      { label: 'Forging Types', value: 'Open-die, Closed-die, Rolled Ring' },
      { label: 'Weight Range', value: 'Up to 5,000 lbs' },
      { label: 'Ring Diameter', value: 'Up to 110 inches' },
      { label: 'Materials', value: 'Inconel, Waspaloy, Haynes, René, Nimonic' },
      { label: 'Testing', value: 'UT, chemical analysis, tensile, creep, fatigue' },
    ],
    applications: ['Turbine discs and shafts', 'Compressor blades', 'Pressure vessel components', 'Fasteners', 'Valve bodies'],
    industries: ['Aerospace', 'Power Generation', 'Oil & Gas', 'Defense', 'Nuclear'],
    faqs: [
      { question: 'When should I choose forging over casting?', answer: 'Forging is preferred for high cyclic stress (fatigue), when grain flow alignment is critical, or for relatively simple geometries. Casting is better for complex shapes where machining from a forging would waste too much material.' },
      { question: 'What is the difference between open-die and closed-die forging?', answer: 'Open-die uses flat dies for large, simple shapes. Closed-die uses shaped cavities to produce near-net-shape parts with tighter tolerances for moderate volumes of complex parts.' },
    ],
    relatedSlugs: ['superalloys-casting', 'superalloys-machining', 'inconel-forging', 'inconel-718-forging'],
  },
  {
    slug: 'superalloys-machining',
    title: 'Superalloys Machining Services',
    metaTitle: 'Superalloys Machining | Precision CNC Machining – SuperAlloyPro',
    metaDescription: 'Expert CNC machining of superalloys including Inconel and Hastelloy. 5-axis capability, tight tolerances. Request a quote.',
    keyword: 'superalloys machining',
    secondaryKeywords: ['superalloy CNC machining', 'nickel alloy machining', '5-axis superalloy machining'],
    material: 'superalloys',
    process: 'machining',
    heroTagline: 'Precision CNC Machining of Superalloys',
    heroDescription: '3-axis through 5-axis CNC machining of nickel-based superalloys with specialized tooling and process expertise for tight-tolerance components.',
    overview: `Machining superalloys is one of the most challenging operations in manufacturing. High strength, work hardening, low thermal conductivity, and abrasion resistance make these materials difficult to cut.\n\nOur facility features rigid CNC machines with high-pressure coolant (1,000+ PSI), ceramic and carbide tooling, and cryogenic cooling. Our 5-axis capability enables single-setup machining of complex geometries like turbine blades and impellers.`,
    specifications: [
      { label: 'CNC Capability', value: '3-axis, 4-axis, 5-axis simultaneous, CNC turning' },
      { label: 'Tolerances', value: '±0.0005" achievable' },
      { label: 'Surface Finish', value: 'Down to 16 Ra µin' },
      { label: 'Coolant Systems', value: 'High-pressure (1000+ PSI), flood, cryogenic' },
      { label: 'Inspection', value: 'CMM, optical comparator, surface profilometry' },
    ],
    applications: ['Turbine blade finish machining', 'Impeller 5-axis milling', 'Valve body boring', 'Seal surface finishing'],
    industries: ['Aerospace', 'Power Generation', 'Oil & Gas', 'Chemical Processing'],
    faqs: [
      { question: 'Why is superalloy machining so difficult?', answer: 'Superalloys combine high strength at cutting temperatures, rapid work hardening, low thermal conductivity, and high abrasiveness. This causes rapid tool wear and surface integrity issues if not managed properly.' },
    ],
    relatedSlugs: ['superalloys-casting', 'superalloys-forging', 'inconel-machining', 'titanium-machining'],
  },
  {
    slug: 'inconel-casting',
    title: 'Inconel Casting Services',
    metaTitle: 'Inconel Casting | Vacuum Precision Investment Casting – SuperAlloyPro',
    metaDescription: 'Inconel casting for 718, 625, 713, and other grades. Vacuum investment casting with HIP. Aerospace and nuclear applications. Get a quote.',
    keyword: 'inconel casting',
    secondaryKeywords: ['inconel investment casting', 'inconel alloy casting', 'nickel alloy casting'],
    material: 'inconel',
    process: 'casting',
    heroTagline: 'Inconel Casting — From Prototype to Production',
    heroDescription: 'Vacuum precision investment casting of all Inconel grades including 718, 625, 713, and 738 for demanding thermal and corrosive environments.',
    overview: `Inconel is a family of nickel-chromium superalloys engineered for extreme environments. With operating temperatures up to 2,000°F and exceptional corrosion resistance, Inconel is the material of choice for gas turbines, nuclear reactors, and chemical processing.\n\nWe cast the full range of Inconel alloys using vacuum induction melting (VIM). Our investment casting process produces complex geometries to near-net shape, minimizing expensive machining.`,
    specifications: [
      { label: 'Inconel Grades', value: '718, 625, 713C, 738, 792, X-750, 600, 601' },
      { label: 'Casting Method', value: 'Vacuum Investment Casting (VIM)' },
      { label: 'Post-Processing', value: 'HIP, solution treatment, precipitation hardening' },
      { label: 'Weight Range', value: '0.02 – 220 lbs' },
      { label: 'NDT', value: 'X-ray, FPI, UT, CMM inspection' },
    ],
    applications: ['Jet engine components', 'Gas turbine hardware', 'Nuclear reactor internals', 'Chemical processing vessels', 'Marine hardware'],
    industries: ['Aerospace', 'Nuclear & SMR', 'Oil & Gas', 'Chemical Processing', 'Marine'],
    faqs: [
      { question: 'What is Inconel?', answer: 'Inconel is a family of nickel-chromium superalloys that retain strength at extreme temperatures and resist oxidation and corrosion in harsh environments.' },
      { question: 'Why must Inconel be cast under vacuum?', answer: 'Inconel contains reactive elements (aluminum, titanium, niobium) that form harmful oxides when exposed to air during melting. Vacuum melting ensures maximum purity and optimal properties.' },
    ],
    relatedSlugs: ['inconel-718-casting', 'inconel-625-casting', 'inconel-forging', 'superalloys-casting'],
  },
  {
    slug: 'inconel-forging',
    title: 'Inconel Forging Services',
    metaTitle: 'Inconel Forging | Custom Nickel Alloy Forgings – SuperAlloyPro',
    metaDescription: 'Custom Inconel forging for 718, 625, and other grades. Open-die, closed-die, and ring forgings. Request a quote.',
    keyword: 'inconel forging',
    secondaryKeywords: ['inconel alloy forging', 'nickel alloy forging', 'custom inconel forgings'],
    material: 'inconel',
    process: 'forging',
    heroTagline: 'Custom Inconel Forgings for Critical Applications',
    heroDescription: 'Open-die, closed-die, and ring forging of Inconel alloys with optimized grain flow for maximum fatigue life.',
    overview: `Inconel forging produces components with the highest possible mechanical integrity. Controlled plastic deformation refines grain structure and closes porosity, producing components that outperform castings in fatigue-critical applications.\n\nOur services cover small closed-die forgings to large open-die forgings up to several thousand pounds, plus seamless rolled ring forgings for flanges and casings.`,
    specifications: [
      { label: 'Grades', value: '718, 625, 600, 601, X-750, 725' },
      { label: 'Forging Types', value: 'Open-die, closed-die, rolled ring, upset' },
      { label: 'Weight Range', value: 'Up to 5,000 lbs' },
      { label: 'Heat Treatment', value: 'Solution annealing, precipitation hardening' },
    ],
    applications: ['Turbine discs', 'Valve bodies', 'Flanges', 'Fasteners', 'Pressure vessel heads'],
    industries: ['Aerospace', 'Oil & Gas', 'Power Generation', 'Nuclear'],
    faqs: [
      { question: 'What are the advantages of Inconel forgings over castings?', answer: 'Forgings offer superior fatigue strength (2-3x improvement), more uniform properties, better ductility, and absence of casting defects. Preferred for rotating components and pressure-containing applications.' },
    ],
    relatedSlugs: ['inconel-casting', 'inconel-machining', 'inconel-718-forging', 'superalloys-forging'],
  },
  {
    slug: 'inconel-machining',
    title: 'Inconel Machining Services',
    metaTitle: 'Inconel Machining | CNC Machining Inconel 718, 625 – SuperAlloyPro',
    metaDescription: 'Precision CNC machining of Inconel alloys. Specialized tooling, high-pressure coolant, 5-axis capability. Get a quote.',
    keyword: 'inconel machining',
    secondaryKeywords: ['CNC machining inconel', 'inconel 718 machining', 'inconel milling'],
    material: 'inconel',
    process: 'machining',
    heroTagline: 'Precision Inconel Machining — Tight Tolerances, Complex Geometries',
    heroDescription: 'Dedicated CNC machining cells for Inconel with specialized tooling, high-pressure coolant, and deep expertise in managing work hardening.',
    overview: `Inconel is one of the most challenging materials to machine. High nickel content, work-hardening behavior, and low thermal conductivity combine to destroy conventional tooling.\n\nOur Inconel machining cells feature rigid CNC machines with through-spindle high-pressure coolant (1,000+ PSI), specialized ceramic and coated carbide tooling, and advanced tool paths that prevent work hardening.`,
    specifications: [
      { label: 'Materials', value: 'Inconel 718, 625, 600, 601, X-750, Hastelloy' },
      { label: 'Operations', value: 'Milling (3/4/5-axis), turning, drilling, boring, grinding' },
      { label: 'Tolerances', value: '±0.0005" achievable' },
      { label: 'Surface Finish', value: '16 Ra µin or better' },
    ],
    applications: ['Casting/forging finish machining', 'Turbine components', 'Valve trim', 'Seal surfaces', 'Complex 5-axis profiles'],
    industries: ['Aerospace', 'Oil & Gas', 'Nuclear', 'Chemical Processing'],
    faqs: [
      { question: 'Why does Inconel work harden during machining?', answer: 'Inconel has an FCC crystal structure that deforms and strengthens under stress. During cutting, material ahead of the tool hardens rapidly. If the next cut doesn\'t go deep enough, each pass gets progressively harder.' },
    ],
    relatedSlugs: ['inconel-casting', 'inconel-forging', 'inconel-718-machining', 'superalloys-machining'],
  },
  {
    slug: 'inconel-718-casting',
    title: 'Inconel 718 Casting Services',
    metaTitle: 'Inconel 718 Casting | Vacuum Investment Casting IN718 – SuperAlloyPro',
    metaDescription: 'Inconel 718 vacuum investment casting for gas turbines, aerospace, and cryogenic applications. Near-net-shape precision. Get a quote.',
    keyword: 'inconel 718 casting',
    secondaryKeywords: ['IN718 casting', 'inconel 718 investment casting', 'alloy 718 casting'],
    material: 'inconel-718',
    process: 'casting',
    heroTagline: 'Inconel 718 Casting — The Industry Standard',
    heroDescription: 'Vacuum investment casting of Inconel 718 (UNS N07718) for applications requiring exceptional strength and creep resistance up to 1300°F.',
    overview: `Inconel 718 is the world's most widely used superalloy, accounting for over 50% of all superalloy production. Its combination of high strength (up to 180 ksi tensile), creep resistance to 1300°F, corrosion resistance, and weldability makes it the default for demanding applications.\n\nOur IN718 process uses vacuum induction melting (VIM) with HIP and double aging to develop the gamma-prime and gamma-double-prime precipitates that give 718 its exceptional strength.`,
    specifications: [
      { label: 'Alloy', value: 'Inconel 718 (UNS N07718, AMS 5383)' },
      { label: 'Tensile Strength', value: 'Up to 180 ksi (1,240 MPa) after aging' },
      { label: 'Operating Temp', value: 'Up to 1300°F (700°C)' },
      { label: 'Casting Method', value: 'Vacuum Investment Casting (VIM + HIP)' },
      { label: 'Heat Treatment', value: 'Solution treat + double age' },
    ],
    applications: ['Gas turbine components', 'Jet engine cases', 'Cryogenic equipment', 'Oil well tools', 'Rocket components'],
    industries: ['Aerospace', 'Power Generation', 'Nuclear & SMR', 'Oil & Gas', 'Space'],
    faqs: [
      { question: 'What makes Inconel 718 the most popular superalloy?', answer: 'IN718 offers the best combination of high strength, good weldability, and reasonable cost. Its sluggish aging response allows welding without cracking, making fabrication and repair much easier than other superalloys.' },
      { question: 'What specs cover Inconel 718 castings?', answer: 'Common specs include AMS 5383 (investment castings), ASTM A494, and numerous OEM-specific requirements. Material must comply with UNS N07718 chemistry.' },
    ],
    relatedSlugs: ['inconel-718-forging', 'inconel-718-machining', 'inconel-casting', 'inconel-625-casting'],
  },
  {
    slug: 'inconel-718-forging',
    title: 'Inconel 718 Forging Services',
    metaTitle: 'Inconel 718 Forging | Custom IN718 Forgings – SuperAlloyPro',
    metaDescription: 'Custom Inconel 718 forging for turbine discs, shafts, and rings. Optimized grain flow. Aerospace and energy specs. Get a quote.',
    keyword: 'inconel 718 forging',
    secondaryKeywords: ['IN718 forging', 'alloy 718 forging', 'inconel 718 ring forging'],
    material: 'inconel-718',
    process: 'forging',
    heroTagline: 'Inconel 718 Forging — Maximum Strength for Rotating Hardware',
    heroDescription: 'Custom forgings in Inconel 718 with optimized grain structure for turbine discs, compressor rings, and fatigue-critical components.',
    overview: `Inconel 718 is the most forged superalloy, prized for its excellent forgeability. When forged and heat treated, IN718 achieves properties that exceed cast equivalents — making it preferred for rotating and fatigue-critical applications.\n\nWe forge in the range of 1700–1850°F with controlled deformation rates to achieve target grain size (ASTM 5 or finer), followed by solution treatment and double aging.`,
    specifications: [
      { label: 'Alloy', value: 'Inconel 718 (UNS N07718)' },
      { label: 'Forging Temp', value: '1700–1850°F (925–1010°C)' },
      { label: 'Grain Size', value: 'ASTM 5 or finer' },
      { label: 'Tensile Strength', value: '180+ ksi after aging' },
    ],
    applications: ['Turbine discs', 'Compressor rings', 'Drive shafts', 'Fasteners', 'Wellhead components'],
    industries: ['Aerospace', 'Power Generation', 'Oil & Gas', 'Nuclear', 'Defense'],
    faqs: [
      { question: 'What forging temperature for Inconel 718?', answer: 'IN718 is typically forged between 1700°F and 1850°F. Lower temperatures produce finer grain but require more force; higher temperatures improve forgeability but risk grain coarsening.' },
    ],
    relatedSlugs: ['inconel-718-casting', 'inconel-718-machining', 'inconel-forging', 'superalloys-forging'],
  },
  {
    slug: 'inconel-718-machining',
    title: 'Inconel 718 Machining Services',
    metaTitle: 'Inconel 718 Machining | Precision CNC IN718 – SuperAlloyPro',
    metaDescription: 'Precision CNC machining of Inconel 718 with specialized tooling and process control. Aerospace tolerances. Get a quote.',
    keyword: 'inconel 718 machining',
    secondaryKeywords: ['CNC machining inconel 718', 'IN718 machining', 'machining alloy 718'],
    material: 'inconel-718',
    process: 'machining',
    heroTagline: 'Inconel 718 Machining — Expertise in the World\'s Most-Used Superalloy',
    heroDescription: 'Dedicated machining cells for Inconel 718 with optimized cutting parameters and quality controls for aerospace-grade results.',
    overview: `Inconel 718 in age-hardened condition (40+ HRC) presents significant machining challenges. We use SiAlON ceramic inserts at 600-1000 SFM for roughing and coated carbide for finishing, with through-spindle high-pressure coolant on all operations.\n\nSurface integrity is a primary concern. We monitor for white layer formation and residual stress to meet aerospace surface integrity requirements.`,
    specifications: [
      { label: 'Material Condition', value: 'Annealed (25 HRC) or aged (40+ HRC)' },
      { label: 'Rough Speeds', value: '600–1000 SFM (ceramic), 80–150 SFM (carbide)' },
      { label: 'Tolerances', value: '±0.0005" on critical features' },
      { label: 'Surface Integrity', value: 'No white layer, controlled residual stress' },
    ],
    applications: ['Turbine disc machining', 'Casting finish machining', 'Fastener manufacturing', 'Valve components'],
    industries: ['Aerospace', 'Power Generation', 'Oil & Gas', 'Nuclear'],
    faqs: [
      { question: 'Machine before or after aging?', answer: 'Rough machining is best done in solution-treated (softer) condition before aging. Finish machining can be done after aging but requires more aggressive parameters.' },
    ],
    relatedSlugs: ['inconel-718-casting', 'inconel-718-forging', 'inconel-machining', 'superalloys-machining'],
  },
  {
    slug: 'inconel-625-casting',
    title: 'Inconel 625 Casting Services',
    metaTitle: 'Inconel 625 Casting | Corrosion-Resistant Casting – SuperAlloyPro',
    metaDescription: 'Inconel 625 casting for marine, chemical, and nuclear applications. Superior corrosion resistance. Vacuum investment casting. Get a quote.',
    keyword: 'inconel 625 casting',
    secondaryKeywords: ['IN625 casting', 'inconel 625 investment casting', 'corrosion resistant casting'],
    material: 'inconel-625',
    process: 'casting',
    heroTagline: 'Inconel 625 Casting — Superior Corrosion Resistance',
    heroDescription: 'Vacuum investment casting of Inconel 625 for applications demanding exceptional resistance to seawater, acids, and high-temperature oxidation.',
    overview: `Inconel 625 is the premier choice when corrosion resistance is the primary driver. High molybdenum and niobium content provides outstanding resistance to pitting, crevice corrosion, and stress corrosion cracking in chloride environments.\n\nIN625 is solid-solution strengthened, maintaining good ductility even as-cast — excellent for pressure-containing applications. Widely used in nuclear SMR programs.`,
    specifications: [
      { label: 'Alloy', value: 'Inconel 625 (UNS N06625, AMS 5391)' },
      { label: 'Strength', value: '120 ksi tensile (solution treated)' },
      { label: 'Max Service Temp', value: '1800°F (982°C)' },
      { label: 'Corrosion Resistance', value: 'Exceptional in seawater, chlorides, acids' },
      { label: 'Weldability', value: 'Excellent — no PWHT required' },
    ],
    applications: ['Nuclear SMR coolant components', 'Seawater pump/valve bodies', 'Chemical reactor vessels', 'Offshore hardware', 'Subsea equipment'],
    industries: ['Nuclear & SMR', 'Marine', 'Chemical Processing', 'Oil & Gas Offshore'],
    faqs: [
      { question: 'Inconel 625 vs 718?', answer: '625 is solid-solution strengthened with superior corrosion resistance but lower strength than 718. Choose 625 for corrosion; choose 718 for high-temperature strength.' },
    ],
    relatedSlugs: ['inconel-625-forging', 'inconel-625-machining', 'inconel-casting', 'inconel-718-casting'],
  },
  {
    slug: 'inconel-625-forging',
    title: 'Inconel 625 Forging Services',
    metaTitle: 'Inconel 625 Forging | Corrosion-Resistant Forgings – SuperAlloyPro',
    metaDescription: 'Custom Inconel 625 forgings for marine, nuclear, and chemical processing. Open-die and ring forgings. Request a quote.',
    keyword: 'inconel 625 forging',
    secondaryKeywords: ['IN625 forging', 'alloy 625 forging', 'corrosion resistant forging'],
    material: 'inconel-625',
    process: 'forging',
    heroTagline: 'Inconel 625 Forgings — Engineered for Corrosive Environments',
    heroDescription: 'Custom forgings in Inconel 625 for the highest corrosion resistance combined with structural integrity.',
    overview: `Inconel 625 forgings combine outstanding corrosion resistance with the superior mechanical properties of the forging process. Post-forge solution annealing at 2000°F optimizes corrosion resistance.\n\nWe supply forgings to ASTM B564, ASME SB-564, and customer-specific requirements with full certification.`,
    specifications: [
      { label: 'Alloy', value: 'Inconel 625 (UNS N06625)' },
      { label: 'Specs', value: 'ASTM B564, ASME SB-564, AMS 5666' },
      { label: 'Heat Treatment', value: 'Solution anneal at 2000°F' },
      { label: 'Tensile Strength', value: '120-140 ksi' },
    ],
    applications: ['Subsea flanges and fittings', 'Valve bodies', 'Reactor vessel components', 'Pump shafts'],
    industries: ['Oil & Gas Offshore', 'Nuclear', 'Chemical Processing', 'Marine'],
    faqs: [
      { question: 'Is Inconel 625 easy to forge?', answer: 'Yes, IN625 has good forgeability with a range of 1750–2050°F. It is less prone to cracking than precipitation-hardened alloys like 718.' },
    ],
    relatedSlugs: ['inconel-625-casting', 'inconel-625-machining', 'inconel-forging', 'superalloys-forging'],
  },
  {
    slug: 'inconel-625-machining',
    title: 'Inconel 625 Machining Services',
    metaTitle: 'Inconel 625 Machining | CNC Machining IN625 – SuperAlloyPro',
    metaDescription: 'Precision CNC machining of Inconel 625 castings and forgings. Specialized tooling for corrosion-resistant alloys. Get a quote.',
    keyword: 'inconel 625 machining',
    secondaryKeywords: ['CNC machining inconel 625', 'IN625 machining'],
    material: 'inconel-625',
    process: 'machining',
    heroTagline: 'Inconel 625 Machining — Precision Finishing for Corrosion-Critical Parts',
    heroDescription: 'CNC machining of Inconel 625 castings and forgings with specialized tooling optimized for this solid-solution strengthened alloy.',
    overview: `IN625 is softer (~25 HRC) than aged 718 but has strong built-up edge tendency and work hardens aggressively. We use sharp, positive-rake tooling with aggressive chip loads and high-pressure coolant.\n\nFor corrosion-critical parts, we use iron-free tooling to prevent surface contamination that would compromise corrosion resistance.`,
    specifications: [
      { label: 'Material Condition', value: 'Solution annealed (~25 HRC)' },
      { label: 'Cutting Speeds', value: '100–175 SFM (carbide)' },
      { label: 'Tolerances', value: '±0.001" standard, ±0.0005" achievable' },
      { label: 'Contamination Control', value: 'Iron-free tooling for corrosion-critical parts' },
    ],
    applications: ['Valve trim machining', 'Flange facing', 'Pump components', 'Seal surface finishing'],
    industries: ['Oil & Gas', 'Chemical Processing', 'Nuclear', 'Marine'],
    faqs: [
      { question: 'Is IN625 easier to machine than 718?', answer: 'In solution-annealed condition, yes — it is softer and generates less tool wear, though it is gummier. Overall costs are typically 10-20% lower than aged 718.' },
    ],
    relatedSlugs: ['inconel-625-casting', 'inconel-625-forging', 'inconel-machining', 'superalloys-machining'],
  },
  {
    slug: 'titanium-casting',
    title: 'Titanium Casting Services',
    metaTitle: 'Titanium Casting | Investment Casting Ti-6Al-4V – SuperAlloyPro',
    metaDescription: 'Titanium investment casting for aerospace, medical, and marine. Grade 2, Ti-6Al-4V, and custom alloys. ISO certified. Get a quote.',
    keyword: 'titanium casting',
    secondaryKeywords: ['titanium investment casting', 'Ti-6Al-4V casting', 'precision titanium casting'],
    material: 'titanium',
    process: 'casting',
    heroTagline: 'Titanium Casting — Lightweight Strength for Critical Applications',
    heroDescription: 'Vacuum investment casting of titanium alloys including CP Grade 2 and Ti-6Al-4V for aerospace, medical, and marine components.',
    overview: `Titanium casting combines extraordinary strength-to-weight ratio (40% lighter than steel) with the design freedom of investment casting. Titanium's extreme reactivity requires vacuum casting with yttria-based ceramic molds.\n\nWe cast from commercially pure Grade 2 for corrosion applications to Ti-6Al-4V (Grade 5) — the workhorse aerospace alloy. Post-casting HIP is standard for structural applications.`,
    specifications: [
      { label: 'Alloys', value: 'CP Grade 2, Ti-6Al-4V (Grade 5), custom' },
      { label: 'Casting Method', value: 'Vacuum Investment Casting' },
      { label: 'Shell System', value: 'Yttria-based (titanium-compatible)' },
      { label: 'Weight Range', value: '0.1 – 100 lbs' },
      { label: 'Post-Processing', value: 'HIP, solution treatment, aging' },
    ],
    applications: ['Aircraft structural parts', 'Surgical implants', 'Pump/valve components', 'Marine propellers', 'Armor components'],
    industries: ['Aerospace', 'Medical', 'Marine', 'Defense', 'Automotive Racing'],
    faqs: [
      { question: 'Why is titanium casting more expensive?', answer: 'Higher raw material cost, need for vacuum melting, specialized ceramic shells (standard shells react with titanium), and slower processing. Weight savings often justify the cost in aerospace and medical.' },
    ],
    relatedSlugs: ['titanium-machining', 'inconel-casting', 'superalloys-casting'],
  },
  {
    slug: 'titanium-machining',
    title: 'Titanium Machining Services',
    metaTitle: 'Titanium Machining | CNC Machining Ti-6Al-4V – SuperAlloyPro',
    metaDescription: 'Precision CNC machining of titanium alloys. 5-axis capability, aerospace tolerances, specialized tooling. Get a quote.',
    keyword: 'titanium machining',
    secondaryKeywords: ['CNC machining titanium', 'Ti-6Al-4V machining', '5-axis titanium machining'],
    material: 'titanium',
    process: 'machining',
    heroTagline: 'Titanium Machining — Aerospace Precision, Every Cut',
    heroDescription: '3-to-5-axis CNC machining of titanium alloys with specialized tooling and proven processes for aerospace and medical components.',
    overview: `Titanium's extremely low thermal conductivity concentrates heat at the tool tip, it tends to gall and weld to tools, and high springback complicates dimensional control.\n\nWe use uncoated or TiAlN-coated carbide tools (never titanium-coated, which weld to the workpiece), sharp edges, rigid setups, and abundant high-pressure coolant. 5-axis simultaneous machining enables single-setup production of complex aerospace structural components.`,
    specifications: [
      { label: 'Alloys', value: 'CP Grades 1-4, Ti-6Al-4V, custom' },
      { label: 'Operations', value: '3/4/5-axis milling, turning, drilling, grinding' },
      { label: 'Cutting Speeds', value: '150–250 SFM (carbide)' },
      { label: 'Tolerances', value: '±0.001" standard, ±0.0005" achievable' },
      { label: 'Inspection', value: 'CMM, profilometry, residual stress (XRD)' },
    ],
    applications: ['Aircraft structural machining', 'Landing gear parts', 'Medical implants', 'Marine propeller finishing'],
    industries: ['Aerospace', 'Medical', 'Marine', 'Defense'],
    faqs: [
      { question: 'What cutting tools for titanium?', answer: 'Uncoated or TiAlN-coated tungsten carbide with sharp edges and positive rake. Never use titanium-based coatings (TiN, TiC) as they have chemical affinity with the workpiece.' },
    ],
    relatedSlugs: ['titanium-casting', 'inconel-machining', 'superalloys-machining'],
  },
];

// ─── CONTENT HUBS ────────────────────────────────────────────
export interface ContentHub {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  overview: string;
  childSlugs: string[];
}

export const CONTENT_HUBS: ContentHub[] = [
  {
    slug: 'superalloys',
    title: 'Superalloys — Complete Guide',
    metaTitle: 'Superalloys | Casting, Forging & Machining – SuperAlloyPro',
    metaDescription: 'Complete guide to superalloys: casting, forging, and machining of nickel, cobalt, and iron-based high-temperature alloys.',
    heroTagline: 'Superalloys: Engineering Excellence for Extreme Environments',
    heroDescription: 'Your complete resource for superalloy manufacturing — material selection through casting, forging, and precision machining.',
    overview: `Superalloys maintain mechanical properties at temperatures approaching their melting points. The three families — nickel-based (Inconel, Hastelloy), cobalt-based (Stellite), and iron-based (A-286) — each offer distinct combinations of strength, corrosion resistance, and temperature capability.\n\nAt SuperAlloyPro, we provide vacuum investment casting, forging, and precision CNC machining — optimized together for these demanding materials.`,
    childSlugs: ['superalloys-casting', 'superalloys-forging', 'superalloys-machining'],
  },
  {
    slug: 'inconel',
    title: 'Inconel Alloys — Manufacturing Guide',
    metaTitle: 'Inconel | Casting, Forging & Machining All Grades – SuperAlloyPro',
    metaDescription: 'Complete Inconel manufacturing guide: casting, forging, and machining of 718, 625, and other grades for aerospace, nuclear, and energy.',
    heroTagline: 'Inconel: The Definitive Resource for Engineers',
    heroDescription: 'Everything about Inconel alloys — grades, properties, manufacturing processes, and how to select the right solution.',
    overview: `The Inconel family includes dozens of compositions optimized for specific conditions. IN718 is valued for high strength and weldability. IN625 is the corrosion resistance champion. Specialty grades like IN713C are optimized for turbine blade casting.\n\nManufacturing Inconel requires specialized expertise: vacuum casting, precise forging temperatures, and specialized machining parameters.`,
    childSlugs: ['inconel-casting', 'inconel-forging', 'inconel-machining', 'inconel-718-casting', 'inconel-718-forging', 'inconel-718-machining', 'inconel-625-casting', 'inconel-625-forging', 'inconel-625-machining'],
  },
  {
    slug: 'titanium',
    title: 'Titanium — Casting & Machining Guide',
    metaTitle: 'Titanium | Casting & Machining Services – SuperAlloyPro',
    metaDescription: 'Complete titanium manufacturing guide: investment casting and CNC machining of Ti-6Al-4V and other grades for aerospace, medical, and marine.',
    heroTagline: 'Titanium: Lightweight Strength Without Compromise',
    heroDescription: 'Your guide to titanium casting and machining — material selection, capabilities, and applications.',
    overview: `Titanium offers strength of steel at 40% less weight, exceptional corrosion resistance, and biocompatibility. These properties make it the material of choice wherever weight matters.\n\nOur capabilities span vacuum investment casting and precision CNC machining, both requiring specialized expertise due to titanium's reactivity and machining characteristics.`,
    childSlugs: ['titanium-casting', 'titanium-machining'],
  },
];

// ─── AI / LONG-TAIL PAGES ────────────────────────────────────
export interface AIPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  parentHub: string;
  type: string;
  content: string;
}

export const AI_PAGES: AIPage[] = [
  { slug: 'inconel-718-vs-625', title: 'Inconel 718 vs 625: Which Alloy Is Right?', metaTitle: 'Inconel 718 vs 625 | Selection Guide – SuperAlloyPro', metaDescription: 'Compare Inconel 718 and 625: strength, corrosion, temperature, cost. Expert guidance for your project.', parentHub: 'inconel', type: 'comparison', content: 'Choosing between Inconel 718 and 625 is one of the most common material selection decisions in superalloy engineering.' },
  { slug: 'casting-vs-forging-superalloys', title: 'Casting vs Forging Superalloys: Process Selection', metaTitle: 'Casting vs Forging Superalloys | Guide – SuperAlloyPro', metaDescription: 'When to cast vs forge superalloys: cost, properties, and complexity compared.', parentHub: 'superalloys', type: 'comparison', content: 'The choice between casting and forging depends on geometry complexity, required properties, volume, and total cost.' },
  { slug: 'superalloy-selection-guide', title: 'Superalloy Selection Guide', metaTitle: 'Superalloy Selection Guide – SuperAlloyPro', metaDescription: 'Interactive guide to selecting the right superalloy. Compare Inconel, Hastelloy, Waspaloy, and titanium.', parentHub: 'superalloys', type: 'guide', content: 'Selecting the right superalloy requires balancing temperature, corrosion resistance, strength, fabricability, and cost.' },
  { slug: 'inconel-718-casting-aerospace-gas-turbines', title: 'Inconel 718 Casting for Aerospace Gas Turbines', metaTitle: 'Inconel 718 Casting for Gas Turbines – SuperAlloyPro', metaDescription: 'How Inconel 718 investment casting serves aerospace gas turbines. Components, specs, and quality requirements.', parentHub: 'inconel', type: 'application', content: 'Aerospace gas turbines are the largest consumer of Inconel 718 castings worldwide.' },
  { slug: 'titanium-casting-medical-implants', title: 'Titanium Casting for Medical Implants', metaTitle: 'Titanium Casting for Medical Implants – SuperAlloyPro', metaDescription: 'Titanium investment casting for orthopedic implants and surgical instruments. Biocompatibility and precision.', parentHub: 'titanium', type: 'application', content: 'Titanium\'s biocompatibility combined with strength-to-weight ratio makes it the material of choice for load-bearing implants.' },
  { slug: 'inconel-625-nuclear-smr-components', title: 'Inconel 625 for Nuclear SMR Components', metaTitle: 'Inconel 625 for Nuclear SMR – SuperAlloyPro', metaDescription: 'How Inconel 625 is used in Small Modular Reactors. Corrosion resistance and weldability for nuclear cooling systems.', parentHub: 'inconel', type: 'application', content: 'Small Modular Reactors represent the next generation of nuclear power, and Inconel 625 is emerging as a key structural material.' },
  { slug: '5-challenges-superalloy-machining', title: '5 Challenges in Superalloy Machining', metaTitle: '5 Superalloy Machining Challenges – SuperAlloyPro', metaDescription: 'Work hardening, tool wear, heat, surface integrity, chips — the 5 biggest challenges and solutions.', parentHub: 'superalloys', type: 'guide', content: 'Understanding the five primary challenges in superalloy machining is essential for producing quality components.' },
  { slug: 'vacuum-investment-casting-explained', title: 'Vacuum Investment Casting Explained', metaTitle: 'Vacuum Investment Casting Guide – SuperAlloyPro', metaDescription: 'How vacuum investment casting works for superalloys. Step-by-step process, benefits, and when to use it.', parentHub: 'superalloys', type: 'guide', content: 'Vacuum investment casting is the cornerstone process for superalloy components, combining geometric freedom with metallurgical purity.' },
  { slug: 'how-to-choose-superalloy-casting-supplier', title: 'How to Choose a Superalloy Casting Supplier', metaTitle: 'Choosing a Superalloy Supplier – SuperAlloyPro', metaDescription: '7 critical questions to evaluate superalloy casting suppliers. Certifications, capabilities, and quality.', parentHub: 'superalloys', type: 'guide', content: 'These seven questions help procurement teams evaluate superalloy casting suppliers systematically.' },
  { slug: 'total-cost-casting-vs-machining-bar-stock', title: 'Total Cost: Casting vs Machining from Bar Stock', metaTitle: 'Casting vs Bar Stock Cost Analysis – SuperAlloyPro', metaDescription: 'When is casting cheaper than machining bar stock? Total cost comparison for superalloys.', parentHub: 'superalloys', type: 'guide', content: 'For complex superalloy components, investment casting\'s near-net-shape advantage significantly reduces material waste and machining costs.' },
];

// Helpers
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return TARGET_KEYWORDS.find(s => s.slug === slug);
}

export function getHubBySlug(slug: string): ContentHub | undefined {
  return CONTENT_HUBS.find(h => h.slug === slug);
}
