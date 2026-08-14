import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function QuizBanner() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 rounded-3xl gradient-forest p-9 text-center shadow-luxe sm:p-12 lg:flex-row lg:text-left"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold text-highlight">
              <Sparkles className="h-3.5 w-3.5" />
              Quiz do sorriso
            </span>
            <h2 className="mt-4 text-2xl text-primary-foreground sm:text-3xl">
              Qual tratamento combina com você?
            </h2>
            <p className="mt-3 text-primary-foreground/75">
              Responda algumas perguntas rápidas e receba uma recomendação
              personalizada em menos de 1 minuto.
            </p>
          </div>
          <Link
            to="/Quiz"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-forest shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
          >
            Fazer o quiz
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
