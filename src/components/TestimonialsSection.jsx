 

import React, { useState } from "react";
import { Star, Sparkles, User, Calendar, PlusCircle } from "lucide-react";
import { TESTIMONIALS } from "../data.js";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleSubmit = (e) => {
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
        day: "numeric"
      }),
      isGoogleReview: false
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setReview("");
    setRating(5);
    setFormOpen(false);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent" id="testimonials-section">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">SOMATIC SOCIAL VERDICT</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
              Client Testimonials
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base font-semibold font-display max-w-xl">
              Discover real-life experiences of athletic recovery, nervous system re-balancing, and holistic thermal resets.
            </p>
          </div>

          <button
            onClick={() => setFormOpen(!formOpen)}
            className="mt-6 md:mt-0 px-6 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all duration-300 flex items-center gap-2 rounded-xl shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write A Review</span>
          </button>
        </div>

        {/* Dynamic Interactive Submission Form */}
        {formOpen && (
          <div className="max-w-xl mx-auto mb-16 bg-white/95 backdrop-blur border border-[#DECBA5]/30 p-6 md:p-8 rounded-3xl text-left space-y-4 animate-fadeIn">
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
                          star <= (hoveredStar ?? rating) ? "fill-[#2D5446] text-[#2D5446]" : "text-slate-200"
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

              <div className="pt-2 flex gap-4">
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

        {/* Testimonials Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 hover:border-[#DECBA5]/50 p-6 rounded-3xl shadow-sm flex flex-col justify-between text-left group hover:scale-[1.01] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Avatar & User */}
                  <div className="flex items-center gap-3">
                    {rev.avatar ? (
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#DECBA5]/30"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-[#2D5446]/10 rounded-full flex items-center justify-center text-[#2D5446] font-black text-sm">
                        {rev.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-slate-900 group-hover:text-[#1E3E34] transition-colors leading-none">
                        {rev.name}
                      </h4>
                      <span className="text-[9px] font-mono text-slate-400 font-bold block mt-1">
                        Client verification
                      </span>
                    </div>
                  </div>

                  {/* Badges for Google reviews */}
                  {rev.isGoogleReview && (
                    <span className="text-[8px] font-mono font-black uppercase text-[#2D5446] bg-[#2D5446]/10 border border-[#2D5446]/20 px-2 py-0.5 rounded">
                      Google Review
                    </span>
                  )}
                </div>

                {/* Rating stars */}
                <div className="flex gap-0.5 mb-3.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? "fill-[#2D5446] text-[#2D5446]" : "text-slate-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-slate-600 font-display font-medium leading-relaxed italic mb-6">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              <div>
                <div className="h-[1px] bg-slate-200/60 w-full mb-3" />
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono font-bold justify-between">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {rev.date}
                  </span>
                  <span className="text-[#2D5446] font-extrabold">Active Member</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
