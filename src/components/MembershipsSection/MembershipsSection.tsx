import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles, Calendar, ArrowRight } from "lucide-react";
import FadeIn, { softEase } from "@/src/components/FadeIn";
import { PRICING_PACKAGES } from "@/src/common/data";

interface MembershipsSectionProps {
  onSelectPlan: (plan: string) => void;
  preview?: boolean;
  onViewAll?: () => void;
}

export default function MembershipsSection({
  onSelectPlan,
  preview = false,
  onViewAll,
}: MembershipsSectionProps) {
  const [filterType, setFilterType] = useState("all");

  const plans = PRICING_PACKAGES;

  const filteredPlans = plans.filter(
    (p) => filterType === "all" || p.type === filterType,
  );

  const displayedPlans = preview
    ? [...filteredPlans]
        .sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        .slice(0, 3)
    : filteredPlans;

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="memberships-section"
    >
      <div className="absolute top-12 right-12 w-[450px] h-[450px] bg-white/50 rounded-full blur-[90px] opacity-75 pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-[450px] h-[450px] bg-[#DECBA5]/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Memberships & Packages
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
            Select a membership tier, prepaid package, or couple&apos;s
            experience fitted to your recovery routine.
          </p>
        </FadeIn>

        {!preview && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { key: "all", label: "Show All" },
              { key: "membership", label: "Memberships" },
              { key: "package", label: "Packages" },
              { key: "couple-spa", label: "Couple Spa" },
              { key: "couple-celebration", label: "Couple Celebration" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilterType(tab.key)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-500 ease-out cursor-pointer rounded-lg border ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: Math.min(index * 0.1, 0.35),
                ease: softEase,
              }}
              className={`relative bg-white/60 backdrop-blur-sm border rounded-[2rem] p-8 shadow-sm flex flex-col justify-between group transition-transform duration-700 ease-out hover:scale-[1.015] ${
                plan.popular
                  ? "border-[#2D5446] ring-1 ring-[#2D5446]/30 shadow-md shadow-[#2D5446]/5"
                  : "border-[#DECBA5]/30 hover:border-[#DECBA5]/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#1E3E34] text-white text-[9px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-white" /> Highly
                  Recommended
                </div>
              )}

              <div className="text-left space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-slate-400">
                    {plan.type.replace("-", " ")} commitment
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-slate-900 font-extrabold group-hover:text-[#1E3E34] transition-colors duration-500 leading-snug">
                    {plan.title}
                  </h3>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-slate-900 font-black text-3xl font-mono">
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-slate-500 text-xs font-mono font-semibold">
                    / {plan.duration}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-display font-medium leading-relaxed">
                  {plan.description}
                </p>

                <div className="h-[1px] bg-slate-200/60 w-full" />

                <div className="space-y-3.5">
                  {plan.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-display font-semibold leading-snug text-left">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 text-left">
                <button
                  onClick={() => onSelectPlan(plan.title)}
                  className="w-full py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all duration-500 ease-out flex items-center justify-center gap-2 rounded-xl shadow-sm cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Secure Commitment</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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
      </div>
    </section>
  );
}
