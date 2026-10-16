import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@/data/content";
import { PrimaryButton } from "@/components/PremiumButton";
import logo from "@/img/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060d1e]/5 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
          <Link
           to="/"
           data-testid="brand-logo"
           className="flex items-center">
           <img
            src={logo}
            alt="Vegith Global"
            className="h-14 w-auto object-contain"
            />
          </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors group ${
                  isActive
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{
                      background: "linear-gradient(90deg,#d4a843,#f0c454)",
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton
            testid="header-cta-contact"
            href="/contact"
            onClick={() => {}}
          >
            Get in Touch
          </PrimaryButton>
        </div>

        <button
          className="lg:hidden p-2 rounded-full vp-glass"
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={20} className="text-white" />
          ) : (
            <Menu size={20} className="text-white" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#060d1e]/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `py-3 font-medium border-b border-white/5 ${
                      isActive ? "text-[#f0c454]" : "text-white"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="pt-4">
                <PrimaryButton
                  testid="mobile-cta-contact"
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Get in Touch
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
