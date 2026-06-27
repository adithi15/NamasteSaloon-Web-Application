import React, { useState } from "react";
import {
  Star,
  GraduationCap,
  Briefcase,
  Calendar,
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
        `Hi! I'd like to book an appointment with therapist ${healer.name}.`,
      ),
      "_blank",
      "noopener,noreferrer",
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

        {/* Specialists Slider Layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-[#1E3E34] hover:text-white transition disabled:opacity-30"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIALISTS.slice(currentIndex, currentIndex + 3).map((healer) => (
              <div
                key={healer.id}
                className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 p-6 rounded-3xl shadow-sm hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
                id={`healer-card-${healer.id}`}
              >
                <div>
                  {/* Media container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                    <img
                      src={healer.image}
                      alt={healer.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    {/* Embedded Rating Tag */}
                    <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[#1E3E34] text-xs font-extrabold font-mono flex items-center gap-1 border border-[#DECBA5]/30">
                      <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                      <span>{healer.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Informational Details */}
                  <div className="flex-grow flex flex-col text-center">
                    <h3 className="font-serif text-slate-900 text-xl font-extrabold group-hover:text-[#1E3E34] transition-colors duration-250">
                      {healer.name}
                    </h3>

                    {/* Specialty Pill Segment */}
                    {/* <div className="self-start mt-2 mb-4">
                      <div className="bg-[#DECBA5]/20 border border-[#DECBA5]/40 text-[#1E3E34] text-[9px] tracking-wider font-black uppercase px-3 py-1 rounded-md">
                        {healer.specialtyTag}
                      </div>
                    </div> */}

                    {/* Biography */}
                    <p className="text-slate-600 text-xs italic mb-4 leading-relaxed font-medium">
                      &ldquo;{healer.bio}&rdquo;
                    </p>

                    {/* Credentials List */}
                    {/* <div className="space-y-3.5 text-xs text-slate-700 font-display font-semibold flex-grow text-left">
                      {healer.degrees.map((degree, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 leading-tight"
                        >
                          <GraduationCap className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                          <span>{degree}</span>
                        </div>
                      ))}

                      <div className="flex items-start gap-2.5 leading-tight">
                        <Briefcase className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                        <span>{healer.experience}</span>
                      </div> */}

                    <div className="flex items-start gap-2.5 text-xs text-slate-700 font-display font-semibold">
                      <Briefcase className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                      <span>{healer.experience}</span>
                    </div>

                    {/* <div className="flex items-start gap-2.5 leading-tight">
                        <Calendar className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                        <span className="text-slate-500 text-[11px] font-mono font-bold">
                          Active: {healer.availableDays.join(", ")}
                        </span>
                      </div> */}
                    {/* </div> */}
                  </div>
                </div>

                {/* Action Booking CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <button
                    onClick={() => handleBook(healer)}
                    className="w-full py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= SPECIALISTS.length - 3}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-[#1E3E34] hover:text-white transition disabled:opacity-30"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
