/* =============================================================================
   Vegith Pinnacle Services — site behaviour (plain JavaScript, no libraries)

   1. Icons            — fills every <i class="icon" data-icon="name"></i>
   2. Header           — background on scroll, mobile menu
   3. Scroll progress  — gold bar along the top
   4. Reveal           — fade-in for elements with data-reveal
   5. Counters         — count-up for <span data-count="5000" data-suffix="+">
   6. Hero video       — skipped on Data Saver / slow connections
   7. Services slider  — pinned slideshow on the homepage (768px and wider)
   8. Compliance cards — click to expand
   9. Contact form     — sends the enquiry by email (FormSubmit)
  10. Footer year
   ========================================================================== */

document.documentElement.classList.add("js");

/* ---------------------------------------------------------------------------
   Settings you may want to change
   ------------------------------------------------------------------------- */
const CONTACT_EMAIL = "connect.hr@vegithglobal.com"; // where enquiries are sent
const CONTACT_PHONE = "+91 91364 07944";

/* 1. Icons ----------------------------------------------------------------- */
// Outline icons (24×24, from the Lucide icon set). Add one here to use it
// anywhere as <i class="icon" data-icon="its-name"></i>.
const ICONS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>',
  tick: '<path d="M20 6 9 17l-5-5"/>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  "graduation-cap": '<path d="M22 10v6"/><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  sparkles:
    '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
  crown: '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/>',
  quote:
    '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 0-1 1v3c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  instagram:
    '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  banknote: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  "heart-pulse":
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  receipt:
    '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/>',
  spreadsheet:
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2M14 13h2M8 17h2M14 17h2"/>',
  "folder-check":
    '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9 13 2 2 4-4"/>',
  "monitor-check": '<rect width="20" height="14" x="2" y="3" rx="2"/><path d="m9 10 2 2 4-4"/><path d="M12 17v4"/><path d="M8 21h8"/>',
  alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
};

document.querySelectorAll("[data-icon]").forEach((el) => {
  const paths = ICONS[el.dataset.icon];
  if (!paths) return;
  el.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>";
});

/* 2. Header ---------------------------------------------------------------- */
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function setMenu(open) {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuButton.querySelector("svg").innerHTML = ICONS[open ? "close" : "menu"];
}
menuButton?.addEventListener("click", () => setMenu(mobileMenu.hidden));
mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

/* 3. Scroll progress + header background ---------------------------------- */
const progressBar = document.querySelector(".scroll-progress");
function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  header?.classList.toggle("is-scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* 4. Reveal on scroll ------------------------------------------------------ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("is-visible");
      revealObserver.unobserve(el);
      // Once shown, drop the attribute so the element's own hover effects apply.
      el.addEventListener("transitionend", () => el.removeAttribute("data-reveal"), { once: true });
    });
  },
  { rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

/* 5. Counters -------------------------------------------------------------- */
function runCounter(el) {
  const target = Number(el.dataset.count) || 0;
  const suffix = el.dataset.suffix || "";
  const start = performance.now();
  const duration = 1600;
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      runCounter(entry.target);
    });
  },
  { rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll("[data-count]").forEach((el) => {
  el.textContent = "0" + (el.dataset.suffix || "");
  counterObserver.observe(el);
});

/* 6. Hero video ------------------------------------------------------------ */
// The video is only loaded for visitors on a decent connection who haven't
// asked for reduced motion; everyone else keeps the still photo.
const heroVideo = document.querySelector("video[data-src]");
if (heroVideo) {
  const c = navigator.connection;
  const slow = c && (c.saveData || /(^|-)2g|3g/.test(c.effectiveType || ""));
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!slow && !still) {
    heroVideo.src = heroVideo.dataset.src;
    heroVideo.hidden = false;
    heroVideo.play().catch(() => {});
  }
}

