# Scoped Requirements: AR Vastu Real Estate Platform

## Requirements Matrix

### 1. Brand Identity & Header / Footer
- [x] Official silver metallic architectural logo rendered cleanly in navbar and footer.
- [x] Favicon configured with AR Vastu brand mark.
- [x] Elegant sticky navigation with quick WhatsApp CTA, Language Toggle (EN / MR), and mobile drawer.
- [x] Full footer with address (Songirwadi, Wai), direct contact numbers, Google Business Profile link, business hours, service areas, and legal links.

### 2. Pages Architecture
- [x] **Page 1: Home (`/`)**: Cinematic hero, about AR Vastu intro, property category showcases, verified featured properties / tasteful empty state, Why Choose AR Vastu commitments, locations grid, consultation banner.
- [x] **Page 2: About Us (`/about`)**: Editorial story, AR Vastu philosophy, Anant Kale background & local ethos, buying/selling approach, areas served, call to action.
- [x] **Page 3: Properties (`/properties`)**: Filterable catalog (category, location: Wai/Mahabaleshwar/Panchgani/etc, type: Buy/Sell/Lease, price range), search bar, sorting, clean empty state, enquiry button.
- [x] **Page 4: Property Details (`/properties/[slug]`)**: Dynamic listing view, image gallery, specs (area, title, location, category, verified status), Schedule Site Visit form, contextual WhatsApp button with prefilled listing name.
- [x] **Page 5: Services (`/services`)**: Dedicated sections for Buying, Selling, NA Plots, Agricultural Land, Residential, Commercial, and Leasing assistance, with contextual inquiry modal/links.
- [x] **Page 6: Locations (`/locations`)**: Deep location pages and content for Wai, Mahabaleshwar, Panchgani, Satara, Shirwal, Khandala with property availability and inquiry trigger.
- [x] **Page 7: Contact (`/contact`)**: Verified Google Map embed of Rajesh Xerox / Songirwadi location, click-to-call, click-to-WhatsApp, validated contact form with full schema.
- [x] **Page 8: Privacy Policy & Terms (`/privacy`, `/terms`)**: Editable legal frameworks compliant with real estate advisory standards.
- [x] **Custom 404 Page (`/not-found`)**: Styled luxury error screen.

### 3. Lead Generation System
- [x] Persistent Floating WhatsApp Button with pre-filled message generator.
- [x] Floating Mobile Sticky Bar (Call + WhatsApp + Enquire).
- [x] Site Visit Booking Modal / Form with instant WhatsApp dispatch and database storage.
- [x] Property Seller Submission Form ("Sell Your Property").

### 4. Admin Portal & Supabase Database
- [x] Supabase integration module (`lib/supabase.ts`) with fallback demo mode when API keys are not yet configured.
- [x] Database migration script (`supabase/schema.sql`) for properties, images, enquiries, and site visit bookings with Row-Level Security (RLS).
- [x] Admin Dashboard (`/admin`) for viewing real-time enquiries, adding new properties, and managing inventory.

### 5. Technical SEO & Performance
- [x] Next.js Metadata API for canonical URLs, OpenGraph, Twitter Cards, robots.txt, sitemap.xml.
- [x] RealEstateAgent / LocalBusiness Schema.org JSON-LD structured data.
- [x] Zero emoji UI icons (100% Lucide vector icons).
- [x] Bilingual English & Marathi toggle with localized terminology.
