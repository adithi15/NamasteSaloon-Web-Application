/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SpaCategory, SpaService, Specialist } from "./types.js";

export const SERVICES = [
  new SpaService(
    "service-1",
    "Guided Ice Bath & Breathwork",
    "Submerge in cold water recovery paired with active pranayama and vagus nerve stimulation, designed to optimize nervous system resilience.",
    SpaCategory.TECH_REMEDIES,
    45,
    95,
    4.9,
    142,
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
    true
  ),
  new SpaService(
    "service-2",
    "Infrared & Chroma Sauna Suite",
    "Deep-penetrating cell detoxification utilizing full-spectrum thermal light, promoting muscle repair and metabolic upregulation.",
    SpaCategory.TECH_REMEDIES,
    60,
    80,
    4.8,
    310,
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    true
  ),
  new SpaService(
    "service-3",
    "Lymphatic Air Compression",
    "Dynamic pulsing massage cuffs utilizing pneumatic compression to flush biological waste and accelerate athletic recovery.",
    SpaCategory.TECH_REMEDIES,
    50,
    75,
    4.7,
    88,
    "https://images.unsplash.com/photo-1519823551279-64bc75d44f47?auto=format&fit=crop&q=80&w=800",
    false
  ),
  new SpaService(
    "service-4",
    "Hyperbaric Oxygen Chamber",
    "Breathe 95% pure medical-grade oxygen under soft hydrostatic pressure to dramatically accelerate wound/tissue repair and cellular energy.",
    SpaCategory.TECH_REMEDIES,
    75,
    140,
    4.9,
    95,
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    true
  ),
  new SpaService(
    "service-5",
    "Intravenous Vitamin Infusion",
    "Hydrate cells deeply with customizable IV infusions of Glutathione, Vitamin C, minerals, and peptides for instant cellular glow.",
    SpaCategory.ALTERNATIVE_MEDICINE,
    50,
    160,
    4.9,
    215,
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    false
  ),
  new SpaService(
    "service-6",
    "Electro-Acupuncture Bio-Scan",
    "Acupuncture needles coupled with micro-current and electro-magnetic frequency scans to quickly balance structural nervous points.",
    SpaCategory.ALTERNATIVE_MEDICINE,
    60,
    125,
    4.85,
    104,
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    false
  ),
  new SpaService(
    "service-7",
    "Ayurvedic Abhyanga Massages",
    "An ancient, warm herbal-oil somatic massage that focuses on major energy channels (Marma points) to ground bodily bio-energies.",
    SpaCategory.MASSAGES,
    90,
    180,
    4.95,
    420,
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    true
  ),
  new SpaService(
    "service-8",
    "Remedy Vulcanic Hot Rock",
    "Synergistic massage utilizing premium basalt stones and lavender-infused extracts to meltingly release heavy spinal blockages.",
    SpaCategory.MASSAGES,
    75,
    150,
    4.9,
    192,
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    false
  ),
  new SpaService(
    "service-9",
    "Resting Metabolic Rate & VO2 Max",
    "Analyze breath gasses under resting and test stress variables to calculate exact biological calorie burn rate and peak oxygen volume.",
    SpaCategory.BIOMETRIC_TESTING,
    90,
    220,
    4.8,
    76,
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    false
  ),
  new SpaService(
    "service-10",
    "Alchemical Sound Bath Ritual",
    "Immersive therapeutic ceremony utilizing custom gold quartz singing bowls, gongs, and planetary chimes to reset neurological vibrations.",
    SpaCategory.CLASSES,
    60,
    55,
    4.98,
    540,
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    true
  )
];

export const SPECIALISTS = [
  new Specialist(
    "spec-1",
    "Aarya Varma",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600",
    4.9,
    SpaCategory.MASSAGES,
    "AYURVEDIC MEDICINE & PANCHAKARMA",
    [
      "B.A.M.S (Govt. Ayurvedic Medical College, Bengaluru)",
      "M.S. in Panchakarma (Global Institute of Indian Medicine)"
    ],
    "12+ Years of Advanced Clinical Practice",
    ["Mon", "Tue", "Thu", "Fri", "Sat"],
    "Expert in diagnosing constitutional doshas and executing targeted deep-tissue somatic release therapy using bespoke warm organic oils."
  ),
  new Specialist(
    "spec-2",
    "Dr. Marcus Sterling",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600",
    4.8,
    SpaCategory.BIOMETRIC_TESTING,
    "SPORTS SCIENCE & PERFORMANCE CARDIOLOGY",
    [
      "M.D. (Stanford University School of Medicine)",
      "Fellowship in Sports Recovery (Mayo Clinic, Rochester)"
    ],
    "9+ Years coaching elite and Olympic athletes",
    ["Tue", "Wed", "Fri", "Sat"],
    "Specializes in biometric profiling, peak cardiac health output, hyperbaric oxygen protocols, and custom high-altitude oxygen recovery."
  )
  // new Specialist(
  //   "spec-3",
  //   "Elena Rostova",
  //   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600",
  //   4.95,
  //   SpaCategory.CLASSES,
  //   "VIBRATIONAL MEDICINE & SOUND ALCHEMY",
  //   [
  //     "M.A. in Music Therapy & Hertz Resonance (Berklee)",
  //     "Somatic Breath Therapy Certification (Rishikesh, India)"
  //   ],
  //   "8+ Years leading cosmic acoustic soundscapes",
  //   ["Wed", "Thu", "Fri", "Sun"],
  //   "Integrates crystalline quartz vocal resonance with rhythmic holotropic breathwork sequences to induce high-alpha state sensory calm."
  // ),
  // new Specialist(
  //   "spec-4",
  //   "Dr. Kenji Tanaka",
  //   "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600&h=600",
  //   4.9,
  //   SpaCategory.ALTERNATIVE_MEDICINE,
  //   "EASTERN ACUPUNCTURE & BIO-SIGNALING",
  //   [
  //     "D.A.O.M (Doctor of Eastern Medicine, San Francisco)",
  //     "B.S. in Neurobiology (University of Tokyo)"
  //   ],
  //   "15+ Years solving neuropathic chronic fatigue",
  //   ["Mon", "Wed", "Thu", "Sat"],
  //   "Maintains advanced expertise in neural pathway mapping, electro-acupuncture, trigger point infusions, and biological peptide signaling."
  // )
];

export const TIME_SLOTS = [
  "08:00 AM",
  "09:30 AM",
  "11:00 AM",
  "12:30 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
  "08:00 PM"
];

// Helper to convert AM/PM slot to a standard sorted value
export function parseTimeToMinutes(timeStr) {
  const match = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
  if (!match) return 0;
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const ampm = match[3].toUpperCase();
  if (ampm === "PM" && hours !== 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}
