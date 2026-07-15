import { motion } from "motion/react";
import MembershipsSection from "@/src/components/MembershipsSection";

interface MembershipsPageProps {
  onSelectPlan: (plan: string) => void;
}

export default function MembershipsPage({ onSelectPlan }: MembershipsPageProps) {
  return (
    <motion.div
      key="memberships"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-20 md:pt-24"
    >
      <MembershipsSection onSelectPlan={onSelectPlan} />
    </motion.div>
  );
}
