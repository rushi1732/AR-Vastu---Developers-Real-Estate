"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "mr" : "en")}
      aria-label="Switch Language / भाषा बदला"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border border-white/10 hover:border-champagne/40 bg-white/5 hover:bg-white/10 text-primary-text transition-colors"
    >
      <Languages className="w-3.5 h-3.5 text-champagne" />
      <span>{language === "en" ? "मराठी" : "English"}</span>
    </button>
  );
}
