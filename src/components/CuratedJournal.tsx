"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CuratedJournal() {
  const articles = [
    {
      id: "perahera",
      title: "Sacred Rhythms and Cloudy Heights: Pairing Kandy’s Perahera with a Trip to Ambuluwawa",
      date: "August 1, 2025",
      excerpt: "Every year, when the Esala moon rises, pairing Kandy's heritage pageant with the morning summit climb of Ambuluwawa creates the ultimate cultural retreat.",
      image: "https://ambuluwawa.com/wp-content/uploads/2025/08/Kandy-Esala-Perahara-2024.jpg",
      url: "https://ambuluwawa.com/sacred-rhythms-and-cloudy-heights-pairing-kandys-perahera-with-a-trip-to-ambuluwawa/",
    },
    {
      id: "action-date",
      title: "Ditch the Café: Why Ambuluwawa Is the Ultimate Summer Action Date Spot",
      date: "July 4, 2025",
      excerpt: "Let’s be honest. Sitting across from each other in a café is routine. Ambuluwawa offers adventure, mountain air, and shared summit heights.",
      image: "https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1.webp",
      url: "https://ambuluwawa.com/ditch-the-cafe-why-ambuluwawa-is-the-ultimate-summer-action-date-spot/",
    },
    {
      id: "boardroom",
      title: "Beyond the Boardroom: Why Ambuluwawa is the Ideal Escape for Productive Office Workshops and Team Synergy",
      date: "June 22, 2025",
      excerpt: "We all know that team retreats in nature spark fresh synergy. Discover why Ambuluwawa is the premier mountain destination for leadership retreats.",
      image: "https://ambuluwawa.com/wp-content/uploads/2025/06/auditorium.jpeg",
      url: "https://ambuluwawa.com/beyond-the-boardroom-why-ambuluwawa-is-the-ideal-escape-for-productive-office-workshops-and-team-synergy/",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F0] text-[#121820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight mb-5">
            Don&apos;t Let Your Curiosity Go Unanswered!
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#516375] text-sm sm:text-base font-light leading-relaxed">
            You&apos;re likely overflowing with questions and curiosity about Ambuluwawa and Sri Lanka. 
            Rest assured, our written blog posts are here to guide you!
          </p>
        </div>

        {/* 3 Articles Grid (Exact from ambuluwawa.com) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-[#FFFFFF] rounded-[4px] border border-[#E0D7C5] overflow-hidden fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-[#001C3D]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-[2px] bg-[#001C3D]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.18em]">
                    Blog
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  <div className="text-[11px] text-[#6E8094] mb-2 font-medium">
                    {art.date}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#001C3D] group-hover:text-[#004495] transition-colors mb-3 leading-snug">
                    <a href={art.url} target="_blank" rel="noopener noreferrer">
                      {art.title}
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6D7F] font-light leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 pt-0 border-t border-[#F2ECE0] mt-4">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#004495] hover:text-[#001C3D] transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
