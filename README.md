# ❄ Glubers Board

Companion webapp do servidor **Minecraft vanilla dos Glubers** — uma colônia
comunitária na floresta de gelo, sobrevivendo ao **inverno eterno**.

> _A primeira colônia dos Glubers no inverno eterno._

Este é o **MVP visual**: base de UI, estrutura do app e conteúdo mockado.
Sem backend, sem banco de dados e sem autenticação por enquanto.

---

## ✨ O que tem aqui

- **Home / Dashboard** — resumo da colônia, cards de stats, missões ativas,
  últimos registros, capítulo atual da lore e objetivos em andamento.
- **Missões** — lista mockada com tipo, dificuldade, status, participantes e histórico.
- **Objetivos da Colônia** — metas globais com barra de progresso.
- **Crônicas** — a lore da colônia, capítulo a capítulo.
- **Players** — a tribo dos Glubers (sem ranking).

Tudo com estética **voxel / pixel / frozen survival**: fundo escuro e frio,
azul-gelo, branco-neve, madeira escura, detalhes em ciano, bordas quadradas,
neve caindo e brilhos sutis de gelo.

> Visual **fan-made**, com arte própria (ícones em SVG pixelado). **Não usa
> assets oficiais** da Mojang/Microsoft.

---

## 🧊 Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- Fontes via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
  (Press Start 2P + VT323, self-hosted)
- Pronto para deploy na [Vercel](https://vercel.com/)

Sem dependências de UI extras — componentes e animações são próprios.

---

## 🚀 Rodando localmente

Pré-requisito: **Node.js 18.18+** (recomendado 20+).

```bash
# 1. Instalar dependências
npm install

# 2. Ambiente de desenvolvimento (http://localhost:3000)
npm run dev

# 3. Build de produção
npm run build

# 4. Servir o build de produção
npm run start

# Lint
npm run lint
```

---

## 🗂️ Estrutura do projeto

```
src/
├── app/                  # App Router (rotas, layout, estilos globais)
│   ├── layout.tsx        # Layout raiz: fontes + AppShell + metadata
│   ├── globals.css       # Base do tema (cores, scrollbar, utilitários)
│   ├── page.tsx          # Home / Dashboard
│   ├── missions/         # /missions
│   ├── objectives/       # /objectives
│   ├── chronicles/       # /chronicles
│   ├── players/          # /players
│   ├── not-found.tsx     # 404 temático
│   └── icon.svg          # Favicon (floco de neve)
│
├── components/           # Componentes de UI
│   ├── AppShell.tsx      # Casca: fundo + header + main + footer
│   ├── Header.tsx        # Marca / logo
│   ├── Navigation.tsx    # Navegação (client: link ativo + menu mobile)
│   ├── SnowBackground.tsx# Neve caindo + aurora (determinístico, sem hydration mismatch)
│   ├── PixelPanel.tsx    # Container base estilo placa/bloco
│   ├── StatCard.tsx      # Card de stat do dashboard
│   ├── MissionCard.tsx
│   ├── ObjectiveCard.tsx
│   ├── ChronicleCard.tsx
│   ├── PlayerCard.tsx
│   ├── Badge.tsx         # Pílula (tipo/dificuldade/status)
│   ├── ProgressBar.tsx
│   ├── PageHeading.tsx
│   └── icons.tsx         # Ícones em pixel art (SVG)
│
├── data/                 # Conteúdo mockado (sem API / sem DB)
│   ├── players.ts
│   ├── missions.ts
│   ├── objectives.ts
│   └── chronicles.ts
│
├── lib/                  # Utilitários
│   ├── cn.ts             # Junção de classes
│   ├── nav.ts            # Itens de navegação
│   └── missionMeta.ts    # Rótulos/estilos de tipo, dificuldade e status
│
└── types/                # Tipos compartilhados
    └── index.ts
```

Quer editar o conteúdo? Mexa apenas nos arquivos em [`src/data/`](src/data).
Os tipos em [`src/types/index.ts`](src/types/index.ts) garantem consistência.

---

## ▲ Deploy na Vercel

1. Faça push do repositório para o GitHub (já está em `brskt-dev/glubers-board`).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta **Next.js** automaticamente — não precisa configurar nada:
   - Framework: `Next.js`
   - Build Command: `next build` (padrão)
   - Output: gerenciado pela Vercel
4. Clique em **Deploy**. Pronto.

A cada `git push` na branch principal, a Vercel cria um novo deploy.

---

## 🧭 Próximos passos (técnicos)

- Persistência real: adicionar uma fonte de dados (ex.: Vercel KV, Postgres,
  Notion ou um CMS headless) para substituir os mocks de `src/data`.
- API/rotas: criar Route Handlers (`src/app/api/...`) quando houver dados dinâmicos.
- Autenticação: integrar login (ex.: Auth.js) para área de edição dos Glubers.
- Ranking / conquistas: telas e dados quando fizer sentido para o servidor.
- Conteúdo: imagens próprias, mapa da colônia e galeria de builds.
- Qualidade: testes (Vitest/Playwright) e migração de `next lint` para a ESLint CLI
  (recomendado antes do Next.js 16).

---

Feito para a tribo. ❄
