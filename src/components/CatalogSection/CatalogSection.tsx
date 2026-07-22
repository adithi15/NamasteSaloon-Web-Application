import React, { useState } from "react";
import { Clock, Star, Sparkles, Check } from "lucide-react";
import { SERVICES } from "@/src/common/data";
import { SpaCategory } from "@/src/common/types";

import type { Service } from "@/src/common/types";

interface CatalogSectionProps {
  onSelectService: (service: Service) => void;
}

export default function CatalogSection({ onSelectService }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Object.values(SpaCategory)];

  const filteredServices = SERVICES.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section className="relative py-20 bg-transparent border-t border-b border-[#DECBA5]/30" id="catalog-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,84,70,0.02),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">SOMATIC TREATMENT DIRECTORY</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Our Healing Menu
          </h2>
          <p className="mt-3.5 text-slate-600 text-sm md:text-base font-semibold font-display">
            Browse all our medical-grade therapies, restoration suites, biometrics and holistic classes. Select any treatment to schedule instantly.
          </p>
        </div>

        {/* Elegant Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
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

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-leaf-bg border border-[#DECBA5]/30 hover:border-[#DECBA5]/50 rounded-3xl p-6 shadow-lg shadow-[#022A24]/25 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#1E3E34] bg-[#DECBA5] border border-[#DECBA5]/40 px-2.5 py-1 rounded">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#DECBA5] font-extrabold font-mono">
                    <Star className="w-3.5 h-3.5 fill-[#DECBA5] text-[#DECBA5]" />
                    <span>{service.rating.toFixed(2)}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg text-[#FAF8F5] font-extrabold group-hover:text-[#DECBA5] transition-colors mb-2 leading-snug">
                  {service.name}
                </h3>
                
                <p className="text-xs text-[#FAF8F5]/70 font-display font-medium leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Benefits breakdown */}
                <div className="mb-6 space-y-2">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-[#DECBA5]/70 block">
                    Key physiological benefits
                  </span>
                  <ul className="space-y-1.5">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-[#FAF8F5]/85 font-semibold leading-tight">
                        <Check className="w-3.5 h-3.5 text-[#DECBA5] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="h-[1px] bg-[#DECBA5]/25 w-full mb-4" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex items-center gap-1 text-[#FAF8F5]/65 text-xs font-mono font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#DECBA5]" />
                      <span>{service.durationMinutes} min</span>
                    </div>
                    <span className="text-[#FAF8F5] font-black text-base font-mono">
                      ₹{service.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectService(service)}
                    className="px-4 py-2 bg-[#DECBA5] hover:bg-[#E9E4DB] text-[#1E3E34] text-[10px] uppercase tracking-widest font-extrabold transition-all duration-300 cursor-pointer shadow-sm rounded-xl hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
