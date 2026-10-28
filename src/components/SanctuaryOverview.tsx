"use client";

import React from "react";
import Image from "next/image";
import { 
  Flag, 
  Eye, 
  Footprints, 
  Sun, 
  Landmark, 
  Mountain 
} from "lucide-react";

export default function SanctuaryOverview() {
  const pillars = [
    {
      icon: Flag,
      title: "55 Steps to Limitless Horizons",
      desc: "Climb the tower’s spiral staircase, only 55 meters tall, and be rewarded with majestic views that soar far beyond.",
    },
    {
      icon: Eye,
      title: "A 360-degree Embrace",
      desc: "Feel the wind through your hair, take in the mountain air, and witness the breathtaking panorama of Sri Lanka unfold before you.",
    },
    {
      icon: Footprints,
      title: "Narrow Path, Grand Reward",
      desc: "The path may narrow, and the steps may challenge, but each twist and turn leaves you breathless with grandeur.",
    },
    {
      icon: Sun,
      title: "Nature's Stairway to Sri Lanka",
      desc: "Sri Lanka's essence resides in the winding paths, not at the peak. Embrace the climb, and connect with the island's true spirit.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com in Four Seasons Serif) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-[1.2] mb-5">
            Leave the World Below <br />
            <span className="italic font-normal text-[#004495]">Embrace the World Above</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#4E5F70] text-base sm:text-lg font-light leading-relaxed">
            Climb the Ambuluwawa Tower and discover a world where mountains meet clouds 
            and horizons stretch beyond imagination.
          </p>
        </div>

        {/* 4 Feature Cards (Dark Navy Accents & Four Seasons Craftsmanship) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-[#FFFFFF] p-8 rounded-[4px] border border-[#E3D9C7] hover:border-[#004495] transition-all duration-500 hover:-translate-y-1 fs-card-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[3px] bg-[#F2F7FC] text-[#004495] group-hover:bg-[#001C3D] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#001C3D] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6D80] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE0] flex items-center justify-between text-[11px] uppercase tracking-[0.18em] font-semibold text-[#004495]">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="w-5 h-[1.5px] bg-[#C5A880]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Did You Know That: "Ambuluwawa" is the Name of the Mountain? */}
        <div className="bg-[#001C3D] text-[#FAF7F0] rounded-[4px] overflow-hidden border border-[#002D62] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[350px]">
              <Image
                src="https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1-1024x1024.webp"
                alt="Ambuluwawa Mountain Summit and Tower"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#001C3D]/30 to-[#001C3D]" />
            </div>

            {/* Exact Content from ambuluwawa.com */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
                Did You Know That
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
                &ldquo;Ambuluwawa&rdquo; is the Name of the Mountain?
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#D4E0ED] font-light leading-relaxed">
                <p>
                  Exploring its essence, Ambuluwawa unfolds as more than just the tower&apos;s name; it embodies the towering mountain, rising proudly at <strong className="text-white font-medium">3,567 feet</strong>.
                </p>
                <p>
                  Perched atop this majestic mountain lies the Ambuluwawa Tower, offering a panoramic view from the highest point of Ambuluwawa Mountain.
                </p>
                <p>
                  It&apos;s a harmonious blend where human craftsmanship meets the awe-inspiring beauty of nature.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#0F3563] grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded bg-[#00152E]/60 border border-white/5">
                  <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">3,567 FT</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#9CB3CD] mt-1">Mountain Peak</div>
                </div>
                <div className="p-3 rounded bg-[#00152E]/60 border border-white/5">
                  <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">55 M</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#9CB3CD] mt-1">Spiral Tower</div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded bg-[#00152E]/60 border border-white/5">
                  <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">360°</div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#9CB3CD] mt-1">Panoramic Vista</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
