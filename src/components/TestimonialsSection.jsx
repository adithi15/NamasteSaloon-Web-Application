// import React, { useState } from "react";
// import { Star, Sparkles, User, Calendar, PlusCircle } from "lucide-react";
// import { TESTIMONIALS } from "../data.js";

// export default function TestimonialsSection() {
//   const [reviews, setReviews] = useState(TESTIMONIALS);
//   const [formOpen, setFormOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [review, setReview] = useState("");
//   const [rating, setRating] = useState(5);
//   const [hoveredStar, setHoveredStar] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name.trim() || !review.trim()) return;

//     const newReview = {
//       id: "rev-" + Math.random().toString(36).substr(2, 9),
//       name,
//       review,
//       rating,
//       date: new Date().toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       }),
//       isGoogleReview: false,
//     };

//     setReviews([newReview, ...reviews]);
//     setName("");
//     setReview("");
//     setRating(5);
//     setFormOpen(false);
//   };

//   return (
//     <section
//       className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
//       id="testimonials-section"
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
//           <div className="text-center">
//             <div className="flex items-center gap-2 mb-2">
//               <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
//               <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">
//                 SOMATIC SOCIAL VERDICT
//               </span>
//             </div>
//             <h2 className="font-serif  text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
//               What Our Members Say
//             </h2>
//             <p className="mt-3 text-slate-600 text-sm md:text-base font-semibold font-display max-w-xl">
//               Discover real-life experiences of athletic recovery, nervous
//               system re-balancing, and holistic thermal resets.
//             </p>
//           </div>

//           <button
//             onClick={() => setFormOpen(!formOpen)}
//             className="mt-6 md:mt-0 px-6 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all duration-300 flex items-center gap-2 rounded-xl shadow-md cursor-pointer hover:scale-105 active:scale-95"
//           >
//             <PlusCircle className="w-4 h-4" />
//             <span>Write A Review</span>
//           </button>
//         </div>

//         {/* Dynamic Interactive Submission Form */}
//         {formOpen && (
//           <div className="max-w-xl mx-auto mb-16 bg-white/95 backdrop-blur border border-[#DECBA5]/30 p-6 md:p-8 rounded-3xl text-left space-y-4 animate-fadeIn">
//             <h3 className="font-serif text-lg font-bold text-slate-900">
//               Share your healing experience
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-1">
//                 <label className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-black block">
//                   Somatic Rating
//                 </label>
//                 <div className="flex gap-1.5 pt-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       onClick={() => setRating(star)}
//                       onMouseEnter={() => setHoveredStar(star)}
//                       onMouseLeave={() => setHoveredStar(null)}
//                       className="text-[#2D5446] hover:scale-110 transition-transform cursor-pointer"
//                     >
//                       <Star
//                         className={`w-6 h-6 ${
//                           star <= (hoveredStar ?? rating)
//                             ? "fill-[#2D5446] text-[#2D5446]"
//                             : "text-slate-200"
//                         }`}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4">
//                 <div>
//                   <label className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-black block mb-1">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter your name"
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 focus:border-[#2D5446] rounded-xl outline-none text-sm text-slate-850 font-display font-semibold transition-colors"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-black block mb-1">
//                     YOUR FEEDBACK
//                   </label>
//                   <textarea
//                     rows={4}
//                     required
//                     value={review}
//                     onChange={(e) => setReview(e.target.value)}
//                     placeholder="Describe your session, your therapist, or thermal contrast experience..."
//                     className="w-full p-3 bg-slate-50 border border-slate-200 focus:border-[#2D5446] rounded-xl outline-none text-xs text-slate-850 font-display font-semibold transition-colors resize-none"
//                   />
//                 </div>
//               </div>

//               <div className="pt-2 flex gap-4">
//                 <button
//                   type="submit"
//                   className="px-6 h-11 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl flex items-center justify-center gap-1.5"
//                 >
//                   Submit Review
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setFormOpen(false)}
//                   className="px-6 h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs uppercase tracking-widest font-extrabold transition-all cursor-pointer rounded-xl"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Testimonials Review Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((rev) => (
//             <div
//               key={rev.id}
//               className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 hover:border-[#DECBA5]/50 p-6 rounded-3xl shadow-sm flex flex-col justify-between text-left group hover:scale-[1.01] transition-all duration-300"
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   {/* Avatar & User */}
//                   <div className="flex items-center gap-3">
//                     {rev.avatar ? (
//                       <img
//                         src={rev.avatar}
//                         alt={rev.name}
//                         className="w-10 h-10 rounded-full object-cover border-2 border-[#DECBA5]/30"
//                       />
//                     ) : (
//                       <div className="w-10 h-10 bg-[#2D5446]/10 rounded-full flex items-center justify-center text-[#2D5446] font-black text-sm">
//                         {rev.name.charAt(0)}
//                       </div>
//                     )}
//                     <div>
//                       <h4 className="font-display font-extrabold text-sm text-slate-900 group-hover:text-[#1E3E34] transition-colors leading-none">
//                         {rev.name}
//                       </h4>
//                       <span className="text-[9px] font-mono text-slate-400 font-bold block mt-1">
//                         Client verification
//                       </span>
//                     </div>
//                   </div>

