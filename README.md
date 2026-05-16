# 🛒 Dev Store — E-commerce

Projeto de e-commerce desenvolvido com **Next.js 14 (App Router)**, com foco em performance, escalabilidade e boas práticas de desenvolvimento.

---

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)

---

## 📁 Estrutura do Projeto

```
dev-store/
├── frontend/
│   ├── public/                  # Arquivos estáticos públicos
│   ├── src/
│   │   ├── actions/             # Server Actions do Next.js
│   │   ├── app/
│   │   │   └── (site)/
│   │   │       ├── categories/
│   │   │       │   └── [slug]/
│   │   │       │       └── page.tsx      # Página de categoria dinâmica
│   │   │       ├── product/
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx      # Página de produto dinâmica
│   │   │       ├── layout.tsx            # Layout raiz do site
│   │   │       └── page.tsx              # Home
│   │   ├── components/
│   │   │   ├── categories/      # Componentes de categorias
│   │   │   ├── home/            # Componentes da página inicial
│   │   │   │   ├── banners.tsx
│   │   │   │   ├── most-sold-products.tsx
│   │   │   │   ├── most-viewed-products.tsx
│   │   │   │   └── product-list.tsx
│   │   │   ├── layout/          # Header, Footer, etc.
│   │   │   └── product/         # Componentes de produto
│   │   │       ├── image-slider.tsx
│   │   │       ├── product-description.tsx
│   │   │       ├── product-details.tsx
│   │   │       ├── related-products.tsx
│   │   │       └── related-products-skeleton.tsx
│   │   ├── hooks/               # Custom React Hooks
│   │   ├── libs/                # Utilitários e integrações
│   │   ├── store/               # Gerenciamento de estado global
│   │   ├── types/               # Tipagens TypeScript
│   │   │   ├── banner.ts
│   │   │   ├── menu-items.ts
│   │   │   └── product.ts
│   │   ├── data.ts              # Dados estáticos / mock
│   │   ├── globals.css          # Estilos globais
│   │   └── favicon.ico
│   ├── .env                     # Variáveis de ambiente (não versionar)
│   ├── .gitignore
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts (se aplicável)
│   └── tsconfig.json
```

---

## ⚙️ Pré-requisitos

- **Node.js** >= 18.x
- **npm**, **yarn**, **pnpm** ou **bun**

---

## 🏃 Rodando o Projeto

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/dev-store.git
cd dev-store/frontend
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto `frontend/` com base no `.env.example`:

```env
# Exemplo
NEXT_PUBLIC_API_URL=https://sua-api.com
```

> ⚠️ Nunca versione o arquivo `.env` com dados sensíveis.

---

## 📦 Scripts Disponíveis

| Comando           | Descrição                          |
|-------------------|------------------------------------|
| `npm run dev`     | Inicia em modo desenvolvimento     |
| `npm run build`   | Gera o build de produção           |
| `npm run start`   | Inicia o servidor de produção      |
| `npm run lint`    | Executa o linter (ESLint)          |

---

## 🌐 Deploy

O projeto é otimizado para deploy na [Vercel](https://vercel.com):

1. Faça push para o GitHub
2. Importe o repositório na Vercel
3. Configure as variáveis de ambiente
4. Deploy automático a cada `git push`

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para outras opções.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.