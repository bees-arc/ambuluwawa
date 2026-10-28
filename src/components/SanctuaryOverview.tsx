"use client";

import React from "react";
import Image from "next/image";
import { 
  Eye, 
  Footprints, 
  Sun, 
  Mountain,
  Flag,
  ArrowRight
} from "lucide-react";

export default function SanctuaryOverview() {
  const journeyStages = [
    {
      stage: "Base to Ridge",
      title: "Pine Woods & Biodiversity Reserve",
      desc: "Start your ascent through endemic flora, fresh pine fragrance, and mountain streams.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Pine.webp"
    },
    {
      stage: "Mid-Mountain",
      title: "Multi-Faith Harmony Sanctuaries",
      desc: "Sri Lanka's historic center uniting Buddhist Stupa, Hindu Kovil, Islamic Mosque, and Christian Chapel.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg"
    },
    {
      stage: "Summit Pinnacle",
      title: "55m Spiral Tower & 3,567 FT Peak",
      desc: "The iconic narrow spiral stairway offering an unobstructed 360-degree cloud panorama.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1-1024x1024.webp"
    }
  ];

  const pillars = [
    {
      icon: Flag,
      tag: "55m Summit Spire",
      title: "55 Steps to Limitless Horizons",
      desc: "Climb the tower’s spiral staircase, only 55 meters tall, and be rewarded with majestic views that soar far beyond."
    },
    {
      icon: Eye,
      tag: "Highland Panoramas",
      title: "A 360-degree Embrace",
      desc: "Feel the wind through your hair, take in the mountain air, and witness the breathtaking panorama of Sri Lanka unfold before you."
    },
    {
      icon: Footprints,
      tag: "Iconic Stairway Climb",
      title: "Narrow Path, Grand Reward",
      desc: "The path may narrow, and the steps may challenge, but each twist and turn leaves you breathless with grandeur."
    },
    {
      icon: Sun,
      tag: "Bio-Reserve Nature",
      title: "Nature's Stairway to Sri Lanka",
      desc: "Sri Lanka's essence resides in the winding paths, not at the peak. Embrace the climb, and connect with the island's true spirit."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#000D20] text-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Divider Header (Exact Reference Style: "—— ABOUT THE TOUR ——") */}
        <div className="flex items-center space-x-4 mb-14 sm:mb-16">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            ABOUT AMBULUWAWA
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        {/* Narrative & Timeline Layout (Exact Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Narrative Copy & Mountain Stats */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Leave the World Below <br />
              <span className="italic font-normal text-[#C5A880]">Embrace the World Above</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed">
              <p>
                We&apos;ve organized a seamless mountain journey for your visit to Ambuluwawa. You&apos;ll experience Sri Lanka&apos;s most celebrated 360-degree viewpoint, perched at <span className="text-[#C5A880] font-medium">3,567 feet</span> above sea level in Gampola.
              </p>
              <p>
                Exploring its essence, Ambuluwawa unfolds as more than just the tower&apos;s name; it embodies the towering mountain, where human craftsmanship meets the awe-inspiring beauty of nature.
              </p>
              <p className="text-white/90">
                No need to worry about schedules or planning — everything is organized. We provide direct digital entry passes, safari transit, and clearly marked trails so you can simply <span className="text-[#C5A880] font-semibold underline underline-offset-4 decoration-[#C5A880]/50">enjoy the journey</span>.
              </p>
            </div>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <div className="font-serif text-xl sm:text-2xl text-[#C5A880] font-light">3,567 FT</div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-white/60 mt-0.5">Peak Height</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <div className="font-serif text-xl sm:text-2xl text-[#C5A880] font-light">55 M</div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-white/60 mt-0.5">Spiral Spire</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <div className="font-serif text-xl sm:text-2xl text-[#C5A880] font-light">360°</div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-white/60 mt-0.5">Highland View</div>
              </div>
            </div>
          </div>

          {/* Right Column: Connected Timeline with Visual Photos (Exact Reference Style) */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-8">
            {/* Vertical Line Connector */}
            <div className="absolute left-6 sm:left-10 top-6 bottom-10 w-[1.5px] bg-gradient-to-b from-[#C5A880] via-white/30 to-white/10" />

            <div className="space-y-10 sm:space-y-12">
              {journeyStages.map((stg, i) => (
                <div key={stg.stage} className="relative flex flex-col sm:flex-row items-start gap-5 group">
                  {/* Timeline Dot Node */}
                  <div className="w-5 h-5 rounded-full bg-[#000D20] border-2 border-[#C5A880] flex items-center justify-center shrink-0 z-10 -ml-[10px] sm:-ml-[10px] mt-1 group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  </div>

                  {/* Stage Text & Details */}
                  <div className="flex-grow">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A880] mb-1">
                      {stg.stage}
                    </div>
                    <h4 className="text-lg sm:text-xl font-normal text-white mb-1.5">
                      {stg.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
                      {stg.desc}
                    </p>
                  </div>

                  {/* Floating Photo Card */}
                  <div className="relative w-full sm:w-44 h-28 sm:h-28 rounded-2xl overflow-hidden border border-white/20 shrink-0 shadow-xl group-hover:border-[#C5A880] transition-colors">
                    <Image
                      src={stg.img}
                      alt={stg.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 180px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000D20]/60 to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Feature Cards (Translucent Rounded Glass Cards from Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-[#C5A880] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.16em] text-[#C5A880] font-semibold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-normal text-white mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#C5A880]">
                  <span>Experience</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
