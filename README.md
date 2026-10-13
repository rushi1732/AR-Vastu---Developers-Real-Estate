# AR Vastu – Developers & Real Estate Website

Production-grade, ultra-premium real estate platform designed and built for **AR Vastu – Developers & Real Estate**, located in **Wai, Satara District, Maharashtra, India**.

---

## 1. Business Profile
- **Company Name:** AR Vastu – Developers & Real Estate
- **Principal Consultant:** Anant Kale
- **Primary Phone / WhatsApp:** [+91 99230 35351](https://wa.me/919923035351)
- **Office Desk:** +91 90968 91006
- **Email:** arvastu35@gmail.com
- **Physical Address:** Rajesh Xerox, Opposite Police Station, Songirwadi, Wai, Maharashtra 412803, India
- **Office Hours:** 9:00 AM – 5:00 PM IST
- **Google Business Profile:** [https://share.google/RhWtHjxT6h2GJWm0j](https://share.google/RhWtHjxT6h2GJWm0j)
- **Core Territories:** Wai, Mahabaleshwar, Panchgani, Satara, Shirwal, Khandala
- **Property Categories:** NA Plots, Agricultural Land, Bungalows & Villas, Row Houses, Flats & Apartments, Commercial Properties, Lease Properties

---

## 2. Design System & Art Direction
- **Style:** Luxury Indian Architectural Real Estate, restrained elegance, confident whitespace.
- **Palette:**
  - Primary Background: `#0B0D0F` (Obsidian)
  - Secondary Background: `#15191D` (Charcoal)
  - Primary Text: `#F6F5F2` (Alabaster)
  - Metallic Silver: `#C9CDD2` (Polished Architectural Metal)
  - Muted Text: `#A6ABB1`
  - Champagne Accent: `#C7A979` (Used sparingly for focal CTAs)
- **Typography:**
  - Cormorant Garamond (`--font-cormorant`) for editorial headlines
  - Manrope (`--font-manrope`) for interface, navigation, body
  - Mukta (`--font-mukta`) for Marathi Devanagari typography
- **Zero Emoji Policy:** 100% monoline vector icons via Lucide React.

---

## 3. Key Features
1. **Official Brand Logo:** Integrated directly using AR Vastu's silver metallic architectural emblem on dark background (`/public/brand/ar-vastu-logo.jpg`).
2. **Bilingual Architecture:** Seamless one-click toggle between English and Marathi with authentic, professional Marathi phrasing.
3. **Dynamic Property Catalog (`/properties` & `/properties/[slug]`):** Filter by category, location, and buy/lease type, with image galleries, specifications, and contextual WhatsApp prefilled messages.
4. **Lead Generation System:**
   - Persistent floating WhatsApp quick button.
   - Mobile 3-action sticky bottom bar (Call, WhatsApp, Site Visit).
   - Interactive "Schedule Site Visit" modal with time slots and attendee count.
   - "Sell Your Property" form for landowners and sellers.
   - Validated contact form with address and Google Map embed.
5. **Admin Operations Portal (`/admin`):**
   - Passkey protected (Default: `arvastu2026`).
   - Real-time client enquiry tracking (New, Contacted, Closed).
   - Site visit calendar review.
   - Property listing creator with instant publishing.
6. **Technical SEO & Local Search:**
   - LocalBusiness / RealEstateAgent Schema.org JSON-LD with geo-coordinates and Wai address.
   - OpenGraph and Twitter cards metadata.
   - Dynamic `sitemap.xml` and `robots.txt`.

---

## 4. Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI & Logic:** React 19, TypeScript
- **Styling:** Tailwind CSS with custom theme tokens & CSS animations
- **Icons:** Lucide React
- **Database / Backend:** Supabase (with client-side fallback persistence)
- **Deployment:** Vercel-ready

---

## 5. Local Setup & Running

```bash
# 1. Clone repository & install dependencies
pnpm install # or npm install

# 2. Start local development server
pnpm dev # runs on http://localhost:3000

# 3. Production build
pnpm build
pnpm start
```

---

## 6. Supabase Database Migration
When connecting a production Supabase project:
1. Create a project at [supabase.com](https://supabase.com).
2. Go to the SQL Editor in your Supabase dashboard.
3. Copy the contents of [`supabase/schema.sql`](supabase/schema.sql) and run the script.
4. Copy your project URL and anon public key to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   NEXT_PUBLIC_ADMIN_ACCESS_KEY=arvastu2026
   ```
5. Deploy to Vercel with these environment variables configured in Project Settings.
