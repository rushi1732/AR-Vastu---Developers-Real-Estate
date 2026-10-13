"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Building,
  Lock,
} from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background-secondary border-t border-white/10 pt-16 pb-24 lg:pb-12 text-muted-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded overflow-hidden border border-white/15 bg-black flex-shrink-0">
                <Image
                  src="/brand/ar-vastu-logo.jpg"
                  alt="AR Vastu Silver Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary-text tracking-wide">
                  AR VASTU
                </h3>
                <p className="text-xs uppercase tracking-widest text-champagne">
                  Developers & Real Estate
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-text">
              {t.footer.about}
            </p>

            <div className="pt-2">
              <a
                href="https://share.google/RhWtHjxT6h2GJWm0j"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs bg-white/5 hover:bg-white/10 text-primary-text border border-white/10 transition-colors"
              >
                <span>Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-champagne" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Services */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-primary-text mb-4 border-b border-white/10 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-champagne transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-champagne transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-champagne transition-colors">
                  {t.nav.properties}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-champagne transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-champagne transition-colors">
                  {t.nav.locations}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-champagne transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Categories & Locations */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-primary-text mb-4 border-b border-white/10 pb-2">
              {t.footer.categories}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/properties?category=NA+Plots" className="hover:text-champagne transition-colors">
                  NA Plots (Wai & Satara)
                </Link>
              </li>
              <li>
                <Link href="/properties?category=Agricultural+Land" className="hover:text-champagne transition-colors">
                  Agricultural Land (Krishna Basin)
                </Link>
              </li>
              <li>
                <Link href="/properties?category=Bungalows" className="hover:text-champagne transition-colors">
                  Bungalows & Villas (Panchgani)
                </Link>
              </li>
              <li>
                <Link href="/properties?category=Row+Houses" className="hover:text-champagne transition-colors">
                  Row Houses (Wai Gated)
                </Link>
              </li>
              <li>
                <Link href="/properties?category=Commercial+Properties" className="hover:text-champagne transition-colors">
                  Commercial & Highway Land (Shirwal)
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-champagne transition-colors text-champagne">
                  View All 6 Service Regions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Office Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-primary-text mb-4 border-b border-white/10 pb-2">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Rajesh Xerox, Opposite Police Station, Songirwadi, Wai, Maharashtra 412803, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                <div>
                  <a href="tel:+919923035351" className="hover:text-primary-text block">
                    +91 99230 35351 (Anant Kale)
                  </a>
                  <a href="tel:+919096891006" className="hover:text-primary-text block text-[11px] text-muted-text/80">
                    +91 90968 91006 (Office)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-champagne flex-shrink-0" />
                <a href="mailto:arvastu35@gmail.com" className="hover:text-primary-text">
                  arvastu35@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-champagne flex-shrink-0" />
                <span>9:00 AM – 5:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-text transition-colors">
              Terms & Conditions
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-muted-text/70 hover:text-champagne transition-colors"
              title="Admin CRM Login"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[10px] text-muted-text/60 max-w-3xl mx-auto leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
