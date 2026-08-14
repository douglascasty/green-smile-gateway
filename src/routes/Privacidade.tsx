import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";

const title = "Política de Privacidade | Green Smile Odontologia";
const description =
  "Saiba como a Green Smile Clínica Odontológica coleta, usa e protege os dados pessoais dos seus pacientes conforme a LGPD.";

export const Route = createFileRoute("/Privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacidadePage,
});

const SECTIONS = [
  {
    h: "1. Dados que coletamos",
    p: "Coletamos apenas os dados que você nos fornece voluntariamente por meio dos formulários do site e do WhatsApp: nome, telefone, e-mail, interesse de tratamento e mensagens enviadas.",
  },
  {
    h: "2. Como utilizamos seus dados",
    p: "Usamos suas informações exclusivamente para responder ao seu contato, agendar consultas, enviar orientações sobre tratamentos e cumprir obrigações legais aplicáveis à atividade odontológica.",
  },
  {
    h: "3. Compartilhamento",
    p: "Não vendemos nem cedemos seus dados a terceiros. Compartilhamos informações apenas com prestadores essenciais à operação da clínica e quando exigido por autoridade competente.",
  },
  {
    h: "4. Armazenamento e segurança",
    p: "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida, mantendo-os apenas pelo tempo necessário.",
  },
  {
    h: "5. Seus direitos (LGPD)",
    p: "Você pode solicitar a qualquer momento a confirmação, o acesso, a correção, a portabilidade ou a exclusão dos seus dados pessoais, além de revogar o consentimento concedido.",
  },
];

function PrivacidadePage() {
  return (
    <>
      <section className="gradient-forest pb-14 pt-36">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl text-primary-foreground">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-primary-foreground/75">
            Transparência sobre o tratamento dos seus dados pessoais.
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
            <h2 className="text-xl text-forest">6. Contato do responsável</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para exercer seus direitos, escreva para{" "}
              <a href={`mailto:${CLINIC.email}`} className="text-emerald underline">
                {CLINIC.email}
              </a>{" "}
              ou fale conosco em {CLINIC.address}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
