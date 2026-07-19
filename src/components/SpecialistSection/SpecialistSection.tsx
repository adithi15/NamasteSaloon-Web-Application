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
      <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden" }}>
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
        <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "#2D5446", marginBottom: 12 }}>
          {healer.specialtyTag}
        </p>
        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, fontStyle: "italic", marginBottom: 16 }}>
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
            fontFamily: "monospace",
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
    <section ref={sectionRef} style={{ position: "relative", padding: "120px 0", background: "#fff" }}>
      <div style={{
        textAlign: "center", maxWidth: 700, margin: "0 auto 80px", padding: "0 24px",
        opacity: sectionInView ? 1 : 0, transform: sectionInView ? "translateY(0)" : "translateY(40px)",
        transition: `all 1.2s ${SMOOTH_CURVE}`,
      }}>
        <h2 style={{ fontFamily: "Calgary, Gilroy, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>
          Our Specialists
        </h2>
        <p style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.8 }}>
          Expert clinical practitioners for your holistic recovery.
        </p>
      </div>

      <div style={{ opacity: sectionInView ? 1 : 0, transition: "opacity 1.5s ease 0.4s" }}>
        <div
          ref={stageRef}
          style={{
            position: "relative",
            width: "100%",
            height: 480,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            touchAction: "pan-y",
          }}
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
                style={{
                  position: "absolute",
                  width: "clamp(220px, 24%, 320px)",
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 40 }}>
          <NavBtn onClick={() => go(-1)} disabled={activeIndex === 0}><ChevronLeft /></NavBtn>
          <div style={{ display: "flex", gap: 10 }}>
            {SPECIALISTS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? 40 : 10,
                  height: 10,
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
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "1px solid #f1f5f9",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "all 0.3s ease",
        color: "#1E3E34",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </button>
  );
}
