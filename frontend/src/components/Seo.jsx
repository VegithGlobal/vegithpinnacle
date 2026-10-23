import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "@/seo/routes.json";

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Keeps <title>, description, canonical and Open Graph tags in sync with the
 * current route. The same data (src/seo/routes.json) is baked into static
 * per-route HTML at build time by scripts/postbuild.js for crawlers.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const route = seo.routes.find((r) => r.path === path);

    if (!route) {
      document.title = `Page Not Found | ${seo.siteName}`;
      setMeta("name", "robots", "noindex, follow");
      return;
    }

    const url = seo.siteUrl + (route.path === "/" ? "/" : route.path);
    document.title = route.title;
    setMeta("name", "robots", "index, follow");
    setMeta("name", "description", route.description);
    setMeta("property", "og:title", route.title);
    setMeta("property", "og:description", route.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", route.title);
    setMeta("name", "twitter:description", route.description);
    setCanonical(url);
  }, [pathname]);

  return null;
}
