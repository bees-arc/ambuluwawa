"use client";

import React, { useState } from "react";
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
    <section className="py-20 sm:py-28 bg-[#FBF9F5] text-[#121820] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact from ambuluwawa.com) */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#004495]/10 text-[#004495] text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Visitor Guestbook</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#001C3D] leading-tight mb-4">
            Share Your Feedback &amp; Suggestions
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mb-5 rounded-full" />
          <p className="text-[#516375] text-sm sm:text-base font-light leading-relaxed">
            Help Us Improve the Ambuluwawa Biodiversity Complex Experience for All Visitors
          </p>
        </div>

        {/* Form Card (Bento Style with Curved Edges) */}
        <div className="bg-white rounded-3xl border border-[#DFD5C2] p-8 sm:p-12 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#001C3D] text-[#C5A880] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-light text-[#001C3D] mb-3">
                Thank You for Your Feedback
              </h3>
              <p className="text-sm text-[#5B6D7F] max-w-md mx-auto leading-relaxed mb-6 font-light">
                Your suggestions help us maintain and improve the sanctuary experience for travelers worldwide.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", country: "", phone: "", message: "" });
                }}
                className="fs-btn px-7 py-3 bg-[#001C3D] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-full shadow"
              >
                Send Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#55697D] font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#001C3D] focus:outline-none focus:border-[#004495] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#55697D] font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#001C3D] focus:outline-none focus:border-[#004495] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#55697D] font-bold mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#001C3D] focus:outline-none focus:border-[#004495] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] text-[#55697D] font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#001C3D] focus:outline-none focus:border-[#004495] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.16em] text-[#55697D] font-bold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share your thoughts or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#001C3D] focus:outline-none focus:border-[#004495] transition-colors resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="fs-btn inline-flex items-center space-x-2.5 px-9 py-4 bg-[#004495] hover:bg-[#002D62] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-lg transition-all border border-[#0055BA] disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Submit Feedback"}</span>
                  <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
