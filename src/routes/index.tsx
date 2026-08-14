import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Structure } from "@/components/sections/Structure";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { QuizBanner } from "@/components/sections/QuizBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";

const title = "Green Smile Odontologia | Dentista no Jabaquara, São Paulo";
const description =
  "Clínica odontológica de alto padrão no Jabaquara: implantes, lentes de contato dental, clareamento e ortodontia em um ambiente biofílico e acolhedor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <Structure />
      <BeforeAfter />
      <QuizBanner />
      <Testimonials />
      <Location />
      <Faq />
    </>
  );
}
