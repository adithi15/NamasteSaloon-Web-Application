import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";

interface HeaderProps {
  onNavigate: (view: import("@/src/common/types").ViewName) => void;
  onOpenBooking: () => void;
  activeView: import("@/src/common/types").ViewName;
}

export default function Header({ onNavigate, onOpenBooking, activeView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<"offerings" | "memberships" | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only home page has a dark hero — all other pages are bg-white
  const isHomePage = activeView === "home";

  const navMenuItems = {
    offerings: [
      "Alternative Medicine",
      "Custom Massages",
      "Biometric Testing",
      "Wellness Classes",
    ],
    memberships: [
      "Memberships Pass",
      "Packages Tier",
      "Couple SPA",
      "Couple Celebration",
    ],
  };

  const handleNavClick = (viewName: import("@/src/common/types").ViewName) => {
    onNavigate(viewName);
    setHoveredDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dropdownTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const dropdownBase = [
    "absolute top-full left-0 right-0 w-full",
    "backdrop-blur-[28px]",
    "bg-[#071a15]/15",
    "border-b border-white/8",
    "shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]",
    "text-[#FAF8F5] overflow-hidden",
  ].join(" ");

  // Text color logic:
  // - home page + not scrolled → white (dark hero behind)
  // - home page + scrolled    → dark (original scrolled behavior)
  // - any other page          → always dark (white bg pages)
  const navTextBase =
    isHomePage && !scrolled
      ? "text-[#FAF8F5]/80 hover:text-white"
      : "text-slate-900 hover:text-slate-900";

  const activeTextColor =
    isHomePage && !scrolled ? "!text-white" : "!text-[#000000]";

  const btnClass = `transition-colors duration-300 focus:outline-none cursor-pointer py-8 relative ${navTextBase}`;

  const dropdownBtnClass = `flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer ${navTextBase}`;

  const chevronColor =
    isHomePage && !scrolled ? "text-[#A1CBB4]" : "text-[#2D5446]";

  const mobileToggleColor =
    isHomePage && !scrolled ? "text-white" : "text-slate-900";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick("home")}
          className="cursor-pointer group flex items-center"
          id="header-brand-trigger"
        >
          <img
            src="/logo2.jpeg"
            alt="Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <nav
            className="flex items-center gap-8 text-[15px] font-display tracking-widest uppercase"
            id="desktop-navbar"
          >
            <button
              onClick={() => handleNavClick("home")}
              className={`${btnClass} ${activeView === "home" ? activeTextColor : ""}`}
            >
              Home
              {activeView === "home" && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]"
                />
              )}
            </button>

            {/* Services dropdown */}
            <div
              className="relative py-8"
              onMouseEnter={() => setHoveredDropdown("offerings")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => handleNavClick("services")}
                className={dropdownBtnClass}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredDropdown === "offerings" ? "rotate-180" : ""} ${chevronColor}`}
                />
              </button>
            </div>

            {/* Memberships dropdown */}
            <div
              className="relative py-8"
              onMouseEnter={() => setHoveredDropdown("memberships")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => handleNavClick("memberships")}
                className={dropdownBtnClass}
              >
                <span>Memberships</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredDropdown === "memberships" ? "rotate-180" : ""} ${chevronColor}`}
                />
              </button>
            </div>

            <button
              onClick={() => handleNavClick("blog")}
              className={`${btnClass} ${activeView === "blog" ? activeTextColor : ""}`}
            >
              Blog
              {activeView === "blog" && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]"
                />
              )}
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className={`${btnClass} ${activeView === "contact" ? activeTextColor : ""}`}
            >
              Contact
              {activeView === "contact" && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]"
                />
              )}
            </button>
          </nav>
        </div>

        {/* Book Now */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#DECBA5] text-[#1E3E34] hover:bg-white px-6 py-2.5 rounded-none font-bold shadow-md hover:scale-105 transition-all duration-300 text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1E3E34]" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile trigger */}
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
            className={`relative p-2.5 focus:outline-none cursor-pointer transform hover:scale-105 transition-transform ${mobileToggleColor}`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Desktop Mega Dropdown ── */}
      <AnimatePresence>
        {hoveredDropdown && (
          <motion.div
            key={hoveredDropdown}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={dropdownTransition}
            className={`hidden lg:block ${dropdownBase}`}
            onMouseEnter={() => setHoveredDropdown(hoveredDropdown)}
            onMouseLeave={() => setHoveredDropdown(null)}
            id="desktop-mega-dropdown"
          >
            {/* thin gold top highlight line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DECBA5]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {hoveredDropdown === "offerings" && (
                <div className="grid grid-cols-4 gap-8 text-left">
                  <div className="col-span-1 border-r border-white/10 pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#DECBA5] uppercase font-black flex items-center gap-1.5 mb-3">
                      <Layers className="w-3.5 h-3.5" /> SERVICES DIRECTORY
                    </div>
                    <h4 className="font-serif text-lg font-bold text-black mb-5">
                      Somatic Practices
                    </h4>
                    <p className="text-[11px] text-black/55 leading-relaxed font-semibold">
                      Dive into clinically analytical somatic remedies,
                      metabolic recovery mechanisms, and physiological wellness
                      theories.
                    </p>
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    {navMenuItems.offerings.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleNavClick("services")}
                        className="p-4 rounded-xl bg-black/[0.04] border border-black/[0.07] hover:border-[#DECBA5]/35 hover:bg-black/[0.09] text-left transition-all duration-250 group cursor-pointer backdrop-blur-sm"
                      >
                        <span className="text-xs font-bold text-black/90 group-hover:text-[#DECBA5] transition-colors block uppercase tracking-wider">
                          {cat}
                        </span>
                        <span className="text-[9px] text-black/40 mt-1.5 block font-mono leading-none">
                          Clinical Somatics
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hoveredDropdown === "memberships" && (
                <div className="grid grid-cols-4 gap-8 text-left">
                  <div className="col-span-1 border-r border-white/10 pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#DECBA5] uppercase font-black flex items-center gap-1.5 mb-3">
                      <Award className="w-3.5 h-3.5" /> COMMITMENTS & PASSES
                    </div>
                    <h4 className="font-serif text-lg font-bold text-white mb-2">
                      Club Memberships
                    </h4>
                    <p className="text-[11px] text-white/55 leading-relaxed font-semibold">
                      Join any of our local clubs to secure permanent slots,
                      unlock premium wellness suites, and consult with somatic
                      specialists.
                    </p>
                  </div>
                  <div className="col-span-3 grid grid-cols-4 gap-3">
                    {navMenuItems.memberships.map((mem) => (
                      <button
                        key={mem}
                        onClick={() => handleNavClick("memberships")}
                        className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-[#DECBA5]/35 hover:bg-white/[0.09] text-left transition-all duration-250 group cursor-pointer backdrop-blur-sm"
                      >
                        <span className="text-xs font-bold text-white/90 group-hover:text-[#DECBA5] transition-colors block uppercase tracking-wider">
                          {mem}
                        </span>
                        <span className="text-[9px] text-white/40 mt-2 block font-mono leading-none">
                          All-Inclusive Passes
                        </span>
                        <span className="text-[9px] text-[#DECBA5]/70 mt-1.5 block font-display tracking-wide uppercase font-black group-hover:text-[#DECBA5] transition-colors">
                          Explore Tier →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* thin gold bottom highlight */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DECBA5]/20 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-[28px] bg-[#071a15]/15 border-b border-white/8 shadow-2xl overflow-hidden"
            id="mobile-dropdown-menu"
          >
            {/* gold top line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DECBA5]/30 to-transparent" />

            <div className="p-6 flex flex-col gap-5 text-sm uppercase tracking-widest font-display text-white/90">
              <div className="flex flex-col gap-2 pb-4 border-b border-white/10">
                <span className="text-[9px] font-extrabold text-[#DECBA5] tracking-[0.2em]">
                  Quick Paths
                </span>
                {[
                  {
                    label: "Home Studio",
                    view: "home" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#DECBA5]" />,
                  },
                  {
                    label: "Our Somatic Services",
                    view: "services" as const,
                    icon: <Layers className="w-4 h-4 text-[#DECBA5]" />,
                  },
                  {
                    label: "Memberships & Pricing",
                    view: "memberships" as const,
                    icon: <Award className="w-4 h-4 text-[#DECBA5]" />,
                  },
                  {
                    label: "Our Spa Healers",
                    view: "why-spa" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#DECBA5]" />,
                  },
                  {
                    label: "Wellness Blog",
                    view: "blog" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#DECBA5]" />,
                  },
                  {
                    label: "Contact & FAQ",
                    view: "contact" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#DECBA5]" />,
                  },
                  {
                    label: "My Reservations",
                    view: "bookings" as const,
                    icon: <Calendar className="w-4 h-4 text-white" />,
                  },
                ].map(({ label, view, icon }) => (
                  <button
                    key={view}
                    onClick={() => handleNavClick(view)}
                    className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#DECBA5] transition-colors"
                  >
                    <span>{label}</span>
                    {icon}
                  </button>
                ))}
              </div>

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
