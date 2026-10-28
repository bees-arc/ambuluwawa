"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

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
    }, 1000);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] text-[#171A18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A08055] font-semibold block mb-3">
            Guest Concierge &amp; Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#162F21] leading-tight mb-5">
            Share Your Experience <br />
            <span className="italic font-normal">&amp; Special Inquiries</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mb-6" />
          <p className="text-[#5B6B62] text-sm sm:text-base font-light leading-relaxed">
            Whether coordinating special filming, VIP tours, wedding photography, 
            or providing feedback from your climb, our sanctuary team is at your service.
          </p>
        </div>

        {/* 2-Column Luxury Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Concierge Contacts & Info */}
          <div className="lg:col-span-5 bg-[#162F21] text-[#FAF7F0] rounded-[4px] border border-[#274B36] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-6 flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Sanctuary Secretariat</span>
              </div>

              <h3 className="font-serif text-3xl font-light text-white mb-4">
                We Welcome Your Presence
              </h3>
              <p className="text-sm text-[#C6D4CB] font-light leading-relaxed mb-8">
                Ambuluwawa Biodiversity Complex is dedicated to preserving Sri Lanka’s endemic ecology while extending world-class hospitality to global travelers.
              </p>

              <div className="space-y-6 text-sm text-[#E2DACB]">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-[2px] bg-[#234834] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#A6B8AC]">Telephone Inquiries</div>
                    <a href="tel:+94712724724" className="text-white hover:text-[#C5A880] transition-colors font-medium">
                      +94 71 272 4724
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-[2px] bg-[#234834] text-[#C5A880] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#A6B8AC]">Electronic Correspondence</div>
                    <a href="mailto:info@ambuluwawa.com" className="text-white hover:text-[#C5A880] transition-colors font-medium">
                      info@ambuluwawa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-[2px] bg-[#234834] text-[#C5A880] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-[#A6B8AC]">Location</div>
                    <span className="text-white font-medium">
                      Ambuluwawa Peak, Gampola, Central Province, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#2A4E39] text-xs text-[#A6B8AC]">
              Open Every Day • 07:30 AM to 05:30 PM
            </div>
          </div>

          {/* Right Column: Refined Four Seasons Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[4px] border border-[#E4DC shatter #E4DCCB] border-[#E4DCCB] p-8 sm:p-10 fs-card-shadow flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#162F21] text-[#C5A880] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#162F21] mb-3">
                  Thank You for Writing to Us
                </h3>
                <p className="text-sm text-[#5B6B62] max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Your message has reached our sanctuary concierge. We appreciate your valuable suggestions and will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", country: "", phone: "", message: "" });
                  }}
                  className="fs-btn px-6 py-2.5 bg-[#162F21] text-[#FAF7F0] text-xs uppercase tracking-[0.16em] font-medium rounded-[3px]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sri Lanka, United Kingdom, USA"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 7X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                    Message / Feedback / Visit Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your planned visit or share observations from your recent climb..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="fs-btn w-full py-4 bg-[#162F21] hover:bg-[#234834] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-semibold rounded-[3px] shadow transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 text-[#C5A880]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
