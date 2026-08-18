import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CLINIC, waLink } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Início", to: "/", hash: "" },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Estrutura", to: "/", hash: "estrutura" },
  { label: "Serviços", to: "/Servicos", hash: "" },
  { label: "Antes & Depois", to: "/AntesDepois", hash: "" },
  { label: "Depoimentos", to: "/Depoimentos", hash: "" },
  { label: "Contato", to: "/Contato", hash: "" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  const linkClass = cn(
    "text-sm font-medium transition-colors",
    solid
      ? "text-forest hover:text-gold"
      : "text-primary-foreground/90 hover:text-highlight",
  );

  const socials = [
    { href: CLINIC.instagram, icon: Instagram, label: "Instagram" },
    { href: CLINIC.facebook, icon: Facebook, label: "Facebook" },
    { href: waLink(), icon: MessageCircle, label: "WhatsApp" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label={CLINIC.name}>
          <img
            src={CLINIC.logo}
            alt="Logotipo Green Smile Clínica Odontológica"
            className={cn(
              "h-14 w-auto transition-all duration-300 sm:h-16",
              solid ? "" : "drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) =>
            item.hash ? (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className={linkClass}
              >
                {item.label}
              </Link>
            ) : (
              <Link key={item.label} to={item.to} className={linkClass}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={cn(
                "grid h-9 w-9 place-items-center rounded-full border transition-all hover:-translate-y-0.5",
                solid
                  ? "border-border text-emerald hover:border-gold hover:text-gold"
                  : "border-primary-foreground/30 text-primary-foreground hover:border-highlight hover:text-highlight",
              )}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest shadow-gold transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
          >
            Agendar avaliação
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Abrir menu"
              className={cn(
                "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors xl:hidden",
                solid
                  ? "border-border text-forest"
                  : "border-primary-foreground/30 text-primary-foreground",
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[88vw] max-w-sm border-l-0 bg-forest p-0">
            <div className="flex h-full flex-col gap-6 overflow-y-auto p-6">
              <img
                src={CLINIC.logo}
                alt="Logotipo Green Smile"
                className="h-14 w-auto"
              />
              <nav className="flex flex-col gap-1">
                {NAV.map((item) => {
                  const cls =
                    "rounded-xl px-3 py-3 text-base font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-highlight";
                  return item.hash ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      hash={item.hash}
                      onClick={() => setOpen(false)}
                      className={cls}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cls}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  to="/Quiz"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-highlight"
                >
                  Quiz do sorriso
                </Link>
              </nav>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-forest"
              >
                Agendar avaliação
              </a>
              <div className="flex items-center gap-3">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground transition-colors hover:text-highlight"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
