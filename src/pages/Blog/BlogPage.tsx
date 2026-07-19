import { motion } from "motion/react";
import BlogSection from "@/src/components/BlogSection";
import { pageTransition } from "@/src/components/FadeIn";

export default function BlogPage() {
  return (
    <motion.div
      key="blog"
      {...pageTransition}
      className="pt-20 md:pt-24"
    >
      <BlogSection />
    </motion.div>
  );
}
