"use client";

import React, { useState } from "react";
import { X, Calendar, Users, Compass, CheckCircle2, CreditCard, ExternalLink, ShieldCheck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperience?: string;
}

export default function BookingModal({ isOpen, onClose, initialExperience }: BookingModalProps) {
  const [experience, setExperience] = useState(initialExperience || "Spiral Tower Climb (55m)");
  const [date, setDate] = useState("2026-10-28");
  const [timeSlot, setTimeSlot] = useState("08:00 AM â€“ 10:00 AM (Morning Mist)");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [residentType, setResidentType] = useState<"local" | "foreign">("local");
  const [step, setStep] = useState<"select" | "confirmed">("select");

  React.useEffect(() => {
    setDate(new Date().toISOString().split("T")[0]);
  }, []);

  if (!isOpen) return null;

  const pricePerAdult = residentType === "local" ? 100 : 2000;
  const pricePerChild = residentType === "local" ? 50 : 1000;
  const total = adults * pricePerAdult + children * pricePerChild;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-[4px] border border-[#D5CBB8] shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#162F21] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#234834]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#BFD8F0] block mb-0.5">
              Sanctuary Ticketing &amp; Reservations
            </span>
            <h3 className="font-serif text-2xl font-light">
              Reserve Your Ambuluwawa Visit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {step === "confirmed" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#162F21] text-[#BFD8F0] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-3xl font-light text-[#162F21] mb-2">
                Reservation Confirmed
              </h4>
              <p className="text-xs sm:text-sm text-[#5B6B62] font-light max-w-md mx-auto mb-6">
                Your reservation details for <strong className="text-[#162F21]">{date}</strong> ({timeSlot}) have been noted. 
                Please proceed to present your voucher at the entrance or complete payment at our digital ticketing turnstile.
              </p>

              <div className="bg-[#FAF7F0] p-4 rounded-[3px] border border-[#E5DAC6] max-w-sm mx-auto mb-6 text-left text-xs text-[#162F21]">
                <div className="flex justify-between py-1 border-b border-[#E5DAC6]/60">
                  <span className="text-[#6D7D74]">Experience:</span>
                  <span className="font-semibold">{experience}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5DAC6]/60">
                  <span className="text-[#6D7D74]">Category:</span>
                  <span className="font-semibold">{residentType === "local" ? "Sri Lankan Resident" : "International Visitor"}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5DAC6]/60">
                  <span className="text-[#6D7D74]">Party Size:</span>
                  <span className="font-semibold">{adults} Adult(s), {children} Child(ren)</span>
                </div>
                <div className="flex justify-between py-1 text-sm font-bold text-[#162F21]">
                  <span>Total Tariff:</span>
                  <span>LKR {total.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://prod-ambuluwawa-main-web.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fs-btn w-full sm:w-auto px-6 py-3 bg-[#162F21] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[3px] flex items-center justify-center space-x-2"
                >
                  <span>Official Online Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#BFD8F0]" />
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 border border-[#BFD8F0] text-[#162F21] text-xs uppercase tracking-[0.18em] font-medium rounded-[3px]"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-6">
              
              {/* Resident Type Switcher */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                  Visitor Classification *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setResidentType("local")}
                    className={`py-3 px-4 rounded-[3px] border text-left text-xs font-semibold transition-all ${
                      residentType === "local"
                        ? "bg-[#162F21] text-white border-[#162F21]"
                        : "bg-[#FAF7F0] text-[#55635B] border-[#DDD4C3] hover:border-[#BFD8F0]"
                    }`}
                  >
                    <div>Sri Lankan Resident</div>
                    <div className="text-[10px] font-normal opacity-80">LKR 100 / Adult</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setResidentType("foreign")}
                    className={`py-3 px-4 rounded-[3px] border text-left text-xs font-semibold transition-all ${
                      residentType === "foreign"
                        ? "bg-[#162F21] text-white border-[#162F21]"
                        : "bg-[#FAF7F0] text-[#55635B] border-[#DDD4C3] hover:border-[#BFD8F0]"
                    }`}
                  >
                    <div>International Traveler</div>
                    <div className="text-[10px] font-normal opacity-80">LKR 2,000 / Adult (~$6.50)</div>
                  </button>
                </div>
              </div>

              {/* Experience selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                  Preferred Experience *
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#BFD8F0]"
                >
                  <option value="Spiral Tower Climb (55m)">Spiral Tower Climb (55m)</option>
                  <option value="Biodiversity Nature Trail">Biodiversity Nature Trail &amp; Flora</option>
                  <option value="Java Lounge Mountain Vista">Java Lounge Mountain Vista &amp; Coffee</option>
                  <option value="Pinewood Restaurant Dining">Pinewood Restaurant Dining Retreat</option>
                  <option value="Adventure Park & Zipline">Adventure Park &amp; Zipline Expedition</option>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                    Date of Visit *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#BFD8F0]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#718077] font-semibold mb-2">
                    Arrival Time Window *
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-[3px] bg-[#FAF7F0] border border-[#DDD4C3] text-sm text-[#181B19] focus:outline-none focus:border-[#BFD8F0]"
                  >
                    <option value="07:30 AM â€“ 10:00 AM (Early Calm)">07:30 AM â€“ 10:00 AM (Early Calm)</option>
                    <option value="10:00 AM â€“ 01:00 PM (Midday Sun)">10:00 AM â€“ 01:00 PM (Midday Sun)</option>
                    <option value="01:00 PM â€“ 03:30 PM (Afternoon Mist)">01:00 PM â€“ 03:30 PM (Afternoon Mist)</option>
                    <option value="03:30 PM â€“ 05:30 PM (Golden Sunset)">03:30 PM â€“ 05:30 PM (Golden Sunset)</option>
                  </select>
                </div>
              </div>

              {/* Adults & Children Counters */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#FAF7F0] rounded-[3px] border border-[#E5DAC6] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#162F21]">Adults</div>
                    <div className="text-[10px] text-[#738278]">Age 12+</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded bg-white border border-[#DDD4C3] flex items-center justify-center font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="font-serif text-base font-bold text-[#162F21] w-5 text-center">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-7 h-7 rounded bg-white border border-[#DDD4C3] flex items-center justify-center font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF7F0] rounded-[3px] border border-[#E5DAC6] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#162F21]">Children</div>
                    <div className="text-[10px] text-[#738278]">Under 12</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded bg-white border border-[#DDD4C3] flex items-center justify-center font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="font-serif text-base font-bold text-[#162F21] w-5 text-center">
                      {children}
                    </span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-7 h-7 rounded bg-white border border-[#DDD4C3] flex items-center justify-center font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price summary & checkout trigger */}
              <div className="pt-4 border-t border-[#E8DEC9] flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#718077]">Estimated Total</div>
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#162F21]">
                    LKR {total.toLocaleString()}
                  </div>
                </div>

                <button
                  type="submit"
                  className="fs-btn px-6 py-3.5 bg-[#BFD8F0] hover:bg-[#DCEBF8] text-[#122319] text-xs uppercase tracking-[0.18em] font-semibold rounded-[3px] shadow flex items-center space-x-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Confirm Reservation</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
