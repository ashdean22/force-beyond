import { useState, useEffect, useRef } from "react";

// GA4 Integration
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
function gtag() { window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }
function trackPageView(path, title) { if (typeof window !== "undefined") { gtag("config", GA_MEASUREMENT_ID, { page_path: path, page_title: title }); } }
function trackEvent(action, category, label) { gtag("event", action, { event_category: category, event_label: label }); }

// Design System: Silver, Navy, White
const C = {
  navy: "#0b1d3a", navyLight: "#132d54", navyMid: "#1a3a6b",
  silver: "#b0bec5", silverLight: "#cfd8dc", silverDark: "#78909c",
  white: "#ffffff", offWhite: "#f4f6f8", ghostWhite: "#e8ecf0",
  text: "#0d1b2a", textMuted: "#4a5568", textLight: "#718096",
  accent: "#2c6fbb", accentLight: "#4a90d9",
  border: "#d2dae2", borderLight: "#e8ecf0",
  success: "#2d8a56", bg: "#f7f9fb",
};

const F = {
  display: "'Libre Baskerville', Georgia, serif",
  body: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif",
  mono: "'IBM Plex Mono', Consolas, monospace",
};

// Real Company Data from forcebeyond.com
const CO = {
  name: "ForceBeyond",
  address: "261 Quigley Blvd, Suite 18",
  city: "New Castle, Delaware 19720",
  phone: "(302) 995-6588",
  fax: "(302) 355-1166",
  email: "contact@forcebeyond.com",
  website: "www.forcebeyond.com",
  certs: ["ISO 9001:2015", "IATF 16949", "AS9100", "ISO 13485"],
  locations: ["USA", "Malaysia", "South Korea", "China", "Thailand", "Vietnam", "Taiwan"],
  customers: ["Parker", "Linamar", "NOV", "Saint-Gobain", "Snap-on", "Elkay", "Garrett", "ASEPCO", "Knoll", "Bemis", "Regal-Beloit", "RWC", "Click-Bond", "Sierra Pacific"],
  qc: "PPAP I and PPAP III endorsed. Engineering design review, raw material inspection with independent test lab reports, during-production inspection, initial production auditing, random sample of early batch production, pre-shipment inspection, and container-load check.",
};

