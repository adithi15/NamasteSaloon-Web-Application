import React, { useState } from "react";
import {
  Star,
  Briefcase,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SPECIALISTS } from "../data.js";
import { getWhatsAppUrl } from "../whatsapp.js";

export default function SpecialistSection({ onSelectSpecialist }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < SPECIALISTS.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleBook = (healer) => {
    if (onSelectSpecialist) {
      onSelectSpecialist(healer);
      return;
    }
    window.open(
      getWhatsAppUrl(
        `Hi! I'd like to book an appointment with therapist ${healer.name}.`
      ),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="relative py-20 md:py-28 bg-transparent"
      id="specialists-section"
    >
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#2D5446]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Our Spa Healers
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
            Advanced somatics and holistic recovery delivered by highly
            certified clinicians and therapists in a premium, comforting
            sanctuary.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-[#1E3E34] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALISTS.slice(currentIndex, currentIndex + 3).map((healer) => (
              <div
                key={healer.id}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#DECBA5]/40 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                id={`healer-card-${healer.id}`}
              >
                {/* Image — fixed height, object-cover centers face */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={healer.image}
                    alt={healer.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark gradient at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-full text-[#1E3E34] text-xs font-extrabold font-mono flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-[#2D5446] text-[#2D5446]" />
                    <span>{healer.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col p-5 flex-grow">

                  {/* Name + specialty */}
                  <div className="mb-3 pb-3 border-b border-slate-100">
                    <h3 className="font-serif text-slate-900 text-lg font-extrabold group-hover:text-[#1E3E34] transition-colors">
                      {healer.name}
                    </h3>
                    <p className="text-[10px] font-mono font-black uppercase tracking-widest text-[#2D5446] mt-0.5">
                      {healer.specialtyTag}
                    </p>
                  </div>

                  {/* Bio — clamped to 2 lines */}
                  <p className="text-slate-500 text-xs italic leading-relaxed line-clamp-2 mb-3">
                    &ldquo;{healer.bio}&rdquo;
                  </p>

                  {/* Experience */}
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold mb-4">
                    <Briefcase className="w-3.5 h-3.5 text-[#2D5446] shrink-0" />
                    <span>{healer.experience}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* CTA */}
                  <button
                    onClick={() => handleBook(healer)}
                    className="w-full py-2.5 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-extrabold rounded-lg text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= SPECIALISTS.length - 3}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-[#1E3E34] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}