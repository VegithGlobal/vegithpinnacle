import { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "@/lib/icons";
import { ChevronDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { COMPLIANCE_PILLARS, IMAGES } from "@/data/content";

function ComplianceCard({ item, index, isOpen, onToggle }) {
  const Icon = Icons[item.icon] || ShieldCheck;

  return (
    <div
      data-testid={`compliance-card-${index}`}
      className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer ${
        isOpen
          ? "border-[#d4a843]/50"
          : "border-white/10 hover:border-[#d4a843]/40"
      }`}
      style={{
        background: isOpen
          ? "linear-gradient(160deg, rgba(20,56,127,0.35) 0%, rgba(10,22,40,0.9) 100%)"
          : "linear-gradient(160deg, rgba(20,56,127,0.18) 0%, rgba(8,17,32,0.85) 100%)",
        boxShadow: isOpen
          ? "0 20px 50px -20px rgba(212,168,67,0.25), inset 0 0 0 1px rgba(212,168,67,0.15)"
          : "0 10px 30px -20px rgba(0,0,0,0.6)",
      }}
      onClick={onToggle}
    >
      {/* subtle top gold line on hover/open */}
      <span
        className={`absolute top-0 left-6 right-6 h-px transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-70"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, #d4a843, transparent)",
        }}
      />

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
              boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.5)",
            }}
          >
            <Icon size={20} className="text-[#d4a843]" />
          </div>
          <span className="text-[11px] font-mono text-white/30 mt-1">
            {item.number}
          </span>
        </div>

        <div className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[#d4a843] font-bold">
          {item.code}
        </div>
        <h3 className="mt-2 font-display text-white font-semibold text-lg leading-snug">
          {item.title}
        </h3>
        <p className="mt-3 text-white/60 text-sm leading-relaxed">
          {item.short}
        </p>

        {/* Expanded content */}
        <div
          className={`grid transition-all duration-500 ease-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-5"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-5 border-t border-white/10">
              <p className="text-white/75 text-[13px] leading-relaxed">
                {item.description}
              </p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-white/70 text-[13px]"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#d4a843] mt-0.5 flex-shrink-0"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
            {isOpen ? "Click to collapse" : "Click to explore"}
          </span>
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${
              isOpen ? "rotate-180 bg-[#d4a843]/15" : "bg-white/5"
            }`}
          >
            <ChevronDown
              size={14}
              className={isOpen ? "text-[#d4a843]" : "text-white/60"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CompliancePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex((cur) => (cur === idx ? null : idx));
  };

  return (
    <div data-testid="compliance-page">
      <PageHero
        eyebrow="HR & Statutory Compliance"
        title="In-House Labour &"
        titleGold="Payroll Compliance."
        tagline="We insulate your enterprise from legal risks. Our specialized, in-house team handles the entire lifecycle of statutory regulations, employee welfare, and taxation."
        breadcrumbs={[{ label: "Compliance" }]}
        image={IMAGES.compliance}
        testid="compliance-hero"
      />

      {/* Main content */}
      <section className="pt-10 md:pt-14 pb-20 md:pb-28 relative">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, rgba(20,56,127,0.35) 0%, transparent 60%)",
          }}
        />
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: Image + What you get */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <PlaceholderImage
                src={IMAGES.compliance}
                alt="Compliance dashboard"
                aspect="aspect-[4/5]"
                label="Enterprise Dashboard"
              />

              <div
                className="rounded-2xl p-6 border border-white/10"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(20,56,127,0.25) 0%, rgba(8,17,32,0.85) 100%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[#d4a843]" />
                  <span className="text-[10px] uppercase tracking-[0.32em] text-[#d4a843] font-bold">
                    What you get
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-white/75 text-sm">
                  {[
                    "Single-window statutory ownership",
                    "On-time monthly ECR & challan cycle",
                    "End-to-end claims handling",
                    "Inspection representation, PAN-India",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2
                        size={15}
                        className="text-[#d4a843] mt-0.5 flex-shrink-0"
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6 border border-[#d4a843]/25"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(212,168,67,0.10) 0%, rgba(20,56,127,0.25) 100%)",
                }}
              >
                <div className="font-display text-2xl text-white leading-tight">
                  Audit-ready.
                  <span className="italic text-[#d4a843]"> Always.</span>
                </div>
                <p className="mt-3 text-white/65 text-sm leading-relaxed">
                  Six pillars of in-house compliance, delivered as one
                  accountable partnership.
                </p>
              </div>
            </aside>

            {/* RIGHT: 6 cards */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-[#d4a843]" />
                  <span className="text-[11px] uppercase tracking-[0.32em] text-[#d4a843] font-bold">
                    Six Core Pillars
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-white/40">
                  Tap any card
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                {COMPLIANCE_PILLARS.map((item, idx) => (
                  <ComplianceCard
                    key={item.code}
                    item={item}
                    index={idx}
                    isOpen={openIndex === idx}
                    onToggle={() => handleToggle(idx)}
                  />
                ))}
              </div>

              {/* CTA */}
              <div
                className="mt-10 rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(20,56,127,0.35) 0%, rgba(8,17,32,0.9) 100%)",
                }}
              >
                <div>
                  <div className="font-display text-white text-xl md:text-2xl">
                    Ready to consolidate your compliance?
                  </div>
                  <p className="mt-2 text-white/60 text-sm max-w-xl">
                    Talk to our in-house team about a tailored statutory
                    framework for your organisation.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-transform hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #14387f 0%, #1e4fb0 100%)",
                    boxShadow: "0 10px 30px rgba(20,56,127,0.5)",
                  }}
                  data-testid="compliance-cta"
                >
                  Schedule a Consultation
                  <Icons.ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
