import estrutura5 from "@/assets/estrutura-5.jpg";
import estrutura6 from "@/assets/estrutura-6.jpg";
import recepcaoAsset from "@/assets/clinic-reception.jpg.asset.json";
import esperaAsset from "@/assets/clinic-waiting.jpg.asset.json";
import salaAzulAsset from "@/assets/room-blue.jpg.asset.json";
import salaVerdeAsset from "@/assets/room-green.jpg.asset.json";
import salaLaranjaAsset from "@/assets/room-orange.jpg.asset.json";
import ba1a from "@/assets/ba-1-antes.jpg";
import ba1d from "@/assets/ba-1-depois.jpg";
import ba2a from "@/assets/ba-2-antes.jpg";
import ba2d from "@/assets/ba-2-depois.jpg";
import ba3a from "@/assets/ba-3-antes.jpg";
import ba3d from "@/assets/ba-3-depois.jpg";
import ba4a from "@/assets/ba-4-antes.jpg";
import ba4d from "@/assets/ba-4-depois.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import lentesAntes from "@/assets/antes-lentes.jpg.asset.json";
import lentesDepois from "@/assets/depois-lentes.jpg.asset.json";

export const CLINIC = {
  name: "Green Smile Clínica Odontológica",
  shortName: "Green Smile",
  logo: logoAsset.url,
  address:
    "Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara, São Paulo - SP, 04309-011",
  phoneDisplay: "(11) 97060-4418",
  phoneClean: "5511970604418",
  email: "greensmile.odonto@gmail.com",
  hours: "Seg a Sex: 9h às 19h | Sáb: 9h às 14h",
  instagram: "https://www.instagram.com/greensmile_odonto/",
  facebook:
    "https://www.facebook.com/people/Green-Smile-Cl%C3%ADnica-Odontol%C3%B3gica/61582121762981/",
  maps: "https://www.google.com/maps?q=Av.+Eng.+Armando+de+Arruda+Pereira,+2357+-+Jabaquara,+S%C3%A3o+Paulo+-+SP&output=embed",
};

