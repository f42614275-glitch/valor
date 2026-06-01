import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Placeholder } from "./Placeholder-Dkg5QSxk.mjs";
import { R as RevealText, F as Footer } from "./Footer-BuIZw4Ek.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const mockStockImg = "/assets/mock-stock-DXvlItJl.jpeg";
const shadowSeerImg = "/assets/shadow-seer-DFFUyEus.jpeg";
const shadowseerrealImg = "/assets/shadowseer-ikjPj3cV.jpeg";
const lawImg = "/assets/law-BP0uyAM_.jpeg";
const LightOfFlimImg = "/assets/LightOfFlim-GlJK7xcT.jpeg";
const HRPRImg = "/assets/HRPR-D2RuQcpv.jpeg";
const PowerPlayImg = "/assets/powerplay-bWs88hRg.jpeg";
const events = [{
  n: "01",
  name: "Legacy of Ignis",
  desc: "The ultimate Best Manager challenge - five rounds, one legacy.",
  img: shadowSeerImg,
  full: "To beat the best, you must become the best. In the BEST MANAGER event, every round, including Marketing Mayhem, Brand Battle, Red Alert, Rapid Reaction, and Press Storm, will test your limits, push your thinking, and challenge your leadership. There's no room for hesitation, no space for doubt. Sharp strategy, bold decisions, and unshakable confidence. This is where ordinary ends and excellence begins. Step in, rise to the challenge, and prove you have what it takes. Because in the end, only those who dare to ignite will leave behind a true Legacy of Ignis.",
  rules: ["This is an Individual event.", "Devices are not allowed.", "AI is strictly prohibited."]
}, {
  n: "02",
  name: "Shadow Seer",
  desc: "A strategic talent management challenge driven by instinct and judgement.",
  img: shadowseerrealImg,
  full: "In a world full of talent, only a few can recognize true potential early. Shadow Seer is a strategic event that simulates real-world talent management. This isn't just about watching from the sidelines; it's about becoming a master strategist who can spot a diamond in the rough before anyone else. Step into the shoes of an elite Talent Manager, the strategist behind the success of the world's biggest companies, sports teams, and startups. If you trust your instincts and think strategically, this is your stage. Because in the end, it's not luck. It is your judgement that defines your win.",
  rules: ["A team should consist of up to 2 members.", "Devices are allowed.", "AI is strictly prohibited."]
}, {
  n: "03",
  name: "Power Play",
  desc: "A high-energy product launch competition - where innovation meets strategy.",
  img: PowerPlayImg,
  full: "Every great breakthrough begins with a bold move and the courage to take control. In a world driven by innovation and strategy - only the strongest ideas rise above the rest. Power Play is a high-energy product launch event where ideas are not just presented, but tested, challenged, and transformed. It demands more than creativity - requiring adaptability, sharp strategy, and confidence under pressure. Lead the game, because here ideas dominate.",
  rules: ["A team can have up to 3 participants.", "Devices are allowed on both days of the event.", "AI is strictly prohibited."]
}, {
  n: "04",
  name: "Law & Order",
  desc: "A courtroom-style battle - arguments, logic, and legal strategy.",
  img: lawImg,
  full: "Law and Order is a high-pressure legal showdown where sharp minds and strong arguments take the spotlight. Participants step into the role of lawyers - taking on real-world style cases and going head-to-head in intense courtroom battles. As the event moves forward, the rounds get tougher - with courtroom trials, legal twists, and unexpected challenges that force participants to adapt, argue, and outthink their opponents. Every move matters - whether it's countering arguments or making the right call at the right time. In the end, the teams that stay consistent, think smart, and perform when it counts will rise.",
  rules: ["A team can have up to 2 members.", "Devices are allowed.", "AI is ALLOWED."]
}, {
  n: "05",
  name: "Illusion of Influence",
  desc: "A communication-focused challenge - HR, PR, and Mad Ads.",
  img: HRPRImg,
  full: "The greatest enemy of communication is the illusion of it. In a world where perception defines power - this event unfolds across three intense rounds. The first, HR - challenges participants to resolve complex workplace conflicts through sharp judgment and strategic thinking. The second, PR - throws them into high-stakes crisis management where every decision shapes public perception. The final, Mad Ads - demands bold creativity to craft compelling campaigns from the unexpected. Only those who master communication, creativity, and pressure will rise above the illusion and seize true influence.",
  rules: ["A team can only have 2 participants.", "Devices are allowed only on day 2 of the event.", "AI is strictly prohibited."]
}, {
  n: "06",
  name: "Capital Chaos",
  desc: "A fast-paced stock market simulation - every decision can make or break you.",
  img: mockStockImg,
  full: "Capital Chaos is not just a game - it's a battlefield of markets where every decision can make or break you. Step into the role of an investor and face the thrill of real-time trading - where prices shift without warning and news can change everything in an instant. From intense rounds that test your speed, awareness, and instincts - to high-pressure scenarios of market crashes and risky gambles, the stakes only rise. There are no second chances. In the end, only the sharpest minds and strongest strategies will survive the chaos and claim victory.",
  rules: ["A team can consist of up to 2 members.", "Devices are allowed.", "AI is strictly prohibited."]
}, {
  n: "07",
  name: "Light of Film",
  desc: "A cinematic storytelling event - creativity and filmmaking collide.",
  img: LightOfFlimImg,
  full: "Across two thrilling days, the Film Fest celebrates creativity, storytelling, and cinematic skill. In Round 1, teams craft and submit a 3 to 5 minute short film based on a selected theme. Day 1 brings evaluation, where standout entries are shortlisted for screening. On Day 2, finalists face a high-pressure one-shot film challenge with a surprise theme. Armed with their own devices, they race against time. Only the most powerful storytellers will succeed.",
  rules: ["A team can have a maximum of 4 members.", "Devices are allowed on Day 2 of the event.", "AI is strictly prohibited."]
}];
function EventsPage() {
  const [active, setActive] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-editorial pt-32 pb-16 md:pt-36 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "The Programme · 07 Acts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-display text-[clamp(3rem,11vw,12rem)] leading-[0.9] tracking-[-0.04em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { className: "block text-gold", children: "The" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { delay: 0.15, className: "block italic font-normal", children: "Events." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-xl text-base text-charcoal/75 md:text-lg", children: "Seven curated experiences each a different stage for ambition, instinct and craft. Pick the one that fits the kind of leader you intend to become." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-editorial pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: events.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventRow, { event: e, index: i, onRegister: () => setActive(e) }, e.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsxRuntimeExports.jsx(EventModal, { event: active, onClose: () => setActive(null) }) })
  ] });
}
function EventRow({
  event,
  index,
  onRegister
}) {
  const isReverse = index % 2 === 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
    opacity: 0,
    y: 60
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-100px"
  }, transition: {
    duration: 1.1,
    ease: [0.7, 0, 0.2, 1]
  }, className: "group grid grid-cols-1 gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `md:col-span-5 ${isReverse ? "md:order-2 md:col-start-8" : ""}`, children: event.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: event.img, alt: event.name, loading: "lazy", className: "aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.015]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Placeholder, { ratio: "4/3", label: event.n, className: "transition-transform duration-700 group-hover:scale-[1.015]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `md:col-span-6 ${isReverse ? "md:order-1 md:col-start-1" : "md:col-start-7"} flex flex-col justify-between`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-6 text-xs uppercase tracking-[0.3em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: event.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Event" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl", children: event.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base text-charcoal/75 md:text-lg text-pretty", children: event.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onRegister, className: "magnetic-link text-sm uppercase tracking-[0.25em] text-gold", children: "Register now →" }) })
    ] })
  ] });
}
function EventModal({
  event,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, transition: {
    duration: 0.35
  }, className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: onClose, className: "absolute inset-0 bg-black/80 backdrop-blur-md", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40,
      scale: 0.96
    }, animate: {
      opacity: 1,
      y: 0,
      scale: 1
    }, exit: {
      opacity: 0,
      y: 30,
      scale: 0.97
    }, transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.2, 1]
    }, className: "relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-[0_30px_120px_-30px_oklch(0.55_0.22_38/0.6)]", role: "dialog", "aria-modal": "true", "aria-label": event.name, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/60 text-foreground/80 transition-colors hover:text-gold", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[85vh] overflow-y-auto px-7 pb-8 pt-10 md:px-12 md:pb-12 md:pt-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4 text-[11px] uppercase tracking-[0.35em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: event.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Event Brief" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl", children: event.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-foreground/80 md:text-lg text-pretty", children: event.full }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border/60 bg-background/40 p-5 md:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-gold", children: "Rules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-foreground/80 md:text-base", children: event.rules.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
          ] }, r)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://docs.google.com/forms/d/e/1FAIpQLSclp_X29sbpZC420kW4p21ylyYkiFlXmxNXqekD9q_PsZbFxg/viewform", target: "_blank", rel: "noopener noreferrer", className: "group relative mt-10 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-background transition-transform duration-300 hover:scale-[1.01] md:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Register Now →" })
        ] })
      ] })
    ] })
  ] });
}
export {
  EventsPage as component
};
