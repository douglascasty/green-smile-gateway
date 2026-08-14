import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Sparkles, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { waLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const title = "Quiz do Sorriso | Descubra seu tratamento — Green Smile";
const description =
  "Responda 5 perguntas rápidas e descubra qual tratamento odontológico combina com você na Green Smile, no Jabaquara.";

export const Route = createFileRoute("/Quiz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: QuizPage,
});

const STEPS = [
  {
    key: "objetivo",
    question: "Qual é o seu principal objetivo hoje?",
    options: [
      "Alinhar os dentes",
      "Dentes mais brancos",
      "Repor dentes perdidos",
      "Melhorar a estética do sorriso",
      "Avaliação geral",
    ],
  },
  {
    key: "vergonha",
    question: "Você sente vergonha de sorrir em fotos?",
    options: ["Sim, sempre", "Às vezes", "Não"],
  },
  {
    key: "medo",
    question: "Você tem medo ou ansiedade de ir ao dentista?",
    options: ["Muito medo", "Um pouco", "Não tenho"],
  },
  {
    key: "prioridade",
    question: "O que é mais importante para você?",
    options: ["Discreto/invisível", "Rápido", "Confortável", "Duradouro"],
  },
  {
    key: "idade",
    question: "Qual a sua faixa etária?",
    options: ["18-25", "26-35", "36-50", "50+"],
  },
] as const;

type Answers = Record<string, string>;

const RESULTS: Record<
  string,
  { name: string; text: string; benefits: string[] }
> = {
  invisalign: {
    name: "Alinhadores Invisíveis (Invisalign)",
    text: "Pelo seu objetivo e prioridade por discrição, o tratamento com alinhadores transparentes é o mais indicado.",
    benefits: [
      "Praticamente invisível no dia a dia",
      "Removível para comer e escovar",
      "Planejamento digital com prévia do resultado",
      "Mais conforto que o aparelho fixo",
    ],
  },
  clareamento: {
    name: "Clareamento Dental",
    text: "Você busca um sorriso mais luminoso — o clareamento profissional entrega resultado rápido e seguro.",
    benefits: [
      "Resultado visível em poucas sessões",
      "Protocolo com baixa sensibilidade",
      "Acompanhamento profissional",
      "Ótimo custo-benefício",
    ],
  },
  implantes: {
    name: "Implantes Dentários",
    text: "Para repor dentes perdidos com segurança e naturalidade, o implante é o padrão-ouro.",
    benefits: [
      "Função mastigatória restaurada",
      "Preserva o osso da região",
      "Estética natural",
      "Solução duradoura",
    ],
  },
  lentes: {
    name: "Lentes de Contato Dental",
    text: "Você quer transformar a estética do sorriso: as facetas ultrafinas harmonizam cor, formato e proporção.",
    benefits: [
      "Transformação em poucas semanas",
      "Desgaste mínimo do dente",
      "Prévia digital do sorriso",
      "Resultado altamente natural",
    ],
  },
  avaliacao: {
    name: "Avaliação Completa",
    text: "O melhor primeiro passo é uma avaliação completa para desenhar um plano sob medida para o seu caso.",
    benefits: [
      "Exame clínico detalhado",
      "Exames de imagem quando necessário",
      "Plano de tratamento transparente",
      "Atendimento humanizado e sem pressa",
    ],
  },
};

function recommend(a: Answers) {
  const objetivo = a["objetivo"];
  if (objetivo === "Alinhar os dentes")
    return a["prioridade"] === "Rápido" ? RESULTS["lentes"]! : RESULTS["invisalign"]!;
  if (objetivo === "Dentes mais brancos") return RESULTS["clareamento"]!;
  if (objetivo === "Repor dentes perdidos") return RESULTS["implantes"]!;
  if (objetivo === "Melhorar a estética do sorriso") return RESULTS["lentes"]!;
  return RESULTS["avaliacao"]!;
}

