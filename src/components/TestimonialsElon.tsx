"use client";

import React from "react";
import Image from "next/image";
import { Quote, ExternalLink, CheckCircle, Star } from "lucide-react";

export default function TestimonialsElon() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B2545] text-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Divider Header (Exact Reference Style) */}
        <div className="flex items-center space-x-4 mb-14 sm:mb-16">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            TRAVELER STORIES
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        {/* Narrative */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] uppercase tracking-[0.25em] text-[#BFD8F0] font-bold mb-3">
            From Billionaires to Backpackers
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight mb-3">
            Ambuluwawa Welcomes All!
          </h3>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            The allure of Ambuluwawa touches all, from the world&apos;s richest man to foreigners and locals alike. Every individual who crosses its path always leaves with a memory to share â€” even if it&apos;s just a simple &ldquo;!&rdquo;.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 items-stretch max-w-5xl">
          
          {/* Card 1: Elon Musk */}
          <div className="md:col-span-6 bg-white/[0.04] rounded-3xl border border-white/15 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#BFD8F0]/50 transition-all">
            <div className="absolute top-6 right-6">
              <Quote className="w-10 h-10 text-white/10" />
            </div>

            <div>
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#BFD8F0]">
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
                    <CheckCircle className="w-3.5 h-3.5 ml-1.5 text-[#BFD8F0]" />
                  </div>
                  <div className="text-[11px] text-white/60">
                    World&apos;s Richest Man in 2022
                  </div>
                  <div className="text-[10px] text-[#BFD8F0] mt-0.5">
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

            <div className="pt-4 border-t border-white/10 text-right">
              <a
                href="https://x.com/elonmusk/status/1629706771878096896?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.16em] text-[#BFD8F0] hover:text-white transition-colors inline-flex items-center space-x-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
              >
                <span>View On X</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Durga Gaikwad */}
          <div className="md:col-span-6 bg-white/[0.04] rounded-3xl border border-white/15 p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#BFD8F0]/50 transition-all">
            <div className="absolute top-6 right-6">
              <Quote className="w-10 h-10 text-white/10" />
            </div>

            <div>
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-[#BFD8F0]/60 flex items-center justify-center font-serif text-lg text-[#BFD8F0] font-light shadow-md">
                  DG
                </div>
                <div>
                  <div className="font-serif text-lg text-white font-normal">
                    Durga Gaikwad
                  </div>
                  <div className="text-[11px] text-white/60">
                    Traveller
                  </div>
                </div>
              </div>

              <div className="my-4">
                <p className="text-sm text-white/80 font-light leading-relaxed italic">
                  &ldquo;We visited this place in December 2023. It was really an amazing experience for us. Like the narrow way, amazing view from top, windy air. Do not carry ðŸŽ’ ðŸ› etc things, so that it will be easy to step up.&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-white/60 flex items-center justify-between">
              <span>Verified Visitor Review</span>
              <div className="flex items-center text-[#BFD8F0]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Google Reviews Live Rating Banner */}
          <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#BFD8F0]">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="text-white font-serif text-xl sm:text-2xl font-light flex items-center space-x-2">
                  <span>4.8 Out of 5.0 Rating</span>
                  <span className="text-[#BFD8F0] text-sm font-sans font-semibold">â€¢ 2,500+ Traveler Reviews</span>
                </div>
                <div className="text-xs text-white/60 mt-0.5">
                  Sri Lanka&apos;s highest-rated multi-religious mountain biodiversity sanctuary
                </div>
              </div>
            </div>

            <a
              href="https://g.co/kgs/hJzFBuv"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center space-x-2 px-7 py-3.5 bg-white hover:bg-[#FAF7F0] text-[#102F57] text-xs uppercase tracking-[0.18em] font-bold rounded-full shadow-lg transition-all hover:scale-105"
            >
              <span>Read 2,500+ stories</span>
              <ExternalLink className="w-4 h-4 text-[#004495]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
