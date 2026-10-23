import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/PremiumButton";
import { VideoPlaceholder } from "@/components/PlaceholderImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import { HOME_COUNTERS, IMAGES } from "@/data/content";

// Skip the 2 MB background video for Data Saver / slow connections and
// reduced-motion users; they get the still poster instead.
function useShouldPlayVideo() {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const c = navigator.connection;
    const slow = c && (c.saveData || /(^|-)2g|3g/.test(c.effectiveType || ""));
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPlay(!slow && !still);
  }, []);
  return play;
}

export default function Hero() {
  const playVideo = useShouldPlayVideo();
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex items-center pt-32 pb-16 overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {playVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.heroPoster}
            className="absolute inset-0 h-full w-full object-cover"
            data-testid="hero-bg-video"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={IMAGES.heroPoster}
            alt=""
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Modern gradient overlay — brand navy/gold tint for text contrast */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,13,30,0.55) 0%, rgba(6,13,30,0.8) 45%, rgba(4,9,26,0.96) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 15% 10%, rgba(20,56,127,0.6) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 90% 85%, rgba(212,168,67,0.22) 0%, transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full vp-glass vp-soft-shadow px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase text-white/80 mb-6"
              data-testid="hero-eyebrow"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4a843] animate-pulse" />
              Est. 2018 · Vegith Group
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              data-testid="hero-headline"
              className="font-display text-[34px] sm:text-5xl md:text-6xl xl:text-[72px] leading-[1.1] md:leading-[1.02] text-white"
            >
              Manpower &
              <span className="vp-gold-shimmer font-bold"> Integrated  </span>  
               <br/>
              <span className="vp-gold-shimmer font-bold">  Facility </span>
               Management,
               <br/> 
              <span className="italic font-normal">redefined. </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              data-testid="hero-subtext"
              className="mt-6 text-lg text-white/70 leading-relaxed max-w-md"
            >
              Integrated Manpower &amp; Facility Management for India&apos;s
              most ambitious workplaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-8 grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 max-w-sm sm:max-w-none"
            >
              <PrimaryButton testid="hero-cta-primary" href="/services" className="w-full justify-center sm:w-auto">
                Explore Services
              </PrimaryButton>
              <GhostButton testid="hero-cta-secondary" href="/contact" className="w-full justify-center sm:w-auto">
                Request Survey
              </GhostButton>
            </motion.div>
          </div>

          {/* RIGHT — video placeholder */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7 relative"
          >
            <motion.div
              aria-hidden
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl rotate-12 hidden md:block"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,168,67,0.6), rgba(240,196,84,0.25))",
                backdropFilter: "blur(12px)",
                boxShadow: "0 20px 40px -10px rgba(212,168,67,0.35)",
              }}
            />
            <motion.div
              aria-hidden
              animate={{ y: [0, 16, 0], rotate: [0, 6, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -right-6 h-20 w-20 rounded-3xl hidden md:block"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,56,127,0.55), rgba(37,99,235,0.25))",
                backdropFilter: "blur(12px)",
                boxShadow: "0 20px 40px -10px rgba(20,56,127,0.35)",
              }}
            />
            <VideoPlaceholder poster={IMAGES.heroPoster} testid="hero-video" />
          </motion.div> */}
        </div>

        {/* Big animated counters (Unify-inspired) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          data-testid="hero-counters"
        >
          {HOME_COUNTERS.map((c, i) => (
            <div
              key={c.label}
              className="vp-glass vp-soft-shadow rounded-3xl px-4 sm:px-6 py-5 sm:py-6 md:py-8 group hover:-translate-y-1 transition-transform"
              data-testid={`hero-counter-${i}`}
            >
              <AnimatedCounter
                value={c.value}
                suffix={c.suffix}
                className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-none"
                testid={`hero-counter-value-${i}`}
              />
              <div className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white/55 font-semibold">
                {c.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#next"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:flex mt-14 items-center gap-2 text-white/55 uppercase tracking-[0.3em] text-[10px]"
          data-testid="hero-scroll-indicator"
        >
          Scroll to Explore <ChevronDown className="h-4 w-4" />
        </motion.a>
      </div>
      <div id="next" />
    </section>
  );
}
