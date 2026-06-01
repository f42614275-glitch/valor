import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as RevealText, F as Footer } from "./Footer-BuIZw4Ek.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { P as Phone, M as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const phones = [{
  name: "Vineet Srikanth",
  number: "+91 77950 38400",
  raw: "+917795038400"
}, {
  name: "Thrupthi R",
  number: "+91 86184 65279",
  raw: "+918618465279"
}];
const emails = [{
  name: "Ms. Jeevashree M R",
  role: "Social Media Coordinator",
  email: "jevashree.mr@nhvps.com"
}];
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-editorial pt-32 pb-16 md:pt-36 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-display text-[clamp(3rem,11vw,12rem)] leading-[0.9] tracking-[-0.04em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { className: "block text-gold", children: "Say" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { delay: 0.15, className: "block italic font-normal", children: "hello." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-xl text-base text-charcoal/75 md:text-lg", children: "Questions, partnerships, or registrations. Our organizing committee are a call or message away." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-editorial pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "01" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Organizing Committee" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-2", children: phones.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: `tel:${p.raw}`, initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.8,
        delay: i * 0.08,
        ease: [0.7, 0, 0.2, 1]
      }, className: "group relative overflow-hidden rounded-2xl border border-gold/30 bg-background/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:bg-background/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-charcoal/55", children: "Organizing Committee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl tracking-tight md:text-3xl", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-base text-gold md:text-lg", children: p.number })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" })
      ] }, p.raw)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-editorial pb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "02" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-6", children: emails.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: `mailto:${e.email}`, initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.8,
        delay: i * 0.08,
        ease: [0.7, 0, 0.2, 1]
      }, className: "group relative overflow-hidden rounded-2xl border border-gold/30 bg-background/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:bg-background/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-charcoal/55", children: e.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl tracking-tight md:text-3xl", children: e.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-base text-gold md:text-lg break-all", children: e.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" })
      ] }, e.email)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
