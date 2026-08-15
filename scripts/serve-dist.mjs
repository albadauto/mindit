// Servidor estático simples para a pasta dist/ (sem dependências externas).
// Uso: npm run build && npm run serve
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const PORT = process.env.PORT || 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

const server = http.createServer(async (req, res) => {
  try {
    let reqPath = decodeURIComponent(req.url.split("?")[0]);
    if (reqPath === "/") reqPath = "/index.html";
    let filePath = path.join(dist, reqPath);

    let st;
    try {
      st = await stat(filePath);
    } catch {
      filePath = path.join(dist, "index.html"); // fallback SPA-like para rotas com âncora
      st = await stat(filePath);
    }
    if (st.isDirectory()) filePath = path.join(filePath, "index.html");

    const ext = path.extname(filePath);
    const body = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(body);
  } catch (err) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 — não encontrado. Rode `npm run build` primeiro.");
  }
});

server.listen(PORT, () => {
  console.log(`\n  mindit. — servindo dist/ em http://localhost:${PORT}\n`);
});
