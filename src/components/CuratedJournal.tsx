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
    <section className="py-20 sm:py-28 bg-[#000D20] text-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Divider Header (Exact Reference Style) */}
        <div className="flex items-center space-x-4 mb-14 sm:mb-16">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            TRAVEL JOURNAL
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        {/* Narrative Intro */}
        <div className="max-w-2xl mb-12">
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight mb-3">
            Don&apos;t Let Your Curiosity <br />
            <span className="italic font-normal text-[#C5A880]">Go Unanswered!</span>
          </h3>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            You&apos;re likely overflowing with questions and curiosity about Ambuluwawa and Sri Lanka. Rest assured, our written blog posts are here to guide you!
          </p>
        </div>

        {/* 3 Articles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-white/[0.04] rounded-3xl border border-white/15 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C5A880]/60 hover:bg-white/[0.07]"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-60 w-full overflow-hidden bg-[#001229]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000D20] via-transparent to-transparent opacity-85" />
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#000D20]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.18em] font-semibold border border-white/15">
                    Editorial
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-7">
                  <div className="text-[11px] text-[#C5A880] mb-2 font-medium">
                    {art.date}
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#C5A880] transition-colors mb-3 leading-snug">
                    <a href={art.url} target="_blank" rel="noopener noreferrer">
                      {art.title}
                    </a>
                  </h4>

                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                <a
                  href={art.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-semibold text-white hover:text-[#C5A880] transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/10"
                >
                  <span>Read Article</span>
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