//                   {/* Badges for Google reviews */}
//                   {rev.isGoogleReview && (
//                     <span className="text-[8px] font-mono font-black uppercase text-[#2D5446] bg-[#2D5446]/10 border border-[#2D5446]/20 px-2 py-0.5 rounded">
//                       Google Review
//                     </span>
//                   )}
//                 </div>

//                 {/* Rating stars */}
//                 <div className="flex gap-0.5 mb-3.5">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-3.5 h-3.5 ${
//                         i < rev.rating
//                           ? "fill-[#2D5446] text-[#2D5446]"
//                           : "text-slate-200"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-xs md:text-sm text-slate-600 font-display font-medium leading-relaxed italic mb-6">
//                   &ldquo;{rev.review}&rdquo;
//                 </p>
//               </div>

//               <div>
//                 <div className="h-[1px] bg-slate-200/60 w-full mb-3" />
//                 <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono font-bold justify-between">
//                   <span className="flex items-center gap-1">
//                     <Calendar className="w-3.5 h-3.5" />
//                     {rev.date}
//                   </span>
//                   <span className="text-[#2D5446] font-extrabold">
//                     Active Member
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
} from "lucide-react";
import { TESTIMONIALS } from "../data.js";

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [current, setCurrent] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [animDir, setAnimDir] = useState(null); // 'left' | 'right'

  const goTo = (dir) => {
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? (prev + 1) % reviews.length
          : (prev - 1 + reviews.length) % reviews.length,
      );
      setAnimDir(null);
    }, 200);
  };

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

  const rev = reviews[current];

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="testimonials-section"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          {" "}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">
                SOMATIC SOCIAL VERDICT
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
              What Our Members Say
            </h2>
            <p className="mt-3 text-slate-600 text-sm md:text-base font-semibold font-display max-w-xl">
              Discover real-life experiences of athletic recovery, nervous
              system re-balancing, and holistic thermal resets.
            </p>
          </div>
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="mt-6 md:mt-10 px-6 py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white text-xs uppercase tracking-widest font-extrabold transition-all duration-300 flex items-center gap-2 rounded-xl shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Write A Review</span>
          </button>
        </div>

        {/* Review Submission Form */}
        {formOpen && (
          <div className="max-w-xl mx-auto mb-14 bg-white/95 backdrop-blur border border-[#DECBA5]/30 p-6 md:p-8 rounded-3xl text-left space-y-4">
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

        {/* Slider Card */}
        <div
          className="bg-white/70 backdrop-blur-sm border border-[#DECBA5]/30 rounded-3xl shadow-sm overflow-hidden"
          style={{
            opacity: animDir ? 0 : 1,
            transform: animDir
              ? `translateX(${animDir === "right" ? "-24px" : "24px"})`
              : "translateX(0)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          <div className="flex flex-col md:flex-row min-h-[280px]">
            {/* Left Panel — Avatar, Stars, Name */}
            <div className="flex flex-col items-center justify-center gap-4 px-10 py-10 md:py-0 md:w-[280px] shrink-0 border-b md:border-b-0 md:border-r border-[#DECBA5]/30">
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
            <div className="relative flex items-center px-10 py-10 flex-1 bg-[#2D5446]/5">
              {/* Decorative quote mark */}
              <span
                className="absolute top-15 left-3 text-[#2D5446]/20 font-serif leading-none select-none pointer-events-none"
                style={{ fontSize: "10rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p className="relative z-10 text-slate-700 text-base md:text-lg font-display font-medium italic leading-relaxed pt-6">
                &ldquo;{rev.review}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goTo("left")}
            aria-label="Previous review"
            className="w-11 h-11 rounded-full border border-[#DECBA5]/50 bg-white/70 hover:bg-[#1E3E34] hover:border-[#1E3E34] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAnimDir(i > current ? "right" : "left");
                  setTimeout(() => {
                    setCurrent(i);
                    setAnimDir(null);
                  }, 200);
                }}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
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
            className="w-11 h-11 rounded-full border border-[#DECBA5]/50 bg-white/70 hover:bg-[#1E3E34] hover:border-[#1E3E34] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Counter */}
        {/* <p className="text-center mt-3 text-[10px] font-mono text-slate-400 font-bold">
          {current + 1} / {reviews.length}
        </p> */}
      </div>
    </section>
  );
}
