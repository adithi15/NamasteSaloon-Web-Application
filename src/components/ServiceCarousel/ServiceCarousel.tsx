import { useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import FadeIn from "@/src/components/FadeIn";
import { SERVICES } from "@/src/common/data";
import type { Service } from "@/src/common/types";

interface ServiceCarouselProps {
  onKnowMore: (service: Service) => void;
}

const SLIDE_MS = 1200;
const SLIDE_EASE = "cubic-bezier(0.45, 0.05, 0.25, 1)";
const BLUR_MS = 450;

const FEATURED_ORDER = [
  "service-1",
  "service-14",
  "service-10",
  "service-27",
  "service-13",
  "service-22",
  "service-34",
  "service-16",
  "service-35",
] as const;

export default function ServiceCarousel({ onKnowMore }: ServiceCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const indexRef = useRef(0);
  const maxIndexRef = useRef(0);
  const reduceMotion = useReducedMotion();
  const blurTimerRef = useRef<number | null>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const featuredById = new Map(
    SERVICES.filter((s) => s.isFeatured).map((s) => [s.id, s]),
  );
  const featuredServices = FEATURED_ORDER.map((id) => featuredById.get(id)).filter(
    (s): s is Service => Boolean(s),
  );

  const applyTransform = (nextIndex: number, animate: boolean) => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track) return;
    const x = -(nextIndex * stepRef.current);

    if (animate && !reduceMotion && viewport) {
      if (blurTimerRef.current != null) {
        window.clearTimeout(blurTimerRef.current);
      }

      viewport.style.transition = `filter ${BLUR_MS}ms ${SLIDE_EASE}, opacity ${BLUR_MS}ms ${SLIDE_EASE}`;
      viewport.style.filter = "blur(4px)";
      viewport.style.opacity = "0.82";

      track.style.transition = `transform ${SLIDE_MS}ms ${SLIDE_EASE}`;
      track.style.transform = `translate3d(${x}px, 0, 0)`;

      blurTimerRef.current = window.setTimeout(() => {
        if (!viewportRef.current) return;
        viewportRef.current.style.filter = "blur(0px)";
        viewportRef.current.style.opacity = "1";
        blurTimerRef.current = null;
      }, Math.min(SLIDE_MS * 0.55, 700));
      return;
    }

    track.style.transition = "none";
    track.style.transform = `translate3d(${x}px, 0, 0)`;
    if (viewport) {
      viewport.style.filter = "blur(0px)";
      viewport.style.opacity = "1";
    }
  };

  const syncButtons = (i: number) => {
    setCanPrev(i > 0);
    setCanNext(i < maxIndexRef.current);
  };

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const card = firstCardRef.current;
    const track = trackRef.current;
    if (!viewport || !card || !track) return;

    let raf = 0;
    const measure = () => {
      const gap =
        parseFloat(
          getComputedStyle(track).columnGap || getComputedStyle(track).gap,
        ) || (window.matchMedia("(min-width: 640px)").matches ? 24 : 16);
      const nextStep = card.offsetWidth + gap;
      const visible = Math.max(
        1,
        Math.floor((viewport.clientWidth + gap) / nextStep),
      );
      const nextMax = Math.max(0, featuredServices.length - visible);

      const stepChanged = Math.abs(nextStep - stepRef.current) > 0.5;
      stepRef.current = nextStep;
      maxIndexRef.current = nextMax;

      if (indexRef.current > nextMax) {
        indexRef.current = nextMax;
      }

      applyTransform(indexRef.current, false);
      syncButtons(indexRef.current);

      // only needed when step first becomes valid
      if (stepChanged) {
        applyTransform(indexRef.current, false);
      }
    };

    measure();
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    });
    ro.observe(viewport);
    ro.observe(card);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [featuredServices.length, reduceMotion]);

  const go = (direction: -1 | 1) => {
    const next = Math.min(
      Math.max(indexRef.current + direction, 0),
      maxIndexRef.current,
    );
    if (next === indexRef.current) return;
    indexRef.current = next;
    // DOM transform — no React re-render of all cards
    applyTransform(next, true);
    syncButtons(next);
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-transparent"
      id="services-carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="relative mb-6 md:mb-8">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-slate-900 font-bold px-1">
              Featured Offerings
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-3 mb-3" />
            <p className="mt-1 text-sm text-slate-600 max-w-xl font-display font-semibold text-center px-2">
              Immerse yourself in our highly sought-after, practitioner-led
              treatments designed to restore biological vitality and elevate
              somatic awareness.
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 mt-4 md:mt-0 md:absolute md:right-0 md:bottom-0 select-none">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={!canPrev}
              className="p-3 rounded-full border border-[#DECBA5]/30 bg-white/60 text-slate-800 hover:bg-[#1E3E34] hover:text-white transition-colors duration-150 cursor-pointer shadow-sm disabled:opacity-35 disabled:pointer-events-none"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={!canNext}
              className="p-3 rounded-full border border-[#DECBA5]/30 bg-white/60 text-slate-800 hover:bg-[#1E3E34] hover:text-white transition-colors duration-150 cursor-pointer shadow-sm disabled:opacity-35 disabled:pointer-events-none"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>

        <FadeIn>
          <div
            ref={viewportRef}
            className="overflow-hidden pb-2 will-change-[filter,opacity]"
            style={{ filter: "blur(0px)", opacity: 1 }}
          >
            <div
              ref={trackRef}
              className="featured-track flex gap-4 sm:gap-6"
              style={{
                transform: "translate3d(0,0,0)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              {featuredServices.map((service, i) => (
                <article
                  key={service.id}
                  ref={i === 0 ? firstCardRef : undefined}
                  className="card-leaf-bg w-[min(85vw,280px)] sm:w-[320px] md:w-[380px] flex-shrink-0 rounded-3xl overflow-hidden border border-[#DECBA5]/25 shadow-lg shadow-[#022A24]/25 flex flex-col justify-between"
                  id={`carousel-item-${service.id}`}
                >
                  <div className="relative h-48 md:h-56 overflow-hidden bg-[#022A24]">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E3E34]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 bg-white/95 border border-[#DECBA5]/30 px-3 py-1 rounded text-[9px] uppercase tracking-wider font-extrabold text-[#1E3E34] truncate max-w-[calc(100%-2rem)]">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-extrabold text-[#FAF8F5] text-base sm:text-lg md:text-xl tracking-tight mb-2">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#FAF8F5]/70 line-clamp-3 leading-relaxed mb-6 font-display font-medium">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <div className="h-px bg-[#DECBA5]/20 w-full mb-4" />
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5 text-[#FAF8F5]/60 text-xs font-mono font-bold shrink-0">
                          <Clock className="w-3.5 h-3.5 text-[#DECBA5]" />
                          <span>{service.durationMinutes} min</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onKnowMore(service)}
                          className="shrink-0 px-3 sm:px-4 py-2 bg-[#DECBA5] text-[#1E3E34] rounded-xl text-[10px] sm:text-xs uppercase tracking-widest font-extrabold cursor-pointer"
                        >
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
