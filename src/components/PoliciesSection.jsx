 

import React, { useState } from "react";
import { ShieldCheck, FileText, Ban, RotateCcw, Sparkles } from "lucide-react";
import { POLICIES } from "../data.js";

export default function PoliciesSection() {
  const [activeTab, setActiveTab] = useState("cancellation");

  const tabItems = [
    { key: "cancellation", label: "Cancellation Policy", icon: <Ban className="w-4 h-4" /> },
    { key: "refund", label: "Refund Policy", icon: <RotateCcw className="w-4 h-4" /> },
    { key: "privacy", label: "Privacy Policy", icon: <ShieldCheck className="w-4 h-4" /> },
    { key: "terms", label: "Terms & Conditions", icon: <FileText className="w-4 h-4" /> }
  ];

  const getPolicyContent = () => {
    switch (activeTab) {
      case "cancellation":
        return {
          title: "Appointment Cancellation & Rescheduling",
          lead: "We value our clients' schedules and the slots reserved for our certified somatic therapists.",
          detail: POLICIES.cancellation,
          points: [
            "Rescheduling requests must be submitted at least 24 hours prior to appointment.",
            "Cancellations under 24 hours generate a standard charge of 50% of the service cost.",
            "If you miss an appointment entirely without warning (no-show), you will be charged 100% of the slot value.",
            "Delays over 15 minutes may result in a shortened session out of respect for subsequent bookings."
          ]
        };
      case "refund":
        return {
          title: "Refunds, Deposits & Memberships",
          lead: "Our policy regarding membership billing, prepaid credits, and class admissions.",
          detail: POLICIES.refund,
          points: [
            "Individual diagnostic packages or booking deposits are non-refundable once executed.",
            "Prepaid multi-session recovery packages are valid for up to 12 months from purchase.",
            "Monthly membership tiers require at least 7 days notice prior to monthly renewal for cancellation.",
            "Products purchased in our boutique lounge can be exchanged within 14 days if unopened."
          ]
        };
      case "privacy":
        return {
          title: "Privacy & Biometric Records",
          lead: "We protect your medical-grade records and athletic diagnostics with complete safety protocols.",
          detail: POLICIES.privacy,
          points: [
            "We adhere strictly to secure storage protocols for clinical records and VO2 measurements.",
            "All physical intake cards and consent logs are digitized and fully encrypted.",
            "Your diagnostics and cardiac profiling outputs are strictly confidential between you and our clinician.",
            "You can request deletion of your client profile and historical records at any time by contacting our direct privacy desk."
          ]
        };
      case "terms":
        return {
          title: "Terms of Facility Use",
          lead: "By booking or entering our communal thermal suites, you consent to our house rules.",
          detail: POLICIES.terms,
          points: [
            "Appropriate athletic or swim wear is mandatory to access saunas and cold plunges.",
            "Our facility operates under quiet sensory-re-alignment parameters. Phones must be kept silent.",
            "We reserve the right of admission to ensure a safe, clean, and quiet space for all members.",
            "All clients must sign a standard somatic liability waiver before entering physical ice plunges."
          ]
        };
    }
  };

  const currentPolicy = getPolicyContent();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent" id="policies-section">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#2D5446]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#1E3E34] font-black">LEGAL COMPLIANCE</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 font-extrabold tracking-wide">
            Sanctuary Policies
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2D5446]/60 to-transparent mx-auto mt-4" />
        </div>

        {/* Dynamic Multi-tab layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Tab buttons column */}
          <div className="md:col-span-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {tabItems.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-xs uppercase tracking-widest font-bold border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-[#1E3E34] text-white border-[#1E3E34] shadow-md shadow-[#1E3E34]/15"
                    : "bg-white/60 border-white/60 hover:bg-white text-slate-800"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Policy Text panel */}
          <div className="md:col-span-8 text-left bg-white/60 backdrop-blur-sm border border-[#DECBA5]/30 p-6 md:p-10 rounded-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-[9px] font-mono tracking-widest text-[#2D5446] font-black uppercase">
                {activeTab} framework
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-slate-900 font-extrabold leading-tight">
                {currentPolicy.title}
              </h3>
              <p className="text-[#1E3E34] font-display font-semibold text-sm md:text-base border-l-2 border-[#2D5446]/40 pl-4 py-1">
                {currentPolicy.lead}
              </p>
            </div>

            <p className="text-slate-600 text-xs md:text-sm font-display font-semibold leading-relaxed">
              {currentPolicy.detail}
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-4 border-t border-slate-200/60">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                Detailed Guidelines
              </h4>
              <ul className="space-y-3">
                {currentPolicy.points.map((pt, index) => (
                  <li key={index} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 font-medium">
                    <span className="font-mono text-xs text-[#2D5446] font-bold">0{index + 1}.</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
