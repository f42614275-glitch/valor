import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Placeholder } from "@/components/Placeholder";
import { RevealText } from "@/components/RevealText";
import { Footer } from "@/components/Footer";
import mockStockImg from "@/assets/mock-stock.jpeg";
import shadowSeerImg from "@/assets/shadow-seer.jpeg";
import lawImg from "@/assets/law.jpeg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — VALOR·IGNIS" },
      {
        name: "description",
        content:
          "Seven curated events at VALOR·IGNIS — markets, courtrooms, campaigns, films and more.",
      },
      { property: "og:title", content: "Events — VALOR·IGNIS" },
      {
        property: "og:description",
        content: "Seven curated events: Capital Chaos, Shadow Seer, Light of Film, Law & Order and more.",
      },
    ],
  }),
  component: EventsPage,
});

type EventItem = {
  n: string;
  name: string;
  desc: string;
  full: string;
  rules: string[];
  img?: string;
};

const events: EventItem[] = [
   {
    n: "01",
    name: "Legacy of Ignis",
    desc: "The ultimate Best Manager challenge - five rounds, one legacy.",
     img: shadowSeerImg,
    full:
      "To beat the best, you must become the best. In the BEST MANAGER event, every round — Marketing Mayhem, Brand Battle, Red Alert, Rapid Reaction, and Press Storm — will test your limits, push your thinking, and challenge your leadership. There's no room for hesitation, no space for doubt. Sharp strategy, bold decisions, and unshakable confidence. This is where ordinary ends and excellence begins. Step in, rise to the challenge, and prove you have what it takes. Because in the end, only those who dare to ignite will leave behind a true Legacy of Ignis.",
    rules: [
      "This is an Individual event.",
      "Devices are not allowed.",
      "AI is strictly prohibited.",
    ],
  },
  {
    n: "02",
    name: "Shadow Seer",
    desc: "A strategic talent management challenge driven by instinct and judgement.",
    full:
      "In a world full of talent, only a few can recognize true potential early. Shadow Seer is a strategic event that simulates real-world talent management. This isn't just about watching from the sidelines; it's about becoming a master strategist who can spot a diamond in the rough before anyone else. Step into the shoes of an elite Talent Manager — the strategist behind the success of the world's biggest companies, sports teams, and startups. If you trust your instincts and think strategically, this is your stage. Because in the end, it's not luck — it's your judgement that defines your win.",
    rules: [
      "A team should consist of up to 2 members.",
      "Devices are allowed.",
      "AI is strictly prohibited.",
    ],
  },
  {
    n: "03",
    name: "Power Play",
    desc: "A high-energy product launch competition where innovation meets strategy.",
    full:
      "Every great breakthrough begins with a bold move and the courage to take control. In a world driven by innovation and strategy, only the strongest ideas rise above the rest. Power Play is a high-energy product launch event where ideas are not just presented, but tested, challenged, and transformed. It demands more than creativity, requiring adaptability, sharp strategy, and confidence under pressure. Lead the game, because here ideas dominate.",
    rules: [
      "A team can have up to 3 participants.",
      "Devices are allowed on both days of the event.",
      "AI is strictly prohibited.",
    ],
  },
  {
    n: "04",
    name: "Law & Order",
    desc: "A courtroom-style battle of arguments, logic, and legal strategy.",
    img: lawImg,
    full:
      "Law and Order is a high-pressure legal showdown where sharp minds and strong arguments take the spotlight. Participants step into the role of lawyers, taking on real-world style cases and going head-to-head in intense courtroom battles. As the event moves forward, the rounds get tougher — courtroom trials, legal twists, and unexpected challenges that force participants to adapt, argue, and outthink their opponents. Every move matters, whether it's countering arguments or making the right call at the right time. In the end, the teams that stay consistent, think smart, and perform when it counts will rise.",
    rules: [
      "A team can have up to 2 members.",
      "Devices are allowed.",
      "AI is ALLOWED.",
    ],
  },
  {
    n: "05",
    name: "Illusion of Influence",
    desc: "A communication-focused challenge across HR, PR, and Mad Ads.",
    full:
      "The greatest enemy of communication is the illusion of it. In a world where perception defines power, this event unfolds across three intense rounds. The first, HR, challenges participants to resolve complex workplace conflicts through sharp judgment and strategic thinking. The second, PR, throws them into high-stakes crisis management where every decision shapes public perception. The final, Mad Ads, demands bold creativity to craft compelling campaigns from the unexpected. Only those who master communication, creativity, and pressure will rise above the illusion and seize true influence.",
    rules: [
      "A team can only have 2 participants.",
      "Devices are allowed only on day 2 of the event.",
      "AI is strictly prohibited.",
    ],
  },
  {
  n: "06",
    name: "Capital Chaos",
    desc: "A fast-paced stock market simulation where every decision can make or break you.",
    img: mockStockImg,
    full:
      "Capital Chaos is not just a game; it's a battlefield of markets where every decision can make or break you. Step into the role of an investor and face the thrill of real-time trading, where prices shift without warning and news can change everything in an instant. From intense rounds that test your speed, awareness, and instincts, to high-pressure scenarios of market crashes and risky gambles, the stakes only rise. There are no second chances. In the end, only the sharpest minds and strongest strategies will survive the chaos and claim victory.",
    rules: [
      "A team can consist of up to 2 members.",
      "Devices are allowed.",
      "AI is strictly prohibited.",
    ],
  },
 {
    n: "07",
    name: "Light of Film",
    desc: "A cinematic storytelling event where creativity and filmmaking collide.",
    full:
      "Across two thrilling days, the Film Fest celebrates creativity, storytelling, and cinematic skill. In Round 1, teams craft and submit a 3–5 minute short film based on a selected theme. Day 1 brings evaluation, where standout entries are shortlisted for screening. On Day 2, finalists face a high-pressure one-shot film challenge with a surprise theme. Armed with their own devices, they race against time. Only the most powerful storytellers will succeed.",
    rules: [
      "A team can have a maximum of 4 members.",
      "Devices are allowed on Day 2 of the event.",
      "AI is strictly prohibited.",
    ],
  },
];

