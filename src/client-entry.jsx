import React from "react";
import { hydrateRoot } from "react-dom/client";
import Root from "./Root.jsx";

const container = document.getElementById("root");

if (container) {
  hydrateRoot(container, <Root path={window.location.pathname} />);
}

// Só ativa o estado "oculto antes de revelar" depois que o JS está de
// fato rodando — garante que o conteúdo nunca fique preso em opacity:0
// caso o script demore, falhe ou seja bloqueado.
requestAnimationFrame(() => {
  document.documentElement.classList.add("js-reveal-ready");
});
