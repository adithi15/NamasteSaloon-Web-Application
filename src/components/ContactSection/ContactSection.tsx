import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Instagram,
} from "lucide-react";
import FadeIn, {
  spaFadeReveal,
  spaCardTransition,
  spaSoftReveal,
  spaSoftTransition,
  spaEaseInOut,
} from "@/src/components/FadeIn";
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
  const reduceMotion = useReducedMotion();

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
      className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="contact-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(45,84,70,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35, margin: "72px 0px 72px 0px" }}
          transition={{ duration: 0.9, ease: spaEaseInOut }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Contact Us
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm md:text-base font-semibold font-display">
            Reach us by phone, WhatsApp, email, or visit our Kharghar spa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {/* Address */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              {...spaFadeReveal}
              initial={reduceMotion ? false : spaFadeReveal.initial}
              viewport={{ once: false, amount: 0.15, margin: "72px 0px 72px 0px" }}
              transition={spaCardTransition(0, !!reduceMotion)}
              className="card-leaf-bg border border-[#DECBA5]/30 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl space-y-4"
            >
              <h3 className="font-serif text-xl md:text-2xl text-[#FAF8F5] font-extrabold">
                Visit Us
              </h3>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-3 bg-[#DECBA5]/15 rounded-xl text-[#DECBA5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <p className="text-sm text-[#FAF8F5]/85 font-display font-medium leading-relaxed">
                    {BUSINESS_DETAILS.address}
                  </p>
                  <a
                    href={BUSINESS_DETAILS.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono font-bold text-[#DECBA5] hover:text-[#E9E4DB] hover:underline inline-flex items-center gap-1"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                {...spaFadeReveal}
                initial={reduceMotion ? false : spaFadeReveal.initial}
                viewport={{ once: false, amount: 0.15, margin: "72px 0px 72px 0px" }}
                transition={spaCardTransition(1, !!reduceMotion)}
                className="card-leaf-bg border border-[#DECBA5]/30 p-5 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4"
              >
                <div className="p-3 bg-[#DECBA5]/15 rounded-xl text-[#DECBA5] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2 min-w-0">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#DECBA5] font-black block">
                    Call / WhatsApp
                  </span>
                  {PHONES.map((p) => (
                    <div key={p.label} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href={`tel:${p.tel}`}
                        className="font-mono text-sm font-extrabold text-[#FAF8F5] hover:text-[#DECBA5] transition-colors"
                      >
                        {p.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleWhatsApp(p.wa)}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DECBA5] hover:underline cursor-pointer"
                      >
                        WhatsApp
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...spaFadeReveal}
                initial={reduceMotion ? false : spaFadeReveal.initial}
                viewport={{ once: false, amount: 0.15, margin: "72px 0px 72px 0px" }}
                transition={spaCardTransition(2, !!reduceMotion)}
                className="card-leaf-bg border border-[#DECBA5]/30 p-5 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4"
              >
                <div className="p-3 bg-[#DECBA5]/15 rounded-xl text-[#DECBA5] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#DECBA5] font-black block">
                    Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_DETAILS.email}`}
                    className="font-mono text-sm font-extrabold text-[#FAF8F5] hover:text-[#DECBA5] transition-colors break-all"
                  >
                    {BUSINESS_DETAILS.email}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social */}
            <motion.div
              {...spaFadeReveal}
              initial={reduceMotion ? false : spaFadeReveal.initial}
              viewport={{ once: false, amount: 0.15, margin: "72px 0px 72px 0px" }}
              transition={spaCardTransition(3, !!reduceMotion)}
              className="card-leaf-bg border border-[#DECBA5]/30 p-6 rounded-2xl"
            >
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#DECBA5] font-black block mb-4">
                Follow Us
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BUSINESS_DETAILS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DECBA5]/40 bg-[#DECBA5]/15 text-[#DECBA5] text-xs font-extrabold uppercase tracking-wider hover:bg-[#DECBA5] hover:text-[#1E3E34] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={BUSINESS_DETAILS.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DECBA5]/40 bg-[#DECBA5]/15 text-[#DECBA5] text-xs font-extrabold uppercase tracking-wider hover:bg-[#DECBA5] hover:text-[#1E3E34] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>

          {/* WhatsApp CTA — compact, centered */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              {...spaFadeReveal}
              initial={reduceMotion ? false : spaFadeReveal.initial}
              viewport={{ once: false, amount: 0.15, margin: "72px 0px 72px 0px" }}
              transition={spaCardTransition(1, !!reduceMotion)}
              className="w-full max-w-sm card-leaf-bg text-white p-5 rounded-2xl space-y-4 shadow-xl border border-[#DECBA5]/30"
            >
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
            </motion.div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn once={false} className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-slate-900 font-extrabold">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-xs font-display font-semibold mt-2">
              Quick answers about bookings, visits, and spa guidelines.
            </p>
          </FadeIn>

          <div className="space-y-3 text-left">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                {...spaSoftReveal}
                initial={reduceMotion ? false : spaSoftReveal.initial}
                viewport={{ once: false, amount: 0.15, margin: "72px 0px 72px 0px" }}
                transition={spaSoftTransition(idx, !!reduceMotion)}
                className="card-leaf-bg border border-[#DECBA5]/30 rounded-2xl overflow-hidden shadow-lg shadow-[#022A24]/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <HelpCircle className="w-4 h-4 text-[#DECBA5] shrink-0 mt-0.5" />
                    <span className="font-display font-extrabold text-sm text-[#FAF8F5] group-hover:text-[#DECBA5] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FAF8F5]/50 shrink-0 transition-transform duration-300 ${
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
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-[#FAF8F5]/75 text-xs font-display font-semibold leading-relaxed border-t border-[#DECBA5]/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
