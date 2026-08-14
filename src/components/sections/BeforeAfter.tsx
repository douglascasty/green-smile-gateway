import { useState } from "react";
import { motion } from "motion/react";
import { Repeat2 } from "lucide-react";
import { BA_CASES, BA_CATEGORIES } from "@/lib/clinic";
import { cn } from "@/lib/utils";

function Card({ item }: { item: (typeof BA_CASES)[number] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-luxe"
    >
      <button
        type="button"
        onClick={() => setShowAfter((v) => !v)}
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
        className="relative block w-full"
      >
        <img
          src={item.antes}
          alt={`Antes — ${item.title}`}
          loading="lazy"
          className="h-64 w-full object-cover"
        />
        <img
          src={item.depois}
          alt={`Depois — ${item.title}`}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-64 w-full object-cover transition-opacity duration-500",
            showAfter ? "opacity-100" : "opacity-0",
          )}
        />
        <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-md">
          {item.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-forest">
          {showAfter ? "Depois" : "Antes"}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-forest backdrop-blur-md">
          <Repeat2 className="h-3.5 w-3.5" />
          Toque para comparar
        </span>
      </button>
      <div className="p-6">
        <h3 className="text-lg text-forest">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function BeforeAfter() {
  const [filter, setFilter] = useState<string>("Todos");
  const list = BA_CASES.filter(
    (c) => filter === "Todos" || c.category === filter,
  );

  return (
    <section id="antesdepois" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Antes & Depois
          </span>
          <h2 className="mt-4 text-3xl text-forest sm:text-4xl">
            Resultados reais, sorrisos naturais
          </h2>
          <p className="mt-4 text-muted-foreground">
            Passe o mouse ou toque nas imagens para ver a transformação.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {BA_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === cat
                  ? "bg-emerald text-primary-foreground shadow-luxe"
                  : "border border-border bg-background text-forest hover:border-gold hover:text-gold",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
