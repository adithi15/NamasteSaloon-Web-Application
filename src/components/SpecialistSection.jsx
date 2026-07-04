// // import React, { useState } from "react";
// // import {
// //   Star,
// //   Briefcase,
// //   ArrowRight,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";
// // import { SPECIALISTS } from "../data.js";
// // import { getWhatsAppUrl } from "../whatsapp.js";

// // export default function SpecialistSection({ onSelectSpecialist }) {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextSlide = () => {
// //     if (currentIndex < SPECIALISTS.length - 3) {
// //       setCurrentIndex(currentIndex + 1);
// //     }
// //   };

// //   const prevSlide = () => {
// //     if (currentIndex > 0) {
// //       setCurrentIndex(currentIndex - 1);
// //     }
// //   };

// //   const handleBook = (healer) => {
// //     if (onSelectSpecialist) {
// //       onSelectSpecialist(healer);
// //       return;
// //     }
// //     window.open(
// //       getWhatsAppUrl(
// //         `Hi! I'd like to book an appointment with therapist ${healer.name}.`
// //       ),
// //       "_blank",
// //       "noopener,noreferrer"
// //     );
// //   };

// //   return (
// //     <section
// //       className="relative py-20 md:py-28 bg-transparent"
// //       id="specialists-section"
// //     >
// //       <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#2D5446]/2 rounded-full blur-[120px] pointer-events-none" />
// //       <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

// //         {/* Section Title */}
// //         <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
// //           <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
// //             Our Spa Healers
// //           </h2>
// //           <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
// //           <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
// //             Advanced somatics and holistic recovery delivered by highly
// //             certified clinicians and therapists in a premium, comforting
// //             sanctuary.
// //           </p>
// //         </div>

// //         {/* Slider */}
// //         <div className="relative max-w-7xl mx-auto">

// //           {/* Left Arrow */}
// //           <button
// //             onClick={prevSlide}
// //             disabled={currentIndex === 0}
// //             className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-[#1E3E34] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
// //           >
// //             <ChevronLeft size={20} />
// //           </button>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {SPECIALISTS.slice(currentIndex, currentIndex + 3).map((healer) => (
// //               <div
// //                 key={healer.id}
// //                 className="group flex flex-col rounded-2xl overflow-hidden border border-[#DECBA5]/40 bg-white shadow-sm hover:shadow-md transition-all duration-300"
// //                 id={`healer-card-${healer.id}`}
// //               >
// //                 {/* Image — fixed height, object-cover centers face */}
// //                 <div className="relative w-full h-56 overflow-hidden bg-slate-100 shrink-0">
// //                   <img
// //                     src={healer.image}
// //                     alt={healer.name}
// //                     referrerPolicy="no-referrer"
// //                     className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
// //                   />
// //                   {/* Dark gradient at bottom of image */}
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

// //                   {/* Rating badge */}
// //                   <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-full text-[#1E3E34] text-xs font-extrabold font-mono flex items-center gap-1 shadow-sm">
// //                     <Star className="w-3 h-3 fill-[#2D5446] text-[#2D5446]" />
// //                     <span>{healer.rating.toFixed(1)}</span>
// //                   </div>
// //                 </div>

// //                 {/* Card body */}
// //                 <div className="flex flex-col p-5 flex-grow">

// //                   {/* Name + specialty */}
// //                   <div className="mb-3 pb-3 border-b border-slate-100">
// //                     <h3 className="font-serif text-slate-900 text-lg font-extrabold group-hover:text-[#1E3E34] transition-colors">
// //                       {healer.name}
// //                     </h3>
// //                     <p className="text-[10px] font-mono font-black uppercase tracking-widest text-[#2D5446] mt-0.5">
// //                       {healer.specialtyTag}
// //                     </p>
// //                   </div>

// //                   {/* Bio — clamped to 2 lines */}
// //                   <p className="text-slate-500 text-xs italic leading-relaxed line-clamp-2 mb-3">
// //                     &ldquo;{healer.bio}&rdquo;
// //                   </p>

// //                   {/* Experience */}
// //                   <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold mb-4">
// //                     <Briefcase className="w-3.5 h-3.5 text-[#2D5446] shrink-0" />
// //                     <span>{healer.experience}</span>
// //                   </div>

// //                   {/* Spacer */}
// //                   <div className="flex-grow" />

// //                   {/* CTA */}
// //                   <button
// //                     onClick={() => handleBook(healer)}
// //                     className="w-full py-2.5 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-extrabold rounded-lg text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/btn"
// //                   >
// //                     <span>Book Appointment</span>
// //                     <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Right Arrow */}
// //           <button
// //             onClick={nextSlide}
// //             disabled={currentIndex >= SPECIALISTS.length - 3}
// //             className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-20 hover:bg-[#1E3E34] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
// //           >
// //             <ChevronRight size={20} />
// //           </button>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // import React, { useState, useRef, useEffect } from "react";
// // import { Star, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// // import { SPECIALISTS } from "../data.js";
// // import { getWhatsAppUrl } from "../whatsapp.js";

// // /* ─── useInView ─── */
// // function useInView(options = {}) {
// //   const ref = useRef(null);
// //   const [inView, setInView] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const obs = new IntersectionObserver(
// //       ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
// //       { threshold: 0.08, ...options }
// //     );
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, []);
// //   return [ref, inView];
// // }

// // /*
// //   SketchzLab "Slide, Scale & Blur" mechanics
// //   ─────────────────────────────────────────────
// //   distance  │  scale  │  opacity  │  blur
// //   ──────────┼─────────┼───────────┼───────
// //      0 (active)  1.00     1.00       0px
// //      ±1          0.82     0.60       2px
// //      ±2          0.68     0.35       4px
// //      ±3+         0.56     0.15       6px
// // */
// // function getSlideStyle(distance) {
// //   const abs = Math.abs(distance);
// //   const configs = [
// //     { scale: 1.00, opacity: 1,    blur: 0,  brightness: 1,    zIndex: 10 },
// //     { scale: 0.82, opacity: 0.62, blur: 2,  brightness: 0.75, zIndex: 7  },
// //     { scale: 0.68, opacity: 0.38, blur: 3,  brightness: 0.60, zIndex: 4  },
// //     { scale: 0.56, opacity: 0.18, blur: 5,  brightness: 0.45, zIndex: 1  },
// //   ];
// //   const cfg = configs[Math.min(abs, configs.length - 1)];
// //   return {
// //     transform: `scale(${cfg.scale})`,
// //     opacity: cfg.opacity,
// //     filter: `blur(${cfg.blur}px) brightness(${cfg.brightness})`,
// //     zIndex: cfg.zIndex,
// //     transition: [
// //       "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
// //       "opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
// //       "filter 0.6s cubic-bezier(0.22,1,0.36,1)",
// //       "box-shadow 0.5s ease",
// //     ].join(", "),
// //     pointerEvents: abs === 0 ? "auto" : "none",
// //   };
// // }

