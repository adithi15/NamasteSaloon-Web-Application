import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import FadeIn, { softEase } from "@/src/components/FadeIn";
import { SERVICES } from "@/src/common/data";
import type { Service } from "@/src/common/types";

interface ServiceCarouselProps {
  onKnowMore: (service: Service) => void;
}

export default function ServiceCarousel({ onKnowMore }: ServiceCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Curated order so adjacent cards never share the same photo folder
  const featuredOrder = [
    "service-1", // massage
    "service-14", // korean
    "service-10", // sports
    "service-27", // hammam
    "service-13", // massage (different image)
    "service-22", // shirodhara
    "service-34", // couple
    "service-16", // korean (different image)
    "service-35", // couple (different image)
  ];

  const featuredById = new Map(
    SERVICES.filter((s) => s.isFeatured).map((s) => [s.id, s]),
  );
  const featuredServices = featuredOrder
    .map((id) => featuredById.get(id))
    .filter((s): s is Service => Boolean(s));

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-transparent"
      id="services-carousel"
    >
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#2D5446]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col items-center mb-10 md:mb-14">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-slate-900 font-bold px-1">
              Featured Offerings
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
            <p className="mt-3 text-sm text-slate-600 max-w-xl font-display font-semibold text-center px-2">
              Immerse yourself in our highly sought-after, practitioner-led
              treatments designed to restore biological vitality and elevate
              somatic awareness.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 select-none">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-[#DECBA5]/30 bg-white/60 text-slate-800 hover:bg-[#1E3E34] hover:text-white transition-all duration-500 ease-out active:scale-95 cursor-pointer shadow-sm"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-[#DECBA5]/30 bg-white/60 text-slate-800 hover:bg-[#1E3E34] hover:text-white transition-all duration-500 ease-out active:scale-95 cursor-pointer shadow-sm"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>

        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar custom-scrollbar smooth-x-scroll overscroll-x-contain"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: Math.min(index * 0.08, 0.4),
                ease: softEase,
              }}
              style={{
                backgroundImage:
                  "linear-gradient(rgba(2,42,36,0.90), rgba(2,42,36,0.94)), url('/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[min(85vw,280px)] sm:w-[320px] md:w-[380px] flex-shrink-0 snap-start border border-[#DECBA5]/25 rounded-3xl overflow-hidden shadow-lg shadow-[#022A24]/30 hover:scale-[1.015] transition-transform duration-700 ease-out group flex flex-col justify-between"
              id={`carousel-item-${service.id}`}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />

                {/* Rating — hidden for now
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[#1E3E34] font-extrabold text-xs flex items-center gap-1 border border-[#DECBA5]/30 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                  <span>{service.rating.toFixed(2)}</span>
                  <span className="text-slate-500 text-[9px] font-normal font-sans">
                    ({service.ratingCount})
                  </span>
                </div>
                */}

                <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] bg-white/90 backdrop-blur-sm border border-[#DECBA5]/30 px-3 py-1 rounded text-[9px] uppercase tracking-wider font-extrabold text-[#1E3E34] truncate w-fit">
                  {service.category}
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-extrabold text-[#FAF8F5] text-base sm:text-lg md:text-xl tracking-tight mb-2 group-hover:text-[#DECBA5] transition-colors duration-500">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/70 line-clamp-3 leading-relaxed mb-6 font-display font-medium">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="h-[1px] bg-[#DECBA5]/20 w-full mb-4" />
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex gap-4 min-w-0">
                      <div className="flex items-center gap-1.5 text-[#FAF8F5]/60 text-xs font-mono font-bold shrink-0">
                        <Clock className="w-3.5 h-3.5 text-[#DECBA5]" />
                        <span>{service.durationMinutes} min</span>
                      </div>
                      {/* Price — hidden for now
                      <div className="flex items-center gap-0.5 text-[#FAF8F5] font-bold text-base font-mono">
                        <span className="text-sm font-normal text-[#FAF8F5]/50">
                          ₹
                        </span>
                        <span className="font-extrabold">{service.price}</span>
                      </div>
                      */}
                    </div>

                    <button
                      type="button"
                      onClick={() => onKnowMore(service)}
                      className="shrink-0 px-3 sm:px-4 py-2 bg-[#DECBA5] text-[#1E3E34] rounded-xl text-[10px] sm:text-xs uppercase tracking-widest font-extrabold transition-transform duration-500 ease-out cursor-pointer shadow-md active:scale-95"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
