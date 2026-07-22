import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Clock, Check } from "lucide-react";
import { pageTransition, softEase } from "@/src/components/FadeIn";
import { SERVICES, SERVICE_CHAPTERS } from "@/src/common/data";
import { SpaCategory } from "@/src/common/types";
import type { Service, SpaCategoryValue } from "@/src/common/types";

export type ServiceCategoryFilter = "All" | SpaCategoryValue;

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  initialCategory?: ServiceCategoryFilter;
  highlightServiceId?: string | null;
  onCategoryChange?: (category: ServiceCategoryFilter) => void;
}

function formatInr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function PriceTier({
  tiers,
}: {
  tiers: { durationMinutes: number; price: number; label?: string }[];
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tiers.map((tier, i) => (
        <div
          key={i}
          className="inline-flex items-stretch overflow-hidden rounded-lg border border-slate-200/90 bg-white/80 text-[10px] sm:text-[11px] font-mono font-bold text-slate-700 transition-colors duration-500 hover:border-[#DECBA5]"
        >
          {tier.label ? (
            <span className="px-2 py-1.5 bg-[#E9E4DB]/60 text-[#1E3E34] border-r border-slate-200/80">
              {tier.label}
            </span>
          ) : null}
          <span className="px-2.5 py-1.5 flex items-center gap-1 border-r border-slate-200/80 bg-white/90">
            <Clock className="w-3 h-3 text-[#2D5446] shrink-0" />
            {tier.durationMinutes} min
          </span>
          <span className="px-2.5 py-1.5 bg-slate-100/90 text-slate-800">
            {formatInr(tier.price)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage({
  onSelectService,
  initialCategory = "All",
  highlightServiceId = null,
  onCategoryChange,
}: ServicesPageProps) {
  const reduceMotion = useReducedMotion();
  const chapters = Object.values(SpaCategory);

  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryFilter>(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (!highlightServiceId) return;
    const el = document.getElementById(`service-row-${highlightServiceId}`);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 400);
    return () => window.clearTimeout(t);
  }, [highlightServiceId, activeCategory]);

  const chapterMeta = useMemo(() => {
    if (activeCategory === "All") {
      return {
        number: "00",
        title: "Our Services",
        intro:
          "Nine treatment chapters from our rate card — choose a collection below to explore durations, pricing, and rituals.",
        image: SERVICE_CHAPTERS[0]?.image ?? "/images/services/massage/1.jpg",
      };
    }
    const meta = SERVICE_CHAPTERS.find((c) => c.category === activeCategory);
    return {
      number: meta?.number ?? "—",
      title: activeCategory,
      intro: meta?.intro ?? "",
      image: meta?.image ?? "/images/services/massage/1.jpg",
    };
  }, [activeCategory]);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") {
      // Overview: one featured highlight per chapter
      return SERVICE_CHAPTERS.map((ch) => {
        const inChapter = SERVICES.filter((s) => s.category === ch.category);
        return (
          inChapter.find((s) => s.isFeatured) ??
          inChapter[0] ??
          null
        );
      }).filter((s): s is Service => Boolean(s));
    }
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const selectCategory = (category: ServiceCategoryFilter) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  const motionDur = reduceMotion ? 0.01 : 0.65;
  const rowDur = reduceMotion ? 0.01 : 0.7;

  return (
    <motion.div
      key={`services-${initialCategory}`}
      {...pageTransition}
      className="w-full"
    >
      {/* Brochure chapter banner */}
      <section className="relative h-[36vh] sm:h-[40vh] min-h-[220px] sm:min-h-[260px] max-h-[400px] overflow-hidden bg-[#022A24]">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#022A24]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,84,70,0.25),transparent_70%)]" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between gap-4 pb-8 sm:pb-10 pt-20 md:pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={chapterMeta.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{ duration: motionDur, ease: softEase }}
              className="text-left min-w-0 flex-1"
            >
              <span className="text-[#DECBA5] text-[9px] sm:text-[10px] tracking-[0.28em] font-display uppercase font-black block mb-2">
                Treatment Collection
              </span>
              <h1 className="font-serif text-[clamp(1.65rem,5vw,3.25rem)] text-[#DECBA5] font-bold leading-tight">
                {chapterMeta.title}
              </h1>
              {chapterMeta.intro ? (
                <p className="mt-2 sm:mt-3 text-[#FAF8F5]/75 text-xs sm:text-sm font-display max-w-xl leading-relaxed">
                  {chapterMeta.intro}
                </p>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <motion.span
            key={`num-${chapterMeta.number}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: motionDur, ease: softEase }}
            className="font-sans text-[clamp(2.75rem,10vw,6rem)] font-black text-white/90 leading-none select-none shrink-0 tabular-nums"
            aria-hidden
          >
            {chapterMeta.number}
          </motion.span>
        </div>
      </section>

      {/* Chapter body */}
      <section className="relative py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]/40">
        <div className="max-w-7xl mx-auto">
          {/* Chapter tabs */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-thin -mx-1 px-1">
            <button
              type="button"
              onClick={() => selectCategory("All")}
              className={`shrink-0 px-3.5 sm:px-4 py-2 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold rounded-lg border transition-all duration-500 ease-out cursor-pointer ${
                activeCategory === "All"
                  ? "bg-[#1E3E34] text-white border-[#1E3E34]"
                  : "bg-white/70 border-[#DECBA5]/40 text-slate-700 hover:border-[#DECBA5]"
              }`}
            >
              All Chapters
            </button>
            {chapters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={`shrink-0 px-3.5 sm:px-4 py-2 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold rounded-lg border transition-all duration-500 ease-out cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[#1E3E34] text-white border-[#1E3E34]"
                    : "bg-white/70 border-[#DECBA5]/40 text-slate-700 hover:border-[#DECBA5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              transition={{ duration: motionDur, ease: softEase }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Treatment list */}
              <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">
                {filteredServices.length === 0 ? (
                  <p className="text-center text-slate-500 font-display text-sm py-16">
                    No treatments in this chapter yet.
                  </p>
                ) : (
                  filteredServices.map((service, index) => {
                    const displayTiers =
                      service.priceTiers && service.priceTiers.length > 0
                        ? service.priceTiers
                        : [
                            {
                              durationMinutes: service.durationMinutes,
                              price: service.price,
                            },
                          ];

                    return (
                      <motion.article
                        key={service.id}
                        id={`service-row-${service.id}`}
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: rowDur,
                          delay: reduceMotion
                            ? 0
                            : Math.min(index * 0.07, 0.35),
                          ease: softEase,
                        }}
                        className={`border-b border-[#DECBA5]/35 pb-5 sm:pb-6 last:border-b-0 ${
                          highlightServiceId === service.id
                            ? "ring-1 ring-[#DECBA5]/60 rounded-xl px-3 -mx-1"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                          <div className="flex-1 min-w-0 text-left">
                            {service.koreanName ? (
                              <p className="text-[10px] font-mono tracking-wider text-[#2D5446]/70 font-bold mb-0.5">
                                {service.koreanName}
                              </p>
                            ) : null}
                            <h3 className="font-display text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#1E3E34]">
                              {service.name}
                            </h3>
                            {activeCategory === "All" ? (
                              <p className="mt-1 text-[10px] uppercase tracking-widest font-mono font-bold text-[#DECBA5]">
                                {service.category}
                              </p>
                            ) : null}
                            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-display font-medium leading-relaxed">
                              {service.description}
                            </p>

                            {service.steps && service.steps.length > 0 ? (
                              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                {service.steps.map((step) => (
                                  <li
                                    key={step}
                                    className="flex items-start gap-1.5 text-[11px] text-slate-600 font-semibold"
                                  >
                                    <Check className="w-3 h-3 text-[#2D5446] shrink-0 mt-0.5" />
                                    <span>{step}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}

                            <PriceTier tiers={displayTiers} />
                          </div>

                          <button
                            type="button"
                            onClick={() => onSelectService(service)}
                            className="shrink-0 self-start sm:self-center px-4 py-2.5 bg-[#DECBA5] text-[#1E3E34] text-[10px] uppercase tracking-widest font-extrabold rounded-xl shadow-sm cursor-pointer transition-all duration-500 ease-out hover:bg-[#E9E4DB] active:scale-[0.98]"
                          >
                            Book Now
                          </button>
                        </div>
                      </motion.article>
                    );
                  })
                )}
              </div>

              {/* Sticky lifestyle image */}
              <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2">
                <div className="lg:sticky lg:top-28">
                  <motion.div
                    key={chapterMeta.image}
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: reduceMotion ? 0.01 : 1.1, ease: softEase }}
                    className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg shadow-[#022A24]/15"
                  >
                    <img
                      src={chapterMeta.image}
                      alt={chapterMeta.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022A24]/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[#DECBA5] text-[10px] uppercase tracking-[0.2em] font-mono font-black">
                        Chapter {chapterMeta.number}
                      </p>
                      <p className="text-white font-serif text-lg sm:text-xl font-bold mt-1">
                        {chapterMeta.title}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
}
