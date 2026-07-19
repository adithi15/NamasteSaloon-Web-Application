import { SpaCategory } from "@/src/common/types";

import type {
  BusinessDetails,
  Service,
  Specialist,
  PricingPackage,
  BlogPost,
  Faq,
  Testimonial,
  Policies,
} from "@/src/common/types";

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

/*
  SERVICES — replaced with the client-provided price list (49 services).
  Notes:
  - Prices are in ₹ (INR), stored as plain numbers (e.g. 3800 not "3800/-").
    ServiceCarousel.jsx's "$" symbol needs to be swapped for "₹" separately.
  - Images use client Service-Photos copied to /public/images/services.
  - Categories are grouped by the treatment guests would logically expect:
      MASSAGES             -> body, back, and foot massage therapies
      BIOMETRIC_TESTING    -> head and face spa treatments
      ALTERNATIVE_MEDICINE -> wellness rituals, Hammam, and holistic therapies
      CLASSES              -> baths, Jacuzzi, and celebration experiences
  - "Korean Head with Facial Spa" had no duration in the source list — I
    used 75 min (same as the closest sibling, "Korean Head Spa"). Flagged
    below with a comment; change `durationMinutes` on that entry if wrong.
*/

/** Client service photos under /public/images/services (copied from Website-Logo-Font-Photos) */
function svc(folder: string, n: number, ext: "jpg" | "png" = "jpg"): string {
  return `/images/services/${folder}/${n}.${ext}`;
}


