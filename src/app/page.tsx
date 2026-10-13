"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getAllProperties } from "@/lib/storage";
import { Property } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { locationsData } from "@/data/locations";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Building,
  Compass,
  Trees,
  Home,
  Store,
  Layers,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { t, isMarathi } = useLanguage();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [selectedPropertyTitle, setSelectedPropertyTitle] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const openEnquiry = (prop: Property) => {
    setSelectedPropertyTitle(prop.title);
    setVisitModalOpen(true);
  };

  const categories = [
    {
      title: t.categories.naPlots,
      desc: t.categories.naPlotsDesc,
      icon: Compass,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      href: "/properties?category=NA+Plots",
    },
    {
      title: t.categories.agriLand,
      desc: t.categories.agriLandDesc,
      icon: Trees,
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80",
      href: "/properties?category=Agricultural+Land",
    },
    {
      title: t.categories.bungalows,
      desc: t.categories.bungalowsDesc,
      icon: Home,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      href: "/properties?category=Bungalows",
    },
    {
      title: t.categories.rowHouses,
      desc: t.categories.rowHousesDesc,
      icon: Layers,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      href: "/properties?category=Row+Houses",
    },
    {
      title: t.categories.flats,
      desc: t.categories.flatsDesc,
      icon: Building,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      href: "/properties?category=Flats",
    },
    {
      title: t.categories.commercial,
      desc: t.categories.commercialDesc,
      icon: Store,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      href: "/properties?category=Commercial+Properties",
    },
  ];

  return (
    <div className="flex flex-col space-y-24 lg:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden architectural-grid">
        {/* Background Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85"
            alt="Scenic Sahyadri Mountains and River Valley in Wai"
            fill
            priority
            className="object-cover opacity-25 scale-105 transform motion-safe:animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full metallic-badge text-xs mb-8 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-ping" />
            <span className="font-medium tracking-wider uppercase text-[11px]">
              {t.hero.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary-text leading-[1.1] mb-6">
            <span>{t.hero.title}</span>{" "}
            <span className="text-champagne italic">{t.hero.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-text leading-relaxed font-light mb-10">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/properties"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-champagne"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                setSelectedPropertyTitle("General Real Estate Consultation");
                setVisitModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/15 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              <Calendar className="w-4 h-4 text-champagne" />
              <span>{t.hero.talkToExpert}</span>
            </button>
          </div>

          {/* Location Trust Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-muted-text font-light">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-champagne" />
              <span>{t.hero.officeLocation}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
              <span>7/12 & Revenue Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-champagne" />
              <span>Direct: +91 99230 35351</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT AR VASTU INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-background-secondary shadow-subtle">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
                alt="Architecture and Villa in Hills"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-background/90 backdrop-blur-md border border-white/10">
                <p className="text-xs text-champagne uppercase tracking-widest font-semibold mb-1">
                  Local Presence in Wai
                </p>
                <p className="text-xs text-muted-text">
                  Opposite Police Station, Songirwadi, Wai 412803
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded metallic-badge text-xs">
              <Building className="w-3.5 h-3.5 text-champagne" />
              <span>{isMarathi ? "स्थानिक रिअल इस्टेट नेतृत्व" : "Local Real Estate Guidance"}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-text leading-tight">
              {isMarathi
                ? "वाई व सातारा जिल्ह्यातील जमिनीचे खात्रीशीर व पारदर्शक व्यवहार."
                : "Dedicated Real Estate & Land Advisory Rooted in Wai."}
            </h2>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              {isMarathi
                ? "एआर वास्तू – डेव्हलपर्स अँड रिअल इस्टेट हे वाईमधील अग्रगण्य सल्लागार केंद्र आहे. श्री. अनंत काळे यांच्या नेतृत्वाखाली आम्ही एन.ए. प्लॉट्स, शेतजमीन, बंगले आणि व्यावसायिक जागांच्या खरेदी-विक्रीसाठी संपूर्ण कायदेशीर व प्रामाणिक सहकार्य प्रदान करतो."
                : "AR Vastu – Developers & Real Estate is an established property consultancy led by Anant Kale in Wai, Maharashtra. We assist buyers, investors, and landowners with verified Non-Agricultural (NA) residential plots, agricultural holdings along the Krishna river valley, hill retreat bungalows, and commercial real estate."}
            </p>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              {isMarathi
                ? "प्रत्येक जागेची प्रत्यक्ष पाहणी, महसूल दप्तरी तपासणी (७/१२, फेरफार, नकाशा) आणि वाजवी किमतीची खात्री करूनच आम्ही व्यवहार पूर्ण करतो."
                : "We do not believe in speculative claims. Every transaction is approached with rigorous revenue document scrutiny, boundary clarity, and transparent communication."}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>{isMarathi ? "आमच्याबद्दल अधिक वाचा" : "About Our Philosophy"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-champagne" />
              </Link>

              <a
                href="https://wa.me/919923035351?text=Hello%20Anant%20Kale,%20I%20would%20like%20to%20discuss%20property%20opportunities%20in%20Wai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{isMarathi ? "अनंत काळे यांच्याशी संपर्क" : "Contact Anant Kale"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPERTY CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            {isMarathi ? "विविध प्रकार" : "Inventory Scope"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-2 mb-3">
            {t.categories.title}
          </h2>
          <p className="text-sm text-muted-text">{t.categories.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.href}
                className="group relative rounded-lg overflow-hidden border border-white/10 bg-background-secondary p-6 flex flex-col justify-between hover:border-champagne/40 transition-all duration-300 shadow-subtle min-h-[220px]"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-champagne mb-4 group-hover:bg-champagne group-hover:text-background transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-text group-hover:text-champagne transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 flex items-center gap-1.5 text-xs text-champagne font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  <span>{t.categories.viewListings}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
              {isMarathi ? "निवडक संधी" : "Verified Opportunities"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-1">
              {isMarathi ? "उपलब्ध प्रॉपर्टीज आणि प्लॉट्स" : "Featured Properties in Region"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-text mt-1">
              {isMarathi
                ? "वाई, पाचगणी आणि सातारा परिसरातील थेट सल्लागारांकडील खात्रीशीर जागा."
                : "Hand-picked land parcels and homes available through direct consultation with AR Vastu."}
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne hover:text-champagne-light transition-colors"
          >
            <span>{isMarathi ? "सर्व प्रॉपर्टीज पहा" : "Explore All Listings"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-96 rounded-lg bg-background-secondary border border-white/5 animate-pulse"
              />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-background-secondary border border-white/10 max-w-xl mx-auto">
            <Compass className="w-10 h-10 text-champagne mx-auto mb-4 opacity-80" />
            <h3 className="font-serif text-xl font-bold text-primary-text mb-2">
              {isMarathi ? "नवीन प्रॉपर्टीज लवकरच जोडल्या जातील" : "Direct Enquiry Available"}
            </h3>
            <p className="text-xs text-muted-text mb-6">
              {isMarathi
                ? "सध्या उपलब्ध असलेल्या ताज्या प्लॉट्स व जमिनींची माहिती मिळवण्यासाठी थेट संपर्क साधा."
                : "Active listings are updated regularly. Contact Anant Kale directly with your specific land requirements."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-champagne text-background font-semibold text-xs uppercase tracking-wider"
            >
              <span>{t.nav.enquire}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.slice(0, 6).map((prop) => (
              <PropertyCard key={prop.id} property={prop} onEnquire={openEnquiry} />
            ))}
          </div>
        )}
      </section>

      {/* 5. WHY CHOOSE AR VASTU (COMMITMENTS) */}
      <section className="bg-background-secondary border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
              {t.commitments.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-2 mb-4">
              {t.commitments.title}
            </h2>
            <p className="text-sm text-muted-text leading-relaxed">
              {t.commitments.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t.commitments.point1Title,
                desc: t.commitments.point1Desc,
                num: "01",
              },
              {
                title: t.commitments.point2Title,
                desc: t.commitments.point2Desc,
                num: "02",
              },
              {
                title: t.commitments.point3Title,
                desc: t.commitments.point3Desc,
                num: "03",
              },
              {
                title: t.commitments.point4Title,
                desc: t.commitments.point4Desc,
                num: "04",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-background/60 border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-champagne/40 mb-3">
                    {item.num}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-muted-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne" />
                  <span>Service Commitment</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOCATIONS WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            {t.locationsSection.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-2 mb-3">
            {t.locationsSection.title}
          </h2>
          <p className="text-sm text-muted-text">{t.locationsSection.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locationsData.map((loc) => (
            <div
              key={loc.slug}
              className="card-luxury rounded-lg overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                <Image
                  src={loc.heroImage}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-serif text-2xl font-bold text-primary-text">
                    {isMarathi ? loc.nameMr : loc.name}
                  </h3>
                  <p className="text-[11px] text-champagne font-medium">
                    {loc.district}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-primary-text/90 italic mb-2">
                    &quot;{isMarathi ? loc.taglineMr : loc.tagline}&quot;
                  </p>
                  <p className="text-xs text-muted-text line-clamp-3 leading-relaxed mb-4">
                    {isMarathi ? loc.descriptionMr : loc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted-text">
                    {loc.popularCategories.slice(0, 2).join(" · ")}
                  </span>
                  <Link
                    href={`/locations#${loc.slug}`}
                    className="inline-flex items-center gap-1 text-champagne hover:text-champagne-light font-semibold uppercase text-[11px] tracking-wider"
                  >
                    <span>{t.locationsSection.exploreArea}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONSULTATION BANNER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-champagne/30 bg-gradient-to-r from-background-secondary via-[#191e24] to-background-secondary p-8 sm:p-12 lg:p-16 text-center shadow-champagne">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personal Property Advisory</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-primary-text leading-tight">
              {t.consultation.title}
            </h2>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-light">
              {t.consultation.subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919923035351"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors shadow-subtle"
              >
                <Phone className="w-4 h-4" />
                <span>{t.consultation.callBtn}</span>
              </a>

              <a
                href="https://wa.me/919923035351?text=Hello%20AR%20Vastu,%20I%20am%20interested%20in%20property%20consultation%20in%20Wai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.consultation.whatsappBtn}</span>
              </a>
            </div>

            <p className="text-xs text-muted-text/80 pt-2">
              Office: Rajesh Xerox, Opposite Police Station, Songirwadi, Wai 412803
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Site Visit Modal for Home */}
      <SiteVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        defaultProperty={selectedPropertyTitle}
      />
    </div>
  );
}
