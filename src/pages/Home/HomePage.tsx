import { motion } from "motion/react";
import ServiceCarousel from "@/src/components/ServiceCarousel";
import SpecialistSection from "@/src/components/SpecialistSection";
import MembershipsSection from "@/src/components/MembershipsSection";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import { BUSINESS_DETAILS } from "@/src/common/data";
import type { Service, Specialist, ViewName } from "@/src/common/types";

interface HomePageProps {
  onOpenBooking: (
    service?: Service | null,
    specialist?: Specialist | null,
    plan?: string | null,
  ) => void;
  openWhatsAppGeneral: () => void;
  onNavigate: (view: ViewName) => void;
}

export default function HomePage({
  onOpenBooking,
  openWhatsAppGeneral,
  onNavigate,
}: HomePageProps) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full"
    >
      {/* HERO SECTION - Premium Minimalist Layout */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden bg-[#022A24] border-b border-[#2D5446]/20">
        {/* Visual Glass Overlay & Ambient glow over dark background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20"></div>
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
              className="mt-51 font-serif text-[36x] sm:text-[48px] md:text-[60px] lg:text-[80px] font-normal tracking-[0.16em] text-[#FAF8F5] uppercase leading-tight select-none text-center whitespace-normal"
            >
              <span className="italic text-[#DECBA5] font-light">
                {" "}
                {/*808080 */}
                SELF-CARE MADE SOCIAL
              </span>
            </motion.h1>
          </div>

          {/* Just a reservation button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button
              onClick={openWhatsAppGeneral}
              className="px-14 h-[50px] bg-[#FAF8F5] hover:bg-[#DECBA5] text-[#1E3E34] font-mono uppercase text-[10px] md:text-xs tracking-[0.25em] rounded-none hover:scale-105 transition-all duration-300 shadow-xl shadow-[#022A24]/40 cursor-pointer font-bold"
            >
              Reservations
            </button>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CAROUSEL */}
      <ServiceCarousel
        onSelectService={(s) => onOpenBooking(s, null)}
      />

      {/* WHY SPA / HEALERS SECTION PREVIEW */}
      <SpecialistSection
        onSelectSpecialist={(sp) => onOpenBooking(null, sp)}
      />

      {/* MEMBERSHIPS AND PRICING PREVIEW */}
      <MembershipsSection
        preview
        onViewAll={() => onNavigate("memberships")}
        onSelectPlan={(plan) => onOpenBooking(null, null, plan)}
      />

      {/* TESTIMONIALS PREVIEW */}
      <TestimonialsSection />
    </motion.div>
  );
}
