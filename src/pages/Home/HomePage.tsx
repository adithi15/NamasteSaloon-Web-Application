import { motion, useReducedMotion } from "motion/react";
import ServiceCarousel from "@/src/components/ServiceCarousel";
// import SpecialistSection from "@/src/components/SpecialistSection";
import MembershipsSection from "@/src/components/MembershipsSection";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import { spaEaseInOut } from "@/src/components/FadeIn";
import { BUSINESS_DETAILS } from "@/src/common/data";
import type {
  Service,
  Specialist,
  SpaCategoryValue,
  PackageType,
  ViewName,
} from "@/src/common/types";

const HERO_WORDS = ["SELF-CARE", "MADE", "SOCIAL"] as const;

interface HomePageProps {
  onOpenBooking: (
    service?: Service | null,
    specialist?: Specialist | null,
    plan?: string | null,
  ) => void;
  openWhatsAppGeneral: () => void;
  onNavigate: (view: ViewName) => void;
  onOpenServicesCategory: (category: SpaCategoryValue | "All") => void;
  onOpenMembershipCategory: (category: PackageType | "all") => void;
  onOpenServiceDetail: (service: Service) => void;
}

export default function HomePage({
  onOpenBooking,
  openWhatsAppGeneral,
  onNavigate,
  onOpenServicesCategory: _onOpenServicesCategory,
  onOpenMembershipCategory,
  onOpenServiceDetail,
}: HomePageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      {/* 1. HERO */}
      <section className="relative min-h-dvh flex flex-col justify-center items-center text-center px-4 py-24 sm:py-20 overflow-hidden bg-[#022A24] border-b border-[#2D5446]/20">
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1.0, ease: spaEaseInOut }}
              className="text-[#DECBA5] text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.45em] font-display uppercase font-black px-2"
            >
              {BUSINESS_DETAILS.tagline}
            </motion.span>

            <h1 className="mt-8 md:mt-12 font-serif text-[clamp(1.6rem,6.5vw,4.25rem)] font-normal text-[#FAF8F5] leading-tight select-none text-center px-2">
              <span className="italic text-[#DECBA5] font-light font-serif normal-case tracking-normal inline-flex flex-wrap items-baseline justify-center gap-x-[0.35em] gap-y-1">
                {HERO_WORDS.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, y: 18, filter: "blur(6px)" }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: reduceMotion ? 0 : 1.15,
                      delay: reduceMotion ? 0 : i * 0.18,
                      ease: spaEaseInOut,
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              {/* Soft gold line draws under the line after words settle */}
              <motion.span
                aria-hidden
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.7 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.1,
                  delay: reduceMotion ? 0 : 0.55,
                  ease: spaEaseInOut,
                }}
                className="mt-5 mx-auto block h-px w-[min(12rem,55%)] origin-center bg-gradient-to-r from-transparent via-[#DECBA5] to-transparent"
              />
            </h1>
          </div>

          {/* Reservations CTA — hidden for now
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 1.0, ease: spaEaseInOut }}
          >
            <button
              onClick={openWhatsAppGeneral}
              className="px-14 h-[50px] bg-[#FAF8F5] text-[#1E3E34] font-display uppercase text-[10px] md:text-xs tracking-[0.25em] rounded-none shadow-xl shadow-[#022A24]/40 cursor-pointer font-bold"
            >
              Reservations
            </button>
          </motion.div>
          */}
        </div>
      </section>

      {/* Below-hero content — one sober beige plane (hero video untouched) */}
      <div className="bg-[#E9E4DB]">
        {/* 2. SERVICES */}
        <ServiceCarousel
          onKnowMore={(service) => {
            onOpenServiceDetail(service);
          }}
        />

        {/* 3. SPECIALISTS — commented out for now */}
        {/* <SpecialistSection
          onSelectSpecialist={(sp) => onOpenBooking(null, sp)}
        /> */}

        {/* 4. TESTIMONIALS / REVIEWS */}
        <TestimonialsSection />

        {/* 5. MEMBERSHIPS */}
        <MembershipsSection
          preview
          onViewAll={() => onNavigate("memberships")}
          onSelectPlan={(plan) => onOpenBooking(null, null, plan)}
          onKnowMore={(plan) => {
            onOpenMembershipCategory(plan.type);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
}
