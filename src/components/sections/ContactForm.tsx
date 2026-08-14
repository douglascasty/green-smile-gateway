import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SERVICES, waLink } from "@/lib/clinic";

export function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: SERVICES[0]!.title,
    periodo: "Qualquer horário",
    mensagem: "",
  });
  const [lgpd, setLgpd] = useState(false);

  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!lgpd) {
      toast.error("É preciso aceitar o contato para enviar a mensagem.");
      return;
    }
    const msg = `Olá! Meu nome é ${form.nome}.
Interesse: ${form.servico}
Melhor horário: ${form.periodo}
WhatsApp: ${form.telefone}
E-mail: ${form.email}
${form.mensagem ? `Mensagem: ${form.mensagem}` : ""}`;
    window.open(waLink(msg), "_blank", "noopener");
    toast.success("Tudo certo! Vamos continuar no WhatsApp.");
  };

  const field =
    "rounded-xl border-border bg-background focus-visible:ring-emerald";

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-3xl border border-border bg-cream/60 p-7 shadow-sm sm:p-9"
    >
      <h3 className="text-2xl text-forest">Agende sua avaliação</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Preencha os dados e retornamos rapidinho pelo WhatsApp.
      </p>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input
            id="nome"
            required
            value={form.nome}
            onChange={(e) => set("nome", e.target.value)}
            placeholder="Seu nome"
            className={field}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="telefone">WhatsApp</Label>
            <Input
              id="telefone"
              required
              inputMode="tel"
              value={form.telefone}
              onChange={(e) => set("telefone", e.target.value)}
              placeholder="(11) 90000-0000"
              className={field}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="voce@email.com"
              className={field}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="servico">Interesse</Label>
            <select
              id="servico"
              value={form.servico}
              onChange={(e) => set("servico", e.target.value)}
              className="h-10 rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-emerald"
            >
              {SERVICES.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
              <option>Avaliação geral</option>
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="periodo">Melhor horário</Label>
            <select
              id="periodo"
              value={form.periodo}
              onChange={(e) => set("periodo", e.target.value)}
              className="h-10 rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-emerald"
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Qualquer horário</option>
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea
            id="mensagem"
            rows={4}
            value={form.mensagem}
            onChange={(e) => set("mensagem", e.target.value)}
            placeholder="Conte um pouco sobre o que você procura"
            className={field}
          />
        </div>

        <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
          <Checkbox
            checked={lgpd}
            onCheckedChange={(v) => setLgpd(v === true)}
            className="mt-0.5"
          />
          <span>
            Concordo em ser contatado(a) pela Green Smile e autorizo o uso dos
            meus dados exclusivamente para este atendimento, conforme a LGPD.
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-forest shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
        >
          Enviar e falar no WhatsApp
          <Send className="h-4 w-4" />
        </button>
      </div>
    </motion.form>
  );
}