// // /* ─── Single Card ─── */
// // function HealerCard({ healer, onBook, distance }) {
// //   const isActive = distance === 0;
// //   const [btnHover, setBtnHover] = useState(false);
// //   const [btnPressed, setBtnPressed] = useState(false);

// //   return (
// //     <div
// //       style={{
// //         ...getSlideStyle(distance),
// //         width: "100%",
// //         borderRadius: 20,
// //         overflow: "hidden",
// //         background: "white",
// //         border: `1.5px solid ${isActive ? "rgba(45,84,70,0.3)" : "rgba(222,203,165,0.3)"}`,
// //         boxShadow: isActive
// //           ? "0 24px 64px -12px rgba(30,62,52,0.25), 0 4px 16px -4px rgba(30,62,52,0.1)"
// //           : "0 4px 20px -6px rgba(0,0,0,0.06)",
// //         display: "flex",
// //         flexDirection: "column",
// //         transformOrigin: "center bottom",
// //       }}
// //     >
// //       {/* Image */}
// //       <div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden", background: "#f1f5f9", flexShrink: 0 }}>
// //         <img
// //           src={healer.image}
// //           alt={healer.name}
// //           referrerPolicy="no-referrer"
// //           draggable={false}
// //           style={{
// //             width: "100%", height: "100%",
// //             objectFit: "cover", objectPosition: "top",
// //             transform: isActive ? "scale(1)" : "scale(1.06)",
// //             transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
// //             userSelect: "none",
// //           }}
// //         />
// //         {/* gradient overlay */}
// //         <div style={{
// //           position: "absolute", inset: 0,
// //           background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
// //           pointerEvents: "none",
// //         }} />
// //         {/* active top accent bar */}
// //         <div style={{
// //           position: "absolute", top: 0, left: 0, right: 0, height: 3,
// //           background: "linear-gradient(90deg, #1E3E34 0%, #4a9478 100%)",
// //           transformOrigin: "left center",
// //           transform: isActive ? "scaleX(1)" : "scaleX(0)",
// //           transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1) 0.05s",
// //         }} />
// //         {/* rating badge */}
// //         <div style={{
// //           position: "absolute", top: 12, right: 12,
// //           background: "rgba(255,255,255,0.96)",
// //           padding: "4px 10px", borderRadius: 999,
// //           display: "flex", alignItems: "center", gap: 4,
// //           fontSize: 11, fontWeight: 800, fontFamily: "monospace",
// //           color: "#1E3E34", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
// //         }}>
// //           <Star style={{ width: 11, height: 11, fill: "#2D5446", color: "#2D5446" }} />
// //           {healer.rating.toFixed(1)}
// //         </div>
// //       </div>

// //       {/* Body */}
// //       <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
// //         {/* name + tag */}
// //         <div style={{ paddingBottom: 12, marginBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
// //           <h3 style={{
// //             fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 800,
// //             color: "#0f172a", margin: 0, lineHeight: 1.3,
// //           }}>{healer.name}</h3>
// //           <p style={{
// //             fontSize: 10, fontFamily: "monospace", fontWeight: 900,
// //             textTransform: "uppercase", letterSpacing: "0.14em",
// //             color: "#2D5446", margin: "4px 0 0",
// //           }}>{healer.specialtyTag}</p>
// //         </div>

// //         {/* bio */}
// //         <p style={{
// //           fontSize: 12, color: "#64748b", fontStyle: "italic",
// //           lineHeight: 1.65, margin: "0 0 12px",
// //           display: "-webkit-box",
// //           WebkitLineClamp: isActive ? 3 : 2,
// //           WebkitBoxOrient: "vertical",
// //           overflow: "hidden",
// //           transition: "all 0.4s ease",
// //         }}>"{healer.bio}"</p>

// //         {/* experience */}
// //         <div style={{
// //           display: "flex", alignItems: "center", gap: 6,
// //           fontSize: 12, color: "#475569", fontWeight: 600, marginBottom: 18,
// //         }}>
// //           <Briefcase style={{ width: 13, height: 13, color: "#2D5446", flexShrink: 0 }} />
// //           {healer.experience}
// //         </div>

// //         <div style={{ flexGrow: 1 }} />

// //         {/* CTA */}
// //         <button
// //           onClick={() => isActive && onBook(healer)}
// //           onMouseDown={() => setBtnPressed(true)}
// //           onMouseUp={() => setBtnPressed(false)}
// //           onMouseEnter={() => setBtnHover(true)}
// //           onMouseLeave={() => { setBtnHover(false); setBtnPressed(false); }}
// //           style={{
// //             width: "100%", padding: "10px 0",
// //             background: btnHover ? "#2D5446" : "#1E3E34",
// //             color: "white", border: "none", borderRadius: 10,
// //             fontSize: 11, fontWeight: 800, fontFamily: "monospace",
// //             textTransform: "uppercase", letterSpacing: "0.12em",
// //             display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
// //             cursor: isActive ? "pointer" : "default",
// //             transform: btnPressed ? "scale(0.97)" : "scale(1)",
// //             transition: "background 0.22s ease, transform 0.15s cubic-bezier(0.34,1.56,0.64,1)",
// //           }}
// //         >
// //           Book Appointment
// //           <ArrowRight style={{
// //             width: 12, height: 12,
// //             transform: btnHover ? "translateX(3px)" : "translateX(0)",
// //             transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
// //           }} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ─── Main Export ─── */
// // export default function SpecialistSection({ onSelectSpecialist }) {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [animating, setAnimating] = useState(false);
// //   const [sectionRef, sectionInView] = useInView();
// //   const total = SPECIALISTS.length;

// //   const go = (dir) => {
// //     if (animating) return;
// //     const next = activeIndex + dir;
// //     if (next < 0 || next >= total) return;
// //     setAnimating(true);
// //     setActiveIndex(next);
// //     setTimeout(() => setAnimating(false), 620);
// //   };

// //   const handleBook = (healer) => {
// //     if (onSelectSpecialist) { onSelectSpecialist(healer); return; }
// //     window.open(
// //       getWhatsAppUrl(`Hi! I'd like to book an appointment with therapist ${healer.name}.`),
// //       "_blank", "noopener,noreferrer"
// //     );
// //   };

