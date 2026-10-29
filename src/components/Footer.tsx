"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Send, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#091D3A] text-[#FAF7F0] pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Background with Ambient Mountain Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg"
          alt="Ambuluwawa Footer Mountain Texture"
          fill
          className="object-cover object-top opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#091D3A]/94" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Row: Logo & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-10 mb-12 border-b border-[#0D2E55] gap-6 text-center sm:text-left">
          <Link href="/" className="flex items-center space-x-3.5">
            <div className="relative w-12 h-12 rounded-full p-1 border border-[#BFD8F0]/50 bg-[#001C3D] flex items-center justify-center">
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
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#BFD8F0] font-medium">
                Bio Diversity Complex
              </div>
            </div>
          </Link>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-full border border-[#143E6F] hover:border-[#BFD8F0] text-xs uppercase tracking-[0.18em] text-[#C2D7ED] hover:text-[#BFD8F0] transition-colors flex items-center space-x-2 bg-[#001C3D]/60"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Column Layout (Exact from ambuluwawa.com) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14 text-xs text-[#B8CEE3]">
          
          {/* Column 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Ambuluwawa Complex
            </h4>
            
            {/* Exact Description from ambuluwawa.com */}
            <p className="font-light leading-relaxed text-[#A4BED9] text-xs sm:text-[13px]">
              Ambuluwawa Tower in Sri Lanka stands out as a striking structure that promises a captivating experience high above the surrounding landscapes.
            </p>

            {/* Exact Contact Details & Address */}
            <div className="space-y-3 font-light pt-2">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#BFD8F0] shrink-0 mt-0.5" />
                <span className="text-[#C5D9ED]">
                  Ambuluwawa Biodiversity Complex, Gampola 20500
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#BFD8F0] shrink-0" />
                <a href="tel:+94712724724" className="hover:text-[#BFD8F0] transition-colors">
                  +94 71 272 4724
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#BFD8F0] shrink-0" />
                <a href="mailto:info@ambuluwawa.com" className="hover:text-[#BFD8F0] transition-colors">
                  Info@ambuluwawa.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) - Exact from ambuluwawa.com */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-light text-xs">
              <li>
                <a href="https://ambuluwawa.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Home</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/gallery/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/tenders" className="hover:text-[#BFD8F0] transition-colors">Tenders</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/notice" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Notices</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/our-team/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Our Team</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information (2 cols) - Exact from ambuluwawa.com */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Information
            </h4>
            <ul className="space-y-2.5 font-light text-xs">
              <li>
                <a href="https://ambuluwawa.com/things-to-do/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Things to do</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/where-to-stay/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Where to stay</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/faq-2/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="https://ambuluwawa.com/weather/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Local Weather</a>
              </li>
              <li>
                <a href="https://hub.ambuluwawa.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-[#BFD8F0] transition-colors">Portal Login</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Community (4 cols) - Exact from ambuluwawa.com */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-white font-normal uppercase tracking-[0.1em] pb-2 border-b border-[#0D2E55]">
              Newsletter
            </h4>
            
            {/* Exact Newsletter Copy from ambuluwawa.com */}
            <p className="font-light leading-relaxed text-[#A4BED9] text-xs">
              Join our community of over global readers who receive emails filled with news, promotions, and other good stuff.
            </p>

            {/* Newsletter Subscription Input */}
            {subscribed ? (
              <div className="p-3 rounded-2xl bg-[#001F42] border border-[#0055BA] text-xs text-[#E5F0FC] flex items-center space-x-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you for joining our global newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-full bg-[#001C3D] border border-[#143E6F] text-xs text-white focus:outline-none focus:border-[#BFD8F0] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#004495] hover:bg-[#002D62] text-white text-xs uppercase tracking-[0.15em] font-semibold transition-all border border-[#0055BA] flex items-center justify-center space-x-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3 text-[#BFD8F0]" />
                </button>
              </form>
            )}

            {/* Social Channels */}
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#BFD8F0] font-semibold mb-2">
                Follow Ambuluwawa
              </div>
              <div className="flex items-center space-x-2.5">
                <a
                  href="https://www.facebook.com/ambuluwawa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold border border-white/10"
                  aria-label="Facebook"
                >
                  FB
                </a>
                <a
                  href="https://www.instagram.com/ambuluwawa_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold border border-white/10"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://www.tiktok.com/@ambuluwawa_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold border border-white/10"
                  aria-label="TikTok"
                >
                  TT
                </a>
                <a
                  href="https://www.youtube.com/@Ambuluwawaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#001C3D] hover:bg-[#004495] text-white flex items-center justify-center transition-colors text-xs font-semibold border border-white/10"
                  aria-label="YouTube"
                >
                  YT
                </a>
              </div>
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
