import { SpaCategory } from "@/src/common/types";
import type { Service, ServiceChapterMeta } from "@/src/common/types";

/** Client service photos under /public/images/services */
function svc(folder: string, n: number, ext: "jpg" | "png" = "jpg"): string {
  return `/images/services/${folder}/${n}.${ext}`;
}

function tiers(
  ...pairs: Array<[number, number] | [number, number, string]>
): NonNullable<Service["priceTiers"]> {
  return pairs.map(([durationMinutes, price, label]) =>
    label
      ? { durationMinutes, price, label }
      : { durationMinutes, price },
  );
}

export const SERVICE_CHAPTERS: ServiceChapterMeta[] = [
  {
    category: SpaCategory.KOREAN_BLENDS,
    number: "01",
    image: svc("korean", 2, "png"),
    intro:
      "First time in India, Namastey brings you Korean head spa with massage blends — thorough scalp cleansing and nourishing treatments for a serene experience.",
  },
  {
    category: SpaCategory.TURKISH_HAMMAM,
    number: "02",
    image: svc("hammam", 3),
    intro:
      "Steam, scrub, and ceremonial cleansing — from classic hammam to Signature 10-step and Abhishekam rituals.",
  },
  {
    category: SpaCategory.COUPLE_SPA,
    number: "03",
    image: svc("couple", 2),
    intro:
      "Time is of the essence — reconnect with your spouse, partner, or friend in our specially designed royal twin couple room.",
  },
  {
    category: SpaCategory.HOLISTIC_MASSAGE,
    number: "04",
    image: svc("hot-stone", 1),
    intro:
      "Candle oil, hot stone, sports recovery, herbal potli, and four-hand immersions for deeper release.",
  },
  {
    category: SpaCategory.AYURVEDIC_THERAPY,
    number: "05",
    image: svc("shirodhara", 2),
    intro:
      "Shirodhara, Sukhdhara medicated oil, and moxibustion — calm the mind and ease body pain.",
  },
  {
    category: SpaCategory.CLASSIC_BODY,
    number: "06",
    image: svc("massage", 1),
    intro:
      "Signature bodywork — Thai stretch, Vishrama, Classic Signature, Abhyangam, and focused add-ons.",
  },
  {
    category: SpaCategory.FACE_GYM,
    number: "07",
    image: svc("product", 4),
    intro:
      "Indulge in a rejuvenating facial workout that lifts and sculpts with precision massage — firmer, radiant, refreshed skin.",
  },
  {
    category: SpaCategory.FOOT_MASSAGE,
    number: "08",
    image: svc("feet", 4),
    intro:
      "Thai reflexology, balm relief, sports, hot stone, potli, and Kansa thali for tired feet.",
  },
  {
    category: SpaCategory.JACUZZI,
    number: "09",
    image: svc("jacuzzi", 2),
    intro:
      "Bubble, Himalayan salt, honey, bath bomb, ice therapy, and Shahi milk — single or couple pricing.",
  },
];