// //   /* We show all slides positioned relative to center;
// //      use a "window" of 5 visible slots: -2, -1, 0, +1, +2 */
// //   const SLOTS = [-2, -1, 0, 1, 2];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       style={{ position: "relative", padding: "80px 0 100px", background: "transparent", overflow: "hidden" }}
// //       id="specialists-section"
// //     >
// //       {/* ambient glows */}
// //       <div style={{ position: "absolute", top: "30%", right: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,84,70,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
// //       <div style={{ position: "absolute", bottom: -60, left: -100, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(222,203,165,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />

// //       {/* ── Title ── */}
// //       <div style={{
// //         textAlign: "center", maxWidth: 640, margin: "0 auto 56px", padding: "0 24px",
// //         opacity: sectionInView ? 1 : 0,
// //         transform: sectionInView ? "translateY(0)" : "translateY(28px)",
// //         transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
// //       }}>
// //         <h2 style={{
// //           fontFamily: "Georgia, serif",
// //           fontSize: "clamp(28px, 4vw, 48px)",
// //           fontWeight: 800, color: "#0f172a",
// //           margin: "0 0 12px", letterSpacing: "-0.01em",
// //         }}>Our Spa Healers</h2>
// //         <div style={{ height: 2, width: 80, background: "linear-gradient(to right, transparent, rgba(45,84,70,0.6), transparent)", margin: "0 auto 14px" }} />
// //         <p style={{ fontSize: "clamp(13px,1.5vw,15px)", color: "#64748b", fontWeight: 600, margin: 0, lineHeight: 1.7 }}>
// //           Advanced somatics and holistic recovery delivered by highly certified
// //           clinicians and therapists in a premium, comforting sanctuary.
// //         </p>
// //       </div>

// //       {/* ── Slider stage ── */}
// //       <div
// //         style={{
// //           opacity: sectionInView ? 1 : 0,
// //           transition: "opacity 0.6s ease 0.2s",
// //         }}
// //       >
// //         {/* The stage: fixed height container, cards absolutely positioned */}
// //         <div style={{
// //           position: "relative",
// //           width: "100%",
// //           height: 520,
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           overflow: "hidden",
// //         }}>
// //           {SLOTS.map((offset) => {
// //             const dataIndex = activeIndex + offset;
// //             // wrap around for display (clamp to actual data)
// //             if (dataIndex < 0 || dataIndex >= total) return null;
// //             const healer = SPECIALISTS[dataIndex];

// //             /* horizontal position: each step = 22% of stage width */
// //             const STEP = 22; // % of container width
// //             const left = 50 + offset * STEP; // % from left

// //             return (
// //               <div
// //                 key={healer.id}
// //                 onClick={() => { if (offset !== 0 && !animating) go(offset > 0 ? 1 : -1); }}
// //                 style={{
// //                   position: "absolute",
// //                   width: "clamp(220px, 22%, 300px)",
// //                   left: `${left}%`,
// //                   transform: "translateX(-50%)",
// //                   top: 0, bottom: 0,
// //                   display: "flex", alignItems: "center",
// //                   cursor: offset === 0 ? "default" : "pointer",
// //                   transition: "left 0.6s cubic-bezier(0.22,1,0.36,1)",
// //                 }}
// //               >
// //                 <HealerCard
// //                   healer={healer}
// //                   onBook={handleBook}
// //                   distance={offset}
// //                 />
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* ── Bottom nav ── */}
// //         <div style={{
// //           display: "flex", alignItems: "center", justifyContent: "center",
// //           gap: 20, marginTop: 28,
// //           opacity: sectionInView ? 1 : 0,
// //           transition: "opacity 0.6s ease 0.45s",
// //         }}>

// //           {/* Prev arrow */}
// //           <NavCircle onClick={() => go(-1)} disabled={activeIndex === 0}>
// //             <ChevronLeft size={18} />
// //           </NavCircle>

// //           {/* Numbered dots — SketchzLab style */}
// //           <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
// //             {SPECIALISTS.map((_, i) => {
// //               const isActive = i === activeIndex;
// //               return (
// //                 <button
// //                   key={i}
// //                   onClick={() => { if (!animating) setActiveIndex(i); }}
// //                   style={{
// //                     width: isActive ? 30 : 8,
// //                     height: 8,
// //                     borderRadius: 999,
// //                     border: "none", padding: 0, cursor: "pointer",
// //                     background: isActive ? "#1E3E34" : "rgba(222,203,165,0.85)",
// //                     transition: "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.25s ease",
// //                   }}
// //                 />
// //               );
// //             })}
// //           </div>

// //           {/* Counter */}
// //           <span style={{
// //             fontFamily: "monospace", fontSize: 11, fontWeight: 800,
// //             color: "#94a3b8", minWidth: 40, textAlign: "center", letterSpacing: "0.05em",
// //           }}>
// //             {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
// //           </span>

// //           {/* Next arrow */}
// //           <NavCircle onClick={() => go(1)} disabled={activeIndex === total - 1}>
// //             <ChevronRight size={18} />
// //           </NavCircle>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ─── Reusable nav circle button ─── */
// // function NavCircle({ onClick, disabled, children }) {
// //   const [hovered, setHovered] = useState(false);
// //   const [pressed, setPressed] = useState(false);
// //   return (
// //     <button
// //       onClick={onClick}
// //       disabled={disabled}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => { setHovered(false); setPressed(false); }}
// //       onMouseDown={() => setPressed(true)}
// //       onMouseUp={() => setPressed(false)}
// //       style={{
// //         width: 42, height: 42, borderRadius: "50%", border: "none",
// //         background: hovered && !disabled ? "#1E3E34" : "white",
// //         color: hovered && !disabled ? "white" : "#1E3E34",
// //         boxShadow: hovered && !disabled
// //           ? "0 8px 24px -4px rgba(30,62,52,0.32)"
// //           : "0 2px 10px -2px rgba(0,0,0,0.12)",
// //         outline: `1.5px solid ${hovered && !disabled ? "#1E3E34" : "rgba(222,203,165,0.55)"}`,
// //         display: "flex", alignItems: "center", justifyContent: "center",
// //         cursor: disabled ? "not-allowed" : "pointer",
// //         opacity: disabled ? 0.25 : 1,
// //         transform: pressed && !disabled ? "scale(0.88)" : "scale(1)",
// //         transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
// //         flexShrink: 0,
// //       }}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// // import React, { useState, useRef, useEffect } from "react";
// // import {
// //   Star,
// //   Briefcase,
// //   ArrowRight,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";
// // import { SPECIALISTS } from "../data.js";
// // import { getWhatsAppUrl } from "../whatsapp.js";

