"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Play, 
  X, 
  Calendar, 
  Users, 
  Compass, 
  ArrowRight, 
  Clock, 
  Mountain,
  Ticket
} from "lucide-react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("Spiral Tower Climb");
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
    <>
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden">
        {/* Full-bleed Luxury Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg"
            alt="Ambuluwawa Mountain Peak and Spiral Tower"
            fill
            priority
            quality={95}
            className="object-cover object-center scale-[1.02] transition-transform duration-[12000ms] ease-out hover:scale-100"
          />
          {/* Refined Luxury Four Seasons Overlay: Dark Navy Blue Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001C3D]/50 to-[#001229]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#001229]/40 to-[#001229]/85" />
        </div>

        {/* Ambient Top Spacing */}
        <div className="w-full"></div>

        {/* Hero Narrative Core */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-8 sm:py-12">
          {/* Refined Kicker Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-[2px] bg-[#001C3D]/80 backdrop-blur-md border border-[#C5A880]/40 text-[#E8EDF5] text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium mb-6 sm:mb-8">
            <Mountain className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Sri Lanka&apos;s Crown Pinnacle • 3,567 FT Elevation</span>
          </div>

          {/* Exact Headline from ambuluwawa.com in Four Seasons Serif */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-light text-white leading-[1.12] sm:leading-[1.08] tracking-[-0.015em] mb-5 sm:mb-6 drop-shadow-md">
            Where Vistas Inspire <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E2EAF4]">&amp; Stories Ignite</span>
          </h1>

          {/* Exact Subtitle from ambuluwawa.com */}
          <p className="max-w-2xl mx-auto text-[#D5E1EE] text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide mb-8 sm:mb-10 text-balance opacity-95">
            Beyond the view, beyond the climb, lies a story waiting to be told.
          </p>

          {/* Action Buttons: Book Ticket & Watch Film */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://prod-ambuluwawa-main-web.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-btn w-full sm:w-auto px-8 py-4 bg-[#004495] hover:bg-[#002D62] text-white text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold rounded-[3px] shadow-lg transition-all flex items-center justify-center space-x-2.5"
            >
              <Ticket className="w-4 h-4 text-[#C5A880]" />
              <span>Book My Ticket To Ambuluwawa</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-7 py-4 rounded-[3px] bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs sm:text-[13px] uppercase tracking-[0.18em] font-medium border border-white/25 transition-all flex items-center justify-center space-x-2.5 group"
            >
              <div className="w-6 h-6 rounded-full bg-[#C5A880] flex items-center justify-center text-[#001C3D] group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Floating Four Seasons Experience & Booking Concierge Widget (Dark Navy Theme) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
          <div className="bg-[#FAF7F0]/95 backdrop-blur-xl border border-[#D9CEBA]/80 rounded-[4px] shadow-2xl p-4 sm:p-5 text-[#121820]">
            {/* Widget Header row */}
            <div className="flex flex-wrap items-center justify-between pb-3.5 mb-3.5 border-b border-[#E8DFC9] gap-2">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.16em] text-[#004495] font-semibold">
                <Compass className="w-3.5 h-3.5 text-[#004495]" />
                <span>Find an Experience at Ambuluwawa</span>
              </div>
              <div className="flex items-center space-x-4 text-[11px] text-[#4A5E73]">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-[#004495]" />
                  Open Today: 07:30 AM – 05:30 PM
                </span>
                <span className="hidden md:inline text-[#D0C4AF]">|</span>
                <span className="hidden md:inline text-[#004495] font-medium">Open 365 Days a Year</span>
              </div>
            </div>

            {/* Selection Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
              {/* Select 1: Experience */}
              <div className="flex flex-col p-2.5 rounded-[3px] bg-white border border-[#E0D7C5] hover:border-[#004495] transition-colors">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#6A7B8C] font-medium flex items-center mb-1">
                  <Compass className="w-3 h-3 mr-1 text-[#004495]" />
                  Experience
                </span>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#001C3D] focus:outline-none cursor-pointer"
                >
                  {experiences.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select 2: Date */}
              <div className="flex flex-col p-2.5 rounded-[3px] bg-white border border-[#E0D7C5] hover:border-[#004495] transition-colors">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#6A7B8C] font-medium flex items-center mb-1">
                  <Calendar className="w-3 h-3 mr-1 text-[#004495]" />
                  Date of Visit
                </span>
                <input
                  type="date"
                  value={dateInputVal}
                  onChange={(e) => setDateInputVal(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#001C3D] focus:outline-none cursor-pointer"
                />
              </div>

              {/* Select 3: Visitors */}
              <div className="flex flex-col p-2.5 rounded-[3px] bg-white border border-[#E0D7C5] hover:border-[#004495] transition-colors">
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#6A7B8C] font-medium flex items-center mb-1">
                  <Users className="w-3 h-3 mr-1 text-[#004495]" />
                  Ticket Category
                </span>
                <select
                  value={visitorType}
                  onChange={(e) => setVisitorType(e.target.value)}
                  className="bg-transparent text-xs font-semibold text-[#001C3D] focus:outline-none cursor-pointer"
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
                  className="fs-btn w-full py-3.5 bg-[#001C3D] hover:bg-[#004495] text-white text-[11px] uppercase tracking-[0.18em] font-semibold rounded-[3px] shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book Ticket Online</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal (YouTube Player for https://youtu.be/XDMWG0VO3sg) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-[4px] overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center justify-between p-4 bg-[#001229] text-white border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Mountain className="w-4 h-4 text-[#C5A880]" />
                <span className="font-serif text-lg tracking-wide">Ambuluwawa Peak Video</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/XDMWG0VO3sg?autoplay=1&rel=0"
                title="Ambuluwawa Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
