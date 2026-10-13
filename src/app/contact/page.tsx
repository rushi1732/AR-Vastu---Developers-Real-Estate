"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { submitEnquiry } from "@/lib/storage";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageCircle,
  CheckCircle,
  User,
  ShieldCheck,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const { isMarathi } = useLanguage();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState("NA Plot");
  const [location, setLocation] = useState("Wai");
  const [requirement, setRequirement] = useState<"Buy" | "Sell" | "Lease">("Buy");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage(isMarathi ? "कृपया आपले नाव व फोन नंबर भरा." : "Please enter your name and phone number.");
      return;
    }

    if (!consent) {
      setErrorMessage(isMarathi ? "कृपया संमती बॉक्सवर खूण करा." : "Please accept the consent terms.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitEnquiry({
        name: fullName,
        phone,
        email: email || undefined,
        property_type: propertyType,
        preferred_location: location,
        requirement,
        message,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage("Submission failed. Please call or WhatsApp us directly.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An unexpected error occurred. Please call or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappPrefill = `Hello Anant Kale (AR Vastu), I am submitting an enquiry from your website. Name: ${fullName || "Client"}, Requirement: ${requirement} ${propertyType} in ${location}.`;
  const whatsappUrl = `https://wa.me/919923035351?text=${encodeURIComponent(whatsappPrefill)}`;

  return (
    <div className="space-y-20 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="pt-8 pb-4 text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
          {isMarathi ? "थेट संपर्क" : "Get in Touch"}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary-text">
          {isMarathi ? "आमच्याशी संपर्क साधा" : "Contact AR Vastu"}
        </h1>
        <p className="text-xs sm:text-sm text-muted-text font-light">
          {isMarathi
            ? "प्रॉपर्टी खरेदी, विक्री किंवा प्रत्यक्ष जागेची पाहणी करण्यासाठी आमचे कार्यालय किंवा थेट फोनद्वारे संपर्क करा."
            : "Whether you are looking to purchase verified land, sell property, or schedule an on-ground site visit in Wai."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Office Details & Direct Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-2xl bg-background-secondary border border-white/10 space-y-6 shadow-subtle">
            <h2 className="font-serif text-2xl font-bold text-primary-text border-b border-white/10 pb-3">
              {isMarathi ? "कार्यालयीन माहिती" : "Office & Principal Contact"}
            </h2>

            <div className="space-y-5 text-xs">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary-text mb-0.5">Office Address</div>
                  <div className="text-muted-text leading-relaxed">
                    Rajesh Xerox, Opposite Police Station, Songirwadi, Wai, Maharashtra 412803, India
                  </div>
                  <a
                    href="https://share.google/RhWtHjxT6h2GJWm0j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-champagne hover:underline mt-1.5"
                  >
                    <span>View Google Business Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Primary Contact */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary-text mb-0.5">Primary Contact / Advisor</div>
                  <div className="text-champagne font-medium">Anant Kale</div>
                  <a
                    href="tel:+919923035351"
                    className="text-muted-text hover:text-primary-text block mt-0.5"
                  >
                    +91 99230 35351 (Call & WhatsApp)
                  </a>
                </div>
              </div>

              {/* Office Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary-text flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary-text mb-0.5">Office Landline / Desk</div>
                  <a href="tel:+919096891006" className="text-muted-text hover:text-primary-text block">
                    +91 90968 91006
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary-text flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary-text mb-0.5">Email Inquiries</div>
                  <a href="mailto:arvastu35@gmail.com" className="text-muted-text hover:text-primary-text block">
                    arvastu35@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-primary-text flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary-text mb-0.5">Business Hours</div>
                  <div className="text-muted-text">
                    9:00 AM – 5:00 PM IST
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/919923035351?text=Hello%20AR%20Vastu,%20I%20am%20interested%20in%20property%20consultation%20in%20Wai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Instantly with Anant Kale</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed using exact Songirwadi Wai address */}
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/40 relative">
            <iframe
              title="AR Vastu Office Location - Songirwadi Wai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7433299719543!2d73.88960117463378!3d17.94966608643886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3428d08cb5%3A0xe54ef5bb50a56e29!2sSongirwadi%2C%20Wai%2C%20Maharashtra%20412803!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-background-secondary border border-champagne/30 shadow-champagne">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-text">
                  {isMarathi ? "आपली चौकशी प्राप्त झाली!" : "Enquiry Successfully Submitted!"}
                </h3>
                <p className="text-xs text-muted-text max-w-md mx-auto leading-relaxed">
                  {isMarathi
                    ? "धन्यवाद! आम्ही आपल्या चौकशीचा अभ्यास करून लवकरात लवकर संपर्क साधू. आपण त्वरित उत्तरासाठी व्हॉट्सॲपवर देखील मेसेज करू शकता."
                    : "Thank you for reaching out to AR Vastu. Anant Kale will review your requirement and connect with you shortly."}
                </p>

                <div className="pt-6 space-y-3 max-w-sm mx-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send Copy via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="w-full py-2.5 text-xs text-muted-text hover:text-primary-text"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary-text">
                    {isMarathi ? "प्रॉपर्टी चौकशी अर्ज" : "Property Enquiry Form"}
                  </h2>
                  <p className="text-xs text-muted-text mt-1">
                    {isMarathi
                      ? "खालील माहिती भरा जेणेकरून आम्ही योग्य जमिनी किंवा प्रॉपर्टीबद्दल मार्गदर्शन करू शकू."
                      : "Fill in your criteria below to receive verified property options and advice."}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded bg-red-950/80 border border-red-500/30 text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-text mb-1">
                      {isMarathi ? "पूर्ण नाव *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anant Kale"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-text mb-1">
                      {isMarathi ? "मोबाईल नंबर (WhatsApp) *" : "Mobile Number (WhatsApp) *"}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 99230 35351"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "ईमेल आयडी (पर्यायी)" : "Email Address (Optional)"}
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-text mb-1">
                      {isMarathi ? "प्रॉपर्टीचा प्रकार" : "Property Type"}
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-[#0B0D0F] border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                    >
                      <option value="NA Plot">NA Plot</option>
                      <option value="Agricultural Land">Agricultural Land</option>
                      <option value="Bungalow / Villa">Bungalow / Villa</option>
                      <option value="Row House">Row House</option>
                      <option value="Flat">Flat / Apartment</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Lease">Lease Property</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-text mb-1">
                      {isMarathi ? "पसंतीचा परिसर" : "Preferred Location"}
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs bg-[#0B0D0F] border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                    >
                      <option value="Wai">Wai</option>
                      <option value="Mahabaleshwar">Mahabaleshwar</option>
                      <option value="Panchgani">Panchgani</option>
                      <option value="Satara">Satara</option>
                      <option value="Shirwal">Shirwal</option>
                      <option value="Khandala">Khandala</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-text mb-1">
                      {isMarathi ? "उद्देश (Requirement)" : "Requirement"}
                    </label>
                    <select
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value as "Buy" | "Sell" | "Lease")}
                      className="w-full px-3 py-2.5 text-xs bg-[#0B0D0F] border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text"
                    >
                      <option value="Buy">Buy (खरेदी)</option>
                      <option value="Sell">Sell (विक्री)</option>
                      <option value="Lease">Lease (भाडेतत्त्व)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-text mb-1">
                    {isMarathi ? "संदेश / विशिष्ट आवश्यकता" : "Your Message / Specific Requirements"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      isMarathi
                        ? "उदा. आम्हाला २ गुंठे एन.ए. प्लॉट हवा आहे किंवा फार्महाऊससाठी नदीकाठची जमीन..."
                        : "Describe your intended use, budget range, or preferred timeline..."
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-white/5 border border-white/10 rounded focus:border-champagne focus:outline-none text-primary-text resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 rounded border-white/20 bg-white/5 text-champagne focus:ring-champagne"
                  />
                  <label htmlFor="consent" className="text-[11px] text-muted-text leading-relaxed">
                    {isMarathi
                      ? "मी मान्य करतो/करते की एआर वास्तू माझ्याशी प्रॉपर्टी तपशील आणि साइट व्हिजिट संदर्भात फोन किंवा व्हॉट्सॲपवर संपर्क साधू शकते."
                      : "I agree to allow AR Vastu to contact me via Phone / WhatsApp regarding verified property information."}
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>
                      {isSubmitting
                        ? isMarathi
                          ? "नोंदणी होत आहे..."
                          : "Submitting Enquiry..."
                        : isMarathi
                        ? "चौकशी पाठवा"
                        : "Submit Property Enquiry"}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
