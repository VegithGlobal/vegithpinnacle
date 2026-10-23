import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { PrimaryButton } from "@/components/PremiumButton";
import { CONTACT, OFFICES, IMAGES } from "@/data/content";
import { toast } from "sonner";
import { sendEnquiry } from "@/lib/sendEnquiry";
// import Presence from "@/components/sections/Presence";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Staffing Services",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      const result = await sendEnquiry(form);
      if (result === "mailto") {
        toast.success(
          `Your email app has opened with your enquiry — just press Send. Or call us on ${CONTACT.phone}.`,
          { duration: 8000 }
        );
      } else {
        toast.success("Thank you — our team will reach out within 24 hours.");
      }
      setForm({
        name: "",
        email: "",
        company: "",
        interest: "Staffing Services",
        message: "",
      });
    } catch (err) {
      toast.error(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHero
        eyebrow="Contact"
        title="Let’s build the next"
        titleGold="chapter — together."
        tagline="Share your requirement — from a single-site engagement to a PAN-India deployment. A senior partner responds within one business day."
        breadcrumbs={[{ label: "Contact" }]}
        image={IMAGES.contact}
        testid="contact-hero"
      />

      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col gap-6"
            >
              <PlaceholderImage
                src={IMAGES.contact}
                alt="Vegith Pinnacle offices"
                aspect="aspect-[4/3]"
                label="Get in Touch"
                testid="contact-image"
              />

              <div className="grid sm:grid-cols-3 gap-3">
                <ContactRow
                  icon={<Phone size={16} />}
                  label="Call"
                  value={CONTACT.phone}
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  testid="contact-phone"
                />
                <ContactRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                  testid="contact-email"
                />
                <ContactRow
                  icon={<Globe size={16} />}
                  label="Web"
                  value={CONTACT.website}
                  href={`https://${CONTACT.website}`}
                  testid="contact-website"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <form
                onSubmit={submit}
                className="vp-glass vp-soft-shadow rounded-[28px] p-6 md:p-8 space-y-5 border border-white/10"
                data-testid="contact-form"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    testid="contact-input-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your name"
                  />
                  <Field
                    label="Work Email"
                    testid="contact-input-email"
                    name="email"
                    autoComplete="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@company.com"
                  />
                  <Field
                    label="Company"
                    testid="contact-input-company"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                    placeholder="Company name"
                  />
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.22em] text-white/55 mb-2 font-semibold">
                      Interested in
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) =>
                        setForm({ ...form, interest: e.target.value })
                      }
                      data-testid="contact-input-interest"
                      name="interest"
                      aria-label="Interested in"
                      className="w-full vp-dark-input border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/25 transition-all"
                    >
                      <option>Staffing Services</option>
                      <option>Facility Management</option>
                      <option>HR &amp; Statutory Compliance</option>
                      <option>Both Pillars</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.22em] text-white/55 mb-2 font-semibold">
                    Requirement
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={5}
                    data-testid="contact-input-message"
                    name="message"
                    aria-label="Requirement"
                    required
                    placeholder="Tell us about the sites, headcount and timelines…"
                    className="w-full vp-dark-input border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/25 transition-all"
                  />
                </div>

                <div className="pt-1">
                  <PrimaryButton
                    type="submit"
                    disabled={submitting}
                    testid="contact-submit"
                  >
                    {submitting ? "Sending…" : "Send Enquiry"}
                  </PrimaryButton>
                </div>
                <p className="text-white/40 text-xs">
                  By submitting this form you agree to be contacted by Vegith
                  Pinnacle regarding your enquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="pb-16 md:pb-24" data-testid="contact-offices">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <div className="overline">Our Offices</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-3 text-white leading-[1.05]">
              Three offices.
              <span className="vp-gold-shimmer"> PAN-India footprint.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="vp-glass vp-soft-shadow rounded-2xl p-6 border border-white/10"
                data-testid={`office-card-${o.city.toLowerCase()}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                      boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.5)",
                    }}
                  >
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#d4a843] font-bold">
                      {o.role}
                    </div>
                    <div className="font-display text-2xl text-white">
                      {o.city}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-white/70 text-sm leading-relaxed">
                  {o.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive India Map */}
     
    </div>
  );
}

function ContactRow({ icon, label, value, href, testid }) {
  return (
    <a
      href={href}
      data-testid={testid}
      className="flex items-center gap-3 p-4 rounded-2xl vp-glass border border-white/10 hover:border-[#d4a843] transition-all group vp-soft-shadow"
    >
      <span
        className="w-9 h-9 rounded-full text-white flex items-center justify-center shrink-0"
        style={{
          background: "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
          boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.5)",
        }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-semibold">
          {label}
        </div>
        <div className="text-white text-sm font-semibold truncate group-hover:text-[#14387f] transition-colors">
          {value}
        </div>
      </div>
    </a>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, testid, name, autoComplete, required }) {
  return (
    <div>
      <label htmlFor={testid} className="block text-[11px] uppercase tracking-[0.22em] text-white/55 mb-2 font-semibold">
        {label}
      </label>
      <input
        id={testid}
        name={name}
        autoComplete={autoComplete}
        required={required}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        className="w-full vp-dark-input border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/25 transition-all"
      />
    </div>
  );
}

