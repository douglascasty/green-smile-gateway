import { Link } from "@tanstack/react-router";
import { Star, Heart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { CLINIC, waLink } from "@/lib/clinic";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Consultório biofílico da Green Smile com plantas e iluminação suave"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            animate={{ opacity: [1, 0.65, 1] }}
            transition={{ duration: 2.6, repeat: Infinity }}
            className="inline-flex items-center rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-highlight backdrop-blur-md sm:text-sm"
          >
            • Agendas Abertas para Este Mês
          </motion.span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
            Seu novo sorriso
            <br />
            <span className="text-highlight">começa no Jabaquara.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Odontologia de alto padrão em um ambiente biofílico, com tecnologia
            de ponta e um cuidado que começa pelo seu conforto.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-primary-foreground/85">
              5/5 no Google
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-forest shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
            >
              Agendar avaliação
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              hash="servicos"
              className="glass-panel inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Conhecer serviços
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/80">
            <Heart className="h-4 w-4 text-gold" />
            Atendimento humanizado
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden justify-center lg:flex"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-highlight/25 blur-3xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel grid h-80 w-80 place-items-center rounded-full p-10 shadow-luxe"
            >
              <img
                src={CLINIC.logo}
                alt="Marca Green Smile Clínica Odontológica"
                className="w-56 brightness-0 invert drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
