import { motion } from "motion/react";
import BlogSection from "@/src/components/BlogSection";

export default function BlogPage() {
  return (
    <motion.div
      key="blog"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-20 md:pt-24"
    >
      <BlogSection />
    </motion.div>
  );
}
