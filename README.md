# Green Smile Gateway

Create a high-end, luxury, biophilic-inspired dental clinic web application named "Green Smile Odontologia", based in Jabaquara, São Paulo - SP. The design must be pixel-perfect, highly responsive, smooth, and use modern UX/UI best practices with Tailwind CSS, Lucide Icons, and Framer Motion animations.

### 🌟 DESIGN SYSTEM & COLOR PALETTE
- **Primary (Deep Forest Green):** `#1B4332` (Header, Footer, Titles, Hero Backgrounds, Primary Dark Cards)
- **Secondary (Emerald Green):** `#2D6A4F` (Subtitles, Hover States, Active Badges)
- **Accent (Warm Sand / Luxury Gold):** `#D4A373` (Primary CTA Buttons, Star Ratings, Highlight Badges)
- **Accent Hover:** `#C49566`
- **Highlight Text:** `#E9C46A` (Golden text in main headlines)
- **Background Light (Cream / Soft Sand):** `#F5F0E8` (Section background contrast)
- **WhatsApp Color:** `#25D366`
- **Typography:**
  - Headings & Titles: 'Playfair Display', serif
  - Body & UI Controls: 'Inter', sans-serif
- **Styling Vibe:** Premium aesthetic, glassmorphism (`backdrop-blur-md`), rounded cards (`rounded-2xl` & `rounded-3xl`), biophilic feel with soothing greens and warm wood/sand tones.

---

### 📍 CLINIC DATA & BRANDING
- **Name:** Green Smile Clínica Odontológica
- **Logo Image URL:** https://media.base44.com/images/public/6981bf961688af1307193755/247fe50cb_logo.png
- **Address:** Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara, São Paulo - SP, 04309-011
- **WhatsApp Phone:** (11) 97060-4418 / Clean format: `5511970604418`
- **Email:** greensmile.odonto@gmail.com
- **Working Hours:** Seg a Sex: 9h às 19h | Sáb: 9h às 14h
- **Instagram:** https://www.instagram.com/greensmile_odonto/
- **Facebook:** https://www.facebook.com/people/Green-Smile-Cl%C3%ADnica-Odontol%C3%B3gica/61582121762981/

---

### 🧩 APPLICATION STRUCTURE & PAGES

#### 1. HEADER (Fixed Sticky Navigation)
- Dynamic background: Transparent at top, turns into `bg-white/95 backdrop-blur-md shadow-sm` when scrolled down.
- Left: Green Smile Logo image (`h-20`).
- Navigation Links: Início, Sobre (`#sobre`), Estrutura (`#estrutura`), Serviços (`/Servicos`), Antes & Depois (`/AntesDepois`), Depoimentos (`/Depoimentos`), Contato (`/Contato`).
- Right Action: Instagram Icon, Facebook Icon, WhatsApp Icon, and a rounded CTA button "Agendar avaliação" opening WhatsApp (`https://wa.me/5511970604418?text=Olá! Gostaria de agendar uma avaliação.`).
- Mobile View: Hamburger menu triggering a right-side Sheet drawer with all links and CTAs.

#### 2. HERO SECTION
- Full-screen high-impact hero (`min-h-[90vh]`) with background video support or high-resolution clinical ambient image with gradient overlay (`from-[#1B4332]/95 via-[#1B4332]/80 to-black/40`).
- Pulsing Badge at top: "• Agendas Abertas para Este Mês" in a translucent gold pill.
- Main Headline (Serif): "Seu novo sorriso 
começa no Jabaquara."
- Social Proof: 5 Gold Stars rating with text "5/5 no Google".
- CTAs: Primary gold button "Agendar avaliação" (opens WhatsApp) + Outline glassmorphic button "Conhecer serviços" (scrolls to services).
- Trust Badge: Heart icon + "Atendimento humanizado".
- Right Side (Desktop): Large glowing Green Smile brand badge with ambient drop-shadow.