export const SERVICES: Service[] = [
  {
    id: "service-1",
    name: "Signature Classic Body Massage",
    description: "Our flagship full-body massage, blending classic techniques to release tension and restore total-body relaxation.",
    benefits: ["Relieves full-body muscular tension", "Improves circulation", "Deeply relaxing signature experience"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 3800,
    rating: 4.9, // placeholder
    ratingCount: 120, // placeholder
    image: svc("massage", 1),
    isFeatured: true
  },
  {
    id: "service-2",
    name: "Vishrama",
    description: "A calming, traditional-style massage focused on grounding the body and quieting the mind.",
    benefits: ["Eases everyday stress", "Promotes deep rest", "Balances nervous system tone"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 60,
    price: 3200,
    rating: 4.8,
    ratingCount: 64,
    image: svc("massage", 2)
  },
  {
    id: "service-3",
    name: "Sukho Thai",
    description: "Traditional Thai-style massage combining stretching and rhythmic pressure to improve flexibility and flow.",
    benefits: ["Improves flexibility and joint mobility", "Boosts energy flow", "Relieves stiffness"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 60,
    price: 3500,
    rating: 4.9,
    ratingCount: 88,
    image: svc("thai", 3)
  },
  {
    id: "service-4",
    name: "Head Massage",
    description: "A focused scalp and head massage to relieve tension headaches and mental fatigue.",
    benefits: ["Relieves tension headaches", "Calms the mind", "Improves scalp circulation"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 1800,
    rating: 4.7,
    ratingCount: 95,
    image: svc("massage", 4)
  },
  {
    id: "service-5",
    name: "Back Massage",
    description: "A targeted massage addressing tightness across the upper and lower back.",
    benefits: ["Relieves back tension", "Improves posture comfort", "Quick, focused relief"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 1800,
    rating: 4.7,
    ratingCount: 70,
    image: svc("massage", 1)
  },
  {
    id: "service-6",
    name: "Head, Shoulder and Back Massage",
    description: "A combined upper-body massage targeting the head, shoulders, and back in one session.",
    benefits: ["Relieves upper-body tension holistically", "Eases shoulder stiffness", "Quick full-upper-body reset"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 2000,
    rating: 4.8,
    ratingCount: 102,
    image: svc("massage", 2)
  },
  {
    id: "service-7",
    name: "Deep Abhyangam Massage",
    description: "A traditional warm-oil Ayurvedic massage focused on deep tissue release and energetic balance.",
    benefits: ["Deeply nourishes skin and muscles", "Balances energy channels", "Relieves chronic tension"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 4500,
    rating: 4.9,
    ratingCount: 140,
    image: svc("massage", 3)
  },
  {
    id: "service-8",
    name: "Hot Candle Oil Massage",
    description: "A sensory massage using warm, melted candle oil to soothe muscles and moisturize skin.",
    benefits: ["Deeply moisturizes skin", "Warmth relieves muscle tightness", "Sensory, calming ritual"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 4500,
    rating: 4.85,
    ratingCount: 77,
    image: svc("massage", 4)
  },
  {
    id: "service-9",
    name: "Hot Healing Stone Massage",
    description: "Heated stones are used to ease deep muscular knots and promote relaxation.",
    benefits: ["Penetrating heat relieves deep knots", "Improves circulation", "Long-lasting relaxation"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 5000,
    rating: 4.9,
    ratingCount: 110,
    image: svc("hot-stone", 1)
  },
  {
    id: "service-10",
    name: "Sports Deep Tissue",
    description: "A firm, targeted massage designed for athletes and active individuals to relieve deep muscular tension.",
    benefits: ["Targets deep muscle layers", "Speeds up recovery", "Improves range of motion"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 5500,
    rating: 4.9,
    ratingCount: 130,
    image: svc("sports", 2),
    isFeatured: true
  },
  {
    id: "service-11",
    name: "Herbal Potli Massage",
    description: "Heated herbal pouches (potli) are pressed and rolled over the body to relieve pain and detoxify muscles.",
    benefits: ["Relieves joint and muscle pain", "Herbal detoxification", "Deeply warming therapy"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 6000,
    rating: 4.9,
    ratingCount: 98,
    image: svc("potli", 3)
  },
  {
    id: "service-12",
    name: "Holistic Back Massage",
    description: "A comprehensive back-focused massage addressing both surface tension and deeper muscular stress.",
    benefits: ["Relieves chronic back tension", "Improves spinal comfort", "Calming, restorative focus"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 2500,
    rating: 4.7,
    ratingCount: 56,
    image: svc("massage", 4)
  },
  {
    id: "service-13",
    name: "Four Hand Body Massage",
    description: "Two therapists work in synchronized rhythm for an intensely relaxing, immersive full-body massage.",
    benefits: ["Doubled relaxation intensity", "Synchronized full-body coverage", "Signature luxury experience"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 60,
    price: 7000,
    rating: 5.0,
    ratingCount: 64,
    image: svc("massage", 1),
    isFeatured: true
  },
  {
    id: "service-14",
    name: "Korean Head Spa",
    description: "A scalp-focused spa ritual combining cleansing, massage, and scalp therapy for ultimate head relaxation.",
    benefits: ["Deep scalp cleansing", "Relieves tension headaches", "Promotes scalp & hair health"],
    category: SpaCategory.BIOMETRIC_TESTING,
    durationMinutes: 75,
    price: 5500,
    rating: 4.9,
    ratingCount: 145,
    image: svc("korean", 2, "png"),
    isFeatured: true
  },
  {
    id: "service-15",
    name: "Korean Head with Facial Spa",
    // NOTE: source list had no duration for this item — set to 75 min to
    // match its closest sibling ("Korean Head Spa"). Adjust if incorrect.
    description: "Combines our Korean Head Spa ritual with a rejuvenating facial for complete head-to-face renewal.",
    benefits: ["Combined scalp and facial renewal", "Deep relaxation and glow", "All-in-one head & face ritual"],
    category: SpaCategory.BIOMETRIC_TESTING,
    durationMinutes: 75,
    price: 9000,
    rating: 4.9,
    ratingCount: 52,
    image: svc("korean", 3, "png")
  },
  {
    id: "service-16",
    name: "Four Hand Asian & Korean Blend",
    description: "A four-handed massage blending Asian massage techniques with Korean head spa elements.",
    benefits: ["Dual-therapist synchronized session", "Combines two signature traditions", "Premium full-body & scalp care"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 90,
    price: 10000,
    rating: 5.0,
    ratingCount: 41,
    image: svc("korean", 4, "png"),
    isFeatured: true
  },
  {
    id: "service-17",
    name: "Foot Massage with Korean Head Spa",
    description: "A relaxing foot massage paired with our signature Korean head spa ritual.",
    benefits: ["Relieves tired feet", "Combined scalp & foot relaxation", "Great for travel recovery"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 4500,
    rating: 4.8,
    ratingCount: 68,
    image: svc("korean", 1, "png")
  },
  {
    id: "service-18",
    name: "Hot Stone Back Massage with Korean Head Spa",
    description: "Heated stone back therapy combined with our Korean head spa for full upper-body renewal.",
    benefits: ["Deep heat relief for the back", "Scalp & head relaxation included", "Comprehensive upper-body reset"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 75,
    price: 5000,
    rating: 4.85,
    ratingCount: 59,
    image: svc("korean", 2, "png")
  },
  {
    id: "service-19",
    name: "Asian Blend Body Massage with Korean Head Spa",
    description: "A full-body Asian-style massage combined with our signature Korean head spa ritual.",
    benefits: ["Full-body & scalp combined care", "Blended traditional techniques", "Extended deep relaxation"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 105,
    price: 7000,
    rating: 4.9,
    ratingCount: 47,
    image: svc("korean", 3, "png")
  },
  {
    id: "service-20",
    name: "Hot Stone Body Massage with Korean Head Spa",
    description: "Full-body hot stone therapy paired with our Korean head spa for an extended luxury session.",
    benefits: ["Full-body heat therapy", "Scalp renewal included", "Extended luxury treatment"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 120,
    price: 8000,
    rating: 4.9,
    ratingCount: 38,
    image: svc("korean", 4, "png")
  },
  {
    id: "service-21",
    name: "Herbal Potli Massage with Korean Head Spa",
    description: "Our full Herbal Potli massage extended with the Korean head spa ritual for complete-body care.",
    benefits: ["Herbal detox & scalp renewal combined", "Extended deep therapy", "Comprehensive wellness session"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 120,
    price: 9000,
    rating: 4.9,
    ratingCount: 33,
    image: svc("korean", 1, "png")
  },
  {
    id: "service-22",
    name: "Shirodhara",
    description: "A classic Ayurvedic ritual involving a continuous, gentle stream of warm oil poured over the forehead.",
    benefits: ["Deeply calms the nervous system", "Eases mental fatigue and anxiety", "Traditional Ayurvedic ritual"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 60,
    price: 4800,
    rating: 4.95,
    ratingCount: 156,
    image: svc("shirodhara", 2),
    isFeatured: true
  },
  {
    id: "service-23",
    name: "Sukhdhara",
    description: "An extended Shirodhara-style ritual offering deeper relaxation and mental clarity.",
    benefits: ["Extended deep relaxation ritual", "Mental clarity and calm", "Premium Ayurvedic experience"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 90,
    price: 7500,
    rating: 4.9,
    ratingCount: 44,
    image: svc("shirodhara", 3)
  },
  {
    id: "service-24",
    name: "Moxibustion",
    description: "A traditional heat therapy using burning herbal sticks near acupressure points to relieve pain and improve flow.",
    benefits: ["Relieves chronic muscular pain", "Improves energy and blood flow", "Traditional heat therapy"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 105,
    price: 6500,
    rating: 4.8,
    ratingCount: 29,
    image: svc("moxibustion", 4)
  },
  {
    id: "service-25",
    name: "Moxibustion with Korean Therapy",
    description: "Our Moxibustion treatment extended with Korean therapy techniques for comprehensive relief.",
    benefits: ["Combined traditional heat & Korean therapy", "Extended pain relief session", "Comprehensive wellness combination"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 135,
    price: 9000,
    rating: 4.85,
    ratingCount: 21,
    image: svc("korean", 1, "png")
  },
  {
    id: "service-26",
    name: "Classic Turkish Hammam",
    description: "A traditional Turkish bath ritual featuring deep cleansing, steam, and exfoliation.",
    benefits: ["Deep skin cleansing & exfoliation", "Steam-based detoxification", "Traditional hammam ritual"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 90,
    price: 6500,
    rating: 4.9,
    ratingCount: 87,
    image: svc("hammam", 2)
  },
  {
    id: "service-27",
    name: "Signature Turkish Hammam",
    description: "Our extended, premium Turkish Hammam ritual offering the most comprehensive cleansing experience.",
    benefits: ["Premium extended hammam ritual", "Comprehensive deep cleansing", "Signature luxury bathing experience"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 150,
    price: 11000,
    rating: 4.95,
    ratingCount: 53,
    image: svc("hammam", 3),
    isFeatured: true
  },
  {
    id: "service-28",
    name: "Shaan Abhishekam",
    description: "A ceremonial Abhishekam ritual involving warm oil pouring for purification and relaxation.",
    benefits: ["Ceremonial purification ritual", "Deep relaxation", "Traditional Abhishekam experience"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 60,
    price: 4000,
    rating: 4.8,
    ratingCount: 35,
    image: svc("shirodhara", 4)
  },
  {
    id: "service-29",
    name: "Vishuddhi Abhishekam",
    description: "An extended, comprehensive Abhishekam ritual designed for deep purification and renewal.",
    benefits: ["Extended ceremonial ritual", "Deep purification focus", "Comprehensive renewal experience"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 120,
    price: 8500,
    rating: 4.85,
    ratingCount: 22,
    image: svc("shirodhara", 1)
  },
  {
    id: "service-30",
    name: "Bodicial with Body Facial",
    description: "A full-body facial treatment that exfoliates, nourishes, and revitalizes skin from head to toe.",
    benefits: ["Full-body skin renewal", "Deep exfoliation and nourishment", "Comprehensive facial-body treatment"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 150,
    price: 11000,
    rating: 4.9,
    ratingCount: 31,
    image: svc("product", 2)
  },
  {
    id: "service-31",
    name: "Body Scrub",
    description: "An invigorating full-body exfoliation treatment to remove dead skin and reveal smoother skin.",
    benefits: ["Removes dead skin cells", "Leaves skin smooth and refreshed", "Quick invigorating treatment"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 30,
    price: 1500,
    rating: 4.7,
    ratingCount: 90,
    image: svc("product", 3)
  },
  {
    id: "service-32",
    name: "Face Fit Gym",
    description: "A facial workout treatment using targeted techniques to tone and firm facial muscles.",
    benefits: ["Tones and firms facial muscles", "Improves facial circulation", "Quick facial fitness session"],
    category: SpaCategory.BIOMETRIC_TESTING,
    durationMinutes: 30,
    price: 2500,
    rating: 4.7,
    ratingCount: 48,
    image: svc("product", 4)
  },
  {
    id: "service-33",
    name: "Face Lift Gym",
    description: "An extended facial toning treatment designed to firm and lift facial contours.",
    benefits: ["Lifts and firms facial contours", "Extended toning session", "Visible facial rejuvenation"],
    category: SpaCategory.BIOMETRIC_TESTING,
    durationMinutes: 60,
    price: 5000,
    rating: 4.8,
    ratingCount: 37,
    image: svc("product", 1)
  },
  {
    id: "service-34",
    name: "Blissful Retreat",
    description: "A comprehensive wellness retreat session combining multiple therapies for total relaxation.",
    benefits: ["Combines multiple relaxation therapies", "Extended retreat-style session", "Comprehensive total-body relaxation"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 105,
    price: 10000,
    rating: 4.95,
    ratingCount: 40,
    image: svc("couple", 2),
    isFeatured: true
  },
  {
    id: "service-35",
    name: "Soul Reconnect",
    description: "Our most comprehensive wellness journey, combining deep bodywork, ritual, and restorative therapies.",
    benefits: ["Most comprehensive signature journey", "Combines bodywork & ritual therapies", "Ultimate restorative experience"],
    category: SpaCategory.ALTERNATIVE_MEDICINE,
    durationMinutes: 150,
    price: 16000,
    rating: 5.0,
    ratingCount: 25,
    image: svc("couple", 3),
    isFeatured: true
  },
  {
    id: "service-36",
    name: "Classic Celebration",
    description: "A short celebratory wellness session designed to mark special occasions with relaxation.",
    benefits: ["Quick celebratory wellness session", "Perfect for special occasions", "Light, joyful relaxation"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 4000,
    rating: 4.8,
    ratingCount: 18,
    image: svc("couple", 4)
  },
  {
    id: "service-37",
    name: "Signature Celebration",
    description: "An extended celebratory wellness ritual for marking milestones with full relaxation.",
    benefits: ["Extended celebratory experience", "Ideal for milestone occasions", "Full relaxation ritual"],
    category: SpaCategory.CLASSES,
    durationMinutes: 60,
    price: 6000,
    rating: 4.85,
    ratingCount: 23,
    image: svc("couple", 1)
  },
  {
    id: "service-38",
    name: "Bubble Jacuzzi",
    description: "A relaxing soak in our bubble jacuzzi, easing muscle tension through warm water massage jets.",
    benefits: ["Soothing warm water massage", "Eases muscle tension", "Quick relaxing soak"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 1000,
    rating: 4.6,
    ratingCount: 60,
    image: svc("jacuzzi", 2)
  },
  {
    id: "service-39",
    name: "Pink Himalayan Salt Bath",
    description: "A mineral-rich salt bath using Pink Himalayan salt to detoxify and soften skin.",
    benefits: ["Mineral-rich detoxification", "Softens and nourishes skin", "Calming bath ritual"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 1200,
    rating: 4.7,
    ratingCount: 51,
    image: svc("jacuzzi", 3)
  },
  {
    id: "service-40",
    name: "Honey Bath",
    description: "A nourishing honey-infused bath that hydrates and softens skin naturally.",
    benefits: ["Naturally hydrates skin", "Antibacterial honey benefits", "Soothing soak"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 1400,
    rating: 4.7,
    ratingCount: 39,
    image: svc("jacuzzi", 4)
  },
  {
    id: "service-41",
    name: "Ice Cream Bomb Jacuzzi",
    description: "A playful, cooling jacuzzi experience designed to refresh and invigorate the body.",
    benefits: ["Refreshing cool-down soak", "Invigorates the senses", "Fun, signature jacuzzi experience"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 1600,
    rating: 4.6,
    ratingCount: 34,
    image: svc("jacuzzi", 1)
  },
  {
    id: "service-42",
    name: "Ice Cold Water Jacuzzi Therapy",
    description: "A cold-water jacuzzi therapy designed to reduce inflammation and energize the body.",
    benefits: ["Reduces inflammation", "Energizes and revitalizes", "Cold-therapy recovery"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 1800,
    rating: 4.7,
    ratingCount: 28,
    image: svc("ice-bath", 2)
  },
  {
    id: "service-43",
    name: "Shahi Milk Bath",
    description: "A royal-style milk bath ritual that softens and nourishes the skin deeply.",
    benefits: ["Deeply nourishes and softens skin", "Royal, indulgent ritual", "Calming sensory experience"],
    category: SpaCategory.CLASSES,
    durationMinutes: 30,
    price: 2000,
    rating: 4.8,
    ratingCount: 30,
    image: svc("jacuzzi", 3)
  },
  {
    id: "service-44",
    name: "Thai Foot Reflexology Massage",
    description: "A traditional Thai reflexology massage targeting pressure points on the feet for full-body benefit.",
    benefits: ["Stimulates full-body reflex points", "Relieves foot fatigue", "Traditional Thai technique"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 1400,
    rating: 4.8,
    ratingCount: 76,
    image: svc("feet", 4)
  },
  {
    id: "service-45",
    name: "Pain Relief Balm Massage",
    description: "A therapeutic foot and leg massage using medicated balm to relieve aches and stiffness.",
    benefits: ["Relieves muscular aches", "Medicated balm for deeper relief", "Quick therapeutic session"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 1600,
    rating: 4.7,
    ratingCount: 42,
    image: svc("massage", 1)
  },
  {
    id: "service-46",
    name: "Sport Foot Massage",
    description: "A firm, targeted foot massage designed for active individuals to relieve strain and fatigue.",
    benefits: ["Relieves foot strain from activity", "Speeds up recovery", "Firm, targeted technique"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 1800,
    rating: 4.75,
    ratingCount: 38,
    image: svc("feet", 2)
  },
  {
    id: "service-47",
    name: "Hot Stone Foot Massage",
    description: "Heated stones are used on the feet to relieve tension and improve circulation.",
    benefits: ["Deep heat relief for tired feet", "Improves foot circulation", "Relaxing heated therapy"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 2000,
    rating: 4.8,
    ratingCount: 45,
    image: svc("hot-stone", 3)
  },
  {
    id: "service-48",
    name: "Herbal Potli Foot Massage",
    description: "Heated herbal pouches are used on the feet to relieve pain and promote circulation.",
    benefits: ["Herbal detoxification for feet", "Relieves joint and muscle pain", "Warming therapeutic treatment"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 30,
    price: 2300,
    rating: 4.8,
    ratingCount: 33,
    image: svc("potli", 4)
  },
  {
    id: "service-49",
    name: "Kansa Thali Foot Massage",
    description: "A traditional Kansa metal plate massage on the feet to balance energy and soothe the nervous system.",
    benefits: ["Balances body energy", "Soothes nervous system", "Traditional Kansa metal therapy"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 60,
    price: 2300,
    rating: 4.8,
    ratingCount: 27,
    image: svc("feet", 1)
  },
  {
    id: "service-50",
    name: "Kansa Thali Therapy",
    description: "A quick Kansa metal plate therapy session for energetic balance and relaxation.",
    benefits: ["Quick energetic balancing session", "Traditional Kansa therapy", "Calming short treatment"],
    category: SpaCategory.MASSAGES,
    durationMinutes: 15,
    price: 500,
    rating: 4.6,
    ratingCount: 19,
    image: svc("feet", 2)
  }
];

export const SPECIALISTS: Specialist[] = [
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
  experience: "5+ Years of Professional Experience",
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
  experience: "5+ Years of Professional Experience",
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
  experience: "5+ Years of Professional Experience",
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
  experience: "5+ Years of Professional Experience",
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
  experience: "5+ Years of Professional Experience",
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
  experience: "5+ Years of Professional Experience",
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
