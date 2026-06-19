import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  MapPin,
  Layers,
  Award,
} from "lucide-react";

export default function Header({ onNavigate, onOpenBooking, activeView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const navMenuItems = {
    locations: ["Boston", "Flatiron", "Soho", "West Hollywood"],
    offerings: [
      "Tech-Remedies",
      "Alternative Medicine",
      "Custom Massages",
      "Biometric Testing",
      "Wellness Classes",
    ],
    memberships: [
      "Somatic Day Pass",
      "Acoustic Tier",
      "Pranayama Club",
      "Universal VIP",
    ],
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#022A24] text-[#FAF8F5] border-b border-[#2D5446]/20 shadow-xl shadow-[#122620]/5">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15 h-20 md:h-24 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <div
          onClick={() => {
            onNavigate("home");
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer group"
          id="header-brand-trigger"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-18 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Center: Desktop Navigation Links with Mega-dropdown triggers */}
        <nav
          className="hidden lg:flex items-center gap-8 text-[11px] font-display tracking-widest uppercase text-[#FAF8F5]/90"
          id="desktop-navbar"
        >
          {/* LOCATIONS Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setHoveredDropdown("locations")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none font-bold cursor-pointer">
              <span>Locations</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#A1CBB4] transition-transform duration-300 ${hoveredDropdown === "locations" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredDropdown === "locations" && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-1 w-64 bg-[#1E3E34]/98 border border-[#2D5446]/40 backdrop-blur-xl rounded-2xl shadow-2xl p-3.5 flex flex-col gap-1 z-50 text-[#FAF8F5] pointer-events-auto"
                >
                  <div className="px-3 py-1.5 text-[9px] text-[#A1CBB4] font-bold tracking-[0.2em] flex items-center gap-1.5 border-b border-[#2D5446]/30 mb-2">
                    <MapPin className="w-3.5 h-3.5" /> SELECT A CLUB
                  </div>
                  {navMenuItems.locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        onNavigate("home");
                        setHoveredDropdown(null);
                        setTimeout(() => {
                          document
                            .getElementById("services-carousel")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                      className="px-3 py-2 text-left rounded-xl hover:bg-[#2D5446]/60 hover:text-white text-[#FAF8F5]/90 transition-all duration-150 font-semibold tracking-wider text-[11px] flex flex-col justify-center cursor-pointer"
                    >
                      <span>{loc} Club</span>
                      <span className="text-[8px] opacity-75 font-mono capitalize tracking-normal font-normal mt-0.5 text-[#A1CBB4]">
                        Luxury healing & somatic wellness
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OFFERINGS Dropdown - Column-based Luxury Mega Menu */}
          <div
            className="py-4"
            onMouseEnter={() => setHoveredDropdown("offerings")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none font-bold cursor-pointer">
              <span>Our Offerings</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#A1CBB4] transition-transform duration-300 ${hoveredDropdown === "offerings" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredDropdown === "offerings" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute top-[80%] left-1/2 -translate-x-[45%] mt-1 w-[900px] xl:w-[1000px] bg-[#1E3E34]/98 border border-[#2D5446]/40 backdrop-blur-2xl rounded-[1.75rem] shadow-2xl p-7 z-50 text-[#FAF8F5] pointer-events-auto"
                >
                  <div className="grid grid-cols-5 gap-6 text-left">
                    {/* Column 1: Locations Ticket / Day Pass */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[9px] text-[#A1CBB4] font-black tracking-[0.2em] border-b border-[#2D5446]/30 pb-2 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> DAY PASS
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <div
                          className="group/item cursor-pointer"
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("services-carousel")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          <span className="text-[11px] font-bold tracking-wider group-hover/item:text-[#A1CBB4] text-[#FAF8F5]/90 transition-colors uppercase">
                            BOSTON CLUB
                          </span>
                          <p className="text-[9px] text-[#FAF8F5]/60 font-medium leading-relaxed font-sans normal-case tracking-normal mt-0.5">
                            Somatic rest, contrast suites & multi-club passes.
                          </p>
                        </div>
                        <div
                          className="group/item cursor-pointer"
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("services-carousel")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          <span className="text-[11px] font-bold tracking-wider group-hover/item:text-[#A1CBB4] text-[#FAF8F5]/90 transition-colors uppercase">
                            FLATIRON SANCTUARY
                          </span>
                          <p className="text-[9px] text-[#FAF8F5]/60 font-medium leading-relaxed font-sans normal-case tracking-normal mt-0.5">
                            Chroma thermal sauna & luxury hyperbaric admissions.
                          </p>
                        </div>
                        <div
                          className="group/item cursor-pointer"
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("services-carousel")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          <span className="text-[11px] font-bold tracking-wider group-hover/item:text-[#A1CBB4] text-[#FAF8F5]/90 transition-colors uppercase">
                            SOHO HEALING
                          </span>
                          <p className="text-[9px] text-[#FAF8F5]/60 font-medium leading-relaxed font-sans normal-case tracking-normal mt-0.5">
                            Dynamic pulse compression & bio-resonance packages.
                          </p>
                        </div>
                        <div
                          className="group/item cursor-pointer"
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("services-carousel")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          <span className="text-[11px] font-bold tracking-wider group-hover/item:text-[#A1CBB4] text-[#FAF8F5]/90 transition-colors uppercase">
                            WEST HOLLYWOOD
                          </span>
                          <p className="text-[9px] text-[#FAF8F5]/60 font-medium leading-relaxed font-sans normal-case tracking-normal mt-0.5">
                            Bespoke warm oil holistic massage & alchemical
                            classes.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Tech-Remedies */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[9px] text-[#A1CBB4] font-black tracking-[0.2em] border-b border-[#2D5446]/30 pb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> TECH-REMEDIES
                      </div>
                      <div className="flex flex-col gap-2.5 text-[11px] font-semibold tracking-wider text-[#FAF8F5]/85">
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Guided Ice Bath
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Infrared Sauna Suite
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Lymphatic Compression
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Hyperbaric Oxygen
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Red Light Bed Therapy
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          AI Guided Massage
                        </button>
                      </div>
                    </div>

                    {/* Column 3: Alternative Medicine */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[9px] text-[#A1CBB4] font-black tracking-[0.2em] border-b border-[#2D5446]/30 pb-2 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> ALTERNATIVE MED
                      </div>
                      <div className="flex flex-col gap-2.5 text-[11px] font-semibold tracking-wider text-[#FAF8F5]/85">
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Vitamin IV Infusions
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Electro-Acupuncture
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Biomarker Assessment
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          NAD+ Longevity Pen
                        </button>
                      </div>
                    </div>

                    {/* Column 4: Custom Massages */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[9px] text-[#A1CBB4] font-black tracking-[0.2em] border-b border-[#2D5446]/30 pb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> SPA MASSAGES
                      </div>
                      <div className="flex flex-col gap-2.5 text-[11px] font-semibold tracking-wider text-[#FAF8F5]/85">
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Ayurvedic Abhyanga
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Vulcanic Hot Rock
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Somatic Muscle Release
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Fascial Re-alignment
                        </button>
                      </div>
                    </div>

                    {/* Column 5: Biometrics & Classes */}
                    <div className="flex flex-col gap-3">
                      <div className="text-[9px] text-[#A1CBB4] font-black tracking-[0.2em] border-b border-[#2D5446]/30 pb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> LABS & CLASSES
                      </div>
                      <div className="flex flex-col gap-2.5 text-[11px] font-semibold tracking-wider text-[#FAF8F5]/85">
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          VO2 Max Test
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          RMR Metabolic Gas
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Alchemical Sound Bath
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Holotropic Pranayama
                        </button>
                        <button
                          onClick={() => {
                            onNavigate("home");
                            setHoveredDropdown(null);
                            setTimeout(() => {
                              document
                                .getElementById("catalog-section")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="text-left hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          Vagus Sensory Sound
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Footer Bar of the Mega Menu */}
                  <div className="mt-8 pt-4 border-t border-[#2D5446]/20 flex items-center justify-between text-[9px] text-[#A1CBB4] font-bold tracking-widest uppercase">
                    <span>Namastey Social Wellness Club®</span>
                    <span
                      className="text-white hover:underline cursor-pointer"
                      onClick={() => {
                        onNavigate("home");
                        setHoveredDropdown(null);
                        setTimeout(() => {
                          document
                            .getElementById("catalog-section")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }}
                    >
                      View Entire Somatic Catalog →
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MEMBERSHIPS Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setHoveredDropdown("memberships")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none py-2 font-bold cursor-pointer">
              <span>Memberships</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#A1CBB4] transition-transform duration-300 ${hoveredDropdown === "memberships" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {hoveredDropdown === "memberships" && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-1 w-72 bg-[#1E3E34]/98 border border-[#2D5446]/40 backdrop-blur-xl rounded-2xl shadow-2xl p-4 flex flex-col gap-1 z-50 text-[#FAF8F5] pointer-events-auto"
                >
                  <div className="px-3 py-1.5 text-[9px] text-[#A1CBB4] font-bold tracking-[0.2em] flex items-center gap-1.5 border-b border-[#2D5446]/30 mb-2">
                    <Award className="w-3.5 h-3.5" /> SPA COMMITMENTS
                  </div>
                  {navMenuItems.memberships.map((mem, index) => {
                    const tags = [
                      "Single Entrance Recovery",
                      "Standard Resonance Tier",
                      "Custom Breath Classes",
                      "Unlimited Royal Access",
                    ];
                    return (
                      <button
                        key={mem}
                        onClick={() => {
                          onNavigate("home");
                          setHoveredDropdown(null);
                          setTimeout(() => {
                            document
                              .getElementById("catalog-section")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="px-3 py-2.5 text-left rounded-xl hover:bg-[#2D5446]/60 hover:text-white text-[#FAF8F5]/90 transition-all duration-150 font-semibold tracking-wider text-[11px] flex flex-col cursor-pointer"
                      >
                        <span>{mem}</span>
                        <span className="text-[8px] opacity-75 font-mono capitalize tracking-normal font-normal mt-0.5 text-[#A1CBB4]">
                          {tags[index % tags.length]}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular Pages */}
          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => {
                document
                  .getElementById("specialists-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="hover:text-white transition-colors focus:outline-none font-bold cursor-pointer text-[#FAF8F5]/90"
          >
            Our Spa Healers
          </button>

          {/* View appointments */}
          <button
            onClick={() => onNavigate("bookings")}
            className={`font-bold tracking-widest transition-colors py-2 relative cursor-pointer ${activeView === "bookings" ? "text-white font-extrabold border-b-2 border-white" : "hover:text-white text-[#FAF8F5]/80"}`}
          >
            My Reservations
          </button>
        </nav>

        {/* Right Action buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#FAF8F5] text-[#1E3E34] hover:bg-white px-6 py-2.5 rounded-none font-semibold shadow-md hover:scale-105 transition-transform text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#2D5446]" />
            <span>Reservations</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-[#FAF8F5] text-[#1E3E34] p-2.5 rounded-none shadow-md transition-transform active:scale-95 cursor-pointer"
            aria-label="Quick Reserve"
          >
            <Calendar className="w-4 h-4 text-[#2D5446]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-2.5 text-white hover:text-[#A1CBB4] focus:outline-none cursor-pointer transform hover:scale-105 transition-transform"
            id="mobile-hamburger"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile drop-down with clean anims and full visual options */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#1E3E34]/98 backdrop-blur-3xl border-b border-[#2D5446]/30 shadow-2xl overflow-hidden"
            id="mobile-dropdown-menu"
          >
            <div className="p-6 flex flex-col gap-5 text-sm uppercase tracking-widest font-display text-white/90">
              <div className="flex flex-col gap-2 pb-4 border-b border-[#2D5446]/20">
                <span className="text-[9px] font-extrabold text-[#A1CBB4] tracking-[0.2em]">
                  Quick Paths
                </span>
                <button
                  onClick={() => {
                    onNavigate("home");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 font-bold flex items-center justify-between text-white hover:text-[#A1CBB4]"
                >
                  <span>Home Studio</span>
                  <Sparkles className="w-4 h-4 text-[#A1CBB4]" />
                </button>
                <button
                  onClick={() => {
                    onNavigate("bookings");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 font-bold flex items-center justify-between hover:text-[#A1CBB4] text-white/90 transition-colors"
                >
                  <span>My Reservations Dashboard</span>
                  <Calendar className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* LOCATIONS CATEGORY (MOBILE) */}
              <div className="flex flex-col gap-1.5 pb-4 border-b border-[#2D5446]/20">
                <span className="text-[9px] font-extrabold text-[#A1CBB4] tracking-[0.2em] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#A1CBB4]" /> Our Locations
                  (Select Club)
                </span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {navMenuItems.locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        onNavigate("home");
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          document
                            .getElementById("services-carousel")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 200);
                      }}
                      className="text-left py-1.5 px-2 bg-[#2D5446]/40 hover:bg-[#2D5446]/60 rounded text-[11px] font-mono text-white/90 font-bold border border-[#FAF8F5]/10"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* SERVICES LIST CATEGORIES (MOBILE) */}
              <div className="flex flex-col gap-1.5 pb-4 border-b border-[#2D5446]/20">
                <span className="text-[9px] font-extrabold text-[#A1CBB4] tracking-[0.2em] flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#A1CBB4]" /> Our Offerings
                </span>
                <div className="flex flex-col gap-1 mt-1 font-mono text-[11px] text-white/80">
                  {navMenuItems.offerings.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        onNavigate("home");
                        setMobileMenuOpen(false);
                        setTimeout(() => {
                          document
                            .getElementById("catalog-section")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 200);
                      }}
                      className="text-left py-1 hover:text-[#A1CBB4] font-bold"
                    >
                      • {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* ANCHORS */}
              <button
                onClick={() => {
                  onNavigate("home");
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    document
                      .getElementById("specialists-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 250);
                }}
                className="w-full text-left py-2 hover:text-[#A1CBB4] font-bold transition-colors text-white/95"
              >
                Our Spa Healers
              </button>

              {/* BOOK BUTTON AT BOTTOM OF MOBILE */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-2 w-full py-3.5 bg-[#FAF8F5] text-[#1E3E34] font-bold rounded-none uppercase text-xs tracking-widest text-center shadow-md active:scale-95 transition-transform cursor-pointer hover:bg-white"
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
