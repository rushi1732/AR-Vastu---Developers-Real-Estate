"use client";

import React, { useState, useEffect } from "react";
import {
  getAllEnquiries,
  getAllSiteVisits,
  getAllProperties,
  updateEnquiryStatus,
  saveCustomProperty,
  EnquiryRecord,
  SiteVisitRecord,
} from "@/lib/storage";
import { Property } from "@/data/properties";
import { isSupabaseConfigured } from "@/lib/supabase";
import {
  Lock,
  Unlock,
  Building,
  Users,
  Calendar,
  PlusCircle,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Database,
  RefreshCw,
  LogOut,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [activeTab, setActiveTab] = useState<"enquiries" | "visits" | "properties" | "create">("enquiries");
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [visits, setVisits] = useState<SiteVisitRecord[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);

  // New property form
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<Property["category"]>("NA Plots");
  const [newLocation, setNewLocation] = useState<Property["location"]>("Wai");
  const [newPrice, setNewPrice] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [createSuccess, setCreateSuccess] = useState(false);

  const CORRECT_PASSKEY = process.env.NEXT_PUBLIC_ADMIN_ACCESS_KEY || "arvastu2026";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === CORRECT_PASSKEY) {
      setIsAuthenticated(true);
      setErrorMsg("");
      loadData();
    } else {
      setErrorMsg("Invalid Admin Passkey. Please verify your credentials.");
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [eData, vData, pData] = await Promise.all([
        getAllEnquiries(),
        getAllSiteVisits(),
        getAllProperties(),
      ]);
      setEnquiries(eData);
      setVisits(vData);
      setProperties(pData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: EnquiryRecord["status"]) => {
    await updateEnquiryStatus(id, status);
    loadData();
  };

  const handleCreateProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const slug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    const newProp: Property = {
      id: "prop_" + Date.now().toString(36),
      slug: slug || "custom-property-" + Date.now(),
      title: newTitle,
      titleMr: newTitle,
      category: newCategory,
      categoryMr: newCategory,
      location: newLocation,
      locationMr: newLocation,
      transactionType: "Buy",
      priceText: newPrice || "Price on Consultation",
      areaText: newArea || "As Demarcated",
      featured: true,
      heroImage: newImage || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      gallery: [newImage || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"],
      description: newDesc || "Verified real estate property managed by AR Vastu in Wai.",
      descriptionMr: newDesc || "एआर वास्तू, वाई अंतर्गत उपलब्ध असलेली जागा.",
      features: ["Verified Title", "Boundary Demarcation"],
      featuresMr: ["स्वच्छ ७/१२", "प्रत्यक्ष मोजणी"],
      addressSummary: `${newLocation}, Satara District`,
      verificationStatus: "Verified Title",
    };

    const ok = await saveCustomProperty(newProp);
    if (ok) {
      setCreateSuccess(true);
      setNewTitle("");
      setNewPrice("");
      setNewArea("");
      setNewDesc("");
      loadData();
      setTimeout(() => setCreateSuccess(false), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md p-8 rounded-2xl bg-background-secondary border border-champagne/30 shadow-champagne text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
            <Lock className="w-6 h-6" />
          </div>

          <div>
            <h1 className="font-serif text-2xl font-bold text-primary-text">
              AR Vastu Admin Portal
            </h1>
            <p className="text-xs text-muted-text mt-1">
              Protected administrative control for property listings & client leads.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Admin Passkey"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-white/5 border border-white/10 rounded-lg text-primary-text text-center tracking-widest focus:border-champagne focus:outline-none"
                required
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-400 bg-red-950/40 p-2 rounded border border-red-500/20">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Access Dashboard
            </button>
          </form>

          <p className="text-[11px] text-muted-text/60">
            Default passkey: <code className="text-champagne font-mono">arvastu2026</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
              Admin Control Center
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-primary-text mt-1">
            AR Vastu Operations & Leads
          </h1>
          <p className="text-xs text-muted-text">
            Managing client enquiries, on-ground site visits, and inventory in Wai.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs bg-white/5 border border-white/10 text-muted-text">
            <Database className="w-3.5 h-3.5 text-champagne" />
            <span>{isSupabaseConfigured() ? "Supabase Live DB" : "Local Database Mode"}</span>
          </div>

          <button
            onClick={loadData}
            className="p-2 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/10"
            title="Refresh Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-950/40 text-red-300 border border-red-500/20 text-xs hover:bg-red-900/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-2">
        <button
          onClick={() => setActiveTab("enquiries")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-colors ${
            activeTab === "enquiries"
              ? "bg-champagne text-background"
              : "text-muted-text hover:text-primary-text hover:bg-white/5"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Client Enquiries ({enquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("visits")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-colors ${
            activeTab === "visits"
              ? "bg-champagne text-background"
              : "text-muted-text hover:text-primary-text hover:bg-white/5"
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Site Visits ({visits.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("properties")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-colors ${
            activeTab === "properties"
              ? "bg-champagne text-background"
              : "text-muted-text hover:text-primary-text hover:bg-white/5"
          }`}
        >
          <Building className="w-3.5 h-3.5" />
          <span>Active Properties ({properties.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("create")}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-colors ${
            activeTab === "create"
              ? "bg-champagne text-background"
              : "text-muted-text hover:text-primary-text hover:bg-white/5"
          }`}
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Add New Listing</span>
        </button>
      </div>

      {/* Tab 1: Enquiries */}
      {activeTab === "enquiries" && (
        <div className="space-y-4">
          {enquiries.length === 0 ? (
            <div className="text-center py-16 bg-background-secondary rounded-xl border border-white/10 text-xs text-muted-text">
              No client enquiries submitted yet. Submissions from the contact form appear here.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="p-5 rounded-xl bg-background-secondary border border-white/10 space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary-text text-sm">{enq.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        enq.status === "New"
                          ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                          : enq.status === "Contacted"
                          ? "bg-amber-950 text-amber-300 border border-amber-500/30"
                          : "bg-white/5 text-muted-text"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-muted-text">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-champagne" />
                      <a href={`tel:${enq.phone}`} className="hover:text-primary-text font-mono">
                        {enq.phone}
                      </a>
                    </div>
                    {enq.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 text-champagne" />
                        <span>{enq.email}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-champagne" />
                      <span>
                        Requirement: {enq.requirement} · {enq.property_type} in {enq.preferred_location}
                      </span>
                    </div>
                  </div>

                  {enq.message && (
                    <div className="p-2.5 rounded bg-white/5 border border-white/5 text-muted-text text-[11px] leading-relaxed">
                      &quot;{enq.message}&quot;
                    </div>
                  )}

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-muted-text/60">
                      {new Date(enq.created_at).toLocaleDateString()}
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => handleStatusChange(enq.id, "Contacted")}
                        className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px]"
                      >
                        Mark Contacted
                      </button>
                      <button
                        onClick={() => handleStatusChange(enq.id, "Closed")}
                        className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px]"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Site Visits */}
      {activeTab === "visits" && (
        <div className="space-y-4">
          {visits.length === 0 ? (
            <div className="text-center py-16 bg-background-secondary rounded-xl border border-white/10 text-xs text-muted-text">
              No on-ground site visit bookings recorded yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visits.map((v) => (
                <div
                  key={v.id}
                  className="p-5 rounded-xl bg-background-secondary border border-white/10 space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary-text text-sm">{v.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-champagne/20 text-champagne border border-champagne/30">
                      {v.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-muted-text">
                    <div>
                      Property: <span className="text-primary-text font-medium">{v.property_name}</span>
                    </div>
                    <div>
                      Date: <span className="text-primary-text">{v.preferred_date}</span> ({v.preferred_time})
                    </div>
                    <div>
                      Phone:{" "}
                      <a href={`tel:${v.phone}`} className="text-primary-text font-mono hover:underline">
                        {v.phone}
                      </a>
                    </div>
                    <div>Attendees: {v.attendees} person(s)</div>
                  </div>

                  {v.notes && (
                    <div className="p-2 rounded bg-white/5 text-[11px] text-muted-text">
                      Notes: {v.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Active Properties */}
      {activeTab === "properties" && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {properties.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-xl bg-background-secondary border border-white/10 text-xs space-y-2"
              >
                <div className="font-serif text-sm font-bold text-primary-text line-clamp-1">{p.title}</div>
                <div className="text-muted-text flex items-center justify-between">
                  <span>{p.category}</span>
                  <span className="text-champagne">{p.location}</span>
                </div>
                <div className="text-[11px] text-muted-text/80">{p.areaText}</div>
                <div className="font-semibold text-primary-text">{p.priceText}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Add New Listing Form */}
      {activeTab === "create" && (
        <div className="max-w-2xl bg-background-secondary p-8 rounded-2xl border border-champagne/30 shadow-subtle space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary-text">Create Property Listing</h2>
            <p className="text-xs text-muted-text mt-1">
              Add a new NA plot, agricultural parcel, or residential listing to AR Vastu database.
            </p>
          </div>

          {createSuccess && (
            <div className="p-3 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-200 text-xs">
              Property successfully added to inventory!
            </div>
          )}

          <form onSubmit={handleCreateProperty} className="space-y-4 text-xs">
            <div>
              <label className="block text-muted-text mb-1 font-medium">Property Title *</label>
              <input
                type="text"
                placeholder="e.g. 2 Guntha NA Bungalow Plot near Songirwadi"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-muted-text mb-1 font-medium">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as Property["category"])}
                  className="w-full px-3 py-2 bg-[#0B0D0F] border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
                >
                  <option value="NA Plots">NA Plots</option>
                  <option value="Agricultural Land">Agricultural Land</option>
                  <option value="Bungalows">Bungalows</option>
                  <option value="Row Houses">Row Houses</option>
                  <option value="Flats">Flats</option>
                  <option value="Commercial Properties">Commercial Properties</option>
                  <option value="Lease Properties">Lease Properties</option>
                </select>
              </div>

              <div>
                <label className="block text-muted-text mb-1 font-medium">Location</label>
                <select
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value as Property["location"])}
                  className="w-full px-3 py-2 bg-[#0B0D0F] border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
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
                <label className="block text-muted-text mb-1 font-medium">Price / Quote Text</label>
                <input
                  type="text"
                  placeholder="e.g. ₹ 28 Lakhs / Consultation"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-muted-text mb-1 font-medium">Area Text</label>
                <input
                  type="text"
                  placeholder="e.g. 2,000 sq.ft. (2 Guntha)"
                  value={newArea}
                  onChange={(e) => setNewArea(e.target.value)}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-muted-text mb-1 font-medium">Hero Image URL</label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-muted-text mb-1 font-medium">Description</label>
              <textarea
                rows={3}
                placeholder="Provide accurate description, road access, and revenue paperwork status..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded bg-champagne hover:bg-champagne-hover text-background font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Publish Property Listing
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
