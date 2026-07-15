import { MapPin, Instagram, ExternalLink } from "lucide-react";
import { BUSINESS_DETAILS } from "@/src/common/data";

export default function Footer() {
  return (
    <footer className="bg-[#022A24] border-t border-[#2D5446]/20 py-16 text-[#FAF8F5]/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
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

        {/* Col 2 */}
        <div className="space-y-3 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Somatic Offerings
          </h4>
          <ul className="space-y-1.5 text-[#FAF8F5]/80 text-[11px] font-mono font-semibold">
            <li>• Guided Cold Contrast Suite</li>
            <li>• Infrared Saunas & Red Light</li>
            <li>• Kinetic Pneumatic Flushes</li>
            <li>• Acupuncture & Peptide Scans</li>
            <li>• Quartz Alignment Sound Bath</li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-3 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            ACTIVE CLUBS
          </h4>
          <ul className="space-y-2 text-[#FAF8F5]/80 text-[11px] font-semibold">
            <li className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#DECBA5]" /> Charni Road
            </li>
            <li className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#DECBA5]" /> Mumbai Central
            </li>
            <li className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#DECBA5]" /> Vashi
            </li>
            <li className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#DECBA5]" /> Andheri
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="space-y-3 font-display">
          <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#DECBA5] font-black">
            Sanctuary Hours
          </h4>
          <p className="text-[11px] leading-relaxed text-[#FAF8F5]/80 font-semibold">
            Monday — Saturday: 07:00 AM — 09:30 PM <br />
            Sunday: 08:30 AM — 08:00 PM <br />
            Direct intake:{" "}
            <span className="text-white font-mono font-bold">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-[#2D5446]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-200/50 font-mono font-bold">
        <span>
          &copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name} Inc. All
          Rights Reserved.
        </span>
        <span>Designed with premium hot & cold contrast principles.</span>
      </div>
    </footer>
  );
}
