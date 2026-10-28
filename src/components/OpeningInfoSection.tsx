"use client";

import React from "react";
import Image from "next/image";
import { Navigation, Clock, Sun, Sunset, Ticket } from "lucide-react";

export default function OpeningInfoSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#FBF9F5] text-[#121820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-[#FFFFFF] rounded-[4px] border border-[#E4DCCB] fs-card-shadow p-6 sm:p-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Open 365 Days & Get Directions */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[12px] uppercase tracking-[0.25em] text-[#004495] font-semibold block">
                Ambuluwawa
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight">
                Open 365 Days a Year
              </h2>
              <p className="text-sm sm:text-base text-[#4D5E6E] font-light leading-relaxed">
                Your daily escape to nature is ready whenever you are! <br className="hidden sm:inline" />
                We welcome visitors 365 days a year. 🌿
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fs-btn inline-flex items-center space-x-2 px-6 py-3.5 bg-[#001C3D] hover:bg-[#004495] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[3px] shadow transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#C5A880]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right: Opening & Closing Time Widgets */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Opening Time Box */}
              <div className="p-6 rounded-[3px] bg-[#F4F8FC] border border-[#D5E4F3] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#637C98] font-semibold mb-1">
                    Opening Time
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#001C3D]">
                    07:30 AM
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#004495]">
                  <Sun className="w-6 h-6" />
                </div>
              </div>

              {/* Closing Time Box */}
              <div className="p-6 rounded-[3px] bg-[#F4F8FC] border border-[#D5E4F3] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#637C98] font-semibold mb-1">
                    Closing Time
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#001C3D]">
                    05:30 PM
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#004495]">
                  <Sunset className="w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Banner with BOOK NOW Button (Exact from ambuluwawa.com) */}
        <div className="rounded-[4px] overflow-hidden border border-[#E0D7C5] bg-[#001C3D] shadow-lg">
          <div className="relative h-64 sm:h-96 w-full">
            <Image
              src="https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg"
              alt="Ambuluwawa Peak Vista"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001229]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
                  Ambuluwawa Ticketing &amp; Cultural Shows
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light">
                  Reserve Your Journey to the Peak
                </h3>
              </div>

              <a
                href="https://ambuluwawa-online-ticketing.web.app/cultural-shows"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-btn w-full sm:w-auto px-8 py-3.5 bg-[#004495] hover:bg-[#002B5E] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-[3px] shadow-lg flex items-center justify-center space-x-2"
              >
                <Ticket className="w-4 h-4 text-[#C5A880]" />
                <span>BOOK NOW</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
