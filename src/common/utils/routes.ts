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
  [SpaCategory.MASSAGES]: "custom-massages",
  [SpaCategory.BIOMETRIC_TESTING]: "head-face-spa",
  [SpaCategory.ALTERNATIVE_MEDICINE]: "wellness-rituals",
  [SpaCategory.CLASSES]: "baths-celebrations",
};

const SLUG_TO_CATEGORY = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([cat, slug]) => [slug, cat]),
) as Record<string, SpaCategoryValue>;

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
  return SERVICES.find((s) => slugify(s.name) === key) ?? null;
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