/* 7. Services slider (homepage, 768px and wider) --------------------------- */
// Each <img> in .svc-pinned__thumb is one slide; its data-* attributes hold
// the title, tagline and link used while that slide is showing.
const pinned = document.querySelector(".svc-pinned");
if (pinned) {
  const slides = [...pinned.querySelectorAll(".svc-pinned__thumb img")];
  const backgrounds = [...pinned.querySelectorAll(".svc-pinned__bg img")];
  const dots = [...pinned.querySelectorAll(".svc-pinned__rail span")];
  const bg = pinned.querySelector(".svc-pinned__bg");
  const link = pinned.querySelector(".svc-pinned__link");
  const title = pinned.querySelector(".svc-pinned__title");
  const tagline = pinned.querySelector(".svc-pinned__tagline");
  const count = pinned.querySelector(".svc-pinned__count");
  let current = 0;
  let fadeTimer;

  slides.forEach((img) =>
    img.addEventListener("transitionend", () => {
      if (!img.classList.contains("is-leaving")) return;
      // Park the slide that just left back below the frame, without animating.
      img.classList.add("no-anim");
      img.classList.remove("is-leaving");
      void img.offsetWidth;
      img.classList.remove("no-anim");
    })
  );

  function show(index) {
    if (index === current) return;
    slides[current].classList.remove("is-active");
    slides[current].classList.add("is-leaving");
    slides[index].classList.add("is-active");
    backgrounds.forEach((b, i) => b.classList.toggle("is-active", i === index));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
    const s = slides[index].dataset;
    link.href = s.href;
    count.textContent = `0${index + 1} — 0${slides.length}`;
    title.classList.add("is-fading");
    tagline.classList.add("is-fading");
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => {
      title.textContent = s.title;
      tagline.textContent = s.tagline;
      title.classList.remove("is-fading");
      tagline.classList.remove("is-fading");
    }, 200);
    current = index;
  }

  function update() {
    if (!pinned.offsetHeight) return; // hidden on small screens
    const rect = pinned.getBoundingClientRect();
    const total = pinned.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / total));
    bg.style.transform = `translateY(${-8 * progress}%)`;
    show(Math.min(slides.length - 1, Math.floor(progress * slides.length)));
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* 8. Compliance cards ------------------------------------------------------ */
// Clicking a card opens it and closes the others.
const pillarCards = [...document.querySelectorAll(".pillar-card")];
pillarCards.forEach((card) => {
  const button = card.querySelector(".pillar-card__toggle");
  const label = button.querySelector(".label");
  const toggle = () => {
    const open = !card.classList.contains("is-open");
    pillarCards.forEach((other) => {
      other.classList.remove("is-open");
      other.querySelector(".pillar-card__toggle").setAttribute("aria-expanded", "false");
      other.querySelector(".pillar-card__toggle .label").textContent = "Click to explore";
    });
    card.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Click to collapse" : "Click to explore";
  };
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    toggle();
  });
});

/* 9. Contact form ---------------------------------------------------------- */
// Enquiries are delivered by FormSubmit (formsubmit.co) — a free form-to-email
// service. The very first enquiry sends an activation email to CONTACT_EMAIL;
// click "Activate Form" in it once and every enquiry after that is delivered.
function toast(message, type = "success") {
  let box = document.querySelector(".toasts");
  if (!box) {
    box = document.createElement("div");
    box.className = "toasts";
    box.setAttribute("aria-live", "polite");
    document.body.appendChild(box);
  }
  const el = document.createElement("div");
  el.className = `toast is-${type}`;
  el.innerHTML = `<i class="icon"></i><span></span>`;
  el.querySelector(".icon").innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    ICONS[type === "success" ? "check" : "alert"] + "</svg>";
  el.querySelector("span").textContent = message;
  box.appendChild(el);
  setTimeout(() => {
    el.classList.add("is-leaving");
    setTimeout(() => el.remove(), 300);
  }, type === "success" ? 6000 : 10000);
}

const form = document.querySelector("#contact-form");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (!data.name || !data.email || !data.message) {
    toast("Please fill in your name, email and message.", "error");
    return;
  }
  const button = form.querySelector('button[type="submit"]');
  const label = button.querySelector(".label");
  button.disabled = true;
  label.textContent = "Sending…";
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Name: data.name,
        Email: data.email,
        Company: data.company || "-",
        "Interested in": data.interest,
        Requirement: data.message,
        _replyto: data.email,
        _subject: `Website enquiry: ${data.interest} — ${data.company || data.name}`,
        _template: "table",
        _captcha: "false",
      }),
    });
    const result = await res.json().catch(() => ({}));
    if (!res.ok || String(result.success) !== "true") throw new Error(result.message);
    toast("Thank you — your enquiry has been sent. Our team will reach out within 24 hours.");
    form.reset();
  } catch {
    toast(`Sorry, your enquiry couldn't be sent. Please email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`, "error");
  } finally {
    button.disabled = false;
    label.textContent = "Send Enquiry";
  }
});

/* 10. Footer year ---------------------------------------------------------- */
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
