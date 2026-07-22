import { SpaCategory } from "@/src/common/types";

import type {
  BusinessDetails,
  Specialist,
  PricingPackage,
  BlogPost,
  Faq,
  Testimonial,
  Policies,
} from "@/src/common/types";

export { SERVICES, SERVICE_CHAPTERS } from "./services";

export const BUSINESS_DETAILS: BusinessDetails = {
  name: "NAMASTEY Wellness SPA",
  // tagline: "SELF-CARE MADE SOCIAL",
  about: "Elevating cellular recovery, sensory re-alignment, and communal heat/cold somatic practice in a premium high-end light frosted space.",
  yearEstablished: 2024,
  phone: "7888803331 / 7888803332",
  whatsapp: "917888803331",
  email: "namasteysalon@gmail.com",
  address:
    "64/65, Ground Floor, Patel Heritage, Sector-07, Kharghar, Navi Mumbai",
  mapsLink: "https://maps.app.goo.gl/ytL61x5pZKJD1jsL8?g_st=com.google.maps.preview.copy",
  instagram: "https://www.instagram.com/namasteywellnessspa/",
  facebook: "https://facebook.com/namastey.wellness",
};

export const SPECIALISTS: Specialist[] = [
  {
  id: "spec-1",
  name: "Arman",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.CLASSIC_BODY,
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
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "AROMATHERAPY & HOT STONE THERAPY",
  degrees: [
    "Certified Aromatherapy Practitioner",
    "Spa Therapy Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Expert in aromatherapy and hot stone massage, creating deeply relaxing and rejuvenating wellness experiences."
},
{
  id: "spec-3",
  name: "Eva",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.8,
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "BALINESE & THAI MASSAGE",
  degrees: [
    "Certified Thai Massage Therapist",
    "Balinese Massage Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Combines traditional Thai stretching techniques with Balinese massage for complete body relaxation."
},
{
  id: "spec-4",
  name: "Victoria",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 5.0,
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "LYMPHATIC DRAINAGE & RELAXATION",
  degrees: [
    "Certified Lymphatic Massage Therapist",
    "Professional Spa Therapy Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Experienced in lymphatic drainage, relaxation therapies, and customized wellness treatments."
},
{
  id: "spec-5",
  name: "Amy",
  image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.CLASSIC_BODY,
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
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "SIGNATURE SPA & BODY THERAPIES",
  degrees: [
    "Certified Spa Therapist",
    "Body Treatment Specialist"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Specializes in luxury body treatments, exfoliation therapies, and full-body wellness rituals."
},
{
  id: "spec-7",
  name: "Juju",
  image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "HERBAL COMPRESS & THAI THERAPY",
  degrees: [
    "Certified Thai Spa Therapist",
    "Herbal Therapy Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Uses herbal compress treatments and traditional Thai massage techniques to restore energy and flexibility."
},
{
  id: "spec-8",
  name: "Crystal",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 5.0,
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "SWEDISH & AROMA MASSAGE",
  degrees: [
    "Certified Swedish Massage Therapist",
    "Advanced Aromatherapy Practitioner"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Known for personalized Swedish and aroma massage sessions that enhance relaxation and reduce muscle tension."
},
{
  id: "spec-9",
  name: "Hazel",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=600",
  rating: 4.9,
  category: SpaCategory.CLASSIC_BODY,
  specialtyTag: "HOLISTIC WELLNESS & SPA THERAPY",
  degrees: [
    "Certified Holistic Wellness Therapist",
    "Professional Spa Management Certification"
  ],
  experience: "5+ Years of Professional Experience",
  bio: "Dedicated to holistic wellness through customized massage therapies that promote relaxation, recovery, and overall well-being."
}
];

/*
  PRICING_PACKAGES — replaced entirely with the client-provided membership /
  package / couple price lists. Prices are in ₹ (INR), stored as plain
  numbers. MembershipsSection.jsx's "$" needs to be swapped for "₹" and its
  filter pills updated to the new `type` values used below:
    membership          -> Membership Plans
    package             -> Pay X Get Y packages
    couple-spa           -> Couple Spa
    couple-celebration   -> Couple Celebration

  Two "Classic Massage" entries appear with the same name under both
  Couple Spa and Couple Celebration (client confirmed this is intentional,
  not a typo) — kept as-is with matching `id`s for disambiguation.

  "Pay 1L Get 180L" from the source list was confirmed to be a typo for
  "Pay 1L Get 1.8L" — corrected here.
*/
export const PRICING_PACKAGES: PricingPackage[] = [
  // ─── Membership Plans ───
  {
    id: "pkg-membership-1",
    title: "Classic Membership",
    price: 1200,
    duration: "Membership",
    description: "An accessible entry point into our spa community and recovery routines.",
    benefits: [
      "Access to standard spa facilities",
      "Member pricing on select services",
      "Great starting point for regular visitors"
    ],
    popular: false,
    type: "membership"
  },
  {
    id: "pkg-membership-2",
    title: "Silver Membership",
    price: 8000,
    duration: "Membership",
    description: "A step up in value, designed for guests who visit regularly.",
    benefits: [
      "Enhanced member pricing across services",
      "Priority booking support",
      "Ideal for frequent recovery sessions"
    ],
    popular: false,
    type: "membership"
  },
  {
    id: "pkg-membership-3",
    title: "Silver+ Membership",
    price: 15000,
    duration: "Membership",
    description: "Extended Silver benefits with additional value for committed members.",
    benefits: [
      "Greater member pricing benefits than Silver",
      "Priority booking support",
      "Best suited for consistent monthly visitors"
    ],
    popular: true,
    type: "membership"
  },
  {
    id: "pkg-membership-4",
    title: "Gold Membership",
    price: 50000,
    duration: "Membership",
    description: "Our top-tier membership for guests who want the fullest spa experience.",
    benefits: [
      "Maximum member pricing benefits",
      "Highest priority booking support",
      "Designed for our most dedicated members"
    ],
    popular: false,
    type: "membership"
  },

  // ─── Packages (Pay X, Get Y value) ───
  {
    id: "pkg-package-1",
    title: "Pay ₹20,000 Get ₹28,000",
    price: 20000,
    duration: "Prepaid Package",
    description: "Prepay and unlock extra spa credit to use across any of our services.",
    benefits: [
      "₹28,000 worth of services for ₹20,000",
      "Use credit across any treatment",
      "No expiry pressure — use at your own pace"
    ],
    popular: false,
    type: "package"
  },
  {
    id: "pkg-package-2",
    title: "Pay ₹40,000 Get ₹60,000",
    price: 40000,
    duration: "Prepaid Package",
    description: "A bigger prepaid package with greater bonus value.",
    benefits: [
      "₹60,000 worth of services for ₹40,000",
      "Use credit across any treatment",
      "Great for regular spa-goers"
    ],
    popular: false,
    type: "package"
  },
  {
    id: "pkg-package-3",
    title: "Pay ₹60,000 Get ₹96,000",
    price: 60000,
    duration: "Prepaid Package",
    description: "More prepaid value for guests planning multiple sessions ahead.",
    benefits: [
      "₹96,000 worth of services for ₹60,000",
      "Use credit across any treatment",
      "Stronger bonus value than smaller packages"
    ],
    popular: true,
    type: "package"
  },
  {
    id: "pkg-package-4",
    title: "Pay ₹80,000 Get ₹1,36,000",
    price: 80000,
    duration: "Prepaid Package",
    description: "Significant bonus value for guests planning long-term recovery routines.",
    benefits: [
      "₹1,36,000 worth of services for ₹80,000",
      "Use credit across any treatment",
      "Best value tier below our top package"
    ],
    popular: false,
    type: "package"
  },
  {
    id: "pkg-package-5",
    title: "Pay ₹1,00,000 Get ₹1,80,000",
    price: 100000,
    duration: "Prepaid Package",
    description: "Our premium prepaid package offering nearly double the value.",
    benefits: [
      "₹1,80,000 worth of services for ₹1,00,000",
      "Use credit across any treatment",
      "Designed for long-term, high-frequency guests"
    ],
    popular: false,
    type: "package"
  },
  {
    id: "pkg-package-6",
    title: "Pay ₹2,00,000 Get ₹4,00,000",
    price: 200000,
    duration: "Prepaid Package",
    description: "Our top-tier prepaid package, doubling your spa credit value.",
    benefits: [
      "₹4,00,000 worth of services for ₹2,00,000",
      "Use credit across any treatment",
      "Maximum value for our most committed guests"
    ],
    popular: false,
    type: "package"
  },

  // ─── Couple Spa ───
  {
    id: "pkg-couple-spa-1",
    title: "Classic Massage",
    price: 10000,
    duration: "Couple Spa Package",
    description: "A relaxing classic massage experience shared together.",
    benefits: [
      "Side-by-side classic massage for two",
      "Shared, relaxed spa environment",
      "Great introductory couple package"
    ],
    popular: false,
    type: "couple-spa"
  },
  {
    id: "pkg-couple-spa-2",
    title: "Classic Massage",
    price: 13000,
    duration: "Couple Spa Package",
    description: "An extended classic massage package for couples.",
    benefits: [
      "Side-by-side classic massage for two",
      "Extended shared spa experience",
      "More value than our entry couple package"
    ],
    popular: false,
    type: "couple-spa"
  },
  {
    id: "pkg-couple-spa-3",
    title: "Exclusive Massage",
    price: 16000,
    duration: "Couple Spa Package",
    description: "Our most premium couple spa package, featuring an exclusive massage experience.",
    benefits: [
      "Premium exclusive massage for two",
      "Top-tier shared spa experience",
      "Best couple spa value available"
    ],
    popular: true,
    type: "couple-spa"
  },

  // ─── Couple Celebration ───
  {
    id: "pkg-couple-celebration-1",
    title: "Classic Massage",
    price: 16000,
    duration: "Couple Celebration Package",
    description: "Celebrate together with a classic massage experience designed for special occasions.",
    benefits: [
      "Side-by-side classic massage for two",
      "Celebratory shared spa setting",
      "Great for anniversaries and milestones"
    ],
    popular: false,
    type: "couple-celebration"
  },
  {
    id: "pkg-couple-celebration-2",
    title: "Classic Massage",
    price: 19000,
    duration: "Couple Celebration Package",
    description: "An extended celebration package with a classic massage experience for two.",
    benefits: [
      "Side-by-side classic massage for two",
      "Extended celebratory experience",
      "More value than our entry celebration package"
    ],
    popular: false,
    type: "couple-celebration"
  },
  {
    id: "pkg-couple-celebration-3",
    title: "Exclusive Massage",
    price: 22000,
    duration: "Couple Celebration Package",
    description: "Our most premium celebration package, featuring an exclusive massage experience for two.",
    benefits: [
      "Premium exclusive massage for two",
      "Top-tier celebratory shared experience",
      "Best couple celebration value available"
    ],
    popular: true,
    type: "couple-celebration"
  }
];

export const BLOGS: BlogPost[] = [
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
    image: "/images/services/ice-bath/1.jpg",
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
    image: "/images/services/shirodhara/2.jpg",
    readTime: "7 min read"
  }
];

export const FAQS: Faq[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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

export const POLICIES: Policies = {
  cancellation: "We require at least 24 hours of advance notice for any cancellations or reschedules. Within 24 hours, a 50% reservation charge applies to protect the slot of our somatic practitioners.",
  refund: "Memberships are billed monthly and can be cancelled at any time with 7 days notice. Gift certificates, packages, and individual diagnostic deposits are non-refundable but fully transferable to other services or friends.",
  privacy: "We value your cellular and computational privacy. Your biometric scan reports, physical intake cards, and cardiac records are stored under military-grade, fully compliant cloud databases. Your personal data is never shared with third parties.",
  terms: "By booking or entering NAMASTEY Wellness SPA facilities, you agree to respect our communal quiet guidelines. Electronic devices must be kept on silent, and active somatic plunges must be used with appropriate athletic wear."
};

export const TIME_SLOTS: string[] = [
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
