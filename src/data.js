 

import { SpaCategory } from "./types.js";

export const BUSINESS_DETAILS = {
  name: "NAMASTEY Wellness SPA",
  // tagline: "SELF-CARE MADE SOCIAL",
  about: "Elevating cellular recovery, sensory re-alignment, and communal heat/cold somatic practice in a premium high-end light frosted space.",
  yearEstablished: 2014,
  phone: "+91 95944 01718",
  whatsapp: "919594401718",
  email: "concierge@namastey.social",
  address: "Sea Face Plaza, Marine Drive, Charni Road, Mumbai, MH - 400004",
  mapsLink: "https://maps.google.com/?q=Marine+Drive+Charni+Road+Mumbai",
  instagram: "https://www.instagram.com/namasteywellnessspa/",
  facebook: "https://facebook.com/namastey.wellness"
};

export const SERVICES = [
  {
    id: "service-1",
    name: "Guided Ice Bath & Breathwork",
    description: "Submerge in cold water recovery paired with active pranayama and vagus nerve stimulation, designed to optimize nervous system resilience.",
    benefits: [
      "Triggers rapid anti-inflammatory response and pain relief",
      "Accelerates athletic recovery and cellular regeneration",
      "Stimulates the vagus nerve to reduce stress and anxiety",
      "Improves vascular circulation and immune response"
    ],
    category: SpaCategory.TECH_REMEDIES,
    durationMinutes: 45,
    price: 95,
    rating: 4.9,
    ratingCount: 142,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "service-2",
    name: "Infrared & Chroma Sauna Suite",
    description: "Deep-penetrating cell detoxification utilizing full-spectrum thermal light, promoting muscle repair and metabolic upregulation.",
    benefits: [
      "Promotes deep cellular sweating to flush out waste",
      "Relaxes tight muscle groups and joints",
      "Chroma-therapy lighting balances mood and energy levels",
      "Increases core body temperature for a mild cardiovascular workout"
    ],
    category: SpaCategory.TECH_REMEDIES,
    durationMinutes: 60,
    price: 80,
    rating: 4.8,
    ratingCount: 310,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "service-3",
    name: "Lymphatic Air Compression",
    description: "Dynamic pulsing massage cuffs utilizing pneumatic compression to flush biological waste and accelerate athletic recovery.",
    benefits: [
      "Enhances lymphatic drainage and reduces fluid retention",
      "Eliminates metabolic waste from muscle tissues",
      "Provides relief from heavy, tired, or swollen legs",
      "Improves range of motion and overall flexibility"
    ],
    category: SpaCategory.TECH_REMEDIES,
    durationMinutes: 50,
    price: 75,
    rating: 4.7,
    ratingCount: 88,
    image: "https://images.unsplash.com/photo-1519823551279-64bc75d44f47?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-4",
    name: "Hyperbaric Oxygen Chamber",
    description: "Breathe 95% pure medical-grade oxygen under soft hydrostatic pressure to dramatically accelerate wound/tissue repair and cellular energy.",
    benefits: [
      "Saturates plasma with high-concentration pure oxygen",
      "Dramatically stimulates collagen production and tissue repair",
      "Reduces chronic swelling and supports cognitive longevity",
      "Combats fatigue and optimizes ATP energy output"
    ],
    category: SpaCategory.TECH_REMEDIES,
    durationMinutes: 75,
    price: 140,
    rating: 4.9,
    ratingCount: 95,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "service-5",
    name: "Intravenous Vitamin Infusion",
    description: "Hydrate cells deeply with customizable IV infusions of Glutathione, Vitamin C, minerals, and peptides for instant cellular glow.",
    benefits: [
      "100% absorption of vital micro-nutrients bypassing digestion",
      "Glutathione actively brightens skin tone and fights oxidant stress",
      "Boosts baseline immunity and mental focus",
      "Instantly restores physiological hydration"
    ],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 50,
    price: 160,
    rating: 4.9,
    ratingCount: 215,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-6",
    name: "Electro-Acupuncture Bio-Scan",
    description: "Acupuncture needles coupled with micro-current and electro-magnetic frequency scans to quickly balance structural nervous points.",
    benefits: [
      "Re-establishes healthy bio-electric pathways in the body",
      "Provides relief for chronic neuropathic discomfort",
      "Identifies structural energy blocks via diagnostic scans",
      "Calms the sympathetic fight-or-flight response"
    ],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 60,
    price: 125,
    rating: 4.85,
    ratingCount: 104,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-7",
    name: "Ayurvedic Abhyanga Massages",
    description: "An ancient, warm herbal-oil somatic massage that focuses on major energy channels (Marma points) to ground bodily bio-energies.",
    benefits: [
      "Detoxifies cells via friction and warm, custom-blended herbal oils",
      "Nourishes dry skin while supporting musculoskeletal health",
      "Induces a profoundly deep state of sensory tranquility",
      "Stimulates lymphatic pathways and joint lubrication"
    ],
    category: SpaCategory.MASSAGES,
    durationMinutes: 90,
    price: 180,
    rating: 4.95,
    ratingCount: 420,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "service-8",
    name: "Remedy Vulcanic Hot Rock",
    description: "Synergistic massage utilizing premium basalt stones and lavender-infused extracts to meltingly release heavy spinal blockages.",
    benefits: [
      "Deep heat penetration melts chronic muscular spasms",
      "Lavender aromatics induce immediate parasympathetic shifts",
      "Reduces spinal alignment tension and structural stiffness",
      "Improves vascular and lymphatic micro-circulation"
    ],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 150,
    rating: 4.9,
    ratingCount: 192,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-9",
    name: "Resting Metabolic Rate & VO2 Max",
    description: "Analyze breath gasses under resting and test stress variables to calculate exact biological calorie burn rate and peak oxygen volume.",
    benefits: [
      "Identifies exact personal cellular metabolic burn rate",
      "Calculates VO2 Max for peak oxygen delivery limits",
      "Customizes zone training targets for ultimate endurance",
      "Provides a data-driven path to optimizing fat oxidation"
    ],
    category: SpaCategory.BIOMETRIC_TESTING,
    durationMinutes: 90,
    price: 220,
    rating: 4.8,
    ratingCount: 76,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "service-10",
    name: "Alchemical Sound Bath Ritual",
    description: "Immersive therapeutic ceremony utilizing custom gold quartz singing bowls, gongs, and planetary chimes to reset neurological vibrations.",
    benefits: [
      "Entrains brainwaves into high-alpha and theta deep states",
      "Instantly relieves high mental strain and cortisol levels",
      "Establishes deep vibrational resonance throughout the tissues",
      "Improves focus, sleep architecture, and dream depth"
    ],
    category: SpaCategory.CLASSES,
    durationMinutes: 60,
    price: 55,
    rating: 4.98,
    ratingCount: 540,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  }
];

