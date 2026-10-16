import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

/**
 * PageHero — subpage cinematic hero used on About, Services, etc.
 * Renders an eyebrow, big display heading, tagline, and breadcrumb.
 */
export default function PageHero({
  eyebrow,
  title,
  titleGold,
  tagline,
  image,
  testid,
  breadcrumbs = [],
}) {
  return (
    <section
      data-testid={testid}
      className="relative pt-28 pb-12 md:pt-40 md:pb-24 overflow-hidden"
    >
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d1e]/60 via-[#060d1e]/80 to-[#060d1e]" />
        </div>
      )}

      <div className="container-x relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/55 uppercase tracking-[0.22em] font-semibold"
          aria-label="Breadcrumb"
          data-testid="page-breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1 py-2 hover:text-[#d4a843] transition-colors"
          >
            <HomeIcon size={12} /> Home
          </Link>
          {breadcrumbs.map((b) => (
            <span key={b.label} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-[#d4a843]" />
              {b.to ? (
                <Link
                  to={b.to}
                  className="hover:text-[#d4a843] transition-colors"
                >
                  {b.label}
                </Link>
              ) : (
                <span className="text-[#d4a843]">{b.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-4xl"
        >
          {eyebrow && <div className="overline mb-4">{eyebrow}</div>}
          <h1
            className="font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] md:leading-[1.02] text-white tracking-tight break-words"
            data-testid="page-heading"
          >
            {title}
            {titleGold && (
              <>
                {" "}
                <span className="vp-gold-shimmer">{titleGold}</span>
              </>
            )}
          </h1>
          {tagline && (
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {tagline}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
