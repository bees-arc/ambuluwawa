"use client";

import React, { useState, useEffect } from "react";
import { Ticket, Clock, Phone } from "lucide-react";

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export default function StickyBookingBar({ onOpenBooking }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past hero section (approx 450px)
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#122319]/95 backdrop-blur-md border-t border-[#294B37] px-4 py-3 sm:hidden shadow-2xl transition-all duration-300 animate-slide-up">
      <div className="flex items-center justify-between space-x-3">
        <div className="flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#C5A880] font-semibold flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>Open Today</span>
          </div>
          <div className="text-xs font-serif text-white">
            07:30 AM – 05:30 PM
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="tel:+94712724724"
            className="p-2.5 rounded-[3px] bg-[#1F3D2B] text-white border border-[#2E573F] text-xs flex items-center justify-center"
            aria-label="Call Concierge"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
          </a>

          <button
            onClick={onOpenBooking}
            className="fs-btn px-4 py-2.5 bg-[#C5A880] hover:bg-[#D4BA95] text-[#122319] text-xs uppercase tracking-[0.16em] font-semibold rounded-[3px] shadow flex items-center space-x-1.5"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>Reserve</span>
          </button>
        </div>
      </div>
    </div>
  );
}
