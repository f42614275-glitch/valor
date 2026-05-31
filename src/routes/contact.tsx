import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | VALOR·IGNIS" },
      {
        name: "description",
        content:
          "Get in touch with the VALOR·IGNIS team. Reach our organizing committee and social media manager.",
      },
      { property: "og:title", content: "Contact | VALOR·IGNIS" },
      {
        property: "og:description",
        content: "Reach the VALOR·IGNIS organizing committee and social media team.",
      },
    ],
  }),
  component: ContactPage,
});

const phones = [
  { name: "Vineet Srikanth", number: "+91 77950 38400", raw: "+917795038400" },
  { name: "Thrupthi R", number: "+91 86184 65279", raw: "+918618465279" },
];

const emails = [
  {
    name: "Ms. Jeevashree M R",
    role: "Social Media Manager",
    email: "jevashree.mr@nhvps.com",
  },
];

function ContactPage() {
  return (
    <div className="gradient-warm">
      <section className="container-editorial pt-32 pb-16 md:pt-36 md:pb-20">
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Get in Touch
        </span>
        <h1 className="mt-8 font-display text-[clamp(3rem,11vw,12rem)] leading-[0.9] tracking-[-0.04em]">
          <RevealText className="block text-gold">Say</RevealText>
          <RevealText delay={0.15} className="block italic font-normal">hello.</RevealText>
        </h1>
        <p className="mt-10 max-w-xl text-base text-charcoal/75 md:text-lg">
          Questions, partnerships, or registrations. Our organizing committee are a call or message away.
        </p>
      </section>

      <section className="container-editorial pb-20">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
          <span>01</span>
          <span className="h-px w-10 bg-gold/50" />
          <span>Organizing Committee</span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {phones.map((p, i) => (
            <motion.a
              key={p.raw}
              href={`tel:${p.raw}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.7, 0, 0.2, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-background/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:bg-background/50"
            >
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-background">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-charcoal/55">
                    Organizing Committee
                  </div>
                  <div className="mt-1 font-display text-2xl tracking-tight md:text-3xl">
                    {p.name}
                  </div>
                  <div className="mt-2 text-base text-gold md:text-lg">{p.number}</div>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
          <span>02</span>
          <span className="h-px w-10 bg-gold/50" />
          <span></span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6">
          {emails.map((e, i) => (
            <motion.a
              key={e.email}
              href={`mailto:${e.email}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.7, 0, 0.2, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-background/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:bg-background/50"
            >
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-background">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-charcoal/55">
                    {e.role}
                  </div>
                  <div className="mt-1 font-display text-2xl tracking-tight md:text-3xl">
                    {e.name}
                  </div>
                  <div className="mt-2 text-base text-gold md:text-lg break-all">{e.email}</div>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
