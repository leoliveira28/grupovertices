# Grupo Vertices · grupovertices.com.br

Landing page de captação da consultoria tributária Grupo Vertices (fundadora: Re Lima).
Construída com **Next.js 16 (App Router)**, React 19, TypeScript e CSS puro (sem framework de UI).
Estilo: grid suíço com a identidade da marca (das capas dos PDFs) — preto quente, dourado e branco.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## ⚠️ Antes de publicar (obrigatório)

1. **WhatsApp**: troque o número placeholder em [`src/lib/site.ts`](src/lib/site.ts)
   (`whatsapp: "5511999999999"` → número real, formato `55` + DDD + número).
   Todos os CTAs da página (header, hero, setores, CTA final, rodapé) saem desse arquivo.
2. **E-mail**: confirme `email` em `src/lib/site.ts`.
3. **Opcional**: preencha `cnpj`, `address` (cidade/UF) e `social` no mesmo arquivo —
   renderizam no rodapé e no schema.org só quando preenchidos.

## Deploy

A página é 100% estática. Opções:

- **Vercel** (recomendado): importe o repositório e faça deploy; aponte o domínio
  `grupovertices.com.br` e `www` para a Vercel (registros A/CNAME que o painel indicar).
- **Qualquer host Node**: `npm run build && npm start` (porta via `PORT`).

## SEO e GEO (o que já está incluído)

- Metadata completa (title, description, canonical, Open Graph, Twitter) via Metadata API.
- `app/opengraph-image.tsx`: imagem de compartilhamento gerada no build (1200×630).
- Dados estruturados JSON-LD: `LegalService` (serviços, fundadora, `areaServed: Brasil`),
  `WebSite` e `FAQPage` (espelha o FAQ visível — elegível a rich results).
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, `app/icon.svg`.
- `public/llms.txt`: resumo estruturado do site para engines generativos (ChatGPT,
  Perplexity, Gemini, Claude).
- HTML semântico (h1 único, landmarks, FAQ nativo em `<details>`), página estática
  (rápida e totalmente renderizada para crawlers).

## Estrutura

```
src/
  app/
    layout.tsx            fontes (Archivo variável), metadata global
    page.tsx              composição da página + JSON-LD
    globals.css           design system (tokens OKLCH, grid, motion)
    robots.ts / sitemap.ts / manifest.ts / opengraph-image.tsx / icon.svg
  components/             header, hero, urgência, serviços, setores, método,
                          sobre, FAQ, CTA final, rodapé, ícones
  lib/
    site.ts               ⚠️ CONFIGURAÇÃO (WhatsApp, e-mail, marca)
    content.ts            textos: serviços, setores, método, FAQ
```

Conteúdo tributário baseado nas apresentações internas por setor
(Tema 69 STF, Tema 1.125/1.182 STJ, LC 214/2025, art. 168 do CTN).
