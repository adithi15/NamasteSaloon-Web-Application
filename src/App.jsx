

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, Instagram, ExternalLink, Clock, Sparkles, Star } from "lucide-react";
import { Booking } from "./types.js";
import Header from "./components/Header.jsx"
import BookingModal from "./components/BookingModal.jsx";
import BookingManager from "./components/BookingManager.jsx";
// import ServiceCarousel from "./components/ServiceCarousel.jsx";
import SpecialistSection from "./components/SpecialistSection.jsx";
import { SERVICES } from "./data.js";

// Key for storage persistence
const STORAGE_KEY = "namastey_spa_bookings";

export default function App() {
  // Navigation & Modal Controller State
  const [activeView, setActiveView] = useState("home");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Storage State
  const [bookings, setBookings] = useState([]);
  
  // Selection States for deep modal linking
  const [preselectedService, setPreselectedService] = useState(null);
  const [preselectedSpecialist, setPreselectedSpecialist] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);
  const [catalogCategory, setCatalogCategory] = useState("All");

  // Load and seed localStorage on start
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBookings(parsed.map((b) => Booking.fromJSON(b)));
          return;
        }
      }

      // No bookings in local storage. Let's seed 2 luxury records immediately!
      const tomorrowStr = new Date();
      tomorrowStr.setDate(tomorrowStr.getDate() + 1);
      const tomorrowFormatted = tomorrowStr.toISOString().split("T")[0];

      const seedBookings = [
        new Booking(
          "seed-res-1",
          "Adithya Ankam",
          "adithiankam15@gmail.com",
          "+91 98765 43210",
          "service-10", // Alchemical Sound Bath Ritual
          "spec-3", // Elena Rostova
          tomorrowFormatted,
          "02:00 PM",
          "Prefer a soft neck roller and extra lavender mist during resonance alignment.",
          "confirmed"
        ),
        new Booking(
          "seed-res-2",
          "Sarah Jenkins",
          "sarah.jenkins@somatic.org",
          "+1 (555) 438-2910",
          "service-7", // Ayurvedic Abhyanga Massages
          "spec-1", // Aarya Varma
          tomorrowFormatted,
          "11:00 AM",
          "Allergic to tea tree extract. Please utilize pure organic sesame-ghee blend.",
          "rescheduled"
        )
      ];

      setBookings(seedBookings);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedBookings));
    } catch (err) {
      console.error("Local storage seed failed:", err);
    }
  }, []);

  // Save Bookings to state & localStorage (CRUD: Create/Update interface)
  const handleSaveBooking = (savedBooking) => {
    let updatedList;

    const exists = bookings.findIndex((b) => b.id === savedBooking.id);
    if (exists !== -1) {
      // UPDATE Operation
      updatedList = [...bookings];
      updatedList[exists] = savedBooking;
    } else {
      // CREATE Operation
      updatedList = [savedBooking, ...bookings];
    }

    setBookings(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    setEditingBooking(null);
  };

  // Cancel Booking (CRUD: Delete interface)
  const handleCancelBooking = (bookingId) => {
    const updated = bookings.map((b) => {
      if (b.id === bookingId) {
        b.status = b.status === "cancelled" ? "confirmed" : "cancelled";
      }
      return b;
    });
    setBookings(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // Helper handles booking openings
  const triggerNewBooking = (service, specialist) => {
    setEditingBooking(null);
    setPreselectedService(service || null);
    setPreselectedSpecialist(specialist || null);
    setIsBookingOpen(true);
  };

  const triggerEditBooking = (booking) => {
    setEditingBooking(booking);
    setPreselectedService(null);
    setPreselectedSpecialist(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#EFECE5] to-[#E9E4DB] text-slate-800 relative overflow-x-hidden selection:bg-emerald-100 selection:text-slate-950 font-sans flex flex-col justify-between">
      
      {/* Background ambient glowing spheres for elegant green and cream frosted look */}
      <div className="absolute top-12 right-12 w-[450px] h-[450px] bg-white/50 rounded-full blur-[90px] opacity-75 ambient-glow-1 pointer-events-none" />
      <div className="absolute top-[40%] left-[-80px] w-[500px] h-[500px] bg-[#2D5446]/10 rounded-full blur-[110px] opacity-60 ambient-glow-2 pointer-events-none" />

      {/* Header (Fully Responsive) */}
      <Header
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenBooking={() => triggerNewBooking()}
        activeView={activeView}
      />

      {/* Main Page Layout Wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeView === "home" ? (
            <motion.div
              key="home-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full"
            >
              
              {/* HERO SECTION - Premium Minimalist Layout */}
           {/* HERO SECTION - Premium Minimalist Layout */}
<section className="relative min-h-[100vh] flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    src="/videos/background.mp4"
  />
  {/* Dark overlay so text stays readable */}
  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-10">
                  {/* Hero Title in One Line */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-[Georgia] text-[60px] font-normal italic tracking-[0.16em] text-[#696969] uppercase leading-none select-none text-center whitespace-nowrap"
                  >
                    SELF-CARE MADE SOCIAL
                  </motion.h1>

                  {/* Just a reservation button */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <button
                      onClick={() => triggerNewBooking()}
                      className="px-14 h-[50px] bg-[#F5E9DC] hover:bg-[#F5F5DC] text-[#0D0D0D] font-mono uppercase text-[10px] md:text-xs tracking-[0.25em] rounded-none hover:scale-105 transition-all duration-300 shadow-xl shadow-[#1E3E34]/15 cursor-pointer"
                      id="hero-reservations-button"
                    >
                      Reservations
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* SERVICE CAROUSEL */}
              {/* <ServiceCarousel onSelectService={(s) => triggerNewBooking(s, null)} /> */}

              {/* INTEGRATED FULL CATALOGUE SECTION */}
              {/* <section className="relative py-20 bg-white/20 border-t border-b border-white/40" id="catalog-section">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,84,70,0.03),transparent_60%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
                      <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">SOMATIC TREATMENT DIRECTORY</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
                      Our Healing Menu
                    </h2>
                    <p className="mt-3.5 text-slate-600 text-sm md:text-base font-semibold font-display">
                      Browse all our medical-grade therapies, restoration suites, biometrics and holistic classes. Select any treatment to schedule instantly.
                    </p>
                  </div> */}

                  {/* Elegant Category Filter Pills */}
                  {/* <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
                    {["All", "Tech-Remedies", "Alternative Medicine", "Custom Massages", "Biometric Testing", "Wellness Classes"].map((category) => (
                      <button
                        key={category}
                        onClick={() => setCatalogCategory(category)}
                        className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer ${
                          catalogCategory === category
                            ? "bg-[#1E3E34] text-[#FAF8F5] shadow-lg shadow-[#1E3E34]/10"
                            : "bg-white/60 text-slate-800 border border-white/60 hover:bg-white"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div> */}

                  {/* Directory Grid */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {SERVICES.filter(s => catalogCategory === "All" || s.category === catalogCategory).map((service) => (
                      <div
                        key={service.id}
                        className="bg-white/50 backdrop-blur-md border border-white/60 hover:border-white rounded-3xl p-6 shadow-sm hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#1E3E34] bg-[#2D5446]/10 border border-[#2D5446]/20 px-2.5 py-1 rounded">
                              {service.category}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-[#1C3D2F] font-extrabold font-mono">
                              <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                              <span>{service.rating.toFixed(2)}</span>
                            </div>
                          </div>
                          <h3 className="font-serif text-lg text-slate-900 font-extrabold group-hover:text-[#2D5446] transition-colors mb-2 leading-snug">
                            {service.name}
                          </h3>
                          <p className="text-xs text-slate-600 font-display font-medium leading-relaxed mb-6 line-clamp-3">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <div className="h-[1px] bg-black/5 w-full mb-4" />
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3.5">
                              <div className="flex items-center gap-1 text-slate-500 text-xs font-mono font-semibold">
                                <Clock className="w-3.5 h-3.5 text-[#2D5446]" />
                                <span>{service.durationMinutes} min</span>
                              </div>
                              <span className="text-[#1E3E34] font-black text-base font-mono">
                                ${service.price}
                              </span>
                            </div>
                            <button
                              onClick={() => triggerNewBooking(service, null)}
                              className="px-4 py-2 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-[10px] uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer shadow-sm rounded-xl"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section> */}

              {/* HEALERS SPECIALIST SECTION */}
              <SpecialistSection onSelectSpecialist={(sp) => triggerNewBooking(null, sp)} />

            </motion.div>
          ) : (
            <motion.div
              key="bookings-screen"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="w-full animate-fade"
            >
              {/* CRUD reservation and management area */}
              <BookingManager
                bookings={bookings}
                onEditBooking={triggerEditBooking}
                onCancelBooking={handleCancelBooking}
                onOpenNewBooking={() => triggerNewBooking()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER element */}
      <footer className="bg-white/60 border-t border-white/50 backdrop-blur py-16 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1 */}
          {/* <div className="space-y-4">
            <BrandLogo size="md" className="self-start text-left items-start" />
            <p className="text-[11px] text-slate-600 leading-relaxed font-display font-medium">
              Elevating cellular recovery, sensory re-alignment, and communal heat/cold somatic practice in a premium high-end light frosted space.
            </p>
          </div> */}

          {/* Col 2 */}
          <div className="space-y-3 font-display">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#1E3E34] font-black">Somatic Offerings</h4>
            <ul className="space-y-1.5 text-slate-600 text-[11px] font-mono font-semibold">
              <li>• Guided Cold Contrast Suite</li>
              <li>• Infrared Saunas & Red Light</li>
              <li>• Kinetic Pneumatic Flushes</li>
              <li>• Acupuncture & Peptide Scans</li>
              <li>• Quartz Alignment Sound Bath</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 font-display">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#1E3E34] font-black">ACTIVE CLUBS</h4>
            <ul className="space-y-2 text-slate-600 text-[11px] font-semibold">
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#2D5446]" /> Boston — Back Bay</li>
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#2D5446]" /> Flatiron — NYC</li>
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#2D5446]" /> Soho — NYC</li>
              <li className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#2D5446]" /> West Hollywood — LA</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3 font-display">
            <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#1E3E34] font-black">Sanctuary Hours</h4>
            <p className="text-[11px] leading-relaxed text-slate-600 font-semibold">
              Monday — Saturday: 07:00 AM — 09:30 PM <br />
              Sunday: 08:30 AM — 08:00 PM <br />
              Direct intake: <span className="text-[#1E3E34] font-mono font-bold">concierge@namastey.social</span>
            </p>
            <div className="flex gap-3 text-[#1E3E34] pt-2 shrink-0">
              <Instagram className="w-4 h-4 hover:text-slate-900 transition-colors cursor-pointer" />
              <ExternalLink className="w-4 h-4 hover:text-slate-900 transition-colors cursor-pointer" />
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono font-bold">
          <span>&copy; {new Date().getFullYear()} Namastey Wellness Network Inc. All Rights Reserved.</span>
          <span>Designed with premium hot & cold contrast principles.</span>
        </div>
      </footer>

      {/* MODULAR SCHEDULER WIZARD */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSaveBooking={handleSaveBooking}
        editingBooking={editingBooking}
        initialSelectedService={preselectedService}
        initialSelectedSpecialist={preselectedSpecialist}
      />

    </div>
  );
}
