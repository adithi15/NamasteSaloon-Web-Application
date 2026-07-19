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
import type {
  PackageType,
  SpaCategoryValue,
  ViewName,
} from "@/src/common/types";
import { SpaCategory } from "@/src/common/types";

interface HeaderProps {
  onNavigate: (view: ViewName) => void;
  onOpenBooking: () => void;
  activeView: ViewName;
  onOpenServicesCategory?: (category: SpaCategoryValue | "All") => void;
  onOpenMembershipCategory?: (category: PackageType | "all") => void;
}

export default function Header({
  onNavigate,
  onOpenBooking,
  activeView,
  onOpenServicesCategory,
  onOpenMembershipCategory,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<"offerings" | "memberships" | null>(null);
  const [hoveredNav, setHoveredNav] = useState<
    "home" | "services" | "memberships" | "blog" | "contact" | null
  >(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Near top — always show
      if (y < 40) {
        setHidden(false);
        lastY = y;
        return;
      }

      // Keep visible while menu / dropdown open
      if (mobileMenuOpen || hoveredDropdown) {
        setHidden(false);
        lastY = y;
        return;
      }

      const delta = y - lastY;
      if (Math.abs(delta) < 6) return;

      // Scroll down → hide | Scroll up → show
      if (delta > 0) setHidden(true);
      else setHidden(false);

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen, hoveredDropdown]);

  // Every route starts transparent (home-top look); solid green glass only after scroll
  const useSolidHeader = scrolled;

  const navMenuItems = {
    offerings: Object.values(SpaCategory),
    memberships: [
      { label: "Membership Plans", type: "membership" as const },
      { label: "Prepaid Packages", type: "package" as const },
      { label: "Couple SPA", type: "couple-spa" as const },
      {
        label: "Couple Celebration",
        type: "couple-celebration" as const,
      },
    ],
  };

  const handleNavClick = (viewName: ViewName) => {
    onNavigate(viewName);
    setHoveredDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceCategoryClick = (cat: string) => {
    const category =
      (Object.values(SpaCategory) as string[]).includes(cat)
        ? (cat as SpaCategoryValue)
        : "All";
    if (onOpenServicesCategory) {
      onOpenServicesCategory(category);
    } else {
      onNavigate("services");
    }
    setHoveredDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMembershipCategoryClick = (category: PackageType) => {
    if (onOpenMembershipCategory) {
      onOpenMembershipCategory(category);
    } else {
      onNavigate("memberships");
    }
    setHoveredDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dropdownTransition = {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const dropdownBase = [
    "absolute top-full left-0 right-0 w-full",
    "backdrop-blur-lg",
    "bg-[#2D5446]/20",
    "border-b border-[#2D5446]/15",
    "text-black overflow-hidden",
  ].join(" ");

  const dropdownCardClass =
    "p-4 rounded-xl bg-white/40 border border-[#2D5446]/15 hover:border-[#DECBA5]/50 hover:bg-white/60 text-left transition-all duration-250 group cursor-pointer backdrop-blur-sm";

  const dropdownMemCardClass =
    "p-5 rounded-xl bg-white/40 border border-[#2D5446]/15 hover:border-[#DECBA5]/50 hover:bg-white/60 text-left transition-all duration-250 group cursor-pointer backdrop-blur-sm";

  // Black nav on light pages (memberships/blog/contact) always;
  // elsewhere cream until scroll, then black
  const useDarkNavText =
    scrolled ||
    activeView === "memberships" ||
    activeView === "blog" ||
    activeView === "contact";

  const navTextBase = useDarkNavText
    ? "text-black hover:text-black/70"
    : "text-[#FAF8F5]/80 hover:text-white";

  const activeTextColor = useDarkNavText ? "!text-black" : "!text-white";

  const btnClass = `transition-colors duration-300 focus:outline-none cursor-pointer py-8 relative ${navTextBase}`;

  const dropdownBtnClass = `flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer relative py-8 ${navTextBase}`;

  const chevronColor = useDarkNavText ? "text-black" : "text-[#A1CBB4]";

  const mobileToggleColor = useDarkNavText ? "text-black" : "text-white";

  const underlinedNav =
    hoveredDropdown === "offerings"
      ? "services"
      : hoveredDropdown === "memberships"
        ? "memberships"
        : hoveredNav ??
    (activeView === "services" ||
    activeView === "memberships" ||
    activeView === "home" ||
    activeView === "blog" ||
    activeView === "contact"
      ? activeView
      : null);

  const navLine = (
    <motion.span
      layoutId="activeNavLine"
      className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#DECBA5]"
      transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
    />
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        useSolidHeader
          ? "bg-[#2D5446]/20 backdrop-blur-lg border-b border-[#2D5446]/15 shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick("home")}
          className="cursor-pointer group flex items-center min-w-0 mr-2"
          id="header-brand-trigger"
        >
          <img
            src="/logo.png"
            alt="Namastey Salon & Spa"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[min(48vw,200px)] sm:max-w-[min(52vw,220px)] object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <nav
            className="flex items-center gap-5 xl:gap-8 text-[13px] xl:text-[15px] font-display tracking-widest uppercase"
            id="desktop-navbar"
            onMouseLeave={() => setHoveredNav(null)}
          >
            <button
              onClick={() => handleNavClick("home")}
              onMouseEnter={() => setHoveredNav("home")}
              className={`${btnClass} ${activeView === "home" || hoveredNav === "home" ? activeTextColor : ""}`}
            >
              Home
              {underlinedNav === "home" && navLine}
            </button>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setHoveredDropdown("offerings");
                setHoveredNav("services");
              }}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => handleServiceCategoryClick("All")}
                className={`${dropdownBtnClass} ${activeView === "services" || hoveredNav === "services" ? activeTextColor : ""}`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredDropdown === "offerings" ? "rotate-180" : ""} ${chevronColor}`}
                />
                {underlinedNav === "services" && navLine}
              </button>
            </div>

            {/* Memberships dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setHoveredDropdown("memberships");
                setHoveredNav("memberships");
              }}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => handleNavClick("memberships")}
                className={`${dropdownBtnClass} ${activeView === "memberships" || hoveredNav === "memberships" ? activeTextColor : ""}`}
              >
                <span>Memberships</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredDropdown === "memberships" ? "rotate-180" : ""} ${chevronColor}`}
                />
                {underlinedNav === "memberships" && navLine}
              </button>
            </div>

            <button
              onClick={() => handleNavClick("blog")}
              onMouseEnter={() => setHoveredNav("blog")}
              className={`${btnClass} ${activeView === "blog" || hoveredNav === "blog" ? activeTextColor : ""}`}
            >
              Blog
              {underlinedNav === "blog" && navLine}
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              onMouseEnter={() => setHoveredNav("contact")}
              className={`${btnClass} ${activeView === "contact" || hoveredNav === "contact" ? activeTextColor : ""}`}
            >
              Contact
              {underlinedNav === "contact" && navLine}
            </button>
          </nav>
        </div>

        {/* Book Now */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#DECBA5] text-[#1E3E34] px-6 py-2.5 rounded-none font-bold shadow-md text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1E3E34]" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile trigger */}
      <div className="lg:hidden flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-[#DECBA5] text-[#1E3E34] p-2 sm:p-2.5 rounded-none shadow-md active:scale-95 transition-transform cursor-pointer font-bold"
            aria-label="Quick Reserve"
          >
            <Calendar className="w-4 h-4 text-[#1E3E34]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative p-2 sm:p-2.5 focus:outline-none cursor-pointer transform hover:scale-105 transition-transform ${mobileToggleColor}`}
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
            onMouseEnter={() => {
              setHoveredDropdown(hoveredDropdown);
              setHoveredNav(
                hoveredDropdown === "offerings" ? "services" : "memberships",
              );
            }}
            onMouseLeave={() => {
              setHoveredDropdown(null);
              setHoveredNav(null);
            }}
            id="desktop-mega-dropdown"
          >
            {/* thin gold top highlight line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DECBA5]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              {hoveredDropdown === "offerings" && (
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8 text-left">
                  <div className="xl:col-span-1 xl:border-r border-[#2D5446]/15 xl:pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#1E3E34] uppercase font-black flex items-center gap-1.5 mb-3">
                      <Layers className="w-3.5 h-3.5" /> SERVICES DIRECTORY
                    </div>
                    <h4 className="font-serif text-lg font-bold text-black mb-3 xl:mb-5">
                      Somatic Practices
                    </h4>
                    <p className="text-[11px] text-black/55 leading-relaxed font-semibold max-w-md">
                      Dive into clinically analytical somatic remedies,
                      metabolic recovery mechanisms, and physiological wellness
                      theories.
                    </p>
                  </div>
                  <div className="xl:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {navMenuItems.offerings.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleServiceCategoryClick(cat)}
                        className={dropdownCardClass}
                      >
                        <span className="text-xs font-bold text-black/90 group-hover:text-[#1E3E34] transition-colors block uppercase tracking-wider leading-snug">
                          {cat}
                        </span>
                        <span className="text-[9px] text-black/40 mt-1.5 block font-mono leading-none">
                          Clinical Somatics
                        </span>
                        <span className="text-[9px] text-[#1E3E34]/70 mt-1.5 block font-display tracking-wide uppercase font-black group-hover:text-[#1E3E34] transition-colors">
                          Explore →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {hoveredDropdown === "memberships" && (
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8 text-left">
                  <div className="xl:col-span-1 xl:border-r border-[#2D5446]/15 xl:pr-6">
                    <div className="text-[10px] font-mono tracking-widest text-[#1E3E34] uppercase font-black flex items-center gap-1.5 mb-3">
                      <Award className="w-3.5 h-3.5" /> COMMITMENTS & PASSES
                    </div>
                    <h4 className="font-serif text-lg font-bold text-black mb-2">
                      Club Memberships
                    </h4>
                    <p className="text-[11px] text-black/55 leading-relaxed font-semibold max-w-md">
                      Join any of our local clubs to secure permanent slots,
                      unlock premium wellness suites, and consult with somatic
                      specialists.
                    </p>
                  </div>
                  <div className="xl:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {navMenuItems.memberships.map((mem) => (
                      <button
                        key={mem.type}
                        onClick={() => handleMembershipCategoryClick(mem.type)}
                        className={dropdownMemCardClass}
                      >
                        <span className="text-xs font-bold text-black/90 group-hover:text-[#1E3E34] transition-colors block uppercase tracking-wider leading-snug">
                          {mem.label}
                        </span>
                        <span className="text-[9px] text-black/40 mt-2 block font-mono leading-none">
                          All-Inclusive Passes
                        </span>
                        <span className="text-[9px] text-[#1E3E34]/70 mt-1.5 block font-display tracking-wide uppercase font-black group-hover:text-[#1E3E34] transition-colors">
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
            className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-lg bg-[#2D5446]/20 border-b border-[#2D5446]/15 overflow-hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
            id="mobile-dropdown-menu"
          >
            {/* gold top line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DECBA5]/30 to-transparent" />

            <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 text-sm uppercase tracking-widest font-display text-black">
              <div className="flex flex-col gap-1 sm:gap-2 pb-4 border-b border-[#2D5446]/15">
                <span className="text-[9px] font-extrabold text-[#1E3E34] tracking-[0.2em]">
                  Quick Paths
                </span>
                {[
                  {
                    label: "Home Studio",
                    view: "home" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#1E3E34]" />,
                  },
                  {
                    label: "Our Somatic Services",
                    view: "services" as const,
                    icon: <Layers className="w-4 h-4 text-[#1E3E34]" />,
                  },
                  {
                    label: "Memberships & Pricing",
                    view: "memberships" as const,
                    icon: <Award className="w-4 h-4 text-[#1E3E34]" />,
                  },
                  {
                    label: "Our Spa Healers",
                    view: "why-spa" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#1E3E34]" />,
                  },
                  {
                    label: "Wellness Blog",
                    view: "blog" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#1E3E34]" />,
                  },
                  {
                    label: "Contact & FAQ",
                    view: "contact" as const,
                    icon: <Sparkles className="w-4 h-4 text-[#1E3E34]" />,
                  },
                  {
                    label: "My Reservations",
                    view: "bookings" as const,
                    icon: <Calendar className="w-4 h-4 text-black" />,
                  },
                ].map(({ label, view, icon }) => (
                  <button
                    key={view}
                    onClick={() => handleNavClick(view)}
                    className="w-full text-left py-2.5 sm:py-2 font-bold flex items-center justify-between gap-3 text-black hover:text-[#1E3E34] transition-colors text-xs sm:text-sm"
                  >
                    <span className="leading-snug">{label}</span>
                    <span className="shrink-0">{icon}</span>
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
