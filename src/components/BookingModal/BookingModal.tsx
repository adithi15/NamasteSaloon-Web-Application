import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, Layers } from "lucide-react";
import { SERVICES, SPECIALISTS, TIME_SLOTS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";

import type { Service, Specialist, Booking } from "@/src/common/types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: Service | null;
  preselectedSpecialist?: Specialist | null;
  onBookingSuccess?: (booking: Booking) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService = null,
  preselectedSpecialist = null,
  onBookingSuccess
}: BookingModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [specialistId, setSpecialistId] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [notes, setNotes] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Populate preselected values when open
  useEffect(() => {
    if (isOpen) {
      setServiceId(preselectedService?.id || SERVICES[0]?.id || "");
      setSpecialistId(preselectedSpecialist?.id || "any");
      setSuccess(false);
      setErrorMsg("");
    }
  }, [isOpen, preselectedService, preselectedSpecialist]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!customerName.trim()) return setErrorMsg("Name is required");
    if (!customerEmail.trim() || !customerEmail.includes("@")) return setErrorMsg("A valid email is required");
    if (!customerPhone.trim()) return setErrorMsg("Phone number is required");
    if (!date) return setErrorMsg("Please choose an appointment date");
    if (!timeSlot) return setErrorMsg("Please choose a time slot");

    const newBooking = {
      id: "book-" + Math.random().toString(36).substr(2, 9),
      customerName,
      customerEmail,
      customerPhone,
      serviceId,
      specialistId,
      date,
      timeSlot,
      notes,
      status: "confirmed",
      createdAt: new Date().toISOString()
    };

    // Save to LocalStorage
    const existing = localStorage.getItem("namastey_bookings");
    const bookingsList = existing ? JSON.parse(existing) : [];
    bookingsList.push(newBooking);
    localStorage.setItem("namastey_bookings", JSON.stringify(bookingsList));

    // Callback
    if (onBookingSuccess) {
      onBookingSuccess(newBooking);
    }

    // Prepare WhatsApp Message
    const chosenService = SERVICES.find(s => s.id === serviceId)?.name || "Wellness Therapy";
    const chosenSpecialist = specialistId === "any"
      ? "Any Available Healer"
      : SPECIALISTS.find(sp => sp.id === specialistId)?.name || "Spa Healer";

    const whatsappMessage = 
`*NAMASTEY Wellness SPA Reservation*
---------------------------------------
*Client:* ${customerName}
*Phone:* ${customerPhone}
*Email:* ${customerEmail}
*Service:* ${chosenService}
*Practitioner:* ${chosenSpecialist}
*Date:* ${date}
*Time Slot:* ${timeSlot}
${notes ? `*Client Notes:* ${notes}` : ""}
---------------------------------------
Hi concierge! I have submitted this booking on the website and would like to confirm my session.`;

    // Open WhatsApp
    window.open(getWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");

    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-white border border-[#DECBA5]/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col max-h-[min(90vh,90dvh)]"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#022A24] text-white flex justify-between items-center border-b border-[#2D5446]/20 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Calendar className="w-5 h-5 text-[#DECBA5] shrink-0" />
            <h3 className="font-serif text-sm sm:text-base md:text-lg tracking-wider uppercase font-bold text-white truncate">
              Request A Reservation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 bg-[#FAF8F5]">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-[#2D5446] mx-auto" />
              <h4 className="font-serif text-2xl font-bold text-slate-900">
                Reservation Requested!
              </h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed font-semibold">
                Your request has been saved to your local dashboard, and a secure chat link has been opened with our concierge desk on WhatsApp to immediately lock in your slot.
              </p>
              <div className="pt-6">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 border border-red-200 text-xs rounded-xl font-bold">
                  {errorMsg}
                </div>
              )}

              {/* Service Selection */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#2D5446]" /> Select Somatic Treatment
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-white text-slate-850">
                      {s.name} — ${s.price} ({s.durationMinutes} min)
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialist Selection */}
              <div className="space-y-1.5 text-left">
                <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#2D5446]" /> Somatic Healer
                </label>
                <select
                  value={specialistId}
                  onChange={(e) => setSpecialistId(e.target.value)}
                  className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                >
                  <option value="any" className="bg-white text-slate-850">First Available Healer / Clinician</option>
                  {SPECIALISTS.map((sp) => (
                    <option key={sp.id} value={sp.id} className="bg-white text-slate-850">
                      {sp.name} — {sp.specialtyTag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2D5446]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2D5446]" /> Preferred Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                  >
                    <option value="" className="bg-white text-slate-850">Choose Slot</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot} className="bg-white text-slate-850">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-slate-200/60 my-2" />

              {/* Client Info Section */}
              <div className="space-y-3.5 text-left">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#2D5446]" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#2D5446]" /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. you@domain.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#2D5446]" /> WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#2D5446]" /> Health Notes (Optional)
                  </label>
                  <textarea
                    placeholder="E.g. injuries, chronic stiffness, pregnancy, or custom requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full h-20 p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#2D5446] resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold rounded-xl transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
