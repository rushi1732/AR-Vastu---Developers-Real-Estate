import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
          <Shield className="w-4 h-4" />
          <span>Legal Framework (Draft for Business Owner Approval)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text mt-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted-text mt-1">
          Last revised: October 2026 · AR Vastu – Developers & Real Estate, Wai
        </p>
      </div>

      <div className="space-y-6 text-xs text-muted-text leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">1. Overview</h2>
          <p>
            AR Vastu – Developers & Real Estate (&quot;AR Vastu&quot;, &quot;we&quot;, &quot;us&quot;) operates from Rajesh Xerox, Opposite Police Station, Songirwadi, Wai, Maharashtra 412803. We are committed to safeguarding the confidentiality and integrity of information entrusted to us by clients seeking real estate advisory.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">2. Information We Collect</h2>
          <p>
            We collect personal details solely when voluntarily submitted through our enquiry forms, site visit requests, WhatsApp interactions, or telephonic conversations:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Contact Phone Number and WhatsApp Number</li>
            <li>Email Address (optional)</li>
            <li>Property acquisition or sales requirements, preferred locations, and budget considerations</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">3. Use of Information</h2>
          <p>
            Information provided is utilized strictly for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Coordinating direct property consultations with Anant Kale</li>
            <li>Arranging and confirming physical site visits in Wai, Panchgani, Mahabaleshwar, or Satara</li>
            <li>Sharing relevant title, 7/12 extract, or zoning documentation requested by the client</li>
            <li>Compliance with applicable property registration and sub-registrar regulations</li>
          </ul>
          <p className="font-medium text-primary-text/80">
            We never sell, rent, or trade your contact information to third-party telemarketers or external broker databases.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-primary-text">4. Contact & Inquiries</h2>
          <p>
            For questions regarding this draft policy or to update your submitted information, reach out to Anant Kale at +91 9923035351 or via email at arvastu35@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