export const SPECIALISTS = [
  {
  id: "spec-1",
  name: "Arman",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.MASSAGES,
  specialtyTag: "DEEP TISSUE & SWEDISH MASSAGE",
  degrees: [
    "Certified Massage Therapist (CMT)",
    "Advanced Spa & Wellness Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Specializes in deep tissue, Swedish, and relaxation therapies to relieve stress, improve circulation, and promote overall wellness."
},
{
  id: "spec-2",
  name: "Jerisa",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.MASSAGES,
  specialtyTag: "AROMATHERAPY & HOT STONE THERAPY",
  degrees: [
    "Certified Aromatherapy Practitioner",
    "Spa Therapy Certification"
  ],
  experience: "6+ Years of Professional Experience",
  bio: "Expert in aromatherapy and hot stone massage, creating deeply relaxing and rejuvenating wellness experiences."
},
{
  id: "spec-3",
  name: "Eva",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.8,
  category: SpaCategory.MASSAGES,
  specialtyTag: "BALINESE & THAI MASSAGE",
  degrees: [
    "Certified Thai Massage Therapist",
    "Balinese Massage Certification"
  ],
  experience: "8+ Years of Professional Experience",
  bio: "Combines traditional Thai stretching techniques with Balinese massage for complete body relaxation."
},
{
  id: "spec-4",
  name: "Victoria",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 5.0,
  category: SpaCategory.MASSAGES,
  specialtyTag: "LYMPHATIC DRAINAGE & RELAXATION",
  degrees: [
    "Certified Lymphatic Massage Therapist",
    "Professional Spa Therapy Certification"
  ],
  experience: "10+ Years of Professional Experience",
  bio: "Experienced in lymphatic drainage, relaxation therapies, and customized wellness treatments."
},
{
  id: "spec-5",
  name: "Amy",
  image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.MASSAGES,
  specialtyTag: "REFLEXOLOGY & FOOT THERAPY",
  degrees: [
    "Certified Reflexologist",
    "Holistic Wellness Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Provides therapeutic reflexology sessions focused on restoring balance and relieving body tension."
},
{
  id: "spec-6",
  name: "Ruby",
  image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.8,
  category: SpaCategory.MASSAGES,
  specialtyTag: "SIGNATURE SPA & BODY THERAPIES",
  degrees: [
    "Certified Spa Therapist",
    "Body Treatment Specialist"
  ],
  experience: "9+ Years of Professional Experience",
  bio: "Specializes in luxury body treatments, exfoliation therapies, and full-body wellness rituals."
},
{
  id: "spec-7",
  name: "Juju",
  image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.MASSAGES,
  specialtyTag: "HERBAL COMPRESS & THAI THERAPY",
  degrees: [
    "Certified Thai Spa Therapist",
    "Herbal Therapy Certification"
  ],
  experience: "6+ Years of Professional Experience",
  bio: "Uses herbal compress treatments and traditional Thai massage techniques to restore energy and flexibility."
},
{
  id: "spec-8",
  name: "Crystal",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 5.0,
  category: SpaCategory.MASSAGES,
  specialtyTag: "SWEDISH & AROMA MASSAGE",
  degrees: [
    "Certified Swedish Massage Therapist",
    "Advanced Aromatherapy Practitioner"
  ],
  experience: "11+ Years of Professional Experience",
  bio: "Known for personalized Swedish and aroma massage sessions that enhance relaxation and reduce muscle tension."
},
{
  id: "spec-9",
  name: "Hazel",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.MASSAGES,
  specialtyTag: "HOLISTIC WELLNESS & SPA THERAPY",
  degrees: [
    "Certified Holistic Wellness Therapist",
    "Professional Spa Management Certification"
  ],
  experience: "8+ Years of Professional Experience",
  bio: "Dedicated to holistic wellness through customized massage therapies that promote relaxation, recovery, and overall well-being."
}
];

export const PRICING_PACKAGES = [
  {
    id: "pkg-1",
    title: "Somatic Day Pass",
    price: 65,
    duration: "1 Day Access",
    description: "Perfect for single-session thermal recovery.",
    benefits: [
      "Access to Contrast Suites (Hot & Cold plunge)",
      "Full spectrum Infrared Sauna access",
      "Complimentary organic herbal infusion bar",
      "Towel & luxury locker amenities"
    ],
    popular: false,
    type: "individual"
  },
  {
    id: "pkg-2",
    title: "Acoustic Tier Membership",
    price: 195,
    duration: "Per Month",
    description: "Designed for steady recovery and nervous system balancing.",
    benefits: [
      "4 Contrast Plunge or Sauna bookings per month",
      "2 Alchemical Sound Bath class passes",
      "10% discount on all custom massages",
      "Access to member-only sanctuary lounges"
    ],
    popular: true,
    type: "membership"
  },
  {
    id: "pkg-3",
    title: "Pranayama Club Membership",
    price: 350,
    duration: "Per Month",
    description: "Committed recovery with biometric monitoring.",
    benefits: [
      "Unlimited Hot/Cold plunge & Sauna admissions",
      "1 VO2 Max profiling assessment per quarter",
      "4 Alchemical Sound Bath or breathing workshops",
      "15% off all alternative medicine & IV therapies"
    ],
    popular: false,
    type: "membership"
  },
  {
    id: "pkg-4",
    title: "Universal VIP Access",
    price: 799,
    duration: "Per Month",
    description: "The peak somatic and restorative wellness suite.",
    benefits: [
      "Unlimited admission to all contrast thermal suites",
      "4 Custom Somatic Massages (75 min) per month",
      "Unlimited IV infusion drips and vitamin consults",
      "Personalized medical wellness and cardiac profiling"
    ],
    popular: false,
    type: "membership"
  },
  {
    id: "pkg-5",
    title: "Couple's Somatic Re-alignment",
    price: 320,
    duration: "Single Session (120 mins)",
    description: "Co-restorative sensory balancing for couples.",
    benefits: [
      "Private contrast thermal suite (60 mins)",
      "Coordinated Ayurvedic or Vulcanic massage (60 mins)",
      "Dual copper bowl sound vibration resonance",
      "Elysian cocoa & elixir platter served privately"
    ],
    popular: false,
    type: "couple"
  },
  {
    id: "pkg-6",
    title: "Seasonal Solstice Reset",
    price: 245,
    duration: "Solstice Special (150 mins)",
    description: "A tailored seasonal detox and system reboot.",
    benefits: [
      "Pneumatic Lymphatic Compression (30 mins)",
      "Full-body Abhyanga warm herbal oil massage (60 mins)",
      "Hyperbaric Oxygen rejuvenation session (60 mins)",
      "Adaptogenic herbal tea & take-home solstice kit"
    ],
    popular: false,
    type: "seasonal"
  }
];

export const BLOGS = [
  {
    id: "blog-1",
    title: "The Neuro-biology of Cold Shock Contrast Therapy",
    summary: "How submerging in cold plunge protocols releases norepinephrine and resets neural inflammatory pathways.",
    content: `In recent sports science and somatic cardiology, deliberate cold exposure has emerged as a cornerstone for systemic physiological optimization. Submerging into water maintained at temperatures between 2°C to 5°C triggers an immediate, profound anti-inflammatory cascade. 

Upon contact, cold receptors in the skin stimulate the sympathetic nervous system, inducing a sharp spike in norepinephrine—up to 530% above baseline. This neurotransmitter acts both as an anti-inflammatory chemical and a neural stimulator, immediately clearing brain fog, boosting cognitive clarity, and triggering fat-burning pathways.

In this guide, we break down how to properly structure your cold contrast intervals:
1. **The Pre-Plunge Breathing**: Aligning your lungs with deliberate pranayama or box breathing to activate the parasympathetic tone.
2. **The Immersion**: Keeping a steady, slow exhale as you enter. Aiming for 2 to 3 minutes of quiet stillness.
3. **The Rewarm**: Relying on natural thermogenesis rather than immediate hot showers. Let your core temperature raise itself naturally for optimum mitochondrial benefit.`,
    author: "Dr. Marcus Sterling",
    date: "June 18, 2026",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    id: "blog-2",
    title: "Ayurvedic Marma Therapy: Mapping Cellular Energy Channels",
    summary: "Discover the 107 vital intersections of bone, tendon, and joint vital points that release stored chronic tension.",
    content: `Ayurveda, the sister science of Yoga, outlines 107 Marma points—anatomical intersections of muscle, blood vessels, ligaments, and bones. When stress is stored physically, it accumulates at these major energetic junctions, creating local soreness, fatigue, and nervous disruption.

Our signature Abhyanga and Marma point massage therapies utilize warm, herbal-infused sesame and mustard oils customized to your personal Dosha constitution. By utilizing precise circular motions and delicate compression, our practitioners relieve stagnant energies. 

The immediate result is a lighter, more integrated skeletal alignment and a profound release of structural holding patterns in the mind.`,
    author: "Aarya Varma",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    readTime: "7 min read"
  }
];

export const FAQS = [
  {
    question: "What is a Somatic Contrast Suite?",
    answer: "Our Somatic Contrast Suite is a premium therapy space designed around hot and cold integration. It couples deep thermal exposure (via full-spectrum infrared saunas) with deep cryo-immersion (via ice baths or cold plunge tubs). This rapid contrast forces vasodilation and vasoconstriction, flushing tissues and building nervous system stamina."
  },
  {
    question: "Do I need a prior medical clearance for Hyperbaric Oxygen or IV drips?",
    answer: "No, we have licensed sports science and wellness practitioners on-staff. Before your initial hyperbaric oxygen session or IV Vitamin drip, a practitioner will carry out a quick medical intake form and assess your vitals to customize your peptide, vitamin, or pressure ratios."
  },
  {
    id: "faq-3",
    question: "Is there a cancellation or rescheduling policy?",
    answer: "Yes. To preserve the boutique and private nature of our thermal rooms, we require a minimum of 24 hours notice for all cancellations or rescheduling. Cancellations within 24 hours are subject to a fee equal to 50% of the scheduled service cost."
  },
  {
    question: "How does the WhatsApp Booking Integration work?",
    answer: "We offer an elegant, streamlined booking experience. Once you select a therapy, therapist, and time slot, you can submit the form to pre-fill a detailed reservation text. Clicking submit opens a secure WhatsApp thread directly with our concierge desk to instantly confirm your spot."
  }
];

export const TESTIMONIALS = [
  {
    id: "rev-1",
    name: "Vikram Malhotra",
    review: "The Guided Ice Bath changed my recovery routine entirely. Aarya's guidance during the pranayama breathwork kept me completely centered. The Charni Road sanctuary is absolutely breathtaking.",
    rating: 5,
    date: "June 20, 2026",
    isGoogleReview: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-2",
    name: "Ananya Mehta",
    review: "As a professional athlete, metabolic health and recovery are non-negotiable. Dr. Sterling's VO2 profiling and subsequent hyperbaric protocols have noticeably improved my systemic stamina. Highly recommend the memberships!",
    rating: 5,
    date: "May 29, 2026",
    isGoogleReview: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-3",
    name: "Rohan & Sneha Joshi",
    review: "We booked the Couple's Somatic Re-alignment for our anniversary. The private plunge room, followed by the Ayurvedic Abhyanga massage with warm oils, left us in a state of absolute bliss.",
    rating: 5,
    date: "April 11, 2026",
    isGoogleReview: false,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150"
  },
  {
  id: "rev-4",
  name: "Ananya Kapoor",
  review: "Beautiful interiors, welcoming staff, and a truly relaxing atmosphere. The aromatherapy session was exactly what I needed after a hectic week.",
  rating: 5,
  date: "June 12, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
},

{
  id: "rev-5",
  name: "Karan Verma",
  review: "The sauna and ice bath combination was amazing. I felt completely rejuvenated afterward. Highly recommend trying the recovery package.",
  rating: 5,
  date: "June 10, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80&w=150"
},

{
  id: "rev-6",
  name: "Neha Joshi",
  review: "From the moment I entered, everything felt luxurious and peaceful. The staff made me feel comfortable, and the treatment exceeded expectations.",
  rating: 5,
  date: "June 8, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
},

{
  id: "rev-7",
  name: "Arjun Desai",
  review: "I've made this part of my weekly routine. The wellness sessions have significantly improved my focus, recovery, and overall well-being.",
  rating: 5,
  date: "June 5, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
},

{
  id: "rev-8",
  name: "Sneha Patel",
  review: "The sound healing session was unlike anything I've experienced before. I left feeling deeply relaxed and mentally refreshed.",
  rating: 5,
  date: "June 2, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=150"
},

{
  id: "rev-9",
  name: "Rohan Khanna",
  review: "Outstanding service and a premium experience from start to finish. The facilities are immaculate, and the therapists are highly skilled.",
  rating: 5,
  date: "May 30, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
},

{
  id: "rev-10",
  name: "Meera Nair",
  review: "A perfect escape from the city's chaos. Every detail, from the ambiance to the treatments, felt thoughtfully curated.",
  rating: 5,
  date: "May 28, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=8 Marcus Sterling0&w=150"
},

{
  id: "rev-11",
  name: "Aditya Shah",
  review: "Excellent service and professional therapists. The recovery therapies helped relieve weeks of muscle tension in just one session.",
  rating: 5,
  date: "May 25, 2026",
  isGoogleReview: true,
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
}
];

export const POLICIES = {
  cancellation: "We require at least 24 hours of advance notice for any cancellations or reschedules. Within 24 hours, a 50% reservation charge applies to protect the slot of our somatic practitioners.",
  refund: "Memberships are billed monthly and can be cancelled at any time with 7 days notice. Gift certificates, packages, and individual diagnostic deposits are non-refundable but fully transferable to other services or friends.",
  privacy: "We value your cellular and computational privacy. Your biometric scan reports, physical intake cards, and cardiac records are stored under military-grade, fully compliant cloud databases. Your personal data is never shared with third parties.",
  terms: "By booking or entering NAMASTEY Wellness SPA facilities, you agree to respect our communal quiet guidelines. Electronic devices must be kept on silent, and active somatic plunges must be used with appropriate athletic wear."
};

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
