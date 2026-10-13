import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="border-b border-white/10 pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-text hover:text-champagne transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-champagne font-semibold">
          <FileText className="w-4 h-4" />
          <span>Legal Framework (Draft for Business Owner Approval)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-2">
          Terms & Conditions
        </h1>
        <p className="text-xs text-muted-text mt-1">
          Last updated: October 2026 · AR Vastu – Developers & Real Estate, Wai
        </p>
      </div>

      <div className="space-y-6 text-xs text-muted-text leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">1. Advisory Role & Document Due Diligence</h2>
          <p>
            AR Vastu acts as an advisory and facilitation consultancy for real estate transactions in Satara District. While we perform thorough diligence on revenue extracts (7/12, ferfar, demarcation maps, and NA sanction orders), clients and buyers are encouraged to engage independent legal advocates to review original documents prior to executing binding sale deeds.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">2. Property Listings & Pricing</h2>
          <p>
            All listed properties, dimensions, and valuations displayed on this website represent current information provided by owners and revenue records. Dimensions and rates are subject to physical land survey and direct negotiation with property principals.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">3. Intellectual Property</h2>
          <p>
            The official AR Vastu logo, branding, and written content on this site are the intellectual property of AR Vastu – Developers & Real Estate. Unauthorized reproduction or scraping is prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">4. Jurisdiction</h2>
          <p>
            Any disputes arising from advisory agreements or representation shall be subject to the exclusive jurisdiction of the competent courts in Wai / Satara District, Maharashtra, India.
          </p>
        </section>
      </div>
    </div>
  );
}
