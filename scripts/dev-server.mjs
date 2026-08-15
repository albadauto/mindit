// Modo desenvolvimento: builda o projeto e reconstrói automaticamente
// a cada alteração em src/, public/ ou index.template.html, servindo
// o resultado em http://localhost:4173.
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

let building = false;
let pending = false;

function runBuild() {
  if (building) {
    pending = true;
    return;
  }
  building = true;
  const proc = spawn(process.execPath, [path.join(root, "build.mjs")], {
    cwd: root,
    stdio: "inherit",
  });
  proc.on("exit", () => {
    building = false;
    if (pending) {
      pending = false;
      runBuild();
    }
  });
}

function watch(dir) {
  try {
    fs.watch(dir, { recursive: true }, (_event, filename) => {
      if (!filename) return;
      console.log(`\n↻ alterado: ${filename} — reconstruindo...`);
      runBuild();
    });
  } catch (err) {
    console.warn(`(watch recursivo indisponível em ${dir}: ${err.message})`);
  }
}

console.log("→ build inicial...");
runBuild();

watch(path.join(root, "src"));
watch(path.join(root, "public"));
fs.watchFile(path.join(root, "index.template.html"), { interval: 500 }, () => runBuild());

// sobe o servidor estático em paralelo
spawn(process.execPath, [path.join(__dirname, "serve-dist.mjs")], {
  cwd: root,
  stdio: "inherit",
});
