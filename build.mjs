// build.mjs — gera o site estático de produção (SSG + hidratação React).
// Uso: npm run build  →  gera a pasta dist/ pronta para deploy.
import { build } from "esbuild";
import { readFile, writeFile, mkdir, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const dist = path.join(root, "dist");
const assets = path.join(dist, "assets");

const { site, seo, services, faq } = await import("./src/data/content.js");
const { dingoPolicySeo, dingoPrivacySeo } = await import("./src/data/dingo-content.js");

// Todas as rotas geradas estaticamente (SSG). Cada rota vira uma pasta
// própria em dist/ com seu index.html (ex.: /dingo/politica ->
// dist/dingo/politica/index.html), o que funciona com URLs "limpas" em
// qualquer host estático comum (Vercel, Netlify, Cloudflare Pages, S3...).
const routes = [
  {
    path: "/",
    seo,
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/dingo/politica",
    seo: dingoPolicySeo,
    priority: "0.3",
    changefreq: "yearly",
  },
  {
    path: "/dingo/privacidade",
    seo: dingoPrivacySeo,
    priority: "0.3",
    changefreq: "yearly",
  },
];

async function clean() {
  if (existsSync(dist)) await rm(dist, { recursive: true, force: true });
  await mkdir(assets, { recursive: true });
}

async function buildClientBundle() {
  const result = await build({
    entryPoints: [path.join(root, "src/client-entry.jsx")],
    bundle: true,
    minify: true,
    sourcemap: false,
    format: "esm",
    platform: "browser",
    target: ["es2019"],
    outfile: path.join(assets, "app.js"),
    define: { "process.env.NODE_ENV": '"production"' },
    loader: { ".js": "jsx" },
    legalComments: "none",
  });
  return result;
}

async function buildStyles() {
  await build({
    entryPoints: [path.join(root, "src/styles.css")],
    bundle: true,
    minify: true,
    outfile: path.join(assets, "style.css"),
  });
}

async function bundleSsrModule() {
  const ssrOut = path.join(root, ".ssr-tmp.mjs");
  await build({
    entryPoints: [path.join(root, "src/ssr-entry.jsx")],
    bundle: true,
    minify: false,
    format: "esm",
    platform: "node",
    target: ["node18"],
    outfile: ssrOut,
    external: ["react", "react-dom", "react-dom/server"],
    loader: { ".js": "jsx" },
  });
  // Import dinâmico precisa de uma URL file:// válida — um caminho bruto
  // do Windows (ex.: "C:\...") não é uma URL aceita pelo loader ESM e
  // gera ERR_UNSUPPORTED_ESM_URL_SCHEME. pathToFileURL resolve isso em
  // qualquer sistema operacional.
  const mod = await import(`${pathToFileURL(ssrOut).href}?t=${Date.now()}`);
  await rm(ssrOut, { force: true });
  return mod;
}

function buildJsonLd(routePath) {
  // A home ("/") recebe o conjunto completo de dados estruturados
  // (catálogo de serviços + FAQ). As demais rotas recebem apenas
  // Organization + WebSite + um breadcrumb próprio da página.
  const breadcrumbNames = {
    "/dingo/politica": "Dingo — Política de Uso",
    "/dingo/privacidade": "Dingo — Política de Privacidade",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: "mindit.",
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/favicon-512.png`,
    image: `${site.url}/og-image.png`,
    description: seo.description,
    email: site.email,
    telephone: site.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: site.addressCountry,
    },
    sameAs: Object.values(site.social),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: "mindit.",
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "pt-BR",
  };

  const serviceCatalog = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Serviços de Inteligência Artificial sob demanda",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "BR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de IA",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const isHome = routePath === "/";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: isHome
      ? [
          { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Serviços de IA", item: `${site.url}/#servicos` },
        ]
      : [
          { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbNames[routePath] || routePath,
            item: `${site.url}${routePath}`,
          },
        ],
  };

  const nodes = isHome
    ? [organization, website, serviceCatalog, faqPage, breadcrumb]
    : [organization, website, breadcrumb];

  return nodes.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join("\n");
}

async function buildHtml(route, appHtml) {
  let template = await readFile(path.join(root, "index.template.html"), "utf8");
  const canonicalUrl = route.path === "/" ? `${site.url}/` : `${site.url}${route.path}`;
  const replacements = {
    __TITLE__: route.seo.title,
    __DESCRIPTION__: route.seo.description,
    __KEYWORDS__: route.seo.keywords.join(", "),
    __URL__: site.url,
    __CANONICAL__: canonicalUrl,
    __APP_HTML__: appHtml,
    __STYLE_HREF__: "/assets/style.css",
    __SCRIPT_HREF__: "/assets/app.js",
    __JSON_LD__: buildJsonLd(route.path),
  };
  for (const [key, value] of Object.entries(replacements)) {
    template = template.split(key).join(value);
  }

  const outDir = route.path === "/" ? dist : path.join(dist, route.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), template, "utf8");
}

async function buildSitemapAndRobots() {
  const anchors = ["/#servicos", "/#como-funciona", "/#diferenciais", "/#resultados", "/#faq", "/#contato"];
  const urls = [
    ...routes.map((r) => ({ loc: r.path, changefreq: r.changefreq, priority: r.priority })),
    ...anchors.map((a) => ({ loc: a, changefreq: "weekly", priority: "0.7" })),
  ];
  const now = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (u) => `  <url>
    <loc>${site.url}${u.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>
`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");

  const robots = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  await writeFile(path.join(dist, "robots.txt"), robots, "utf8");

  const manifest = {
    name: "mindit. — Inteligência Artificial sob demanda",
    short_name: "mindit.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f2e",
    theme_color: "#0b0f2e",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  await writeFile(path.join(dist, "site.webmanifest"), JSON.stringify(manifest, null, 2), "utf8");
}

async function copyPublic() {
  const publicDir = path.join(root, "public");
  if (existsSync(publicDir)) {
    await cp(publicDir, dist, { recursive: true });
  }
}

async function main() {
  console.log("→ limpando dist/ ...");
  await clean();

  console.log("→ empacotando bundle do cliente (React + hidratação) ...");
  await buildClientBundle();

  console.log("→ empacotando CSS ...");
  await buildStyles();

  console.log("→ copiando arquivos públicos (favicons, og-image, mascote do Dingo) ...");
  await copyPublic();

  console.log(`→ renderizando ${routes.length} rota(s) no servidor (SSG) ...`);
  const ssrModule = await bundleSsrModule();
  for (const route of routes) {
    const appHtml = ssrModule.renderApp(route.path);
    await buildHtml(route, appHtml);
    console.log(`  ✓ ${route.path === "/" ? "/" : route.path + "/"}`);
  }

  console.log("→ gerando sitemap.xml, robots.txt e manifest ...");
  await buildSitemapAndRobots();

  console.log("\n✔ Build concluído em dist/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
