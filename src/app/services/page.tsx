"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import { SellPropertyModal } from "@/components/SellPropertyModal";
import {
  Compass,
  Search,
  TrendingUp,
  Trees,
  Home,
  Building2,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ServicesPage() {
  const { isMarathi } = useLanguage();
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const getIcon = (name: string) => {
    switch (name) {
      case "Search":
        return Search;
      case "TrendingUp":
        return TrendingUp;
      case "Compass":
        return Compass;
      case "Trees":
        return Trees;
      case "Home":
        return Home;
      case "Building2":
        return Building2;
      default:
        return Compass;
    }
  };

  const handleCta = (serviceId: string, title: string) => {
    if (serviceId === "selling") {
      setSellModalOpen(true);
    } else {
      setSelectedService(title);
      setVisitModalOpen(true);
    }
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO */}
      <section className="py-20 lg:py-28 bg-background-secondary border-b border-white/10 architectural-grid text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full metallic-badge text-xs uppercase tracking-wider mb-6 font-semibold">
            <Compass className="w-3.5 h-3.5 text-champagne" />
            <span>{isMarathi ? "आमच्या सेवा" : "Our Expertise"}</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-primary-text leading-tight mb-6">
            {isMarathi ? (
              <>
                जमीन व रिअल इस्टेटमधील <span className="text-champagne italic">विश्वासार्ह</span> सेवा.
              </>
            ) : (
              <>
                Comprehensive Real Estate & <span className="text-champagne italic">Land Advisory</span> in Wai.
              </>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-text leading-relaxed font-light">
            {isMarathi
              ? "एन.ए. प्लॉट्स, शेतजमीन, बंगले आणि व्यावसायिक जागांच्या खरेदी-विक्रीसाठी संपूर्ण कायदेशीर, निष्पक्ष आणि स्थानिक सहकार्य."
              : "From verified Non-Agricultural plotting and agricultural river parcels to luxury hillside bungalows, we ensure each deal is backed by thorough due diligence."}
          </p>
        </div>
      </section>

      {/* 2. SERVICES DETAILED SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((srv, idx) => {
          const Icon = getIcon(srv.iconName);
          const isEven = idx % 2 === 0;

          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`p-8 sm:p-12 rounded-2xl bg-background-secondary border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left / Text Info (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="w-12 h-12 rounded-lg bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
                  <Icon className="w-6 h-6" />
                </div>

                <h2 className="font-serif text-3xl font-bold text-primary-text">
                  {isMarathi ? srv.titleMr : srv.title}
                </h2>

                <p className="text-sm text-primary-text/90 font-medium">
                  {isMarathi ? srv.shortDescMr : srv.shortDesc}
                </p>

                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-light">
                  {isMarathi ? srv.fullDescMr : srv.fullDesc}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => handleCta(srv.id, srv.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors shadow-champagne"
                  >
                    <span>{srv.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right / Features Box (5 cols) */}
              <div className="lg:col-span-5 bg-background/80 p-6 rounded-xl border border-white/10 space-y-4">
                <h3 className="font-serif text-lg font-bold text-primary-text border-b border-white/10 pb-2">
                  {isMarathi ? "वैशिष्ट्ये आणि प्रक्रिया" : "Scope & Advisory Highlights"}
                </h3>

                <ul className="space-y-3">
                  {(isMarathi ? srv.featuresMr : srv.features).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-text leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. DIRECT CONTACT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-gradient-to-r from-background-secondary via-[#1a1f26] to-background-secondary border border-champagne/30 max-w-4xl mx-auto space-y-6 shadow-subtle">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text">
            {isMarathi ? "विशिष्ट जागेसाठी सल्ला हवा आहे?" : "Need Custom Real Estate Guidance in Wai?"}
          </h2>
          <p className="text-sm text-muted-text max-w-xl mx-auto">
            {isMarathi
              ? "अनंत काळे यांच्याशी थेट चर्चा करण्यासाठी कॉल करा किंवा कार्यालयात भेट द्या."
              : "Speak directly with Anant Kale to discuss your land requirements or arrange a private site consultation."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919923035351"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 99230 35351</span>
            </a>

            <a
              href="https://wa.me/919923035351?text=Hello%20AR%20Vastu,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <SiteVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        defaultProperty={selectedService}
      />
      <SellPropertyModal
        isOpen={sellModalOpen}
        onClose={() => setSellModalOpen(false)}
      />
    </div>
  );
}
