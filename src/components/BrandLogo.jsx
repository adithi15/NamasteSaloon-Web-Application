 

import React from "react";

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Elegant Stylized Wellness Lotus Vector */}
      <svg
        className="w-10 h-10 text-[#DECBA5]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 2v7c0 6 8 10 8 10z" />
        <path d="M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        <path d="M12 5v3" />
        <path d="M12 14v3" />
        <path d="M9 11h6" />
      </svg>

      <div className="flex flex-col text-left">
        <span className="font-serif text-lg tracking-[0.25em] font-semibold text-white leading-none">
          NAMASTEY
        </span>
        <span className="font-mono text-[9px] tracking-[0.35em] text-[#DECBA5] uppercase mt-1 leading-none font-bold">
          Wellness Spa
        </span>
      </div>
    </div>
  );
}
