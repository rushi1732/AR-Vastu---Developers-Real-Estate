"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";
import { Phone, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenEnquire?: () => void;
}

export function Navbar({ onOpenEnquire }: NavbarProps) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/properties", label: t.nav.properties },
    { href: "/services", label: t.nav.services },
    { href: "/locations", label: t.nav.locations },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-nav py-3" : "bg-background/90 backdrop-blur-md py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded overflow-hidden border border-white/10 bg-black flex-shrink-0 group-hover:border-champagne/40 transition-colors">
                <Image
                  src="/brand/ar-vastu-logo.jpg"
                  alt="AR Vastu Logo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-primary-text group-hover:text-champagne transition-colors">
                  AR VASTU
                </span>
                <span className="text-[10px] tracking-widest uppercase text-muted-text">
                  Developers & Real Estate · Wai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    isActive(link.href)
                      ? "text-champagne font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-champagne"
                      : "text-primary-text/80 hover:text-primary-text"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitch />

              <a
                href="tel:+919923035351"
                className="inline-flex items-center gap-1.5 text-xs text-muted-text hover:text-primary-text transition-colors px-2 py-1"
                title="Direct Contact: Anant Kale"
              >
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>+91 99230 35351</span>
              </a>

              {onOpenEnquire ? (
                <button
                  onClick={onOpenEnquire}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-champagne hover:bg-champagne-hover text-background rounded transition-colors shadow-subtle"
                >
                  <span>{t.nav.enquire}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-champagne hover:bg-champagne-hover text-background rounded transition-colors shadow-subtle"
                >
                  <span>{t.nav.enquire}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitch />

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 text-primary-text rounded border border-white/10 hover:border-champagne/40 bg-white/5 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-background/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-xs uppercase tracking-widest text-muted-text mb-2">Navigation</p>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-serif tracking-wide py-1.5 flex items-center justify-between ${
                      isActive(link.href) ? "text-champagne font-bold" : "text-primary-text"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Contact for Mobile */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-muted-text">Direct Contact</p>
              <a
                href="tel:+919923035351"
                className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 text-primary-text"
              >
                <div className="w-8 h-8 rounded bg-champagne/20 flex items-center justify-center text-champagne">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-text">Primary / WhatsApp (Anant Kale)</div>
                  <div className="text-sm font-semibold">+91 99230 35351</div>
                </div>
              </a>

              <a
                href="tel:+919096891006"
                className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 text-primary-text"
              >
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-primary-text">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-text">Office Line</div>
                  <div className="text-sm font-semibold">+91 90968 91006</div>
                </div>
              </a>

              <a
                href="https://wa.me/919923035351?text=Hello%20AR%20Vastu,%20I%20would%20like%20to%20enquire%20about%20properties%20in%20Wai."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm font-semibold tracking-wide"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-muted-text">
              Rajesh Xerox, Opp Police Station, Songirwadi, Wai 412803
            </p>
          </div>
        </div>
      )}
    </>
  );
}