// SVG Icon Components
function Icon({ name, size = 20, color = C.accent }) {
  const d = {
    check: <polyline points="20 6 9 17 4 12" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><polyline points="12 5 19 12 12 19" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke={color} strokeWidth="2"/><polyline points="9 12 11 14 15 10" fill="none" stroke={color} strokeWidth="2"/></>,
    globe: <><circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="2"/><line x1="2" y1="12" x2="22" y2="12" fill="none" stroke={color} strokeWidth="2"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke={color} strokeWidth="2"/></>,
    tool: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke={color} strokeWidth="2"/>,
    building: <><rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke={color} strokeWidth="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" fill="none" stroke={color} strokeWidth="2"/></>,
    flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill="none" stroke={color} strokeWidth="2"/>,
    hammer: <><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L12 9" fill="none" stroke={color} strokeWidth="2"/><path d="M17.64 15 22 10.64" fill="none" stroke={color} strokeWidth="2"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" fill="none" stroke={color} strokeWidth="2"/></>,
    cog: <><circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke={color} strokeWidth="2"/></>,
    plane: <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" fill="none" stroke={color} strokeWidth="2"/>,
    droplet: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="none" stroke={color} strokeWidth="2"/>,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="none" stroke={color} strokeWidth="2"/>,
    atom: <><circle cx="12" cy="12" r="1" fill={color}/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z" fill="none" stroke={color} strokeWidth="1.5"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" fill="none" stroke={color} strokeWidth="1.5"/></>,
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="none" stroke={color} strokeWidth="2"/>,
    truck: <><path d="M1 3h15v13H1z" fill="none" stroke={color} strokeWidth="2"/><path d="M16 8h4l3 3v5h-7V8z" fill="none" stroke={color} strokeWidth="2"/><circle cx="5.5" cy="18.5" r="2.5" fill="none" stroke={color} strokeWidth="2"/><circle cx="18.5" cy="18.5" r="2.5" fill="none" stroke={color} strokeWidth="2"/></>,
    wind: <><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{d[name]}</svg>;
}

// Keywords
const KW = [
  { slug: "superalloys-casting", title: "Superalloys Casting", mat: "Superalloys", proc: "Casting", pri: "HIGH", desc: "ForceBeyond provides superalloys investment casting through globally co-owned foundries. We specialize in vacuum and air-melt precision casting of nickel-based, cobalt-based, and iron-based superalloys for gas turbine components, aerospace structural parts, and high-temperature industrial applications. Our capabilities include equiaxed, directionally solidified (DS), and single crystal (SX) casting." },
  { slug: "superalloys-forging", title: "Superalloys Forging", mat: "Superalloys", proc: "Forging", pri: "HIGH", desc: "ForceBeyond delivers high-performance superalloy forgings through open-die, closed-die, and ring rolling processes. Our forging capabilities support nickel-based and cobalt-based superalloys for critical rotating and structural components in gas turbines, aerospace engines, and power generation equipment." },
  { slug: "superalloys-machining", title: "Superalloys Machining", mat: "Superalloys", proc: "Machining", pri: "HIGH", desc: "ForceBeyond offers precision CNC machining for superalloy components, including 3-axis through 5-axis milling, turning, EDM, and grinding. Our facilities use advanced tooling, optimized cutting parameters, and coolant strategies developed over 30+ years of experience with these challenging materials." },
  { slug: "inconel-casting", title: "Inconel Casting", mat: "Inconel", proc: "Casting", pri: "HIGH", desc: "ForceBeyond specializes in Inconel vacuum precision investment casting through globally co-owned foundries. We produce complex near-net-shape Inconel components for aerospace, chemical processing, and energy applications. Our VIM and VAR capabilities ensure exceptional metallurgical integrity for Inconel 718, 625, 713, and other grades." },
  { slug: "inconel-forging", title: "Inconel Forging", mat: "Inconel", proc: "Forging", pri: "HIGH", desc: "ForceBeyond produces Inconel forgings for applications requiring superior mechanical properties and fatigue resistance. Our operations include open-die, closed-die, and rolled ring forging. All forgings undergo full heat treatment per AMS and ASTM specifications." },
  { slug: "inconel-718-casting", title: "Inconel 718 Casting", mat: "Inconel", proc: "Casting", pri: "HIGH", grade: "718", desc: "ForceBeyond offers Inconel 718 vacuum precision investment casting for aerospace and power generation. Inconel 718 is valued for its high strength at temperatures up to 704°C (1,300°F), excellent corrosion resistance, and good weldability. Our castings meet AMS 5383 and customer-specific requirements." },
  { slug: "inconel-718-forging", title: "Inconel 718 Forging", mat: "Inconel", proc: "Forging", pri: "HIGH", grade: "718", desc: "ForceBeyond produces Inconel 718 forgings to AMS 5662, AMS 5663, and ASTM B637 specifications. Applications include turbine discs, compressor blades, fasteners, and structural components for aerospace and power generation." },
  { slug: "inconel-718-machining", title: "Inconel 718 Machining", mat: "Inconel", proc: "Machining", pri: "HIGH", grade: "718", desc: "ForceBeyond provides precision CNC machining of Inconel 718 using optimized cutting strategies for this work-hardening alloy. Our centers handle complex 5-axis geometries with specialized carbide and ceramic tooling and high-pressure coolant systems." },
  { slug: "inconel-625-forging", title: "Inconel 625 Forging", mat: "Inconel", proc: "Forging", pri: "MEDIUM", grade: "625", desc: "ForceBeyond produces Inconel 625 forgings to ASTM B564 and AMS 5666. Inconel 625 is selected for outstanding corrosion resistance in marine and chemical processing environments. We forge discs, rings, shafts, and custom shapes for subsea, chemical, and nuclear applications." },
  { slug: "inconel-625-machining", title: "Inconel 625 Machining", mat: "Inconel", proc: "Machining", pri: "MEDIUM", grade: "625", desc: "ForceBeyond offers precision CNC machining of Inconel 625 for subsea, chemical processing, and marine applications. Our machining operations deliver tight tolerances and superior surface finish on this challenging corrosion-resistant material." },
  { slug: "titanium-casting", title: "Titanium Casting", mat: "Titanium", proc: "Casting", pri: "HIGH", desc: "ForceBeyond specializes in precision titanium investment casting for aerospace, medical, and marine applications. Our capabilities include Grade 2 CP titanium and Grade 5 Ti-6Al-4V, using vacuum or inert atmosphere melting to prevent contamination." },
  { slug: "titanium-forging", title: "Titanium Forging", mat: "Titanium", proc: "Forging", pri: "HIGH", desc: "ForceBeyond produces titanium forgings for aerospace structural components, medical implants, and marine hardware. Our operations use precisely controlled temperature windows to achieve optimal alpha-beta microstructure and mechanical properties." },
  { slug: "titanium-machining", title: "Titanium Machining", mat: "Titanium", proc: "Machining", pri: "HIGH", desc: "ForceBeyond provides precision CNC machining of titanium alloys including 5-axis machining for complex aerospace and medical components. We use rigid setups, sharp carbide tools, controlled cutting speeds, and high-pressure coolant delivery." },
  { slug: "precision-titanium-casting", title: "Precision Titanium Casting", mat: "Titanium", proc: "Casting", pri: "MEDIUM", desc: "ForceBeyond offers precision titanium investment casting with tight dimensional tolerances for near-net-shape components that reduce machining costs. We support complex geometries, thin walls, and integrated features." },
];

// Material Hubs
const HUBS = [
  { slug: "superalloys", name: "Superalloys", tag: "High-Temperature Performance Engineering",
    desc: "Superalloys maintain exceptional creep resistance, oxidation resistance, and mechanical strength at temperatures exceeding 1,000°C. ForceBeyond provides casting, forging, and machining for nickel-based, cobalt-based, and iron-based superalloys through our globally integrated manufacturing network.",
    props: [{ l:"Max Operating Temp", v:"1,100°C+" },{ l:"Tensile Strength", v:"Up to 1,400 MPa" },{ l:"Creep Resistance", v:"Exceptional" },{ l:"Oxidation Resistance", v:"Superior" }],
    grades: ["Inconel 718","Inconel 625","Inconel 713","Hastelloy X","Hastelloy C-276","Waspaloy","Mar-M-247","Rene 80","Stellite 6","A-286"],
    apps: ["Gas Turbine Components","Jet Engine Parts","Nuclear Reactor Systems","Chemical Processing","Oil & Gas Downhole Tools","Data Center Power Systems"],
  },
  { slug: "inconel", name: "Inconel", tag: "The Nickel-Chromium Alloy Standard",
    desc: "Inconel alloys are nickel-chromium-based superalloys known for outstanding resistance to extreme heat, pressure, and corrosion. ForceBeyond operates globally co-owned vacuum precision casting foundries for Inconel, alongside forging and machining for all major grades.",
    props: [{ l:"Primary Composition", v:"Ni-Cr-Fe/Mo" },{ l:"Yield Strength (718)", v:"1,034 MPa" },{ l:"Service Temp (718)", v:"Up to 704°C" },{ l:"Corrosion Resistance", v:"Exceptional" }],
    grades: ["Inconel 718","Inconel 625","Inconel 713","Inconel 738","Inconel 792","Inconel 939","Inconel X-750","Inconel 690"],
    apps: ["Aerospace Gas Turbines","Nuclear Reactors","Subsea Oil & Gas","Flare Tips & Exhaust","Heat Exchangers","Data Center Cooling"],
  },
  { slug: "titanium", name: "Titanium", tag: "Strength-to-Weight Ratio Redefined",
    desc: "Titanium delivers an unmatched strength-to-weight ratio for aerospace, medical, marine, and defense applications. ForceBeyond provides titanium casting, forging, and precision CNC machining including 5-axis machining for Grade 2 through Ti-6Al-4V.",
    props: [{ l:"Density", v:"4.5 g/cm\u00b3 (45% lighter than steel)" },{ l:"Tensile Strength (Gr5)", v:"950 MPa" },{ l:"Melting Point", v:"1,668°C" },{ l:"Biocompatibility", v:"Excellent" }],
    grades: ["Grade 2 (CP)","Grade 5 (Ti-6Al-4V)","Grade 5 ELI","Grade 7","Grade 23"],
    apps: ["Airframe Structures","Medical Implants","Marine Hardware","Aerospace Fasteners","Chemical Vessels","Defense Systems"],
  },
];

const BLOGS = [
  { slug:"superalloys-guide", title:"What Are Superalloys? A Complete Guide", cat:"Awareness", excerpt:"Everything engineers need to know about nickel, cobalt, and iron-based superalloys.", time:"12 min" },
  { slug:"inconel-718-vs-625", title:"Inconel 718 vs 625: Properties & Selection Guide", cat:"Awareness", excerpt:"When to choose 718 for strength, and when 625's corrosion resistance wins.", time:"10 min" },
  { slug:"casting-vs-forging", title:"Casting vs Forging vs Machining for Superalloys", cat:"Awareness", excerpt:"Trade-offs in cost, lead time, and mechanical properties for each process.", time:"14 min" },
  { slug:"titanium-machining-challenges", title:"5 Key Challenges in Titanium Machining", cat:"Awareness", excerpt:"Solutions experienced shops use for titanium's unique machining difficulties.", time:"8 min" },
  { slug:"vacuum-investment-casting", title:"Vacuum Investment Casting Explained", cat:"Awareness", excerpt:"Process, benefits, and limitations of vacuum casting for superalloy components.", time:"11 min" },
  { slug:"choose-supplier", title:"How to Choose a Superalloy Casting Supplier", cat:"Consideration", excerpt:"Seven evaluation criteria for identifying the right manufacturing partner.", time:"7 min" },
  { slug:"inconel-718-tolerances", title:"Inconel 718 Casting Tolerances", cat:"Consideration", excerpt:"Dimensional expectations, surface finish, and inspection for Inconel 718.", time:"9 min" },
  { slug:"gas-turbine-cost", title:"Case Study: 40% Cost Reduction with Investment Casting", cat:"Decision", excerpt:"How a power generation OEM cut costs switching to investment-cast Inconel 718.", time:"6 min" },
];

const AI_PAGES = [
  { title:"Inconel 718 Casting for Gas Turbine Nozzle Rings", mat:"Inconel 718", app:"Gas Turbine Nozzles" },
  { title:"Titanium Machining for Aerospace Fasteners", mat:"Ti-6Al-4V", app:"Aerospace Fasteners" },
  { title:"Superalloy Casting for Nuclear SMR Components", mat:"Superalloys", app:"Nuclear SMR" },
  { title:"Inconel 625 Forging for Subsea Equipment", mat:"Inconel 625", app:"Subsea Oil & Gas" },
  { title:"Inconel 718 vs 625 for Corrosion Resistance", mat:"Inconel", app:"Corrosive Environments" },
  { title:"Casting vs Forging Superalloys \u2013 Which Process?", mat:"Superalloys", app:"Process Comparison" },
  { title:"Superalloy Casting Manufacturer USA", mat:"Superalloys", app:"US Manufacturing" },
  { title:"Inconel Casting Services North America", mat:"Inconel", app:"North America" },
  { title:"Titanium Casting for Medical Implants", mat:"Ti-6Al-4V ELI", app:"Medical Implants" },
  { title:"Superalloy Components for Data Center Power", mat:"Superalloys", app:"Data Center HGP" },
];

const INDS = [
  { slug:"aerospace", name:"Aerospace", icon:"plane", desc:"Components for gas turbines, airframes, landing gear, and propulsion systems to AS9100 standards.", mats:["Inconel 718","Ti-6Al-4V","Waspaloy","Mar-M-247"] },
  { slug:"oil-gas", name:"Oil & Gas", icon:"droplet", desc:"Corrosion-resistant components for downhole tools, subsea equipment, wellheads, and process piping.", mats:["Inconel 625","Inconel 718","Duplex SS","Hastelloy C-276"] },
  { slug:"data-center", name:"Data Center Power", icon:"zap", desc:"Mission-critical hot gas path parts and sub-assemblies for gas turbines powering data center infrastructure.", mats:["Inconel 718","Inconel 738","Mar-M-247","Stellite 6"] },
  { slug:"nuclear", name:"Nuclear & SMR", icon:"atom", desc:"Reactor vessel internals, control rod components, and heat exchanger parts for nuclear and SMR applications.", mats:["Inconel 690","Inconel 718","Hastelloy X","Stellite"] },
  { slug:"automotive", name:"Automotive & Transportation", icon:"truck", desc:"Cast and forged components for heavy-duty trucks, turbocharger systems, and high-performance automotive.", mats:["Inconel 713","Stainless Steel","Carbon Steel","Aluminum"] },
  { slug:"mining", name:"Mining", icon:"hammer", desc:"Wear-resistant cast and forged components for mining equipment, crushers, and processing machinery.", mats:["Stellite","Superalloys","Duplex SS","Carbon Steel"] },
  { slug:"medical", name:"Medical", icon:"heart", desc:"Biocompatible titanium and cobalt-chrome components for implants, instruments, and devices to ISO 13485.", mats:["Ti-6Al-4V ELI","Co-Cr-Mo","CP Titanium","Nitinol"] },
  { slug:"hvac", name:"HVAC & Flow Control", icon:"wind", desc:"Valves, Y-strainers, fittings, and flow control components in stainless steel, duplex, and super duplex.", mats:["316 SS","Duplex 2205","Super Duplex 2507","Bronze"] },
];

// Styles
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:${C.bg};color:${C.text};font-family:${F.body}}
  ::selection{background:${C.accent}22;color:${C.navy}}
  @keyframes fu{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
  .a{animation:fu .6s ease-out forwards;opacity:0}
  .d1{animation-delay:.1s}.d2{animation-delay:.2s}.d3{animation-delay:.3s}.d4{animation-delay:.4s}
  @media(max-width:900px){.nd{display:none!important}.nm{display:block!important}.g2,.g3{grid-template-columns:1fr!important}}
`;

// Components
function Nav({pg,go}){const[o,sO]=useState(false);const[s,sS]=useState(false);useEffect(()=>{const h=()=>sS(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h)},[]);const ls=[{l:"Home",p:"home"},{l:"Superalloys",p:"hub-superalloys"},{l:"Inconel",p:"hub-inconel"},{l:"Titanium",p:"hub-titanium"},{l:"Industries",p:"industries"},{l:"Resources",p:"blog"},{l:"Contact",p:"contact"}];
return<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:s?C.white+"f0":C.white,backdropFilter:s?"blur(12px)":"none",borderBottom:`1px solid ${C.borderLight}`,transition:"all .3s",padding:"0 clamp(16px,4vw,48px)"}}><div style={{maxWidth:1400,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:68}}>
<div style={{cursor:"pointer",display:"flex",alignItems:"center",gap:10}} onClick={()=>go("home")}><div style={{width:34,height:34,borderRadius:6,background:`linear-gradient(135deg,${C.navy},${C.navyLight})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:F.display,fontSize:15,color:C.white,fontWeight:700}}>FB</div><span style={{fontFamily:F.display,fontSize:18,color:C.navy}}>ForceBeyond</span></div>
<div className="nd" style={{display:"flex",alignItems:"center",gap:28}}>{ls.map(x=><span key={x.p} onClick={()=>go(x.p)} style={{cursor:"pointer",fontSize:14,fontWeight:600,color:pg===x.p?C.accent:C.textMuted,borderBottom:pg===x.p?`2px solid ${C.accent}`:"2px solid transparent",paddingBottom:4,transition:"color .2s"}} onMouseEnter={e=>e.target.style.color=C.accent} onMouseLeave={e=>{if(pg!==x.p)e.target.style.color=C.textMuted}}>{x.l}</span>)}<button onClick={()=>{go("contact");trackEvent("click","CTA","nav")}} style={{background:C.navy,border:"none",borderRadius:6,padding:"9px 18px",color:C.white,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:F.body}}>Request Quote</button></div>
<div className="nm" style={{display:"none",cursor:"pointer",padding:8}} onClick={()=>sO(!o)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="2">{o?<path d="M18 6L6 18M6 6l12 12"/>:<path d="M3 12h18M3 6h18M3 18h18"/>}</svg></div>
</div>{o&&<div style={{background:C.white,borderTop:`1px solid ${C.borderLight}`,padding:"12px clamp(16px,4vw,48px)"}}>{ls.map(x=><div key={x.p} onClick={()=>{go(x.p);sO(false)}} style={{cursor:"pointer",fontSize:15,fontWeight:500,color:pg===x.p?C.accent:C.textMuted,padding:"10px 0"}}>{x.l}</div>)}</div>}</nav>}

