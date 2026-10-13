"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import {
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  FileText,
  UserCheck,
  Compass,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const { isMarathi } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. EDITORIAL HERO */}
      <section className="relative py-20 lg:py-28 bg-background-secondary border-b border-white/10 overflow-hidden architectural-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full metallic-badge text-xs uppercase tracking-wider mb-6 font-semibold">
            <Compass className="w-3.5 h-3.5 text-champagne" />
            <span>{isMarathi ? "आमचा परिचय" : "Corporate Profile"}</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-primary-text leading-tight mb-6">
            {isMarathi ? (
              <>
                स्थानिक अनुभव आणि <span className="text-champagne italic">विश्वासार्हतेची</span> परंपरा.
              </>
            ) : (
              <>
                Grounded in Integrity, <span className="text-champagne italic">Local Ground Reality</span> & Client Trust.
              </>
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-text leading-relaxed font-light">
            {isMarathi
              ? "एआर वास्तू – डेव्हलपर्स अँड रिअल इस्टेट हे वाई (जिल्हा सातारा) मधील विश्वसनीय नाव आहे. पारदर्शक व्यवहार आणि कायदेशीर अचूकता हीच आमची ओळख आहे."
              : "AR Vastu – Developers & Real Estate is a boutique consultancy dedicated to property acquisition, land development advisory, and bespoke real estate transactions across Wai and the Western Ghats."}
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY & LEADERSHIP (ANANT KALE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-champagne/30 bg-black/60 shadow-champagne">
              <Image
                src="/brand/ar-vastu-logo.jpg"
                alt="AR Vastu Brand Architectural Emblem"
                fill
                className="object-contain p-8 bg-[#0B0D0F]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-background/90 backdrop-blur-md border border-white/10">
                <h3 className="font-serif text-xl font-bold text-primary-text">Anant Kale</h3>
                <p className="text-xs text-champagne font-medium uppercase tracking-wider">
                  Lead Consultant & Property Advisor
                </p>
                <p className="text-xs text-muted-text mt-1">
                  Rajesh Xerox, Opp Police Station, Songirwadi, Wai
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
              {isMarathi ? "आमची भूमिका" : "Leadership & Ethos"}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text leading-tight">
              {isMarathi
                ? "स्थानिक जमिनीचा इतिहास आणि महसूल नोंदी समजणारे अनुभवी मार्गदर्शन."
                : "A Transparent Bridge Between Landowners and Discerning Buyers."}
            </h2>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              {isMarathi
                ? "सातारा जिल्ह्यातील कृष्णा नदी खोरे आणि सह्याद्री पर्वतरांगांमधील जमिनींचे व्यवहार करताना स्थानिक जमिनीचा प्रकार (भोगवटादार वर्ग १, वर्ग २), वनजमीन आरक्षण, एन.ए. ऑर्डर्स आणि प्रत्यक्ष वहिवाट रस्ते समजणे अत्यंत गरजेचे असते. श्री. अनंत काळे यांच्या मार्गदर्शनाखाली एआर वास्तू प्रत्येक व्यवहारात अचूक माहिती पुरवते."
                : "Real estate transactions in Wai, Panchgani, and Mahabaleshwar are uniquely multifaceted. Between eco-sensitive valley guidelines, town planning approvals, agricultural occupancy classifications, and ancestral property partitions, prospective buyers require authentic on-ground guidance."}
            </p>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              {isMarathi
                ? "आम्ही केवळ खरेदी-विक्री करत नाही, तर खरेदीदाराच्या बजेट व उद्दिष्टानुसार योग्य जागेची निवड करून कायदेशीर दस्तऐवज सुरक्षित राहतील याची खबरदारी घेतो."
                : "Under Anant Kale's stewardship, AR Vastu prioritizes personal engagement over volume brokerage. We physically walk the boundaries with clients, review 7/12 extract lineages with revenue records, and ensure absolute title clarity prior to finalizing transactions."}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-white/5 border border-white/10">
                <FileText className="w-5 h-5 text-champagne mb-2" />
                <h4 className="text-sm font-semibold text-primary-text mb-1">
                  {isMarathi ? "कागदपत्रांची पडताळणी" : "Rigorous Title Verification"}
                </h4>
                <p className="text-xs text-muted-text">
                  {isMarathi
                    ? "७/१२, फेरफार नोंदी, व नकाशा यांची संपूर्ण तपासणी."
                    : "Deep scrutiny of revenue documents, mutation entries, and sanctions."}
                </p>
              </div>

              <div className="p-4 rounded bg-white/5 border border-white/10">
                <UserCheck className="w-5 h-5 text-champagne mb-2" />
                <h4 className="text-sm font-semibold text-primary-text mb-1">
                  {isMarathi ? "थेट वैयक्तिक संवाद" : "Direct Principal Attention"}
                </h4>
                <p className="text-xs text-muted-text">
                  {isMarathi
                    ? "प्रत्येक ग्राहकाशी थेट अनंत काळे यांच्याकडून मार्गदर्शन."
                    : "Every client collaborates directly with Anant Kale without intermediaries."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUYING & SELLING METHODOLOGY */}
      <section className="bg-background-secondary border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
              {isMarathi ? "कार्यपद्धती" : "Our Methodology"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-2 mb-4">
              {isMarathi ? "खरेदी आणि विक्रीची पारदर्शक प्रक्रिया" : "Structured, Transparent Advisory"}
            </h2>
            <p className="text-sm text-muted-text">
              {isMarathi
                ? "व्यवहारात कसलाही संभ्रम राहू नये म्हणून आम्ही ठरवून दिलेल्या स्पष्ट टप्प्यांवर काम करतो."
                : "Step-by-step clarity ensuring peace of mind for both buyers and property owners."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-background/70 border border-white/10 relative">
              <span className="text-2xl font-serif font-bold text-champagne/40">Phase 01</span>
              <h3 className="font-serif text-xl font-bold text-primary-text mt-2 mb-3">
                {isMarathi ? "गरज व बजेट समजून घेणे" : "Requirement Alignment"}
              </h3>
              <p className="text-xs text-muted-text leading-relaxed">
                {isMarathi
                  ? "तुम्हाला एन.ए. प्लॉट हवा आहे की शेतजमीन, बंगल्यासाठी जागा हवी की गुंतवणुकीसाठी, यानुसार योग्य पर्यायांची निवड केली जाते."
                  : "We map your objective—whether building a family home, developing an organic orchard, or commercial frontage—against realistic market availability."}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background/70 border border-white/10 relative">
              <span className="text-2xl font-serif font-bold text-champagne/40">Phase 02</span>
              <h3 className="font-serif text-xl font-bold text-primary-text mt-2 mb-3">
                {isMarathi ? "प्रत्यक्ष जागेची पाहणी व मोजणी" : "Ground Due Diligence"}
              </h3>
              <p className="text-xs text-muted-text leading-relaxed">
                {isMarathi
                  ? "जागेचा प्रत्यक्ष वहिवाट रस्ता, सीमा, वीज, पाणी आणि शेजारच्या नोंदींची जागेवर जाऊन खात्री केली जाते."
                  : "Personal site visits with the client to verify boundaries, road approach, topography, natural water sources, and neighborhood demographics."}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background/70 border border-white/10 relative">
              <span className="text-2xl font-serif font-bold text-champagne/40">Phase 03</span>
              <h3 className="font-serif text-xl font-bold text-primary-text mt-2 mb-3">
                {isMarathi ? "नोंदणी व हस्तांतरण प्रक्रिया" : "Registration & Mutation"}
              </h3>
              <p className="text-xs text-muted-text leading-relaxed">
                {isMarathi
                  ? "मुद्रांक शुल्क, खरेदीखत दस्त नोंदणी आणि त्यानंतर महसूल दप्तरी फेरफार नोंद होईपर्यंत सर्व मदत केली जाते."
                  : "Facilitating fair negotiations, stamp duty execution at the sub-registrar office in Wai, and tracking post-registration mutation (ferfar) records."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-gradient-to-b from-background-secondary to-[#111519] border border-champagne/30 max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text">
            {isMarathi
              ? "वाई किंवा सातारा परिसरात प्रॉपर्टी शोधत आहात?"
              : "Looking for Trusted Real Estate Guidance in Wai?"}
          </h2>
          <p className="text-sm text-muted-text max-w-xl mx-auto">
            {isMarathi
              ? "थेट अनंत काळे यांच्याशी संपर्क साधा किंवा आमच्या कार्यालयास भेट द्या."
              : "Connect directly with Anant Kale for honest, documented property options and personalized site visits."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              {isMarathi ? "साइट व्हिजिट बुक करा" : "Book a Site Visit"}
            </button>

            <a
              href="tel:+919923035351"
              className="w-full sm:w-auto px-7 py-3 rounded bg-white/5 hover:bg-white/10 border border-white/15 text-primary-text font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span>+91 99230 35351</span>
            </a>
          </div>
        </div>
      </section>

      <SiteVisitModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProperty="About Us Advisory Consultation"
      />
    </div>
  );
}
