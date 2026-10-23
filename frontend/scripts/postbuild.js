/**
 * Runs after `craco build`.
 *
 * GitHub Pages only serves real files, so a direct visit to /about used to
 * fall through to 404.html (HTTP 404) and search engines never indexed the
 * inner pages. This writes build/<route>/index.html for every route — each a
 * copy of index.html with that page's own title, description, canonical and
 * Open Graph tags — and generates sitemap.xml and robots.txt from the same
 * route list (src/seo/routes.json).
 */
const fs = require("fs");
const path = require("path");

const build = path.join(__dirname, "..", "build");
const seo = require("../src/seo/routes.json");
const template = fs.readFileSync(path.join(build, "index.html"), "utf8");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const urlFor = (p) => seo.siteUrl + (p === "/" ? "/" : p);

function render(route) {
  const url = urlFor(route.path);
  const title = esc(route.title);
  const desc = esc(route.description);
  const swap = (html, re, value) => {
    if (!re.test(html)) throw new Error(`postbuild: pattern ${re} not found in index.html`);
    return html.replace(re, value);
  };
  let html = template;
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = swap(html, /(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`);
  html = swap(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = swap(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
  html = swap(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`);
  html = swap(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = swap(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
  html = swap(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`);
  return html;
}

// Write build/about.html (not build/about/index.html): GitHub Pages serves
// about.html at /about with a 200, whereas a folder makes /about 301-redirect
// to /about/, which would contradict the canonical URL.
for (const route of seo.routes) {
  const out =
    route.path === "/"
      ? path.join(build, "index.html")
      : path.join(build, `${route.path.slice(1)}.html`);
  fs.writeFileSync(out, render(route));
}

const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  seo.routes
    .map(
      (r) =>
        `  <url>\n    <loc>${urlFor(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(build, "sitemap.xml"), sitemap);

fs.writeFileSync(
  path.join(build, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${seo.siteUrl}/sitemap.xml\n`
);

console.log(`postbuild: wrote ${seo.routes.length} route pages, sitemap.xml, robots.txt`);
