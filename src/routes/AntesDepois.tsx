import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/sections/BeforeAfter";

const title = "Antes & Depois | Green Smile Odontologia Jabaquara";
const description =
  "Veja transformações reais de pacientes da Green Smile em implantes, alinhadores invisíveis, clareamento e lentes de contato dental.";

export const Route = createFileRoute("/AntesDepois")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AntesDepoisPage,
});

function AntesDepoisPage() {
  return (
    <>
      <section className="gradient-forest pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Casos reais
          </span>
          <h1 className="mt-4 text-4xl text-primary-foreground sm:text-5xl">
            Antes & Depois
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/75">
            Resultados naturais, planejados digitalmente e executados com
            precisão.
          </p>
        </div>
      </section>
      <BeforeAfter />
    </>
  );
}
