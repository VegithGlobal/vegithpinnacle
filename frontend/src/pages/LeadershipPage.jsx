import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Crown,
  GraduationCap,
  Briefcase,
  Sparkles,
  Award,
  ArrowUpRight,
  Quote,
  Mail,
  Linkedin,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { LEADERS, IMAGES } from "@/data/content";

function FounderCard({ leader }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[#d4a843]/25 p-6 md:p-10"
      style={{
        background:
          "linear-gradient(120deg, rgba(20,56,127,0.35) 0%, rgba(8,17,32,0.95) 55%, rgba(20,56,127,0.25) 100%)",
        boxShadow:
          "0 40px 100px -40px rgba(212,168,67,0.25), inset 0 0 0 1px rgba(212,168,67,0.08)",
      }}
    >
      {/* decorative rings */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,168,67,0.35), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,79,176,0.55), transparent 70%)",
        }}
      />

      <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Portrait */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative">
            <PlaceholderImage
              src={leader.photo}
              alt={leader.name}
              aspect="aspect-[4/5]"
              position="object-top"
              initials={leader.initials}
            />
            {/* founder badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4a843]/50"
              style={{
                background:
                  "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              <Crown size={14} className="text-[#d4a843]" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#d4a843] font-bold">
                Founder
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-7 lg:col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#d4a843]" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-[#d4a843] font-bold">
              Chairman & Founder
            </span>
          </div>

          <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
            {leader.name}
            {leader.honorific && (
              <>
                {" "}
                <span className="italic text-[#d4a843]">
                  {leader.honorific}
                </span>
              </>
            )}
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/85 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,56,127,0.55) 0%, rgba(8,17,32,0.85) 100%)",
              }}
            >
              <GraduationCap size={13} className="text-[#d4a843]" />
              {leader.qualification}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-white/85 border border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(20,56,127,0.55) 0%, rgba(8,17,32,0.85) 100%)",
              }}
            >
              <Briefcase size={13} className="text-[#d4a843]" />
              {leader.experience} Experience
            </span>
          </div>

          <div className="relative mt-6 pl-6">
            <Quote
              size={18}
              className="absolute left-0 top-1 text-[#d4a843]/60"
            />
            <p className="text-white/75 text-[15px] leading-relaxed">
              {leader.bio}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {leader.focus.map((f) => (
              <span
                key={f}
                className="text-[11px] uppercase tracking-widest text-white/60 px-3 py-1 rounded-full border border-white/10"
              >
                {f}
              </span>
            ))}
          </div>

          {(leader.linkedin || leader.email) && (
            <div className="mt-8 flex items-center gap-3">
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full w-11 h-11 justify-center text-white/70 hover:text-[#d4a843] border border-white/10 hover:border-[#d4a843]/50 transition-colors"
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <Linkedin size={15} />
                </a>
              )}
              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  className="inline-flex items-center gap-2 rounded-full w-11 h-11 justify-center text-white/70 hover:text-[#d4a843] border border-white/10 hover:border-[#d4a843]/50 transition-colors"
                  aria-label={`Email ${leader.name}`}
                >
                  <Mail size={15} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LeaderCard({ leader, index, hovered, onHover, onLeave }) {
  const isActive = hovered === index;
  return (
    <div
      data-testid={`leader-card-${index}`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 ${
        isActive
          ? "border-[#d4a843]/50 -translate-y-1"
          : "border-white/10 hover:border-[#d4a843]/30"
      }`}
      style={{
        background:
          "linear-gradient(160deg, rgba(20,56,127,0.20) 0%, rgba(8,17,32,0.95) 100%)",
        boxShadow: isActive
          ? "0 40px 80px -30px rgba(212,168,67,0.20)"
          : "0 20px 40px -25px rgba(0,0,0,0.6)",
      }}
    >
      <div className="relative">
        <PlaceholderImage
          src={leader.photo}
          alt={leader.name}
          aspect="aspect-[4/5]"
          position="object-top"
          initials={leader.initials}
        />

        {/* Name overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-[10px] uppercase tracking-[0.32em] text-[#d4a843] font-bold flex items-center gap-2">
            <Sparkles size={11} />
            {leader.role}
          </div>
          <h3 className="font-display mt-1 text-white text-xl md:text-2xl leading-tight">
            {leader.name}
          </h3>
        </div>
      </div>

      {/* Info panel */}
      <div className="p-5 md:p-6 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/75 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">
            <GraduationCap size={11} className="text-[#d4a843]" />
            {leader.qualification}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/75 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03]">
            <Briefcase size={11} className="text-[#d4a843]" />
            {leader.experience}
          </span>
        </div>

        <p className="text-white/65 text-[13px] leading-relaxed">
          {leader.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {leader.focus.map((f) => (
            <span
              key={f}
              className="text-[10px] uppercase tracking-widest text-white/50 px-2 py-0.5 rounded-full border border-white/10"
            >
              {f}
            </span>
          ))}
        </div>

        {(leader.linkedin || leader.email) && (
          <div className="mt-4 flex items-center gap-2">
            {leader.linkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                  isActive
                    ? "border-[#d4a843] text-[#d4a843] bg-[#d4a843]/10"
                    : "border-white/10 text-white/60 hover:text-[#d4a843] hover:border-[#d4a843]/50"
                }`}
                aria-label={`${leader.name} on LinkedIn`}
              >
                <Linkedin size={14} />
              </a>
            )}
            {leader.email && (
              <a
                href={`mailto:${leader.email}`}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                  isActive
                    ? "border-[#d4a843] text-[#d4a843] bg-[#d4a843]/10"
                    : "border-white/10 text-white/60 hover:text-[#d4a843] hover:border-[#d4a843]/50"
                }`}
                aria-label={`Email ${leader.name}`}
              >
                <Mail size={14} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover glow */}
      <span
        className={`pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(212,168,67,0.12), transparent 70%)",
        }}
      />
    </div>
  );
}

export default function LeadershipPage() {
  const [hovered, setHovered] = useState(null);
  const founder = LEADERS[0];
  const others = LEADERS.slice(1);

  return (
    <div data-testid="leadership-page">
      <PageHero
        eyebrow="The People Behind The Practice"
        title="Leadership grounded"
        titleGold="in decades of trust."
        tagline="A senior bench of specialists across finance, operations, technology and labour advisory — each entrusted with a discipline they have practised for years."
        breadcrumbs={[{ label: "Leadership" }]}
        // image={IMAGES.about}
        testid="leadership-hero"
      />

      {/* Founder */}
      <section className="relative pt-10 md:pt-14 pb-16 md:pb-20">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(50% 60% at 90% 20%, rgba(30,79,176,0.25) 0%, transparent 60%)",
          }}
        />
        <div className="container-x">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#d4a843]" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-[#d4a843] font-bold">
              Meet Our Founder
            </span>
          </div>
          <FounderCard leader={founder} />
        </div>
      </section>

      {/* Other leaders */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#d4a843]" />
                <span className="text-[11px] uppercase tracking-[0.32em] text-[#d4a843] font-bold">
                  Executive Leadership
                </span>
              </div>
              <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl">
                The team shaping{" "}
                <span className="italic text-[#d4a843]">
                  every engagement.
                </span>
              </h2>
            </div>
            <p className="text-white/60 text-sm md:text-base max-w-md">
              Seasoned leaders across finance, operations, technology and
              labour advisory — each accountable end-to-end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {others.map((leader, i) => (
              <LeaderCard
                key={leader.name + i}
                leader={leader}
                index={i}
                hovered={hovered}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 rounded-3xl border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background:
                "linear-gradient(120deg, rgba(20,56,127,0.4) 0%, rgba(8,17,32,0.95) 100%)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0b1d3a 0%, #14387f 100%)",
                  boxShadow: "inset 0 0 0 1px rgba(212,168,67,0.5)",
                }}
              >
                <Award size={20} className="text-[#d4a843]" />
              </div>
              <div>
                <div className="font-display text-white text-xl md:text-2xl">
                  Work with senior leadership. Directly.
                </div>
                <p className="mt-2 text-white/60 text-sm max-w-xl">
                  Every engagement is anchored by a partner-level owner — no
                  hand-offs, no dilution of accountability.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-transform hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #14387f 0%, #1e4fb0 100%)",
                boxShadow: "0 10px 30px rgba(20,56,127,0.5)",
              }}
              data-testid="leadership-cta"
            >
              Request a Meeting
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
