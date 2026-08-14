import { Leaf, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import sobre1 from "@/assets/sobre-1.jpg";
import sobre2 from "@/assets/sobre-2.jpg";
import estrutura2 from "@/assets/estrutura-2.jpg";
import estrutura4 from "@/assets/estrutura-4.jpg";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src={sobre1}
            alt="Dentista e paciente sorrindo na Green Smile"
            loading="lazy"
            className="col-span-1 h-72 w-full rounded-3xl object-cover shadow-luxe sm:h-80"
          />
          <div className="grid gap-4">
            <img
              src={estrutura2}
              alt="Lounge de espera com parede verde"
              loading="lazy"
              className="h-34 w-full rounded-2xl object-cover shadow-luxe sm:h-38"
            />
            <img
              src={sobre2}
              alt="Detalhe da decoração biofílica da clínica"
              loading="lazy"
              className="h-34 w-full rounded-2xl object-cover shadow-luxe sm:h-38"
            />
          </div>
          <img
            src={estrutura4}
            alt="Consultório com cromoterapia âmbar"
            loading="lazy"
            className="col-span-2 h-48 w-full rounded-3xl object-cover shadow-luxe"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Sobre a Green Smile
          </span>
          <h2 className="mt-4 text-3xl leading-tight text-forest sm:text-4xl">
            Odontologia moderna com acolhimento de verdade
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Sabemos que ir ao dentista pode gerar ansiedade. Por isso criamos uma
            clínica onde tudo — da luz ao aroma, do atendimento à cadeira —
            existe para que você relaxe. Aqui, o cuidado começa antes do
            tratamento.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Unimos alta tecnologia, planejamento digital e uma abordagem
            humanizada para entregar resultados naturais, duradouros e
            previsíveis, com total transparência em cada etapa.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Leaf,
                title: "Ambiente biofílico",
                text: "Plantas naturais, madeira e iluminação suave para uma experiência calma e sensorialmente confortável.",
              },
              {
                icon: GraduationCap,
                title: "Equipe especializada",
                text: "Profissionais formados nas principais universidades do Brasil, em constante atualização clínica.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-cream/60 p-6 transition-all hover:-translate-y-1 hover:shadow-luxe"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-forest">
                  <card.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-lg text-forest">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
