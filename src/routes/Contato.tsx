import { createFileRoute } from "@tanstack/react-router";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";

const title = "Contato e Localização | Green Smile Jabaquara";
const description =
  "Fale com a Green Smile: Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara, São Paulo. Agende sua avaliação pelo WhatsApp (11) 97060-4418.";

export const Route = createFileRoute("/Contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <section className="gradient-forest pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Fale conosco
          </span>
          <h1 className="mt-4 text-4xl text-primary-foreground sm:text-5xl">
            Contato & Localização
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/75">
            Estamos no coração do Jabaquara, prontos para receber você.
          </p>
        </div>
      </section>
      <Location />
      <Faq />
    </>
  );
}
