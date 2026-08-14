import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { CLINIC, waLink } from "@/lib/clinic";
import { ContactForm } from "@/components/sections/ContactForm";

const qr = (data: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(data)}`;

export function Location({ withForm = true }: { withForm?: boolean }) {
  return (
    <section id="local" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">
            Onde estamos
          </span>
          <h2 className="mt-4 text-3xl text-forest sm:text-4xl">
            Venha nos visitar no Jabaquara
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fácil acesso, próximo ao metrô e com atendimento pontual.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-3xl border border-border shadow-luxe">
              <iframe
                title="Mapa da Green Smile Clínica Odontológica"
                src={CLINIC.maps}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, title: "Endereço", text: CLINIC.address },
                { icon: Clock, title: "Horário", text: CLINIC.hours },
                { icon: Phone, title: "Telefone", text: CLINIC.phoneDisplay },
                { icon: Mail, title: "E-mail", text: CLINIC.email },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-cream/60 p-5 transition-all hover:-translate-y-1 hover:shadow-luxe"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl gradient-forest">
                    <c.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-forest">
                    {c.title}
                  </p>
                  <p className="mt-1 break-words text-sm text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp direto",
                  hint: "Escaneie e fale conosco",
                  href: waLink(),
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  hint: "@greensmile_odonto",
                  href: CLINIC.instagram,
                },
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-luxe"
                >
                  <img
                    src={qr(card.href)}
                    alt={`QR Code para ${card.title}`}
                    loading="lazy"
                    width={220}
                    height={220}
                    className="h-32 w-32 rounded-xl"
                  />
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-gold">
                    <card.icon className="h-4 w-4" />
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{card.hint}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {withForm && <ContactForm />}
        </div>
      </div>
    </section>
  );
}
