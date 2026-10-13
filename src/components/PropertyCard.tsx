"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/data/properties";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, ArrowRight, ShieldCheck, MessageCircle, Maximize2 } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  onEnquire?: (property: Property) => void;
}

export function PropertyCard({ property, onEnquire }: PropertyCardProps) {
  const { isMarathi } = useLanguage();

  const whatsappMsg = `Hello AR Vastu, I am interested in ${property.title} located in ${property.location}. Please share complete details.`;
  const whatsappUrl = `https://wa.me/919923035351?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="card-luxury rounded-lg overflow-hidden flex flex-col group h-full">
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
        <Image
          src={property.heroImage}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-black/30" />

        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-background/90 backdrop-blur-md text-champagne border border-champagne/40 rounded">
            {isMarathi ? property.categoryMr : property.category}
          </span>
          {property.featured && (
            <span className="px-2 py-1 text-[10px] font-medium tracking-wider uppercase bg-champagne text-background font-bold rounded">
              Featured
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 rounded backdrop-blur-md">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>{property.verificationStatus}</span>
          </span>
        </div>

        {/* Location pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
          <MapPin className="w-3.5 h-3.5 text-champagne" />
          <span>{isMarathi ? property.locationMr : property.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-primary-text group-hover:text-champagne transition-colors line-clamp-1 mb-2">
            <Link href={`/properties/${property.slug}`}>
              {isMarathi ? property.titleMr : property.title}
            </Link>
          </h3>

          <p className="text-xs text-muted-text line-clamp-2 leading-relaxed mb-4">
            {isMarathi ? property.descriptionMr : property.description}
          </p>

          <div className="flex items-center justify-between text-xs py-2.5 border-y border-white/5 mb-4 text-muted-text">
            {property.areaText && (
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-champagne" />
                <span>{property.areaText}</span>
              </div>
            )}
            <div className="font-semibold text-primary-text ml-auto">
              {property.priceText || "Consultation on Request"}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/properties/${property.slug}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/10 transition-colors"
          >
            <span>{isMarathi ? "तपशील" : "Details"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {onEnquire ? (
            <button
              onClick={() => onEnquire(property)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded bg-champagne hover:bg-champagne-hover text-background transition-colors"
            >
              <span>{isMarathi ? "चौकशी" : "Enquire"}</span>
            </button>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
