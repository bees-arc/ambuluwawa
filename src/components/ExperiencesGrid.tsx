"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Trees, Compass, ShoppingBag } from "lucide-react";

export default function ExperiencesGrid() {
  const experiences = [
    {
      id: "java-lounge",
      title: "Java Lounge",
      desc: "Coffee, serenity, and breathtaking panoramas.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/a2.webp",
      icon: Coffee,
    },
    {
      id: "souvenir-shop",
      title: "Souvenir Shop",
      desc: "Find the perfect Ambuluwawa souvenir.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/06/19.webp",
      icon: ShoppingBag,
    },
    {
      id: "adventure-park",
      title: "Adventure Park",
      desc: "Unleash your inner thrillseeker at the Adventure Park.",
      img: "https://ambuluwawa.com/wp-content/uploads/elementor/thumbs/22-scaled-qpsaj84a44qt7mewtfhr8t6ogo4ut3m7j2fjn5hk8o.webp",
      icon: Compass,
    },
    {
      id: "pinewood",
      title: "Pinewood Restuarant",
      desc: "Nestled among grand pines, retreat to Pinewood for a touch of serenity.",
      img: "https://ambuluwawa.com/wp-content/uploads/2024/01/Pine.webp",
      icon: Trees,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE6] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight mb-5">
            Find <span className="italic font-normal text-[#004495]">Adventure &amp; Expedition</span> <br />
            Beyond the Tower
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#526374] text-sm sm:text-base font-light leading-relaxed">
            Step beyond the tower and immerse yourself in the beauty of Ambuluwawa, 
            where countless wonders are within minutes&apos; reach.
          </p>
        </div>

        {/* 4 Cards Grid (Dark Navy Accents & Four Seasons Craftsmanship) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-[#FFFFFF] rounded-[4px] overflow-hidden border border-[#E0D7C5] fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Visual Image */}
                <div className="relative h-60 w-full overflow-hidden bg-[#001C3D]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#001C3D] flex items-center justify-center shadow">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#001C3D] mb-2 group-hover:text-[#004495] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6D7F] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F0E8DC]">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#004495]">
                      Ambuluwawa Destination
                    </span>
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
