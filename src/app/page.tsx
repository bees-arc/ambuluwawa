"use client";

import React from "react";
import Hero from "@/components/Hero";
import SiteShell from "@/components/SiteShell";
import SanctuaryOverview from "@/components/SanctuaryOverview";
import TestimonialsElon from "@/components/TestimonialsElon";
import VisitorCreativityVideo from "@/components/VisitorCreativityVideo";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <SanctuaryOverview />
      <TestimonialsElon />
      <VisitorCreativityVideo />
    </SiteShell>
  );
}
