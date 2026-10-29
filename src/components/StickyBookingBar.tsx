"use client";

import React, { useState, useEffect } from "react";
import { Ticket, Clock, Phone } from "lucide-react";

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 bg-[#001229]/95 backdrop-blur-xl border border-white/15 px-4 py-3 sm:hidden shadow-2xl rounded-2xl transition-all duration-300">
      <div className="flex items-center justify-between space-x-3">
        <div className="flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#C5A880] font-bold flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>Open 365 Days</span>
          </div>
          <div className="text-xs font-serif text-white">
            07:30 AM – 05:30 PM
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="tel:+94712724724"
            className="p-2.5 rounded-full bg-[#001C3D] text-white border border-[#0F3563] text-xs flex items-center justify-center"
            aria-label="Call Concierge"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
          </a>

          <a
            href="https://prod-ambuluwawa-main-web.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-[#001229] text-xs uppercase tracking-[0.16em] font-bold rounded-full shadow-lg flex items-center space-x-1.5"
          >
            <Ticket className="w-3.5 h-3.5 text-[#004495]" />
            <span>Book Ticket</span>
          </a>
        </div>
      </div>
    </div>
  );
}
