"use client";

import React, { useState } from "react";
import { 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  Ticket, 
  CreditCard, 
  Check, 
  Footprints, 
  Wind, 
  SunMedium,
  ExternalLink
} from "lucide-react";

interface VisitorGuideProps {
  onOpenBooking: () => void;
}

export default function VisitorGuide({ onOpenBooking }: VisitorGuideProps) {
  // Live Ticket Calculator State
  const [localAdults, setLocalAdults] = useState(2);
  const [localChildren, setLocalChildren] = useState(0);
  const [foreignAdults, setForeignAdults] = useState(0);
  const [foreignChildren, setForeignChildren] = useState(0);

  const LOCAL_ADULT_PRICE = 100;
  const LOCAL_CHILD_PRICE = 50;
  const FOREIGN_ADULT_PRICE = 2000;
  const FOREIGN_CHILD_PRICE = 1000;

  const totalCost = 
    localAdults * LOCAL_ADULT_PRICE +
    localChildren * LOCAL_CHILD_PRICE +
    foreignAdults * FOREIGN_ADULT_PRICE +
    foreignChildren * FOREIGN_CHILD_PRICE;

  return (
    <section id="climb" className="py-20 sm:py-28 bg-[#F4EFE6] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
            Essential Visitor Protocols
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#162F21] leading-tight mb-5">
            Planning Your Ascent
          </h2>
          <div className="w-16 h-[1.5px] bg-[#BFD8F0] mx-auto mb-6" />
          <p className="text-[#5B6B62] text-sm sm:text-base font-light leading-relaxed">
            Everything you need for an effortless, exhilarating visit — from live admission fees 
            and opening hours to safety guidelines for the spiral climb.
          </p>
        </div>

        {/* 2-Column Grid: Left = Hours & Safety Rules; Right = Interactive Ticket Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Hours & Summit Guidelines */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Opening Hours Card */}
            <div className="bg-[#FFFFFF] rounded-[4px] border border-[#E3D9C7] p-7 sm:p-8 fs-card-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-[3px] bg-[#162F21] text-[#BFD8F0] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-[#162F21]">
                    Hours of Admission
                  </h3>
                  <div className="text-xs text-[#7B8B82]">Open 365 Days a Year, Rain or Shine</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-[#F0E8DC]">
                <div className="p-4 rounded-[3px] bg-[#FAF7F0] border border-[#ECE3D2]">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#7A8A81] block mb-1">
                    Morning Opening
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#162F21]">
                    07:30 AM
                  </span>
                </div>

                <div className="p-4 rounded-[3px] bg-[#FAF7F0] border border-[#ECE3D2]">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#7A8A81] block mb-1">
                    Evening Closing
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#162F21]">
                    05:30 PM
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5B6B62] font-light leading-relaxed">
                Last admission ticket is issued at 04:30 PM to allow visitors sufficient time 
                to explore the sanctuary and complete the spiral ascent safely before dusk.
              </p>
            </div>

            {/* Climbing Safety & Guidelines */}
            <div className="bg-[#FFFFFF] rounded-[4px] border border-[#E3D9C7] p-7 sm:p-8 fs-card-shadow flex-grow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-[3px] bg-[#BFD8F0] text-[#122319] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-[#162F21]">
                    Summit Advisory &amp; Safety
                  </h3>
                  <div className="text-xs text-[#7B8B82]">For a Smooth &amp; Safe Climb</div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#55635A]">
                <div className="flex items-start space-x-3">
                  <Footprints className="w-4 h-4 text-[#BFD8F0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#162F21] font-medium">Comfortable Footwear:</strong>
                    <span className="ml-1 text-[#66776E]">Wear sports sneakers or walking shoes with sturdy grip. Avoid flip-flops or high heels.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-4 h-4 text-[#BFD8F0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#162F21] font-medium">Light Travel:</strong>
                    <span className="ml-1 text-[#66776E]">Avoid carrying large backpacks. The upper 15m spiral path is narrow and single-file.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Wind className="w-4 h-4 text-[#BFD8F0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#162F21] font-medium">Highland Winds:</strong>
                    <span className="ml-1 text-[#66776E]">Gale winds can develop quickly near the peak. Secure hats, lenses, and mobile phones firmly.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <SunMedium className="w-4 h-4 text-[#BFD8F0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#162F21] font-medium">Best Timing:</strong>
                    <span className="ml-1 text-[#66776E]">Early mornings (08:00 AM – 10:30 AM) offer the crispest 360° visibility before afternoon cloud cover.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Ticket Price Calculator (Four Seasons Widget) */}
          <div className="lg:col-span-6 bg-[#162F21] text-[#FAF7F0] rounded-[4px] border border-[#274B36] p-7 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#294D38]">
                <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#BFD8F0] font-semibold">
                  <Ticket className="w-4 h-4" />
                  <span>Admission Tariff &amp; Estimator</span>
                </div>
                <span className="text-[11px] text-[#A7BAAE]">Official Rates</span>
              </div>

              <h3 className="font-serif text-3xl font-light text-white mb-2">
                Calculate Admission Tickets
              </h3>
              <p className="text-xs text-[#C6D4CB] font-light leading-relaxed mb-8">
                Select your group size below to calculate exact entrance fees. 
                Tickets include entry to the Biodiversity Complex, Multi-Faith Sanctuaries, and Spiral Tower.
              </p>

              {/* Counter Controls */}
              <div className="space-y-4 mb-8">
                {/* Local Adults */}
                <div className="flex items-center justify-between p-3.5 bg-[#0E1F15] rounded-[3px] border border-[#294B37]">
                  <div>
                    <div className="text-xs font-semibold text-white">Local Resident (Adult)</div>
                    <div className="text-[11px] text-[#A6B8AC]">LKR 100 per person</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setLocalAdults(Math.max(0, localAdults - 1))}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-serif text-lg text-[#BFD8F0] w-6 text-center">
                      {localAdults}
                    </span>
                    <button
                      onClick={() => setLocalAdults(localAdults + 1)}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Local Children */}
                <div className="flex items-center justify-between p-3.5 bg-[#0E1F15] rounded-[3px] border border-[#294B37]">
                  <div>
                    <div className="text-xs font-semibold text-white">Local Resident (Child &lt; 12)</div>
                    <div className="text-[11px] text-[#A6B8AC]">LKR 50 per child</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setLocalChildren(Math.max(0, localChildren - 1))}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-serif text-lg text-[#BFD8F0] w-6 text-center">
                      {localChildren}
                    </span>
                    <button
                      onClick={() => setLocalChildren(localChildren + 1)}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Foreign Adults */}
                <div className="flex items-center justify-between p-3.5 bg-[#0E1F15] rounded-[3px] border border-[#294B37]">
                  <div>
                    <div className="text-xs font-semibold text-white">International Traveler (Adult)</div>
                    <div className="text-[11px] text-[#A6B8AC]">LKR 2,000 (~$6.50 USD)</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setForeignAdults(Math.max(0, foreignAdults - 1))}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-serif text-lg text-[#BFD8F0] w-6 text-center">
                      {foreignAdults}
                    </span>
                    <button
                      onClick={() => setForeignAdults(foreignAdults + 1)}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Foreign Children */}
                <div className="flex items-center justify-between p-3.5 bg-[#0E1F15] rounded-[3px] border border-[#294B37]">
                  <div>
                    <div className="text-xs font-semibold text-white">International Child (&lt; 12)</div>
                    <div className="text-[11px] text-[#A6B8AC]">LKR 1,000 (~$3.25 USD)</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setForeignChildren(Math.max(0, foreignChildren - 1))}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-serif text-lg text-[#BFD8F0] w-6 text-center">
                      {foreignChildren}
                    </span>
                    <button
                      onClick={() => setForeignChildren(foreignChildren + 1)}
                      className="w-8 h-8 rounded border border-white/20 text-white hover:bg-white/10 flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Display & Action */}
            <div className="pt-6 border-t border-[#2A4E39]">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#A6B8AC] block">
                    Estimated Total Tariff
                  </span>
                  <span className="text-xs text-[#BFD8F0]">Inclusive of all sanctuary taxes</span>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl sm:text-4xl font-light text-white">
                    LKR {totalCost.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="fs-btn w-full py-3.5 bg-[#BFD8F0] hover:bg-[#DCEBF8] text-[#122319] text-xs uppercase tracking-[0.2em] font-semibold rounded-[3px] shadow transition-all flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Reserve Online Now</span>
                </button>

                <a
                  href="https://prod-ambuluwawa-main-web.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3.5 rounded-[3px] border border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-[0.15em] font-medium text-center transition-all flex items-center justify-center space-x-1"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BFD8F0]" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
