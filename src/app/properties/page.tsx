"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { getAllProperties } from "@/lib/storage";
import { Property } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import { SellPropertyModal } from "@/components/SellPropertyModal";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Home,
  RefreshCw,
  PlusCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

function PropertiesContent() {
  const { isMarathi } = useLanguage();
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const initialCat = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Modal states
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [selectedPropertyTitle, setSelectedPropertyTitle] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Update selectedCategory if query param changes
  useEffect(() => {
    const qCat = searchParams.get("category");
    if (qCat) setSelectedCategory(qCat);
  }, [searchParams]);

  const categories = [
    "All",
    "NA Plots",
    "Agricultural Land",
    "Bungalows",
    "Row Houses",
    "Flats",
    "Commercial Properties",
    "Lease Properties",
  ];

  const locations = [
    "All",
    "Wai",
    "Mahabaleshwar",
    "Panchgani",
    "Satara",
    "Shirwal",
    "Khandala",
  ];

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Category match
      if (selectedCategory !== "All" && prop.category !== selectedCategory) {
        return false;
      }
      // Location match
      if (selectedLocation !== "All" && prop.location !== selectedLocation) {
        return false;
      }
      // Transaction type match
      if (selectedType !== "All" && prop.transactionType !== selectedType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = prop.title.toLowerCase().includes(q) || (prop.titleMr && prop.titleMr.toLowerCase().includes(q));
        const descMatch = prop.description.toLowerCase().includes(q) || (prop.descriptionMr && prop.descriptionMr.toLowerCase().includes(q));
        const locMatch = prop.location.toLowerCase().includes(q);
        if (!titleMatch && !descMatch && !locMatch) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") {
        return (a.priceNumeric || 0) - (b.priceNumeric || 0);
      }
      if (sortBy === "price-high") {
        return (b.priceNumeric || 0) - (a.priceNumeric || 0);
      }
      if (sortBy === "featured") {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      return 0;
    });
  }, [properties, selectedCategory, selectedLocation, selectedType, searchQuery, sortBy]);

  const handleEnquire = (prop: Property) => {
    setSelectedPropertyTitle(prop.title);
    setVisitModalOpen(true);
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSelectedType("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="pt-8 pb-4 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
            {isMarathi ? "प्रॉपर्टी कॅटलॉग" : "Real Estate Catalog"}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-primary-text mt-1">
            {isMarathi ? "उपलब्ध जमिनी आणि घरे" : "Properties & Land Parcels"}
          </h1>
          <p className="text-xs sm:text-sm text-muted-text mt-2 max-w-2xl">
            {isMarathi
              ? "वाई, पाचगणी, महाबळेश्वर, सातारा आणि शिरवळ मधील खात्रीशीर एन.ए. प्लॉट्स, शेतजमीन, स्वतंत्र बंगले आणि व्यावसायिक जागा."
              : "Explore verified NA plots, agricultural valley lands, bungalows, and commercial real estate across Wai and Satara district."}
          </p>
        </div>

        <button
          onClick={() => setSellModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 hover:bg-white/10 text-champagne border border-champagne/30 text-xs font-semibold uppercase tracking-wider transition-colors self-start md:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{isMarathi ? "तुमची प्रॉपर्टी विका" : "Sell Your Property"}</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-background-secondary border border-white/10 rounded-xl p-5 space-y-4 shadow-subtle">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-muted-text" />
          <input
            type="text"
            placeholder={
              isMarathi
                ? "प्रॉपर्टीचे नाव किंवा परिसर शोधा (उदा. Songirwadi, NA Plot, River)..."
                : "Search by property title, location or keywords (e.g. Songirwadi, NA Plot, River)..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/5 border border-white/10 rounded-lg text-primary-text placeholder:text-muted-text/60 focus:border-champagne focus:outline-none"
          />
        </div>

        {/* Filter Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Category Dropdown */}
          <div>
            <label className="block text-[11px] text-muted-text mb-1 font-medium">
              {isMarathi ? "प्रकार (Category)" : "Property Category"}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#0B0D0F] border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          <div>
            <label className="block text-[11px] text-muted-text mb-1 font-medium">
              {isMarathi ? "परिसर (Location)" : "Region / Location"}
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 bg-[#0B0D0F] border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Transaction Type */}
          <div>
            <label className="block text-[11px] text-muted-text mb-1 font-medium">
              {isMarathi ? "व्यवहार (Type)" : "Deal Type"}
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 bg-[#0B0D0F] border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
            >
              <option value="All">All Types (Buy / Lease)</option>
              <option value="Buy">Buy</option>
              <option value="Lease">Lease</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] text-muted-text mb-1 font-medium">
              {isMarathi ? "क्रमवारी (Sort By)" : "Sort By"}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 bg-[#0B0D0F] border border-white/10 rounded text-primary-text focus:border-champagne focus:outline-none"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filters Summary / Reset */}
        {(selectedCategory !== "All" ||
          selectedLocation !== "All" ||
          selectedType !== "All" ||
          searchQuery) && (
          <div className="pt-2 flex items-center justify-between text-xs text-muted-text border-t border-white/5">
            <span>
              Showing {filteredProperties.length} matches for current filters
            </span>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-champagne hover:underline"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Property Cards Grid or Empty State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-96 rounded-lg bg-background-secondary border border-white/5 animate-pulse"
            />
          ))}
        </div>
      ) : filteredProperties.length === 0 ? (
        <div className="text-center py-16 px-6 rounded-xl bg-background-secondary border border-white/10 max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-champagne">
            <Home className="w-6 h-6 opacity-70" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-primary-text">
            {isMarathi ? "सध्या कोणतीही प्रॉपर्टी जुळली नाही" : "No Properties Match This Search"}
          </h3>
          <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto">
            {isMarathi
              ? "तुमच्या आवश्यकतेनुसार नवीन किंवा थेट मालकांकडील जागा शोधण्यासाठी अनंत काळे यांच्याशी संपर्क साधा."
              : "We frequently handle bespoke land requirements directly on-ground. Let us know your exact budget and location criteria."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={resetFilters}
              className="w-full sm:w-auto px-4 py-2.5 rounded bg-white/5 hover:bg-white/10 text-primary-text text-xs border border-white/10"
            >
              Reset Filters
            </button>

            <a
              href="https://wa.me/919923035351?text=Hello%20AR%20Vastu,%20I%20am%20looking%20for%20a%20specific%20property%20in%20Wai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Ask Anant Kale</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProperties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} onEnquire={handleEnquire} />
          ))}
        </div>
      )}

      {/* Modals */}
      <SiteVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        defaultProperty={selectedPropertyTitle}
      />
      <SellPropertyModal
        isOpen={sellModalOpen}
        onClose={() => setSellModalOpen(false)}
      />
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-muted-text text-xs">Loading properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
