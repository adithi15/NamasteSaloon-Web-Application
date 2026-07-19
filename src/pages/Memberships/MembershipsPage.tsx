import { motion } from "motion/react";
import MembershipsSection from "@/src/components/MembershipsSection";
import { pageTransition } from "@/src/components/FadeIn";
import type { PackageType } from "@/src/common/types";

interface MembershipsPageProps {
  onSelectPlan: (plan: string) => void;
  initialCategory?: PackageType | "all";
}

export default function MembershipsPage({
  onSelectPlan,
  initialCategory = "all",
}: MembershipsPageProps) {
  return (
    <motion.div
      key="memberships"
      {...pageTransition}
      className="pt-20 md:pt-24"
    >
      <MembershipsSection
        initialFilter={initialCategory}
        onSelectPlan={onSelectPlan}
      />
    </motion.div>
  );
}
