import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function RevealText({
  children,
  delay = 0,
  className = "",
  as: As = "span"
}) {
  const Tag = As;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: `inline-block overflow-hidden align-bottom ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      initial: { y: "110%" },
      whileInView: { y: "0%" },
      viewport: { once: true },
      transition: { duration: 1.1, ease: [0.7, 0, 0.2, 1], delay },
      className: "inline-block",
      children
    }
  ) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 mt-32 border-t border-border/60 bg-ivory/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-12 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-5xl tracking-tight md:text-7xl", children: [
          "VALOR",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "·" }),
          "IGNIS"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-sm text-muted-foreground", children: "An interschool business and leadership fest by the Class 12 students of NHVPS." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Find us on" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-5 text-charcoal/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.instagram.com/nationalhillview_rrnagar/?hl=en",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "magnetic-link",
            children: "Instagram"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 IGNIS. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Crafted with intention." })
    ] })
  ] }) });
}
export {
  Footer as F,
  RevealText as R
};