export function waLink(message = "Olá! Gostaria de agendar uma avaliação.") {
  return `https://wa.me/${CLINIC.phoneClean}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  benefits: string[];
  duration: string;
  target: string;
};

export const SERVICES: Service[] = [
  {
    slug: "protocolo",
    title: "Prótese Protocolo Com Implantes",
    short:
      "Recupere todos os dentes fixos sobre implantes com máxima segurança e conforto.",
    icon: "ShieldCheck",
    benefits: [
      "Dentes fixos, sem prótese removível",
      "Mastigação e fala restauradas",
      "Planejamento digital 3D",
      "Estética natural personalizada",
    ],
    duration: "3 a 6 meses",
    target: "Pacientes com perda total ou quase total dos dentes",
  },
  {
    slug: "implantes",
    title: "Implantes Dentários",
    short: "Recupere dentes perdidos com implantes de última geração.",
    icon: "Anchor",
    benefits: [
      "Titânio de alta performance",
      "Cirurgia guiada e minimamente invasiva",
      "Preserva o osso da região",
      "Resultado duradouro",
    ],
    duration: "2 a 4 meses",
    target: "Quem perdeu um ou mais dentes",
  },
  {
    slug: "lentes",
    title: "Lentes de Contato Dental",
    short: "Transforme seu sorriso com facetas ultrafinas e naturais.",
    icon: "Sparkles",
    benefits: [
      "Desgaste mínimo do dente",
      "Prévia digital do sorriso",
      "Cor e formato sob medida",
      "Resultado em poucas sessões",
    ],
    duration: "2 a 4 semanas",
    target: "Quem busca harmonia estética no sorriso",
  },
  {
    slug: "clareamento",
    title: "Clareamento Dental",
    short: "Dentes mais brancos de forma segura e duradoura.",
    icon: "Sun",
    benefits: [
      "Protocolo com baixa sensibilidade",
      "Opções em consultório e caseiro",
      "Até vários tons mais claro",
      "Acompanhamento profissional",
    ],
    duration: "1 a 3 sessões",
    target: "Quem quer um sorriso mais luminoso",
  },
  {
    slug: "ortodontia",
    title: "Ortodontia",
    short: "Correção de mordida e alinhamento dentário para todas as idades.",
    icon: "AlignHorizontalDistributeCenter",
    benefits: [
      "Alinhadores invisíveis ou aparelho fixo",
      "Planejamento com escaneamento digital",
      "Melhora da mordida e da saúde bucal",
      "Acompanhamento contínuo",
    ],
    duration: "6 a 24 meses",
    target: "Adolescentes e adultos",
  },
  {
    slug: "reabilitacao",
    title: "Reabilitação Oral",
    short:
      "Tratamento completo para devolver função e estética ao seu sorriso.",
    icon: "HeartPulse",
    benefits: [
      "Plano de tratamento integrado",
      "Equipe multidisciplinar",
      "Função mastigatória restaurada",
      "Estética e saúde em equilíbrio",
    ],
    duration: "Personalizado",
    target: "Casos complexos que exigem múltiplas especialidades",
  },
];

export const GALLERY = [
  { src: estrutura1, alt: "Recepção da Green Smile com balcão em mármore verde" },
  { src: estrutura2, alt: "Lounge de espera com parede verde viva" },
  { src: estrutura3, alt: "Consultório climatizado com cromoterapia azul" },
  { src: estrutura4, alt: "Consultório com cromoterapia âmbar e madeira" },
  { src: estrutura5, alt: "Equipamentos de alta tecnologia e imagem digital" },
  { src: estrutura6, alt: "Corredor biofílico com jardim vertical" },
];

export const BA_CATEGORIES = [
  "Todos",
  "Implantes",
  "Invisalign",
  "Estética",
  "Clareamento",
] as const;

export const BA_CASES = [
  {
    id: 5,
    category: "Estética",
    title: "Lentes de contato dental — caso real",
    description:
      "Paciente da Green Smile: formato, alinhamento e cor do sorriso harmonizados com lentes ultrafinas.",
    antes: lentesAntes.url,
    depois: lentesDepois.url,
  },
  {
    id: 1,
    category: "Invisalign",
    title: "Alinhamento com alinhadores invisíveis",
    description: "Correção do apinhamento anterior em 11 meses de tratamento.",
    antes: ba1a,
    depois: ba1d,
  },
  {
    id: 2,
    category: "Clareamento",
    title: "Clareamento dental de consultório",
    description: "Protocolo em 3 sessões com baixa sensibilidade.",
    antes: ba2a,
    depois: ba2d,
  },
  {
    id: 3,
    category: "Implantes",
    title: "Implante unitário na região anterior",
    description: "Reposição de dente perdido com coroa em cerâmica.",
    antes: ba3a,
    depois: ba3d,
  },
  {
    id: 4,
    category: "Estética",
    title: "Lentes de contato dental",
    description: "Harmonização de formato e proporção do sorriso.",
    antes: ba4a,
    depois: ba4d,
  },
];

export const TESTIMONIALS = [
  {
    name: "Lulu",
    tag: "Avaliação Geral",
    text: "Minha experiência foi excelente! Sempre fui muito bem atendida, e o resultado superou minhas expectativas. Meus dentes ficaram maravilhosos! Obrigado Dr. Victor.",
  },
  {
    name: "Douglas",
    tag: "Lentes de Contato",
    text: "Ótimo lugar com ambiente limpo e agradável. Fui atendido pelo dentista Victor, onde realizei o procedimento de lentes de contato. Trabalho excelente e super acessível da região.",
  },
  {
    name: "Rubia",
    tag: "Tratamento de Canal",
    text: "Quero parabenizar o atendimento do dentista dr Victor, fiz meu canal com ele e fiquei muito satisfeita.",
  },
  {
    name: "Cida",
    tag: "Restauração de Urgência",
    text: "Quebrei meu dente da frente e precisei de uma restauração com urgência. Fui atendido pelo doutor Victor, que fez um trabalho excelente.",
  },
  {
    name: "Gilvanete",
    tag: "Lentes de Resina",
    text: "Há 05 dias fiz lentes de resina na Green Smile, ótima clínica e atendimento impecável do começo ao fim.",
  },
];

export const FAQS = [
  {
    q: "O tratamento com Invisalign dói?",
    a: "Não. Os alinhadores aplicam forças leves e contínuas. É normal sentir uma leve pressão nos primeiros dias de cada placa, o que passa rapidamente e é bem mais confortável que o aparelho fixo tradicional.",
  },
  {
    q: "Quanto tempo dura um implante dentário?",
    a: "Com higiene adequada e acompanhamento periódico, o implante pode durar décadas — em muitos casos, a vida toda. Utilizamos implantes de titânio de alta performance com garantia de fabricante.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Cartão de crédito em até 12x, cartão de débito, PIX, boleto e financiamento odontológico. Montamos um plano que caiba no seu orçamento.",
  },
  {
    q: "Como é a primeira consulta?",
    a: "É uma avaliação completa e sem compromisso: conversamos sobre seus objetivos, fazemos exame clínico e, quando necessário, exames de imagem. Ao final você recebe um plano de tratamento com valores transparentes.",
  },
];
