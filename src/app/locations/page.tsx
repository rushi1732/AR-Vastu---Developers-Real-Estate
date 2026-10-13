"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { locationsData } from "@/data/locations";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import {
  MapPin,
  Compass,
  ArrowRight,
  Phone,
  MessageCircle,
  Navigation,
  CheckCircle,
} from "lucide-react";

export default function LocationsPage() {
  const { isMarathi } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleEnquireLocation = (locName: string) => {
    setSelectedLocation(`Consultation for ${locName} Properties`);
    setModalOpen(true);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-white/10 architectural-grid text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full metallic-badge text-xs uppercase tracking-wider mb-6 font-semibold">
            <Compass className="w-3.5 h-3.5 text-champagne" />
            <span>{isMarathi ? "कार्यक्षेत्र" : "Geographic Scope"}</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-primary-text leading-tight mb-6">
            {isMarathi ? (
              <>
                सातारा जिल्हा व <span className="text-champagne italic">सह्याद्री खोऱ्यातील</span> प्रमुख परिसर.
              </>
            ) : (
              <>
                Prime Property Zones Across <span className="text-champagne italic">Satara & Western Ghats</span>.
              </>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-text leading-relaxed font-light">
            {isMarathi
              ? "वाई, महाबळेश्वर, पाचगणी, सातारा, शिरवळ आणि खंडाळा परिसरातील मोक्याच्या जागांची सविस्तर माहिती."
              : "In-depth local market intelligence, zoning guidelines, and verified property opportunities across our 6 primary regional service territories."}
          </p>
        </div>
      </section>

      {/* 2. DETAILED LOCATIONS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {locationsData.map((loc, idx) => (
          <div
            key={loc.slug}
            id={loc.slug}
            className="p-8 sm:p-12 rounded-2xl bg-background-secondary border border-white/10 scroll-mt-28 shadow-subtle space-y-8"
          >
            {/* Top Row: Name, Tagline & District */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-champagne font-semibold tracking-wider uppercase mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{loc.district}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text">
                  {isMarathi ? loc.nameMr : loc.name}
                </h2>
                <p className="text-xs sm:text-sm text-muted-text mt-1 italic">
                  &quot;{isMarathi ? loc.taglineMr : loc.tagline}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleEnquireLocation(loc.name)}
                  className="px-4 py-2 rounded bg-champagne hover:bg-champagne-hover text-background text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  {isMarathi ? "या भागात चौकशी करा" : "Enquire in " + loc.name}
                </button>
                <Link
                  href={`/properties?location=${encodeURIComponent(loc.name)}`}
                  className="px-4 py-2 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/15 text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {isMarathi ? "प्रॉपर्टीज पहा" : "View Listings"}
                </Link>
              </div>
            </div>

            {/* Middle Grid: Image & Story */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={loc.heroImage}
                  alt={loc.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-5">
                <p className="text-sm text-primary-text/90 leading-relaxed">
                  {isMarathi ? loc.descriptionMr : loc.description}
                </p>

                <div className="p-4 rounded-lg bg-background/60 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-champagne mb-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{isMarathi ? "रस्ते व दळणवळण संपर्क" : "Transit & Connectivity"}</span>
                  </div>
                  <p className="text-xs text-muted-text">
                    {isMarathi ? loc.connectivityMr : loc.connectivity}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-text mb-2 font-semibold">
                    {isMarathi ? "या भागातील महत्त्वाचे मुद्दे" : "Key Regional Attributes"}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-text">
                    {(isMarathi ? loc.highlightsMr : loc.highlights).map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-champagne flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Row: Popular Categories in this Region */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-muted-text">{isMarathi ? "मागणी असलेले प्रकार:" : "Popular Categories:"}</span>
                <div className="flex flex-wrap gap-2">
                  {loc.popularCategories.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-primary-text text-[11px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/919923035351?text=Hello%20AR%20Vastu,%20I%20am%20interested%20in%20properties%20in%20${loc.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-champagne hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isMarathi ? "व्हॉट्सॲपवर चौकशी" : "WhatsApp Inquiry for " + loc.name}</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-b from-background-secondary to-[#111519] border border-champagne/30 max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl font-bold text-primary-text">
            {isMarathi ? "प्रत्यक्ष जागेची पाहणी करायची आहे का?" : "Planning an On-Ground Site Visit?"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
            {isMarathi
              ? "वाई, पाचगणी किंवा सातारा परिसरातील जमिनी प्रत्यक्ष पाहण्यासाठी आधीच वेळ निश्चित करा."
              : "Let us coordinate a dedicated schedule so Anant Kale can guide you through exact boundary landmarks and title records."}
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleEnquireLocation("General Regional Consultation")}
              className="px-6 py-3 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              {isMarathi ? "साइट व्हिजिट बुक करा" : "Book Regional Site Visit"}
            </button>
          </div>
        </div>
      </section>

      <SiteVisitModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProperty={selectedLocation}
      />
    </div>
  );
}
