"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#001229] text-[#FAF7F0] pt-20 pb-12 overflow-hidden border-t border-[#0C2A50]">
      {/* Background with Ambient Overlay (Exact from ambuluwawa.com) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg"
          alt="Ambuluwawa Footer Mountain Texture"
          fill
          className="object-cover object-top opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#001229]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Row: Logo & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-12 mb-12 border-b border-[#0D2E55] gap-6 text-center sm:text-left">
          <Link href="/" className="flex items-center space-x-3.5">
            <div className="relative w-12 h-12 rounded-full p-1 border border-[#C5A880]/50 bg-[#001C3D] flex items-center justify-center">
              <Image
                src="https://ambuluwawa.com/wp-content/uploads/2024/01/Group-2-300x300.png"
                alt="Ambuluwawa Emblem"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-serif text-2xl font-light tracking-[0.1em] uppercase text-white">
                Ambuluwawa
              </div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Bio Diversity Complex
              </div>
            </div>
          </Link>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-[2px] border border-[#143E6F] hover:border-[#C5A880] text-xs uppercase tracking-[0.18em] text-[#C2D7ED] hover:text-[#C5A880] transition-colors flex items-center space-x-2"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Layout from ambuluwawa.com */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 text-xs text-[#B8CEE3]">
          
          {/* Column 1: Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Contact Us
            </h4>
            <div className="space-y-3 font-light">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="tel:+94712724724" className="hover:text-[#C5A880] transition-colors">
                  +94 71 272 4724
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href="mailto:info@ambuluwawa.com" className="hover:text-[#C5A880] transition-colors">
                  info@ambuluwawa.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Mon - Fri: 7:30 - 17:00</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Exact from ambuluwawa.com) */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 font-light">
              <li>
                <a href="https://ambuluwawa.com/things-to-do/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Things to Do</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/where-to-stay/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Where to Stay</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/faq-2/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/weather/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Weather</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/gallery/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/our-team/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Our Team</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Blog</a>
              </li>
              <li>
                <a href="https://hub.ambuluwawa.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">Portal Login</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Follow Ambuluwawa
            </h4>
            <p className="font-light leading-relaxed text-[#96B3D0]">
              Discover summit photography, visitor adventures, and sanctuary updates across our official social channels.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/ambuluwawa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[3px] bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/ambuluwawa_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[3px] bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.tiktok.com/@ambuluwawa_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[3px] bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold"
                aria-label="TikTok"
              >
                TT
              </a>
              <a
                href="https://www.youtube.com/@Ambuluwawaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[3px] bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright (Exact from ambuluwawa.com) */}
        <div className="pt-8 border-t border-[#0D2E55] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A98B7] gap-4">
          <div>
            Copyright &copy; 2025 Ambuluwawa Bio Diversity Complex
          </div>
          <div className="flex items-center space-x-6 text-[10px] tracking-wide">
            <span>Sri Lanka Tourism</span>
            <span>•</span>
            <span>Bio Diversity Complex</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
