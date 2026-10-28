"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  X, 
  ArrowRight, 
  Mountain,
  Ticket
} from "lucide-react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Full-bleed Luxury Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ambuluwawa-hero.jpg"
            alt="Ambuluwawa Peak Panoramic Sunrise and Spiral Tower"
            fill
            priority
            quality={100}
            className="object-cover object-center scale-[1.01] transition-transform duration-[12000ms] ease-out hover:scale-100"
          />
          {/* Refined Luxury Four Seasons Overlay: Subtle Dark Navy Gradient preserving panoramic scenery */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001C3D]/30 to-[#001229]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#001229]/20 to-[#001229]/70" />
        </div>

        {/* Ambient Top Spacing */}
        <div className="w-full"></div>

        {/* Hero Narrative Core */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-8 sm:py-12">
          {/* Refined Kicker Badge */}
          {/* Destination Landmark Live Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#001428]/85 backdrop-blur-md border border-[#C5A880]/50 text-[#F5EAD8] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Open Today • 07:30 AM – 05:30 PM</span>
            <span className="text-[#C5A880]">•</span>
            <span>3,567 FT Elevation</span>
            <span className="hidden sm:inline text-[#C5A880]">•</span>
            <span className="hidden sm:inline text-white/90">Gampola, Sri Lanka</span>
          </div>

          {/* Exact Headline from ambuluwawa.com in Four Seasons Serif */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-light text-white leading-[1.12] sm:leading-[1.08] tracking-[-0.015em] mb-5 sm:mb-6 drop-shadow-md">
            Where Vistas Inspire <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E2EAF4]">&amp; Stories Ignite</span>
          </h1>

          {/* Exact Subtitle from ambuluwawa.com */}
          <p className="max-w-2xl mx-auto text-[#D5E1EE] text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide mb-8 sm:mb-10 text-balance opacity-95">
            Beyond the view, beyond the climb, lies a story waiting to be told.
          </p>

          {/* Action Buttons: Book Ticket & Watch Film */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://prod-ambuluwawa-main-web.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-btn w-full sm:w-auto px-8 py-4 bg-[#004495] hover:bg-[#002D62] text-white text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold rounded-full shadow-2xl transition-all flex items-center justify-center space-x-2.5 border border-[#0055BA] group"
            >
              <Ticket className="w-4 h-4 text-[#C5A880] group-hover:rotate-12 transition-transform" />
              <span>Book My Ticket To Ambuluwawa</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-[13px] uppercase tracking-[0.18em] font-medium border border-white/25 transition-all flex items-center justify-center space-x-2.5 group shadow-lg"
            >
              <div className="w-6 h-6 rounded-full bg-[#C5A880] flex items-center justify-center text-[#001C3D] group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch 4K Video Tour</span>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal (YouTube Player for https://youtu.be/XDMWG0VO3sg) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            <div className="flex items-center justify-between p-4 bg-[#001229] text-white border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Mountain className="w-4 h-4 text-[#C5A880]" />
                <span className="font-serif text-lg tracking-wide">Ambuluwawa Peak Video</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/XDMWG0VO3sg?autoplay=1&rel=0"
                title="Ambuluwawa Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
