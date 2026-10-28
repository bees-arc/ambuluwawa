"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Coffee, Trees, Compass, ShoppingBag, ArrowRight } from "lucide-react";

interface ExperiencesGridProps {
  onOpenBooking: () => void;
}

export default function ExperiencesGrid({ onOpenBooking }: ExperiencesGridProps) {
  const [activeTab, setActiveTab] = useState<"all" | "dining" | "adventure">("all");

  const experiences = [
    {
      id: "java-lounge",
      category: "dining",
      badge: "Hilltop Café",
      title: "Java Lounge",
      subtitle: "Coffee, Serenity & Breathtaking Panoramas",
      desc: "Perched along the ridges, savor artisanal Ceylon coffee, handcrafted teas, and fresh pastries while gazing across the mist-shrouded green valleys.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/a2.webp",
      icon: Coffee,
      feature: "Panoramic glass balcony • Open daily",
    },
    {
      id: "pinewood",
      category: "dining",
      badge: "Gastronomic Retreat",
      title: "Pinewood Restaurant",
      subtitle: "Nestled Among Grand Pine Groves",
      desc: "Retreat to Pinewood for culinary comfort and serenity. Surrounded by towering pine trees and refreshing alpine breezes, it offers authentic Sri Lankan flavours and global fare.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Pine.webp",
      icon: Trees,
      feature: "Forest alfresco dining • Group reservations",
    },
    {
      id: "adventure-park",
      category: "adventure",
      badge: "Adrenaline & Thrill",
      title: "Adventure Park & Zipline",
      subtitle: "Unleash Your Inner Mountain Explorer",
      desc: "Take flight across the mountain ridge on high-altitude cable lines, suspension walks, and tree canopy challenges engineered to highest safety standards.",
      img: "https://ambuluwawa.com/wp-content/uploads/elementor/thumbs/22-scaled-qpsaj84a44qt7mewtfhr8t6ogo4ut3m7j2fjn5hk8o.webp",
      icon: Compass,
      feature: "Canopy zipline • Certified safety harnesses",
    },
    {
      id: "souvenir",
      category: "adventure",
      badge: "Artisan Boutique",
      title: "The Souvenir Boutique",
      subtitle: "Authentic Memories of Ambuluwawa",
      desc: "Take home a piece of the sanctuary with authentic handcrafted wood carvings, herbal tea blends, certified gems, and branded photography keepsakes.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/19.webp",
      icon: ShoppingBag,
      feature: "Local artisan crafts • Certified Ceylon tea & gems",
    },
  ];

  const filtered = activeTab === "all" ? experiences : experiences.filter(e => e.category === activeTab);

  return (
    <section id="experiences" className="py-20 sm:py-28 bg-[#F4EFE6] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
              Curated Mountain Encounters
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#162F21] leading-tight">
              Find Adventure &amp; Expedition <br />
              <span className="italic font-normal">Beyond the Tower</span>
            </h2>
            <p className="mt-4 text-[#5D6B63] text-sm sm:text-base font-light leading-relaxed">
              Step beyond the spiral ascent and immerse yourself in Ambuluwawa&apos;s 
              curated culinary retreats, misty pine groves, and adrenaline trails.
            </p>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="inline-flex p-1 bg-[#EAE2D2] rounded-[3px] border border-[#DBD1BF]">
            {(["all", "dining", "adventure"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.16em] font-medium rounded-[2px] transition-all ${
                  activeTab === tab
                    ? "bg-[#162F21] text-[#FAF7F0] shadow-sm font-semibold"
                    : "text-[#55635B] hover:text-[#162F21]"
                }`}
              >
                {tab === "all" ? "All Experiences" : tab === "dining" ? "Dining & Tea" : "Adventure & Crafts"}
              </button>
            ))}
          </div>
        </div>

        {/* Four Seasons Style Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-[#FFFFFF] rounded-[4px] overflow-hidden border border-[#E4DC shatter #E4DCcb] border-[#E4DCCB] fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Section with subtle zoom */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#182B1F]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-[#122319]/80 backdrop-blur-md border border-white/15 text-[#EFE7D8] text-[10px] uppercase tracking-[0.18em]">
                    <Icon className="w-3 h-3 text-[#C5A880]" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Feature Pill */}
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-[#EAE4D8] font-light italic">
                    {item.feature}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#162F21] mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-serif italic text-[#A08055] mb-3">
                      {item.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#5C6B62] font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1EADC] flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#8C7A62] font-medium">
                      Included with visit access
                    </span>
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#162F21] group-hover:text-[#A08055] transition-colors"
                    >
                      <span>Inquire &amp; Book</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
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
