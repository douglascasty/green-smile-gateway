import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
    [],
  );
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const item = TESTIMONIALS[index]!;

  return (
    <section id="depoimentos" className="bg-forest py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Depoimentos
        </span>
        <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
          O que nossos pacientes dizem
        </h2>

        <div className="relative mt-12 min-h-[22rem] sm:min-h-[19rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-8 sm:p-12"
            >
              <Quote className="mx-auto h-8 w-8 text-gold" />
              <div className="mt-5 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
                “{item.text}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full gradient-gold text-base font-semibold text-forest">
                  {item.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-primary-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-gold">{item.tag}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Depoimento anterior"
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Ir para depoimento de ${t.name}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-8 bg-gold" : "w-2 bg-primary-foreground/30",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Próximo depoimento"
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
