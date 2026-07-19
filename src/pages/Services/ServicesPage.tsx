import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock, Check } from "lucide-react";
import { pageTransition } from "@/src/components/FadeIn";
import { SERVICES } from "@/src/common/data";
import { SpaCategory } from "@/src/common/types";
import type { Service, SpaCategoryValue } from "@/src/common/types";

export type ServiceCategoryFilter = "All" | SpaCategoryValue;

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  initialCategory?: ServiceCategoryFilter;
  highlightServiceId?: string | null;
  onCategoryChange?: (category: ServiceCategoryFilter) => void;
}

export default function ServicesPage({
  onSelectService,
  initialCategory = "All",
  highlightServiceId = null,
  onCategoryChange,
}: ServicesPageProps) {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryFilter>(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    if (!highlightServiceId) return;
    const el = document.getElementById(`service-card-${highlightServiceId}`);
    if (!el) return;
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 350);
    return () => window.clearTimeout(t);
  }, [highlightServiceId, activeCategory]);

  const categories: ServiceCategoryFilter[] = [
    "All",
    ...Object.values(SpaCategory),
  ];

  const filteredServices = SERVICES.filter(
    (s) => activeCategory === "All" || s.category === activeCategory,
  );

  const title =
    activeCategory === "All" ? "Our Services" : activeCategory;

  const selectCategory = (category: ServiceCategoryFilter) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <motion.div
      key={`services-${initialCategory}`}
      {...pageTransition}
      className="w-full"
    >
      {/* Top video banner */}
      <section className="relative h-[38vh] sm:h-[42vh] min-h-[240px] sm:min-h-[260px] max-h-[420px] overflow-hidden bg-[#022A24]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,84,70,0.2),transparent_70%)]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-24">
          <span className="text-[#DECBA5] text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.35em] font-display uppercase font-black mb-3 px-2">
            Treatment Collection
          </span>
          <h1 className="font-serif text-[clamp(1.5rem,5.5vw,3rem)] text-[#FAF8F5] font-bold tracking-wide uppercase leading-tight px-2 max-w-4xl">
            {title}
          </h1>
          <p className="mt-3 text-[#FAF8F5]/75 text-xs md:text-sm font-display max-w-xl px-2">
            Explore curated therapies in this category and reserve your session
            instantly.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 sm:mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest font-bold transition-all duration-300 cursor-pointer rounded-lg border ${
                  activeCategory === category
                    ? "bg-[#1E3E34] text-white border-[#1E3E34] shadow-lg shadow-[#1E3E34]/15"
                    : "bg-white/60 border-slate-200 text-slate-800 hover:bg-white hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredServices.length === 0 ? (
            <p className="text-center text-slate-500 font-display text-sm py-16">
              No services listed in this category yet. Please check another
              collection.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(2,42,36,0.90), rgba(2,42,36,0.94)), url('/background.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className={`border rounded-3xl overflow-hidden shadow-lg shadow-[#022A24]/25 hover:scale-[1.01] transition-all duration-300 flex flex-col group ${
                    highlightServiceId === service.id
                      ? "border-[#DECBA5] ring-2 ring-[#DECBA5]/50"
                      : "border-[#DECBA5]/25 hover:border-[#DECBA5]/50"
                  }`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 right-3 sm:right-auto max-w-[calc(100%-1.5rem)] sm:max-w-[75%] text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#1E3E34] bg-white/90 border border-[#DECBA5]/30 px-2.5 py-1 rounded truncate">
                      {service.category}
                    </div>
                    {/* Rating — hidden for now
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-[#1E3E34] font-extrabold font-mono bg-white/90 px-2 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                      <span>{service.rating.toFixed(1)}</span>
                    </div>
                    */}
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-base sm:text-lg text-[#FAF8F5] font-extrabold group-hover:text-[#DECBA5] transition-colors mb-2 leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#E9E4DB]/75 font-display font-medium leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[11px] text-[#FAF8F5]/85 font-semibold leading-tight"
                          >
                            <Check className="w-3.5 h-3.5 text-[#DECBA5] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="h-[1px] bg-[#DECBA5]/25 w-full mb-4" />
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className="flex items-center gap-1 text-[#FAF8F5]/60 text-xs font-mono font-semibold shrink-0">
                            <Clock className="w-3.5 h-3.5 text-[#DECBA5]" />
                            <span>{service.durationMinutes} min</span>
                          </div>
                          {/* Price — hidden for now
                          <span className="text-[#DECBA5] font-black text-base font-mono">
                            ₹{service.price.toLocaleString("en-IN")}
                          </span>
                          */}
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectService(service)}
                          className="shrink-0 px-3 sm:px-4 py-2 bg-[#DECBA5] text-[#1E3E34] text-[10px] uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer shadow-sm rounded-xl hover:bg-[#E9E4DB] hover:scale-105"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
