import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock, Star, Check } from "lucide-react";
import { pageTransition } from "@/src/components/FadeIn";
import { SERVICES } from "@/src/common/data";
import { SpaCategory } from "@/src/common/types";
import type { Service, SpaCategoryValue } from "@/src/common/types";

export type ServiceCategoryFilter = "All" | SpaCategoryValue;

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  initialCategory?: ServiceCategoryFilter;
}

export default function ServicesPage({
  onSelectService,
  initialCategory = "All",
}: ServicesPageProps) {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryFilter>(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const categories: ServiceCategoryFilter[] = [
    "All",
    ...Object.values(SpaCategory),
  ];

  const filteredServices = SERVICES.filter(
    (s) => activeCategory === "All" || s.category === activeCategory,
  );

  const title =
    activeCategory === "All" ? "Our Services" : activeCategory;

  return (
    <motion.div
      key={`services-${initialCategory}`}
      {...pageTransition}
      className="w-full"
    >
      {/* Top video banner */}
      <section className="relative h-[42vh] min-h-[260px] max-h-[420px] overflow-hidden bg-[#022A24]">
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

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
          <span className="text-[#DECBA5] text-[10px] tracking-[0.35em] font-display uppercase font-black mb-3">
            Treatment Collection
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#FAF8F5] font-bold tracking-wide uppercase">
            {title}
          </h1>
          <p className="mt-3 text-[#FAF8F5]/75 text-xs md:text-sm font-display max-w-xl">
            Explore curated therapies in this category and reserve your session
            instantly.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer rounded-lg border ${
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
                  className="bg-white/60 backdrop-blur-md border border-[#DECBA5]/30 hover:border-[#DECBA5]/50 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.01] transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#1E3E34] bg-white/90 border border-[#DECBA5]/30 px-2.5 py-1 rounded">
                      {service.category}
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-xs text-[#1E3E34] font-extrabold font-mono bg-white/90 px-2 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                      <span>{service.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-serif text-lg text-slate-900 font-extrabold group-hover:text-[#1E3E34] transition-colors mb-2 leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-display font-medium leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <ul className="space-y-1.5 mb-4">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[11px] text-slate-700 font-semibold leading-tight"
                          >
                            <Check className="w-3.5 h-3.5 text-[#2D5446] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="h-[1px] bg-slate-200/60 w-full mb-4" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="flex items-center gap-1 text-slate-500 text-xs font-mono font-semibold">
                            <Clock className="w-3.5 h-3.5 text-[#2D5446]" />
                            <span>{service.durationMinutes} min</span>
                          </div>
                          <span className="text-slate-900 font-black text-base font-mono">
                            ₹{service.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectService(service)}
                          className="px-4 py-2 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-[10px] uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer shadow-sm rounded-xl hover:scale-105"
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
