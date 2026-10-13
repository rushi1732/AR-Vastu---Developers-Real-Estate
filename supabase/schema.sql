-- ==============================================================================
-- AR VASTU - DEVELOPERS & REAL ESTATE (WAI, SATARA)
-- PRODUCTION SUPABASE SCHEMA MIGRATION
-- ==============================================================================

-- 1. Create Properties Table
CREATE TABLE IF NOT EXISTS properties (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    title_mr TEXT,
    category TEXT NOT NULL CHECK (category IN (
        'NA Plots', 'Agricultural Land', 'Bungalows', 
        'Row Houses', 'Flats', 'Commercial Properties', 'Lease Properties'
    )),
    category_mr TEXT,
    location TEXT NOT NULL CHECK (location IN (
        'Wai', 'Mahabaleshwar', 'Panchgani', 'Satara', 'Shirwal', 'Khandala'
    )),
    location_mr TEXT,
    transaction_type TEXT NOT NULL DEFAULT 'Buy' CHECK (transaction_type IN ('Buy', 'Sell', 'Lease')),
    price_text TEXT,
    price_numeric NUMERIC,
    area_text TEXT,
    featured BOOLEAN DEFAULT false,
    hero_image TEXT NOT NULL,
    gallery TEXT[] DEFAULT '{}',
    description TEXT NOT NULL,
    description_mr TEXT,
    features TEXT[] DEFAULT '{}',
    features_mr TEXT[] DEFAULT '{}',
    address_summary TEXT,
    verification_status TEXT DEFAULT 'Verified Title',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Enquiries Table
CREATE TABLE IF NOT EXISTS enquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    property_type TEXT NOT NULL,
    preferred_location TEXT NOT NULL,
    requirement TEXT NOT NULL CHECK (requirement IN ('Buy', 'Sell', 'Lease')),
    message TEXT,
    property_title TEXT,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Closed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Site Visit Requests Table
CREATE TABLE IF NOT EXISTS site_visit_requests (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    property_name TEXT NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_time TEXT NOT NULL,
    attendees INTEGER DEFAULT 1,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Confirmed', 'Completed', 'Cancelled')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_visit_requests ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies
-- Public can read properties
CREATE POLICY "Allow public read access on properties" 
    ON properties FOR SELECT 
    USING (true);

-- Public can submit new enquiries
CREATE POLICY "Allow public insert on enquiries" 
    ON enquiries FOR INSERT 
    WITH CHECK (true);

-- Public can submit site visit requests
CREATE POLICY "Allow public insert on site_visit_requests" 
    ON site_visit_requests FOR INSERT 
    WITH CHECK (true);

-- Authenticated users (Admin) have full control
CREATE POLICY "Allow authenticated full control on properties" 
    ON properties FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated full control on enquiries" 
    ON enquiries FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

CREATE POLICY "Allow authenticated full control on site_visit_requests" 
    ON site_visit_requests FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

-- 6. Indexes for High Performance Search
CREATE INDEX IF NOT EXISTS idx_properties_category ON properties(category);
CREATE INDEX IF NOT EXISTS idx_properties_location ON properties(location);
CREATE INDEX IF NOT EXISTS idx_properties_featured ON properties(featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_site_visits_date ON site_visit_requests(preferred_date);
