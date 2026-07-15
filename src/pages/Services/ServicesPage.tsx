import { motion } from "motion/react";
import CatalogSection from "@/src/components/CatalogSection";
import type { Service } from "@/src/common/types";

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
}

export default function ServicesPage({ onSelectService }: ServicesPageProps) {
  return (
    <motion.div
      key="services"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-20 md:pt-24"
    >
      <CatalogSection onSelectService={onSelectService} />
    </motion.div>
  );
}
