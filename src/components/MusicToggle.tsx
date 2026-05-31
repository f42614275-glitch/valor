import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRACK_URL = "/audio/ambient.mp3";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(TRACK_URL);
    a.loop = true;
    a.volume = 0.18;
    a.preload = "auto";
    a.addEventListener("error", () => setAvailable(false));
    audioRef.current = a;
    setMounted(true);
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      // gentle fade-out
      const start = a.volume;
      const steps = 12;
      for (let i = 1; i <= steps; i++) {
        await new Promise((r) => setTimeout(r, 35));
        a.volume = Math.max(0, start * (1 - i / steps));
      }
      a.pause();
      a.volume = 0.18;
      setPlaying(false);
    } else {
      try {
        a.volume = 0;
        await a.play();
        setPlaying(true);
        // gentle fade-in
        const target = 0.18;
        const steps = 16;
        for (let i = 1; i <= steps; i++) {
          await new Promise((r) => setTimeout(r, 40));
          if (audioRef.current) audioRef.current.volume = (target * i) / steps;
        }
      } catch {
        setAvailable(false);
      }
    }
  };

  if (!mounted || !available) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1], delay: 1.4 }}
      className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause ambient music" : "Play ambient music"}
        className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-charcoal/15 bg-cream/85 py-2.5 pl-3 pr-4 text-[10px] uppercase tracking-[0.28em] text-charcoal/75 shadow-[0_12px_40px_-12px_oklch(0.3_0.02_60/0.25)] backdrop-blur-xl transition-all duration-500 hover:border-charcoal/30 hover:text-charcoal hover:shadow-[0_16px_50px_-12px_oklch(0.3_0.02_60/0.35)]"
      >
        {/* rotating ring when playing */}
        <span className="relative flex h-7 w-7 items-center justify-center">
          <AnimatePresence>
            {playing && (
              <motion.span
                key="ring"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{
                  rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute inset-0 rounded-full border border-dashed border-gold/70"
              />
            )}
          </AnimatePresence>

          <span className="flex h-3 items-end gap-[2px]">
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="w-[2px] rounded-full bg-charcoal"
                animate={
                  playing
                    ? { height: ["30%", "100%", "55%", "85%", "40%"] }
                    : { height: "30%" }
                }
                transition={
                  playing
                    ? {
                        duration: 1.1,
                        repeat: Infinity,
                        delay: i * 0.09,
                        ease: "easeInOut",
                      }
                    : { duration: 0.25 }
                }
                style={{ height: "30%" }}
              />
            ))}
          </span>
        </span>

        <span className="flex flex-col items-start leading-tight">
          <span className="text-charcoal/40">Ambient</span>
          <span className="font-display text-sm normal-case tracking-tight text-charcoal">
            {playing ? "Playing" : "Press to play"}
          </span>
        </span>
      </button>
    </motion.div>
  );
}
