 

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Star, Sparkles } from "lucide-react";
import { SERVICES } from "../data.js";
// import { getWhatsAppUrl } from "./whatsapp.js";

export default function ServiceCarousel({ onSelectService }) {
  const carouselRef = useRef(null);
  
  // Filter for featured services
  const featuredServices = SERVICES.filter(s => s.isFeatured);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="services-carousel">
      {/* Decorative background radial fade */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#2D5446]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Header block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#2D5446]" />
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">REMEDY DISCOVERIES</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-bold">
              Featured Offerings
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl font-display font-semibold">
              Immerse yourself in our highly sought-after, practitioner-led treatments designed to restore biological vitality and elevate somatic awareness.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0 select-none">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-[#DECBA5]/30 bg-white/60 text-slate-800 hover:bg-[#1E3E34] hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-[#DECBA5]/30 bg-white/60 text-slate-800 hover:bg-[#1E3E34] hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar custom-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 snap-start bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
              id={`carousel-item-${service.id}`}
            >
              {/* Cover Image & Attributes overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[#1E3E34] font-extrabold text-xs flex items-center gap-1 border border-[#DECBA5]/30 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                  <span>{service.rating.toFixed(2)}</span>
                  <span className="text-slate-500 text-[9px] font-normal font-sans">({service.ratingCount})</span>
                </div>

                {/* Service Category Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-[#DECBA5]/30 px-3 py-1 rounded text-[9px] uppercase tracking-wider font-extrabold text-[#1E3E34]">
                  {service.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg md:text-xl font-display tracking-tight mb-2 group-hover:text-[#1E3E34] transition-colors duration-250">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6 font-display font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Pricing and Quick Book */}
                <div>
                  <div className="h-[1px] bg-slate-200/60 w-full mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {/* Duration */}
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#2D5446]" />
                        <span>{service.durationMinutes} min</span>
                      </div>
                      {/* Price */}
                      <div className="flex items-center gap-0.5 text-slate-900 font-bold text-base font-mono">
                        <span className="text-sm font-normal text-slate-400">$</span>
                        <span className="font-extrabold">{service.price}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      // onClick={openWhatsAppGeneral}
                      className="px-4 py-2 bg-[#1E3E34] hover:bg-[#2D5446] text-white rounded-xl text-xs uppercase tracking-widest font-extrabold transition-all hover:scale-105 cursor-pointer shadow-md active:scale-95"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
