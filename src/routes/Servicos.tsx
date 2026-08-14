import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Check, Clock, Users, ArrowRight } from "lucide-react";
import { SERVICES, waLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const title = "Serviços Odontológicos | Green Smile Jabaquara";
const description =
  "Implantes, prótese protocolo, lentes de contato dental, clareamento, ortodontia e reabilitação oral com planejamento digital na Green Smile.";

export const Route = createFileRoute("/Servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  const [active, setActive] = useState(SERVICES[0]!.slug);
  const service = SERVICES.find((s) => s.slug === active)!;

  return (
    <>
      <section className="gradient-forest pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Tratamentos
          </span>
          <h1 className="mt-4 text-4xl text-primary-foreground sm:text-5xl">
            Cuidado completo para o seu sorriso
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/75">
            Escolha um tratamento ao lado e veja os benefícios, a duração média e
            para quem ele é indicado.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:px-8">
          <aside className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {SERVICES.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActive(s.slug)}
                className={cn(
                  "shrink-0 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all lg:w-full",
                  s.slug === active
                    ? "border-transparent bg-emerald text-primary-foreground shadow-luxe"
                    : "border-border bg-card text-forest hover:border-gold hover:text-gold",
                )}
              >
                {s.title}
              </button>
            ))}
          </aside>

          <AnimatePresence mode="wait">
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-border bg-cream/60 p-8 shadow-sm sm:p-10"
            >
              <h2 className="text-3xl text-forest">{service.title}</h2>
              <p className="mt-4 text-muted-foreground">{service.short}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-5">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
                    <Clock className="h-4 w-4 text-gold" /> Duração média
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.duration}
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-5">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-forest">
                    <Users className="h-4 w-4 text-gold" /> Indicado para
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.target}
                  </p>
                </div>
              </div>

              <h3 className="mt-10 text-lg text-forest">Benefícios</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Olá! Gostaria de agendar uma avaliação de ${service.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-forest shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
              >
                Agendar {service.title}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
