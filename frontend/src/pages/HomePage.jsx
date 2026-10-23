import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PrimaryButton, GhostButton } from "@/components/PremiumButton";
import { SERVICE_PILLARS, INDUSTRIES, IMAGES } from "@/data/content";
import Testimonials from "@/components/sections/Testimonials";
import ParallaxServices from "@/components/sections/ParallaxServices";

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <Hero />

      {/* ABOUT TEASER (Unify's "Experience the Difference") */}
      <section
        data-testid="home-about"
        className="section-pad relative"
      >
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center pb-30px">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-8px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <PlaceholderImage
                src={IMAGES.about}
                alt="Kailash Sharma, Chairman and Founder of Vegith Pinnacle Services"
                aspect="aspect-[4/3]"
                position="object-top"
                label="Since 2018"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="overline">The Vegith Pinnacle Vision</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-white leading-[1.05]">
                Commitment. <span className="vp-gold-shimmer">Dedication.</span> Delivery.
              </h2>
              <p className="mt-5 text-white/70 text-lg leading-relaxed">
              To become Leading Manpower & integrated Facility Management 
              service provider and to create an employment opportunity
               for the communities  
               </p>
              <div className="mt-8">
                <PrimaryButton href="/about" testid="home-about-cta">
                  Read Our Story
                </PrimaryButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — Unify's 4-card layered background */}
      {/* <section
        data-testid="home-services"
        className="section-pad relative"
      >
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <div className="overline">Expertise That Works</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05]">
              Professional solutions
              <br />
              <span className="vp-gold-shimmer">tailored to your needs.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {SERVICE_PILLARS.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                whileHover={{ y: -6 }}
                data-testid={`home-service-${s.key}`}
              >
                <Link to="/services" className="block group relative">
                  <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden vp-soft-shadow">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-[#0b1d3a]/70 to-[#0b1d3a]/10" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[#f0c454] font-bold">
                        0{i + 1}
                      </div>
                      <h3 className="mt-2 font-display text-3xl md:text-4xl leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-white/80 text-sm max-w-md">
                        {s.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[#f0c454] text-sm font-semibold group-hover:gap-3 transition-all">
                        Read More <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials  */}
      <ParallaxServices />

      {/* INDUSTRIES OVERVIEW */}
      <section
        data-testid="home-industries"
        className="section-pad relative"
      >
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="overline">Industries We Serve</div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-white leading-[1.05] ">
              <span className="md:whitespace-nowrap">Integrated workplace solutions</span>
              <br />
              <span className="vp-gold-shimmer">across every vertical.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -4 }}
                data-testid={`home-industry-${i}`}
              >
                <PlaceholderImage
                  src={ind.img}
                  alt={ind.name}
                  aspect="aspect-[4/3]"
                >
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h4 className="font-display text-lg md:text-xl leading-tight">
                      {ind.name}
                    </h4>
                  </div>
                </PlaceholderImage>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <GhostButton href="/industries" testid="home-industries-cta">
              View All Industries
            </GhostButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA STRIP */}
      <section
        data-testid="home-cta"
        className="section-pad relative"
      >
        <div className="container-x">
          <div
            className="rounded-[32px] p-8 md:p-14 lg:p-16 relative overflow-hidden text-white"
            style={{
              background:
                "linear-gradient(135deg, #0b1d3a 0%, #14387f 55%, #1e3a8a 100%)",
              boxShadow:
                "0 30px 80px -20px rgba(11,29,58,0.4), inset 0 0 0 1px rgba(212,168,67,0.35)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(closest-side, #f0c454, transparent)",
              }}
            />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#f0c454] font-bold">
                  Ready to partner?
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                  <span className="md:whitespace-nowrap">Seamless facility staffing solutions for</span>
                  <br />
                  <span className="vp-gold-shimmer">
                    smarter, safer, sustainable businesses.
                  </span>
                </h3>
              </div>
              <div className="lg:col-span-4 grid sm:flex lg:justify-end items-end h-full">
  <PrimaryButton href="/contact" testid="home-cta-primary" className="w-full justify-center sm:w-auto">
    Request Survey
  </PrimaryButton>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
