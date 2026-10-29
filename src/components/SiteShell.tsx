import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B2545] text-[#FAF7F0] antialiased selection:bg-[#BFD8F0]/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyBookingBar />
    </div>
  );
}
