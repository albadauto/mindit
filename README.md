# mindit. — site institucional

Site institucional em **React** para a mindit., empresa de **Inteligência
Artificial sob demanda**. Construído com foco em três coisas: visual
tecnológico e de alto padrão, performance, e SEO técnico completo — a base
necessária para disputar posições no Google em buscas relacionadas a IA.

## Stack

- **React 18** — componentes reais, com estado (menu mobile, acordeão do
  FAQ) e efeitos (revelação ao rolar, rede de nós animada no hero).
- **esbuild** — empacotador do bundle do cliente e do CSS. Leve, rápido, sem
  configuração complexa.
- **SSG (Static Site Generation) artesanal** — `build.mjs` usa
  `react-dom/server` para renderizar o HTML completo em tempo de build.
  O conteúdo já chega pronto no HTML (bom para SEO e para a primeira
  pintura da página) e o React reidrata no cliente para ativar a
  interatividade.
- **Zero dependência de framework pesado** — sem Next.js/Vite: só o
  necessário, o que resulta em um projeto simples de entender e hospedar
  em qualquer lugar (Vercel, Netlify, Cloudflare Pages, S3+CloudFront, ou
  um servidor comum).

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install       # instala react, react-dom e esbuild
npm run dev       # build + observa alterações + serve em http://localhost:4173
```

Para gerar a versão de produção:

```bash
npm run build     # gera a pasta dist/ pronta para deploy
npm run serve     # opcional: serve dist/ localmente para conferir
```

A pasta `dist/` contém um site 100% estático (HTML, CSS, JS, ícones,
`sitemap.xml`, `robots.txt`) — pode ser publicada em qualquer serviço de
hospedagem estática.

## Antes de publicar — checklist

1. ~~Domínio real~~ — já configurado: `mindit.dev` (`url` em
   `src/data/content.js`), usado no canonical, Open Graph, JSON-LD e
   `sitemap.xml`.
2. ~~E-mail de contato~~ — já configurado: `contato@mindit.dev`.
3. **Telefone e redes sociais**: `phoneDisplay`, `phoneHref` e os links de
   LinkedIn/Instagram/X em `src/data/content.js` ainda estão como
   placeholder — atualize com os dados reais.
4. **Depoimentos**: os três depoimentos em `testimonials` são
   representativos/placeholder — substitua por citações reais de clientes
   antes do lançamento (ou remova a seção).
5. **CNPJ e razão social**: ajuste o rodapé (`src/components/Footer.jsx`) e
   o `legalName` em `content.js`.
6. **Analytics**: adicione seu snippet de analytics (GA4, Plausible, etc.)
   em `index.template.html`, antes de `</head>`.

## SEO — o que já está implementado

- HTML semântico (`header`, `main`, `section`, `footer`, hierarquia única
  de `h1`/`h2`/`h3`) e conteúdo 100% presente no HTML renderizado no
  servidor (não depende de JavaScript para ser indexado).
- `<title>` e `meta description` únicos e otimizados para as buscas de IA.
- Open Graph e Twitter Cards para compartilhamento em redes sociais.
- Dados estruturados (JSON-LD) de `Organization`, `WebSite`, `Service`
  (catálogo dos serviços de IA) e `FAQPage` — a `FAQPage` habilita rich
  snippets de perguntas frequentes diretamente no resultado de busca.
- `sitemap.xml` e `robots.txt` gerados automaticamente no build.
- Performance: CSS e JS minificados, fontes com `preconnect` e
  `font-display: swap`, sem dependências pesadas de terceiros.
- Acessibilidade: link "pular para o conteúdo", `aria-label`/`aria-expanded`
  nos controles interativos, contraste verificado, respeita
  `prefers-reduced-motion`.

### Um ponto importante sobre "aparecer em primeiro no Google"

Nenhuma implementação técnica garante a primeira posição no Google — isso
depende de fatores fora do código: autoridade de domínio, backlinks
relevantes, conteúdo publicado ao longo do tempo, concorrência do termo e
sinais de qualidade que só se constroem depois do site no ar. O que este
projeto entrega é a **base técnica completa** que qualquer estratégia de
SEO precisa para funcionar bem. Passos recomendados depois do lançamento:

1. Cadastrar o site no [Google Search Console](https://search.google.com/search-console)
   e enviar o `sitemap.xml`.
2. Publicar conteúdo regularmente (blog/artigos) sobre os temas de IA que
   vocês dominam — é o que mais pesa a médio prazo.
3. Conseguir menções e links de sites relevantes do setor.
4. Acompanhar Core Web Vitals no [PageSpeed Insights](https://pagespeed.web.dev).

## Estrutura do projeto

```
src/
  data/content.js        → todo o copy do site (textos, serviços, FAQ, SEO)
  components/             → componentes React de cada seção
  styles.css               → design system (cores, tipografia, layout)
  App.jsx                   → composição das seções
  client-entry.jsx          → hidratação no navegador
  ssr-entry.jsx              → renderização no servidor (usado só no build)
public/                    → favicons, imagem Open Graph (gerados por
                              scripts/generate-assets.mjs a partir de SVG)
build.mjs                  → script de build (SSG + bundle)
index.template.html        → template do HTML com placeholders de SEO
```

## Paleta e identidade

Extraída diretamente da logo da mindit.:

| Token | Cor | Uso |
|---|---|---|
| `--navy-950` | `#07091c` | fundo principal (hero, rodapé, seções escuras) |
| `--navy-900` | `#0b0f2e` | painéis e superfícies escuras |
| `--cream-100` | `#f6f3ea` | fundo claro / texto sobre navy |
| `--accent-violet` → `--accent-cyan` | `#7c6cff` → `#35e0c8` | gradiente de destaque (CTAs, ícones, títulos) |

Tipografia: **Poppins** (a mesma família usada na wordmark original),
carregada via Google Fonts com `font-display: swap`.
