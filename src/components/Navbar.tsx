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
            ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E2D9CC] py-3.5 text-[#001C3D]"
            : "bg-gradient-to-b from-[#001229]/90 via-[#001229]/60 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-1 border border-[#C5A880]/50 bg-[#001C3D]/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://ambuluwawa.com/wp-content/uploads/2024/01/Group-2-300x300.png"
                alt="Ambuluwawa Emblem"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl sm:text-2xl font-light tracking-[0.14em] uppercase transition-colors ${
                isScrolled ? "text-[#001C3D]" : "text-white"
              }`}>
                Ambuluwawa
              </span>
              <span className={`text-[9px] uppercase tracking-[0.25em] font-medium transition-colors ${
                isScrolled ? "text-[#004495]" : "text-[#DCE7F5]"
              }`}>
                Bio Diversity Complex
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Exact from ambuluwawa.com) */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-[12px] uppercase tracking-[0.15em] font-medium transition-all relative py-1 hover:text-[#004495] group ${
                  isScrolled ? "text-[#1A2838]" : "text-[#F0EBE1]"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#004495] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons: Login & Book Ticket */}
          <div className="hidden sm:flex items-center space-x-3.5">
            <a
              href="https://hub.ambuluwawa.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[11px] uppercase tracking-[0.18em] font-semibold px-5 py-2.5 rounded-full border transition-all flex items-center space-x-1.5 ${
                isScrolled
                  ? "border-[#001C3D]/30 text-[#001C3D] hover:bg-[#001C3D] hover:text-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Login</span>
            </a>

            <a
              href="https://prod-ambuluwawa-main-web.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs-btn px-6 py-2.5 bg-[#004495] hover:bg-[#001C3D] text-white text-[11px] uppercase tracking-[0.18em] font-semibold rounded-full shadow transition-all flex items-center space-x-2 border border-[#0055BA]"
            >
              <Ticket className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Book Ticket</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className={`xl:hidden p-2.5 rounded-full border transition-colors ${
              isScrolled 
                ? "border-[#D8CFBF] text-[#001C3D] bg-white/80" 
                : "border-white/30 text-white bg-black/40"
            }`}
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
