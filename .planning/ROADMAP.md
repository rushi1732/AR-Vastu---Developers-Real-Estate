# Project Roadmap: AR Vastu Real Estate Platform

## Phase Structure

### Phase 1: Foundation, Design Tokens & Project Initialization
- Initialize Next.js project with App Router, TypeScript, Tailwind CSS, Lucide icons.
- Configure brand assets (official logo in `/public/brand/ar-vastu-logo.jpg`, favicon, open-graph assets).
- Establish color tokens (`#0B0D0F`, `#15191D`, `#C7A979`, `#C9CDD2`, `#F6F5F2`), typography (Cormorant Garamond, Manrope, Devanagari fonts).
- Setup internationalization dictionary (English / Marathi).

### Phase 2: Core Components & Layout Shell
- Global Header / Navbar with responsive mobile menu, brand logo, telephone quick-dial, language switcher.
- Global Footer with verified business info, address in Wai, Satara, Google Maps link, office hours, service area links.
- Floating Lead Generation Widgets: Floating WhatsApp button, Mobile Sticky Action Bar, Site Visit Modal.

### Phase 3: Public Pages Implementation
- Home (`/`): Cinematic Hero, Property Categories, Verified Featured Listings, Why Choose AR Vastu, Service Areas, Consultation Banner.
- About Us (`/about`): History, philosophy, local market mastery, Anant Kale background.
- Properties (`/properties`): Search, filters (category, location, price, type), sorting, clean empty state, cards.
- Property Details (`/properties/[slug]`): Gallery, specs, map, enquiry CTA with pre-filled WhatsApp.
- Services (`/services`): NA plots, Agricultural land, Residential, Commercial, Leasing, advisory.
- Locations (`/locations` & sub-sections): Wai, Mahabaleshwar, Panchgani, Satara, Shirwal, Khandala.
- Contact (`/contact`): Detailed contact page, map, form with validation.
- Legal (`/privacy`, `/terms`) & Custom 404 (`/not-found`).

### Phase 4: Database & Admin Dashboard
- Supabase schema definition (`supabase/schema.sql`): `properties`, `enquiries`, `site_visits`.
- Supabase client integration with mock fallback storage for offline preview.
- Admin dashboard (`/admin`) for viewing submissions and managing properties.

### Phase 5: SEO, Performance & Testing
- JSON-LD LocalBusiness / RealEstateAgent structured data.
- Metadata, sitemap.xml, robots.txt.
- Production build validation, browser testing, responsiveness check.
