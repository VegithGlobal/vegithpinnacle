import { Link } from "react-router-dom";
import { Icons } from "@/lib/icons";
import { NAV_LINKS, CONTACT, SOCIAL_LINKS } from "@/data/content";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative pt-16 pb-8 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #0b1d3a 0%, #0a1830 60%, #060f22 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,168,67,0.35), transparent 70%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="font-display text-3xl text-white">
              Vegith <span className="vp-gold-shimmer">Pinnacle</span>
            </div>
            <p className="mt-3 text-white/60 max-w-md text-sm leading-relaxed">
              Integrated Manpower &amp; Facility Management, engineered for
              India&apos;s most ambitious workplaces.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.filter((s) => s.href).map((s) => {
                const Icon = Icons[s.icon] || Icons.Link;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/70 hover:text-[#d4a843] hover:border-[#d4a843]/50 transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="overline">Explore</div>
            <ul className="mt-4 grid grid-cols-2 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-block py-1.5 text-white/70 hover:text-[#f0c454] transition-colors text-sm"
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="overline">Reach Us</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-block py-1.5 break-all text-white/80 hover:text-[#f0c454] transition-colors"
                  data-testid="footer-phone"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-block py-1.5 break-all text-white/80 hover:text-[#f0c454] transition-colors"
                  data-testid="footer-email"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${CONTACT.website}`}
                  className="inline-block py-1.5 break-all text-white/80 hover:text-[#f0c454] transition-colors"
                  data-testid="footer-website"
                >
                  {CONTACT.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 select-none leading-none font-display text-white/[0.05] font-semibold tracking-tighter"
          style={{ fontSize: "clamp(64px, 14vw, 220px)" }}
          aria-hidden="true"
        >
          <span className="footer_vegith">VEGITH</span> <br></br>
          <span className="vp-gold-shimmer">PINNACLE</span>

        </div>

        <div className="mt-4 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <div data-testid="footer-copyright">
            © {new Date().getFullYear()} Vegith Pinnacle Services Pvt. Ltd. · A
            Vegith Group Company · All rights reserved.
          </div>
          <div className="uppercase tracking-[0.24em]">
            Commitment · Dedication · Delivery
          </div>
        </div>
      </div>
    </footer>
  );
}
