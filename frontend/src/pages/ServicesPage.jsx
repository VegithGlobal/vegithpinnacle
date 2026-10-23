import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SERVICE_PILLARS, IMAGES } from "@/data/content";

export default function ServicesPage() {
  const location = useLocation();
  const refs = useRef({});

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && refs.current[hash]) {
      refs.current[hash].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <div data-testid="services-page">
      <PageHero
        eyebrow="What we do"
        title="Professional services,"
        titleGold="tailored end-to-end."
        tagline="Four expert pillars — Staffing, Soft, Technical and Specialised — delivered as one accountable partnership."
        breadcrumbs={[{ label: "Services" }]}
        image={IMAGES.staffing}
        testid="services-hero"
      />

      {SERVICE_PILLARS.map((pillar, idx) => {
        const reverse = idx % 2 === 1;
        return (
          <section
            key={pillar.key}
            id={pillar.key}
            ref={(el) => (refs.current[pillar.key] = el)}
            className="py-16 md:py-24 relative scroll-mt-16"
            data-testid={`service-section-${pillar.key}`}
          >
            <div className="container-x">
              <div
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="lg:col-span-7 lg:[direction:ltr]"
                >
                  <div className="relative aspect-[16/11] rounded-[28px] overflow-hidden vp-soft-shadow">
                    <img
                      src={pillar.background}
                      alt={pillar.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1d3a]/70 via-[#0b1d3a]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#f0c454] font-bold">
                        0{idx + 1} · Service Pillar
                      </div>
                      <h3 className="mt-2 font-display text-3xl md:text-4xl">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="lg:col-span-5 lg:[direction:ltr]"
                >
                  <div className="overline">{pillar.tagline}</div>
                  <h2 className="font-display text-3xl md:text-4xl mt-3 text-white leading-[1.05]">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-white/70 text-lg leading-relaxed">
                    {pillar.desc}
                  </p>

                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pillar.items.map((it, i) => (
                      <li
                        key={it}
                        className="flex items-center gap-2.5 text-white/80 text-sm py-1.5"
                        data-testid={`service-${pillar.key}-item-${i}`}
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[#f0c454] shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                          }}
                        >
                          <CheckCircle2 size={12} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