// // /* ─── useInView ─── */
// // function useInView(options = {}) {
// //   const ref = useRef(null);
// //   const [inView, setInView] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const obs = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setInView(true);
// //           obs.disconnect();
// //         }
// //       },
// //       { threshold: 0.08, ...options },
// //     );
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, []);
// //   return [ref, inView];
// // }

// // /*
// //   SketchzLab "Slide, Scale & Blur" mechanics
// //   ─────────────────────────────────────────────
// //   distance  │  scale  │  opacity  │  blur
// //   ──────────┼─────────┼───────────┼───────
// //      0 (active)  1.00     1.00       0px
// //      ±1          0.82     0.60       2px
// //      ±2          0.68     0.35       4px
// //      ±3+         0.56     0.15       6px
// // */
// // function getSlideStyle(distance) {
// //   const abs = Math.abs(distance);
// //   const configs = [
// //     { scale: 1.0, opacity: 1, blur: 0, brightness: 1, zIndex: 10 },
// //     { scale: 0.82, opacity: 0.62, blur: 2, brightness: 0.75, zIndex: 7 },
// //     { scale: 0.68, opacity: 0.38, blur: 3, brightness: 0.6, zIndex: 4 },
// //     { scale: 0.56, opacity: 0.18, blur: 5, brightness: 0.45, zIndex: 1 },
// //   ];
// //   const cfg = configs[Math.min(abs, configs.length - 1)];
// //   return {
// //     transform: `scale(${cfg.scale})`,
// //     opacity: cfg.opacity,
// //     filter: `blur(${cfg.blur}px) brightness(${cfg.brightness})`,
// //     zIndex: cfg.zIndex,
// //     transition: [
// //       "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
// //       "opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
// //       "filter 0.6s cubic-bezier(0.22,1,0.36,1)",
// //       "box-shadow 0.5s ease",
// //     ].join(", "),
// //     pointerEvents: abs === 0 ? "auto" : "none",
// //   };
// // }

// // /* ─── Single Card ─── */
// // function HealerCard({ healer, onBook, distance }) {
// //   const isActive = distance === 0;
// //   const [btnHover, setBtnHover] = useState(false);
// //   const [btnPressed, setBtnPressed] = useState(false);

// //   return (
// //     <div
// //       style={{
// //         ...getSlideStyle(distance),
// //         width: "100%",
// //         borderRadius: 20,
// //         overflow: "hidden",
// //         background: "white",
// //         border: `1.5px solid ${isActive ? "rgba(45,84,70,0.3)" : "rgba(222,203,165,0.3)"}`,
// //         boxShadow: isActive
// //           ? "0 24px 64px -12px rgba(30,62,52,0.25), 0 4px 16px -4px rgba(30,62,52,0.1)"
// //           : "0 4px 20px -6px rgba(0,0,0,0.06)",
// //         display: "flex",
// //         flexDirection: "column",
// //         transformOrigin: "center bottom",
// //       }}
// //     >
// //       {/* Image */}
// //       <div
// //         style={{
// //           position: "relative",
// //           width: "100%",
// //           height: 220,
// //           overflow: "hidden",
// //           background: "#f1f5f9",
// //           flexShrink: 0,
// //         }}
// //       >
// //         <img
// //           src={healer.image}
// //           alt={healer.name}
// //           referrerPolicy="no-referrer"
// //           draggable={false}
// //           style={{
// //             width: "100%",
// //             height: "100%",
// //             objectFit: "cover",
// //             objectPosition: "top",
// //             transform: isActive ? "scale(1)" : "scale(1.06)",
// //             transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
// //             userSelect: "none",
// //           }}
// //         />
// //         {/* gradient overlay */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             background:
// //               "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
// //             pointerEvents: "none",
// //           }}
// //         />
// //         {/* active top accent bar */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             height: 3,
// //             background: "linear-gradient(90deg, #1E3E34 0%, #4a9478 100%)",
// //             transformOrigin: "left center",
// //             transform: isActive ? "scaleX(1)" : "scaleX(0)",
// //             transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1) 0.05s",
// //           }}
// //         />
// //         {/* rating badge */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             top: 12,
// //             right: 12,
// //             background: "rgba(255,255,255,0.96)",
// //             padding: "4px 10px",
// //             borderRadius: 999,
// //             display: "flex",
// //             alignItems: "center",
// //             gap: 4,
// //             fontSize: 11,
// //             fontWeight: 800,
// //             fontFamily: "monospace",
// //             color: "#1E3E34",
// //             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           <Star
// //             style={{ width: 11, height: 11, fill: "#2D5446", color: "#2D5446" }}
// //           />
// //           {healer.rating.toFixed(1)}
// //         </div>
// //       </div>

// //       {/* Body */}
// //       <div
// //         style={{
// //           padding: "18px 20px 20px",
// //           display: "flex",
// //           flexDirection: "column",
// //           flexGrow: 1,
// //         }}
// //       >
// //         {/* name + tag */}
// //         <div
// //           style={{
// //             paddingBottom: 12,
// //             marginBottom: 12,
// //             borderBottom: "1px solid #f1f5f9",
// //           }}
// //         >
// //           <h3
// //             style={{
// //               fontFamily: "Georgia, serif",
// //               fontSize: 17,
// //               fontWeight: 800,
// //               color: "#0f172a",
// //               margin: 0,
// //               lineHeight: 1.3,
// //             }}
// //           >
// //             {healer.name}
// //           </h3>
// //           <p
// //             style={{
// //               fontSize: 10,
// //               fontFamily: "monospace",
// //               fontWeight: 900,
// //               textTransform: "uppercase",
// //               letterSpacing: "0.14em",
// //               color: "#2D5446",
// //               margin: "4px 0 0",
// //             }}
// //           >
// //             {healer.specialtyTag}
// //           </p>
// //         </div>

// //         {/* bio */}
// //         <p
// //           style={{
// //             fontSize: 12,
// //             color: "#64748b",
// //             fontStyle: "italic",
// //             lineHeight: 1.65,
// //             margin: "0 0 12px",
// //             display: "-webkit-box",
// //             WebkitLineClamp: isActive ? 3 : 2,
// //             WebkitBoxOrient: "vertical",
// //             overflow: "hidden",
// //             transition: "all 0.4s ease",
// //           }}
// //         >
// //           "{healer.bio}"
// //         </p>

