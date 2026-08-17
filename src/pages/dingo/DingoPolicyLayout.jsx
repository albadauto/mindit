import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { dingo } from "../../data/dingo-content.js";

/**
 * Layout compartilhado pelas páginas legais do Dingo (/dingo/politica e
 * /dingo/privacidade). Mantém a navbar e o rodapé do site institucional
 * para consistência de marca, com um cabeçalho próprio com o mascote e
 * a identidade do Dingo.
 */
export default function DingoPolicyLayout({ eyebrow, title, subtitle, activePath, children }) {
  return (
    <>
      <a href="#dingo-conteudo" className="visually-hidden">
        Pular para o conteúdo principal
      </a>

      <Navbar home={false} />

      <main>
        <section className="dingo-hero">
          <div className="container dingo-hero-inner">
            <img
              src={dingo.logo}
              width="88"
              height="88"
              alt="Dingo — assistente de Inteligência Artificial da mindit."
              className="dingo-avatar"
            />
            <div>
              <span className="eyebrow dingo-eyebrow">{eyebrow}</span>
              <h1>{title}</h1>
              {subtitle && <p className="dingo-hero-sub">{subtitle}</p>}
              <p className="dingo-updated">Última atualização: {dingo.lastUpdated}</p>
            </div>
          </div>
        </section>

        <section id="dingo-conteudo" className="section dingo-legal-section">
          <div className="container dingo-legal">
            <nav className="dingo-breadcrumb" aria-label="Navegação estrutural">
              <a href="/">Início</a>
              <span aria-hidden="true">/</span>
              <span>Dingo</span>
              <span aria-hidden="true">/</span>
              <a href={activePath} aria-current="page">
                {title}
              </a>
            </nav>

            <div className="dingo-legal-switch">
              <a href="/dingo/politica" className={activePath === "/dingo/politica" ? "active" : ""}>
                Política de Uso
              </a>
              <a href="/dingo/privacidade" className={activePath === "/dingo/privacidade" ? "active" : ""}>
                Política de Privacidade
              </a>
            </div>

            <article className="legal-content">{children}</article>
          </div>
        </section>
      </main>

      <Footer home={false} />
    </>
  );
}
