import React from "react";
import { site } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function CtaSection() {
  return (
    <section id="contato" className="cta-section">
      <div className="container">
        <Reveal as="div" className="cta-panel">
          <h2>Vamos transformar sua ideia em um SaaS?</h2>
          <p>
            Conte o desafio da sua empresa. A Mind it! ajuda a definir o produto,
            validar o caminho e colocar uma primeira versão no mercado.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={`mailto:${site.email}?subject=Quero%20criar%20um%20SaaS`}
            >
              Conversar sobre meu SaaS
            </a>
            <a className="btn btn-ghost" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
          </div>
          <div className="cta-contact-row">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.addressLocality} · {site.addressRegion}, Brasil</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