// //         {/* experience */}
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             gap: 6,
// //             fontSize: 12,
// //             color: "#475569",
// //             fontWeight: 600,
// //             marginBottom: 18,
// //           }}
// //         >
// //           <Briefcase
// //             style={{ width: 13, height: 13, color: "#2D5446", flexShrink: 0 }}
// //           />
// //           {healer.experience}
// //         </div>

// //         <div style={{ flexGrow: 1 }} />

// //         {/* CTA */}
// //         <button
// //           onClick={() => isActive && onBook(healer)}
// //           onMouseDown={() => setBtnPressed(true)}
// //           onMouseUp={() => setBtnPressed(false)}
// //           onMouseEnter={() => setBtnHover(true)}
// //           onMouseLeave={() => {
// //             setBtnHover(false);
// //             setBtnPressed(false);
// //           }}
// //           style={{
// //             width: "100%",
// //             padding: "10px 0",
// //             background: btnHover ? "#2D5446" : "#1E3E34",
// //             color: "white",
// //             border: "none",
// //             borderRadius: 10,
// //             fontSize: 11,
// //             fontWeight: 800,
// //             fontFamily: "monospace",
// //             textTransform: "uppercase",
// //             letterSpacing: "0.12em",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: 6,
// //             cursor: isActive ? "pointer" : "default",
// //             transform: btnPressed ? "scale(0.97)" : "scale(1)",
// //             transition:
// //               "background 0.22s ease, transform 0.15s cubic-bezier(0.34,1.56,0.64,1)",
// //           }}
// //         >
// //           Book Appointment
// //           <ArrowRight
// //             style={{
// //               width: 12,
// //               height: 12,
// //               transform: btnHover ? "translateX(3px)" : "translateX(0)",
// //               transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
// //             }}
// //           />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ─── Main Export ─── */
// // export default function SpecialistSection({ onSelectSpecialist }) {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [animating, setAnimating] = useState(false);
// //   const [sectionRef, sectionInView] = useInView();
// //   const total = SPECIALISTS.length;

// //   const stageRef = useRef(null);
// //   const activeIndexRef = useRef(activeIndex);
// //   const animatingRef = useRef(animating);
// //   useEffect(() => {
// //     activeIndexRef.current = activeIndex;
// //   }, [activeIndex]);
// //   useEffect(() => {
// //     animatingRef.current = animating;
// //   }, [animating]);

// //   const go = (dir) => {
// //     if (animating) return;
// //     const next = activeIndex + dir;
// //     if (next < 0 || next >= total) return;
// //     setAnimating(true);
// //     setActiveIndex(next);
// //     setTimeout(() => setAnimating(false), 620);
// //   };

// //   /* mouse wheel: sideways OR vertical scroll both navigate slides */
// //   useEffect(() => {
// //     const el = stageRef.current;
// //     if (!el) return;
// //     let lastWheel = 0;
// //     const onWheel = (e) => {
// //       e.preventDefault();
// //       const now = Date.now();
// //       if (now - lastWheel < 660) return;
// //       lastWheel = now;
// //       const delta =
// //         Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
// //       if (animatingRef.current) return;
// //       const next = activeIndexRef.current + (delta > 0 ? 1 : -1);
// //       if (next < 0 || next >= total) return;
// //       animatingRef.current = true;
// //       setAnimating(true);
// //       setActiveIndex(next);
// //       setTimeout(() => {
// //         setAnimating(false);
// //         animatingRef.current = false;
// //       }, 620);
// //     };
// //     el.addEventListener("wheel", onWheel, { passive: false });
// //     return () => el.removeEventListener("wheel", onWheel);
// //   }, [total]);

// //   const handleBook = (healer) => {
// //     if (onSelectSpecialist) {
// //       onSelectSpecialist(healer);
// //       return;
// //     }
// //     window.open(
// //       getWhatsAppUrl(
// //         `Hi! I'd like to book an appointment with therapist ${healer.name}.`,
// //       ),
// //       "_blank",
// //       "noopener,noreferrer",
// //     );
// //   };

// //   /* We show all slides positioned relative to center; 
// //      use a "window" of 5 visible slots: -2, -1, 0, +1, +2 */
// //   const SLOTS = [-2, -1, 0, 1, 2];

// //   return (
// //     <section
// //       ref={sectionRef}
// //       style={{
// //         position: "relative",
// //         padding: "80px 0 100px",
// //         background: "transparent",
// //         overflow: "hidden",
// //       }}
// //       id="specialists-section"
// //     >
// //       {/* ambient glows */}
// //       <div
// //         style={{
// //           position: "absolute",
// //           top: "30%",
// //           right: -120,
// //           width: 500,
// //           height: 500,
// //           borderRadius: "50%",
// //           background:
// //             "radial-gradient(circle, rgba(45,84,70,0.07) 0%, transparent 70%)",
// //           pointerEvents: "none",
// //         }}
// //       />
// //       <div
// //         style={{
// //           position: "absolute",
// //           bottom: -60,
// //           left: -100,
// //           width: 450,
// //           height: 450,
// //           borderRadius: "50%",
// //           background:
// //             "radial-gradient(circle, rgba(222,203,165,0.09) 0%, transparent 70%)",
// //           pointerEvents: "none",
// //         }}
// //       />

// //       {/* ── Title ── */}
// //       <div
// //         style={{
// //           textAlign: "center",
// //           maxWidth: 640,
// //           margin: "0 auto 56px",
// //           padding: "0 24px",
// //           opacity: sectionInView ? 1 : 0,
// //           transform: sectionInView ? "translateY(0)" : "translateY(28px)",
// //           transition:
// //             "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
// //         }}
// //       >
// //         <h2
// //           style={{
// //             fontFamily: "Georgia, serif",
// //             fontSize: "clamp(28px, 4vw, 48px)",
// //             fontWeight: 800,
// //             color: "#0f172a",
// //             margin: "0 0 12px",
// //             letterSpacing: "-0.01em",
// //           }}
// //         >
// //           Our Spa Healers
// //         </h2>
// //         <div
// //           style={{
// //             height: 2,
// //             width: 80,
// //             background:
// //               "linear-gradient(to right, transparent, rgba(45,84,70,0.6), transparent)",
// //             margin: "0 auto 14px",
// //           }}
// //         />
// //         <p
// //           style={{
// //             fontSize: "clamp(13px,1.5vw,15px)",
// //             color: "#64748b",
// //             fontWeight: 600,
// //             margin: 0,
// //             lineHeight: 1.7,
// //           }}
// //         >
// //           Advanced somatics and holistic recovery delivered by highly certified
// //           clinicians and therapists in a premium, comforting sanctuary.
// //         </p>
// //       </div>

