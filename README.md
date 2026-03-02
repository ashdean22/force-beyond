# SuperAlloyPro — Next.js SEO Website

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

Or connect the repo to [vercel.com](https://vercel.com) for automatic deploys.

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer + GA + Schema)
│   ├── page.tsx            # Homepage
│   ├── [slug]/page.tsx     # Dynamic route → generates ALL service, hub, and AI pages
│   ├── request-quote/      # Quote form
│   ├── about/              # About page
│   ├── resources/          # Resources index
│   └── contact/            # Contact page
├── components/
│   ├── Header.tsx          # Sticky nav with mobile menu
│   └── Footer.tsx          # Footer with all service links + CTA
├── data/
│   └── services.ts         # ⚡ SINGLE SOURCE OF TRUTH for all pages
└── lib/                    # (future: utilities)
```

## How Pages Are Generated

All **14 keyword pages**, **3 material hub pages**, and **10 AI/long-tail pages** are auto-generated from `src/data/services.ts`. To add a new page:

1. Add an entry to `TARGET_KEYWORDS`, `CONTENT_HUBS`, or `AI_PAGES`
2. The `[slug]/page.tsx` route handles rendering automatically
3. SEO metadata, schema markup, and internal links are generated from the data

## Pages Generated (27 total)

**14 Target Keyword Pages:**
- /superalloys-casting/
- /superalloys-forging/
- /superalloys-machining/
- /inconel-casting/
- /inconel-forging/
- /inconel-machining/
- /inconel-718-casting/
- /inconel-718-forging/
- /inconel-718-machining/
- /inconel-625-casting/
- /inconel-625-forging/
- /inconel-625-machining/
- /titanium-casting/
- /titanium-machining/

**3 Content Hub Pages:**
- /superalloys/
- /inconel/
- /titanium/

**10 AI Long-Tail Pages:**
- /inconel-718-vs-625/
- /casting-vs-forging-superalloys/
- /superalloy-selection-guide/
- /inconel-718-casting-aerospace-gas-turbines/
- /titanium-casting-medical-implants/
- /inconel-625-nuclear-smr-components/
- /5-challenges-superalloy-machining/
- /vacuum-investment-casting-explained/
- /how-to-choose-superalloy-casting-supplier/
- /total-cost-casting-vs-machining-bar-stock/

## SEO Features Included

- ✅ SSR (server-side rendered) via Next.js — Google crawls full HTML
- ✅ Unique `<title>` and `<meta description>` per page
- ✅ FAQPage schema markup (rich snippets) on all 14 service pages
- ✅ Organization schema on site-wide layout
- ✅ Internal linking: related services, hub→child, footer links
- ✅ Google Analytics 4 placeholder (replace `GA_MEASUREMENT_ID`)
- ✅ Trailing slashes for clean URLs
- ✅ Static export for fast hosting

## TODO Before Launch

- [ ] Buy domain: superalloypro.com
- [ ] Replace `GA_MEASUREMENT_ID` in layout.tsx with your GA4 ID
- [ ] Add real images (facility photos, process images)
- [ ] Connect quote form to backend (n8n webhook, Formspree, etc.)
- [ ] Set up Google Search Console and submit sitemap
- [ ] Expand AI page content (currently stubs)
- [ ] Add blog section for ongoing content
