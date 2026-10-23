import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/lib/icons";
import { ArrowUpRight, Plus, Minus, Users2, Building2 } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { STAFFING_ITEMS, FACILITY_GROUPS, IMAGES } from "@/data/content";

export default function Pillars() {
  return (
    <section
      id="pillars"
      data-testid="pillars-section"
      className="section-pad relative overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="overline" data-testid="pillars-eyebrow">
            Core Business Pillars
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
            Two disciplines.
            <br />
            <span className="vp-gold-shimmer">One accountable partner.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <StaffingCard />
          <FacilityCard />
        </div>
      </div>
    </section>
  );
}

/* ==================== PILLAR 1 — STAFFING ==================== */
function StaffingCard() {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -4 }}
      className="relative rounded-[28px] overflow-hidden vp-soft-shadow group"
      data-testid="pillar-staffing"
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(11,29,58,0.25), inset 0 0 0 1px rgba(255,255,255,0.6)",
      }}
    >
      {/* Massive image */}
      <div className="relative aspect-[4/5] md:aspect-[4/4]">
        <img
          src={IMAGES.staffing}
          alt="Staffing Services"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-[#0b1d3a]/70 to-[#0b1d3a]/10" />

        {/* Floating pill */}
        <div className="absolute top-6 left-6 flex items-center gap-2 vp-glass-strong rounded-full px-3 py-1.5">
          <Users2 size={14} className="text-[#d4a843]" />
          <span className="text-[10px] uppercase tracking-[0.24em] text-white font-bold">
            Pillar One
          </span>
        </div>

        {/* Card content bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none">
            Staffing
            <br />
            <span className="vp-gold-shimmer">Services</span>
          </h3>
          <p className="mt-3 text-white/85 text-lg max-w-md">
            End-to-end workforce, at any scale.
          </p>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-[#f0c454]/60 text-[#f0c454] hover:bg-[#f0c454] hover:text-white transition-colors"
            data-testid="pillar-staffing-toggle"
          >
            {expanded ? <Minus size={16} /> : <Plus size={16} />}
            {expanded ? "Hide services" : "Explore services"}
          </button>
        </div>
      </div>

      {/* Expandable service list */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden bg-[#0b1d3a]"
            data-testid="pillar-staffing-panel"
          >
            <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-3">
              {STAFFING_ITEMS.map((s, i) => {
                const Icon = Icons[s.icon] || Icons.CheckCircle2;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    whileHover={{ y: -3 }}
                    className="group/svc flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(11,29,58,0.55)] hover:border-[#d4a843] p-4 transition-all"
                    data-testid={`staffing-item-${i}`}
                  >
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                        boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.5)",
                      }}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      {s.title}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="ml-auto text-white/40 group-hover/svc:text-[#d4a843] transition-colors"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ==================== PILLAR 2 — FACILITY MGMT ==================== */
function FacilityCard() {
  const [openKey, setOpenKey] = useState("soft");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      whileHover={{ y: -4 }}
      className="relative rounded-[28px] overflow-hidden vp-soft-shadow group"
      data-testid="pillar-facility"
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(11,29,58,0.25), inset 0 0 0 1px rgba(255,255,255,0.6)",
      }}
    >
      <div className="relative aspect-[4/5] md:aspect-[4/4]">
        <img
          src={IMAGES.facility}
          alt="Facility Management"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-[#0b1d3a]/70 to-[#0b1d3a]/10" />

        <div className="absolute top-6 left-6 flex items-center gap-2 vp-glass-strong rounded-full px-3 py-1.5">
          <Building2 size={14} className="text-[#d4a843]" />
          <span className="text-[10px] uppercase tracking-[0.24em] text-white font-bold">
            Pillar Two
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none">
            Facility
            <br />
            <span className="vp-gold-shimmer">Management</span>
          </h3>
          <p className="mt-3 text-white/85 text-lg max-w-md">
            Soft, technical &amp; specialised — one seamless workplace.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="bg-[#0b1d3a] p-4 md:p-6" data-testid="pillar-facility-accordion">
        {FACILITY_GROUPS.map((g) => {
          const open = openKey === g.key;
          return (
            <div key={g.key} className="border-b last:border-b-0 border-white/10">
              <button
                type="button"
                onClick={() => setOpenKey(open ? null : g.key)}
                className="w-full flex items-center justify-between py-4 md:py-5 text-left"
                data-testid={`facility-accordion-${g.key}`}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#d4a843] font-bold">
                    {g.label}
                  </div>
                  <div className="mt-1 font-display text-xl md:text-2xl text-white">
                    {g.tagline}
                  </div>
                </div>
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    open ? "rotate-45" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                  }}
                >
                  <Plus size={16} className="text-[#f0c454]" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="overflow-hidden"
                    data-testid={`facility-panel-${g.key}`}
                  >
                    <div className="pb-5 grid grid-cols-2 gap-2">
                      {g.items.map((it, i) => (
                        <motion.div
                          key={it}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.03 }}
                          className="flex items-center gap-2 text-white/80 text-sm py-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843]" />
                          {it}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