// //       {/* ── Slider stage ── */}
// //       <div
// //         style={{
// //           opacity: sectionInView ? 1 : 0,
// //           transition: "opacity 0.6s ease 0.2s",
// //         }}
// //       >
// //         {/* The stage: fixed height container, cards absolutely positioned */}
// //         <div
// //           ref={stageRef}
// //           style={{
// //             position: "relative",
// //             width: "100%",
// //             height: 520,
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             overflow: "hidden",
// //           }}
// //         >
// //           {SLOTS.map((offset) => {
// //             const dataIndex = activeIndex + offset;
// //             // wrap around for display (clamp to actual data)
// //             if (dataIndex < 0 || dataIndex >= total) return null;
// //             const healer = SPECIALISTS[dataIndex];

// //             /* horizontal position: each step = 22% of stage width */
// //             const STEP = 22; // % of container width
// //             const left = 50 + offset * STEP; // % from left

// //             return (
// //               <div
// //                 key={healer.id}
// //                 onClick={() => {
// //                   if (offset !== 0 && !animating) go(offset > 0 ? 1 : -1);
// //                 }}
// //                 style={{
// //                   position: "absolute",
// //                   width: "clamp(220px, 22%, 300px)",
// //                   left: `${left}%`,
// //                   transform: "translateX(-50%)",
// //                   top: 0,
// //                   bottom: 0,
// //                   display: "flex",
// //                   alignItems: "center",
// //                   cursor: offset === 0 ? "default" : "pointer",
// //                   transition: "left 0.6s cubic-bezier(0.22,1,0.36,1)",
// //                 }}
// //               >
// //                 <HealerCard
// //                   healer={healer}
// //                   onBook={handleBook}
// //                   distance={offset}
// //                 />
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* ── Bottom nav ── */}
// //         <div
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             gap: 20,
// //             marginTop: 28,
// //             opacity: sectionInView ? 1 : 0,
// //             transition: "opacity 0.6s ease 0.45s",
// //           }}
// //         >
// //           {/* Prev arrow */}
// //           <NavCircle onClick={() => go(-1)} disabled={activeIndex === 0}>
// //             <ChevronLeft size={18} />
// //           </NavCircle>

// //           {/* Numbered dots — SketchzLab style */}
// //           <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
// //             {SPECIALISTS.map((_, i) => {
// //               const isActive = i === activeIndex;
// //               return (
// //                 <button
// //                   key={i}
// //                   onClick={() => {
// //                     if (!animating) setActiveIndex(i);
// //                   }}
// //                   style={{
// //                     width: isActive ? 30 : 8,
// //                     height: 8,
// //                     borderRadius: 999,
// //                     border: "none",
// //                     padding: 0,
// //                     cursor: "pointer",
// //                     background: isActive ? "#1E3E34" : "rgba(222,203,165,0.85)",
// //                     transition:
// //                       "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.25s ease",
// //                   }}
// //                 />
// //               );
// //             })}
// //           </div>

// //           {/* Counter */}
// //           <span
// //             style={{
// //               fontFamily: "monospace",
// //               fontSize: 11,
// //               fontWeight: 800,
// //               color: "#94a3b8",
// //               minWidth: 40,
// //               textAlign: "center",
// //               letterSpacing: "0.05em",
// //             }}
// //           >
// //             {String(activeIndex + 1).padStart(2, "0")} /{" "}
// //             {String(total).padStart(2, "0")}
// //           </span>

// //           {/* Next arrow */}
// //           <NavCircle onClick={() => go(1)} disabled={activeIndex === total - 1}>
// //             <ChevronRight size={18} />
// //           </NavCircle>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /* ─── Reusable nav circle button ─── */
// // function NavCircle({ onClick, disabled, children }) {
// //   const [hovered, setHovered] = useState(false);
// //   const [pressed, setPressed] = useState(false);
// //   return (
// //     <button
// //       onClick={onClick}
// //       disabled={disabled}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => {
// //         setHovered(false);
// //         setPressed(false);
// //       }}
// //       onMouseDown={() => setPressed(true)}
// //       onMouseUp={() => setPressed(false)}
// //       style={{
// //         width: 42,
// //         height: 42,
// //         borderRadius: "50%",
// //         border: "none",
// //         background: hovered && !disabled ? "#1E3E34" : "white",
// //         color: hovered && !disabled ? "white" : "#1E3E34",
// //         boxShadow:
// //           hovered && !disabled
// //             ? "0 8px 24px -4px rgba(30,62,52,0.32)"
// //             : "0 2px 10px -2px rgba(0,0,0,0.12)",
// //         outline: `1.5px solid ${hovered && !disabled ? "#1E3E34" : "rgba(222,203,165,0.55)"}`,
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         cursor: disabled ? "not-allowed" : "pointer",
// //         opacity: disabled ? 0.25 : 1,
// //         transform: pressed && !disabled ? "scale(0.88)" : "scale(1)",
// //         transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
// //         flexShrink: 0,
// //       }}
// //     >
// //       {children}
// //     </button>
// //   );
// // }



// import React, { useState, useRef, useEffect } from "react";
// import { Star, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { SPECIALISTS } from "../data.js";
// import { getWhatsAppUrl } from "../whatsapp.js";

// /* ─── useInView Hook ─── */
// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
//     }, { threshold: 0.08, ...options });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, inView];
// }

// /* ─── Animation Config ─── */
// const SMOOTH_CURVE = "cubic-bezier(0.3, 0, 0.2, 1)";
// const DURATION = "1.1s";

// function getSlideStyle(distance) {
//   const abs = Math.abs(distance);
//   const configs = {
//     0: { scale: 1.0, opacity: 1, blur: 0, brightness: 1, zIndex: 10 },
//     1: { scale: 0.82, opacity: 0.4, blur: 4, brightness: 0.8, zIndex: 5 },
//     2: { scale: 0.6, opacity: 0, blur: 12, brightness: 0.5, zIndex: 1 }, 
//   };
//   const cfg = configs[Math.min(abs, 2)];
  
//   return {
//     transform: `scale(${cfg.scale})`,
//     opacity: cfg.opacity,
//     filter: `blur(${cfg.blur}px) brightness(${cfg.brightness})`,
//     zIndex: cfg.zIndex,
//     transition: `all ${DURATION} ${SMOOTH_CURVE}`,
//     // ONLY the center card can be clicked. 
//     // This allows the mouse to "pass through" side cards to scroll the page.
//     pointerEvents: abs === 0 ? "auto" : "none", 
//   };
// }

