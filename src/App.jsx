 

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin, Instagram, ExternalLink, Clock, Sparkles, Star, Calendar, MessageSquare, Phone, X, AlertCircle
} from "lucide-react";
import Header from "./components/Header.jsx";
import ServiceCarousel from "./components/ServiceCarousel.jsx";
import SpecialistSection from "./components/SpecialistSection.jsx";
import CatalogSection from "./components/CatalogSection.jsx";
import BookingModal from "./components/BookingModal.jsx";
import BlogSection from "./components/BlogSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import PoliciesSection from "./components/PoliciesSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import MembershipsSection from "./components/MembershipsSection.jsx";
import { SERVICES, SPECIALISTS, BUSINESS_DETAILS } from "./data.js";
import { getWhatsAppUrl } from "./whatsapp.js";

export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [bookingsList, setBookingsList] = useState([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const existing = localStorage.getItem("namastey_bookings");
    if (existing) {
      setBookingsList(JSON.parse(existing));
    }
  }, []);

  const refreshBookings = () => {
    const existing = localStorage.getItem("namastey_bookings");
    if (existing) {
      setBookingsList(JSON.parse(existing));
    }
  };

  const handleOpenBooking = (service = null, specialist = null) => {
    setSelectedService(service);
    setSelectedSpecialist(specialist);
    setBookingModalOpen(true);
  };

  const handleCancelBooking = (bookingId) => {
    const existing = localStorage.getItem("namastey_bookings");
    if (existing) {
      const currentList = JSON.parse(existing);
      const updatedList = currentList.filter(b => b.id !== bookingId);
      localStorage.setItem("namastey_bookings", JSON.stringify(updatedList));
      setBookingsList(updatedList);
    }
  };

  const openWhatsAppGeneral = () => {
    window.open(getWhatsAppUrl("Hi Namastey Wellness Spa! I'd like to ask about your services and memberships."), "_blank", "noopener,noreferrer");
  };

  // Helper to resolve service and specialist names
  const getServiceName = (id) => SERVICES.find(s => s.id === id)?.name || "Somatic Therapy";
  const getSpecialistName = (id) => {
    if (id === "any") return "First Available Practitioner";
    return SPECIALISTS.find(sp => sp.id === id)?.name || "Somatic Practitioner";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#EFECE5] to-[#E9E4DB] text-slate-800 relative overflow-x-hidden selection:bg-emerald-100 selection:text-slate-950 font-sans flex flex-col justify-between pt-20 md:pt-24">
      
      {/* Background ambient glowing spheres for sophisticated medical look */}
      <div className="absolute top-12 right-12 w-[450px] h-[450px] bg-white/50 rounded-full blur-[90px] opacity-75 ambient-glow-1 pointer-events-none" />
      <div className="absolute top-[40%] left-[-80px] w-[500px] h-[500px] bg-[#2D5446]/5 rounded-full blur-[110px] opacity-60 ambient-glow-2 pointer-events-none" />

      {/* Header (Consistent & Streamlined) */}
      <Header
        onNavigate={(view) => setActiveView(view)}
        onOpenBooking={() => handleOpenBooking(null, null)}
        activeView={activeView}
      />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeView === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full"
            >
              {/* HERO SECTION - Premium Minimalist Layout */}
              <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden bg-[#022A24] border-b border-[#2D5446]/20">
                {/* Visual Glass Overlay & Ambient glow over dark background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,84,70,0.15),transparent_75%)] pointer-events-none" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DECBA5]/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-8 md:space-y-12">
                  <div className="space-y-4">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="text-[#DECBA5] text-[10px] md:text-xs tracking-[0.45em] font-mono uppercase font-black"
                    >
                      {BUSINESS_DETAILS.tagline}
                    </motion.span>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="font-serif text-[42px] sm:text-[54px] md:text-[76px] lg:text-[90px] font-normal tracking-[0.16em] text-[#FAF8F5] uppercase leading-tight select-none text-center whitespace-normal"
                    >
                      RESTORATIVE <br />
                      <span className="italic text-[#DECBA5] font-light">Somatic Calm</span>
                    </motion.h1>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-[#FAF8F5]/80 max-w-xl text-xs md:text-sm font-display font-medium leading-relaxed"
                  >
                    Welcome to Charni Road&apos;s award-winning thermal contrast suite. Experience cell rejuvenation via hyperbaric oxygen chambers, clinical bio-scans, and holistic botanical massages.
                  </motion.p>

                  {/* Just a reservation button */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <button
                      onClick={() => handleOpenBooking(null, null)}
                      className="px-14 h-[50px] bg-[#FAF8F5] hover:bg-[#DECBA5] text-[#1E3E34] font-mono uppercase text-[10px] md:text-xs tracking-[0.25em] rounded-none hover:scale-105 transition-all duration-300 shadow-xl shadow-[#022A24]/40 cursor-pointer font-bold"
                    >
                      Reservations
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* SERVICE CAROUSEL */}
              <ServiceCarousel onSelectService={(s) => handleOpenBooking(s, null)} />

              {/* WHY SPA / HEALERS SECTION PREVIEW */}
              <SpecialistSection onSelectSpecialist={(sp) => handleOpenBooking(null, sp)} />

              {/* MEMBERSHIPS AND PRICING PREVIEW */}
              <MembershipsSection onSelectPlan={(plan) => handleOpenBooking(null, null)} />

              {/* TESTIMONIALS PREVIEW */}
              <TestimonialsSection />
            </motion.div>
          )}

          {activeView === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <CatalogSection onSelectService={(s) => handleOpenBooking(s, null)} />
            </motion.div>
          )}

          {activeView === "why-spa" && (
            <motion.div
              key="why-spa"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-[#022A24] text-[#FAF8F5] py-16 text-center border-b border-[#2D5446]/20">
                <div className="max-w-3xl mx-auto px-4 space-y-4">
                  <span className="text-[#DECBA5] text-[10px] tracking-[0.3em] font-mono uppercase font-black block">Est. {BUSINESS_DETAILS.yearEstablished}</span>
                  <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-wider uppercase">Somatic Practitioners</h1>
                  <p className="text-[#FAF8F5]/80 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
                    Learn about our leading medical sports scientists, Ayurvedic physicians, and audio resonance therapists committed to your systemic alignment.
                  </p>
                </div>
              </div>
              <SpecialistSection onSelectSpecialist={(sp) => handleOpenBooking(null, sp)} />
            </motion.div>
          )}

          {activeView === "memberships" && (
            <motion.div
              key="memberships"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <MembershipsSection onSelectPlan={() => handleOpenBooking(null, null)} />
            </motion.div>
          )}

          {activeView === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <BlogSection />
            </motion.div>
          )}

          {activeView === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <ContactSection />
              <PoliciesSection />
            </motion.div>
          )}

          {activeView === "bookings" && (
            <motion.div
              key="bookings"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="py-16 md:py-24 px-4 max-w-4xl mx-auto text-left"
            >
              <div className="space-y-8">
                <div className="border-b border-black/5 pb-6">
                  <h1 className="font-serif text-3xl md:text-4xl text-slate-900 font-extrabold tracking-wide uppercase">
                    My Reservations
                  </h1>
                  <p className="text-slate-600 text-xs md:text-sm mt-1 font-display font-semibold">
                    Review, manage, or cancel your upcoming premium wellness bookings. All details are saved locally in your browser.
                  </p>
                </div>

                {bookingsList.length === 0 ? (
                  <div className="text-center py-16 bg-white/40 backdrop-blur-sm border border-[#DECBA5]/30 p-8 rounded-3xl space-y-5">
                    <AlertCircle className="w-12 h-12 text-[#2D5446]/60 mx-auto" />
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-bold text-slate-900">No Reservations Found</h3>
                      <p className="text-slate-600 text-xs font-display font-medium max-w-md mx-auto">
                        You do not currently have any active session bookings. Click below to schedule a contrast thermal cycle or custom herbal massage.
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenBooking(null, null)}
                      className="px-6 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-[#FAF8F5] text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl"
                    >
                      Book A Session
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookingsList.map((book) => (
                      <div
                        key={book.id}
                        className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 p-6 rounded-2xl flex flex-col justify-between hover:border-[#DECBA5]/50 transition-colors shadow-sm"
                      >
                        <div className="space-y-3.5">
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#DECBA5] bg-[#DECBA5]/10 border border-[#DECBA5]/20 px-2.5 py-1 rounded">
                              Confirmed Session
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 font-bold">
                              ID: {book.id}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h3 className="font-serif text-base text-slate-900 font-extrabold">
                              {getServiceName(book.serviceId)}
                            </h3>
                            <p className="text-xs text-slate-600 font-display font-semibold">
                              Practitioner: {getSpecialistName(book.specialistId)}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-700 bg-slate-50/60 rounded-xl p-3 border border-black/5">
                            <div className="flex flex-col">
                              <span className="text-[9px] text-slate-400 font-bold uppercase">DATE</span>
                              <span className="font-bold text-slate-800">{book.date}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[9px] text-slate-400 font-bold uppercase">TIME SLOT</span>
                              <span className="font-bold text-slate-800">{book.timeSlot}</span>
                            </div>
                          </div>

                          {book.notes && (
                            <p className="text-xs text-slate-600 italic bg-white/40 p-2 rounded-lg border border-[#DECBA5]/20 line-clamp-2">
                              &ldquo;{book.notes}&rdquo;
                            </p>
                          )}
                        </div>

                        <div className="pt-4 mt-4 border-t border-black/5 flex gap-4">
                          <button
                            onClick={() => handleCancelBooking(book.id)}
                            className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-red-600 hover:bg-red-50 border border-transparent rounded-lg transition-colors cursor-pointer"
                          >
                            Cancel Slot
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER element */}
      <footer className="bg-[#022A24] border-t border-[#2D5446]/20 py-16 text-[#FAF8F5]/80 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <span className="font-serif text-lg tracking-[0.25em] font-semibold text-white leading-none block">
              NAMASTEY
            </span>
            <p className="text-[11px] text-[#DECBA5] leading-relaxed font-display font-medium">
              Elevating cellular recovery, sensory re-alignment, and communal heat/cold somatic practice in a premium high-end light frosted space.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3 font-display">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">Somatic Offerings</h4>
            <ul className="space-y-1.5 text-[#FAF8F5]/80 text-[11px] font-mono font-semibold">
              <li>• Guided Cold Contrast Suite</li>
              <li>• Infrared Saunas & Red Light</li>
              <li>• Kinetic Pneumatic Flushes</li>
              <li>• Acupuncture & Peptide Scans</li>
              <li>• Quartz Alignment Sound Bath</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 font-display">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">ACTIVE CLUBS</h4>
            <ul className="space-y-2 text-[#FAF8F5]/80 text-[11px] font-semibold">
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#DECBA5]" /> Charni Road</li>
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#DECBA5]" /> Mumbai Central</li>
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#DECBA5]" /> Vashi</li>
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#DECBA5]" /> Andheri</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3 font-display">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">Sanctuary Hours</h4>
            <p className="text-[11px] leading-relaxed text-[#FAF8F5]/80 font-semibold">
              Monday — Saturday: 07:00 AM — 09:30 PM <br />
              Sunday: 08:30 AM — 08:00 PM <br />
              Direct intake: <span className="text-white font-mono font-bold">{BUSINESS_DETAILS.email}</span>
            </p>
            <div className="flex gap-3 text-[#DECBA5] pt-2 shrink-0">
              <a href={BUSINESS_DETAILS.instagram} target="_blank" rel="noreferrer">
                <Instagram className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href={BUSINESS_DETAILS.facebook} target="_blank" rel="noreferrer">
                <ExternalLink className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#2D5446]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-200/50 font-mono font-bold">
          <span>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name} Inc. All Rights Reserved.</span>
          <span>Designed with premium hot & cold contrast principles.</span>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON - Requested Extra Feature */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <div className="absolute right-0 bottom-full mb-2 bg-[#022A24] text-[#FAF8F5] text-[10px] font-mono font-bold uppercase tracking-wider py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-[#2D5446]/20">
          Chat With Concierge
        </div>
        <button
          onClick={openWhatsAppGeneral}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative cursor-pointer"
          aria-label="Contact via WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
          <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
        </button>
      </div>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={selectedService}
        preselectedSpecialist={selectedSpecialist}
        onBookingSuccess={refreshBookings}
      />

    </div>
  );
}
