"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpeningInfoSection from "@/components/OpeningInfoSection";
import SanctuaryOverview from "@/components/SanctuaryOverview";
import ExperiencesGrid from "@/components/ExperiencesGrid";
import TestimonialsElon from "@/components/TestimonialsElon";
import DistanceCalculator from "@/components/DistanceCalculator";
import VisitorCreativityVideo from "@/components/VisitorCreativityVideo";
import CuratedJournal from "@/components/CuratedJournal";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#121820] antialiased selection:bg-[#004495]/20 selection:text-[#001C3D]">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Four Seasons Inspired) */}
        <Hero />

        {/* 3. Opening Hours & Directions Card */}
        <OpeningInfoSection />

        {/* 4. Leave the World Below & 4 Pillars + "Did You Know That" */}
        <SanctuaryOverview />

        {/* 5. Find Adventure & Expedition Beyond the Tower (Java Lounge, Souvenirs, Adventure Park, Pinewood) */}
        <ExperiencesGrid />

        {/* 6. From Billionaires to Backpackers (Ambuluwawa Welcomes All - Elon Musk & Reviews) */}
        <TestimonialsElon />

        {/* 7. All Roads Lead to Ambuluwawa (Distance & Route Explorer) */}
        <DistanceCalculator />

        {/* 8. Video & Witness Their Creativity */}
        <VisitorCreativityVideo />

        {/* 9. Blog / Don't Let Your Curiosity Go Unanswered */}
        <CuratedJournal />

        {/* 10. Share Your Feedback & Suggestions */}
        <FeedbackForm />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Mobile Sticky Quick Action Bar */}
      <StickyBookingBar />
    </div>
  );
}
