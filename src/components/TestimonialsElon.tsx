"use client";

import React from "react";
import Image from "next/image";
import { Quote, ExternalLink, CheckCircle, Star } from "lucide-react";

export default function TestimonialsElon() {
  return (
    <section className="py-20 sm:py-28 bg-[#001C3D] text-[#FAF7F0] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#004495]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30 text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-bold mb-4">
            From Billionaires to Backpackers
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight mb-5">
            Ambuluwawa Welcomes All!
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mb-6 rounded-full" />
          <div className="text-[#C6D8EB] text-sm sm:text-base font-light leading-relaxed space-y-2">
            <p>
              The allure of Ambuluwawa touches all, from the world&apos;s richest man to foreigners and locals alike.
            </p>
            <p>
              Every individual who crosses its path always leaves with a memory to share — even if it&apos;s just a simple &ldquo;!&rdquo;.
            </p>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 items-stretch max-w-5xl mx-auto">
          
          {/* Bento Card 1: Elon Musk (Col Span: 6, Rounded 3xl) */}
          <div className="md:col-span-6 bg-[#00142C] rounded-3xl border border-[#0A305C] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group hover:border-[#C5A880]/50 transition-all">
            <div className="absolute top-6 right-6">
              <Quote className="w-10 h-10 text-[#C5A880]/20" />
            </div>

            <div>
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C5A880]">
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
                  <div className="text-[11px] text-[#8CA6C1]">
                    World&apos;s Richest Man in 2022
                  </div>
                  <div className="text-[10px] text-[#C5A880] mt-0.5">
                    Discover Elon&apos;s Reaction on Ambuluwawa
                  </div>
                </div>
              </div>

              <div className="my-6">
                <div className="font-serif text-5xl sm:text-6xl text-white font-light">
                  &ldquo;!&rdquo;
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0C2A50] text-right">
              <a
                href="https://x.com/elonmusk/status/1629706771878096896?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.16em] text-[#C5A880] hover:text-white transition-colors inline-flex items-center space-x-1.5 bg-[#001F42] px-3.5 py-1.5 rounded-full"
              >
                <span>View On X</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Durga Gaikwad (Col Span: 6, Rounded 3xl) */}
          <div className="md:col-span-6 bg-[#00142C] rounded-3xl border border-[#0A305C] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group hover:border-[#004495] transition-all">
            <div className="absolute top-6 right-6">
              <Quote className="w-10 h-10 text-[#C5A880]/20" />
            </div>

            <div>
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#001F42] border-2 border-[#C5A880]/60 flex items-center justify-center font-serif text-lg text-[#C5A880] font-light shadow-md">
                  DG
                </div>
                <div>
                  <div className="font-serif text-lg text-white font-normal">
                    Durga Gaikwad
                  </div>
                  <div className="text-[11px] text-[#8CA6C1]">
                    Traveller
                  </div>
                </div>
              </div>

              <div className="my-4">
                <p className="text-sm text-[#D7E4F2] font-light leading-relaxed italic">
                  &ldquo;We visited this place in December 2023. It was really an amazing experience for us. Like the narrow way, amazing view from top, windy air. Do not carry 🎒 🛍 etc things, so that it will be easy to step up.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0C2A50] text-xs text-[#8CA6C1] flex items-center justify-between">
              <span>Verified Visitor Review</span>
              <div className="flex items-center text-[#C5A880]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 3: Google Reviews Live Social Proof (Col Span: 12, Rounded 3xl) */}
          <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-[#00142C] border border-[#0A305C] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#001F42] flex items-center justify-center text-[#C5A880]">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="text-white font-serif text-xl sm:text-2xl font-light flex items-center space-x-2">
                  <span>4.8 Out of 5.0 Rating</span>
                  <span className="text-[#C5A880] text-sm font-sans font-semibold">• 2,500+ Traveler Reviews</span>
                </div>
                <div className="text-xs text-[#8CA6C1] mt-0.5">
                  Sri Lanka&apos;s highest-rated multi-religious mountain biodiversity sanctuary
                </div>
              </div>
            </div>

            <a
              href="https://g.co/kgs/hJzFBuv"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-btn shrink-0 inline-flex items-center space-x-2 px-7 py-3.5 bg-[#004495] hover:bg-[#002B5E] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-full shadow-lg transition-all"
            >
              <span>Read 2,500+ stories</span>
              <ExternalLink className="w-4 h-4 text-[#C5A880]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
