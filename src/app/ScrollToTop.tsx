import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to hash target, or to top when changing top-level section */
export default function ScrollToTop() {
  const location = useLocation();
  const section = location.pathname.split("/")[1] || "home";
  const prevSection = useRef(section);

  useEffect(() => {
    const { hash, pathname } = location;

    if (hash) {
      const id = hash.slice(1);
      const scrollToHash = () => {
        const el =
          document.getElementById(id) ||
          (id.startsWith("policies")
            ? document.getElementById("policies-section")
            : null);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      // Wait for route content to paint
      const t = window.setTimeout(scrollToHash, 100);
      prevSection.current = pathname.split("/")[1] || "home";
      return () => window.clearTimeout(t);
    }

    if (prevSection.current !== section) {
      prevSection.current = section;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash, section]);

  return null;
}
