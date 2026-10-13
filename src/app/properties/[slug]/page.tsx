"use client";

import React, { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getPropertyBySlug } from "@/lib/storage";
import { Property } from "@/data/properties";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import {
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  Maximize2,
  CheckCircle,
  ArrowLeft,
  Share2,
  Building,
} from "lucide-react";

export default function PropertyDetailPage() {
  const { isMarathi } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      try {
        const found = await getPropertyBySlug(slug);
        if (found) {
          setProperty(found);
          setActiveImage(found.heroImage);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-champagne border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-muted-text">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-primary-text">Property Not Found</h2>
        <p className="text-xs text-muted-text">The requested property listing does not exist or has been removed.</p>
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-champagne text-background text-xs font-semibold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Properties</span>
        </Link>
      </div>
    );
  }

  const title = isMarathi ? property.titleMr : property.title;
  const description = isMarathi ? property.descriptionMr : property.description;
  const features = isMarathi && property.featuresMr?.length ? property.featuresMr : property.features;

  const whatsappMessage = `Hello Anant Kale (AR Vastu), I am interested in "${property.title}" located in ${property.location} (${property.areaText || ""}). Please share more details and schedule a site visit.`;
  const whatsappUrl = `https://wa.me/919923035351?text=${encodeURIComponent(whatsappMessage)}`;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Top Navigation Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-muted-text border-b border-white/5 pb-4">
        <Link
          href="/properties"
          className="inline-flex items-center gap-1.5 hover:text-champagne transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isMarathi ? "सर्व प्रॉपर्टीजकडे परत" : "Back to Properties"}</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/10 transition-colors"
        >
          <Share2 className="w-3 h-3 text-champagne" />
          <span>{copied ? (isMarathi ? "लिंक कॉपी केली!" : "Link Copied!") : isMarathi ? "शेअर करा" : "Share"}</span>
        </button>
      </div>

      {/* Main Grid: Gallery & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Gallery & Details (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Hero Gallery Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 shadow-subtle">
              <Image
                src={activeImage || property.heroImage}
                alt={title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-background/90 text-champagne border border-champagne/40 rounded backdrop-blur-md">
                  {property.category}
                </span>
                <span className="px-2.5 py-1 text-[11px] font-medium bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 rounded backdrop-blur-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{property.verificationStatus}</span>
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            {property.gallery && property.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImage === img ? "border-champagne scale-102" : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Key Specs Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-text">
              <MapPin className="w-4 h-4 text-champagne" />
              <span>{property.addressSummary}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-2 pb-4 border-b border-white/10 text-xs">
              {property.areaText && (
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-champagne" />
                  <div>
                    <span className="text-muted-text block text-[10px] uppercase">Plot / Built Area</span>
                    <span className="font-semibold text-primary-text">{property.areaText}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-champagne" />
                <div>
                  <span className="text-muted-text block text-[10px] uppercase">Transaction Type</span>
                  <span className="font-semibold text-primary-text">{property.transactionType}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <div>
                  <span className="text-muted-text block text-[10px] uppercase text-right">Valuation / Quote</span>
                  <span className="font-serif text-xl font-bold text-champagne">
                    {property.priceText || "Consultation upon Request"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary-text">
              {isMarathi ? "प्रॉपर्टीचा तपशील" : "Property Overview & Context"}
            </h3>
            <p className="text-sm text-muted-text leading-relaxed whitespace-pre-line font-light">
              {description}
            </p>
          </div>

          {/* Verified Features */}
          {features && features.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="font-serif text-xl font-bold text-primary-text">
                {isMarathi ? "महत्त्वाची वैशिष्ट्ये व कायदेशीर स्थिती" : "Salient Features & Title Status"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded bg-background-secondary border border-white/5 text-xs text-primary-text"
                  >
                    <CheckCircle className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Lead Action Card & Schedule (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-background-secondary border border-champagne/30 space-y-6 shadow-champagne sticky top-28">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-champagne font-semibold">
                Direct Real Estate Guidance
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary-text mt-1">
                {isMarathi ? "अनंत काळे यांच्याशी संपर्क" : "Enquire with Anant Kale"}
              </h3>
              <p className="text-xs text-muted-text mt-1">
                {isMarathi
                  ? "जागेची प्रत्यक्ष पाहणी करण्यासाठी व मूळ महसूल कागदपत्रे तपासण्यासाठी थेट संपर्क करा."
                  : "Request revenue document copies or schedule a private site walk-through in Wai."}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-subtle"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isMarathi ? "व्हॉट्सॲपवर माहिती विचारा" : "Enquire on WhatsApp"}</span>
              </a>

              <a
                href="tel:+919923035351"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/15 text-xs font-medium uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>+91 99230 35351</span>
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-champagne hover:bg-champagne-hover text-background text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isMarathi ? "साइट व्हिजिट ठरवा" : "Schedule Site Visit"}</span>
              </button>
            </div>

            {/* Consultant Trust Badge */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-muted-text">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Broker Spams · 100% Confidential</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne flex-shrink-0 mt-0.5" />
                <span>Office: Rajesh Xerox, Opp Police Station, Songirwadi, Wai</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <SiteVisitModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProperty={property.title}
      />
    </div>
  );
}
