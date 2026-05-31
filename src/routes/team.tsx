import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Placeholder } from "@/components/Placeholder";
import { RevealText } from "@/components/RevealText";
import { Footer } from "@/components/Footer";
import rishithImg from "@/assets/rishith.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — VALOR·IGNIS" },
      {
        name: "description",
        content:
          "Meet the team behind VALOR·IGNIS — event heads and the organizing committee turning ideas into experiences.",
      },
      { property: "og:title", content: "Meet the Team — VALOR·IGNIS" },
      {
        property: "og:description",
        content: "The collective of students behind the VALOR·IGNIS fest.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; img?: string };

const eventHeads: Member[] = [
  { name: "Pushya R", role: "Legacy of Ignis · Best Manager", img: "/audio/pushya.avif" },
  { name: "Mahek Pincha", role: "Legacy of Ignis · Best Manager", img: "/audio/mehak.avif" },
  { name: "Prarthana Yadav", role: "Legacy of Ignis · Best Manager", img: "/audio/prathana.avif" },
  { name: "Mihika MS", role: "Power Play · Product Launch", img: "/audio/mihika.avif" },
  { name: "Kriti Lawani", role: "Illusion of Influence · HR / PR", img: "/audio/kriti.avif" },
  { name: "Ishieta Makham", role: "Illusion of Influence · HR / PR", img: "/audio/ishieta.avif" },
  { name: "Tejal Devraj", role: "Shadow Seer · Talent Manager", img: "/audio/tejal.avif" },
  { name: "Sandeep HA", role: "Law & Order · Law Event", img: "/audio/sandeep.avif" },
  { name: "Vineet Srikanth", role: "Law & Order · Law Event", img: "/audio/vineet.avif" },
  { name: "Aarnav Raju", role: "Law & Order · Law Event", img: "/audio/aarnav.avif" },
  { name: "Rishith Reddy", role: "Capital Chaos · Mock Stock", img: rishithImg },
  { name: "Lakshya Tulsan", role: "Capital Chaos · Mock Stock", img: "/audio/lakshya.avif" },
  { name: "Vidhaan Jain", role: "Capital Chaos · Mock Stock", img: "/audio/vidhaan.avif" },
  { name: "Sammita", role: "Light of Film · Film Fest", img: "/audio/sammita.avif" },
  { name: "Advitha", role: "Light of Film · Film Fest", img: "/audio/advitha.avif" },
  { name: "Rishi", role: "Light of Film · Film Fest", img: "/audio/rishi.avif" },
];

const organizing: Member[] = [
  { name: "Mandira P Shetty", role: "Organizing Committee", img: "/audio/mandira.avif" },
  { name: "Yuthi Nandakumar", role: "Organizing Committee", img: "/audio/yuthi.avif" },
  { name: "Kushi Bharadwaj", role: "Organizing Committee", img: "/audio/kushi.avif" },
  { name: "Thrupthi R", role: "Organizing Committee", img: "/audio/thrupthi.avif" },
  { name: "Vineet Srikanth", role: "Organizing Committee", img: "/audio/vineet.avif" },
];


function TeamPage() {
  return (
    <div className="gradient-warm">
      {/* Hero */}
      <section className="container-editorial pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              The Collective · 21 Minds
            </span>
            <h1 className="mt-8 font-display text-[clamp(3.25rem,11vw,11rem)] leading-[0.88] tracking-[-0.045em]">
              <RevealText className="block">Meet the</RevealText>
              <RevealText delay={0.15} className="block italic font-normal">Team.</RevealText>
            </h1>
          </div>
          <p className="md:col-span-4 md:col-start-9 max-w-md text-base text-charcoal/75 md:text-lg text-pretty">
            A collective of passionate minds driven by creativity, ambition, and energy — working
            behind the scenes to turn ideas into experiences and make every moment of Ignis
            unforgettable.
          </p>
        </div>
      </section>

      {/* Event Heads */}
      <Section
        chapter="01"
        kicker="Event Heads"
        title={<>Architects of <span className="italic font-normal">each act.</span></>}
        caption="Seven events, seventeen leads — each one shaping a different language of leadership."
      >
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {eventHeads.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} variant="head" />
          ))}
        </div>
      </Section>

      {/* Divider */}
      <Divider />

      {/* Organizing Committee */}
      <Section
        chapter="02"
        kicker="Organizing Committee"
        title={<>The hands behind <span className="italic font-normal">the curtain.</span></>}
        caption="The quiet force that holds the schedule, the stage, and the sleepless logistics together."
      >
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {organizing.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} variant="organizer" />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Section({
  chapter,
  kicker,
  title,
  caption,
  children,
}: {
  chapter: string;
  kicker: string;
  title: React.ReactNode;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-editorial py-24 md:py-32">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
            <span>{chapter}</span>
            <span className="h-px w-10 bg-gold/50" />
            <span>{kicker}</span>
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">{title}</h2>
        </div>
        <p className="md:col-span-5 md:col-start-8 self-end max-w-md text-base text-charcoal/70 md:text-lg text-pretty">
          {caption}
        </p>
      </div>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <div className="container-editorial">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.7, 0, 0.2, 1] }}
        className="relative my-8 h-px origin-left bg-charcoal/15 md:my-16"
      >
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-cream px-4 font-display text-sm italic text-charcoal/60">
          ·
        </span>
      </motion.div>
    </div>
  );
}

function MemberCard({
  member,
  index,
  variant,
}: {
  member: Member;
  index: number;
  variant: "head" | "organizer";
}) {
  const cols = variant === "head" ? 3 : 4;
  const offset =
    variant === "head"
      ? index % cols === 1
        ? "lg:mt-16"
        : index % cols === 2
          ? "lg:mt-8"
          : ""
      : index % 2 === 1
        ? "lg:mt-12"
        : "";

  return (
    <motion.figure
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease: [0.7, 0, 0.2, 1], delay: (index % cols) * 0.06 }}
      className={`group ${offset}`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        ) : (
          <Placeholder ratio="4/5" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/[0.06]" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal/70 backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <figcaption className="mt-5">
        <h3 className="font-display text-2xl leading-tight tracking-tight md:text-[28px]">
          {member.name}
        </h3>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-charcoal/55">
          {member.role}
        </p>
      </figcaption>
    </motion.figure>
  );
}
