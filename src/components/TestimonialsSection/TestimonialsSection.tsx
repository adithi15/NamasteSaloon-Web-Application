import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/src/components/FadeIn";
import { TESTIMONIALS } from "@/src/common/data";

import type { Testimonial } from "@/src/common/types";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [current, setCurrent] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);

  const goTo = (dir: "left" | "right") => {
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length,
      );
      setAnimDir(null);
    }, 380);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;
    const newReview = {
      id: "rev-" + Math.random().toString(36).substr(2, 9),
      name,
      review,
      rating,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      isGoogleReview: false,
    };
    setReviews([newReview, ...reviews]);
    setCurrent(0);
    setName("");
    setReview("");
    setRating(5);
    setFormOpen(false);
  };

  const rev = reviews[current]!;

  return (
    <section
      className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="testimonials-section"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide px-1">
              What Our Members Say
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
            <p className="mt-3 text-slate-600 text-sm md:text-base font-semibold font-display max-w-xl">
              Discover real-life experiences of athletic recovery, nervous
              system re-balancing, and holistic thermal resets.
            </p>
          </div>
        </FadeIn>

        {formOpen && (
          <div className="max-w-xl mx-auto mb-10 sm:mb-14 bg-white/95 backdrop-blur border border-[#DECBA5]/30 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl text-left space-y-4">
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Share your healing experience
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-black block">
                  Somatic Rating
                </label>
                <div className="flex gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(null)}
                      className="text-[#2D5446] hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoveredStar ?? rating)
                            ? "fill-[#2D5446] text-[#2D5446]"
                            : "text-slate-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-black block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 focus:border-[#2D5446] rounded-xl outline-none text-sm text-slate-850 font-display font-semibold transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-black block mb-1">
                    YOUR FEEDBACK
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Describe your session, your therapist, or thermal contrast experience..."
                    className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-[#2D5446] rounded-xl outline-none text-xs text-slate-850 font-display font-semibold transition-colors resize-none"
                  />
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="px-6 h-11 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl flex items-center justify-center gap-1.5"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="px-6 h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <FadeIn delay={0.1}>
        {/* Slider Card */}
        <div
          className="bg-white/70 backdrop-blur-sm border border-[#DECBA5]/30 rounded-3xl shadow-sm overflow-hidden"
          style={{
            opacity: animDir ? 0 : 1,
            transform: animDir
              ? `translateX(${animDir === "right" ? "-18px" : "18px"})`
              : "translateX(0)",
            transition:
              "opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1), transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="flex flex-col md:flex-row min-h-[280px]">
            {/* Left Panel — Avatar, Stars, Name */}
            <div className="flex flex-col items-center justify-center gap-4 px-6 sm:px-10 py-10 md:py-0 md:w-[280px] shrink-0 border-b md:border-b-0 md:border-r border-[#DECBA5]/30">
              {/* Avatar */}
              {rev.avatar ? (
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#DECBA5]/40 shadow"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-[#2D5446]/10 border-4 border-[#DECBA5]/40 shadow flex items-center justify-center text-[#1E3E34] font-black text-3xl font-serif">
                  {rev.name.charAt(0)}
                </div>
              )}

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating
                        ? "fill-[#2D5446] text-[#2D5446]"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Name & role */}
              <div className="text-center">
                <p className="font-display font-extrabold text-base text-slate-900 leading-tight">
                  {rev.name}
                </p>
                {rev.role && (
                  <p className="text-xs text-slate-400 font-mono font-bold mt-0.5">
                    {rev.role}
                  </p>
                )}
                {rev.isGoogleReview && (
                  <span className="mt-3 inline-block text-[10px] font-mono font-black uppercase text-[#2D5446] bg-[#2D5446]/10 border border-[#2D5446]/20 px-2 py-1 rounded">
                    Google Review
                  </span>
                )}
              </div>
            </div>

            {/* Right Panel — Quote */}
            <div className="relative flex flex-col justify-center px-6 sm:px-10 md:px-12 py-10 flex-1 bg-[#2D5446]/5">
              {/* Classic decorative quote — just above the text */}
              <svg
                className="w-12 h-12 md:w-14 md:h-14 text-[#DECBA5]/60 mb-4 select-none pointer-events-none shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.17A2.67 2.67 0 0 1 7.83 8.83L9.5 6H7.17zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.5v-6.5h-3.33a2.67 2.67 0 0 1 2.66-2.67L19.5 6h-2.33z" />
              </svg>

              <p className="relative z-10 text-slate-700 text-sm sm:text-base md:text-lg font-display font-medium leading-relaxed italic">
                {rev.review}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8">
          <button
            onClick={() => goTo("left")}
            aria-label="Previous review"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DECBA5]/50 bg-white/70 hover:bg-[#1E3E34] hover:border-[#1E3E34] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-500 ease-out cursor-pointer shadow-sm shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex flex-wrap justify-center gap-2 max-w-[50vw] sm:max-w-none">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAnimDir(i > current ? "right" : "left");
                  setTimeout(() => {
                    setCurrent(i);
                    setAnimDir(null);
                  }, 380);
                }}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  i === current
                    ? "w-6 h-2.5 bg-[#1E3E34]"
                    : "w-2.5 h-2.5 bg-[#DECBA5]/60 hover:bg-[#2D5446]/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo("right")}
            aria-label="Next review"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DECBA5]/50 bg-white/70 hover:bg-[#1E3E34] hover:border-[#1E3E34] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-500 ease-out cursor-pointer shadow-sm shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        </FadeIn>

        {/* Counter */}
        {/* <p className="text-center mt-3 text-[10px] font-mono text-slate-400 font-bold">
          {current + 1} / {reviews.length}
        </p> */}
      </div>
    </section>
  );
}
