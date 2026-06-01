import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { Footer } from "@/components/Footer";
// use public asset for the valor logo
// src is set to the public path below instead of importing from src/assets
import nhvpsLogo from "@/assets/nhvps.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VALOR·IGNIS | An interschool business & leadership fest" },
      {
        name: "description",
        content:
          "An interschool business and leadership fest by the Class 12 students of NHVPS. Where strategy meets creativity.",
      },
      { property: "og:title", content: "VALOR·IGNIS" },
      {
        property: "og:description",
        content: "An interschool business and leadership fest by the Class 12 students of NHVPS.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="gradient-warm">
      <Hero />
      <Marquee />
      <Manifesto />
      <Promo />
      <RegistrationCTA />
      <Footer />
    </div>
  );
}

function RegistrationCTA() {
  return (
    <section className="container-editorial pb-32">
      <div className="rounded-[2rem] border border-gold/20 bg-transparent p-10 md:p-14">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Register Your Team</p>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-charcoal md:text-5xl">
              Secure your place at VALOR·IGNIS.
            </h2>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSclp_X29sbpZC420kW4p21ylyYkiFlXmxNXqekD9q_PsZbFxg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex whitespace-nowrap items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-background transition duration-300 hover:scale-[1.02] hover:shadow-[0_24px_60px_-24px_oklch(0.55_0.22_38/0.6)]"
          >
            <span className="relative">Register Now →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[92svh] items-end pb-20 pt-28 md:pb-28 md:pt-32">
      <motion.div style={{ y, opacity }} className="container-editorial w-full">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-7 flex items-center gap-5"
          >
            <img
              src={nhvpsLogo}
              alt="National Hill View Public School"
              className="h-20 w-20 rounded-full bg-white object-contain p-1 md:h-24 md:w-24"
            />
            <span className="h-px w-8 bg-gold/60" />
            <img
              src="/audio/valor_logo.jpeg"
              alt="Valor Ignis"
              className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28 ring-1 ring-gold/40"
              style={{ objectPosition: "center", transform: "scale(1.08)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="md:col-span-4 md:col-start-9 text-xs uppercase tracking-[0.3em] text-charcoal/60"
          >
            <span className="block text-charcoal/40"></span>
            <span className="mt-1 block"></span>
          </motion.div>
        </div>

        <h1 className="mt-12 font-display text-[clamp(4rem,16vw,20rem)] leading-[0.82] tracking-[-0.045em]">
          <RevealText className="block text-gold">Valor</RevealText>
          <RevealText delay={0.15} className="block italic font-normal text-charcoal/95">
            ignis<span className="text-gold">.</span>
          </RevealText>
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="md:col-span-5 max-w-md text-base text-charcoal/75 md:text-lg text-pretty"
          >
            An interschool business and leadership fest - a stage for strategy, instinct,
            and the quiet fire of ambition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:col-span-3 md:col-start-10 flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-charcoal/60"
          >
            <span className="text-charcoal/40">Two Days · Seven Events</span>
            <span className="font-display text-2xl normal-case tracking-tight text-charcoal">
              02 · 03 July
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 text-[10px] uppercase tracking-[0.35em] text-charcoal/50"
      >
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Leadership", "Innovation", "Strategy", "Collaboration", "Excellence", "Creativity"];
  const line = [...items, ...items, ...items, ...items];
  return (
    <section aria-hidden className="border-y border-border/60 bg-ivory/50 py-7 overflow-hidden">
      <div className="marquee gap-12 whitespace-nowrap font-display text-3xl italic text-charcoal/75 md:text-5xl">
        {line.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="container-editorial py-32 md:py-48">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">01 Ignis</span>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
            <span className="text-gold">What will you</span> <br />
            <span className="italic font-normal">ignite?</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-charcoal/80 md:text-xl">
          <p className="text-pretty">
            <span className="text-gold">IGNIS</span> represents the spark of ambition, innovation, and growth - qualities that lie at the heart of commerce. Just as a flame ignites transformation - commerce fuels economic progress by turning ideas into enterprises.
          </p>
          <p className="text-pretty text-charcoal/75">
            The event symbolizes the drive to take risks, analyze markets, and create value through
            trade and entrepreneurship. In the world of business, success begins with a small spark - an idea, a strategy, or a vision - and grows into something impactful.
          </p>
          <p className="text-pretty font-display italic text-2xl md:text-3xl text-gold">
            What will you ignite in the world of commerce?
          </p>
        </div>
      </div>
    </section>
  );
}

function Promo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.muted = false;
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        // Autoplay/audio policy fallback — try muted
        v.muted = true;
        v.play().catch(() => {});
      });
    }
  };

  return (
    <section className="container-editorial pb-32 md:pb-48">
      <div className="mb-8 flex items-end justify-between">
        <span className="text-xs uppercase tracking-[0.3em] text-gold">02 The Film</span>
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">01:24</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
        className="group relative block w-full overflow-hidden rounded-2xl bg-black text-left"
        style={{ aspectRatio: "21/9" }}
      >
        <video
          ref={videoRef}
          src="/audio/file.mp4"
          poster="/audio/poster.jpg"
          controls={playing}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          className="absolute inset-0 h-full w-full bg-black object-contain"
        />
        {!playing && (
          <button
            type="button"
            onClick={start}
            className="absolute inset-0 block w-full text-left"
            aria-label="Play trailer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gold text-background shadow-[0_20px_60px_-20px_oklch(0.55_0.22_38/0.6)] transition-transform duration-700 group-hover:scale-110 md:h-28 md:w-28">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
                <Play className="relative ml-1 h-7 w-7 fill-current" strokeWidth={1.5} />
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-white/70">Watch the trailer</div>
                <div className="mt-1 font-display text-2xl italic md:text-4xl">A glimpse of Ignis.</div>
              </div>
              <span className="hidden text-[10px] uppercase tracking-[0.3em] text-white/70 md:block">
                2026 · NHVPS
              </span>
            </div>
          </button>
        )}
      </motion.div>
    </section>
  );
}
