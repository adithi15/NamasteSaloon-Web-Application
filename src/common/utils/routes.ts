import { SpaCategory } from "@/src/common/types";
import type { PackageType, SpaCategoryValue, ViewName } from "@/src/common/types";
import { SERVICES } from "@/src/common/data";

/** URL-safe slug: "Korean Head Spa" → "korean-head-spa" */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const VIEW_PATHS: Record<ViewName, string> = {
  home: "/home",
  services: "/services",
  memberships: "/memberships",
  blog: "/blog",
  contact: "/contact",
  bookings: "/bookings",
  "why-spa": "/why-spa",
};

const CATEGORY_SLUGS: Record<SpaCategoryValue, string> = {
  [SpaCategory.KOREAN_BLENDS]: "korean-blends",
  [SpaCategory.TURKISH_HAMMAM]: "turkish-hammam",
  [SpaCategory.COUPLE_SPA]: "couple-spa",
  [SpaCategory.HOLISTIC_MASSAGE]: "holistic-massage",
  [SpaCategory.AYURVEDIC_THERAPY]: "ayurvedic-therapy",
  [SpaCategory.CLASSIC_BODY]: "classic-body-massages",
  [SpaCategory.FACE_GYM]: "face-gym",
  [SpaCategory.FOOT_MASSAGE]: "foot-massage",
  [SpaCategory.JACUZZI]: "jacuzzi",
};

/** Legacy slugs → new chapters (bookmarks / old links) */
const LEGACY_SLUG_TO_CATEGORY: Record<string, SpaCategoryValue> = {
  "custom-massages": SpaCategory.CLASSIC_BODY,
  "head-face-spa": SpaCategory.FACE_GYM,
  "wellness-rituals": SpaCategory.AYURVEDIC_THERAPY,
  "baths-celebrations": SpaCategory.JACUZZI,
};

const SLUG_TO_CATEGORY = {
  ...Object.fromEntries(
    Object.entries(CATEGORY_SLUGS).map(([cat, slug]) => [slug, cat]),
  ),
  ...LEGACY_SLUG_TO_CATEGORY,
} as Record<string, SpaCategoryValue>;

export function categoryToSlug(category: SpaCategoryValue): string {
  return CATEGORY_SLUGS[category];
}

export function slugToCategory(slug: string): SpaCategoryValue | null {
  return SLUG_TO_CATEGORY[slugify(slug)] ?? null;
}

export function servicePath(serviceName: string): string {
  return `/services/${slugify(serviceName)}`;
}

export function categoryPath(category: SpaCategoryValue | "All"): string {
  if (category === "All") return "/services";
  return `/services/${categoryToSlug(category)}`;
}

export function membershipPath(type: PackageType | "all" = "all"): string {
  if (type === "all") return "/memberships";
  return `/memberships/${type}`;
}

export function findServiceBySlug(slug: string) {
  const key = slugify(slug);
  const direct = SERVICES.find((s) => slugify(s.name) === key);
  if (direct) return direct;

  // Renamed / brochure aliases — keep old + new bookmarks working
  const legacyId: Record<string, string> = {
    "turkish-hammam": "service-26",
    "classic-turkish-hammam": "service-26",
    "snaan-abhishekam": "service-28",
    "shaan-abhishekam": "service-28",
    "bodicial-body-facial": "service-30",
    "bodicial-with-body-facial": "service-30",
    "moxibustion-korean-therapy": "service-25",
    "moxibustion-with-korean-therapy": "service-25",
    "sukhdhara-medicated-oil": "service-23",
    "moxibustion-therapy": "service-24",
    "body-scrub-add-on-with-body-massage": "service-31",
    "back-energy": "service-5",
    "back-massage": "service-5",
    "head-shoulder-and-back": "service-6",
    "head-shoulder-and-back-massage": "service-6",
    "classic-signature-massage": "service-1",
    "signature-classic-body-massage": "service-1",
    "deep-abhyangham-massage": "service-7",
    "deep-abhyangam-massage": "service-7",
    "sports-deep-tissue-massage": "service-10",
    "sports-deep-tissue": "service-10",
    "thai-foot-reflexology": "service-44",
    "thai-foot-reflexology-massage": "service-44",
    "sports-foot-massage": "service-46",
    "sport-foot-massage": "service-46",
    "icecream-bath-bomb-jacuzzi": "service-41",
    "ice-cream-bath-bomb-jacuzzi": "service-41",
    "ice-cream-bomb-jacuzzi": "service-41",
    "iced-cold-water-jacuzzi-therapy": "service-42",
    "ice-cold-water-jacuzzi-therapy": "service-42",
  };
  const id = legacyId[key];
  return id ? (SERVICES.find((s) => s.id === id) ?? null) : null;
}

export function resolveServicesSlug(slug: string | undefined): {
  category: SpaCategoryValue | "All";
  serviceId: string | null;
} {
  if (!slug) return { category: "All", serviceId: null };

  const category = slugToCategory(slug);
  if (category) return { category, serviceId: null };

  const service = findServiceBySlug(slug);
  if (service) return { category: service.category, serviceId: service.id };

  return { category: "All", serviceId: null };
}

export function pathToView(pathname: string): ViewName {
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/memberships")) return "memberships";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/bookings")) return "bookings";
  if (pathname.startsWith("/why-spa")) return "why-spa";
  return "home";
}
