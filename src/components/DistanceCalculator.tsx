"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navigation, Clock, MapPin, Car, ExternalLink, ArrowRight } from "lucide-react";

export default function DistanceCalculator() {
  const routes = [
    {
      origin: "Kandy",
      distance: "24.8 km",
      duration: "1 hr ride",
      desc: "A picturesque drive through lush green tea hills and historical central villages along the Kandy-Gampola highway.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-2.webp",
      badge: "Closest Major City",
    },
    {
      origin: "Pinnawala",
      distance: "39.3 km",
      duration: "1 hr 11 min ride",
      desc: "Perfect combo for a day excursion: witness the elephant sanctuary in the morning, followed by an afternoon summit climb.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-5-copy.webp",
      badge: "Wildlife & Heights",
    },
    {
      origin: "Nuwara Eliya",
      distance: "64.5 km",
      duration: "2 hr 18 min ride",
      desc: "Winding down from misty Little England through cascading waterfalls and rolling tea plantations into Gampola valley.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-5.webp",
      badge: "Highland Corridor",
    },
    {
      origin: "Colombo",
      distance: "120.8 km",
      duration: "3 hr 17 min ride",
      desc: "Direct expressway and scenic highway connection from the capital. Ideal for weekend getaways and early sunrise climbs.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-8.webp",
      badge: "From the Capital",
    },
    {
      origin: "Sigiriya",
      distance: "128.0 km",
      duration: "3 hr 30 min ride",
      desc: "Connect Sri Lanka’s ancient 5th-century rock fortress with modern sacred mountain architecture in one royal heritage journey.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-7.webp",
      badge: "Cultural Triangle Link",
    },
    {
      origin: "Ella",
      distance: "160.9 km",
      duration: "4 hr 42 min ride",
      desc: "A memorable highland traverse from the southern mountain haven across misty passes to the sacred pinnacle of Ambuluwawa.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/aaa.webp",
      badge: "Epic Hill Country Route",
    },
  ];

  const [activeRoute, setActiveRoute] = useState(routes[0]);

  return (
    <section id="routes" className="py-20 sm:py-28 bg-[#FBF9F5] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
            All Roads Lead to Ambuluwawa
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#162F21] leading-tight mb-5">
            Beyond the Horizon, <br />
            <span className="italic font-normal text-[#C5A880]">Closer Than Expected</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#5D6B63] text-sm sm:text-base font-light leading-relaxed">
            Wherever you find yourself in Sri Lanka, the majestic peak of Ambuluwawa 
            beckons within a scenic few hours&apos; drive across the central landscapes.
          </p>
        </div>

        {/* Interactive Route Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Route Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#7A8A80] font-semibold px-2 mb-1 flex items-center justify-between">
              <span>Select Your Departure Point</span>
              <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
            </div>

            {routes.map((route) => {
              const isSelected = activeRoute.origin === route.origin;
              return (
                <button
                  key={route.origin}
                  onClick={() => setActiveRoute(route)}
                  className={`p-4 rounded-[3px] border text-left transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#162F21] text-[#FAF7F0] border-[#162F21] shadow-md -translate-r-1"
                      : "bg-[#FFFFFF] text-[#222B25] border-[#E5DDCF] hover:border-[#C5A880] hover:bg-[#F8F4EC]"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`w-9 h-9 rounded-[2px] flex items-center justify-center transition-colors ${
                      isSelected ? "bg-[#C5A880] text-[#122319]" : "bg-[#F3EDE2] text-[#162F21] group-hover:bg-[#C5A880]/20"
                    }`}>
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-normal leading-snug">
                        From {route.origin}
                      </div>
                      <div className={`text-xs ${isSelected ? "text-[#C5A880]" : "text-[#7B8B82]"}`}>
                        {route.badge}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-xs font-semibold ${isSelected ? "text-white" : "text-[#162F21]"}`}>
                      {route.distance}
                    </div>
                    <div className={`text-[11px] ${isSelected ? "text-[#D2C8B8]" : "text-[#85948C]"}`}>
                      {route.duration}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Route Showcase (Four Seasons Editorial Card) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[4px] border border-[#E7DFD0] overflow-hidden fs-card-shadow flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#122319]">
              <Image
                src={activeRoute.img}
                alt={`Route from ${activeRoute.origin} to Ambuluwawa`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#162F21]/80 backdrop-blur-md border border-white/20 text-[#FAF7F0] text-[10px] uppercase tracking-[0.2em] rounded-[2px]">
                  Scenic Roadway
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-1">
                  Origin Departure
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                  From {activeRoute.origin} to Ambuluwawa
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6 mb-6 border-b border-[#F0E8DC]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#788880] block mb-1">
                      Total Distance
                    </span>
                    <span className="font-serif text-2xl font-light text-[#162F21]">
                      {activeRoute.distance}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#788880] block mb-1">
                      Estimated Drive
                    </span>
                    <span className="font-serif text-2xl font-light text-[#162F21] flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-[#C5A880]" />
                      {activeRoute.duration}
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#788880] block mb-1">
                      Elevation Gain
                    </span>
                    <span className="font-serif text-2xl font-light text-[#A08055]">
                      +3,567 FT
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#5B6B62] font-light leading-relaxed mb-6">
                  {activeRoute.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#7B8B82] flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                  <span>Destination: Ambuluwawa Bio Diversity Complex, Gampola</span>
                </div>

                <a
                  href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fs-btn w-full sm:w-auto px-5 py-2.5 bg-[#162F21] hover:bg-[#234834] text-[#FAF7F0] text-xs uppercase tracking-[0.16em] font-semibold rounded-[3px] shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