// function HealerCard({ healer, onBook, distance }) {
//   const isActive = distance === 0;
//   const [btnHover, setBtnHover] = useState(false);

//   return (
//     <div style={{
//       ...getSlideStyle(distance),
//       width: "100%",
//       borderRadius: 32,
//       overflow: "hidden",
//       background: "white",
//       border: `1px solid ${isActive ? "rgba(45,84,70,0.1)" : "transparent"}`,
//       boxShadow: isActive ? "0 40px 100px -20px rgba(30,62,52,0.18)" : "none",
//       display: "flex",
//       flexDirection: "column",
//     }}>
//       <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden" }}>
//         <img src={healer.image} alt={healer.name} draggable={false} style={{
//           width: "100%", height: "100%", objectFit: "cover",
//           transform: isActive ? "scale(1)" : "scale(1.2)",
//           transition: `transform 1.8s ${SMOOTH_CURVE}`,
//         }} />
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
//       </div>

//       <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
//         <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>{healer.name}</h3>
//         <p style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2D5446", marginBottom: 20 }}>{healer.specialtyTag}</p>
//         <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{healer.bio}"</p>
//         <div style={{ flexGrow: 1 }} />
//         <button
//           onClick={() => isActive && onBook(healer)}
//           onMouseEnter={() => setBtnHover(true)}
//           onMouseLeave={() => setBtnHover(false)}
//           style={{
//             width: "100%", padding: "18px 0", background: "#1E3E34", color: "white", border: "none",
//             borderRadius: 16, fontSize: 12, fontWeight: 800, fontFamily: "monospace", textTransform: "uppercase",
//             letterSpacing: "0.15em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
//             cursor: "pointer", transition: "all 0.4s ease",
//             transform: btnHover ? "translateY(-3px)" : "none",
//             boxShadow: btnHover ? "0 15px 30px rgba(30,62,52,0.2)" : "none",
//           }}
//         >
//           Book Now <ArrowRight size={16} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function SpecialistSection({ onSelectSpecialist }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [sectionRef, sectionInView] = useInView();
//   const total = SPECIALISTS.length;
//   const stageRef = useRef(null);

//   const go = (dir) => {
//     if (animating) return;
//     const next = activeIndex + dir;
//     if (next < 0 || next >= total) return;
//     setAnimating(true);
//     setActiveIndex(next);
//     setTimeout(() => setAnimating(false), 1100); 
//   };

//   /* 
//      FIX: Use Horizontal Wheel only. 
//      Does NOT call preventDefault() on vertical scroll, 
//      so the website keeps moving up/down.
//   */
//   useEffect(() => {
//     const el = stageRef.current;
//     if (!el) return;
//     let lastMove = 0;
    
//     const onWheel = (e) => {
//       const now = Date.now();
//       // Only trigger if user moves mouse horizontally (deltaX)
//       // or if they are swiping heavily sideways.
//       if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
//         e.preventDefault(); // Block horizontal page bounce
//         if (now - lastMove < 1200) return;
//         lastMove = now;
//         go(e.deltaX > 0 ? 1 : -1);
//       }
//       // If deltaY is bigger, we do NOTHING. Browser scrolls page naturally.
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     return () => el.removeEventListener("wheel", onWheel);
//   }, [activeIndex, animating]);

//   const handleBook = (healer) => {
//     if (onSelectSpecialist) { onSelectSpecialist(healer); return; }
//     window.open(getWhatsAppUrl(`Hi! I'd like to book ${healer.name}.`), "_blank");
//   };

//   return (
//     <section ref={sectionRef} style={{ position: "relative", padding: "120px 0", background: "#fff" }}>
//       <div style={{
//         textAlign: "center", maxWidth: 700, margin: "0 auto 80px", padding: "0 24px",
//         opacity: sectionInView ? 1 : 0, transform: sectionInView ? "translateY(0)" : "translateY(40px)",
//         transition: `all 1.2s ${SMOOTH_CURVE}`,
//       }}>
//         <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>Our Specialists</h2>
//         <p style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.8 }}>Expert clinical practitioners for your holistic recovery.</p>
//       </div>

//       <div style={{ opacity: sectionInView ? 1 : 0, transition: "opacity 1.5s ease 0.4s" }}>
//         <div ref={stageRef} style={{
//           position: "relative", width: "100%", height: 400, display: "flex", alignItems: "center", justifyContent: "center",
//           touchAction: "pan-y" // Critical: tells mobile browsers vertical scroll is allowed
//         }}>
//           {[-2, -1, 0, 1, 2].map((offset) => {
//             const dataIndex = activeIndex + offset;
//             if (dataIndex < 0 || dataIndex >= total) return null;
//             const healer = SPECIALISTS[dataIndex];
//             const STEP = 34; // Spacing
            
//             return (
//               <div
//                 key={healer.id}
//                 onClick={() => offset !== 0 && go(offset > 0 ? 1 : -1)}
//                 style={{
//                   position: "absolute",
//                   width: "clamp(220px, 24%, 320px)",
//                   left: `${50 + offset * STEP}%`,
//                   transform: "translateX(-50%)",
//                   transition: `left ${DURATION} ${SMOOTH_CURVE}`,
//                   cursor: offset === 0 ? "default" : "pointer",
//                   zIndex: 10 - Math.abs(offset),
//                 }}
//               >
//                 <HealerCard healer={healer} onBook={handleBook} distance={offset} />
//               </div>
//             );
//           })}
//         </div>

//         {/* Dots & Nav */}
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 40 }}>
//           <NavBtn onClick={() => go(-1)} disabled={activeIndex === 0}><ChevronLeft /></NavBtn>
//           <div style={{ display: "flex", gap: 10 }}>
//             {SPECIALISTS.map((_, i) => (
//               <div key={i} style={{
//                 width: i === activeIndex ? 40 : 10, height: 10, borderRadius: 5,
//                 background: i === activeIndex ? "#1E3E34" : "#e2e8f0",
//                 transition: `all 0.8s ${SMOOTH_CURVE}`
//               }} />
//             ))}
//           </div>
//           <NavBtn onClick={() => go(1)} disabled={activeIndex === total - 1}><ChevronRight /></NavBtn>
//         </div>
//       </div>
//     </section>
//   );
// }

