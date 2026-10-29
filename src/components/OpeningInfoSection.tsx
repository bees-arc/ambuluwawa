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
  Calendar,
  ArrowRight,
  ShieldCheck,
  Trees,
  Car
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

  const inclusions = [
    {
      icon: Ticket,
      title: "Digital Admission",
      desc: "Fast-track QR digital entry tickets for local & foreign visitors."
    },
    {
      icon: Car,
      title: "Summit Transport",
      desc: "Base gate parking & authorized safari tuk-tuks to the mountain summit."
    },
    {
      icon: Trees,
      title: "Bio Reserve Trails",
      desc: "Pristine nature paths, endemic flora, and pine tree viewing stations."
    },
    {
      icon: Compass,
      title: "360° Viewpoints",
      desc: "Observation terraces overlooking Pidurutalagala, Adam's Peak & Kandy."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B2545] text-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Divider Header (Exact Reference Style: "—— WHAT'S INCLUDED ——") */}
        <div className="flex items-center space-x-4 mb-12 sm:mb-14">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            WHAT&apos;S INCLUDED
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        {/* 4 Inclusions Glass Cards Row (Exact Reference Design Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {inclusions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] hover:border-[#BFD8F0]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#BFD8F0] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Attractions & Plan Your Visit (Concierge Bento Card in Dark Navy Glass) */}
        <div className="bg-[#00142C]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-12">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-white/10 gap-2">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#BFD8F0] font-bold">
              <Compass className="w-4 h-4 text-[#BFD8F0]" />
              <span>Explore Attractions &amp; Plan Your Visit</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-white/70">
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-[#BFD8F0]" />
                Open Today: 07:30 AM – 05:30 PM
              </span>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="hidden md:inline text-[#BFD8F0] font-medium">Open 365 Days a Year</span>
            </div>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Attraction */}
            <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#BFD8F0] transition-colors">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-semibold flex items-center mb-1">
                <Compass className="w-3.5 h-3.5 mr-1 text-[#BFD8F0]" />
                Experience / Attraction
              </span>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer py-1 [&>option]:bg-[#00142C] [&>option]:text-white"
              >
                {experiences.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#BFD8F0] transition-colors">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-semibold flex items-center mb-1">
                <Calendar className="w-3.5 h-3.5 mr-1 text-[#BFD8F0]" />
                Date of Visit
              </span>
              <input
                type="date"
                value={dateInputVal}
                onChange={(e) => setDateInputVal(e.target.value)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer py-1"
              />
            </div>

            {/* Pass Category */}
            <div className="flex flex-col p-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#BFD8F0] transition-colors">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/60 font-semibold flex items-center mb-1">
                <Ticket className="w-3.5 h-3.5 mr-1 text-[#BFD8F0]" />
                Pass Category
              </span>
              <select
                value={visitorType}
                onChange={(e) => setVisitorType(e.target.value)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer py-1 [&>option]:bg-[#00142C] [&>option]:text-white"
              >
                <option value="Local / Foreign Visitors">Local &amp; Foreign Visitors</option>
                <option value="Local Resident">Local Resident (Sri Lankan)</option>
                <option value="Foreign Tourist">International Traveler</option>
              </select>
            </div>

            {/* Button */}
            <div>
              <a
                href="https://prod-ambuluwawa-main-web.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white hover:bg-[#FAF7F0] text-[#102F57] text-xs uppercase tracking-[0.2em] font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center space-x-2 hover:scale-[1.02]"
              >
                <span>Book Ticket Online</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#004495]" />
              </a>
            </div>
          </div>
        </div>

        {/* Timings, Directions & Essential Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Card 1: 365 Days Welcome & Directions */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#BFD8F0] font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                  Open 365 Days a Year
                </span>
                <span className="flex items-center text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
                  Open Today
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight mb-4">
                Ambuluwawa Sanctuary <br />
                <span className="italic font-normal text-[#BFD8F0]">Your Daily Escape to Nature</span>
              </h3>

              <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                Your daily escape to nature is ready whenever you are! We welcome visitors 365 days a year. 🌿
              </p>
            </div>

            <div>
              <a
                href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all"
              >
                <Navigation className="w-4 h-4 text-[#BFD8F0]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 2: Operating Hours & Sunset/Sunrise */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Opening */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#BFD8F0] flex items-center justify-center mb-3">
                  <Sun className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
                  Opening Time
                </div>
                <div className="font-serif text-3xl text-white font-light">
                  07:30 AM
                </div>
              </div>
              <div className="text-[11px] text-white/60 mt-3 flex items-center">
                <Clock className="w-3 h-3 mr-1 text-[#BFD8F0]" />
                <span>Early morning cloud mist</span>
              </div>
            </div>

            {/* Closing */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#BFD8F0] flex items-center justify-center mb-3">
                  <Sunset className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
                  Closing Time
                </div>
                <div className="font-serif text-3xl text-white font-light">
                  05:30 PM
                </div>
              </div>
              <div className="text-[11px] text-white/60 mt-3 flex items-center">
                <Clock className="w-3 h-3 mr-1 text-[#BFD8F0]" />
                <span>Golden twilight descent</span>
              </div>
            </div>
          </div>

        </div>

        {/* Panoramic Ticketing Banner (Full Width, Curved rounded-3xl) */}
        <div className="rounded-3xl overflow-hidden border border-white/20 bg-[#102F57] shadow-2xl relative">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg"
              alt="Ambuluwawa Peak Vista"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-white text-center sm:text-left">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#BFD8F0] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold mb-2">
                  Ambuluwawa Online Ticketing &amp; Cultural Shows
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-white">
                  Reserve Your Journey to the Peak
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-light mt-1 max-w-xl">
                  Instant digital admission for local &amp; international travelers. Experience Sri Lanka&apos;s most breathtaking 360-degree summit.
                </p>
              </div>

              <a
                href="https://ambuluwawa-online-ticketing.web.app/cultural-shows"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#FAF7F0] text-[#102F57] text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-2xl flex items-center justify-center space-x-2.5 transition-all hover:scale-105 shrink-0"
              >
                <Ticket className="w-4 h-4 text-[#004495]" />
                <span>BOOK NOW</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
