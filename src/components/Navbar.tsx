import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { location } = useRouterState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1], delay: 0.2 }}
      className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-ivory/70 shadow-[0_8px_30px_-12px_oklch(0.3_0.02_60/0.18)]"
            : "bg-ivory/40"
        }`}
      >
        <Link
          to="/"
          className="px-4 py-1.5 font-display text-base tracking-tight text-charcoal"
        >
          <span className="text-gold">V</span>·<span className="text-gold">I</span>
        </Link>
        <span className="mx-1 h-5 w-px bg-border" />
        {links.map((l) => {
          const active = location.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-4 py-1.5 text-sm text-charcoal/80 transition-colors hover:text-charcoal"
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gold"
                />
              )}
              <span className={`relative z-10 ${active ? "text-background font-semibold" : ""}`}>{l.label}</span>
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
