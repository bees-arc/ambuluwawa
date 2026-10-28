"use client";

import React from "react";
import Image from "next/image";
import { Clock, Navigation, MapPin, Car, Train, Compass } from "lucide-react";

export default function DistanceCalculator() {
  const routes = [
    {
      origin: "Kandy",
      distance: "24.8 km",
      duration: "1hr ride",
      tag: "Quickest Scenic Route",
      tip: "Take the Kandy-Gampola highway. Tuk-tuk or taxi takes approx. 45-60 mins.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-2.webp",
      colSpan: "lg:col-span-6",
    },
    {
      origin: "Colombo",
      distance: "120.8 km",
      duration: "3hr 17min ride",
      tag: "Capital City Gateway",
      tip: "Travel via the Central Expressway or scenic A1 road directly into Gampola town.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-8.webp",
      colSpan: "lg:col-span-6",
    },
    {
      origin: "Pinnawala",
      distance: "39.3 km",
      duration: "1hr 11min ride",
      tag: "Wildlife & Mountain Combo",
      tip: "Pair morning elephant bathing at Pinnawala with an afternoon Ambuluwawa climb.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-5-copy.webp",
      colSpan: "lg:col-span-3",
    },
    {
      origin: "Nuwara Eliya",
      distance: "64.5 km",
      duration: "2hr 18min ride",
      tag: "Tea Country Corridor",
      tip: "Descend from Little England past cascading waterfalls and tea valleys into Gampola.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-5.webp",
      colSpan: "lg:col-span-3",
    },
    {
      origin: "Sigiriya",
      distance: "128 km",
      duration: "3hr 30min ride",
      tag: "Cultural Triangle Route",
      tip: "Connect Sri Lanka’s 5th-century rock fortress with the modern sacred spiral peak.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-7.webp",
      colSpan: "lg:col-span-3",
    },
    {
      origin: "Ella",
      distance: "160.9 km",
      duration: "4hr 42min ride",
      tag: "Epic Highland Traverse",
      tip: "Travel by scenic hill country railway to Gampola station or private highway taxi.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/aaa.webp",
      colSpan: "lg:col-span-3",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#000D20] text-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Divider Header (Exact Reference Style) */}
        <div className="flex items-center space-x-4 mb-14 sm:mb-16">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            TRAVEL ROUTES &amp; DISTANCES
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        {/* Narrative Intro */}
        <div className="max-w-2xl mb-12">
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight mb-3">
            Beyond the Horizon <br />
            <span className="italic font-normal text-[#C5A880]">Closer Than Expected</span>
          </h3>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            No matter where you find yourself in Sri Lanka, the allure of Ambuluwawa awaits within a few hours&apos; drive.
          </p>
        </div>

        {/* 6 Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 mb-10">
          {routes.map((route) => (
            <div
              key={route.origin}
              className={`${route.colSpan} group bg-white/[0.04] rounded-3xl overflow-hidden border border-white/15 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C5A880]/60 hover:bg-white/[0.07]`}
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#001229]">
                <Image
                  src={route.img}
                  alt={`From ${route.origin} to Ambuluwawa`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000D20] via-transparent to-transparent opacity-85" />
                
                {/* Curved Route Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#000D20]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.16em] font-semibold border border-white/15">
                  {route.tag}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-1">
                    From {route.origin}
                  </div>
                  <div className="font-serif text-2xl font-light text-white flex items-baseline justify-between mb-3">
                    <span className="text-white font-normal">{route.distance}</span>
                    <span className="text-xs text-white/80 font-sans flex items-center bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                      {route.duration}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {route.tip}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/60 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                    To Ambuluwawa Peak
                  </span>
                  <a
                    href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A880] hover:text-white font-semibold flex items-center space-x-1.5 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition-colors border border-white/15"
                  >
                    <span>Directions</span>
                    <Navigation className="w-3 h-3 text-[#C5A880]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Train & Transit Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] text-white border border-white/15 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#C5A880]">
              <Train className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-1">
                Scenic Rail Option
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-light">
                Gampola Railway Station (3.5 km away)
              </h4>
              <p className="text-xs text-white/70 font-light mt-0.5">
                Take the iconic Main Line scenic hill country train to Gampola. Station-front authorized Tuk-Tuks take 15 minutes to the sanctuary gate.
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF7F0] text-[#001229] text-xs uppercase tracking-[0.18em] font-bold transition-all flex items-center space-x-2 shadow-lg hover:scale-105"
          >
            <Compass className="w-4 h-4 text-[#004495]" />
            <span>Open Navigation Map</span>
          </a>
        </div>

      </div>
    </section>
  );
}
