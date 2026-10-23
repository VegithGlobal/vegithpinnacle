import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures the browser scrolls to the top whenever the route changes —
 * unless the link targets a section (#hash), which the page scrolls to.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}
