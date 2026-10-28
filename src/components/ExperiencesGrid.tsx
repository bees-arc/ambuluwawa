"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Trees, Compass, ShoppingBag, Sparkles, MapPin, ArrowUpRight } from "lucide-react";

export default function ExperiencesGrid() {
  const experiences = [
    {
      id: "java-lounge",
      category: "Scenic Mountain Café",
      title: "Java Lounge",
      desc: "Coffee, serenity, and breathtaking panoramas at the mountain summit.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/a2.webp",
      icon: Coffee,
      highlight: "Highest coffee deck in Sri Lanka with 360° cloud views",
      colSpan: "lg:col-span-8",
      aspectRatio: "h-72 sm:h-80 lg:h-96",
    },
    {
      id: "souvenir-shop",
      category: "Artisan Boutique",
      title: "Souvenir Shop",
      desc: "Find the perfect handcrafted Ambuluwawa keepsake & Ceylon gems.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/19.webp",
      icon: ShoppingBag,
      highlight: "Authentic handicrafts & mountain memorabilia",
      colSpan: "lg:col-span-4",
      aspectRatio: "h-72 sm:h-80 lg:h-96",
    },
    {
      id: "adventure-park",
      category: "Thrill & Adrenaline",
      title: "Adventure Park",
      desc: "Unleash your inner thrillseeker with high-altitude canopy challenges.",
      img: "https://ambuluwawa.com/wp-content/uploads/elementor/thumbs/22-scaled-qpsaj84a44qt7mewtfhr8t6ogo4ut3m7j2fjn5hk8o.webp",
      icon: Compass,
      highlight: "Canopy zipline, ridge trails & nature expeditions",
      colSpan: "lg:col-span-6",
      aspectRatio: "h-72 sm:h-80",
    },
    {
      id: "pinewood",
      category: "Hillside Dining",
      title: "Pinewood Restuarant",
      desc: "Nestled among grand pines, retreat to Pinewood for authentic highland dining.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Pine.webp",
      icon: Trees,
      highlight: "Serene dining immersed in fresh mountain pine fragrance",
      colSpan: "lg:col-span-6",
      aspectRatio: "h-72 sm:h-80",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE6] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#004495]/10 text-[#004495] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Destinations Across the Mountain</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight mb-5">
            Find <span className="italic font-normal text-[#004495]">Adventure &amp; Expedition</span> <br />
            Beyond the Tower
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mb-6 rounded-full" />
          <p className="text-[#526374] text-sm sm:text-base font-light leading-relaxed">
            Step beyond the tower and immerse yourself in the beauty of Ambuluwawa, 
            where countless wonders are within minutes&apos; reach.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.colSpan} group bg-white rounded-3xl overflow-hidden border border-[#DFD5C2] fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#004495]`}
              >
                {/* Visual Image with Curved Overlays */}
                <div className={`relative ${item.aspectRatio} w-full overflow-hidden bg-[#001C3D]`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/90 via-[#001C3D]/30 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                  
                  {/* Category Pill with Curved Edges */}
                  <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#001C3D]/85 backdrop-blur-md border border-white/20 text-[#FAF7F0] text-[10px] uppercase tracking-[0.16em] font-semibold shadow-md">
                    <Icon className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{item.category}</span>
                  </div>

                  {/* Corner Action Pill */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Micro Highlight Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-[#E5EDF5] font-light">
                    <span className="bg-[#00142C]/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-block">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#001C3D] mb-2 group-hover:text-[#004495] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6D7F] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#F0E8DC] flex items-center justify-between text-xs text-[#004495] font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Ambuluwawa Peak Sanctuary</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#A6875E]">Explore</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
