"use client";

import React, { useState } from "react";
import { X, CheckCircle, MessageCircle, Home, Phone, User, MapPin } from "lucide-react";
import { submitEnquiry } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";

interface SellPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SellPropertyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { isMarathi } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("NA Plot");
  const [location, setLocation] = useState("Wai");
  const [area, setArea] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    try {
      await submitEnquiry({
        name,
        phone,
        property_type: propertyType,
        preferred_location: location,
        requirement: "Sell",
        message: `Owner Selling Submission: Area: ${area || "N/A"}, Expected: ${
          expectedPrice || "Negotiable"
        }. Details: ${details}`,
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `Hello Anant Kale (AR Vastu), I want to sell my property. Type: ${propertyType}, Location: ${location}, Area: ${area}, Expected: ${expectedPrice}. Owner: ${name}, Phone: ${phone}.`;
  const whatsappUrl = `https://wa.me/919923035351?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-background-secondary border border-champagne/30 rounded-xl shadow-champagne p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 p-2 text-muted-text hover:text-primary-text rounded-lg hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary-text">
              {isMarathi ? "प्रॉपर्टी तपशील यशस्वीरीत्या प्राप्त!" : "Property Details Submitted!"}
            </h3>
            <p className="text-xs text-muted-text max-w-sm mx-auto leading-relaxed">
              {isMarathi
                ? "धन्यवाद! आम्ही कागदपत्रांची पडताळणी आणि मूल्यांकनासाठी आपल्याशी लवकरच संपर्क साधू."
                : "Thank you! Anant Kale will review your property specifications and connect with you."}
            </p>

            <div className="pt-4 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isMarathi ? "व्हॉट्सॲपवर माहिती शेअर करा" : "Share on WhatsApp Now"}</span>
              </a>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-muted-text hover:text-primary-text"
              >
                {isMarathi ? "बंद करा" : "Close"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-champagne font-semibold">
                AR Vastu · Property Owners
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary-text mt-1">
                {isMarathi ? "तुमची जागा/प्रॉपर्टी विका" : "Sell Your Property"}
              </h3>
              <p className="text-xs text-muted-text mt-1">
                {isMarathi
                  ? "योग्य मूल्यांकनासह खात्रीशीर व गंभीर खरेदीदारांपर्यंत पोहोचण्यासाठी माहिती भरा."
                  : "List your NA plot, agricultural land, bungalow, or commercial space with local experts."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "मालकाचे नाव *" : "Owner Name *"}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-text" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anant Kale"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "संपर्क नंबर *" : "Phone Number *"}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-text" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99230 35351"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "प्रॉपर्टीचा प्रकार" : "Property Type"}
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#15191D] border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                  >
                    <option value="NA Plot">NA Plot</option>
                    <option value="Agricultural Land">Agricultural Land</option>
                    <option value="Bungalow / Villa">Bungalow / Villa</option>
                    <option value="Row House">Row House</option>
                    <option value="Flat / Apartment">Flat / Apartment</option>
                    <option value="Commercial Space">Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "परिसर / शहर" : "Location"}
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#15191D] border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                  >
                    <option value="Wai">Wai</option>
                    <option value="Mahabaleshwar">Mahabaleshwar</option>
                    <option value="Panchgani">Panchgani</option>
                    <option value="Satara">Satara</option>
                    <option value="Shirwal">Shirwal</option>
                    <option value="Khandala">Khandala</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "क्षेत्रफळ (Area)" : "Plot Area / Built-up Area"}
                  </label>
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 2 Guntha / 1 Acre"
                    className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "अपेक्षित किंमत" : "Expected Price"}
                  </label>
                  <input
                    type="text"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(e.target.value)}
                    placeholder="e.g. ₹ 40 Lakhs / Negotiable"
                    className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-text mb-1">
                  {isMarathi ? "इतर माहिती (रस्ता, ७/१२ स्थिती, इ.)" : "Key Features (Road, 7/12 status, water)"}
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    isMarathi
                      ? "उदा. डांबरी रस्ता, स्वतंत्र ७/१२, वीज उपलब्ध..."
                      : "e.g. Clear 7/12 title, tar road touch, borewell available..."
                  }
                  className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
                >
                  {isSubmitting
                    ? isMarathi
                      ? "नोंदणी होत आहे..."
                      : "Submitting..."
                    : isMarathi
                    ? "माहिती पाठवा (Submit Details)"
                    : "Submit Property for Consultation"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
