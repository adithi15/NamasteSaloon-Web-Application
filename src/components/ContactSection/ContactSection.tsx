import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { BUSINESS_DETAILS, FAQS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleBookNowClick = () => {
    // TODO: customize this message once wp.js / your WhatsApp number is wired up
    const preparedText = "Hi! I'd like to book an appointment.";
    window.open(getWhatsAppUrl(preparedText), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent" id="contact-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,84,70,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">COMMUNAL INTAKE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Intake & Contact
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
            Directly connect with our reservations concierge desk or explore our FAQ directory.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

          {/* Left Side */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Single Location Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 p-6 md:p-8 rounded-3xl space-y-4">
              <h3 className="font-serif text-xl md:text-2xl text-slate-900 font-extrabold">
                Our Location
              </h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2D5446]/10 rounded-xl text-[#2D5446] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <p className="text-sm text-slate-700 font-display font-medium leading-relaxed">
                    {BUSINESS_DETAILS.address}
                  </p>
                  <a
                    href={BUSINESS_DETAILS.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono font-bold text-[#2D5446] hover:text-[#1E3E34] hover:underline inline-flex items-center gap-1"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Intake Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur border border-[#DECBA5]/30 p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#2D5446]/10 rounded-xl text-[#2D5446]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#2D5446] font-black block">CALL OR WHATSAPP</span>
                  <a href={`tel:${BUSINESS_DETAILS.phone}`} className="font-mono text-sm font-extrabold text-slate-900 hover:text-[#2D5446] transition-colors">
                    {BUSINESS_DETAILS.phone}
                  </a>
                  <span className="text-[10px] text-slate-500 block leading-none mt-0.5">Concierge intake desk</span>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur border border-[#DECBA5]/30 p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#2D5446]/10 rounded-xl text-[#2D5446]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#2D5446] font-black block">EMAIL INQUIRIES</span>
                  <a href={`mailto:${BUSINESS_DETAILS.email}`} className="font-mono text-sm font-extrabold text-slate-900 hover:text-[#2D5446] transition-colors">
                    {BUSINESS_DETAILS.email}
                  </a>
                  <span className="text-[10px] text-slate-500 block leading-none mt-0.5">Response within 4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now / WhatsApp CTA (Right Side) — replaces the old Quick Inquiry form */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-[#022A24] text-white p-6 md:p-8 rounded-3xl space-y-6 shadow-xl border border-[#2D5446]/20 h-full flex flex-col justify-center">
              <div className="space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-[#DECBA5] font-black uppercase">
                  MESSAGE CONCIERGE DIRECTLY
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold">
                  Ready to Book?
                </h3>
                <p className="text-[#FAF8F5]/80 text-xs font-display leading-relaxed">
                  Tap below to start a WhatsApp chat with our front desk and lock in your appointment.
                </p>
              </div>

              <button
                type="button"
                onClick={handleBookNowClick}
                className="w-full h-12 bg-[#DECBA5] hover:bg-[#FAF8F5] text-neutral-950 text-xs uppercase tracking-widest font-extrabold transition-all hover:scale-[1.02] shadow-md flex items-center justify-center gap-2 cursor-pointer rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Now on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-slate-900 font-extrabold">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-xs font-display font-semibold mt-2">
              Our standard guidelines regarding contrast bath protocols, medical forms, and reservations.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur border border-[#DECBA5]/30 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#2D5446] shrink-0" />
                    <span className="font-display font-extrabold text-sm text-slate-800 group-hover:text-[#1E3E34] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-xs font-display font-semibold leading-relaxed border-t border-slate-200/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
