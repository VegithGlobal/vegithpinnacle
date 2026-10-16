import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_PILLARS } from "@/data/content";

const N = SERVICE_PILLARS.length;

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

function SectionHeading({ center }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="overline">Expertise That Works</div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
        Professional solutions
        <br />
        <span className="vp-gold-shimmer">tailored to your needs.</span>
      </h2>
    </div>
  );
}

function MobileServices() {
  return (
    <section data-testid="home-services" className="section-pad relative">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <SectionHeading />
        </div>
        <div className="grid gap-4">
          {SERVICE_PILLARS.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              data-testid={`home-service-${s.key}`}
            >
              <Link to="/services" className="block group relative">
                <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden vp-soft-shadow">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-[#0b1d3a]/70 to-[#0b1d3a]/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#f0c454] font-bold">
                      0{i + 1}
                    </div>
                    <h3 className="mt-2 font-display text-3xl leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-white/80 text-sm">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[#f0c454] text-sm font-semibold">
                      Read More <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ParallaxServices() {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Drive everything from raw scroll progress. A spring here made the slide
  // index trail behind the scroll position, which felt laggy/stuck.
  const bgDrift = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  // Only re-render when the index actually changes.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(N - 1, Math.max(0, Math.floor(v * N)));
    setActive((prev) => (prev !== idx ? idx : prev));
  });

  // Preload + decode every slide image up front so switching slides never
  // waits on a network fetch or a main-thread image decode.
  useEffect(() => {
    if (isMobile) return;
    SERVICE_PILLARS.forEach((s) => {
      [s.img, s.background].forEach((src) => {
        if (!src) return;
        const img = new Image();
        img.src = src;
        img.decode?.().catch(() => {});
      });
    });
  }, [isMobile]);

  if (isMobile) return <MobileServices />;

  const service = SERVICE_PILLARS[active];

  return (
    <section
      ref={sectionRef}
      data-testid="home-services"
      className="relative"
      style={{ height: `${N * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#081528]">
        {/* Full-screen background crossfade with slow drift */}
        <motion.div
          className="absolute inset-[-8%] will-change-transform"
          style={{ y: bgDrift }}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={service.key}
              src={service.background || service.img}
              alt=""
              decoding="async"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover will-change-[opacity]"
            />
          </AnimatePresence>
        </motion.div>
        <div className="absolute inset-0 bg-[#060d1e]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d1e] via-transparent to-[#060d1e]/90" />

        {/* Heading — always visible */}
<div className="absolute top-14 inset-x-0 z-30">
  <div className="w-full flex justify-center">
    <div className="text-center max-w-4xl px-6">
      <div className="overline">
        Expertise That Works
      </div>

      <h2 className="mt-4 font-display text-2xl md:text-3xl lg:text-4xl text-white leading-[1.05]">
        Professional solutions
        <br />
        <span className="vp-gold-shimmer">
          tailored to your needs.
        </span>
      </h2>
    </div>
  </div>
</div>

        {/* Center stage: thumbnail + title + CTA */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pt-40 mt-10">
          <Link to="/services" className="group flex flex-col items-center">
            <div className="relative w-60 md:w-80 lg:w-90 aspect-[8/6] rounded-[20px] overflow-hidden vp-soft-shadow ring-1 ring-white/15">
              {/*
                Single source of truth for this element's motion: only the
                enter/exit transition drives it. Scroll-linked transforms were
                removed here because they fought with initial/animate/exit on
                the same "y" property, causing jitter/lag.
              */}
              <AnimatePresence mode="sync">
                <motion.img
                  key={service.key}
                  src={service.img}
                  alt={service.title}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover will-change-transform"
                />
              </AnimatePresence>
            </div>

            {/*
              Fixed-width, fixed-height slots below so index/title/tagline
              never shift the layout, regardless of content length per slide.
              Only the text crossfades in place — the CTA button stays put.
            */}
            <div className="mt-1 text-center overflow-hidden w-full max-w-xl mx-auto flex flex-col items-center">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#f0c454] font-bold h-4 flex items-center justify-center">
                0{active + 1} — 0{N}
              </div>

              <div className="mt-2 h-[64px] md:h-[96px] lg:h-[50px] flex items-center justify-center w-full">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`title-${service.key}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="font-display text-2xl md:text-4xl lg:text-5xl text-white leading-[1.02]"
                  >
                    {service.title}
                  </motion.h3>
                </AnimatePresence>
              </div>

              <div className="mt-2 h-[48px] md:h-[56px] flex items-center justify-center w-full">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`tagline-${service.key}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-white/70 text-base md:text-lg max-w-xl mx-auto"
                  >
                    {service.tagline}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <span className="m-2 inline-flex items-center gap-2 h-[20px] text-[#f0c454] text-sm font-semibold tracking-wide uppercase group-hover:gap-4 transition-all">
              Read More <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>

        {/* Progress rail */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {SERVICE_PILLARS.map((s, i) => (
            <div
              key={s.key}
              data-testid={`home-service-dot-${s.key}`}
              className={`w-[3px] rounded-full transition-all duration-500 ${
                i === active ? "h-10 bg-[#f0c454]" : "h-5 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
