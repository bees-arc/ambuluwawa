"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, ExternalLink } from "lucide-react";

export default function VisitorCreativityVideo() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-[#0B2545] text-white overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg"
            alt="Ambuluwawa Panoramic View"
            fill
            className="object-cover object-center opacity-30 scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/75 to-[#0B2545]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Section Divider Header (Exact Reference Style) */}
          <div className="flex items-center space-x-4 mb-14 sm:mb-16">
            <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
              VISITOR PERSPECTIVES
            </h2>
            <div className="flex-grow h-[1px] bg-white/20" />
          </div>

          {/* Curved Bento Glass Showcase Container */}
          <div className="bg-[#102F57]/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-14 shadow-2xl">
            {/* Circular Glowing Play Button */}
            <div className="mb-8 flex justify-center">
              <button
                onClick={() => setVideoOpen(true)}
                aria-label="Play Ambuluwawa Video"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#102F57] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 group border-2 border-white/40"
              >
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping pointer-events-none" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current text-[#102F57] ml-1 group-hover:scale-105 transition-transform" />
              </button>
            </div>

            {/* Exact Text from ambuluwawa.com */}
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#FAF7F0] leading-relaxed max-w-3xl mx-auto mb-8">
              &ldquo;Grasping Ambuluwawaâ€™s splendor poses challenges, yet our visitors skillfully craft personalized narratives through their lenses, creativity, and social media.&rdquo;
            </p>

            {/* Exact Button from ambuluwawa.com with solid white pill button */}
            <div>
              <a
                href="https://www.tiktok.com/search?q=ambuluwawa&t=1703687807759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-white hover:bg-[#FAF7F0] text-[#102F57] text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-2xl transition-all hover:scale-105"
              >
                <span>Witness Their Creativity</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#004495]" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Video Popup Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#102F57] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="flex items-center justify-between p-4 bg-[#0B2545] text-white border-b border-white/10">
              <span className="font-serif text-lg tracking-wide text-white">Ambuluwawa Cinematic Video</span>
              <button
                onClick={() => setVideoOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
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
