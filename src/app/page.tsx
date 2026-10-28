"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SanctuaryOverview from "@/components/SanctuaryOverview";
import ExperiencesGrid from "@/components/ExperiencesGrid";
import DistanceCalculator from "@/components/DistanceCalculator";
import TestimonialsElon from "@/components/TestimonialsElon";
import CuratedJournal from "@/components/CuratedJournal";
import GallerySection from "@/components/GallerySection";
import VisitorGuide from "@/components/VisitorGuide";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedExperience, setPreselectedExperience] = useState<string>("Spiral Tower Climb (55m)");

  const handleOpenBooking = (exp?: string) => {
    if (exp) {
      setPreselectedExperience(exp);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#171A18] antialiased selection:bg-[#C5A880]/30 selection:text-[#162F21]">
      {/* Luxury Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Four Seasons Inspired Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onSelectExperience={(exp) => setPreselectedExperience(exp)}
        />

        {/* Sanctuary & 4 Pillars Section */}
        <SanctuaryOverview />

        {/* Curated Experiences (Java Lounge, Pinewood, Adventure Park, Souvenirs) */}
        <ExperiencesGrid onOpenBooking={() => handleOpenBooking()} />

        {/* All Roads Lead to Ambuluwawa (Distance & Route Calculator) */}
        <DistanceCalculator />

        {/* Global Acclaim: Elon Musk & 2,500+ Verified Testimonials */}
        <TestimonialsElon />

        {/* The Ambuluwawa Chronicles (Journal & Blog) */}
        <CuratedJournal />

        {/* High-Resolution Visual Anthology & Lightbox */}
        <GallerySection />

        {/* Visitor Guide, Safety Protocols & Interactive Ticket Calculator */}
        <VisitorGuide onOpenBooking={() => handleOpenBooking()} />

        {/* Guest Feedback & Concierge Inquiries */}
        <FeedbackForm />
      </main>

      {/* Four Seasons Style Luxury Footer */}
      <Footer />

      {/* Mobile Sticky Booking Bar */}
      <StickyBookingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Luxury Reservation & Ticket Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)}
        initialExperience={preselectedExperience}
      />
    </div>
  );
}
