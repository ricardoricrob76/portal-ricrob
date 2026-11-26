# Ricardo Roberto de Lima — Portal Profissional

Portal pessoal premium desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

## Stack

- **Next.js 15** — Framework React com App Router
- **TypeScript** — Tipagem estática
- **Tailwind CSS** — Estilização utilitária
- **Framer Motion** — Animações fluidas
- **Lucide React** — Ícones modernos

## Pré-requisitos

- Node.js 18.17+ 
- npm, yarn ou pnpm

## Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Build para produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx      # Layout raiz com SEO
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Teaching.tsx
│   ├── Projects.tsx
│   ├── Talks.tsx
│   ├── Publications.tsx
│   ├── Certifications.tsx
│   ├── Testimonials.tsx
│   ├── Partners.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── AnimatedCounter.tsx
│   ├── SectionWrapper.tsx
│   └── SectionHeader.tsx
└── lib/
    ├── data.ts         # Dados centralizados
    └── utils.ts        # Utilitários
```

## Personalização

Todos os dados do portal estão centralizados em `src/lib/data.ts`. Para atualizar informações, edite esse arquivo.

## Deploy

Recomendado: [Vercel](https://vercel.com) — deploy automático com `git push`.

```bash
npm install -g vercel
vercel
```
