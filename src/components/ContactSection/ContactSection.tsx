import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { BUSINESS_DETAILS, FAQS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";

const PHONES = [
  { label: "7888803331", tel: "+917888803331", wa: "917888803331" },
  { label: "7888803332", tel: "+917888803332", wa: "917888803332" },
] as const;

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleWhatsApp = (number?: string) => {
    const preparedText = "Hi Namastey Wellness Spa! I'd like to get in touch.";
    if (number) {
      window.open(
        `https://wa.me/${number}?text=${encodeURIComponent(preparedText)}`,
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }
    window.open(getWhatsAppUrl(preparedText), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="contact-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,84,70,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Contact Us
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
            Reach us by phone, WhatsApp, email, or visit our Kharghar spa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Address */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 p-6 md:p-8 rounded-3xl space-y-4">
              <h3 className="font-serif text-xl md:text-2xl text-slate-900 font-extrabold">
                Visit Us
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
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur border border-[#DECBA5]/30 p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#2D5446]/10 rounded-xl text-[#2D5446]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2 min-w-0">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#2D5446] font-black block">
                    Call / WhatsApp
                  </span>
                  {PHONES.map((p) => (
                    <div key={p.label} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href={`tel:${p.tel}`}
                        className="font-mono text-sm font-extrabold text-slate-900 hover:text-[#2D5446] transition-colors"
                      >
                        {p.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleWhatsApp(p.wa)}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D5446] hover:underline cursor-pointer"
                      >
                        WhatsApp
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur border border-[#DECBA5]/30 p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#2D5446]/10 rounded-xl text-[#2D5446]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#2D5446] font-black block">
                    Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_DETAILS.email}`}
                    className="font-mono text-sm font-extrabold text-slate-900 hover:text-[#2D5446] transition-colors break-all"
                  >
                    {BUSINESS_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white/60 backdrop-blur border border-[#DECBA5]/30 p-6 rounded-2xl">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#2D5446] font-black block mb-4">
                Follow Us
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BUSINESS_DETAILS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DECBA5]/40 bg-white/70 text-[#1E3E34] text-xs font-extrabold uppercase tracking-wider hover:bg-[#1E3E34] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={BUSINESS_DETAILS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DECBA5]/40 bg-white/70 text-[#1E3E34] text-xs font-extrabold uppercase tracking-wider hover:bg-[#1E3E34] hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA — compact, centered */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-sm bg-[#022A24] text-white p-5 rounded-2xl space-y-4 shadow-xl border border-[#2D5446]/20">
              <div className="space-y-1.5 text-center">
                <span className="text-[9px] font-mono tracking-widest text-[#DECBA5] font-black uppercase">
                  Quick Connect
                </span>
                <h3 className="font-serif text-lg font-bold">
                  Message Us on WhatsApp
                </h3>
                <p className="text-[#FAF8F5]/75 text-[11px] font-display leading-relaxed">
                  Prefer a quick chat? Tap below to message our front desk.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleWhatsApp()}
                className="w-full h-11 bg-[#DECBA5] text-[#1E3E34] text-[11px] uppercase tracking-widest font-extrabold transition-transform duration-500 ease-out shadow-md flex items-center justify-center gap-2 cursor-pointer rounded-xl active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-slate-900 font-extrabold">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-xs font-display font-semibold mt-2">
              Quick answers about bookings, visits, and spa guidelines.
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
