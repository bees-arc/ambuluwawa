"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function GallerySection() {
  const images = [
    {
      src: "https://ambuluwawa.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-19-at-6.11.18-PM.jpeg",
      title: "Summit Spire Amid Central Clouds",
      caption: "The majestic Ambuluwawa Tower piercing through morning mountain mist at 3,567 ft.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1.webp",
      title: "Golden Hour Over Hanthana & Knuckles",
      caption: "Panoramic vistas stretching across four provinces as evening sets upon the sanctuary.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg",
      title: "The Narrow Spiral Ascent",
      caption: "The iconic 55m staircase winding around the white stupa structure into clear azure skies.",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      src: "https://ambuluwawa.com/wp-content/uploads/2024/06/a2.webp",
      title: "Java Lounge Mountain CafÃ©",
      caption: "Artisan Ceylon brews and serene reflection points overlooking emerald tea valleys.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://ambuluwawa.com/wp-content/uploads/2024/01/Pine.webp",
      title: "Ancient Pine Groves & Nature Pathways",
      caption: "Tranquil walking trails shaded by towering pines leading to the multi-religious sanctuary.",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "https://ambuluwawa.com/wp-content/uploads/elementor/thumbs/22-scaled-qpsaj84a44qt7mewtfhr8t6ogo4ut3m7j2fjn5hk8o.webp",
      title: "Adventure Park Ridge",
      caption: "High-flying canopy experiences and adrenaline trails across the mountain crest.",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIdx(index);
  const closeLightbox = () => setActiveIdx(null);

  const prevImage = () => {
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === 0 ? images.length - 1 : activeIdx - 1);
    }
  };

  const nextImage = () => {
    if (activeIdx !== null) {
      setActiveIdx(activeIdx === images.length - 1 ? 0 : activeIdx + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FBF9F5] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
            Through the Lens of Wonder
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#162F21] leading-tight mb-5">
            The Ambuluwawa Visual Anthology
          </h2>
          <div className="w-16 h-[1.5px] bg-[#BFD8F0] mx-auto mb-6" />
          <p className="text-[#5D6B63] text-sm sm:text-base font-light leading-relaxed">
            From the dizzying spirals of the summit to peaceful moments in shaded pine forests, 
            explore the captivating beauty captured by travelers and photographers.
          </p>
        </div>

        {/* Masonry / Four Seasons Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[240px]">
          {images.map((img, index) => (
            <div
              key={img.title}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-[3px] bg-[#162F21] cursor-pointer fs-card-shadow ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Hover Trigger Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-90">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#BFD8F0] font-semibold mb-1">
                  Ambuluwawa Archives
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-light leading-snug">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Social Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#7B8B82] tracking-wide flex items-center justify-center">
            <Camera className="w-4 h-4 mr-1.5 text-[#BFD8F0]" />
            <span>Tag your moments with <strong>#Ambuluwawa</strong> on Instagram and TikTok to be featured</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image and Caption */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={images[activeIdx].src}
                alt={images[activeIdx].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="font-serif text-2xl font-light text-[#E8DFD0]">
                {images[activeIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A89E90] mt-1 max-w-lg mx-auto font-light">
                {images[activeIdx].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