function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [lead, setLead] = useState({ nome: "", telefone: "" });
  const [lgpd, setLgpd] = useState(false);
  const [done, setDone] = useState(false);

  const total = STEPS.length + 1;
  const progress = Math.round((step / total) * 100);
  const result = recommend(answers);

  const choose = (key: string, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const submit = () => {
    if (!lead.nome || !lead.telefone) {
      toast.error("Preencha seu nome e WhatsApp.");
      return;
    }
    if (!lgpd) {
      toast.error("É preciso concordar em ser contatado(a).");
      return;
    }
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-cream pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-1.5 text-xs font-semibold text-emerald">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Quiz do sorriso
          </span>
          <h1 className="mt-4 text-3xl text-forest sm:text-4xl">
            Qual tratamento combina com você?
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            São 5 perguntas rápidas — menos de 1 minuto.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-background p-7 shadow-luxe sm:p-10">
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>
                {done
                  ? "Concluído"
                  : `Etapa ${Math.min(step + 1, total)} de ${total}`}
              </span>
              <span className="text-emerald">{done ? 100 : progress}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full gradient-gold"
                animate={{ width: `${done ? 100 : progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-forest">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="mt-6 text-2xl text-forest">
                  Recebemos suas respostas, {lead.nome.split(" ")[0]}!
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Nossa equipe já pode te orientar sobre{" "}
                  <strong className="text-emerald">{result.name}</strong>. Clique
                  abaixo e continue a conversa no WhatsApp.
                </p>
                <a
                  href={waLink(
                    `Olá! Sou ${lead.nome}. Fiz o quiz no site e minha recomendação foi: ${result.name}. Meu WhatsApp: ${lead.telefone}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-sm font-semibold text-primary-foreground shadow-luxe transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp agora
                </a>
              </motion.div>
            ) : step < STEPS.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl text-forest sm:text-2xl">
                  {STEPS[step]!.question}
                </h2>
                <div className="mt-6 grid gap-3">
                  {STEPS[step]!.options.map((opt) => {
                    const selected = answers[STEPS[step]!.key] === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => choose(STEPS[step]!.key, opt)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all",
                          selected
                            ? "border-transparent bg-emerald text-primary-foreground"
                            : "border-border bg-card text-forest hover:-translate-y-0.5 hover:border-gold hover:text-gold",
                        )}
                      >
                        {opt}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    );
                  })}
                </div>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-emerald"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
                  Sua recomendação
                </span>
                <h2 className="mt-3 text-2xl text-forest sm:text-3xl">
                  {result.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {result.text}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {result.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 rounded-2xl bg-cream p-4 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-5 rounded-3xl border border-border bg-cream/60 p-6">
                  <p className="text-sm font-semibold text-forest">
                    Receba o plano personalizado
                  </p>
                  <div className="grid gap-2">
                    <Label htmlFor="q-nome">Nome</Label>
                    <Input
                      id="q-nome"
                      value={lead.nome}
                      onChange={(e) =>
                        setLead((l) => ({ ...l, nome: e.target.value }))
                      }
                      placeholder="Seu nome"
                      className="rounded-xl bg-background"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="q-tel">WhatsApp</Label>
                    <Input
                      id="q-tel"
                      inputMode="tel"
                      value={lead.telefone}
                      onChange={(e) =>
                        setLead((l) => ({ ...l, telefone: e.target.value }))
                      }
                      placeholder="(11) 90000-0000"
                      className="rounded-xl bg-background"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                    <Checkbox
                      checked={lgpd}
                      onCheckedChange={(v) => setLgpd(v === true)}
                      className="mt-0.5"
                    />
                    <span>
                      Concordo em ser contatado(a) pela Green Smile e autorizo o
                      uso dos meus dados conforme a LGPD.
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={submit}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-forest shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
                  >
                    Ver meu resultado completo
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-emerald"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
