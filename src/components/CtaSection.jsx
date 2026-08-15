import React from "react";
import { site } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function CtaSection() {
  return (
    <section id="contato" className="cta-section">
      <div className="container">
        <Reveal as="div" className="cta-panel">
          <h2>Pronto para colocar IA sob demanda no seu negócio?</h2>
          <p>
            Fale com a mindit. hoje e receba um diagnóstico gratuito com as
            melhores oportunidades de Inteligência Artificial para a sua
            empresa.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={`mailto:${site.email}?subject=Diagn%C3%B3stico%20de%20IA%20sob%20demanda`}
            >
              Solicitar diagnóstico gratuito
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
