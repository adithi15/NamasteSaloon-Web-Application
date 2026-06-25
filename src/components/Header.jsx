 

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ChevronDown, Calendar, Sparkles, MapPin, Layers, Award
} from "lucide-react";
import BrandLogo from "./BrandLogo.jsx";

export default function Header({ onNavigate, onOpenBooking, activeView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change background transparency
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navMenuItems = {
    locations: ["Charni Road", "Mumbai Central", "Vashi", "Andheri"],
    offerings: ["Tech-Remedies", "Alternative Medicine", "Custom Massages", "Biometric Testing", "Wellness Classes"],
    memberships: ["Somatic Day Pass", "Acoustic Tier", "Pranayama Club", "Universal VIP"]
  };

  const handleNavClick = (viewName) => {
    onNavigate(viewName);
    setHoveredDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dropdownTransition = { duration: 0.35, ease: "easeOut" };

  const dropdownBase = `absolute top-full left-0 right-0 w-full backdrop-blur-2xl border-b border-[#2D5446]/20 shadow-2xl text-[#FAF8F5] overflow-hidden ${
    scrolled ? "bg-[#022A24]/95" : "bg-[#022A24]"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full text-[#FAF8F5] transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#022A24]/95 backdrop-blur shadow-lg border-b border-[#2D5446]/20"
          : "bg-[#022A24] shadow-md border-b border-[#2D5446]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Left: Brand Logo & Title */}
        <div
          onClick={() => handleNavClick("home")}
          className="cursor-pointer group flex items-center"
          id="header-brand-trigger"
        >
          <BrandLogo />
        </div>

        {/* Center: Desktop Navigation Links with Mega-dropdown triggers */}
        <nav
          className="hidden lg:flex items-center gap-8 text-[11px] font-display tracking-widest uppercase text-[#FAF8F5]/90"
          id="desktop-navbar"
        >
          <button
            onClick={() => handleNavClick("home")}
            className={`hover:text-white transition-colors duration-300 focus:outline-none font-bold cursor-pointer py-8 relative ${
              activeView === "home" ? "text-white" : "text-[#FAF8F5]/80"
            }`}
          >
            Home
            {activeView === "home" && (
              <motion.span layoutId="activeNavLine" className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]" />
            )}
          </button>

          {/* LOCATIONS Dropdown */}
          <div
            className="relative py-8"
            onMouseEnter={() => setHoveredDropdown("locations")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none font-bold cursor-pointer">
              <span>Locations</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#A1CBB4] transition-transform duration-300 ${
                  hoveredDropdown === "locations" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* OFFERINGS Dropdown */}
          <div
            className="relative py-8"
            onMouseEnter={() => setHoveredDropdown("offerings")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button
              onClick={() => handleNavClick("services")}
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none font-bold cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#A1CBB4] transition-transform duration-300 ${
                  hoveredDropdown === "offerings" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* MEMBERSHIPS Dropdown */}
          <div
            className="relative py-8"
            onMouseEnter={() => setHoveredDropdown("memberships")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button
              onClick={() => handleNavClick("memberships")}
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none font-bold cursor-pointer"
            >
              <span>Memberships</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#A1CBB4] transition-transform duration-300 ${
                  hoveredDropdown === "memberships" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => handleNavClick("why-spa")}
            className={`hover:text-white transition-colors duration-300 focus:outline-none font-bold cursor-pointer py-8 relative ${
              activeView === "why-spa" ? "text-white" : "text-[#FAF8F5]/80"
            }`}
          >
            Spa Healers
            {activeView === "why-spa" && (
              <motion.span layoutId="activeNavLine" className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick("blog")}
            className={`hover:text-white transition-colors duration-300 focus:outline-none font-bold cursor-pointer py-8 relative ${
              activeView === "blog" ? "text-white" : "text-[#FAF8F5]/80"
            }`}
          >
            Blog
            {activeView === "blog" && (
              <motion.span layoutId="activeNavLine" className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]" />
            )}
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`hover:text-white transition-colors duration-300 focus:outline-none font-bold cursor-pointer py-8 relative ${
              activeView === "contact" ? "text-white" : "text-[#FAF8F5]/80"
            }`}
          >
            Contact
            {activeView === "contact" && (
              <motion.span layoutId="activeNavLine" className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]" />
            )}
          </button>

            {/* <button
              onClick={() => handleNavClick("bookings")}
              className={`hover:text-white transition-colors duration-300 focus:outline-none font-bold cursor-pointer py-8 relative ${
                activeView === "bookings" ? "text-white" : "text-[#FAF8F5]/80"
              }`}
            >
              Reservations
              {activeView === "bookings" && (
                <motion.span layoutId="activeNavLine" className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]" />
              )}
            </button> */}
        </nav>

        {/* Right Action buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#DECBA5] text-[#1E3E34] hover:bg-white px-6 py-2.5 rounded-none font-semibold shadow-md hover:scale-105 transition-all duration-300 text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer font-bold"
          >
            <Calendar className="w-4 h-4 text-[#1E3E34]" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#DECBA5] text-[#1E3E34] p-2.5 rounded-none shadow-md active:scale-95 transition-transform cursor-pointer font-bold"
            aria-label="Quick Reserve"
          >
            <Calendar className="w-4 h-4 text-[#1E3E34]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-2.5 text-white hover:text-[#DECBA5] focus:outline-none cursor-pointer transform hover:scale-105 transition-transform"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* FULL-WIDTH DESKTOP MEGA DROPDOWN */}
      <AnimatePresence>
        {hoveredDropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={dropdownTransition}
            className={`hidden lg:block ${dropdownBase}`}
            onMouseEnter={() => setHoveredDropdown(hoveredDropdown)}
            onMouseLeave={() => setHoveredDropdown(null)}
            id="desktop-mega-dropdown"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {hoveredDropdown === "locations" && (
                <div className="grid grid-cols-4 gap-8 text-left">
                  <div className="col-span-1 border-r border-[#2D5446]/25 pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#DECBA5] uppercase font-black flex items-center gap-1.5 mb-2">
                      <MapPin className="w-3.5 h-3.5" /> SELECT A CLUB
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white mb-2">Urban Sanctuaries</h4>
                    <p className="text-[11px] text-[#FAF8F5]/70 leading-relaxed font-semibold">
                      Handcrafted physical wellness suites, diagnostic consultation labs, and holistic thermal therapy rooms across Mumbai.
                    </p>
                  </div>
                  <div className="col-span-3 grid grid-cols-4 gap-4">
                    {navMenuItems.locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => handleNavClick("contact")}
                        className="p-5 rounded-2xl bg-white/5 border border-transparent hover:border-[#DECBA5]/30 hover:bg-white/10 text-left transition-all group cursor-pointer animate-fadeIn"
                      >
                        <span className="text-xs font-bold text-white group-hover:text-[#DECBA5] transition-colors block uppercase tracking-wider">{loc} Club</span>
                        <span className="text-[9px] text-[#FAF8F5]/60 mt-2 block font-mono leading-none">Luxury Healing Center</span>
                        <span className="text-[9px] text-[#DECBA5] mt-1.5 block font-display tracking-wide uppercase font-black">View Details &rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hoveredDropdown === "offerings" && (
                <div className="grid grid-cols-4 gap-8 text-left">
                  <div className="col-span-1 border-r border-[#2D5446]/25 pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#DECBA5] uppercase font-black flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5" /> SERVICES DIRECTORY
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white mb-2">Somatic Practices</h4>
                    <p className="text-[11px] text-[#FAF8F5]/70 leading-relaxed font-semibold">
                      Dive into clinically analytical somatic remedies, metabolic recovery mechanisms, and physiological wellness theories.
                    </p>
                  </div>
                  <div className="col-span-3 grid grid-cols-3 gap-4">
                    {navMenuItems.offerings.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleNavClick("services")}
                        className="p-4 rounded-2xl bg-white/5 border border-transparent hover:border-[#DECBA5]/30 hover:bg-white/10 text-left transition-all group cursor-pointer animate-fadeIn"
                      >
                        <span className="text-xs font-bold text-white group-hover:text-[#DECBA5] transition-colors block uppercase tracking-wider">{cat}</span>
                        <span className="text-[9px] text-[#FAF8F5]/60 mt-1.5 block font-mono leading-none">Clinical Somatics</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hoveredDropdown === "memberships" && (
                <div className="grid grid-cols-4 gap-8 text-left">
                  <div className="col-span-1 border-r border-[#2D5446]/25 pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#DECBA5] uppercase font-black flex items-center gap-1.5 mb-2">
                      <Award className="w-3.5 h-3.5" /> COMMITMENTS & PASSES
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white mb-2">Club Memberships</h4>
                    <p className="text-[11px] text-[#FAF8F5]/70 leading-relaxed font-semibold">
                      Join any of our local clubs to secure permanent slots, unlock premium wellness suites, and consult with somatic specialists.
                    </p>
                  </div>
                  <div className="col-span-3 grid grid-cols-4 gap-4">
                    {navMenuItems.memberships.map((mem) => (
                      <button
                        key={mem}
                        onClick={() => handleNavClick("memberships")}
                        className="p-5 rounded-2xl bg-white/5 border border-transparent hover:border-[#DECBA5]/30 hover:bg-white/10 text-left transition-all group cursor-pointer animate-fadeIn"
                      >
                        <span className="text-xs font-bold text-white group-hover:text-[#DECBA5] transition-colors block uppercase tracking-wider">{mem}</span>
                        <span className="text-[9px] text-[#FAF8F5]/60 mt-2 block font-mono leading-none">All-Inclusive Passes</span>
                        <span className="text-[9px] text-[#DECBA5] mt-1.5 block font-display tracking-wide uppercase font-black">Explore Tier &rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drop-down with clean anims and full visual options */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#022A24] border-b border-[#2D5446]/20 shadow-2xl overflow-hidden"
            id="mobile-dropdown-menu"
          >
            <div className="p-6 flex flex-col gap-5 text-sm uppercase tracking-widest font-display text-white/90">
              <div className="flex flex-col gap-2 pb-4 border-b border-[#2D5446]/20">
                <span className="text-[9px] font-extrabold text-[#DECBA5] tracking-[0.2em]">
                  Quick Paths
                </span>
                <button
                  onClick={() => handleNavClick("home")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5]"
                >
                  <span>Home Studio</span>
                  <Sparkles className="w-4 h-4 text-[#DECBA5]" />
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5]"
                >
                  <span>Our Somatic Services</span>
                  <Layers className="w-4 h-4 text-[#DECBA5]" />
                </button>
                <button
                  onClick={() => handleNavClick("memberships")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5]"
                >
                  <span>Memberships & Pricing</span>
                  <Award className="w-4 h-4 text-[#DECBA5]" />
                </button>
                <button
                  onClick={() => handleNavClick("why-spa")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5]"
                >
                  <span>Our Spa Healers</span>
                  <Sparkles className="w-4 h-4 text-[#DECBA5]" />
                </button>
                <button
                  onClick={() => handleNavClick("blog")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5]"
                >
                  <span>Wellness Blog</span>
                  <Sparkles className="w-4 h-4 text-[#DECBA5]" />
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5]"
                >
                  <span>Contact & FAQ</span>
                  <Sparkles className="w-4 h-4 text-[#DECBA5]" />
                </button>
                <button
                  onClick={() => handleNavClick("bookings")}
                  className="w-full text-left py-2 font-bold flex items-center justify-between hover:text-[#DECBA5] text-white/90 transition-colors"
                >
                  <span>My Reservations</span>
                  <Calendar className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* LOCATIONS CATEGORY (MOBILE) */}
              <div className="flex flex-col gap-1.5 pb-4 border-b border-[#2D5446]/20">
                <span className="text-[9px] font-extrabold text-[#DECBA5] tracking-[0.2em] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#DECBA5]" /> Our Locations
                </span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {navMenuItems.locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleNavClick("contact")}
                      className="text-left py-1.5 px-2 bg-white/5 hover:bg-white/10 rounded text-[10px] font-mono text-white/95 font-bold border border-white/10"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* BOOK BUTTON AT BOTTOM OF MOBILE */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-2 w-full py-3.5 bg-[#DECBA5] text-[#1E3E34] font-extrabold rounded-none uppercase text-xs tracking-widest text-center shadow-md active:scale-95 transition-transform cursor-pointer hover:bg-white"
                id="mobile-book-now-trigger"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
