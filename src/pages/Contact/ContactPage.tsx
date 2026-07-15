import { motion } from "motion/react";
import ContactSection from "@/src/components/ContactSection";
import PoliciesSection from "@/src/components/PoliciesSection";

export default function ContactPage() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="pt-20 md:pt-24"
    >
      <ContactSection />
      <PoliciesSection />
    </motion.div>
  );
}
