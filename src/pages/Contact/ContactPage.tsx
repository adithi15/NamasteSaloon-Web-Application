import { motion } from "motion/react";
import ContactSection from "@/src/components/ContactSection";
import PoliciesSection from "@/src/components/PoliciesSection";
import { pageTransition } from "@/src/components/FadeIn";

export default function ContactPage() {
  return (
    <motion.div
      key="contact"
      {...pageTransition}
      className="pt-20 md:pt-24"
    >
      <ContactSection />
      <PoliciesSection />
    </motion.div>
  );
}
