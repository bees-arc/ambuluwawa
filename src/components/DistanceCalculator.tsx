"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, Navigation } from "lucide-react";

export default function DistanceCalculator() {
  const routes = [
    {
      origin: "Colombo",
      distance: "120.8 km",
      duration: "3hr 17min ride",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-8.webp",
    },
    {
      origin: "Kandy",
      distance: "24.8 km",
      duration: "1hr ride",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-2.webp",
    },
    {
      origin: "Sigiriya",
      distance: "128 km",
      duration: "3hr 30min ride",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-7.webp",
    },
    {
      origin: "Ella",
      distance: "160.9 km",
      duration: "4hr 42min ride",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/aaa.webp",
    },
    {
      origin: "Pinnawala",
      distance: "39.3 km",
      duration: "1hr 11min ride",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-5-copy.webp",
    },
    {
      origin: "Nuwara Eliya",
      distance: "64.5 km",
      duration: "2hr 18min ride",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Artboard-5.webp",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#004495] font-semibold block mb-3">
            All roads lead to Ambuluwawa
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight mb-5">
            Beyond the Horizon <br />
            <span className="italic font-normal text-[#004495]">Closer Than Expected</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#516375] text-sm sm:text-base font-light leading-relaxed">
            No matter where you find yourself in Sri Lanka, the allure of Ambuluwawa 
            awaits within a few hours&apos; drive.
          </p>
        </div>

        {/* 6 Routes Grid (Exact from ambuluwawa.com) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {routes.map((route) => (
            <div
              key={route.origin}
              className="group bg-[#FFFFFF] rounded-[4px] overflow-hidden border border-[#E0D7C5] fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#001C3D]">
                <Image
                  src={route.img}
                  alt={`From ${route.origin} to Ambuluwawa`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/80 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
              </div>

              <div className="p-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#6E8094] font-semibold mb-1">
                  From {route.origin}
                </div>
                <div className="font-serif text-2xl font-light text-[#001C3D] flex items-baseline justify-between">
                  <span className="text-[#004495] font-normal">{route.distance}</span>
                  <span className="text-sm text-[#5B6D7E] font-sans flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                    {route.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direction CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-btn inline-flex items-center space-x-2 px-8 py-3.5 bg-[#001C3D] hover:bg-[#004495] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[3px] shadow transition-all"
          >
            <Navigation className="w-4 h-4 text-[#C5A880]" />
            <span>Open Directions on Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
}
