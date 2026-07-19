import { motion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

/** Soft luxury ease — slow settle, no snap */
export const softEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "header" | "article";
}

/** Scroll-triggered fade-up — calm and smooth */
export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.85,
  y = 28,
  once = true,
  as = "div",
}: FadeInProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.18, margin: "0px 0px -40px 0px" }}
      transition={{ duration, delay, ease: softEase }}
    >
      {children}
    </Component>
  );
}

export const pageTransition: MotionProps = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.55, ease: softEase },
};
