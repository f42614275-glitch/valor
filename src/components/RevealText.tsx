import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function RevealText({
  children,
  delay = 0,
  className = "",
  as: As = "span",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Tag = As as unknown as React.ElementType;
  return (
    <Tag className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1], delay }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Tag>
  );
}