function Ft({go}){return<footer style={{background:C.navy,padding:"48px clamp(16px,4vw,48px) 24px"}}><div style={{maxWidth:1400,margin:"0 auto"}}><div className="g3" style={{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:36,marginBottom:36}}>
<div><div style={{fontFamily:F.display,fontSize:18,color:C.white,marginBottom:10}}>ForceBeyond</div><p style={{fontSize:12,color:C.silverDark,lineHeight:1.7}}>{CO.address}<br/>{CO.city}</p><p style={{fontSize:12,color:C.silverDark,lineHeight:1.7,marginTop:6}}>Phone: {CO.phone}<br/>Fax: {CO.fax}<br/>Email: {CO.email}</p></div>
<div><div style={{fontSize:10,fontWeight:700,color:C.silver,letterSpacing:".08em",textTransform:"uppercase",marginBottom:12}}>Materials</div>{HUBS.map(h=><div key={h.slug} onClick={()=>go("hub-"+h.slug)} style={{cursor:"pointer",fontSize:12,color:C.silverDark,padding:"3px 0"}} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.silverDark}>{h.name}</div>)}</div>
<div><div style={{fontSize:10,fontWeight:700,color:C.silver,letterSpacing:".08em",textTransform:"uppercase",marginBottom:12}}>Services</div>{["Investment Casting","Forging","CNC Machining","Die Casting","Sand Casting","Supply Chain"].map(s=><div key={s} style={{fontSize:12,color:C.silverDark,padding:"3px 0"}}>{s}</div>)}</div>
<div><div style={{fontSize:10,fontWeight:700,color:C.silver,letterSpacing:".08em",textTransform:"uppercase",marginBottom:12}}>Company</div>{["Industries","Resources","Quality Control","Contact","Request Quote"].map(s=><div key={s} onClick={()=>go(s==="Industries"?"industries":s==="Resources"?"blog":"contact")} style={{cursor:"pointer",fontSize:12,color:C.silverDark,padding:"3px 0"}} onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.silverDark}>{s}</div>)}</div>
</div><div style={{borderTop:`1px solid ${C.navyLight}`,paddingTop:16,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}><span style={{fontSize:11,color:C.silverDark}}>Copyright 2006-2026 ForceBeyond. All Rights Reserved.</span><span style={{fontSize:11,color:C.silverDark}}>Superalloys / Inconel / Titanium</span></div></div></footer>}

