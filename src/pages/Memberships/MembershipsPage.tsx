import { motion } from "motion/react";
import MembershipsSection from "@/src/components/MembershipsSection";
import { pageTransition } from "@/src/components/FadeIn";

interface MembershipsPageProps {
  onSelectPlan: (plan: string) => void;
}

export default function MembershipsPage({ onSelectPlan }: MembershipsPageProps) {
  return (
    <motion.div
      key="memberships"
      {...pageTransition}
      className="pt-20 md:pt-24"
    >
      <MembershipsSection onSelectPlan={onSelectPlan} />
    </motion.div>
  );
}
