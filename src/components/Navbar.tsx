"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  X, 
  User, 
  Ticket, 
  ChevronRight 
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Things to Do", href: "https://ambuluwawa.com/things-to-do/" },
    { label: "Where to Stay", href: "https://ambuluwawa.com/where-to-stay/" },
    { label: "FAQ", href: "https://ambuluwawa.com/faq-2/" },
    { label: "Weather", href: "https://ambuluwawa.com/weather/" },
    { label: "Gallery", href: "https://ambuluwawa.com/gallery/" },
    { label: "Our Team", href: "https://ambuluwawa.com/our-team/" },
    { label: "Blog", href: "https://ambuluwawa.com/blog/" },
  ];

  return (
    <>
      {/* Main Four Seasons Inspired Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#000D20]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3.5 text-white"
            : "bg-gradient-to-b from-[#000D20]/90 via-[#000D20]/60 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-1 border border-white/30 bg-[#00142C] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
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
              <span className="font-serif text-lg sm:text-xl font-light tracking-[0.14em] uppercase text-white">
                Ambuluwawa
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] font-medium text-[#C5A880]">
                Bio Diversity Complex
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Exact from ambuluwawa.com) */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[11px] uppercase tracking-[0.18em] font-medium transition-all relative py-1 text-white/80 hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons: Login & Book Ticket (Reference Pill Button Style) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://hub.ambuluwawa.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.18em] font-medium px-4 py-2 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-all flex items-center space-x-1.5"
            >
              <User className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Login</span>
            </a>

            <a
              href="https://prod-ambuluwawa-main-web.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white hover:bg-[#FAF7F0] text-[#001229] text-[11px] uppercase tracking-[0.18em] font-bold shadow-lg transition-all flex items-center space-x-1.5 hover:scale-105"
            >
              <Ticket className="w-3.5 h-3.5 text-[#004495]" />
              <span>Book</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="xl:hidden p-2 rounded-full border border-white/30 text-white bg-black/40 hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Luxury Dark Navy #001229) */}
      <div
        className={`fixed inset-0 z-40 bg-[#001229] text-[#F4EFE6] transition-all duration-500 xl:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ paddingTop: "90px" }}
      >
        <div className="flex flex-col space-y-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] pb-2 border-b border-[#143257] font-semibold">
            Ambuluwawa Navigation
          </div>

          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl font-light text-[#F4F8FC] hover:text-[#C5A880] flex items-center justify-between transition-colors py-1.5 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#143257] flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs text-[#BED0E2]">
            <span>Mon - Fri: 7:30 - 17:00</span>
            <span className="text-[#C5A880]">Open 365 Days</span>
          </div>

          <a
            href="https://prod-ambuluwawa-main-web.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-[#004495] hover:bg-[#002D62] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[3px] text-center shadow flex items-center justify-center space-x-2"
          >
            <Ticket className="w-4 h-4 text-[#C5A880]" />
            <span>Book My Ticket to Ambuluwawa</span>
          </a>

          <a
            href="https://hub.ambuluwawa.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 border border-[#C5A880]/50 text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[3px] text-center flex items-center justify-center space-x-2"
          >
            <User className="w-4 h-4 text-[#C5A880]" />
            <span>Login to Portal</span>
          </a>

          <div className="text-center text-xs text-[#9BB1C7] pt-1">
            Concierge: +94 71 272 4724
          </div>
        </div>
      </div>
    </>
  );
}
