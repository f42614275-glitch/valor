import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { F as Footer, R as RevealText } from "./Footer-BuIZw4Ek.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { a as Play } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const nhvpsLogo = "/assets/nhvps-BlCerjWP.jpeg";
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Promo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RegistrationCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function RegistrationCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-editorial pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] border border-gold/20 bg-transparent p-10 md:p-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-gold", children: "Register Your Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl leading-tight tracking-tight text-charcoal md:text-5xl", children: "Secure your place at VALOR·IGNIS." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://docs.google.com/forms/d/e/1FAIpQLSclp_X29sbpZC420kW4p21ylyYkiFlXmxNXqekD9q_PsZbFxg/viewform", target: "_blank", rel: "noopener noreferrer", className: "group inline-flex whitespace-nowrap items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-background transition duration-300 hover:scale-[1.02] hover:shadow-[0_24px_60px_-24px_oklch(0.55_0.22_38/0.6)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Register Now →" }) })
  ] }) }) });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative flex min-h-[92svh] items-end pb-20 pt-28 md:pb-28 md:pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      opacity
    }, className: "container-editorial w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.3
        }, className: "md:col-span-7 flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: nhvpsLogo, alt: "National Hill View Public School", className: "h-20 w-20 rounded-full bg-white object-contain p-1 md:h-24 md:w-24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/audio/valor_logo.jpeg", alt: "Valor Ignis", className: "h-24 w-24 rounded-full object-cover md:h-28 md:w-28 ring-1 ring-gold/40", style: {
            objectPosition: "center",
            transform: "scale(1.08)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.45
        }, className: "md:col-span-4 md:col-start-9 text-xs uppercase tracking-[0.3em] text-charcoal/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-charcoal/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-12 font-display text-[clamp(4rem,16vw,20rem)] leading-[0.82] tracking-[-0.045em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { className: "block text-gold", children: "Valor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(RevealText, { delay: 0.15, className: "block italic font-normal text-charcoal/95", children: [
          "ignis",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.9
        }, className: "md:col-span-5 max-w-md text-base text-charcoal/75 md:text-lg text-pretty", children: "An interschool business and leadership fest - a stage for strategy, instinct, and the quiet fire of ambition." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 1,
          delay: 1
        }, className: "md:col-span-3 md:col-start-10 flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-charcoal/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal/40", children: "Two Days · Seven Events" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl normal-case tracking-tight text-charcoal", children: "02 · 03 July" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.4,
      duration: 1
    }, className: "absolute bottom-8 right-6 md:right-12 text-[10px] uppercase tracking-[0.35em] text-charcoal/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll" }) })
  ] });
}
function Marquee() {
  const items = ["Leadership", "Innovation", "Strategy", "Collaboration", "Excellence", "Creativity"];
  const line = [...items, ...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-hidden": true, className: "border-y border-border/60 bg-ivory/50 py-7 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee gap-12 whitespace-nowrap font-display text-3xl italic text-charcoal/75 md:text-5xl", children: line.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
    t,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "✦" })
  ] }, i)) }) });
}
function Manifesto() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-editorial py-32 md:py-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "01 Ignis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.02] md:text-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "What will you" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal", children: "ignite?" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-charcoal/80 md:text-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-pretty", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "IGNIS" }),
        " represents the spark of ambition, innovation, and growth - qualities that lie at the heart of commerce. Just as a flame ignites transformation - commerce fuels economic progress by turning ideas into enterprises."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pretty text-charcoal/75", children: "The event symbolizes the drive to take risks, analyze markets, and create value through trade and entrepreneurship. In the world of business, success begins with a small spark - an idea, a strategy, or a vision - and grows into something impactful." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pretty font-display italic text-2xl md:text-3xl text-gold", children: "What will you ignite in the world of commerce?" })
    ] })
  ] }) });
}
function Promo() {
  const [playing, setPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.muted = false;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        v.muted = true;
        v.play().catch(() => {
        });
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-editorial pb-32 md:pb-48", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "02 The Film" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "01:24" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-100px"
    }, transition: {
      duration: 1.1,
      ease: [0.7, 0, 0.2, 1]
    }, className: "group relative block w-full overflow-hidden rounded-2xl bg-black text-left", style: {
      aspectRatio: "21/9"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: videoRef, src: "/audio/file.mp4", poster: "/audio/poster.png", controls: playing, playsInline: true, preload: "metadata", onPlay: () => setPlaying(true), className: "absolute inset-0 h-full w-full bg-black object-contain" }),
      !playing && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: start, className: "absolute inset-0 block w-full text-left", "aria-label": "Play trailer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-24 w-24 items-center justify-center rounded-full bg-gold text-background shadow-[0_20px_60px_-20px_oklch(0.55_0.22_38/0.6)] transition-transform duration-700 group-hover:scale-110 md:h-28 md:w-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-gold/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "relative ml-1 h-7 w-7 fill-current", strokeWidth: 1.5 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6 flex items-end justify-between text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.35em] text-white/70", children: "Watch the trailer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl italic md:text-4xl", children: "A glimpse of Ignis." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-[10px] uppercase tracking-[0.3em] text-white/70 md:block", children: "2026 · NHVPS" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Home as component
};
