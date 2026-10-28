"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Navigation, 
  Clock, 
  Sun, 
  Sunset, 
  Ticket, 
  Compass, 
  Mountain, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function OpeningInfoSection() {
  const [selectedExperience, setSelectedExperience] = useState("Spiral Tower Climb (55m)");
  const [dateInputVal, setDateInputVal] = useState("2026-10-28");
  const [visitorType, setVisitorType] = useState("Local / Foreign Visitors");

  useEffect(() => {
    const today = new Date();
    setDateInputVal(today.toISOString().split("T")[0]);
  }, []);

  const experiences = [
    "Spiral Tower Climb (55m)",
    "Biodiversity Nature Sanctuary",
    "Java Lounge Mountain Coffee",
    "Pinewood Restaurant Dining",
    "Adventure Park & Expeditions"
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F5] text-[#121820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#004495]/10 text-[#004495] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Essential Visitor Information</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight">
            Plan Your Journey <br />
            <span className="italic font-normal text-[#004495]">To The Peak</span>
          </h2>
        </div>

        {/* PROMINENT BENTO CARD 1: Explore Attractions & Plan Your Visit (Moved from Hero) */}
        <div className="bg-white rounded-3xl border border-[#DFD5C2] shadow-2xl p-6 sm:p-8 text-[#121820] mb-8">
          {/* Widget Header row */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-[#E8DFC9] gap-2">
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#004495] font-bold">
              <Compass className="w-4 h-4 text-[#004495]" />
              <span>Explore Attractions &amp; Plan Your Visit</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-[#4A5E73]">
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#004495]" />
                Open Today: 07:30 AM – 05:30 PM
              </span>
              <span className="hidden md:inline text-[#D0C4AF]">|</span>
              <span className="hidden md:inline text-[#004495] font-semibold">Open 365 Days a Year</span>
            </div>
          </div>

          {/* Bento Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Select 1: Experience */}
            <div className="flex flex-col p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E0D7C5] hover:border-[#004495] transition-all shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#6A7B8C] font-semibold flex items-center mb-1">
                <Compass className="w-3.5 h-3.5 mr-1 text-[#004495]" />
                Experience / Attraction
              </span>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#001C3D] focus:outline-none cursor-pointer py-1"
              >
                {experiences.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                ))}
              </select>
            </div>

            {/* Select 2: Date */}
            <div className="flex flex-col p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E0D7C5] hover:border-[#004495] transition-all shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#6A7B8C] font-semibold flex items-center mb-1">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#004495]" />
                Date of Visit
              </span>
              <input
                type="date"
                value={dateInputVal}
                onChange={(e) => setDateInputVal(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#001C3D] focus:outline-none cursor-pointer py-1"
              />
            </div>

            {/* Select 3: Visitors */}
            <div className="flex flex-col p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E0D7C5] hover:border-[#004495] transition-all shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#6A7B8C] font-semibold flex items-center mb-1">
                <Ticket className="w-3.5 h-3.5 mr-1 text-[#004495]" />
                Pass Category
              </span>
              <select
                value={visitorType}
                onChange={(e) => setVisitorType(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#001C3D] focus:outline-none cursor-pointer py-1"
              >
                <option value="Local / Foreign Visitors">Local &amp; Foreign Visitors</option>
                <option value="Local Resident">Local Resident (Sri Lankan)</option>
                <option value="Foreign Tourist">International Traveler</option>
              </select>
            </div>

            {/* Action Button: Directly routes to Ticket Booking Portal */}
            <div>
              <a
                href="https://prod-ambuluwawa-main-web.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-btn w-full py-4 bg-[#001C3D] hover:bg-[#004495] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2 border border-[#0A3366]"
              >
                <span>Book Ticket Online</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Bento Card 2: 365 Days Welcome & Directions (Large Card: 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFD5C2] p-8 sm:p-10 shadow-xl flex flex-col justify-between transition-all hover:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#004495] font-bold bg-[#F0F5FA] px-3 py-1 rounded-full">
                  Open 365 Days a Year
                </span>
                <span className="flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                  Open Today
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#001C3D] leading-tight mb-4">
                Ambuluwawa Sanctuary <br />
                <span className="italic font-normal text-[#004495]">Your Daily Escape to Nature</span>
              </h3>

              <p className="text-sm sm:text-base text-[#4E6072] font-light leading-relaxed mb-6">
                Your daily escape to nature is ready whenever you are! We welcome visitors 365 days a year. 🌿
              </p>

              {/* Quick Perks in Rounded Pills */}
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                <div className="flex items-center space-x-2 text-xs text-[#2A3E54] bg-[#F7F9FC] p-2.5 rounded-xl border border-[#E3EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#004495] shrink-0" />
                  <span className="font-medium">3,567 FT Summit Peak</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#2A3E54] bg-[#F7F9FC] p-2.5 rounded-xl border border-[#E3EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#004495] shrink-0" />
                  <span className="font-medium">55m Spiral Tower</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#2A3E54] bg-[#F7F9FC] p-2.5 rounded-xl border border-[#E3EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#004495] shrink-0" />
                  <span className="font-medium">Multi-Faith Sanctuaries</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#2A3E54] bg-[#F7F9FC] p-2.5 rounded-xl border border-[#E3EDF7]">
                  <CheckCircle2 className="w-4 h-4 text-[#004495] shrink-0" />
                  <span className="font-medium">Bio Reserve Trails</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-btn inline-flex items-center space-x-2.5 px-7 py-4 bg-[#001C3D] hover:bg-[#004495] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Bento Card 3: Hours & Visitor Guide (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Opening and Closing Bento Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Opening Time Box */}
              <div className="p-6 rounded-3xl bg-[#F0F5FA] border border-[#D0E2F4] flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#557191] font-bold mb-1">
                    Opening Time
                  </div>
                  <div className="font-serif text-3xl font-light text-[#001C3D]">
                    07:30 AM
                  </div>
                  <div className="text-[11px] text-[#69829E] mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-[#004495]" />
                    <span>Early morning mist</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#004495]">
                  <Sun className="w-6 h-6" />
                </div>
              </div>

              {/* Closing Time Box */}
              <div className="p-6 rounded-3xl bg-[#F0F5FA] border border-[#D0E2F4] flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#557191] font-bold mb-1">
                    Closing Time
                  </div>
                  <div className="font-serif text-3xl font-light text-[#001C3D]">
                    05:30 PM
                  </div>
                  <div className="text-[11px] text-[#69829E] mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-[#004495]" />
                    <span>Golden sunset glow</span>
                  </div>
                </div>
                <div className="w-13 h-13 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#004495]">
                  <Sunset className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Traveler Guidelines Bento Pod */}
            <div className="p-6 rounded-3xl bg-white border border-[#DFD5C2] shadow-sm flex flex-col justify-between flex-grow">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#004495] font-bold mb-3">
                <Mountain className="w-4 h-4 text-[#C5A880]" />
                <span>Highland Traveler Tips</span>
              </div>
              <div className="space-y-3 text-xs text-[#4F6275] leading-relaxed">
                <div className="flex items-start space-x-2">
                  <span className="text-[#C5A880] font-bold mt-0.5">•</span>
                  <span><strong>Optimal Hours:</strong> 07:30 – 10:00 AM (sea-of-clouds) &amp; 16:00 – 17:30 PM (twilight).</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-[#C5A880] font-bold mt-0.5">•</span>
                  <span><strong>Footwear:</strong> Non-slip sports or hiking shoes for the narrow spiral tower.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-[#C5A880] font-bold mt-0.5">•</span>
                  <span><strong>Sanctuary Transport:</strong> Mountain shuttle Tuk-Tuks available at base entrance.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bento Card 4: Panoramic Ticketing Banner (Full Width, Curved rounded-3xl) */}
        <div className="rounded-3xl overflow-hidden border border-[#D5C9B3] bg-[#001C3D] shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg"
              alt="Ambuluwawa Peak Vista"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001229]/50 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-white text-center sm:text-left">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#001C3D]/80 backdrop-blur-md border border-[#C5A880]/40 text-[#C5A880] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold mb-2">
                  <Sparkles className="w-3 h-3 text-[#C5A880]" />
                  <span>Ambuluwawa Online Ticketing &amp; Cultural Shows</span>
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-white">
                  Reserve Your Journey to the Peak
                </h3>
                <p className="text-xs sm:text-sm text-[#D3E0ED] font-light mt-1 max-w-xl">
                  Instant digital admission for local &amp; international travelers. Experience Sri Lanka&apos;s most breathtaking 360-degree summit.
                </p>
              </div>

              <a
                href="https://ambuluwawa-online-ticketing.web.app/cultural-shows"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-btn w-full sm:w-auto px-8 py-4 bg-[#004495] hover:bg-[#002B5E] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-2xl flex items-center justify-center space-x-2.5 border border-[#0055BA] whitespace-nowrap"
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
