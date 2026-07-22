import { MapPin, Instagram, ExternalLink } from "lucide-react";
import { BUSINESS_DETAILS } from "@/src/common/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#DECBA5]/20 py-12 sm:py-16 text-[#FAF8F5]/85 text-xs overflow-hidden">
      {/* Leaf background photo — no solid green wash */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      {/* Light scrim only — keeps text readable, photo stays visible */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-left">
        {/* Col 1 */}
        <div className="space-y-4">
          <span className="font-serif text-lg tracking-[0.25em] font-semibold text-white leading-none block">
            NAMASTEY
          </span>
          <p className="text-[11px] text-[#DECBA5] leading-relaxed font-display font-medium">
            Elevating cellular recovery, sensory re-alignment, and communal
            heat/cold somatic practice in a premium high-end light frosted
            space.
          </p>
        </div>

        {/* Col 2 — Single location */}
        <div className="space-y-3 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Visit Us
          </h4>
          <a
            href={BUSINESS_DETAILS.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2 text-[#FAF8F5]/90 text-[11px] font-semibold leading-relaxed hover:text-[#DECBA5] transition-colors duration-500 ease-out"
          >
            <MapPin className="w-4 h-4 text-[#DECBA5] shrink-0 mt-0.5" />
            <span>{BUSINESS_DETAILS.address}</span>
          </a>
        </div>

        {/* Col 3 */}
        <div className="space-y-3 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Sanctuary Hours
          </h4>
          <p className="text-[11px] leading-relaxed text-[#FAF8F5]/85 font-semibold">
            Monday — Saturday: 07:00 AM — 09:30 PM <br />
            Sunday: 08:30 AM — 08:00 PM <br />
            Direct intake:{" "}
            <span className="text-white font-mono font-bold break-all">
              {BUSINESS_DETAILS.email}
            </span>
          </p>
          <div className="flex gap-3 text-[#DECBA5] pt-2 shrink-0">
            <a
              href={BUSINESS_DETAILS.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </a>
            <a
              href={BUSINESS_DETAILS.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[10px] sm:text-[11px] text-[#FAF8F5]/55 font-mono font-bold">
        <span>
          &copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All Rights
          Reserved.
        </span>
        <span>Kharghar, Navi Mumbai</span>
      </div>
    </footer>
  );
}
