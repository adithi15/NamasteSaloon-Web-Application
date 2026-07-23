import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import MembershipsSection from "@/src/components/MembershipsSection";
import { pageTransition } from "@/src/components/FadeIn";
import { membershipPath } from "@/src/common/utils/routes";
import type { PackageType } from "@/src/common/types";

interface MembershipsPageProps {
  onSelectPlan: (plan: string) => void;
  initialCategory?: PackageType | "all";
}

export default function MembershipsPage({
  onSelectPlan,
  initialCategory = "all",
}: MembershipsPageProps) {
  const navigate = useNavigate();

  return (
    <motion.div {...pageTransition} className="pt-20 md:pt-24">
      <MembershipsSection
        initialFilter={initialCategory}
        onSelectPlan={onSelectPlan}
        onFilterChange={(filter) => navigate(membershipPath(filter))}
      />
    </motion.div>
  );
}
