import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SPECIALISTS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";
import type { Specialist } from "@/src/common/types";

/* ─── useInView Hook ─── */
function useInView(options: IntersectionObserverInit = {}): [
  React.RefObject<HTMLElement | null>,
  boolean,
] {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.08, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Animation Config ─── */
const SMOOTH_CURVE = "cubic-bezier(0.3, 0, 0.2, 1)";
const DURATION = "1.1s";

function getSlideStyle(distance: number): React.CSSProperties {
  const abs = Math.abs(distance);
  const configs = {
    0: { scale: 1.0, opacity: 1, blur: 0, brightness: 1, zIndex: 10 },
    1: { scale: 0.82, opacity: 0.4, blur: 4, brightness: 0.8, zIndex: 5 },
    2: { scale: 0.6, opacity: 0, blur: 12, brightness: 0.5, zIndex: 1 },
  };
  const cfg = configs[Math.min(abs, 2) as 0 | 1 | 2];

  return {
    transform: `scale(${cfg.scale})`,
    opacity: cfg.opacity,
    filter: `blur(${cfg.blur}px) brightness(${cfg.brightness})`,
    zIndex: cfg.zIndex,
    transition: `all ${DURATION} ${SMOOTH_CURVE}`,
    pointerEvents: abs === 0 ? "auto" : "none",
  };
}

function HealerCard({ healer, onBook, distance }: { healer: Specialist; onBook: (h: Specialist) => void; distance: number }) {
  const isActive = distance === 0;
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={{
      ...getSlideStyle(distance),
      width: "100%",
      borderRadius: 24,
      overflow: "hidden",
      background: "white",
      border: `1px solid ${isActive ? "rgba(45,84,70,0.1)" : "transparent"}`,
      boxShadow: isActive ? "0 24px 60px -16px rgba(30,62,52,0.18)" : "none",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{ position: "relative", width: "100%", height: "clamp(160px, 42vw, 200px)", overflow: "hidden" }}>
        <img
          src={healer.image}
          alt={healer.name}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isActive ? "scale(1)" : "scale(1.2)",
            transition: `transform 1.8s ${SMOOTH_CURVE}`,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h3 style={{ fontFamily: "Calgary, Gilroy, serif", fontSize: 18, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
          {healer.name}
        </h3>
        <p style={{ fontSize: 10, fontFamily: "Gilroy, sans-serif", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "#2D5446", marginBottom: 12 }}>
          {healer.specialtyTag}
        </p>
        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, fontStyle: "italic", marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          "{healer.bio}"
        </p>
        <div style={{ flexGrow: 1 }} />
        <button
          onClick={() => isActive && onBook(healer)}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#1E3E34",
            color: "white",
            border: "none",
            borderRadius: 12,
            fontSize: 10,
            fontWeight: 800,
            fontFamily: "Gilroy, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            cursor: "pointer",
            transition: "all 0.4s ease",
            transform: btnHover ? "translateY(-2px)" : "none",
            boxShadow: btnHover ? "0 10px 20px rgba(30,62,52,0.2)" : "none",
          }}
        >
          Book Now <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

interface SpecialistSectionProps {
  onSelectSpecialist?: (specialist: Specialist) => void;
}

export default function SpecialistSection({ onSelectSpecialist }: SpecialistSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [sectionRef, sectionInView] = useInView();
  const total = SPECIALISTS.length;
  const stageRef = useRef<HTMLDivElement | null>(null);

  const go = (dir: number) => {
    if (animating) return;
    const next = activeIndex + dir;
    if (next < 0 || next >= total) return;
    setAnimating(true);
    setActiveIndex(next);
    setTimeout(() => setAnimating(false), 1100);
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let lastMove = 0;

    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
        e.preventDefault();
        if (now - lastMove < 1200) return;
        lastMove = now;
        go(e.deltaX > 0 ? 1 : -1);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activeIndex, animating]);

  const handleBook = (healer: Specialist) => {
    if (onSelectSpecialist) { onSelectSpecialist(healer); return; }
    window.open(getWhatsAppUrl(`Hi! I'd like to book ${healer.name}.`), "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-[120px] bg-white overflow-x-hidden"
    >
      <div
        className="text-center max-w-[700px] mx-auto mb-10 sm:mb-14 md:mb-20 px-4 sm:px-6"
        style={{
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? "translateY(0)" : "translateY(40px)",
          transition: `all 1.2s ${SMOOTH_CURVE}`,
        }}
      >
        <h2
          className="font-serif font-extrabold text-slate-900 mb-4 sm:mb-5"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          Our Specialists
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed px-1">
          Expert clinical practitioners for your holistic recovery.
        </p>
      </div>

      <div style={{ opacity: sectionInView ? 1 : 0, transition: "opacity 1.5s ease 0.4s" }}>
        <div
          ref={stageRef}
          className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] flex items-center justify-center px-2 overflow-hidden"
          style={{ touchAction: "pan-y" }}
        >
          {[-2, -1, 0, 1, 2].map((offset) => {
            const dataIndex = activeIndex + offset;
            if (dataIndex < 0 || dataIndex >= total) return null;
            const healer = SPECIALISTS[dataIndex];
            const STEP = 26;

            return (
              <div
                key={healer.id}
                onClick={() => offset !== 0 && go(offset > 0 ? 1 : -1)}
                className={
                  offset === 0
                    ? "absolute w-[min(88vw,300px)] sm:w-[min(70vw,300px)] md:w-[clamp(220px,24%,320px)]"
                    : "absolute hidden md:block w-[clamp(220px,24%,320px)]"
                }
                style={{
                  left: `${50 + offset * STEP}%`,
                  transform: "translateX(-50%)",
                  transition: `left ${DURATION} ${SMOOTH_CURVE}`,
                  cursor: offset === 0 ? "default" : "pointer",
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <HealerCard healer={healer} onBook={handleBook} distance={offset} />
              </div>
            );
          })}
        </div>

        {/* Dots & Nav */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 mt-8 sm:mt-10 px-4">
          <NavBtn onClick={() => go(-1)} disabled={activeIndex === 0}><ChevronLeft /></NavBtn>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-[60vw] sm:max-w-none">
            {SPECIALISTS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? 32 : 8,
                  height: 8,
                  borderRadius: 5,
                  background: i === activeIndex ? "#1E3E34" : "#e2e8f0",
                  transition: `all 0.8s ${SMOOTH_CURVE}`,
                }}
              />
            ))}
          </div>
          <NavBtn onClick={() => go(1)} disabled={activeIndex === total - 1}><ChevronRight /></NavBtn>
        </div>
      </div>
    </section>
  );
}

function NavBtn({ onClick, disabled, children }: { onClick: () => void; disabled: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-11 h-11 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full border border-slate-100 bg-white flex items-center justify-center text-[#1E3E34] shadow-sm transition-all duration-300 shrink-0"
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
      }}
    >
      {children}
    </button>
  );
}
