"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, User, Phone, CheckCircle, MessageCircle } from "lucide-react";
import { submitSiteVisit } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: string;
}

export function SiteVisitModal({ isOpen, onClose, defaultProperty }: SiteVisitModalProps) {
  const { isMarathi } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [property, setProperty] = useState(defaultProperty || "Wai NA Plots & Land Consultation");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Morning (10:00 AM - 1:00 PM)");
  const [attendees, setAttendees] = useState(2);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) return;

    setIsSubmitting(true);
    try {
      await submitSiteVisit({
        name,
        phone,
        property_name: property,
        preferred_date: date,
        preferred_time: time,
        attendees,
        notes,
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `Hello Anant Kale (AR Vastu), I have requested a Site Visit for: ${property} on ${date} (${time}). Name: ${name}, Phone: ${phone}.`;
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
              {isMarathi ? "साइट व्हिजिट विनंती नोंदवली गेली!" : "Site Visit Requested!"}
            </h3>
            <p className="text-xs text-muted-text max-w-sm mx-auto leading-relaxed">
              {isMarathi
                ? "धन्यवाद! आम्ही आपल्या विनंतीनुसार वेळेची पुष्टी करण्यासाठी लवकरच संपर्क करू."
                : "Thank you! Anant Kale will review your request and confirm the schedule shortly."}
            </p>

            <div className="pt-4 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{isMarathi ? "व्हॉट्सॲपवर त्वरित पुष्टी करा" : "Confirm Instantly on WhatsApp"}</span>
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
                AR Vastu · Direct Advisory
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary-text mt-1">
                {isMarathi ? "साइट व्हिजिट ठरवा (Schedule Visit)" : "Schedule a Site Visit"}
              </h3>
              <p className="text-xs text-muted-text mt-1">
                {isMarathi
                  ? "प्रत्यक्ष जागेची पाहणी करण्यासाठी दिवस व वेळ निश्चित करा."
                  : "Inspect properties on-ground in Wai, Panchgani, or Satara with personal assistance."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-text mb-1">
                  {isMarathi ? "प्रॉपर्टी किंवा परिसर" : "Property / Area of Interest"}
                </label>
                <input
                  type="text"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "पूर्ण नाव *" : "Full Name *"}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-text" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "मोबाईल नंबर *" : "Mobile Number *"}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-text" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "पसंतीची तारीख *" : "Preferred Date *"}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-text" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "वेळ *" : "Time Slot *"}
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 w-3.5 h-3.5 text-muted-text" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#15191D] border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:00 PM)">Afternoon (2:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-text mb-1">
                  {isMarathi ? "येणाऱ्या व्यक्तींची संख्या" : "Number of Attendees"}
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={attendees}
                  onChange={(e) => setAttendees(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-text mb-1">
                  {isMarathi ? "काही विशेष सूचना किंवा प्रश्न?" : "Notes or Specific Requirements"}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    isMarathi
                      ? "उदा. आम्हाला फार्महाऊससाठी जमीन पाहायची आहे..."
                      : "e.g. Interested in comparing 2 parcels along the river..."
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
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
                      : "Booking Site Visit..."
                    : isMarathi
                    ? "साइट व्हिजिट बुक करा"
                    : "Confirm Site Visit Request"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
