import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as Placeholder } from "./Placeholder-Dkg5QSxk.mjs";
import { R as RevealText, F as Footer } from "./Footer-BuIZw4Ek.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const rishithImg = "/assets/rishith-D5s1pWY4.jpeg";
const eventHeads = [{
  name: "Pushya R",
  role: "Legacy of Ignis · Best Manager",
  img: "/audio/pushya.avif"
}, {
  name: "Mahek Pincha",
  role: "Legacy of Ignis · Best Manager",
  img: "/audio/mehak.avif"
}, {
  name: "Prarthana Yadav",
  role: "Legacy of Ignis · Best Manager",
  img: "/audio/prathana.avif"
}, {
  name: "Mihika MS",
  role: "Power Play · Product Launch",
  img: "/audio/mihika.avif"
}, {
  name: "Kriti Lawani",
  role: "Illusion of Influence · HR / PR",
  img: "/audio/kriti.avif"
}, {
  name: "Ishieta Makham",
  role: "Illusion of Influence · HR / PR",
  img: "/audio/ishieta.avif"
}, {
  name: "Tejal Devraj",
  role: "Shadow Seer · Talent Manager",
  img: "/audio/tejal.avif"
}, {
  name: "Sandeep HA",
  role: "Law & Order · Law Event",
  img: "/audio/sandeep.avif"
}, {
  name: "Vineeth Shreekanth",
  role: "Law & Order · Law Event",
  img: "/audio/vineet.avif"
}, {
  name: "Aarnav Raju",
  role: "Law & Order · Law Event",
  img: "/audio/aarnav.avif"
}, {
  name: "Rishith Reddy",
  role: "Capital Chaos · Mock Stock",
  img: rishithImg
}, {
  name: "Lakshya Tulsan",
  role: "Capital Chaos · Mock Stock",
  img: "/audio/lakshya.avif"
}, {
  name: "Vidhaan Jain",
  role: "Capital Chaos · Mock Stock",
  img: "/audio/vidhaan.avif"
}, {
  name: "Sammita",
  role: "Light of Film · Film Fest",
  img: "/audio/sammita.avif"
}, {
  name: "Advitha",
  role: "Light of Film · Film Fest",
  img: "/audio/advitha.avif"
}, {
  name: "Rishi",
  role: "Light of Film · Film Fest",
  img: "/audio/rishi.avif"
}];
const organizing = [{
  name: "Mandira P Shetty",
  role: "Organizing Committee",
  img: "/audio/mandira.avif"
}, {
  name: "Yuthi Nandakumar",
  role: "Organizing Committee",
  img: "/audio/yuthi.avif"
}, {
  name: "Kushi Bharadwaj",
  role: "Organizing Committee",
  img: "/audio/kushi.avif"
}, {
  name: "Thrupthi R",
  role: "Organizing Committee",
  img: "/audio/thrupthi.avif"
}, {
  name: "Vineeth Shreekanth",
  role: "Organizing Committee",
  img: "/audio/vineet.avif"
}];
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-editorial pt-32 pb-20 md:pt-36 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "The Collective · 21 Minds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-display text-[clamp(3.25rem,11vw,11rem)] leading-[0.88] tracking-[-0.045em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { className: "block", children: "Meet the" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RevealText, { delay: 0.15, className: "block italic font-normal", children: "Team." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-4 md:col-start-9 max-w-md text-base text-charcoal/75 md:text-lg text-pretty", children: "A collective of passionate minds driven by creativity, ambition, and energy working behind the scenes to turn ideas into experiences and make every moment of Ignis unforgettable." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { chapter: "01", kicker: "Event Heads", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Architects of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal", children: "each act." })
    ] }), caption: "Seven events, seventeen leads each one shaping a different language of leadership.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3", children: eventHeads.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemberCard, { member: m, index: i, variant: "head" }, m.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { chapter: "02", kicker: "Organizing Committee", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "The hands behind ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal", children: "the curtain." })
    ] }), caption: "The quiet force that holds the schedule, the stage, and the sleepless logistics together.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4", children: organizing.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MemberCard, { member: m, index: i, variant: "organizer" }, m.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Section({
  chapter,
  kicker,
  title,
  caption,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-editorial py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: chapter }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kicker })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-5xl leading-[1.02] md:text-6xl", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "md:col-span-5 md:col-start-8 self-end max-w-md text-base text-charcoal/70 md:text-lg text-pretty", children: caption })
    ] }),
    children
  ] });
}
function Divider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-editorial", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    scaleX: 0
  }, whileInView: {
    scaleX: 1
  }, viewport: {
    once: true
  }, transition: {
    duration: 1.4,
    ease: [0.7, 0, 0.2, 1]
  }, className: "relative my-8 h-px origin-left bg-charcoal/15 md:my-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 left-1/2 -translate-x-1/2 bg-cream px-4 font-display text-sm italic text-charcoal/60", children: "·" }) }) });
}
function MemberCard({
  member,
  index,
  variant
}) {
  const cols = variant === "head" ? 3 : 4;
  const offset = variant === "head" ? index % cols === 1 ? "lg:mt-16" : index % cols === 2 ? "lg:mt-8" : "" : index % 2 === 1 ? "lg:mt-12" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { initial: {
    opacity: 0,
    y: 36
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: 0.95,
    ease: [0.7, 0, 0.2, 1],
    delay: index % cols * 0.06
  }, className: `group ${offset}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl", children: [
      member.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.img, alt: member.name, loading: "lazy", className: "aspect-[4/5] w-full rounded-2xl object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Placeholder, { ratio: "4/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/[0.06]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal/70 backdrop-blur", children: String(index + 1).padStart(2, "0") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl leading-tight tracking-tight md:text-[28px]", children: member.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] uppercase tracking-[0.2em] text-charcoal/55", children: member.role })
    ] })
  ] });
}
export {
  TeamPage as component
};
