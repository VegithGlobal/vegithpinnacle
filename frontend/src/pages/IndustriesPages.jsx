import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { CLIENT_CATEGORIES, CLIENT_TAGS } from "@/data/content";

export default function ClientsPage() {
  return (
    <div data-testid="clients-page">
      <PageHero
        eyebrow="Our Clients"
        title="A quiet portfolio of"
        titleGold="ambitious brands."
        tagline="Enterprises that treat workforce and facility excellence as a strategic advantage."
        breadcrumbs={[{ label: "Industries" }]}
        testid="clients-hero"
      />

      {/* Category grid */}
      <section className="pb-16 md:pb-20" data-testid="client-categories">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {CLIENT_CATEGORIES.map((c, i) => (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -6 }}
                data-testid={`client-category-${c.key}`}
              >
                <PlaceholderImage
                  src={c.img}
                  alt={c.label}
                  aspect="aspect-[4/3]"
                >
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
                    <h3 className="font-display text-xl md:text-2xl leading-tight">
                      {c.label}
                    </h3>
                  </div>
                </PlaceholderImage>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="pb-24 md:pb-32">
        <div className="container-x mb-8">
          <div className="overline">Trusted by</div>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-white leading-[1.05]">
            Enterprises across
            <span className="vp-gold-shimmer"> every scale.</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(90deg, #060d1e 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(270deg, #060d1e 0%, transparent 100%)",
            }}
          />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap"
            data-testid="clients-marquee"
          >
            {[...CLIENT_TAGS, ...CLIENT_TAGS].map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="vp-glass vp-soft-shadow rounded-2xl px-6 py-4 border border-white/10 flex items-center gap-3 shrink-0"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "linear-gradient(135deg,#d4a843,#f0c454)",
                  }}
                />
                <span className="text-white font-semibold text-sm tracking-wide">
                  {c}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="container-x mt-8">
          <p className="text-white/45 text-sm italic">
            Client references available on request under NDA.
          </p>
        </div>
      </section>
    </div>
  );
}
