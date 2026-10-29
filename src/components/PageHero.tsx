import React from "react";
import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  position?: string;
}

/** Calm morning scenery hero used on every inner page (Sanctuary style). */
export default function PageHero({ eyebrow, title, subtitle, image, position = "center" }: PageHeroProps) {
  return (
    <section className="relative min-h-[78vh] flex items-end overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        quality={90}
        className="object-cover"
        style={{ objectPosition: position }}
      />
      {/* Misty morning wash fading into navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/55 via-[#DCEBF8]/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/45 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-40">
        <div className="inline-flex items-center space-x-3 mb-5">
          <span className="w-10 h-[1px] bg-white/60" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#DCEBF8] font-semibold">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light uppercase tracking-[0.12em] text-white leading-none drop-shadow-[0_10px_30px_rgba(11,37,69,0.6)]">
          {title}
        </h1>
        <p className="font-serif italic text-lg sm:text-2xl text-white/90 mt-5 max-w-2xl font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