function S({children,style={},dark,id}){return<section id={id} style={{padding:"64px clamp(16px,4vw,48px)",background:dark?C.offWhite:C.white,...style}}><div style={{maxWidth:1400,margin:"0 auto"}}>{children}</div></section>}
function L({children}){return<div style={{fontSize:11,fontWeight:700,color:C.accent,letterSpacing:".1em",textTransform:"uppercase",marginBottom:8,fontFamily:F.mono}}>{children}</div>}
function T({children,s={}}){return<h2 style={{fontFamily:F.display,fontSize:"clamp(24px,3.5vw,38px)",color:C.navy,lineHeight:1.2,marginBottom:12,...s}}>{children}</h2>}
function Btn({children,onClick,v="p",s={}}){const p=v==="p";return<button onClick={onClick} style={{background:p?C.navy:"transparent",border:p?"none":`2px solid ${C.navy}`,borderRadius:6,padding:"11px 22px",color:p?C.white:C.navy,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:F.body,transition:"all .2s",...s}} onMouseEnter={e=>{if(p)e.target.style.background=C.navyMid;else e.target.style.background=C.navy+"08"}} onMouseLeave={e=>{if(p)e.target.style.background=C.navy;else e.target.style.background="transparent"}}>{children}</button>}

function QF({src="page"}){const[d,sD]=useState(false);if(d)return<div style={{textAlign:"center",padding:28}}><div style={{width:44,height:44,borderRadius:"50%",background:C.accent+"12",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}><Icon name="check" size={22} color={C.accent}/></div><h3 style={{fontFamily:F.display,fontSize:20,color:C.navy,marginBottom:6}}>Quote Request Received</h3><p style={{color:C.textMuted,fontSize:13}}>Our team will respond within 24 hours.</p></div>;const i={width:"100%",padding:"10px 13px",borderRadius:6,border:`1px solid ${C.border}`,background:C.white,color:C.text,fontSize:14,fontFamily:F.body,outline:"none"};
return<div style={{display:"flex",flexDirection:"column",gap:12}}><div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><input style={i} placeholder="Full Name *"/><input style={i} placeholder="Company *"/></div><div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><input style={i} placeholder="Email *" type="email"/><input style={i} placeholder="Phone" type="tel"/></div><select style={{...i,cursor:"pointer"}}><option value="">Select Service *</option><option>Investment Casting</option><option>Die Casting</option><option>Hot/Cold Forging</option><option>CNC Machining</option><option>Sand Casting</option><option>Supply Chain Management</option><option>Other</option></select><textarea style={{...i,minHeight:80,resize:"vertical"}} placeholder="Project details: materials, quantities, tolerances, drawings..."/><Btn onClick={()=>{trackEvent("form_submit","RFQ",src);sD(true)}}>Submit Quote Request</Btn><p style={{fontSize:11,color:C.textLight,textAlign:"center"}}>Response within 24 hours / No obligation</p></div>}

function Faq({fs}){const[o,sO]=useState(null);return<div style={{display:"flex",flexDirection:"column",gap:5}}>{fs.map((f,i)=><div key={i} style={{border:`1px solid ${o===i?C.accent+"33":C.borderLight}`,borderRadius:8,overflow:"hidden",background:o===i?C.accent+"05":C.white}}><div onClick={()=>sO(o===i?null:i)} style={{padding:"12px 16px",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:14,fontWeight:600,color:C.navy}}>{f.q}</span><span style={{color:C.accent,fontSize:18,fontWeight:300,transition:"transform .2s",transform:o===i?"rotate(45deg)":"rotate(0)"}}>+</span></div>{o===i&&<div style={{padding:"0 16px 12px",fontSize:13,color:C.textMuted,lineHeight:1.7}}>{f.a}</div>}</div>)}</div>}

// ===== PAGES =====
function Home({go}){return<div>
<section style={{minHeight:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"110px clamp(16px,4vw,48px) 70px",background:`linear-gradient(160deg,${C.navy} 0%,${C.navyLight} 55%,${C.navyMid} 100%)`,position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,opacity:.04,backgroundImage:`linear-gradient(${C.silver} 1px,transparent 1px),linear-gradient(90deg,${C.silver} 1px,transparent 1px)`,backgroundSize:"48px 48px"}}/>
<div style={{maxWidth:1400,margin:"0 auto",width:"100%",position:"relative"}}>
<div className="a"><div style={{fontSize:11,fontWeight:700,color:C.silver,letterSpacing:".14em",textTransform:"uppercase",marginBottom:14,fontFamily:F.mono}}>Superalloys / Inconel / Titanium \u2014 Casting / Forging / Machining</div></div>
<h1 className="a d1" style={{fontFamily:F.display,fontSize:"clamp(34px,5.5vw,60px)",color:C.white,lineHeight:1.1,maxWidth:780,marginBottom:18}}>A Global Supplier of World-Class Fabricated Products</h1>
<p className="a d2" style={{fontSize:"clamp(14px,1.6vw,17px)",color:C.silverLight,maxWidth:580,lineHeight:1.65,marginBottom:32}}>Engineering design, development, and one-stop global supply chain solution. Headquartered in New Castle, Delaware, with integrated manufacturing across the USA, South Korea, Malaysia, China, Thailand, Vietnam, and Taiwan.</p>
<div className="a d3" style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:40}}>
<button onClick={()=>{go("contact");trackEvent("click","CTA","hero")}} style={{background:C.white,border:"none",borderRadius:6,padding:"12px 24px",color:C.navy,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:F.body}}>Get a Free Quote</button>
<button onClick={()=>go("hub-superalloys")} style={{background:"transparent",border:`2px solid ${C.silverDark}`,borderRadius:6,padding:"10px 22px",color:C.silverLight,fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:F.body}}>Explore Materials</button></div>
<div className="a d4" style={{display:"flex",gap:20,flexWrap:"wrap"}}>{[{i:"shield",l:"ISO 9001:2015"},{i:"building",l:"US Headquartered"},{i:"tool",l:"30+ Years"},{i:"globe",l:"Global Supply Chain"}].map(x=><div key={x.l} style={{display:"flex",alignItems:"center",gap:6}}><Icon name={x.i} size={14} color={C.silverDark}/><span style={{fontSize:12,fontWeight:600,color:C.silverDark}}>{x.l}</span></div>)}</div>
</div></section>

