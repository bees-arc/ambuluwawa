"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Compass, 
  SunMedium, 
  ChevronRight,
  Ticket,
  Globe
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"EN" | "SI" | "TA">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Sanctuary", href: "#sanctuary" },
    { label: "The Climb", href: "#climb" },
    { label: "Experiences", href: "#experiences" },
    { label: "Journey & Routes", href: "#routes" },
    { label: "Guest Stories", href: "#stories" },
    { label: "Journal", href: "#journal" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      {/* Top Luxury Announcement / Concierge Bar */}
      <div className="bg-[#122319] text-[#E8DFD0] text-[11px] tracking-wide border-b border-[#233B2C] hidden lg:block transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#C5A880]">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-[#C5A880]" />
              Open 365 Days • 07:30 AM – 05:30 PM
            </span>
            <span className="text-[#4E6856]">|</span>
            <span className="flex items-center text-[#D8D1C3]">
              <SunMedium className="w-3.5 h-3.5 mr-1.5 text-[#C5A880]" />
              Summit Weather: 22°C • Clear Panoramas
            </span>
            <span className="text-[#4E6856]">|</span>
            <span className="flex items-center text-[#D8D1C3]">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#C5A880]" />
              Ambuluwawa Peak, Gampola (3,567 ft)
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href="tel:+94712724724" 
              className="flex items-center hover:text-[#C5A880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#C5A880]" />
              Concierge: +94 71 272 4724
            </a>
            <span className="text-[#4E6856]">|</span>
            <div className="flex items-center space-x-2">
              <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
              {(["EN", "SI", "TA"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`text-[10px] px-1.5 py-0.5 rounded transition-colors ${
                    activeLang === lang
                      ? "bg-[#C5A880] text-[#122319] font-semibold"
                      : "text-[#D8D1C3] hover:text-[#C5A880]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`fixed top-0 lg:top-auto left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E7E0D3] py-3.5"
            : "bg-gradient-to-b from-[#0D1C13]/85 via-[#0D1C13]/50 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 border border-[#C5A880]/50 bg-[#162F21]/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://ambuluwawa.com/wp-content/uploads/2024/01/Group-2-300x300.png"
                alt="Ambuluwawa Emblem"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl sm:text-2xl font-light tracking-[0.12em] uppercase transition-colors ${
                isScrolled ? "text-[#162F21]" : "text-white"
              }`}>
                Ambuluwawa
              </span>
              <span className={`text-[9px] uppercase tracking-[0.25em] font-medium transition-colors ${
                isScrolled ? "text-[#A08055]" : "text-[#E6D4BA]"
              }`}>
                Bio Diversity Complex
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-all relative py-1 hover:text-[#C5A880] group ${
                  isScrolled ? "text-[#2A342E]" : "text-[#F0EBE1]"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href="https://maps.app.goo.gl/LkNaHVi1Fyoj4yet7"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[11px] uppercase tracking-[0.15em] font-medium px-3.5 py-2.5 rounded-[3px] border transition-all ${
                isScrolled
                  ? "border-[#D6CCA8] text-[#162F21] hover:bg-[#F2ECE0]"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              Directions
            </a>

            <button
              onClick={onOpenBooking}
              className="fs-btn px-5 py-2.5 bg-[#C5A880] hover:bg-[#D4BA95] text-[#122319] text-[11px] uppercase tracking-[0.18em] font-semibold rounded-[3px] shadow-sm transition-all flex items-center space-x-2"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Reserve Tickets</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            className={`xl:hidden p-2 rounded-[3px] border transition-colors ${
              isScrolled 
                ? "border-[#DACFC0] text-[#162F21] bg-white/70" 
                : "border-white/30 text-white bg-black/30"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Luxury Full Screen Experience) */}
      <div
        className={`fixed inset-0 z-40 bg-[#101C14] text-[#F4EFE6] transition-all duration-500 xl:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ paddingTop: "90px" }}
      >
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#C5A880] pb-2 border-b border-[#233B2C]">
            <Compass className="w-4 h-4" />
            <span>Navigation Menu</span>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl font-light text-[#F7F3EB] hover:text-[#C5A880] flex items-center justify-between transition-colors py-1.5 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]/70" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#233B2C] flex flex-col space-y-4">
          <div className="flex items-center justify-between text-xs text-[#D8D1C3]">
            <span>Hours: 07:30 AM – 05:30 PM</span>
            <span className="text-[#C5A880]">Open 365 Days</span>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 bg-[#C5A880] hover:bg-[#D4BA95] text-[#122319] text-xs uppercase tracking-[0.2em] font-semibold rounded-[3px] text-center shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <Ticket className="w-4 h-4" />
            <span>Book Your Ambuluwawa Tickets</span>
          </button>

          <a
            href="tel:+94712724724"
            className="text-center text-xs text-[#E1DACB] hover:text-[#C5A880] transition-colors py-2"
          >
            Hotline: +94 71 272 4724
          </a>
        </div>
      </div>
    </>
  );
}