#### 3. ABOUT SECTION (`#sobre`)
- Headline: "Sobre a Green Smile - Odontologia moderna com acolhimento de verdade".
- Body Text highlighting stress-free dental care, high technology, and humanized approach.
- Left side: 4-photo asymmetrical grid showcasing modern clinic interiors.
- Feature Cards: "Ambiente biofílico" (calm, natural decor) and "Equipe especializada" (graduates from Brazil's top universities).

#### 4. SERVICES SECTION (`#servicos` & `/Servicos` Page)
- Grid of 6 interactive service cards:
  1. **Prótese Protocolo Com Implantes:** "Recupere todos os dentes fixos sobre implantes com máxima segurança e conforto."
  2. **Implantes Dentários:** "Recupere dentes perdidos com implantes de última geração."
  3. **Lentes de Contato Dental:** "Transforme seu sorriso com facetas ultrafinas e naturais."
  4. **Clareamento Dental:** "Dentes mais brancos de forma segura e duradoura."
  5. **Ortodontia:** "Correção de mordida e alinhamento dentário para todas as idades."
  6. **Reabilitação Oral:** "Tratamento completo para devolver função e estética ao seu sorriso."
- Each card has a hover lift effect, icon, short description, and direct WhatsApp booking link.
- Include a full `/Servicos` page with a sidebar selector displaying detailed benefits, treatment duration, target audience, and scheduling CTA.

#### 5. CLINIC STRUCTURE & CHROMOTHERAPY SECTION (`#estrutura`)
- Headline: "Nossa Estrutura - Um ambiente projetado para o seu conforto".
- Description emphasizing chromotherapy lighting in dental rooms for anxiety reduction and high-end tech equipment.
- **Interactive Photo Gallery Grid (6 Photos):** Highlighting reception, waiting lounge, climatized rooms, treatment areas.
- **Lightbox Feature:** Clicking any image opens a full-screen dark modal lightbox with smooth exit animation.

#### 6. BEFORE & AFTER SECTION (`#antesdepois` & `/AntesDepois` Page)
- Filter Buttons: "Todos", "Implantes", "Invisalign", "Estética", "Clareamento".
- Interactive Cards: Hovering/clicking toggles between the "Antes" (Before) image and "Depois" (After) image with smooth crossfade, category badges, and description.

#### 7. TESTIMONIALS CAROUSEL (`#depoimentos` & `/Depoimentos` Page)
- Auto-playing carousel (5-second auto-slide) featuring real Google reviews:
  - **Lulu:** "Minha experiência foi excelente! Sempre fui muito bem atendida, e o resultado superou minhas expectativas. Meus dentes ficaram maravilhosos! Obrigado Dr. Victor." (Avaliação Geral)
  - **Douglas:** "Ótimo lugar com ambiente limpo e agradável. Fui atendido pelo dentista Victor, onde realizei o procedimento de lentes de contato. Trabalho excelente e super acessível da região..." (Lentes de Contato)
  - **Rubia:** "Quero parabenizar o atendimento do dentista dr Victor, fiz meu canal com ele e fiquei muito satisfeita..." (Tratamento de Canal)
  - **Cida:** "Quebrei meu dente da frente e precisei de uma restauração com urgência. Fui atendido pelo doutor Victor, que fez um trabalho excelente..." (Restauração de Urgência)
  - **Gilvanete:** "Há 05 dias fiz lentes de resina na green smile ótima clinica..." (Lentes de Resina)
- Includes star ratings, client initials avatar with green/gold gradient background, and manual arrow/dot controls.

#### 8. INTERACTIVE QUIZ PAGE (`/Quiz` & Home CTA Banner)
- Banner on homepage linking to the quiz: "Qual tratamento combina com você? Responda algumas perguntas rápidas."
- **5-Step Interactive Quiz:**
  - Step 1: Goal (Alinhar dentes, Dentes mais brancos, Repor dentes, Estética do sorriso, Avaliação geral)
  - Step 2: Embarrassment smiling for photos? (Sim sempre, Às vezes, Não)
  - Step 3: Fear/Anxiety of dentist? (Muito medo, Um pouco, Não tenho)
  - Step 4: Priorities? (Discreto/invisível, Rápido, Confortável, Duradouro)
  - Step 5: Age Group (18-25, 26-35, 36-50, 50+)
- **Progress Bar:** Real-time percentage indicator.
- **Smart Result Engine:** Recommends Invisalign, Clareamento, Implantes, Lentes, or Avaliação Completa with benefits breakdown.
- **Lead Capture Form:** Name, WhatsApp phone number, LGPD agreement checkbox ("Concordo em ser contatado(a)...").
- **Final Screen:** Success confirmation + direct button to open WhatsApp pre-filled with their recommended treatment.

#### 9. LOCATION & CONTACT SECTION (`#local` & `/Contato` Page)
- Embedded Google Maps Iframe pointing to `Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara, São Paulo - SP`.
- Contact Info Cards: Address, Working Hours, Phone & Email.
- **QR Code Interactive Cards:** Clickable/scannable QR cards for direct WhatsApp chat and Instagram profile.
- **Lead Contact Form:** Fields for Name, WhatsApp Phone, Email, Service Interest dropdown, Preferred Time dropdown (Manhã, Tarde, Qualquer horário), Message, and LGPD checkbox.

#### 10. FAQ SECTION (`#faq`)
- Accordion component with questions and expandable answers:
  1. O tratamento com Invisalign dói?
  2. Quanto tempo dura um implante dentário?
  3. Quais formas de pagamento vocês aceitam? (Cartão em até 12x, Débito, PIX, Boleto, Financiamento).
  4. Como é a primeira consulta?

#### 11. FOOTER & FLOATING WHATSAPP BUTTON
- **Footer:** Brand logo, summary text, quick links, services list, full contact info, copyright, links to `/Privacidade` (Privacy Policy) and `/Termos` (Terms of Use).
- **Floating WhatsApp Button:** Positioned bottom-right with pulsating online green indicator badge, hover tooltip "Fale conosco no WhatsApp!", clicking opens WhatsApp chat directly.

Ensure all animations use Framer Motion, layout is fully mobile-first responsive, typography matches Playfair Display for headers and Inter for body, and color tokens strictly use the specified HSL/HEX values.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9345ceec-2b47-43be-9203-efcf31c5a8d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
