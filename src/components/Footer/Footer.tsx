import { Link } from "react-router-dom";
import { MapPin, Instagram, Phone, MessageCircle, Facebook } from "lucide-react";
import { BUSINESS_DETAILS } from "@/src/common/data";
import { getWhatsAppUrl } from "@/src/common/utils/whatsapp";
import { VIEW_PATHS } from "@/src/common/utils/routes";

const EXPLORE_LINKS = [
  { label: "Services", to: VIEW_PATHS.services },
  { label: "Memberships", to: VIEW_PATHS.memberships },
  { label: "Wellness Blog", to: VIEW_PATHS.blog },
  { label: "Contact", to: VIEW_PATHS.contact },
] as const;

const POLICY_LINKS = [
  { label: "Cancellation", to: `${VIEW_PATHS.contact}#policies-cancellation` },
  { label: "Refund", to: `${VIEW_PATHS.contact}#policies-refund` },
  { label: "Privacy", to: `${VIEW_PATHS.contact}#policies-privacy` },
  { label: "Terms", to: `${VIEW_PATHS.contact}#policies-terms` },
] as const;

const PHONES = BUSINESS_DETAILS.phone
  .split("/")
  .map((p) => p.trim())
  .filter(Boolean);

export default function Footer() {
  const whatsappHref = getWhatsAppUrl(
    "Hi Namastey Wellness Spa! I'd like to ask about your services.",
  );

  return (
    <footer className="relative border-t border-[#DECBA5]/20 py-10 sm:py-12 text-[#FAF8F5]/85 text-xs overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7 sm:gap-x-8 sm:gap-y-8 text-left">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 space-y-3">
          <span className="font-serif text-lg tracking-[0.25em] font-semibold text-white leading-none block">
            NAMASTEY
          </span>
          <p className="text-[11px] text-[#DECBA5] leading-relaxed font-display font-medium">
            Elevating cellular recovery and communal heat/cold practice in a
            calm, premium space.
          </p>
          <p className="text-[10px] text-[#FAF8F5]/50 font-mono font-semibold tracking-wide leading-snug">
            Certified therapists · Quiet sanctuary
          </p>
        </div>

        {/* Explore */}
        <div className="space-y-2.5 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Explore
          </h4>
          <nav className="flex flex-col gap-2">
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] text-[#FAF8F5]/90 font-semibold hover:text-[#DECBA5] transition-colors duration-300 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Visit */}
        <div className="space-y-2.5 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Visit Us
          </h4>
          <a
            href={BUSINESS_DETAILS.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2 text-[#FAF8F5]/90 text-[11px] font-semibold leading-relaxed hover:text-[#DECBA5] transition-colors duration-300"
          >
            <MapPin className="w-3.5 h-3.5 text-[#DECBA5] shrink-0 mt-0.5" />
            <span>{BUSINESS_DETAILS.address}</span>
          </a>
        </div>

        {/* Connect */}
        <div className="space-y-2.5 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Connect
          </h4>
          <p className="text-[11px] leading-relaxed text-[#FAF8F5]/85 font-semibold">
            Mon — Sat: 07:00 — 09:30
            <br />
            Sun: 08:30 — 08:00
          </p>
          <a
            href={`mailto:${BUSINESS_DETAILS.email}`}
            className="block text-[10px] sm:text-[11px] text-white font-mono font-bold break-all hover:text-[#DECBA5] transition-colors duration-300"
          >
            {BUSINESS_DETAILS.email}
          </a>
          <div className="space-y-1.5 pt-0.5">
            {PHONES.map((phone) => (
              <a
                key={phone}
                href={`tel:+91${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-1.5 text-[11px] text-[#FAF8F5]/90 font-semibold hover:text-[#DECBA5] transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-[#DECBA5] shrink-0" />
                {phone}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-[#FAF8F5]/90 font-semibold hover:text-[#DECBA5] transition-colors duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#DECBA5] shrink-0" />
              WhatsApp us
            </a>
          </div>
          <div className="flex gap-3 text-[#DECBA5] pt-1.5">
            <a
              href={BUSINESS_DETAILS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </a>
            <a
              href={BUSINESS_DETAILS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left text-[10px] text-[#FAF8F5]/50 font-mono font-bold">
        <span>
          &copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}
        </span>
        <nav className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
          {POLICY_LINKS.map((link, i) => (
            <span key={link.label} className="inline-flex items-center gap-2.5">
              {i > 0 ? (
                <span className="text-[#FAF8F5]/25" aria-hidden>
                  ·
                </span>
              ) : null}
              <Link
                to={link.to}
                className="hover:text-[#DECBA5] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <span>Kharghar, Navi Mumbai</span>
      </div>
    </footer>
  );
}
