"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  X, 
  ArrowRight, 
  Mountain,
  Ticket,
  Compass,
  Coffee,
  Trees,
  Footprints
} from "lucide-react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // 5 Feature preview cards matching the reference image's floating card row
  const previewHighlights = [
    {
      title: "3,567 FT",
      subtitle: "Summit Peak",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1-1024x1024.webp",
      icon: Mountain
    },
    {
      title: "55 Meters",
      subtitle: "Spiral Tower",
      img: "https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg",
      icon: Footprints
    },
    {
      title: "Java Lounge",
      subtitle: "Mountain Coffee",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/a2.webp",
      icon: Coffee
    },
    {
      title: "Bio Reserve",
      subtitle: "Nature Sanctuary",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg",
      icon: Trees
    },
    {
      title: "360Â° Vistas",
      subtitle: "Highland Vibe",
      img: "https://ambuluwawa.com/wp-content/uploads/elementor/thumbs/22-scaled-qpsaj84a44qt7mewtfhr8t6ogo4ut3m7j2fjn5hk8o.webp",
      icon: Compass
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-16 overflow-hidden">
        {/* Full-bleed Scenic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ambuluwawa-hero.jpg"
            alt="Ambuluwawa Peak Panoramic Sunrise and Spiral Tower"
            fill
            priority
            quality={100}
            className="object-cover object-center scale-[1.01]"
          />
          {/* Subtle Dark Navy Gradient replacing black - preserves golden sunrise while seamlessly fading to deep navy */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/50 via-[#0B2545]/25 to-[#0B2545]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-black/30" />
        </div>

        {/* Top Space for Navigation */}
        <div className="w-full"></div>

        {/* Center Giant Landmark Typography - Exactly like "JAPAN" in reference design */}
        <div className="relative z-10 w-full text-center px-4 my-auto select-none pointer-events-none">
          {/* Live Destination Status Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#102F57]/80 backdrop-blur-md border border-white/20 text-[#FAF7F0] text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold mb-3 shadow-2xl pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Today â€¢ 07:30 AM â€“ 05:30 PM</span>
            <span className="text-[#BFD8F0]">â€¢</span>
            <span>3,567 FT Elevation</span>
            <span className="hidden sm:inline text-[#BFD8F0]">â€¢</span>
            <span className="hidden sm:inline">Gampola, Sri Lanka</span>
          </div>

          {/* Giant Stylized Destination Name (Reference Style: "JAPAN") */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] xl:text-[170px] font-black uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white/95 leading-none drop-shadow-[0_15px_30px_rgba(0,13,32,0.9)] transition-all">
            AMBULUWAWA
          </h1>

          <p className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-white/90 italic tracking-wide mt-2 drop-shadow-md">
            Where Vistas Inspire &amp; Stories Ignite
          </p>
          <p className="text-xs sm:text-sm text-white/80 font-light tracking-wider max-w-xl mx-auto mt-1">
            Beyond the view, beyond the climb, lies a story waiting to be told.
          </p>
        </div>

        {/* Bottom Floating Preview Cards Row + Book Ticket Action (Exact Layout from Reference Image) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#102F57]/80 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            
            {/* 5 Vertical Preview Cards (Exact from Reference Image) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full lg:w-auto flex-grow">
              {previewHighlights.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group relative h-28 sm:h-32 rounded-2xl overflow-hidden border border-white/20 bg-white/5 hover:border-[#BFD8F0] transition-all duration-300 flex flex-col justify-end p-3 cursor-pointer shadow-md hover:-translate-y-1"
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-1 text-[#BFD8F0] mb-0.5">
                        <Icon className="w-3 h-3" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">{card.title}</span>
                      </div>
                      <div className="text-[11px] text-white/90 font-light leading-tight">
                        {card.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons: Solid White "Book Ticket" Pill & Watch Video Pill */}
            <div className="flex sm:flex-col lg:flex-col gap-2.5 w-full lg:w-auto shrink-0 justify-center">
              <a
                href="https://prod-ambuluwawa-main-web.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-48 py-3.5 px-6 rounded-full bg-white hover:bg-[#FAF7F0] text-[#102F57] text-xs uppercase tracking-[0.2em] font-bold shadow-2xl transition-all flex items-center justify-center space-x-2 border border-white/80 hover:scale-105"
              >
                <Ticket className="w-4 h-4 text-[#004495]" />
                <span>Book Ticket</span>
              </a>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="w-full lg:w-48 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs uppercase tracking-[0.16em] font-medium border border-white/25 transition-all flex items-center justify-center space-x-2"
              >
                <Play className="w-3.5 h-3.5 text-[#BFD8F0] fill-current" />
                <span>Watch Video</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal (YouTube Player for https://youtu.be/XDMWG0VO3sg) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#102F57] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="flex items-center justify-between p-4 bg-[#0B2545] text-white border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Mountain className="w-4 h-4 text-[#BFD8F0]" />
                <span className="font-serif text-lg tracking-wide">Ambuluwawa Peak Video</span>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
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
