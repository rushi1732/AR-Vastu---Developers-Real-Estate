import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Mukta } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LayoutShell } from "@/components/LayoutShell";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arvastu.com"),
  title: "AR Vastu – Developers & Real Estate | Wai, Satara, Mahabaleshwar",
  description:
    "AR Vastu provides premier real estate consultancy, verified NA plots, agricultural land, bungalows, and commercial properties across Wai, Mahabaleshwar, Panchgani, and Satara. Contact Anant Kale (+91 9923035351).",
  keywords: [
    "Real Estate Agent in Wai",
    "Property Dealer in Wai",
    "Land for Sale in Wai",
    "NA Plots in Wai",
    "Agricultural Land in Satara",
    "Property Consultant in Mahabaleshwar",
    "Real Estate in Panchgani",
    "Anant Kale AR Vastu",
    "Songirwadi Wai real estate",
  ],
  authors: [{ name: "AR Vastu – Developers & Real Estate" }],
  openGraph: {
    title: "AR Vastu – Developers & Real Estate | Wai, Maharashtra",
    description:
      "Verified NA Plots, Agricultural Land, and Luxury Residential properties in Wai, Panchgani, and Satara with personal local guidance from Anant Kale.",
    url: "https://arvastu.com",
    siteName: "AR Vastu",
    images: [
      {
        url: "/brand/ar-vastu-logo.jpg",
        width: 800,
        height: 800,
        alt: "AR Vastu Official Architectural Silver Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Vastu – Developers & Real Estate | Wai, Satara",
    description:
      "Premier Real Estate Consultancy & Land Deals in Wai, Mahabaleshwar, Panchgani, and Satara.",
    images: ["/brand/ar-vastu-logo.jpg"],
  },
  icons: {
    icon: "/brand/ar-vastu-logo.jpg",
    apple: "/brand/ar-vastu-logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "AR Vastu – Developers & Real Estate",
  image: "https://arvastu.com/brand/ar-vastu-logo.jpg",
  url: "https://arvastu.com",
  telephone: "+919923035351",
  priceRange: "₹₹₹",
  founder: {
    "@type": "Person",
    name: "Anant Kale",
    jobTitle: "Founder & Real Estate Consultant",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajesh Xerox, Opposite Police Station, Songirwadi",
    addressLocality: "Wai",
    addressRegion: "Maharashtra",
    postalCode: "412803",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.9497,
    longitude: 73.8918,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Wai" },
    { "@type": "AdministrativeArea", name: "Mahabaleshwar" },
    { "@type": "AdministrativeArea", name: "Panchgani" },
    { "@type": "AdministrativeArea", name: "Satara" },
    { "@type": "AdministrativeArea", name: "Shirwal" },
    { "@type": "AdministrativeArea", name: "Khandala" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${mukta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-primary-text selection:bg-champagne selection:text-background">
        <LanguageProvider>
          <LayoutShell>{children}</LayoutShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
