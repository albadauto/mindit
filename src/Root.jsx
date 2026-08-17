import React from "react";
import App from "./App.jsx";
import DingoPolitica from "./pages/dingo/DingoPolitica.jsx";
import DingoPrivacidade from "./pages/dingo/DingoPrivacidade.jsx";

/**
 * Roteador mínimo baseado em caminho (sem dependência de biblioteca de
 * rotas). Usado tanto no SSR (build.mjs / ssr-entry.jsx) quanto na
 * hidratação no cliente (client-entry.jsx) — as duas chamadas precisam
 * resolver para o mesmo componente a partir do mesmo `path`.
 */
export const routes = {
  "/": App,
  "/dingo/politica": DingoPolitica,
  "/dingo/privacidade": DingoPrivacidade,
};

function normalize(path) {
  if (!path) return "/";
  const clean = path.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean || "/";
}

export default function Root({ path = "/" }) {
  const Page = routes[normalize(path)] || App;
  return <Page />;
}
