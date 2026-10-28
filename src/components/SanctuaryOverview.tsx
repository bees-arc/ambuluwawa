"use client";

import React from "react";
import Image from "next/image";
import { 
  Footprints, 
  Eye, 
  TrendingUp, 
  Trees, 
  Landmark, 
  ArrowUpRight 
} from "lucide-react";

export default function SanctuaryOverview() {
  const pillars = [
    {
      icon: Footprints,
      step: "01",
      title: "55 Metres of Limitless Horizons",
      desc: "Ascend the iconic spiral staircase winding 55 meters above the summit, where every step brings you closer to the open skies.",
    },
    {
      icon: Eye,
      step: "02",
      title: "A 360-Degree Mountain Embrace",
      desc: "Witness the central highland panorama unfold — gazing across Adam's Peak, the Knuckles Mountain Range, and Pidurutalagala.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Narrow Path, Grand Reward",
      desc: "As the spire tapers towards the pinnacle, the winding route challenges your courage while delivering an unmatched spiritual thrill.",
    },
    {
      icon: Trees,
      step: "04",
      title: "Sri Lanka's Living Bio-Reserve",
      desc: "A sanctuary spanning sacred groves, endemic botanical species, medicinal plants, natural water streams, and tranquil pine forests.",
    },
  ];

  return (
    <section id="sanctuary" className="py-20 sm:py-28 bg-[#FBF9F5] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Editorial Header (Four Seasons Refinement) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
            The Multi-Religious Biodiversity Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-5xl font-light text-[#162F21] leading-[1.2] mb-6">
            Leave the World Below, <br />
            <span className="italic font-normal">Embrace the World Above</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#55635B] text-base sm:text-lg font-light leading-relaxed">
            Climb the Ambuluwawa Tower and discover a realm where mountains embrace the clouds, 
            and horizons stretch beyond imagination in complete spiritual harmony.
          </p>
        </div>

        {/* 4 Pillars Grid (Elevated Four Seasons Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-[#FFFFFF] p-8 rounded-[4px] border border-[#E7DFD0] hover:border-[#C5A880] transition-all duration-500 hover:-translate-y-1 fs-card-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[3px] bg-[#F4EFE6] group-hover:bg-[#162F21] text-[#162F21] group-hover:text-[#C5A880] transition-colors duration-300 flex items-center justify-center">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-serif text-2xl font-light text-[#C5A880]/60 group-hover:text-[#C5A880] transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#162F21] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66756C] font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE0] flex items-center text-[11px] uppercase tracking-[0.16em] font-medium text-[#A08055] group-hover:text-[#162F21] transition-colors">
                  <span>Explore Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Highlight: "Did You Know Ambuluwawa is the Name of the Mountain?" */}
        <div className="bg-[#122319] text-[#FAF7F0] rounded-[4px] overflow-hidden border border-[#2B4736] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <Image
                src="https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1-1024x1024.webp"
                alt="Ambuluwawa Tower in Misty Mountain Sunlight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#122319]/20 to-[#122319]" />
            </div>

            {/* Narrative Editorial Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-4 font-semibold">
                <Landmark className="w-3.5 h-3.5" />
                <span>Heritage &amp; Natural Wonder</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
                &ldquo;Ambuluwawa&rdquo; is the Name of the Mountain Itself
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#D4CBBF] font-light leading-relaxed">
                <p>
                  Rising proudly at <strong className="text-[#F3ECDD] font-medium">3,567 feet</strong> above sea level in the historical hill capital region of Gampola, Ambuluwawa embodies more than an architectural spire — it is a revered natural ecosystem.
                </p>
                <p>
                  Perched atop this majestic summit, the Ambuluwawa Spiral Tower provides a 360-degree vista from the mountain’s apex. It stands as an architectural wonder celebrating multi-faith unity, with a Buddhist Stupa, Hindu Kovil, Islamic Mosque, and Christian Chapel coexisting harmoniously in one sanctuary.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#233B2C] grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">3,567</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#93A59A] mt-1">Feet Elevation</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">55 M</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#93A59A] mt-1">Tower Height</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#C5A880] font-light">4 Faiths</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#93A59A] mt-1">United in Harmony</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
