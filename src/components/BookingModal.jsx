

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, User, Phone, Mail, Check, AlertCircle, Sparkles } from "lucide-react";
import { Booking } from "../types.js";
import { SERVICES, SPECIALISTS, TIME_SLOTS } from "../data.js";

export default function BookingModal({
  isOpen,
  onClose,
  onSaveBooking,
  editingBooking,
  initialSelectedService,
  initialSelectedSpecialist,
}) {
  // Wizard States
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedSpecialistId, setSelectedSpecialistId] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTimeSlot, setBookingTimeSlot] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successState, setSuccessState] = useState(false);

  // Sync state if editing or preselecting
  useEffect(() => {
    if (isOpen) {
      if (editingBooking) {
        setCustomerName(editingBooking.customerName);
        setCustomerEmail(editingBooking.customerEmail);
        setCustomerPhone(editingBooking.customerPhone);
        setSelectedServiceId(editingBooking.serviceId);
        setSelectedSpecialistId(editingBooking.specialistId);
        setBookingDate(editingBooking.date);
        setBookingTimeSlot(editingBooking.timeSlot);
        setNotes(editingBooking.notes);
        setSuccessState(false);
        setErrorMessage("");
      } else {
        // Reset state for new booking
        setCustomerName("");
        setCustomerEmail("");
        setCustomerPhone("");
        setSelectedServiceId(initialSelectedService?.id || SERVICES[0]?.id || "");
        setSelectedSpecialistId(initialSelectedSpecialist?.id || SPECIALISTS[0]?.id || "");
        
        // Default to tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setBookingDate(tomorrow.toISOString().split("T")[0]);
        
        setBookingTimeSlot(TIME_SLOTS[2]); // Default 11:00 AM
        setNotes("");
        setSuccessState(false);
        setErrorMessage("");
      }
    }
  }, [isOpen, editingBooking, initialSelectedService, initialSelectedSpecialist]);

  if (!isOpen) return null;

  // Find info based on selects
  const activeService = SERVICES.find((s) => s.id === selectedServiceId);
  const activeSpecialist = SPECIALISTS.find((sp) => sp.id === selectedSpecialistId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const id = editingBooking ? editingBooking.id : `booking-${Math.random().toString(36).substring(2, 11)}`;
      const status = editingBooking ? "rescheduled" : "confirmed";
      
      const newBookingObj = new Booking(
        id,
        customerName,
        customerEmail,
        customerPhone,
        selectedServiceId,
        selectedSpecialistId,
        bookingDate,
        bookingTimeSlot,
        notes,
        status,
        editingBooking ? editingBooking.createdAt : new Date().toISOString()
      );

      const validationError = newBookingObj.validate();
      if (validationError) {
        setErrorMessage(validationError);
        return;
      }

      onSaveBooking(newBookingObj);
      setSuccessState(true);
      
      // Close modal after success animation delay
      setTimeout(() => {
        setSuccessState(false);
        onClose();
      }, 1500);

    } catch (err) {
      setErrorMessage(err.message || "An unexpected error occurred during reservation.");
    }
  };

  // Prevent selecting past dates
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop transparent blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          id="modal-backdrop-trigger"
        />

        {/* Modal Main frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-white/90 backdrop-blur-md border border-white/60 rounded-3xl shadow-xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          id="booking-form-modal"
        >
          {/* Header element */}
          <div className="p-6 md:p-8 border-b border-black/5 flex items-center justify-between shrink-0 bg-gradient-to-r from-emerald-50/60 to-transparent">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
                <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#1C3D2F] font-black">
                  {editingBooking ? "Somatic Adjustment" : "Somatic Booking"}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 font-extrabold">
                {editingBooking ? "Reschedule Session" : "Reserve Sanctuary Session"}
              </h3>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-6">
            
            {successState ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-16 space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-emerald-700 shadow-sm">
                  <Check className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h4 className="font-serif text-2xl text-slate-900 font-extrabold">
                  {editingBooking ? "Session Rescheduled!" : "Sanctuary Reserved!"}
                </h4>
                <p className="text-[#1C3D2F] text-sm font-mono max-w-sm tracking-wide font-black">
                  Your details have been successfully synchronized. Check your dashboard for active slots.
                </p>
              </motion.div>
            ) : (
              <>
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Grid container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* LEFT: Service & Specialist Select */}
                  <div className="space-y-5">
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#1E3E34] font-black border-b border-black/5 pb-1">
                      1. Treatment Details
                    </h4>

                    {/* Service select */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-select-service" className="text-slate-700 text-xs font-display uppercase tracking-wider font-semibold">
                        Select Healing Treatment
                      </label>
                      <select
                        id="modal-select-service"
                        value={selectedServiceId}
                        onChange={(e) => setSelectedServiceId(e.target.value)}
                        className="w-full bg-white text-slate-900 text-sm border border-slate-200 rounded-xl p-3 focus:outline-none transition-colors font-medium"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-white text-slate-900">
                            {s.name} — ${s.price} ({s.durationMinutes}m)
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Specialist select */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-select-specialist" className="text-slate-700 text-xs font-display uppercase tracking-wider font-semibold">
                        Choose Spa Practitioner Healer
                      </label>
                      <select
                        id="modal-select-specialist"
                        value={selectedSpecialistId}
                        onChange={(e) => setSelectedSpecialistId(e.target.value)}
                        className="w-full bg-white text-slate-900 text-sm border border-slate-200 rounded-xl p-3 focus:outline-none transition-colors font-medium"
                      >
                        {SPECIALISTS.map((s) => (
                          <option key={s.id} value={s.id} className="bg-white text-slate-900">
                            {s.name} — {s.specialtyTag}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Active Selections Summary Card */}
                    {activeService && activeSpecialist && (
                      <div className="p-4 rounded-2xl bg-[#E6EFEA]/80 border border-[#2D5446]/10 space-y-3.5">
                        <div className="flex gap-3 leading-tight">
                          <img
                            src={activeSpecialist.image}
                            alt={activeSpecialist.name}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded-full border border-black/5 object-cover"
                          />
                          <div>
                            <span className="text-[10px] font-mono uppercase text-slate-500 block font-bold">PRACTITIONER IN CHARGE</span>
                            <span className="text-slate-800 text-sm font-extrabold font-display">{activeSpecialist.name}</span>
                            <p className="text-[9px] text-[#2D5446] font-bold">{activeSpecialist.specialtyTag}</p>
                          </div>
                        </div>

                        <div className="h-[1px] bg-black/5 grid" />

                        <div className="flex items-center justify-between text-xs font-mono text-slate-700">
                          <span className="text-slate-500 uppercase text-[9px] font-bold">TOTAL TICKET</span>
                          <span className="text-[#1E3E34] font-black text-base">${activeService.price}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT: Date, Time & Details */}
                  <div className="space-y-5">
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#1E3E34] font-black border-b border-black/5 pb-1">
                      2. Date, Time & Intake Info
                    </h4>

                    {/* Date and Time slots */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-date-input" className="text-slate-700 text-xs font-display uppercase tracking-wider flex items-center gap-1.5 font-bold">
                          <Calendar className="w-3.5 h-3.5 text-[#2D5446]" /> Date
                        </label>
                        <input
                          id="booking-date-input"
                          type="date"
                          min={todayStr}
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full bg-white text-slate-900 text-sm border border-slate-200 rounded-xl p-3 focus:outline-none transition-colors font-medium"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="booking-time-input" className="text-slate-700 text-xs font-display uppercase tracking-wider flex items-center gap-1.5 font-bold">
                          <Clock className="w-3.5 h-3.5 text-[#2D5446]" /> Slot
                        </label>
                        <select
                          id="booking-time-input"
                          value={bookingTimeSlot}
                          onChange={(e) => setBookingTimeSlot(e.target.value)}
                          className="w-full bg-white text-slate-900 text-sm border border-slate-200 rounded-xl p-3 focus:outline-none transition-colors font-medium"
                        >
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot} value={slot} className="bg-white text-slate-900 font-mono">
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Passenger Profile details */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-slate-700 text-xs font-display uppercase tracking-wider font-bold">
                        Client Profile Details
                      </label>

                      {/* Name input */}
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-white text-slate-950 text-sm border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-all font-medium"
                        />
                      </div>

                      {/* Email block */}
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          className="w-full bg-white text-slate-950 text-sm border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-all font-medium"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Your Phone Number"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className="w-full bg-white text-slate-950 text-sm border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-all font-medium"
                        />
                      </div>

                      {/* Intake note */}
                      <div className="relative">
                        <textarea
                          placeholder="Somatic notes, allergies, heat/cold sensitivities (optional)"
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-white text-slate-950 text-sm border border-slate-200 rounded-xl p-3.5 focus:outline-none transition-all resize-none font-medium"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Active Submit button */}
                <div className="pt-6 border-t border-black/5 flex justify-end shrink-0">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-all shadow-md active:scale-95 cursor-pointer text-center"
                    id="submit-booking-action"
                  >
                    {editingBooking ? "Update Reservation" : "Confirm Reservation Tickets"}
                  </button>
                </div>
              </>
            )}

          </form>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
