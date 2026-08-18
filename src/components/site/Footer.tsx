import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Clock, Phone, Mail } from "lucide-react";
import { CLINIC, SERVICES, waLink } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <img
            src={CLINIC.logo}
            alt="Logotipo Green Smile Clínica Odontológica"
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="text-sm leading-relaxed text-primary-foreground/70">
            Odontologia de alto padrão no Jabaquara, com ambiente biofílico,
            tecnologia de ponta e atendimento verdadeiramente humanizado.
          </p>
          <div className="flex gap-3">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-highlight">Navegação</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {[
              { label: "Início", to: "/" },
              { label: "Serviços", to: "/Servicos" },
              { label: "Antes & Depois", to: "/AntesDepois" },
              { label: "Depoimentos", to: "/Depoimentos" },
              { label: "Quiz do sorriso", to: "/Quiz" },
              { label: "Contato", to: "/Contato" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-highlight">Tratamentos</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a
                  href={waLink(`Olá! Gostaria de saber mais sobre ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-highlight">Contato</h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CLINIC.hours}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-gold">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${CLINIC.email}`} className="break-all hover:text-gold">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {CLINIC.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to="/Privacidade" className="hover:text-gold">
              Política de Privacidade
            </Link>
            <Link to="/Termos" className="hover:text-gold">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
