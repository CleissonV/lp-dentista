<h1 align="center">Clínica Odontológica</h1>

<p align="center">
  Landing page moderna para clínica odontológica com tema azul, galeria de fotos, equipe e agendamento online.
  <br /><br />
  <a href="https://lp-dentista.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page profissional para clínica odontológica. Design limpo com gradiente azul hospitalar, hero com shapes blob orgânicos e vídeo da clínica. Apresenta serviços, galeria de casos, equipe de dentistas e formulário de agendamento.

## Funcionalidades

- Hero com formas blob animadas via CSS e vídeo da clínica
- Galeria de fotos dos procedimentos
- Cards de equipe com foto circular e registro CRO
- 6 serviços odontológicos detalhados
- Seção de depoimentos de pacientes
- Formulário de agendamento com gradiente azul

## Stack

- **React 18 + TypeScript** — componentes reutilizáveis e bem tipados
- **Tailwind CSS 3** — utility-first com classes responsivas
- **Framer Motion 11** — animações de entrada com IntersectionObserver
- **Vite 5** — build ultrarrápido
- **react-icons** — ícones de múltiplas bibliotecas (fa, md, lu)

## Instalação

```bash
git clone https://github.com/CleissonV/lp-dentista
cd lp-dentista
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # serviços, equipe, depoimentos, galeria
├── types/
│   └── index.ts         # DentalService, TeamMember, Testimonial, GalleryImage
├── components/
│   └── ui/
│       ├── SectionTitle.tsx
│       ├── ServiceCard.tsx
│       ├── TeamCard.tsx
│       ├── TestimonialCard.tsx
│       └── GalleryImage.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Team.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
