"use client";

import React from "react";
import Image from "next/image";
import { 
  Flag, 
  Eye, 
  Footprints, 
  Sun, 
  Sparkles,
  Mountain,
  Compass,
  ArrowRight
} from "lucide-react";

export default function SanctuaryOverview() {
  const pillars = [
    {
      icon: Eye,
      tag: "Highland Panoramas",
      title: "A 360-degree Embrace",
      desc: "Feel the wind through your hair, take in the mountain air, and witness the breathtaking panorama of Sri Lanka unfold before you.",
      colSpan: "lg:col-span-4",
    },
    {
      icon: Footprints,
      tag: "Iconic Stairway Climb",
      title: "Narrow Path, Grand Reward",
      desc: "The path may narrow, and the steps may challenge, but each twist and turn leaves you breathless with grandeur.",
      colSpan: "lg:col-span-4",
    },
    {
      icon: Sun,
      tag: "Bio-Reserve Nature",
      title: "Nature's Stairway to Sri Lanka",
      desc: "Sri Lanka's essence resides in the winding paths, not at the peak. Embrace the climb, and connect with the island's true spirit.",
      colSpan: "lg:col-span-4",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#004495]/10 text-[#004495] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Summit Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-[1.15] mb-5">
            Leave the World Below <br />
            <span className="italic font-normal text-[#004495]">Embrace the World Above</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mb-6 rounded-full" />
          <p className="text-[#4E5F70] text-base sm:text-lg font-light leading-relaxed">
            Climb the Ambuluwawa Tower and discover a world where mountains meet clouds 
            and horizons stretch beyond imagination.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 mb-12">
          
          {/* Bento Item 1: Did You Know That: "Ambuluwawa" is the Name of the Mountain? (Large Card: 7 Cols) */}
          <div className="lg:col-span-7 bg-[#001C3D] text-[#FAF7F0] rounded-3xl overflow-hidden border border-[#0A3366] shadow-2xl flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              {/* Image Col */}
              <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[260px]">
                <Image
                  src="https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1-1024x1024.webp"
                  alt="Ambuluwawa Mountain Summit and Tower"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-[#001C3D]/40 to-[#001C3D]" />
              </div>

              {/* Text Col */}
              <div className="sm:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-bold mb-2">
                    <Mountain className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Did You Know That</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-4 leading-snug">
                    &ldquo;Ambuluwawa&rdquo; is the Name of the Mountain?
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-[#D4E0ED] font-light leading-relaxed">
                    <p>
                      Exploring its essence, Ambuluwawa unfolds as more than just the tower&apos;s name; it embodies the towering mountain, rising proudly at <strong className="text-white font-medium">3,567 feet</strong>.
                    </p>
                    <p>
                      Perched atop this majestic mountain lies the Ambuluwawa Tower, offering a panoramic view from the highest point of Ambuluwawa Mountain.
                    </p>
                  </div>
                </div>

                {/* Stat Pods in Rounded Pills */}
                <div className="mt-6 pt-5 border-t border-[#0F3563] grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-2.5 rounded-2xl bg-[#00142C] border border-[#0D386E]">
                    <div className="font-serif text-lg sm:text-xl text-[#C5A880] font-light">3,567 FT</div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-[#9CB3CD] mt-0.5">Peak</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#00142C] border border-[#0D386E]">
                    <div className="font-serif text-lg sm:text-xl text-[#C5A880] font-light">55 M</div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-[#9CB3CD] mt-0.5">Spire</div>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#00142C] border border-[#0D386E]">
                    <div className="font-serif text-lg sm:text-xl text-[#C5A880] font-light">360°</div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-[#9CB3CD] mt-0.5">Panorama</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Item 2: 55 Steps to Limitless Horizons (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-9 rounded-3xl border border-[#DFD5C2] hover:border-[#004495] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl fs-card-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-13 h-13 rounded-2xl bg-[#F0F5FA] text-[#004495] flex items-center justify-center">
                  <Flag className="w-6 h-6 text-[#004495]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#004495] bg-[#F0F5FA] px-3 py-1 rounded-full border border-[#D0E2F4]">
                  55m Summit Spire
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#001C3D] mb-3 leading-snug">
                55 Steps to Limitless Horizons
              </h3>
              <p className="text-sm text-[#5A6D80] font-light leading-relaxed mb-6">
                Climb the tower’s spiral staircase, only 55 meters tall, and be rewarded with majestic views that soar far beyond.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F2ECE0] flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#004495]">Summit Climb</span>
              <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#DFD5C2] flex items-center justify-center text-[#004495]">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 2: 3 Bento Cards (Each 4 Cols) */}
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`${pillar.colSpan} bg-white p-7 sm:p-8 rounded-3xl border border-[#DFD5C2] hover:border-[#004495] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl fs-card-shadow flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F5FA] text-[#004495] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#C5A880] bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#E8DEC9]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#001C3D] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6D80] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#F2ECE0] flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-semibold text-[#004495]">
                  <span>Experience 0{idx + 2}</span>
                  <span className="w-8 h-[2px] bg-[#C5A880] rounded-full" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
