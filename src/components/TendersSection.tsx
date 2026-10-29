"use client";

import React from "react";
import { ArrowUpRight, FileText } from "lucide-react";

const BASE = "https://ambuluwawa.com/";

const tenders = [
  {
    title: "Maintenance and Operation of the CB3 Building at the Ambuluwawa Biodiversity Complex",
    slug: "maintenance-and-operation-of-the-cb3-building-at-the-ambuluwawa-biodiversity-complex/",
    date: "03/10/2026",
  },
  {
    title: "Request for Quotations: Maintenance and Operation of the CB4 Building at the Ambuluwawa Biodiversity Complex",
    slug: "request-for-quotations-maintenance-and-operation-of-the-cb4-building-at-the-ambuluwawa-biodiversity-complex/",
  },
  {
    title: "Request for Quotations: Establishing an archery range, darts oche (playing area), and air rifle range at Ambuluwawa Biodiversity Complex",
    slug: "request-for-quotations-establishing-an-archery-range-darts-oche-playing-area-and-air-rifle-range-at-ambuluwawa-biodiversity-complex/",
  },
  {
    title: "Request for Quotations for Introducing Paragliding Activities at Ambuluwawa Biodiversity Complex",
    slug: "request-for-quotations-for-introducing-paragliding-activities-at-ambuluwawa-biodiversity-complex/",
  },
  {
    title: "Tender for Hiring/Rental of a Double Cab Vehicle",
    slug: "tender-for-hiring-rental-of-a-double-cab-vehicle/",
  },
  {
    title: "Establishment and Operation of an Outdoor Wellness Center",
    slug: "establishment-and-operation-of-an-outdoor-wellness-center/",
  },
  {
    title: "Tender for Supplying Materials and Machinery for Road Carpeting (Phase I)",
    slug: "tender-for-supplying-materials-and-machinery-for-road-carpeting-phase-i/",
  },
  {
    title: "Request for Quotation: Installation and Maintenance of a CCTV Network at the Ambuluwawa Bio-Diversity Complex",
    slug: "request-for-quotation-installation-and-maintenance-of-a-cctv-network-at-the-ambuluwawa-bio-diversity-complex/",
  },
];

export default function TendersSection() {
  return (
    <section id="tenders" className="py-20 sm:py-28 bg-[#0A2142] text-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Divider Header */}
        <div className="flex items-center space-x-4 mb-10 sm:mb-12">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            TENDERS
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        <p className="max-w-2xl text-sm text-white/70 font-light leading-relaxed mb-10">
          Official tenders, requests for quotation and notices published by the Ambuluwawa Biodiversity Complex Trust Fund.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tenders.map((t) => (
            <a
              key={t.slug}
              href={BASE + t.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#BFD8F0]/60 hover:bg-white/[0.07]"
            >
              <span className="shrink-0 w-11 h-11 rounded-2xl bg-[#082247] border border-white/10 flex items-center justify-center text-[#BFD8F0]">
                <FileText className="w-5 h-5" />
              </span>
              <span className="flex-grow min-w-0">
                {t.date && (
                  <span className="block text-[11px] text-[#BFD8F0] mb-1 font-medium">Published on {t.date}</span>
                )}
                <span className="block font-serif text-base sm:text-lg text-white group-hover:text-[#BFD8F0] transition-colors leading-snug">
                  {t.title}
                </span>
              </span>
              <ArrowUpRight className="shrink-0 w-4 h-4 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={BASE + "tenders/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-white text-[#0B2545] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#BFD8F0] transition-colors"
          >
            <span>View All Tenders</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
