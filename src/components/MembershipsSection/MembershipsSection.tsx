import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import FadeIn, { spaEase } from "@/src/components/FadeIn";
import { PRICING_PACKAGES } from "@/src/common/data";
import type { PackageType, PricingPackage } from "@/src/common/types";

interface MembershipsSectionProps {
  onSelectPlan: (plan: string) => void;
  preview?: boolean;
  onViewAll?: () => void;
  initialFilter?: PackageType | "all";
  /** Home preview: Know More → open memberships page for this plan type */
  onKnowMore?: (plan: PricingPackage) => void;
  onFilterChange?: (filter: PackageType | "all") => void;
}

export default function MembershipsSection({
  onSelectPlan,
  preview = false,
  onViewAll,
  initialFilter = "all",
  onKnowMore,
  onFilterChange,
}: MembershipsSectionProps) {
  const reduceMotion = useReducedMotion();
  const [filterType, setFilterType] =
    useState<PackageType | "all">(initialFilter);

  useEffect(() => {
    setFilterType(initialFilter);
  }, [initialFilter]);

  const plans = PRICING_PACKAGES;

  const filteredPlans = plans.filter(
    (p) => filterType === "all" || p.type === filterType,
  );

  const displayedPlans = preview
    ? [...filteredPlans]
        .sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        .slice(0, 3)
    : filteredPlans;

  const gridDur = reduceMotion ? 0.01 : 1.4;
  const cardDur = reduceMotion ? 0.01 : 1.45;

  return (
    <section
      className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="memberships-section"
    >
      <div className="absolute top-12 right-12 w-[min(450px,80vw)] h-[min(450px,80vw)] bg-white/50 rounded-full blur-[90px] opacity-75 pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-[min(450px,80vw)] h-[min(450px,80vw)] bg-[#DECBA5]/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide px-1">
            Memberships & Packages
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display px-1">
            Select a membership tier, prepaid package, or couple&apos;s
            experience fitted to your recovery routine.
          </p>
        </FadeIn>

        {!preview && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
            {[
              { key: "all" as const, label: "Show All" },
              { key: "membership" as const, label: "Memberships" },
              { key: "package" as const, label: "Packages" },
              { key: "couple-spa" as const, label: "Couple Spa" },
              {
                key: "couple-celebration" as const,
                label: "Couple Celebration",
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setFilterType(tab.key);
                  onFilterChange?.(tab.key);
                }}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold transition-all duration-700 ease-[cubic-bezier(0.5,0.02,0.18,1)] cursor-pointer rounded-lg border ${
                  filterType === tab.key
                    ? "bg-[#1E3E34] text-white border-[#1E3E34] shadow-lg shadow-[#1E3E34]/15"
                    : "bg-white/60 border-slate-200 text-slate-800 hover:bg-white hover:text-slate-950"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={preview ? "preview" : filterType}
            {...(preview
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: gridDur * 0.55, ease: spaEase },
                })}
            className={`${preview ? "" : "spa-float-stage "}grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4`}
          >
            {displayedPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 22 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: cardDur,
                  delay: reduceMotion
                    ? 0
                    : Math.min(index * 0.1, 0.45),
                  ease: spaEase,
                }}
                className={preview ? undefined : "[perspective:1400px]"}
              >
                <div
                  className={`card-leaf-bg relative border rounded-[2rem] p-5 sm:p-8 shadow-lg shadow-[#022A24]/25 flex flex-col justify-between group overflow-visible ${
                    preview || reduceMotion ? "" : "spa-card-float"
                  } ${
                    plan.popular
                      ? "border-[#DECBA5] ring-1 ring-[#DECBA5]/40"
                      : "border-[#DECBA5]/25 hover:border-[#DECBA5]/50"
                  }`}
                  style={
                    reduceMotion || preview
                      ? undefined
                      : { animationDelay: `${index * -8}s` }
                  }
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-4 sm:right-8 transform -translate-y-1/2 bg-[#DECBA5] text-[#1E3E34] text-[9px] uppercase tracking-widest font-black px-3 sm:px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1 max-w-[calc(100%-2rem)]">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />{" "}
                      <span className="truncate">Highly Recommended</span>
                    </div>
                  )}

                  <div className="text-left space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#DECBA5]/70">
                        {plan.type.replace("-", " ")} commitment
                      </span>
                      <h3 className="font-serif text-lg md:text-xl text-[#FAF8F5] font-extrabold group-hover:text-[#DECBA5] transition-colors duration-500 leading-snug">
                        {plan.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="text-[#DECBA5] font-black text-2xl sm:text-3xl font-mono">
                        ₹{plan.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[#E9E4DB]/55 text-xs font-mono font-semibold">
                        / {plan.duration}
                      </span>
                    </div>

                    <p className="text-xs text-[#E9E4DB]/75 font-display font-medium leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="h-[1px] bg-[#DECBA5]/25 w-full" />

                    <div className="space-y-3.5">
                      {plan.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#DECBA5] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#FAF8F5]/85 font-display font-semibold leading-snug text-left">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {!preview ? null : (
                    <div className="pt-8 text-left">
                      <button
                        type="button"
                        onClick={() => {
                          if (onKnowMore) {
                            onKnowMore(plan);
                            return;
                          }
                          onSelectPlan(plan.title);
                        }}
                        className="w-full py-3 bg-[#DECBA5] text-[#1E3E34] text-xs uppercase tracking-widest font-extrabold transition-all duration-500 ease-out flex items-center justify-center gap-2 rounded-xl shadow-sm cursor-pointer hover:bg-[#E9E4DB] hover:scale-[1.02] active:scale-95"
                      >
                        <ArrowRight className="w-4 h-4" />
                        <span>Know More</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See All — hidden; Know More already opens memberships
        {preview && (
          <FadeIn delay={0.15} className="flex justify-center mt-14">
            <button
              onClick={onViewAll}
              className="px-8 py-3.5 bg-transparent border border-[#1E3E34] text-[#1E3E34] hover:bg-[#1E3E34] hover:text-white text-xs uppercase tracking-widest font-extrabold transition-all duration-500 ease-out flex items-center gap-2 rounded-xl cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <span>See All Memberships & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>
        )}
        */}
      </div>
    </section>
  );
}
