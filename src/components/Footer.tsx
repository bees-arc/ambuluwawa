"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  Compass, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D1C13] text-[#FAF7F0] pt-20 pb-12 border-t border-[#1F3D2A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Brand & Headline Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 mb-14 border-b border-[#1E3928] gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 rounded-full p-1.5 border border-[#C5A880]/50 bg-[#162F21] flex items-center justify-center">
              <Image
                src="https://ambuluwawa.com/wp-content/uploads/2024/01/Group-2-300x300.png"
                alt="Ambuluwawa Emblem"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-light text-white tracking-[0.1em] uppercase">
                Ambuluwawa
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-medium">
                Bio Diversity Complex • Sri Lanka
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-[2px] border border-[#2F4D3B] hover:border-[#C5A880] text-xs uppercase tracking-[0.18em] text-[#C6D4CB] hover:text-[#C5A880] transition-colors flex items-center space-x-2"
            >
              <span>Back to Summit</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4-Column Luxury Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-xs text-[#C6D4CB]">
          
          {/* Col 1: About the Sanctuary */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#1F3D2A]">
              The Sanctuary
            </h4>
            <p className="font-light leading-relaxed text-[#B7C7BD]">
              Perched atop Ambuluwawa mountain peak at 3,567 feet, offering 360-degree breathtaking vistas, multi-religious sanctuary harmony, and endemic biodiversity conservation.
            </p>
            <div className="pt-2 text-[11px] text-[#C5A880] flex items-center space-x-1.5">
              <Compass className="w-4 h-4" />
              <span>Gampola, Central Province, Sri Lanka</span>
            </div>
          </div>

          {/* Col 2: Experiences & Highlights */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#1F3D2A]">
              Explore
            </h4>
            <ul className="space-y-2.5 font-light">
              <li>
                <a href="#climb" className="hover:text-[#C5A880] transition-colors">The 55m Spiral Tower</a>
              </li>
              <li>
                <a href="#sanctuary" className="hover:text-[#C5A880] transition-colors">Multi-Religious Sanctuaries</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#C5A880] transition-colors">Java Mountain Lounge</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#C5A880] transition-colors">Pinewood Restaurant</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#C5A880] transition-colors">Adventure Park &amp; Canopy Walk</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A880] transition-colors">The Visual Anthology</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Visitor Advisory & Timings */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#1F3D2A]">
              Visiting Information
            </h4>
            <ul className="space-y-2.5 font-light">
              <li className="flex items-center text-[#E2DACB]">
                <Clock className="w-3.5 h-3.5 mr-2 text-[#C5A880]" />
                <span>Open Daily: 07:30 AM – 05:30 PM</span>
              </li>
              <li className="flex items-center text-[#E2DACB]">
                <ShieldCheck className="w-3.5 h-3.5 mr-2 text-[#C5A880]" />
                <span>Open 365 Days a Year</span>
              </li>
              <li>
                <a href="#routes" className="hover:text-[#C5A880] transition-colors">Directions &amp; Distances</a>
              </li>
              <li>
                <a href="#climb" className="hover:text-[#C5A880] transition-colors">Admission Fees &amp; Calculator</a>
              </li>
              <li>
                <a href="https://hub.ambuluwawa.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors flex items-center">
                  <span>Authorized Partner Portal</span>
                  <ExternalLink className="w-3 h-3 ml-1 text-[#C5A880]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contacts & Social */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#1F3D2A]">
              Concierge Secretariat
            </h4>
            <div className="space-y-2.5 font-light">
              <div className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <a href="tel:+94712724724" className="hover:text-[#C5A880] transition-colors">
                  +94 71 272 4724
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <a href="mailto:info@ambuluwawa.com" className="hover:text-[#C5A880] transition-colors">
                  info@ambuluwawa.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Ambuluwawa Bio Diversity Complex, Gampola, Sri Lanka</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] block mb-2 font-medium">
                Official Channels
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/ambuluwawa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[2px] bg-[#1A3828] hover:bg-[#C5A880] hover:text-[#122319] text-white flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="Facebook"
                >
                  FB
                </a>
                <a
                  href="https://www.instagram.com/ambuluwawa_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[2px] bg-[#1A3828] hover:bg-[#C5A880] hover:text-[#122319] text-white flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://www.tiktok.com/@ambuluwawa_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[2px] bg-[#1A3828] hover:bg-[#C5A880] hover:text-[#122319] text-white flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="TikTok"
                >
                  TT
                </a>
                <a
                  href="https://www.youtube.com/@Ambuluwawaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[2px] bg-[#1A3828] hover:bg-[#C5A880] hover:text-[#122319] text-white flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="YouTube"
                >
                  YT
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#1C3626] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#86968C] gap-4">
          <div>
            &copy; 2026 Ambuluwawa Bio Diversity Complex. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-white transition-colors cursor-pointer">Visitor Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Eco Conservation Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
