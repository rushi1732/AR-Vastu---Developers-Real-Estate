"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FloatingWhatsAppProps {
  propertyName?: string;
}

export function FloatingWhatsApp({ propertyName }: FloatingWhatsAppProps) {
  const { isMarathi } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const message = propertyName
    ? `Hello AR Vastu, I am interested in ${propertyName}. Please share complete details.`
    : isMarathi
    ? "नमस्कार AR Vastu, मला वाई व परिसरातील प्रॉपर्टीबद्दल माहिती हवी आहे."
    : "Hello AR Vastu, I am interested in property consultation in Wai. Please share more details.";

  const encodedUrl = `https://wa.me/919923035351?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 relative bg-background-secondary border border-champagne/30 text-primary-text px-3 py-2 rounded-lg shadow-champagne text-xs max-w-[210px] flex items-start justify-between gap-2 animate-bounce-subtle">
          <div>
            <p className="font-semibold text-champagne text-[11px]">Anant Kale</p>
            <p className="text-[11px] text-muted-text">
              {isMarathi ? "थेट व्हॉट्सॲपवर चर्चा करा" : "Chat on WhatsApp now"}
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-muted-text hover:text-primary-text"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={encodedUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="group relative flex items-center justify-center w-13 h-13 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
