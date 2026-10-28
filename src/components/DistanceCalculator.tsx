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
    <section className="py-20 sm:py-28 bg-[#FBF9F5] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#004495]/10 text-[#004495] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Travel &amp; Route Guide</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight mb-5">
            Beyond the Horizon <br />
            <span className="italic font-normal text-[#004495]">Closer Than Expected</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mb-6 rounded-full" />
          <p className="text-[#516375] text-sm sm:text-base font-light leading-relaxed">
            No matter where you find yourself in Sri Lanka, the allure of Ambuluwawa 
            awaits within a few hours&apos; drive.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 mb-10">
          {routes.map((route) => (
            <div
              key={route.origin}
              className={`${route.colSpan} group bg-white rounded-3xl overflow-hidden border border-[#DFD5C2] fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#004495]`}
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#001C3D]">
                <Image
                  src={route.img}
                  alt={`From ${route.origin} to Ambuluwawa`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/85 via-transparent to-transparent opacity-65 group-hover:opacity-75 transition-opacity" />
                
                {/* Curved Route Tag */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#001C3D]/85 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.16em] font-semibold shadow-md">
                  {route.tag}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#6E8094] font-bold mb-1">
                    From {route.origin}
                  </div>
                  <div className="font-serif text-2xl font-light text-[#001C3D] flex items-baseline justify-between mb-3">
                    <span className="text-[#004495] font-normal">{route.distance}</span>
                    <span className="text-xs text-[#5B6D7E] font-sans flex items-center bg-[#F4F8FC] px-2.5 py-1 rounded-full border border-[#D5E4F3]">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#004495]" />
                      {route.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#5E7184] font-light leading-relaxed">
                    {route.tip}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F0E8DC] flex items-center justify-between text-xs">
                  <span className="text-[#6C8094] flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                    To Ambuluwawa Peak
                  </span>
                  <a
                    href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004495] hover:text-[#001C3D] font-semibold flex items-center space-x-1 bg-[#F0F5FA] hover:bg-[#E3EDF7] px-3 py-1 rounded-full transition-colors"
                  >
                    <span>Directions</span>
                    <Navigation className="w-3 h-3 text-[#C5A880]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Train & Transit Bento Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#001C3D] text-white border border-[#0A3366] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00142C] border border-[#0D386E] flex items-center justify-center shrink-0 text-[#C5A880]">
              <Train className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-1">
                Scenic Rail Option
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-light">
                Gampola Railway Station (3.5 km away)
              </h4>
              <p className="text-xs text-[#D0DEF0] font-light mt-0.5">
                Take the iconic Main Line scenic hill country train to Gampola. Station-front authorized Tuk-Tuks take 15 minutes to the sanctuary gate.
              </p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-btn shrink-0 px-6 py-3.5 rounded-full bg-[#004495] hover:bg-[#002D62] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all border border-[#0055BA] flex items-center space-x-2"
          >
            <Compass className="w-4 h-4 text-[#C5A880]" />
            <span>Open Navigation Map</span>
          </a>
        </div>

      </div>
    </section>
  );
}