<S style={{padding:"36px clamp(16px,4vw,48px)"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:20,textAlign:"center"}}>{[{v:"30+",l:"Years Experience"},{v:"500+",l:"Alloy Grades"},{v:"14+",l:"Mfg Processes"},{v:"50+",l:"Countries Served"}].map(x=><div key={x.l}><div style={{fontFamily:F.display,fontSize:34,color:C.navy}}>{x.v}</div><div style={{fontSize:12,color:C.textMuted,fontWeight:500}}>{x.l}</div></div>)}</div></S>

<S dark><L>Material Expertise</L><T>Three Alloy Families. Infinite Applications.</T>
<p style={{color:C.textMuted,fontSize:14,maxWidth:580,lineHeight:1.6,marginBottom:36}}>From gas turbines to subsea equipment, we manufacture precision components from the world's most demanding alloy systems.</p>
<div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>{HUBS.map(h=><div key={h.slug} onClick={()=>go("hub-"+h.slug)} style={{background:C.white,borderRadius:10,padding:24,border:`1px solid ${C.borderLight}`,cursor:"pointer",transition:"all .25s",position:"relative"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.accent+"44";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,.05)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.borderLight;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${C.navy},${C.accent})`,borderRadius:"10px 10px 0 0"}}/>
<h3 style={{fontFamily:F.display,fontSize:22,color:C.navy,marginBottom:4}}>{h.name}</h3><p style={{fontSize:11,color:C.accent,fontWeight:600,marginBottom:12}}>{h.tag}</p><p style={{fontSize:12,color:C.textMuted,lineHeight:1.6,marginBottom:14}}>{h.desc.slice(0,140)}...</p>
<div style={{display:"flex",flexWrap:"wrap",gap:4}}>{h.apps.slice(0,3).map(a=><span key={a} style={{fontSize:9,padding:"2px 7px",borderRadius:3,background:C.navy+"08",color:C.navyLight,fontWeight:600}}>{a}</span>)}</div>
<div style={{marginTop:14,fontSize:12,color:C.accent,fontWeight:700,display:"flex",alignItems:"center",gap:4}}>Explore {h.name} <Icon name="arrow" size={12} color={C.accent}/></div></div>)}</div></S>

<S><L>Manufacturing Capabilities</L><T>Casting. Forging. Machining.</T>
<div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginTop:28}}>{[
{t:"Investment Casting",d:"Vacuum and air-melt investment casting for complex geometries. Includes Inconel vacuum precision casting through globally co-owned foundries. Die casting in aluminum, zinc, and magnesium.",icon:"flame",kw:["Vacuum Casting","Lost Wax","Die Casting"]},
{t:"Forging",d:"Open-die, closed-die, hot forging, cold forging, and ring rolling. Full heat treatment and mechanical testing. C69300 ECO brass forging capabilities.",icon:"hammer",kw:["Open Die","Closed Die","Hot Forging","Cold Forging"]},
{t:"CNC Machining & Finishing",d:"3-axis through 5-axis CNC machining of superalloys, titanium, and standard alloys. EDM, grinding, and precision secondary operations.",icon:"cog",kw:["5-Axis CNC","EDM","Precision Grinding"]},
].map(x=><div key={x.t} style={{background:C.offWhite,borderRadius:8,padding:22,border:`1px solid ${C.borderLight}`}}>
<div style={{marginBottom:12,display:"flex",alignItems:"center",justifyContent:"center",width:38,height:38,borderRadius:8,background:C.navy+"08"}}><Icon name={x.icon} size={18} color={C.navy}/></div>
<h3 style={{fontFamily:F.display,fontSize:18,color:C.navy,marginBottom:6}}>{x.t}</h3><p style={{fontSize:12,color:C.textMuted,lineHeight:1.6,marginBottom:12}}>{x.d}</p>
<div style={{display:"flex",gap:5,flexWrap:"wrap"}}>{x.kw.map(k=><span key={k} style={{fontSize:9,color:C.textLight,background:C.white,padding:"2px 7px",borderRadius:3,border:`1px solid ${C.borderLight}`}}>{k}</span>)}</div></div>)}</div></S>

<S dark><L>Industries Served</L><T>Trusted Across Critical Sectors</T>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginTop:24}}>{INDS.slice(0,8).map(x=><div key={x.slug} onClick={()=>go("industries")} style={{background:C.white,borderRadius:8,padding:"16px 12px",border:`1px solid ${C.borderLight}`,cursor:"pointer",textAlign:"center",transition:"all .2s"}} onMouseEnter={e=>e.currentTarget.style.borderColor=C.accent+"33"} onMouseLeave={e=>e.currentTarget.style.borderColor=C.borderLight}>
<div style={{marginBottom:6,display:"flex",justifyContent:"center"}}><Icon name={x.icon} size={20} color={C.navy}/></div><div style={{fontSize:12,fontWeight:700,color:C.navy}}>{x.name}</div></div>)}</div></S>

<S style={{background:C.navy}}><div style={{textAlign:"center",maxWidth:520,margin:"0 auto"}}><T s={{color:C.white,textAlign:"center"}}>Ready to Start a Conversation?</T><p style={{color:C.silverLight,fontSize:14,lineHeight:1.6,marginBottom:24}}>Send us your drawings, specs, or project description. Our engineering team provides a detailed quote within 24 hours.</p><button onClick={()=>go("contact")} style={{background:C.white,border:"none",borderRadius:6,padding:"12px 26px",color:C.navy,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:F.body}}>Request a Free Quote</button></div></S>

<S><div style={{textAlign:"center"}}><p style={{fontSize:10,color:C.textLight,letterSpacing:".1em",textTransform:"uppercase",fontWeight:700,marginBottom:16}}>Some of Our Customers</p><div style={{display:"flex",justifyContent:"center",gap:28,flexWrap:"wrap",opacity:.4}}>{CO.customers.slice(0,10).map(c=><span key={c} style={{fontSize:12,fontWeight:700,color:C.navy,letterSpacing:".03em"}}>{c.toUpperCase()}</span>)}</div></div></S>
</div>}

function Hub({h,go}){const rel=KW.filter(k=>k.mat===h.name);return<div>
<section style={{paddingTop:110,paddingBottom:50,padding:"110px clamp(16px,4vw,48px) 50px",background:`linear-gradient(160deg,${C.navy},${C.navyLight})`}}><div style={{maxWidth:1400,margin:"0 auto"}}><L>{h.name} Hub</L><h1 style={{fontFamily:F.display,fontSize:"clamp(30px,4.5vw,48px)",color:C.white,lineHeight:1.1,marginBottom:14}}>{h.name}: {h.tag}</h1><p style={{fontSize:15,color:C.silverLight,maxWidth:650,lineHeight:1.7,marginBottom:24}}>{h.desc}</p><button onClick={()=>go("contact")} style={{background:C.white,border:"none",borderRadius:6,padding:"11px 22px",color:C.navy,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:F.body}}>Get a Quote for {h.name}</button></div></section>

<S><L>Material Properties</L><T>Key Specifications</T><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:12,marginTop:20}}>{h.props.map(p=><div key={p.l} style={{background:C.offWhite,borderRadius:8,padding:16,border:`1px solid ${C.borderLight}`}}><div style={{fontSize:10,color:C.accent,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",marginBottom:5,fontFamily:F.mono}}>{p.l}</div><div style={{fontSize:16,fontWeight:700,color:C.navy}}>{p.v}</div></div>)}</div></S>

<S dark><L>Alloy Grades</L><T>{h.name} Grades We Work With</T><div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:18}}>{h.grades.map(g=><span key={g} style={{padding:"7px 14px",borderRadius:6,fontSize:12,fontWeight:600,background:C.white,color:C.navy,border:`1px solid ${C.borderLight}`}}>{g}</span>)}</div></S>

<S><L>Our {h.name} Services</L><T>Casting, Forging & Machining</T><div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14,marginTop:24}}>{rel.map(k=><div key={k.slug} onClick={()=>go("kw-"+k.slug)} style={{background:C.white,borderRadius:8,padding:20,border:`1px solid ${C.borderLight}`,cursor:"pointer",transition:"all .2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.accent+"44";e.currentTarget.style.transform="translateY(-2px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.borderLight;e.currentTarget.style.transform="translateY(0)"}}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}><span style={{fontSize:9,fontWeight:700,color:k.pri==="HIGH"?C.accent:C.textLight,fontFamily:F.mono}}>{k.pri}</span><span style={{fontSize:9,color:C.textLight}}>{k.proc}</span></div>
<h3 style={{fontFamily:F.display,fontSize:17,color:C.navy,marginBottom:5}}>{k.title}</h3><p style={{fontSize:11,color:C.textMuted,lineHeight:1.5}}>Custom {k.proc.toLowerCase()} for {k.mat.toLowerCase()}{k.grade?" "+k.grade:""} components.</p>
<div style={{marginTop:10,fontSize:11,color:C.accent,fontWeight:700,display:"flex",alignItems:"center",gap:3}}>View Details <Icon name="arrow" size={11} color={C.accent}/></div></div>)}</div></S>

<S dark><L>FAQ</L><T>{h.name} \u2014 Frequently Asked Questions</T><div style={{maxWidth:680,marginTop:20}}><Faq fs={[
{q:`What ${h.name.toLowerCase()} grades does ForceBeyond work with?`,a:`We work with all major grades including ${h.grades.slice(0,4).join(", ")}, and more.`},
{q:"Do you provide material certifications?",a:"Yes. Every shipment includes full material certifications with chemical composition, mechanical test results, and heat treatment records."},
{q:"What is the minimum order quantity?",a:"We support prototype quantities (1-5 pieces) through production volumes (1,000+)."},
]}/></div></S>

<S><div style={{maxWidth:520,margin:"0 auto"}}><T s={{textAlign:"center"}}>Request a {h.name} Quote</T><p style={{textAlign:"center",color:C.textMuted,fontSize:13,marginBottom:24}}>Engineering review and quotation within 24 hours.</p><QF src={"hub-"+h.slug}/></div></S>
</div>}

function KwPg({kw,go}){const pd={Casting:{steps:["Pattern Creation","Shell Building","Dewaxing","Vacuum/Air Melt Pour","Knockout & Finishing","NDT & Inspection"],eq:"Vacuum induction melting furnaces, ceramic shell lines, X-ray and CMM"},Forging:{steps:["Billet Preparation","Preheating","Die Forging / Open Die","Heat Treatment","Machining to Final","NDT & Inspection"],eq:"Hydraulic presses up to 10,000 tons, ring rolling mills, heat treatment furnaces"},Machining:{steps:["Fixture Design","Rough Machining","Semi-Finish","Finish Machining","Deburring","Final CMM Inspection"],eq:"5-axis CNC centers, wire EDM, surface grinders, CMM"}}[kw.proc];
return<div>
<section style={{paddingTop:110,paddingBottom:45,padding:"110px clamp(16px,4vw,48px) 45px",background:`linear-gradient(160deg,${C.navy},${C.navyLight})`}}><div style={{maxWidth:1400,margin:"0 auto"}}>
<div style={{display:"flex",gap:5,marginBottom:12,fontSize:12}}><span onClick={()=>go("home")} style={{color:C.silverDark,cursor:"pointer"}}>Home</span><span style={{color:C.silverDark}}>/</span><span onClick={()=>go("hub-"+kw.mat.toLowerCase())} style={{color:C.silverLight,cursor:"pointer"}}>{kw.mat}</span><span style={{color:C.silverDark}}>/</span><span style={{color:C.white}}>{kw.title}</span></div>
<h1 style={{fontFamily:F.display,fontSize:"clamp(26px,4vw,44px)",color:C.white,lineHeight:1.1,marginBottom:10}}>{kw.title} Services</h1>
<p style={{fontSize:11,color:C.silver,fontFamily:F.mono,fontWeight:500,marginBottom:16}}>Custom {kw.proc} by ForceBeyond | {CO.city}</p>
<p style={{fontSize:14,color:C.silverLight,maxWidth:620,lineHeight:1.7,marginBottom:24}}>{kw.desc}</p>
<div style={{display:"flex",gap:10,flexWrap:"wrap"}}><button onClick={()=>{go("contact");trackEvent("click","CTA","kw-"+kw.slug)}} style={{background:C.white,border:"none",borderRadius:6,padding:"11px 22px",color:C.navy,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:F.body}}>Request a Quote</button><button onClick={()=>go("hub-"+kw.mat.toLowerCase())} style={{background:"transparent",border:`2px solid ${C.silverDark}`,borderRadius:6,padding:"9px 20px",color:C.silverLight,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:F.body}}>All {kw.mat} Services</button></div></div></section>

<S><L>{kw.proc} Process</L><T>How We {kw.proc==="Machining"?"Machine":kw.proc==="Forging"?"Forge":"Cast"} {kw.mat}{kw.grade?" "+kw.grade:""}</T>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:10,marginTop:24}}>{pd.steps.map((s,i)=><div key={s} style={{background:C.offWhite,borderRadius:8,padding:"14px 12px",border:`1px solid ${C.borderLight}`}}><div style={{fontSize:9,fontFamily:F.mono,color:C.accent,fontWeight:700,marginBottom:5}}>STEP {String(i+1).padStart(2,"0")}</div><div style={{fontSize:12,fontWeight:600,color:C.navy}}>{s}</div></div>)}</div>
<div style={{marginTop:14,padding:"10px 14px",background:C.offWhite,borderRadius:8,border:`1px solid ${C.borderLight}`}}><span style={{fontSize:10,color:C.accent,fontWeight:700,fontFamily:F.mono}}>EQUIPMENT: </span><span style={{fontSize:12,color:C.textMuted}}>{pd.eq}</span></div></S>

<S dark><L>Technical Specifications</L><T>{kw.title} Capabilities</T>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12,marginTop:20}}>{[
{l:"Max Part Weight",v:kw.proc==="Casting"?"Up to 500 kg":kw.proc==="Forging"?"Up to 5,000 kg":"Up to 2,000 kg"},
{l:"Tolerances",v:kw.proc==="Casting"?"\u00b10.005\"/inch":kw.proc==="Machining"?"\u00b10.0005\"":"\u00b10.010\""},
{l:"Surface Finish",v:kw.proc==="Casting"?"125 Ra (as-cast)":kw.proc==="Machining"?"16 Ra or better":"125 Ra"},
{l:"Min Order Qty",v:"1 piece (prototype)"},{l:"Lead Time",v:kw.proc==="Casting"?"8\u201314 weeks":kw.proc==="Forging"?"6\u201310 weeks":"4\u20138 weeks"},
{l:"Inspection",v:"CMM, X-Ray, FPI, MPI"},
].map(x=><div key={x.l} style={{background:C.white,borderRadius:8,padding:14,border:`1px solid ${C.borderLight}`}}><div style={{fontSize:9,color:C.accent,fontWeight:700,letterSpacing:".06em",textTransform:"uppercase",fontFamily:F.mono,marginBottom:3}}>{x.l}</div><div style={{fontSize:15,fontWeight:700,color:C.navy}}>{x.v}</div></div>)}</div></S>

<S><L>FAQ</L><T>{kw.title} FAQ</T><div style={{maxWidth:680,marginTop:20}}><Faq fs={[
{q:`What grades are available for ${kw.proc.toLowerCase()}?`,a:`We support all standard ${kw.mat.toLowerCase()} grades${kw.grade?" with expertise in "+kw.mat+" "+kw.grade:""}.`},
{q:"What certifications do you hold?",a:`ISO 9001:2015 certified. Our manufacturers hold IATF 16949, AS9100, and ISO 13485 as applicable.`},
{q:"Typical lead time?",a:`${kw.proc==="Casting"?"8\u201314 weeks":kw.proc==="Forging"?"6\u201310 weeks":"4\u20138 weeks"}. Expedited delivery available.`},
{q:"Prototype quantities?",a:"Yes, from single-piece prototypes through high-volume production."},
]}/></div></S>

<S dark><div style={{maxWidth:520,margin:"0 auto"}}><T s={{textAlign:"center"}}>Get a {kw.title} Quote</T><p style={{textAlign:"center",color:C.textMuted,fontSize:13,marginBottom:24}}>Engineering review within 24 hours. No obligation.</p><QF src={kw.slug}/></div></S>
</div>}

function Blog({go}){const[f,sF]=useState("All");const cats=["All","Awareness","Consideration","Decision"];const list=f==="All"?BLOGS:BLOGS.filter(p=>p.cat===f);const cc={Awareness:C.accent,Consideration:"#b8860b",Decision:C.success};
return<div>
<section style={{paddingTop:110,paddingBottom:36,padding:"110px clamp(16px,4vw,48px) 36px",background:`linear-gradient(160deg,${C.navy},${C.navyLight})`}}><div style={{maxWidth:1400,margin:"0 auto"}}><L>Resources & Insights</L><h1 style={{fontFamily:F.display,fontSize:"clamp(30px,4.5vw,44px)",color:C.white,lineHeight:1.1,marginBottom:10}}>Engineering Knowledge Base</h1><p style={{fontSize:14,color:C.silverLight,maxWidth:560}}>Technical guides, alloy comparisons, and manufacturing insights.</p></div></section>
<S>
<div style={{display:"flex",gap:6,marginBottom:28,flexWrap:"wrap"}}>{cats.map(c=><button key={c} onClick={()=>sF(c)} style={{padding:"6px 14px",borderRadius:6,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:F.body,background:f===c?C.navy:"transparent",color:f===c?C.white:C.textMuted,border:`1px solid ${f===c?C.navy:C.border}`}}>{c}</button>)}</div>
<div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:16}}>{list.map(p=><article key={p.slug} style={{background:C.white,borderRadius:8,padding:22,border:`1px solid ${C.borderLight}`,transition:"all .2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.accent+"33";e.currentTarget.style.transform="translateY(-2px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.borderLight;e.currentTarget.style.transform="translateY(0)"}}>
<div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}><span style={{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:3,background:(cc[p.cat]||C.accent)+"12",color:cc[p.cat]||C.accent}}>{p.cat}</span><span style={{fontSize:10,color:C.textLight}}>{p.time}</span></div>
<h3 style={{fontFamily:F.display,fontSize:16,color:C.navy,lineHeight:1.3,marginBottom:6}}>{p.title}</h3><p style={{fontSize:11,color:C.textMuted,lineHeight:1.6}}>{p.excerpt}</p>
<div style={{marginTop:12,fontSize:11,color:C.accent,fontWeight:700,display:"flex",alignItems:"center",gap:3}}>Read Article <Icon name="arrow" size={11} color={C.accent}/></div></article>)}</div>

<div style={{marginTop:48}}><L>AI-Driven Technical Pages</L><T>Deep-Dive Application Guides</T><p style={{color:C.textMuted,fontSize:13,maxWidth:560,marginBottom:20}}>Material + application pages for specific engineering use cases.</p>
<div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{AI_PAGES.map(p=><div key={p.title} style={{background:C.offWhite,borderRadius:6,padding:"12px 16px",border:`1px solid ${C.borderLight}`,display:"flex",justifyContent:"space-between",alignItems:"center",transition:"border-color .2s"}} onMouseEnter={e=>e.currentTarget.style.borderColor=C.accent+"33"} onMouseLeave={e=>e.currentTarget.style.borderColor=C.borderLight}>
<div><div style={{fontSize:12,fontWeight:600,color:C.navy,marginBottom:2}}>{p.title}</div><div style={{fontSize:10,color:C.textLight}}>{p.mat} \u2014 {p.app}</div></div><Icon name="arrow" size={12} color={C.accent}/></div>)}</div></div></S></div>}

function Industries({go}){return<div>
<section style={{paddingTop:110,paddingBottom:36,padding:"110px clamp(16px,4vw,48px) 36px",background:`linear-gradient(160deg,${C.navy},${C.navyLight})`}}><div style={{maxWidth:1400,margin:"0 auto"}}><L>Industry Solutions</L><h1 style={{fontFamily:F.display,fontSize:"clamp(30px,4.5vw,44px)",color:C.white,lineHeight:1.1}}>Engineered for Your Industry</h1></div></section>
<S><div style={{display:"flex",flexDirection:"column",gap:14}}>{INDS.map(x=><div key={x.slug} style={{background:C.white,borderRadius:10,padding:"22px 24px",border:`1px solid ${C.borderLight}`,display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
<div style={{width:44,height:44,borderRadius:8,background:C.navy+"08",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Icon name={x.icon} size={20} color={C.navy}/></div>
<div style={{flex:1,minWidth:180}}><h3 style={{fontFamily:F.display,fontSize:18,color:C.navy,marginBottom:5}}>{x.name}</h3><p style={{fontSize:12,color:C.textMuted,lineHeight:1.6,marginBottom:8}}>{x.desc}</p><div style={{display:"flex",gap:5,flexWrap:"wrap"}}>{x.mats.map(m=><span key={m} style={{fontSize:9,color:C.accent,background:C.accent+"0a",padding:"2px 7px",borderRadius:3,fontWeight:600}}>{m}</span>)}</div></div>
<Btn onClick={()=>go("contact")} s={{padding:"8px 16px",fontSize:12}}>Get Quote</Btn></div>)}</div></S></div>}

function Contact(){return<div>
<section style={{paddingTop:110,paddingBottom:36,padding:"110px clamp(16px,4vw,48px) 36px",background:`linear-gradient(160deg,${C.navy},${C.navyLight})`}}><div style={{maxWidth:1400,margin:"0 auto"}}><L>Contact & RFQ</L><h1 style={{fontFamily:F.display,fontSize:"clamp(30px,4.5vw,44px)",color:C.white,lineHeight:1.1,marginBottom:10}}>Request a Quote</h1><p style={{fontSize:14,color:C.silverLight,maxWidth:560}}>Our engineering team reviews every inquiry personally. Response within 24 hours.</p></div></section>
<S><div className="g2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:36}}>
<div><QF src="contact-page"/></div>
<div>
<div style={{background:C.offWhite,borderRadius:8,padding:24,border:`1px solid ${C.borderLight}`,marginBottom:16}}>
<h3 style={{fontFamily:F.display,fontSize:18,color:C.navy,marginBottom:14}}>Why ForceBeyond?</h3>
{["24-hour quote turnaround","US-headquartered, New Castle, Delaware","ISO 9001:2015 certified","Globally integrated manufacturing","30+ years professional experience","PPAP I and PPAP III endorsed","Engineering design and DFM support","Prototype through production volumes"].map(x=><div key={x} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8}}><div style={{flexShrink:0,marginTop:2}}><Icon name="check" size={13} color={C.accent}/></div><span style={{fontSize:12,color:C.textMuted}}>{x}</span></div>)}
</div>
<div style={{background:C.offWhite,borderRadius:8,padding:24,border:`1px solid ${C.borderLight}`}}>
<h3 style={{fontFamily:F.display,fontSize:18,color:C.navy,marginBottom:14}}>Contact Information</h3>
<div style={{fontSize:12,color:C.textMuted,lineHeight:2}}>
<div><strong style={{color:C.navy}}>Address:</strong> {CO.address}, {CO.city}</div>
<div><strong style={{color:C.navy}}>Phone:</strong> {CO.phone}</div>
<div><strong style={{color:C.navy}}>Fax:</strong> {CO.fax}</div>
<div><strong style={{color:C.navy}}>Email:</strong> {CO.email}</div>
<div><strong style={{color:C.navy}}>Website:</strong> {CO.website}</div></div></div></div></div></S>

<S dark><L>FAQ</L><T>Frequently Asked Questions</T><div style={{maxWidth:680,marginTop:20}}><Faq fs={[
{q:"What superalloy grades does ForceBeyond work with?",a:"All major nickel-based superalloys including Inconel 718, 625, 713, Hastelloy, Waspaloy, Mar-M-247, Rene alloys, Stellite, A-286, plus cobalt-based and iron-based superalloys."},
{q:"What certifications does ForceBeyond hold?",a:"ForceBeyond is ISO 9001:2015 certified. Manufacturing partners hold IATF 16949, AS9100, ISO 13485, and NADCAP as applicable."},
{q:"What is your quality control process?",a:CO.qc},
{q:"Where are your manufacturing locations?",a:"Headquartered in New Castle, Delaware, USA, with manufacturing resources in the USA, Malaysia, South Korea, China, Thailand, Vietnam, and Taiwan."},
]}/></div></S></div>}

// MAIN APP
export default function App(){const[pg,sPg]=useState("home");const go=(p)=>{sPg(p);window.scrollTo({top:0,behavior:"smooth"});trackPageView("/"+p,p)};
const R=()=>{if(pg==="home")return<Home go={go}/>;if(pg==="blog")return<Blog go={go}/>;if(pg==="industries")return<Industries go={go}/>;if(pg==="contact")return<Contact/>;const hm=pg.match(/^hub-(.+)$/);if(hm){const h=HUBS.find(x=>x.slug===hm[1]);if(h)return<Hub h={h} go={go}/>}const km=pg.match(/^kw-(.+)$/);if(km){const k=KW.find(x=>x.slug===km[1]);if(k)return<KwPg kw={k} go={go}/>}return<Home go={go}/>};
return<div style={{minHeight:"100vh",background:C.bg,color:C.text,fontFamily:F.body}}><style>{css}</style><Nav pg={pg} go={go}/>{R()}<Ft go={go}/></div>}
