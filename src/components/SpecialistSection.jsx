// import React from "react";
// import { Star, GraduationCap, Briefcase, Calendar, ArrowRight } from "lucide-react";
// import { SPECIALISTS } from "../data.js";
// import { getWhatsAppUrl } from "../whatsapp.js";

// export default function SpecialistSection({ onSelectSpecialist }) {
//   // Opens a WhatsApp chat pre-filled with the chosen specialist. Falls back to
//   // the onSelectSpecialist prop first, in case a parent wants to handle it differently.
//   const handleBook = (healer) => {
//     if (onSelectSpecialist) {
//       onSelectSpecialist(healer);
//       return;
//     }
//     window.open(
//       getWhatsAppUrl(`Hi! I'd like to book an appointment with ${healer.name}.`),
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   return (
//     <section className="relative py-20 md:py-28" id="specialists-section">
//       {/* Dynamic ambient background glow */}
//       <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#2D5446]/10 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Title */}
//         <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
//           <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
//             Our Spa Healers
//           </h2>
//           <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
//           <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
//             Advanced somatics and holistic recovery delivered by highly certified clinicians and therapists in a premium, comforting sanctuary.
//           </p>
//         </div>

//         {/* Specialists Grid Layout: Exact Match to Dental Mockup */}
// <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">          {SPECIALISTS.map((healer) => (
//             <div
//               key={healer.id}
//               className="bg-white/40 backdrop-blur-sm border border-white/60 p-5 rounded-3xl shadow-sm hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
//               id={`healer-card-${healer.id}`}
//             >
              
//               {/* Media container */}
//               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-200">
//                 <img
//                   src={healer.image}
//                   alt={healer.name}
//                   referrerPolicy="no-referrer"
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                
//                 {/* Embedded Rating Tag on top right (match dental dashboard mockup) */}
//                 <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[#1C3D2F] text-xs font-extrabold font-mono flex items-center gap-1 border border-white">
//                   <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
//                   <span>{healer.rating.toFixed(1)}</span>
//                 </div>
//               </div>

//               {/* Informational Details */}
//               <div className="flex-grow flex flex-col">
//                 {/* Counselor/Healer Name */}
//                 <h3 className="font-serif text-slate-900 text-xl font-extrabold group-hover:text-[#2D5446] transition-colors duration-250">
//                   {healer.name}
//                 </h3>

//                 {/* Specialty Pill Segment */}
//                 <div className="self-start mt-2 mb-4">
//                   <div className="bg-[#2D5446]/10 border border-[#2D5446]/35 text-[#1E3E34] text-[9px] tracking-wider font-black uppercase px-3 py-1 rounded-md">
//                     {healer.specialtyTag}
//                   </div>
//                 </div>

//                 {/* Credentials list matching the graduation design */}
//                 <div className="space-y-3.5 text-xs text-slate-700 font-display font-semibold flex-grow">
//                   {/* Graduation Degrees */}
//                   {healer.degrees.map((degree, i) => (
//                     <div key={i} className="flex items-start gap-2.5 leading-tight">
//                       <GraduationCap className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
//                       <span>{degree}</span>
//                     </div>
//                   ))}

//                   {/* Operational Experience */}
//                   <div className="flex items-start gap-2.5 leading-tight">
//                     <Briefcase className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
//                     <span>{healer.experience}</span>
//                   </div>

//                   {/* Available calendar days */}
//                   <div className="flex items-start gap-2.5 leading-tight">
//                     <Calendar className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
//                     <span className="text-slate-600 text-[11px] font-mono font-bold">
//                       Active: {healer.availableDays.join(", ")}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Action booking CTA at bottom of card */}
//               <div className="mt-6 pt-4 border-t border-black/5">
//                 <button
//                   onClick={() => handleBook(healer)}
//                   className="w-full py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
//                 >
//                   <span>Book Appointment</span>
//                   <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



import React from "react";
import { Star, GraduationCap, Briefcase, Calendar, ArrowRight } from "lucide-react";
import { SPECIALISTS } from "../data.js";
import { getWhatsAppUrl } from "../whatsapp.js";

export default function SpecialistSection({ onSelectSpecialist }) {
  // Opens a WhatsApp chat pre-filled with the chosen specialist. Falls back to
  // the onSelectSpecialist prop first, in case a parent wants to handle it differently.
  const handleBook = (healer) => {
    if (onSelectSpecialist) {
      onSelectSpecialist(healer);
      return;
    }
    window.open(
      getWhatsAppUrl(`Hi! I'd like to book an appointment with ${healer.name}.`),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative py-20 md:py-28" id="specialists-section">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#2D5446]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#E9DFC9]/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Our Spa Healers
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
            Advanced somatics and holistic recovery delivered by highly certified clinicians and therapists in a premium, comforting sanctuary.
          </p>
        </div>

        {/* Specialists Grid Layout: Exact Match to Dental Mockup */}
<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">          {SPECIALISTS.map((healer) => (
            <div
              key={healer.id}
              className="bg-[#F4EEE0]/70 backdrop-blur-sm border border-[#DECBA5]/50 p-5 rounded-3xl shadow-sm hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
              id={`healer-card-${healer.id}`}
            >
              
              {/* Media container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-[#E8DFC8]">
                <img
                  src={healer.image}
                  alt={healer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                
                {/* Embedded Rating Tag on top right (match dental dashboard mockup) */}
                <div className="absolute top-3.5 right-3.5 bg-[#F8F3E5]/90 backdrop-blur px-2.5 py-1 rounded-full text-[#1C3D2F] text-xs font-extrabold font-mono flex items-center gap-1 border border-[#E8DFC8]">
                  <Star className="w-3.5 h-3.5 fill-[#2D5446] text-[#2D5446]" />
                  <span>{healer.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Informational Details */}
              <div className="flex-grow flex flex-col">
                {/* Counselor/Healer Name */}
                <h3 className="font-serif text-slate-900 text-xl font-extrabold group-hover:text-[#2D5446] transition-colors duration-250">
                  {healer.name}
                </h3>

                {/* Specialty Pill Segment */}
                <div className="self-start mt-2 mb-4">
                  <div className="bg-[#2D5446]/10 border border-[#2D5446]/35 text-[#1E3E34] text-[9px] tracking-wider font-black uppercase px-3 py-1 rounded-md">
                    {healer.specialtyTag}
                  </div>
                </div>

                {/* Credentials list matching the graduation design */}
                <div className="space-y-3.5 text-xs text-slate-700 font-display font-semibold flex-grow">
                  {/* Graduation Degrees */}
                  {healer.degrees.map((degree, i) => (
                    <div key={i} className="flex items-start gap-2.5 leading-tight">
                      <GraduationCap className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                      <span>{degree}</span>
                    </div>
                  ))}

                  {/* Operational Experience */}
                  <div className="flex items-start gap-2.5 leading-tight">
                    <Briefcase className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                    <span>{healer.experience}</span>
                  </div>

                  {/* Available calendar days */}
                  <div className="flex items-start gap-2.5 leading-tight">
                    <Calendar className="w-4 h-4 text-[#2D5446] shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-[11px] font-mono font-bold">
                      Active: {healer.availableDays.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action booking CTA at bottom of card */}
              <div className="mt-6 pt-4 border-t border-black/5">
                <button
                  onClick={() => handleBook(healer)}
                  className="w-full py-3 bg-[#1E3E34] hover:bg-[#2D5446] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}