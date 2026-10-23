import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ABOUT_STATS, WHY_US, IMAGES } from "@/data/content";


const STATS_NUMERIC = [
  { value: 5000, suffix: "+", label: "Employees Deployed" },
  { value: 30, suffix: "+", label: "Enterprise Clients" },
  { value: 6, suffix: "+", label: "Years of Delivery" },
  { value: 3, suffix: "", label: "India Offices" },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="About Vegith Pinnacle"
        title="Six years of running smarter,"
        titleGold="performing better."
        tagline="A Vegith Group company delivering integrated manpower and facility management with a deep customer-centric focus since 2018."
        breadcrumbs={[{ label: "About" }]}
        testid="about-hero"
      />

      {/* STORY */}
      <section className="pb-16 md:pb-24 relative">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <PlaceholderImage
                src={IMAGES.about}
                alt="Kailash Sharma, Founder of Vegith Pinnacle Services"
                aspect="aspect-[2/3]"
                position="object-top"
                label="Est. 2018"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="overline">Our Philosophy</div>
              <br />
              <h2 className="about-Philosophy text-white/70 text-lg italic">
                "When you focus on money, you can build a company. But when you focus on people, you can build an empire!"
                <br />
                <span className="vp-gold-shimmer"> - Our Founder.</span>
              </h2>
              <div className="mt-6 space-y-4 text-white/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Welcome to Vegith Pinnacle Services Private Limited, formerly
                  known as Vegith HR Services Pvt. Ltd. — a core venture of the
                  Vegith Group (Est. 2018).
                </p>
                <p>
                  Since 2018, Vegith Pinnacle Services has emerged as a premier,
                  fast-growing support services leader within the dynamic Vegith
                  Group ecosystem. Our mission is clear: to engineer absolute
                  operational efficiency through tailor-made, business-centric
                  solutions.
                </p>
                <p>
                  We streamline enterprise operations through two core execution
                  engines: world-class Facility Management and an all-inclusive
                  Staffing &amp; Compliance Suite. Operating with a primary focus on
                  agile, high-scale Temporary Staffing, our comprehensive workforce
                  suite delivers custom manpower deployments, executive permanent
                  placements, and end-to-end Labour Compliance under one seamless
                  umbrella. We bring the practical insight, multi-disciplinary
                  talent, and dedication needed to protect your bottom line and
                  accelerate your corporate goals.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
                {["Commitment", "Dedication", "Delivery"].map((v, i) => (
                  <div
                    key={v}
                    className="vp-glass vp-soft-shadow rounded-2xl px-2 py-4 sm:p-5 text-center"
                    data-testid={`about-value-${v.toLowerCase()}`}
                  >
                    <div className="font-display vp-gold-shimmer text-2xl">
                      0{i + 1}
                    </div>
                    <div className="mt-2 text-white font-semibold text-xs sm:text-sm sm:tracking-wide break-words">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section-pad relative" data-testid="about-counters">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="overline">By the numbers</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-white leading-[1.05]">
              Consistent excellence,
              <span className="vp-gold-shimmer"> measured.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {STATS_NUMERIC.map((s, i) => (
              <div
                key={s.label}
                className="vp-glass vp-soft-shadow rounded-3xl px-4 py-6 sm:px-6 sm:py-8"
                data-testid={`about-counter-${i}`}
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-none"
                />
                <div className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white/55 font-semibold">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad relative">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="overline">Why Vegith Pinnacle</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 text-white leading-[1.05]">
              Six reasons enterprises
              <span className="vp-gold-shimmer"> stay with us.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                data-testid={`about-why-${i}`}
              >
                <PlaceholderImage
                  src={f.img}
                  alt={f.title}
                  aspect="aspect-[4/5]"
                  label={`0${i + 1}`}
                >
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-2xl leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-white/85 text-sm">{f.tagline}</p>
                  </div>
                </PlaceholderImage>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
