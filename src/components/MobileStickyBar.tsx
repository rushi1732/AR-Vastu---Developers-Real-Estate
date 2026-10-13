"use client";

import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MobileStickyBarProps {
  onOpenVisitModal: () => void;
  propertyName?: string;
}

export function MobileStickyBar({ onOpenVisitModal, propertyName }: MobileStickyBarProps) {
  const { isMarathi } = useLanguage();

  const whatsappMsg = propertyName
    ? `Hello AR Vastu, I would like to enquire about ${propertyName}.`
    : isMarathi
    ? "नमस्कार AR Vastu, मला वाई परिसरातील प्रॉपर्टीची माहिती हवी आहे."
    : "Hello AR Vastu, I would like to enquire about properties in Wai.";

  const whatsappUrl = `https://wa.me/919923035351?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background-secondary/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+919923035351"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-white/5 border border-white/10 text-primary-text hover:bg-white/10 transition-colors"
        >
          <Phone className="w-4 h-4 text-champagne mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">
            {isMarathi ? "कॉल करा" : "Call Now"}
          </span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">
            {isMarathi ? "व्हॉट्सॲप" : "WhatsApp"}
          </span>
        </a>

        <button
          onClick={onOpenVisitModal}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-champagne text-background font-semibold hover:bg-champagne-hover transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wide">
            {isMarathi ? "साइट व्हिजिट" : "Site Visit"}
          </span>
        </button>
      </div>
    </div>
  );
}
