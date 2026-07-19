import { motion } from "motion/react";
import SpecialistSection from "@/src/components/SpecialistSection";
import { pageTransition } from "@/src/components/FadeIn";
import { BUSINESS_DETAILS } from "@/src/common/data";
import type { Specialist } from "@/src/common/types";

interface WhySpaPageProps {
  onSelectSpecialist: (specialist: Specialist) => void;
}

export default function WhySpaPage({ onSelectSpecialist }: WhySpaPageProps) {
  return (
    <motion.div
      key="why-spa"
      {...pageTransition}
      className="pt-20 md:pt-24"
    >
      <div className="bg-[#022A24] text-[#FAF8F5] py-16 text-center border-b border-[#2D5446]/20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="text-[#DECBA5] text-[10px] tracking-[0.3em] font-mono uppercase font-black block">
            Est. {BUSINESS_DETAILS.yearEstablished}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-wider uppercase">
            Somatic Practitioners
          </h1>
          <p className="text-[#FAF8F5]/80 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Learn about our leading medical sports scientists, Ayurvedic
            physicians, and audio resonance therapists committed to your
            systemic alignment.
          </p>
        </div>
      </div>
      <SpecialistSection onSelectSpecialist={onSelectSpecialist} />
    </motion.div>
  );
}
