import { motion } from "framer-motion";
import { Icons } from "@/lib/icons";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { COMPLIANCE_ITEMS, IMAGES } from "@/data/content";

export default function Compliance() {
  return (
    <section
      id="compliance"
      data-testid="compliance-section"
      className="section-pad relative"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Image (dominant) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="overline mb-3" data-testid="compliance-eyebrow">
              HR &amp; Statutory Compliance
            </div>
            <h2 className="font-display text-4xl md:text-5xl mt-2 text-white leading-[1.05]">
              A single
              <br />
              <span className="vp-gold-shimmer">statutory shield.</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-md">
              Twelve enterprise-grade compliance capabilities, delivered as one.
            </p>

            <div className="mt-8">
              <PlaceholderImage
                src={IMAGES.compliance}
                alt="Compliance dashboard"
                aspect="aspect-[4/3]"
                label="Enterprise Dashboard"
                testid="compliance-image"
              />
            </div>
          </motion.div>

          {/* Compliance grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {COMPLIANCE_ITEMS.map((item, idx) => {
                const Icon = Icons[item.icon] || Icons.ShieldCheck;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: (idx % 6) * 0.04 }}
                    whileHover={{ y: -5 }}
                    className="vp-glass vp-soft-shadow rounded-2xl p-5 border border-white/10 group"
                    data-testid={`compliance-card-${idx}`}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                          boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.5)",
                        }}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="text-[10px] font-mono text-white/40">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-4 text-[10px] uppercase tracking-[0.24em] text-[#d4a843] font-bold">
                      {item.code}
                    </div>
                    <div className="mt-1 text-white font-semibold text-[15px] leading-tight">
                      {item.title}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
