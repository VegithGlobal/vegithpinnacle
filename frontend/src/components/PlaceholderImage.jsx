import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * PlaceholderImage — a reusable 16:9 (default) image container
 *   - Lazy loaded, object-cover, rounded, subtle skeleton fade-in
 *   - Overlay label shows on hover to hint context (easy visual anchor
 *     while the client's real photograph is not yet uploaded)
 *   - Replace props.src later with your own photos.
 */
export function PlaceholderImage({
  src,
  alt = "",
  aspect = "aspect-[16/9]",
  label,
  initials,
  className = "",
  overlay = "gradient",
  rounded = "rounded-3xl",
  priority = false,
  position = "object-center",
  testid,
  children,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      data-testid={testid}
      className={`relative overflow-hidden ${rounded} ${aspect} bg-gradient-to-br from-[#0b1d3a] via-[#0a1830] to-[#060d1e] vp-soft-shadow border border-white/10 group ${className}`}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover ${position} transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-[1.04]`}
        />
      )}

      {!src && initials && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-4xl text-[#d4a843]/70"
            aria-hidden="true"
          >
            {initials}
          </span>
        </div>
      )}

      {overlay === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/55 via-[#0b1d3a]/10 to-transparent" />
      )}
      {overlay === "soft" && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/25 via-transparent to-transparent" />
      )}

      {label && (
        <div className="absolute top-4 left-4 vp-glass-strong rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white font-bold">
          {label}
        </div>
      )}

      {children}
    </div>
  );
}

/**
 * VideoPlaceholder — cinematic 16:9 empty video slot with glass border
 * and play button overlay. Ready for a real <video> to be dropped in later.
 */
export function VideoPlaceholder({
  poster,
  label = "Cinematic Company Reel",
  className = "",
  testid = "video-placeholder",
}) {
  return (
    <div
      data-testid={testid}
      className={`relative aspect-[16/9] rounded-[28px] overflow-hidden vp-soft-shadow ${className}`}
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(11,29,58,0.35), inset 0 0 0 1px rgba(255,255,255,0.6)",
      }}
    >
      {/* backdrop image (poster) */}
      {poster ? (
        <img
          src={poster}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0b1d3a 0%, #14387f 45%, #1e3a8a 100%)",
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1d3a]/70 via-[#0b1d3a]/30 to-transparent" />

      {/* Gold hairline frame */}
      <div
        aria-hidden
        className="absolute inset-3 rounded-[22px] pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.45)" }}
      />

      {/* Play button */}
      <motion.button
        type="button"
        aria-label="Play company reel"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
        style={{
          width: 82,
          height: 82,
          background:
            "linear-gradient(135deg, #d4a843 0%, #f0c454 100%)",
          boxShadow:
            "0 20px 40px -10px rgba(212,168,67,0.55), inset 0 0 0 1px rgba(255,255,255,0.5)",
        }}
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#f0c454]" />
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" className="relative z-10 ml-1">
          <path d="M0 0L26 15L0 30V0Z" fill="#0b1d3a" />
        </svg>
      </motion.button>

      <div className="absolute left-6 bottom-6 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#f0c454] animate-pulse" />
        <div className="text-[11px] uppercase tracking-[0.24em] text-[#f0c454] font-semibold">
          {label}
        </div>
      </div>
      <div className="absolute right-6 bottom-6 vp-glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white font-semibold">
        Coming Soon
      </div>
    </div>
  );
}
