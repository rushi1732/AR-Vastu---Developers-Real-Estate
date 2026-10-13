import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-champagne/10 border border-champagne/30 flex items-center justify-center text-champagne">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-champagne font-semibold">
          Error 404 · Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-text">
          Location Not Available
        </h1>

        <p className="text-xs text-muted-text leading-relaxed font-light">
          The property, service, or regional guide you are looking for might have been relocated or updated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-champagne hover:bg-champagne-hover text-background text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-white/5 hover:bg-white/10 text-primary-text border border-white/10 text-xs font-medium uppercase tracking-wider transition-colors"
          >
            <span>Explore Properties</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
