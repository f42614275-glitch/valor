import { motion } from "framer-motion";

interface Props {
  label?: string;
  className?: string;
  ratio?: string;
}

export function Placeholder({ label, className = "", ratio = "4/5" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
      className={`placeholder-frame relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {label && (
        <span className="absolute bottom-4 left-4 z-10 text-[10px] uppercase tracking-[0.25em] text-charcoal/50">
          {label}
        </span>
      )}
    </motion.div>
  );
}
