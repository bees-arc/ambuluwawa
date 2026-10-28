"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#000D20] text-[#FAF7F0] overflow-hidden">
      {/* Background Scenic Mountain Texture (Exact reference style: pagoda/mountain backdrop) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ambuluwawa.com/wp-content/uploads/2024/01/Ambuluwawa_23-scaled.jpg"
          alt="Ambuluwawa Mountain Background"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000D20] via-[#000D20]/75 to-[#000D20]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Divider Header (Exact Reference Style) */}
        <div className="flex items-center space-x-4 mb-14 sm:mb-16">
          <div className="w-10 sm:w-16 h-[1px] bg-white/30 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-white shrink-0">
            CONTACT &amp; FEEDBACK
          </h2>
          <div className="flex-grow h-[1px] bg-white/20" />
        </div>

        {/* Floating Frosted Glass Form Card (Exact Reference Design Style) */}
        <div className="max-w-2xl bg-[#001229]/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-bold block mb-2">
              Have questions about your visit?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight mb-2">
              Want to visit us, <br />
              <span className="italic font-normal text-[#C5A880]">but still have questions?</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Leave a request or share your feedback. Our team will guide your journey to the summit.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-white/10 text-[#C5A880] flex items-center justify-center mx-auto mb-4 border border-white/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-light text-white mb-2">
                Thank You for Contacting Us
              </h4>
              <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed mb-6 font-light">
                Your message has been received. Our sanctuary concierge will respond promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", country: "", phone: "", message: "" });
                }}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-full border border-white/25 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-white/60 font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-white/60 font-semibold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your contact number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-white/60 font-semibold mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-white/60 font-semibold mb-1.5">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sri Lanka, UK, Germany, etc."
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.18em] text-white/60 font-semibold mb-1.5">
                  Comment or Questions
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you would like to know about visiting..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.05] border border-white/15 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                />
              </div>

              {/* Exact Solid White Pill Send Button from Reference Image */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-10 py-3.5 bg-white hover:bg-[#FAF7F0] text-[#001229] text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-2xl transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>{loading ? "Sending..." : "Send Request"}</span>
                  <Send className="w-3.5 h-3.5 text-[#004495]" />
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
