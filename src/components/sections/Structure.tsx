import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { GALLERY } from "@/lib/clinic";

export function Structure() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="estrutura" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Nossa Estrutura
          </span>
          <h2 className="mt-4 text-3xl text-forest sm:text-4xl">
            Um ambiente projetado para o seu conforto
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nossos consultórios contam com iluminação de cromoterapia, que ajuda
            a reduzir a ansiedade durante o atendimento, além de equipamentos de
            última geração, salas climatizadas e um projeto biofílico que
            transforma a visita ao dentista em uma experiência tranquila.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-emerald">
            <Sparkles className="h-4 w-4 text-gold" />
            Cromoterapia em todas as salas de atendimento
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((photo, i) => (
            <motion.button
              key={photo.alt}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl shadow-sm transition-shadow hover:shadow-luxe"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-forest/0 transition-colors duration-300 group-hover:bg-forest/45" />
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-left text-sm font-medium text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={GALLERY[active]!.src}
              alt={GALLERY[active]!.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-3xl object-contain shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
