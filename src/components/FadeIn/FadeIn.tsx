import { motion, useReducedMotion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

/** Soft land — ease-out (exits / settle) */
export const softEase = [0.22, 1, 0.36, 1] as const;

/**
 * Spa reveal ease — slow ease-in, soft ease-out.
 * Used by Services / Memberships filter transitions.
 */
export const spaEase = [0.5, 0.02, 0.18, 1] as const;

/** Balanced ease-in-out for fade reveals */
export const spaEaseInOut = [0.42, 0.0, 0.28, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const spaViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -48px 0px" as const,
};

/** Pure fade-in — no slide (default card / section reveal) */
export const spaFadeReveal = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: spaViewport,
};

/** Soft fade + tiny scale — alternate feel */
export const spaSoftReveal = {
  initial: { opacity: 0, scale: 0.985 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: spaViewport,
};

/**
 * Alias kept for existing imports — now a calm fade (not slide-up).
 * Services / Memberships do not use this for their chapter/filter motion.
 */
export const spaCardReveal = spaFadeReveal;

export function spaCardTransition(index = 0, reduceMotion = false) {
  if (reduceMotion) {
    return { duration: 0.01, delay: 0 };
  }
  return {
    duration: 1.15,
    delay: Math.min(index * 0.1, 0.4),
    ease: spaEaseInOut,
  };
}

export function spaSoftTransition(index = 0, reduceMotion = false) {
  if (reduceMotion) {
    return { duration: 0.01, delay: 0 };
  }
  return {
    duration: 1.25,
    delay: Math.min(index * 0.11, 0.45),
    ease: spaEaseInOut,
  };
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Vertical travel — 0 = pure fade (default) */
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "header" | "article";
}

/** Scroll-triggered fade — ease-in-out, no default slide */
export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 1.15,
  y = 0,
  once = true,
  as = "div",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...(y ? { y } : {}) }}
      whileInView={{ opacity: 1, ...(y ? { y: 0 } : {}) }}
      viewport={{
        once,
        amount: once ? 0.15 : 0.2,
        margin: once ? "0px 0px -48px 0px" : "72px 0px 72px 0px",
      }}
      transition={{
        duration: once ? duration : Math.min(duration, 0.9),
        delay,
        ease: spaEaseInOut,
      }}
    >
      {children}
    </Component>
  );
}

export const pageTransition: MotionProps = {
  initial: false,
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35, ease: spaEaseInOut },
};