// function NavBtn({ onClick, disabled, children }) {
//   return (
//     <button onClick={onClick} disabled={disabled} style={{
//       width: 60, height: 60, borderRadius: "50%", border: "1px solid #f1f5f9",
//       background: "white", display: "flex", alignItems: "center", justifyContent: "center",
//       cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.3 : 1,
//       transition: "all 0.3s ease", color: "#1E3E34", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
//     }}>
//       {children}
//     </button>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import { Star, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SPECIALISTS } from "../data.js";
import { getWhatsAppUrl } from "../whatsapp.js";

/* ─── useInView Hook ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.08, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Animation Config ─── */
const SMOOTH_CURVE = "cubic-bezier(0.3, 0, 0.2, 1)";
const DURATION = "1.1s";

function getSlideStyle(distance) {
  const abs = Math.abs(distance);
  const configs = {
    0: { scale: 1.0, opacity: 1, blur: 0, brightness: 1, zIndex: 10 },
    1: { scale: 0.82, opacity: 0.4, blur: 4, brightness: 0.8, zIndex: 5 },
    2: { scale: 0.6, opacity: 0, blur: 12, brightness: 0.5, zIndex: 1 },
  };
  const cfg = configs[Math.min(abs, 2)];

  return {
    transform: `scale(${cfg.scale})`,
    opacity: cfg.opacity,
    filter: `blur(${cfg.blur}px) brightness(${cfg.brightness})`,
    zIndex: cfg.zIndex,
    transition: `all ${DURATION} ${SMOOTH_CURVE}`,
    pointerEvents: abs === 0 ? "auto" : "none",
  };
}

function HealerCard({ healer, onBook, distance }) {
  const isActive = distance === 0;
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div style={{
      ...getSlideStyle(distance),
      width: "100%",
      borderRadius: 24,
      overflow: "hidden",
      background: "white",
      border: `1px solid ${isActive ? "rgba(45,84,70,0.1)" : "transparent"}`,
      boxShadow: isActive ? "0 24px 60px -16px rgba(30,62,52,0.18)" : "none",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{ position: "relative", width: "100%", height: 200, overflow: "hidden" }}>
        <img
          src={healer.image}
          alt={healer.name}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isActive ? "scale(1)" : "scale(1.2)",
            transition: `transform 1.8s ${SMOOTH_CURVE}`,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
      </div>

      <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 800, color: "#0f172a", margin: "0 0 4px" }}>
          {healer.name}
        </h3>
        <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "#2D5446", marginBottom: 12 }}>
          {healer.specialtyTag}
        </p>
        <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, fontStyle: "italic", marginBottom: 16 }}>
          "{healer.bio}"
        </p>
        <div style={{ flexGrow: 1 }} />
        <button
          onClick={() => isActive && onBook(healer)}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#1E3E34",
            color: "white",
            border: "none",
            borderRadius: 12,
            fontSize: 10,
            fontWeight: 800,
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            cursor: "pointer",
            transition: "all 0.4s ease",
            transform: btnHover ? "translateY(-2px)" : "none",
            boxShadow: btnHover ? "0 10px 20px rgba(30,62,52,0.2)" : "none",
          }}
        >
          Book Now <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default function SpecialistSection({ onSelectSpecialist }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [sectionRef, sectionInView] = useInView();
  const total = SPECIALISTS.length;
  const stageRef = useRef(null);

  const go = (dir) => {
    if (animating) return;
    const next = activeIndex + dir;
    if (next < 0 || next >= total) return;
    setAnimating(true);
    setActiveIndex(next);
    setTimeout(() => setAnimating(false), 1100);
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let lastMove = 0;

    const onWheel = (e) => {
      const now = Date.now();
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
        e.preventDefault();
        if (now - lastMove < 1200) return;
        lastMove = now;
        go(e.deltaX > 0 ? 1 : -1);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [activeIndex, animating]);

  const handleBook = (healer) => {
    if (onSelectSpecialist) { onSelectSpecialist(healer); return; }
    window.open(getWhatsAppUrl(`Hi! I'd like to book ${healer.name}.`), "_blank");
  };

  return (
    <section ref={sectionRef} style={{ position: "relative", padding: "120px 0", background: "#fff" }}>
      <div style={{
        textAlign: "center", maxWidth: 700, margin: "0 auto 80px", padding: "0 24px",
        opacity: sectionInView ? 1 : 0, transform: sectionInView ? "translateY(0)" : "translateY(40px)",
        transition: `all 1.2s ${SMOOTH_CURVE}`,
      }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>
          Our Specialists
        </h2>
        <p style={{ fontSize: "18px", color: "#64748b", lineHeight: 1.8 }}>
          Expert clinical practitioners for your holistic recovery.
        </p>
      </div>

      <div style={{ opacity: sectionInView ? 1 : 0, transition: "opacity 1.5s ease 0.4s" }}>
        <div
          ref={stageRef}
          style={{
            position: "relative",
            width: "100%",
            height: 480,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            touchAction: "pan-y",
          }}
        >
          {[-2, -1, 0, 1, 2].map((offset) => {
            const dataIndex = activeIndex + offset;
            if (dataIndex < 0 || dataIndex >= total) return null;
            const healer = SPECIALISTS[dataIndex];
            const STEP = 26;

            return (
              <div
                key={healer.id}
                onClick={() => offset !== 0 && go(offset > 0 ? 1 : -1)}
                style={{
                  position: "absolute",
                  width: "clamp(220px, 24%, 320px)",
                  left: `${50 + offset * STEP}%`,
                  transform: "translateX(-50%)",
                  transition: `left ${DURATION} ${SMOOTH_CURVE}`,
                  cursor: offset === 0 ? "default" : "pointer",
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <HealerCard healer={healer} onBook={handleBook} distance={offset} />
              </div>
            );
          })}
        </div>

        {/* Dots & Nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, marginTop: 40 }}>
          <NavBtn onClick={() => go(-1)} disabled={activeIndex === 0}><ChevronLeft /></NavBtn>
          <div style={{ display: "flex", gap: 10 }}>
            {SPECIALISTS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? 40 : 10,
                  height: 10,
                  borderRadius: 5,
                  background: i === activeIndex ? "#1E3E34" : "#e2e8f0",
                  transition: `all 0.8s ${SMOOTH_CURVE}`,
                }}
              />
            ))}
          </div>
          <NavBtn onClick={() => go(1)} disabled={activeIndex === total - 1}><ChevronRight /></NavBtn>
        </div>
      </div>
    </section>
  );
}

function NavBtn({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        border: "1px solid #f1f5f9",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "all 0.3s ease",
        color: "#1E3E34",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </button>
  );
}