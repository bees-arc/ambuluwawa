"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, ExternalLink, CheckCircle, Heart } from "lucide-react";

export default function TestimonialsElon() {
  return (
    <section id="stories" className="py-20 sm:py-28 bg-[#122319] text-[#FAF7F0] relative overflow-hidden">
      {/* Background Subtle Mountain Watermark */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#1A3828]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
            Global Acclaim &amp; Guest Impressions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight mb-5">
            From Billionaires to Backpackers, <br />
            <span className="italic font-normal text-[#E8DFD0]">Ambuluwawa Welcomes All</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#C6BEB1] text-sm sm:text-base font-light leading-relaxed">
            The allure of Ambuluwawa touches every wanderer. From world visionaries 
            to international mountain trekkers and local families, each visitor leaves 
            with a memory to cherish.
          </p>
        </div>

        {/* Testimonials Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Spotlight Card: Elon Musk's Famous Reaction */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#1B3526] to-[#0E1E14] rounded-[4px] border border-[#C5A880]/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group">
            <div className="absolute top-6 right-6">
              <Quote className="w-10 h-10 text-[#C5A880]/20 group-hover:text-[#C5A880]/40 transition-colors" />
            </div>

            <div>
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-semibold mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                <span>Global Viral Sensation</span>
              </div>

              {/* Elon's Reaction Quote */}
              <div className="mb-8">
                <div className="font-serif text-6xl sm:text-7xl text-white font-light mb-4">
                  &ldquo;!&rdquo;
                </div>
                <p className="text-sm text-[#D7CEBF] font-light leading-relaxed">
                  When a heart-stopping drone video of the dizzying Ambuluwawa spiral tower ascent circulated globally on X, Elon Musk succinctly captured the pure awe of millions around the world in a single iconic exclamation mark.
                </p>
              </div>
            </div>

            {/* Author Profile */}
            <div className="pt-6 border-t border-[#2F4E3C] flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C5A880]">
                  <Image
                    src="https://ambuluwawa.com/wp-content/uploads/2024/01/elonmusk.jpeg"
                    alt="Elon Musk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif text-lg text-white font-normal flex items-center">
                    <span>Elon Musk</span>
                    <CheckCircle className="w-3.5 h-3.5 ml-1.5 text-[#C5A880]" />
                  </div>
                  <div className="text-[11px] text-[#A69C8E]">
                    World Business Leader &amp; Visionary
                  </div>
                </div>
              </div>

              <a
                href="https://x.com/elonmusk/status/1629706771878096896?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.16em] text-[#C5A880] hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>View Post</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Guest Reviews & 2,500+ Certification Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Guest Review Card 1 */}
            <div className="bg-[#162A1F]/90 backdrop-blur-md rounded-[4px] border border-[#274533] p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 mb-3 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#E2DACB] font-light leading-relaxed italic mb-6">
                  &ldquo;We visited in December. It was truly an unforgettable experience. The tapering spiral staircase, the sheer drop, the mountain mist and windy air atop the pinnacle left us speechless!&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A880]/50">
                  <Image
                    src="https://ambuluwawa.com/wp-content/uploads/2024/01/cropped-portrait-of-a-handsome-young-businessman-i-2022-10-05-09-51-06-utc.jpg"
                    alt="Durga Gaikwad"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif text-base text-white font-normal">
                    Durga Gaikwad
                  </div>
                  <div className="text-[11px] text-[#9EAFA5]">
                    International Traveler &amp; Explorer
                  </div>
                </div>
              </div>
            </div>

            {/* Google Rating Certification Banner */}
            <div className="bg-gradient-to-r from-[#203D2D] to-[#162F21] rounded-[4px] border border-[#C5A880]/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-[3px] bg-[#C5A880] text-[#122319] flex items-center justify-center font-serif text-2xl font-bold">
                  4.8
                </div>
                <div>
                  <div className="text-sm font-semibold text-white flex items-center">
                    <span>Over 2,500+ Verified 5-Star Stories</span>
                  </div>
                  <div className="text-xs text-[#D8CFBF]">
                    Certified on Google Local Guides &amp; Tripadvisor
                  </div>
                </div>
              </div>

              <a
                href="https://g.co/kgs/hJzFBuv"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-btn px-5 py-2.5 bg-[#C5A880] hover:bg-[#D4BA95] text-[#122319] text-[11px] uppercase tracking-[0.16em] font-semibold rounded-[3px] whitespace-nowrap transition-all flex items-center space-x-2"
              >
                <span>Read Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
