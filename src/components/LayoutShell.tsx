"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { MobileStickyBar } from "./MobileStickyBar";
import { SiteVisitModal } from "./SiteVisitModal";
import { SellPropertyModal } from "./SellPropertyModal";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenEnquire={() => setIsVisitModalOpen(true)} />
      
      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />

      {/* Floating Lead Generation Widgets */}
      <FloatingWhatsApp />
      <MobileStickyBar onOpenVisitModal={() => setIsVisitModalOpen(true)} />

      {/* Interactive Modals */}
      <SiteVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
      <SellPropertyModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
      />
    </div>
  );
}
