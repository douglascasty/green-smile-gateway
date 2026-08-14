import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";

const title = "Termos de Uso | Green Smile Odontologia";
const description =
  "Condições de uso do site da Green Smile Clínica Odontológica, no Jabaquara, São Paulo.";

export const Route = createFileRoute("/Termos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermosPage,
});

const SECTIONS = [
  {
    h: "1. Aceitação dos termos",
    p: "Ao navegar neste site você concorda com estes Termos de Uso. Caso não concorde, recomendamos interromper a navegação.",
  },
  {
    h: "2. Finalidade do conteúdo",
    p: "As informações publicadas têm caráter meramente informativo e não substituem consulta, diagnóstico ou tratamento realizado por profissional habilitado.",
  },
  {
    h: "3. Resultados de tratamentos",
    p: "As imagens de casos clínicos são reais e publicadas com autorização. Resultados variam conforme as condições bucais, hábitos e adesão ao plano de tratamento de cada paciente.",
  },
  {
    h: "4. Propriedade intelectual",
    p: "Marca, logotipo, textos e imagens são de propriedade da Green Smile Clínica Odontológica e não podem ser reproduzidos sem autorização prévia.",
  },
  {
    h: "5. Agendamentos",
    p: "Solicitações enviadas pelo site ou WhatsApp são pedidos de contato e só se tornam agendamento após confirmação da nossa equipe.",
  },
];

function TermosPage() {
  return (
    <>
      <section className="gradient-forest pb-14 pt-36">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl text-primary-foreground">Termos de Uso</h1>
          <p className="mt-4 text-primary-foreground/75">
            Regras para a utilização do nosso site.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl text-forest">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.p}
              </p>
            </div>
          ))}
          <div className="rounded-3xl border border-border bg-cream/60 p-6">
            <h2 className="text-xl text-forest">6. Dúvidas</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Fale com a gente pelo WhatsApp {CLINIC.phoneDisplay} ou pelo e-mail{" "}
              <a href={`mailto:${CLINIC.email}`} className="text-emerald underline">
                {CLINIC.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
