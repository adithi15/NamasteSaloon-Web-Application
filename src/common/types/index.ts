export const SpaCategory = {
  ALTERNATIVE_MEDICINE: "Wellness Rituals",
  MASSAGES: "Custom Massages",
  BIOMETRIC_TESTING: "Head & Face Spa",
  CLASSES: "Baths & Celebrations",
} as const;

export type SpaCategoryValue =
  (typeof SpaCategory)[keyof typeof SpaCategory];

export type ViewName =
  | "home"
  | "services"
  | "why-spa"
  | "memberships"
  | "blog"
  | "contact"
  | "bookings";

export type PackageType =
  | "membership"
  | "package"
  | "couple-spa"
  | "couple-celebration";

export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  category: SpaCategoryValue;
  durationMinutes: number;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
  isFeatured?: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  image: string;
  rating: number;
  category: SpaCategoryValue;
  specialtyTag: string;
  degrees: string[];
  experience: string;
  bio: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  price: number;
  duration: string;
  description: string;
  benefits: string[];
  popular: boolean;
  type: PackageType;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export interface Faq {
  id?: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  date: string;
  isGoogleReview: boolean;
  avatar?: string;
  role?: string;
}

export interface Booking {
  id: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  serviceId: string;
  specialistId: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status?: string;
  createdAt?: string;
}

export interface BusinessDetails {
  name: string;
  tagline?: string;
  about: string;
  yearEstablished: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsLink: string;
  instagram: string;
  facebook: string;
}

export interface Policies {
  cancellation: string;
  refund: string;
  privacy: string;
  terms: string;
}
