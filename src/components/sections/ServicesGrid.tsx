import { motion } from "motion/react";
import { icons, ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "@/lib/clinic";

function ServiceIcon({ name }: { name: string }) {
  const Icon = (icons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon ? <Icon className="h-6 w-6 text-primary-foreground" /> : null;
}

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section id="servicos" className={compact ? "py-16" : "bg-cream py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
              Nossos serviços
            </span>
            <h2 className="mt-4 text-3xl text-forest sm:text-4xl">
              Tratamentos pensados para o seu sorriso
            </h2>
            <p className="mt-4 text-muted-foreground">
              Do implante à estética avançada, cada plano é desenhado sob medida
              para o seu caso.
            </p>
          </div>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.a
              key={service.slug}
              href={waLink(`Olá! Gostaria de agendar uma avaliação de ${service.title}.`)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-luxe"
            >
              <div className="grid h-13 w-13 place-items-center rounded-2xl gradient-forest p-3.5 transition-transform group-hover:scale-105">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="mt-5 text-xl leading-snug text-forest">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.short}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition-colors group-hover:text-gold">
                Agendar pelo WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
