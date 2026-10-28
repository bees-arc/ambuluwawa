"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, ExternalLink, Sparkles } from "lucide-react";

export default function VisitorCreativityVideo() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-[#001229] text-white overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg"
            alt="Ambuluwawa Panoramic View"
            fill
            className="object-cover object-center opacity-40 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001C3D]/65 to-[#001229]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Curved Bento Glass Showcase Container */}
          <div className="bg-[#00142C]/80 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-14 shadow-2xl">
            {/* Circular Glowing Play Button (Exact from ambuluwawa.com) */}
            <div className="mb-8 flex justify-center">
              <button
                onClick={() => setVideoOpen(true)}
                aria-label="Play Ambuluwawa Video"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#004495] hover:bg-[#002D62] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group border-2 border-[#C5A880]/50"
              >
                <div className="absolute inset-0 rounded-full bg-[#004495]/40 animate-ping pointer-events-none" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current text-[#C5A880] ml-1 group-hover:scale-105 transition-transform" />
              </button>
            </div>

            {/* Destination Highlight Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#C5A880] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Global Traveler Perspectives</span>
            </div>

            {/* Exact Text from ambuluwawa.com */}
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#E4EDF7] leading-relaxed max-w-3xl mx-auto mb-8">
              &ldquo;Grasping Ambuluwawa’s splendor poses challenges, yet our visitors skillfully craft personalized narratives through their lenses, creativity, and social media.&rdquo;
            </p>

            {/* Exact Button from ambuluwawa.com */}
            <div>
              <a
                href="https://www.tiktok.com/search?q=ambuluwawa&t=1703687807759"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-btn inline-flex items-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full border border-white/25 shadow-lg transition-all"
              >
                <span>Witness Their Creativity</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Video Popup Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            <div className="flex items-center justify-between p-4 bg-[#001229] text-white border-b border-white/10">
              <span className="font-serif text-lg tracking-wide text-white">Ambuluwawa Cinematic Video</span>
              <button
                onClick={() => setVideoOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/Kryt_dpHtho?autoplay=1"
                title="Ambuluwawa Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