function EventsPage() {
  const [active, setActive] = useState<EventItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div className="gradient-warm">
      <section className="container-editorial pt-32 pb-16 md:pt-36 md:pb-20">
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          The Programme · 07 Acts
        </span>
        <h1 className="mt-8 font-display text-[clamp(3rem,11vw,12rem)] leading-[0.9] tracking-[-0.04em]">
          <RevealText className="block text-gold">The</RevealText>
          <RevealText delay={0.15} className="block italic font-normal">Events.</RevealText>
        </h1>
        <p className="mt-10 max-w-xl text-base text-charcoal/75 md:text-lg">
          Seven curated experiences each a different stage for ambition, instinct and craft. Pick
          the one that fits the kind of leader you intend to become.
        </p>
      </section>

      <section className="container-editorial pb-32">
        <div className="flex flex-col">
          {events.map((e, i) => (
            <EventRow key={e.name} event={e} index={i} onRegister={() => setActive(e)} />
          ))}
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {active && <EventModal event={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}

function EventRow({
  event,
  index,
  onRegister,
}: {
  event: EventItem;
  index: number;
  onRegister: () => void;
}) {
  const isReverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
      className="group grid grid-cols-1 gap-8 border-t border-border py-14 md:grid-cols-12 md:gap-12 md:py-20"
    >
      <div className={`md:col-span-5 ${isReverse ? "md:order-2 md:col-start-8" : ""}`}>
        {event.img ? (
          <img
            src={event.img}
            alt={event.name}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          />
        ) : (
          <Placeholder ratio="4/3" label={event.n} className="transition-transform duration-700 group-hover:scale-[1.015]" />
        )}
      </div>
      <div className={`md:col-span-6 ${isReverse ? "md:order-1 md:col-start-1" : "md:col-start-7"} flex flex-col justify-between`}>
        <div>
          <div className="flex items-baseline gap-6 text-xs uppercase tracking-[0.3em] text-gold">
            <span>{event.n}</span>
            <span className="h-px flex-1 bg-border" />
            <span>Event</span>
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
            {event.name}
          </h2>
          <p className="mt-6 max-w-md text-base text-charcoal/75 md:text-lg text-pretty">
            {event.desc}
          </p>
        </div>
        <div className="mt-10">
          <button
            type="button"
            onClick={onRegister}
            className="magnetic-link text-sm uppercase tracking-[0.25em] text-gold"
          >
            Register now →
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function EventModal({ event, onClose }: { event: EventItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-[0_30px_120px_-30px_oklch(0.55_0.22_38/0.6)]"
        role="dialog"
        aria-modal="true"
        aria-label={event.name}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/60 text-foreground/80 transition-colors hover:text-gold"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto px-7 pb-8 pt-10 md:px-12 md:pb-12 md:pt-14">
          <div className="flex items-baseline gap-4 text-[11px] uppercase tracking-[0.35em] text-gold">
            <span>{event.n}</span>
            <span className="h-px w-10 bg-gold/40" />
            <span>Event Brief</span>
          </div>
          <h3 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            {event.name}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg text-pretty">
            {event.full}
          </p>

          <div className="mt-8 rounded-2xl border border-border/60 bg-background/40 p-5 md:p-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Rules</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80 md:text-base">
              {event.rules.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSclp_X29sbpZC420kW4p21ylyYkiFlXmxNXqekD9q_PsZbFxg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-background transition-transform duration-300 hover:scale-[1.01] md:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Register Now →</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
