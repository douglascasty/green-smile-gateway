import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { Testimonials } from "@/components/sections/Testimonials";
import { TESTIMONIALS } from "@/lib/clinic";

const title = "Depoimentos de Pacientes | Green Smile Odontologia";
const description =
  "Avaliações 5 estrelas de pacientes da Green Smile Clínica Odontológica no Jabaquara, São Paulo.";

export const Route = createFileRoute("/Depoimentos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DepoimentosPage,
});

function DepoimentosPage() {
  return (
    <>
      <section className="gradient-forest pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Nota 5/5 no Google
          </span>
          <h1 className="mt-4 text-4xl text-primary-foreground sm:text-5xl">
            Depoimentos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/75">
            Quem passa pela Green Smile costuma voltar — e indicar.
          </p>
        </div>
      </section>

      <Testimonials />

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-luxe"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{t.text}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-sm font-semibold text-forest">
                  {t.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">{t.name}</p>
                  <p className="text-xs text-emerald">{t.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
