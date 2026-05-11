import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Fish, ChevronDown } from "lucide-react";
import { trackEvent } from "../utils/analytics";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/tutorials", label: "Tutorials" },
  { to: "/community", label: "Community" },
];

const CATEGORIES = [
  { to: "/fishing-guides", label: "Fishing Guides" },
  { to: "/camping-tips", label: "Camping Tips" },
  { to: "/outdoor-gear", label: "Outdoor Gear" },
  { to: "/lake-adventures", label: "Lake Adventures" },
  { to: "/hiking-trails", label: "Hiking Trails" },
  { to: "/survival-skills", label: "Survival Skills" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setCatsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2 glass-dark shadow-soft" : "py-4 bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link
          to="/"
          onClick={() => trackEvent("nav_click", { item: "logo" })}
          className="flex items-center gap-2 group"
          aria-label="Fishing & Outdoor Club home"
        >
          <span className="h-10 w-10 rounded-2xl bg-gradient-to-br from-forest-500 to-lake-500 grid place-items-center shadow-soft">
            <Fish size={20} className="text-earth-50" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg md:text-xl text-earth-50">
              Fishing &amp; Outdoor
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-earth-200">
              Club Magazine
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => trackEvent("nav_click", { item: n.label })}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sunset-300"
                    : "text-earth-100 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <div className="relative">
            <button
              onClick={() => setCatsOpen((v) => !v)}
              className="px-3 py-2 rounded-full text-sm font-medium text-earth-100 hover:text-white flex items-center gap-1"
              aria-expanded={catsOpen}
              aria-haspopup="menu"
            >
              Explore
              <ChevronDown size={14} className={`transition-transform ${catsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {catsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl glass-dark shadow-glass overflow-hidden"
                  role="menu"
                >
                  {CATEGORIES.map((c) => (
                    <NavLink
                      key={c.to}
                      to={c.to}
                      onClick={() => trackEvent("nav_click", { item: c.label })}
                      className="block px-5 py-3 text-sm text-earth-100 hover:bg-white/5 hover:text-white"
                      role="menuitem"
                    >
                      {c.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink
            to="/contact"
            onClick={() => trackEvent("cta_click", { item: "header_contact" })}
            className="ml-2 btn-primary text-sm"
          >
            Join the Club
          </NavLink>
        </nav>

        <button
          className="lg:hidden p-2 text-earth-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-dark"
          >
            <nav className="container-x flex flex-col py-5 gap-1" aria-label="Mobile">
              {[...NAV, ...CATEGORIES, { to: "/contact", label: "Contact" }].map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => trackEvent("nav_click", { item: n.label, mobile: true })}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium ${
                      isActive ? "bg-white/10 text-sunset-300" : "text-earth-100"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