export const SERVICES: Service[] = [
  // ── 01 Korean Blends ──
  {
    id: "service-14",
    name: "Korean Head Spa",
    koreanName: "Hedeu Seupa",
    description:
      "Luxurious head spa inspired by traditional Korean techniques — enhancing scalp health, reducing stress, and promoting deep relaxation.",
    benefits: [
      "Deep scalp cleansing",
      "Relieves tension headaches",
      "Promotes scalp & hair health",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 75,
    price: 5500,
    priceTiers: tiers([75, 5500]),
    rating: 4.9,
    ratingCount: 145,
    image: svc("korean", 2, "png"),
    isFeatured: true,
  },
  {
    id: "service-15",
    name: "Korean Head with Facial Spa",
    koreanName: "Hedeu & Peisyeol Seupa",
    description:
      "Combined Korean head spa and face contouring — gentle exfoliation, deep hydration, facial massage to tighten muscles, and a customized mask for Dry, Oily, or Combination skin.",
    benefits: [
      "Dry · Oily · Combination skin options",
      "Head spa + facial contouring",
      "Customized mask finish",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 90,
    price: 7000,
    priceTiers: tiers([90, 7000]),
    rating: 4.9,
    ratingCount: 52,
    image: svc("korean", 3, "png"),
  },
  {
    id: "service-17",
    name: "Foot Massage with Korean Head Spa",
    koreanName: "Bal Masaji",
    description:
      "A rejuvenating experience for tired feet focusing on pressure points, followed by authentic Korean Head Spa.",
    benefits: [
      "Relieves tired feet",
      "Combined scalp & foot relaxation",
      "Great for travel recovery",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 75,
    price: 4500,
    priceTiers: tiers([75, 4500]),
    rating: 4.8,
    ratingCount: 68,
    image: svc("korean", 1, "png"),
  },
  {
    id: "service-18",
    name: "Hot Stone Back Massage with Korean Head Spa",
    koreanName: "Deung Has-seuton Masaji",
    description:
      "A soothing hot-stone back massage designed to melt away tension, followed by authentic Korean Head Spa.",
    benefits: [
      "Deep heat relief for the back",
      "Scalp & head relaxation included",
      "Comprehensive upper-body reset",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 75,
    price: 5000,
    priceTiers: tiers([75, 5000]),
    rating: 4.85,
    ratingCount: 59,
    image: svc("korean", 2, "png"),
  },
  {
    id: "service-19",
    name: "Asian Blend Body Massage with Korean Head Spa",
    koreanName: "Oil Masaji",
    description:
      "Asian massage with long strokes, kneading, and circular movements, followed by authentic Korean Head Spa.",
    benefits: [
      "Full-body & scalp combined care",
      "Blended traditional techniques",
      "Extended deep relaxation",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 105,
    price: 7000,
    priceTiers: tiers([105, 7000], [135, 8500]),
    rating: 4.9,
    ratingCount: 47,
    image: svc("korean", 3, "png"),
  },
  {
    id: "service-20",
    name: "Hot Stone Body Massage with Korean Head Spa",
    koreanName: "Has-seuton Masaji",
    description:
      "Treat achy muscles with the warmth of healing hot stone, followed by authentic Korean Head Spa.",
    benefits: [
      "Full-body heat therapy",
      "Scalp renewal included",
      "Extended luxury treatment",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 120,
    price: 8000,
    priceTiers: tiers([120, 8000], [150, 10000]),
    rating: 4.9,
    ratingCount: 38,
    image: svc("korean", 4, "png"),
  },
  {
    id: "service-21",
    name: "Herbal Potli Massage with Korean Head Spa",
    koreanName: "Poteulli Masaji",
    description:
      "Ancient healing full-body Herbal Potli Massage, followed by authentic Korean Head Spa.",
    benefits: [
      "Herbal detox & scalp renewal combined",
      "Extended deep therapy",
      "Comprehensive wellness session",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 120,
    price: 9000,
    priceTiers: tiers([120, 9000], [150, 11000]),
    rating: 4.9,
    ratingCount: 33,
    image: svc("korean", 1, "png"),
  },
  {
    id: "service-16",
    name: "Four Hand Asian & Korean Blend",
    description:
      "Asian long-stroke massage with scalp and hair rejuvenation — two therapists working in sync for complete relaxation.",
    benefits: [
      "Dual-therapist synchronized session",
      "Combines two signature traditions",
      "Premium full-body & scalp care",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 90,
    price: 10000,
    priceTiers: tiers([90, 10000], [120, 12000]),
    rating: 5.0,
    ratingCount: 41,
    image: svc("korean", 4, "png"),
    isFeatured: true,
  },
  {
    id: "service-25",
    name: "Moxibustion with Korean Therapy",
    description:
      "Asian massage with moxibustion technique, followed by authentic Korean Head Spa.",
    benefits: [
      "Combined heat & Korean therapy",
      "Extended pain relief session",
      "Scalp ritual included",
    ],
    category: SpaCategory.KOREAN_BLENDS,
    durationMinutes: 135,
    price: 9000,
    priceTiers: tiers([135, 9000]),
    rating: 4.85,
    ratingCount: 21,
    image: svc("korean", 1, "png"),
  },

  // ── 02 Turkish Hammam ──
  {
    id: "service-26",
    name: "Classic Turkish Hammam",
    description:
      "Traditional Middle Eastern bathing ritual — exfoliate with sea stone or gloves, then enjoy a royal bubble bath that leaves skin soft, smooth, and clean.",
    benefits: [
      "Deep skin cleansing & exfoliation",
      "Steam-based detoxification",
      "Traditional hammam ritual",
    ],
    category: SpaCategory.TURKISH_HAMMAM,
    durationMinutes: 90,
    price: 6500,
    priceTiers: tiers([90, 6500]),
    rating: 4.9,
    ratingCount: 87,
    image: svc("hammam", 2),
  },
  {
    id: "service-27",
    name: "Signature Turkish Hammam",
    description:
      "Experience a 10-step bathing ritual with massage that leaves skin clean, polished, and soft — finished with a calming head bath.",
    benefits: [
      "Premium extended hammam ritual",
      "Comprehensive deep cleansing",
      "Signature luxury bathing experience",
    ],
    category: SpaCategory.TURKISH_HAMMAM,
    durationMinutes: 150,
    price: 11000,
    priceTiers: tiers([150, 11000]),
    steps: [
      "Ozone Steam",
      "Stone/Gloves Exfoliation",
      "Turkish Bubble Bath",
      "Rain Shower Mist",
      "Sugar Scrub",
      "Body Butter Massage",
      "Body Wrap",
      "Photo Light Therapy",
      "Hair Wash",
      "Power Jet Shower",
    ],
    rating: 4.95,
    ratingCount: 53,
    image: svc("hammam", 3),
    isFeatured: true,
  },
  {
    id: "service-28",
    name: "Shaan Abhishekam",
    description:
      "Enter the snana kaksha for purification — a refreshing scrub that exfoliates and leaves the body with an aromatic scent.",
    benefits: [
      "Ceremonial purification ritual",
      "Refreshing aromatic scrub",
      "Traditional Abhishekam experience",
    ],
    category: SpaCategory.TURKISH_HAMMAM,
    durationMinutes: 60,
    price: 4000,
    priceTiers: tiers([60, 4000]),
    rating: 4.8,
    ratingCount: 35,
    image: svc("shirodhara", 4),
  },
  {
    id: "service-29",
    name: "Vishuddhi Abhishekam",
    description:
      "Natural skin polish with Indian herbs, sea salt, and essential oils — exfoliating scrub and wrap to cleanse, moisturize, and refresh for a natural glow.",
    benefits: [
      "Extended ceremonial ritual",
      "Herbal scrub & wrap",
      "Deep purification focus",
    ],
    category: SpaCategory.TURKISH_HAMMAM,
    durationMinutes: 120,
    price: 8500,
    priceTiers: tiers([120, 8500]),
    rating: 4.85,
    ratingCount: 22,
    image: svc("shirodhara", 1),
  },
  {
    id: "service-30",
    name: "Bodicial with Body Facial",
    description:
      "Luxurious full-body polish — high-quality scrubs and nourishing masks leave skin soft, smooth, and refreshed.",
    benefits: [
      "Full-body skin renewal",
      "Deep exfoliation and nourishment",
      "Comprehensive facial-body treatment",
    ],
    category: SpaCategory.TURKISH_HAMMAM,
    durationMinutes: 150,
    price: 11000,
    priceTiers: tiers([150, 11000]),
    steps: [
      "Cleanse",
      "D-tan",
      "Scrub",
      "Steam",
      "Massage",
      "Pack",
      "Photo light therapy",
      "Head bath",
      "Power jet shower",
    ],
    rating: 4.9,
    ratingCount: 31,
    image: svc("product", 2),
  },

  // ── 03 Couple Spa ──
  {
    id: "service-34",
    name: "Blissful Retreat",
    description:
      "Serene couple massage in our luxurious royal twin room — tailored treatments to relax and harmonize body and mind.",
    benefits: [
      "Classic Signature Massage",
      "Couple Jacuzzi / Body Scrub",
      "Steam & Shower",
    ],
    category: SpaCategory.COUPLE_SPA,
    durationMinutes: 105,
    price: 10000,
    priceTiers: tiers([105, 10000], [135, 13000]),
    steps: [
      "75/105 mins — Classic Signature Massage",
      "30 mins — Couple Jacuzzi / Body Scrub",
      "30 mins — Steam & Shower",
    ],
    rating: 4.95,
    ratingCount: 40,
    image: svc("couple", 2),
    isFeatured: true,
  },
  {
    id: "service-35",
    name: "Soul Reconnect",
    description:
      "Authentic Korean head spa with deep full-body holistic massage in our luxurious royal twin room.",
    benefits: [
      "Any Holistic Massage (Hot Stone / Potli / Sports)",
      "Korean Head Spa",
      "Bubble Jacuzzi / Body Scrub + Steam",
    ],
    category: SpaCategory.COUPLE_SPA,
    durationMinutes: 150,
    price: 16000,
    priceTiers: tiers([150, 16000]),
    steps: [
      "75/105 mins — Any Holistic Massage (Hot Stone / Potli / Sports)",
      "45 mins — Korean Head Spa",
      "30 mins — Bubble Jacuzzi / Body Scrub",
      "30 mins — Steam & Shower",
    ],
    rating: 5.0,
    ratingCount: 25,
    image: svc("couple", 3),
    isFeatured: true,
  },
  {
    id: "service-36",
    name: "Classic Celebration",
    description:
      "Balloon décor, flower décor, flower bouquet, cake, fruits, dry fruit, coconut water, and milk with rose petals in the jacuzzi.",
    benefits: [
      "Balloon & flower décor",
      "Cake, fruits & dry fruit",
      "Milk with rose petals in jacuzzi",
    ],
    category: SpaCategory.COUPLE_SPA,
    durationMinutes: 30,
    price: 4000,
    priceTiers: tiers([30, 4000]),
    rating: 4.8,
    ratingCount: 18,
    image: svc("couple", 4),
  },
  {
    id: "service-37",
    name: "Signature Celebration",
    description:
      "Balloon & flower décor, LED candles, bouquet, cake, fruits, dry fruit, milk with rose petals in jacuzzi — plus mini meal: 2 starters/main course and 2 mocktails/juices/coconut water.",
    benefits: [
      "Everything in Classic Celebration",
      "LED candle décor",
      "Mini meal — 2 starters/main + drinks",
    ],
    category: SpaCategory.COUPLE_SPA,
    durationMinutes: 60,
    price: 6000,
    priceTiers: tiers([60, 6000]),
    rating: 4.85,
    ratingCount: 23,
    image: svc("couple", 1),
  },

  // ── 04 Holistic Massage ──
  {
    id: "service-8",
    name: "Hot Candle Oil Massage",
    description:
      "Soothing warmth from warm candle oil — melt away tension and nourish your skin in this unique therapeutic treatment.",
    benefits: [
      "Deeply moisturizes skin",
      "Warmth relieves muscle tightness",
      "Sensory, calming ritual",
    ],
    category: SpaCategory.HOLISTIC_MASSAGE,
    durationMinutes: 75,
    price: 4500,
    priceTiers: tiers([75, 4500], [105, 6000]),
    rating: 4.85,
    ratingCount: 77,
    image: svc("massage", 4),
  },
  {
    id: "service-9",
    name: "Hot Healing Stone Massage",
    description:
      "Traditional massage techniques with heated stones — warmth relaxes muscles for a deep therapeutic experience.",
    benefits: [
      "Penetrating heat relieves deep knots",
      "Improves circulation",
      "Long-lasting relaxation",
    ],
    category: SpaCategory.HOLISTIC_MASSAGE,
    durationMinutes: 75,
    price: 5000,
    priceTiers: tiers([75, 5000], [105, 7000]),
    rating: 4.9,
    ratingCount: 110,
    image: svc("hot-stone", 1),
  },
  {
    id: "service-10",
    name: "Sports Deep Tissue",
    description:
      "For active individuals into gym and sports — deep tissue techniques to relieve pain, improve flexibility, and boost muscle recovery.",
    benefits: [
      "Targets deep muscle layers",
      "Speeds up recovery",
      "Improves range of motion",
    ],
    category: SpaCategory.HOLISTIC_MASSAGE,
    durationMinutes: 75,
    price: 5500,
    priceTiers: tiers([75, 5500], [105, 7500]),
    rating: 4.9,
    ratingCount: 130,
    image: svc("sports", 2),
    isFeatured: true,
  },
  {
    id: "service-11",
    name: "Herbal Potli Massage",
    description:
      "Heated herbal pouches (potlis) rejuvenate, relax, and nourish the treated area.",
    benefits: [
      "Relieves joint and muscle pain",
      "Herbal detoxification",
      "Deeply warming therapy",
    ],
    category: SpaCategory.HOLISTIC_MASSAGE,
    durationMinutes: 75,
    price: 6000,
    priceTiers: tiers([75, 6000], [105, 8000]),
    rating: 4.9,
    ratingCount: 98,
    image: svc("potli", 3),
  },
  {
    id: "service-12",
    name: "Holistic Back Massage",
    description:
      "Healing back massage to relieve pain and clear toxins — Hot Stones / Herbal Potli / Mombati / Gun & Roller options.",
    benefits: [
      "Relieves chronic back tension",
      "Improves spinal comfort",
      "Calming, restorative focus",
    ],
    category: SpaCategory.HOLISTIC_MASSAGE,
    durationMinutes: 30,
    price: 2500,
    priceTiers: tiers([30, 2500]),
    rating: 4.7,
    ratingCount: 56,
    image: svc("massage", 4),
  },
  {
    id: "service-13",
    name: "Four Hand Body Massage",
    description:
      "Asian long strokes, kneading, and circular movements — two therapists for complete relaxation.",
    benefits: [
      "Doubled relaxation intensity",
      "Synchronized full-body coverage",
      "Signature luxury experience",
    ],
    category: SpaCategory.HOLISTIC_MASSAGE,
    durationMinutes: 60,
    price: 7000,
    priceTiers: tiers([60, 7000], [90, 8500]),
    rating: 5.0,
    ratingCount: 64,
    image: svc("massage", 3),
    isFeatured: true,
  },

  // ── 05 Ayurvedic Therapy ──
  {
    id: "service-22",
    name: "Shirodhara",
    description:
      "Shiro (head) + Dhara (flow) — stimulating head massage, warm oil stream, and Marma activation to ease tension and quiet the mind.",
    benefits: [
      "Deeply calms the nervous system",
      "Eases mental fatigue and anxiety",
      "Traditional Ayurvedic ritual",
    ],
    category: SpaCategory.AYURVEDIC_THERAPY,
    durationMinutes: 60,
    price: 4800,
    priceTiers: tiers([60, 4800]),
    rating: 4.95,
    ratingCount: 156,
    image: svc("shirodhara", 2),
    isFeatured: true,
  },
  {
    id: "service-23",
    name: "Sukhdhara",
    description:
      "Medicated oil poured on the forehead for physical and emotional balance, followed by a relaxing full-body massage.",
    benefits: [
      "Rejuvenates spirit & preserves health",
      "Full-body massage included",
      "Premium Ayurvedic experience",
    ],
    category: SpaCategory.AYURVEDIC_THERAPY,
    durationMinutes: 90,
    price: 7500,
    priceTiers: tiers([90, 7500], [120, 9500]),
    rating: 4.9,
    ratingCount: 44,
    image: svc("shirodhara", 3),
  },
  {
    id: "service-24",
    name: "Moxibustion",
    description:
      "Asian long-stroke massage followed by moxibustion to relieve body pain — used for fatigue, body pains, arthritis, and menstrual cramps.",
    benefits: [
      "Relieves chronic muscular pain",
      "Improves energy and blood flow",
      "Traditional heat therapy",
    ],
    category: SpaCategory.AYURVEDIC_THERAPY,
    durationMinutes: 105,
    price: 6500,
    priceTiers: tiers([105, 6500]),
    rating: 4.8,
    ratingCount: 29,
    image: svc("moxibustion", 4),
  },

  // ── 06 Classic Body Massages ──
  {
    id: "service-31",
    name: "Body Scrub",
    description:
      "Revitalizing body scrub that gently exfoliates and smooths skin — add-on with any body massage.",
    benefits: [
      "Removes dead skin cells",
      "Leaves skin smooth and refreshed",
      "Quick invigorating treatment",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 30,
    price: 1500,
    priceTiers: tiers([30, 1500]),
    rating: 4.7,
    ratingCount: 90,
    image: svc("product", 3),
  },
  {
    id: "service-4",
    name: "Head Massage",
    description:
      "Relaxing scalp massage to increase blood circulation to the hair follicles and melt away stress.",
    benefits: [
      "Relieves tension headaches",
      "Calms the mind",
      "Improves scalp circulation",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 30,
    price: 1800,
    priceTiers: tiers([30, 1800]),
    rating: 4.7,
    ratingCount: 95,
    image: svc("massage", 4),
  },
  {
    id: "service-5",
    name: "Back Massage",
    description:
      "Relieves stress accumulated in the back — restores mobility and eases tension in the upper body.",
    benefits: [
      "Relieves back tension",
      "Improves posture comfort",
      "Quick, focused relief",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 30,
    price: 1800,
    priceTiers: tiers([30, 1800]),
    rating: 4.7,
    ratingCount: 70,
    image: svc("massage", 1),
  },
  {
    id: "service-6",
    name: "Head, Shoulder and Back Massage",
    description:
      "Rejuvenating session for head, shoulders, and back — techniques tailored to areas of discomfort.",
    benefits: [
      "Relieves upper-body tension holistically",
      "Eases shoulder stiffness",
      "Quick full-upper-body reset",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 30,
    price: 2000,
    priceTiers: tiers([30, 2000]),
    rating: 4.8,
    ratingCount: 102,
    image: svc("massage", 2),
  },
  {
    id: "service-3",
    name: "Sukho Thai",
    description:
      "Thai massage combining acupressure with assisted yoga postures — gentle pressure and stretching to relax the whole body (without steam & shower).",
    benefits: [
      "Improves flexibility and joint mobility",
      "Boosts energy flow",
      "Relieves stiffness",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 30,
    price: 2500,
    priceTiers: tiers([30, 2500], [60, 3500]),
    rating: 4.9,
    ratingCount: 88,
    image: svc("thai", 3),
  },
  {
    id: "service-2",
    name: "Vishrama",
    description:
      "Signature aromatic oil of your choice with soft hand strokes — releases calming hormones for much-needed mental calmness.",
    benefits: [
      "Eases everyday stress",
      "Promotes deep rest",
      "Balances nervous system tone",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 60,
    price: 3200,
    priceTiers: tiers([60, 3200], [90, 4300]),
    rating: 4.8,
    ratingCount: 64,
    image: svc("massage", 2),
  },
  {
    id: "service-1",
    name: "Signature Classic Body Massage",
    description:
      "Tailored medium-to-deep pressure massage — classic strokes and targeted deep work adjusted to your comfort and areas of pain.",
    benefits: [
      "Medium or medium-to-hard pressure",
      "Relieves tension & muscle strains",
      "Deeply relaxing signature experience",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 75,
    price: 3800,
    priceTiers: tiers([75, 3800], [105, 5000]),
    rating: 4.9,
    ratingCount: 120,
    image: svc("massage", 1),
    isFeatured: true,
  },
  {
    id: "service-7",
    name: "Deep Abhyangam Massage",
    description:
      "Powerful Ayurvedic therapy with warm herbal oils and firm rhythmic strokes — detoxifies, nourishes, and eases muscular stiffness.",
    benefits: [
      "Medium or medium-to-hard pressure",
      "Ayurvedic herbal oil",
      "Relieves chronic tension",
    ],
    category: SpaCategory.CLASSIC_BODY,
    durationMinutes: 75,
    price: 4500,
    priceTiers: tiers([75, 4500], [105, 6000]),
    rating: 4.9,
    ratingCount: 140,
    image: svc("massage", 3),
  },

  // ── 07 Face GYM ──
  {
    id: "service-32",
    name: "Face Fit Gym",
    description:
      "High-energy finger technique over face, jawline & neck — tightens muscles, boosts cell renewal, and drains toxins.",
    benefits: [
      "Tightens facial muscles",
      "Increases cell renewal",
      "Drains unwanted toxins",
    ],
    category: SpaCategory.FACE_GYM,
    durationMinutes: 30,
    price: 2500,
    priceTiers: tiers([30, 2500]),
    rating: 4.7,
    ratingCount: 48,
    image: svc("product", 4),
  },
  {
    id: "service-33",
    name: "Face Lift Gym",
    description:
      "Firming & contouring massage to lift, tone, and sculpt — targets connective tissue for a radiant finish.",
    benefits: [
      "Lifts and sculpts contours",
      "Tones connective tissue",
      "Re-energises facial muscles",
    ],
    category: SpaCategory.FACE_GYM,
    durationMinutes: 60,
    price: 5000,
    priceTiers: tiers([60, 5000]),
    rating: 4.8,
    ratingCount: 37,
    image: svc("product", 1),
  },

  // ── 08 Foot Massage ──
  {
    id: "service-44",
    name: "Thai Foot Reflexology Massage",
    description:
      "Traditional Thai healing through pressure points and stretching — relieves tension and promotes overall wellness.",
    benefits: [
      "Stimulates full-body reflex points",
      "Relieves foot fatigue",
      "Traditional Thai technique",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 30,
    price: 1400,
    priceTiers: tiers([30, 1400], [60, 2300]),
    rating: 4.8,
    ratingCount: 76,
    image: svc("feet", 4),
  },
  {
    id: "service-45",
    name: "Pain Relief Balm Massage",
    description:
      "Specialized foot massage for chronic foot pain or fatigue — focuses on specific points to ease discomfort and reduce stress.",
    benefits: [
      "Relieves muscular aches",
      "Medicated balm for deeper relief",
      "Quick therapeutic session",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 30,
    price: 1600,
    priceTiers: tiers([30, 1600], [60, 2800]),
    rating: 4.7,
    ratingCount: 42,
    image: svc("massage", 1),
  },
  {
    id: "service-46",
    name: "Sport Foot Massage",
    description:
      "For gym and sports recovery — deep tissue foot work with massage gun / rollers.",
    benefits: [
      "Relieves foot strain from activity",
      "Speeds up recovery",
      "Firm, targeted technique",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 30,
    price: 1800,
    priceTiers: tiers([30, 1800], [60, 3200]),
    rating: 4.75,
    ratingCount: 38,
    image: svc("feet", 2),
  },
  {
    id: "service-47",
    name: "Hot Stone Foot Massage",
    description:
      "Traditional foot massage with heated stones — relieves tension, improves circulation, and soothes tired feet.",
    benefits: [
      "Deep heat relief for tired feet",
      "Improves foot circulation",
      "Relaxing heated therapy",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 30,
    price: 2000,
    priceTiers: tiers([30, 2000], [60, 3500]),
    rating: 4.8,
    ratingCount: 45,
    image: svc("hot-stone", 3),
  },
  {
    id: "service-48",
    name: "Herbal Potli Foot Massage",
    description:
      "Heated herbal pouches soothe and relax foot muscles — helps detoxify and reduce inflammation.",
    benefits: [
      "Herbal detoxification for feet",
      "Relieves joint and muscle pain",
      "Warming therapeutic treatment",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 30,
    price: 2300,
    priceTiers: tiers([30, 2300], [60, 4000]),
    rating: 4.8,
    ratingCount: 33,
    image: svc("potli", 4),
  },
  {
    id: "service-49",
    name: "Kansa Thali Foot Massage",
    description:
      "Stimulates Marma points on the feet — promotes detoxification, improves digestion, reduces acidity, and boosts energy flow.",
    benefits: [
      "Balances body energy",
      "Soothes nervous system",
      "Traditional Kansa metal therapy",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 60,
    price: 2300,
    priceTiers: tiers([60, 2300]),
    rating: 4.8,
    ratingCount: 27,
    image: svc("feet", 1),
  },
  {
    id: "service-50",
    name: "Kansa Thali Therapy",
    description:
      "Traditional Kansa metal thali therapy to balance the body's energies and detoxify the skin.",
    benefits: [
      "Quick energetic balancing session",
      "Traditional Kansa therapy",
      "Calming short treatment",
    ],
    category: SpaCategory.FOOT_MASSAGE,
    durationMinutes: 15,
    price: 500,
    priceTiers: tiers([15, 500]),
    rating: 4.6,
    ratingCount: 19,
    image: svc("feet", 2),
  },

  // ── 09 Jacuzzi ──
  {
    id: "service-38",
    name: "Bubble Jacuzzi",
    description:
      "Luxurious Bubble Jacuzzi experience — feel stress melt away as you immerse in a sea of bubbles.",
    benefits: [
      "Soothing warm water massage",
      "Eases muscle tension",
      "Quick relaxing soak",
    ],
    category: SpaCategory.JACUZZI,
    durationMinutes: 30,
    price: 1000,
    priceTiers: tiers([30, 1000, "Single"], [30, 2000, "Couple"]),
    rating: 4.6,
    ratingCount: 60,
    image: svc("jacuzzi", 2),
  },
  {
    id: "service-39",
    name: "Pink Himalayan Salt Bath",
    description:
      "Healing salt bath to detoxify, reduce inflammation, and soothe muscles with mineral-rich salts.",
    benefits: [
      "Mineral-rich detoxification",
      "Softens and nourishes skin",
      "Calming bath ritual",
    ],
    category: SpaCategory.JACUZZI,
    durationMinutes: 30,
    price: 1200,
    priceTiers: tiers([30, 1200, "Single"], [30, 2200, "Couple"]),
    rating: 4.7,
    ratingCount: 51,
    image: svc("jacuzzi", 3),
  },
  {
    id: "service-40",
    name: "Honey Bath",
    description:
      "Warm bath infused with pure honey — soothing and moisturizing for soft, cared-for skin.",
    benefits: [
      "Naturally hydrates skin",
      "Antibacterial honey benefits",
      "Soothing soak",
    ],
    category: SpaCategory.JACUZZI,
    durationMinutes: 30,
    price: 1400,
    priceTiers: tiers([30, 1400, "Single"], [30, 2500, "Couple"]),
    rating: 4.7,
    ratingCount: 39,
    image: svc("jacuzzi", 4),
  },
  {
    id: "service-41",
    name: "Ice Cream Bomb Jacuzzi",
    description:
      "Shea butter and essential-oil bath bombs leave the body smooth and moisturised.",
    benefits: [
      "Refreshing sensory soak",
      "Moisturizes with shea butter",
      "Fun, signature jacuzzi experience",
    ],
    category: SpaCategory.JACUZZI,
    durationMinutes: 30,
    price: 1600,
    priceTiers: tiers([30, 1600, "Single"], [30, 2800, "Couple"]),
    rating: 4.6,
    ratingCount: 34,
    image: svc("jacuzzi", 1),
  },
  {
    id: "service-42",
    name: "Ice Cold Water Jacuzzi Therapy",
    description:
      "Invigorating ice-cold jacuzzi therapy designed to stimulate circulation and promote muscle recovery.",
    benefits: [
      "Stimulates circulation",
      "Supports muscle recovery",
      "Cold-therapy reset",
    ],
    category: SpaCategory.JACUZZI,
    durationMinutes: 30,
    price: 1800,
    priceTiers: tiers([30, 1800, "Single"], [30, 3200, "Couple"]),
    rating: 4.7,
    ratingCount: 28,
    image: svc("ice-bath", 2),
  },
  {
    id: "service-43",
    name: "Shahi Milk Bath",
    description:
      "A rejuvenating experience fit for royalty — warm water infused with rich, nourishing milk to soften and hydrate skin.",
    benefits: [
      "Deeply nourishes and softens skin",
      "Royal, indulgent ritual",
      "Calming sensory experience",
    ],
    category: SpaCategory.JACUZZI,
    durationMinutes: 30,
    price: 2000,
    priceTiers: tiers([30, 2000, "Single"], [30, 3500, "Couple"]),
    rating: 4.8,
    ratingCount: 30,
    image: svc("jacuzzi", 3),
  },
];
