"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export default function CuratedJournal() {
  const articles = [
    {
      id: "perahera",
      title: "Sacred Rhythms and Cloudy Heights: Pairing Kandy’s Perahera with a Trip to Ambuluwawa",
      category: "Cultural Expedition",
      date: "August 2025",
      excerpt: "Every year, when the sacred Esala moon rises, connecting Kandy's grand nocturnal pageant with an early morning summit ascent at Ambuluwawa creates an indelible Sri Lankan memory.",
      image: "https://ambuluwawa.com/wp-content/uploads/2025/08/Kandy-Esala-Perahara-2024.jpg",
      readTime: "4 min read",
    },
    {
      id: "action-date",
      title: "Ditch the Café: Why Ambuluwawa Is the Ultimate Summer Action Date Spot",
      category: "Couples & Adventure",
      date: "July 2025",
      excerpt: "Skip ordinary coffee dates. From navigating the spiraling peak hand-in-hand to enjoying artisanal tea at Java Lounge overlooking central misty valleys, love blooms higher here.",
      image: "https://ambuluwawa.com/wp-content/uploads/2024/06/Firefly-20240617204232-1.webp",
      readTime: "3 min read",
    },
    {
      id: "boardroom",
      title: "Beyond the Boardroom: Why Ambuluwawa Inspires Productive Office Workshops",
      category: "Corporate Retreats",
      date: "June 2025",
      excerpt: "Step away from routine conference rooms. Explore our fully equipped mountain auditorium and open-air pine grove retreats engineered to elevate leadership focus and team synergy.",
      image: "https://ambuluwawa.com/wp-content/uploads/2025/06/auditorium.jpeg",
      readTime: "5 min read",
    },
  ];

  return (
    <section id="journal" className="py-20 sm:py-28 bg-[#FAF7F0] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
              The Ambuluwawa Chronicles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#162F21] leading-tight">
              Stories &amp; Guides from <br />
              <span className="italic font-normal">The Mountain Sanctuary</span>
            </h2>
          </div>

          <a
            href="https://ambuluwawa.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#162F21] hover:text-[#A08055] transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[#C5A880]" />
            <span>View All Journal Entries</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* 3 Articles Grid (Four Seasons Editorial Finish) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-[#FFFFFF] rounded-[4px] border border-[#E6DEC9] overflow-hidden fs-card-shadow flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#162F21]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-[2px] bg-[#122319]/80 backdrop-blur-md border border-white/20 text-[#FAF7F0] text-[10px] uppercase tracking-[0.18em]">
                    {art.category}
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center space-x-2 text-[11px] text-[#86948A] mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#162F21] group-hover:text-[#A08055] transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66776E] font-light leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#F3ECE0] mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] font-semibold text-[#162F21] group-hover:text-[#A08055]">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
