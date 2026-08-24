import React from "react";
import { process } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Process() {
  return (
    <section id="como-funciona" className="section process-section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow" style={{ color: "var(--accent-violet)" }}>
            Como funciona
          </span>
          <h2>Da oportunidade ao SaaS em produção</h2>
          <p>
            Estratégia, produto, tecnologia e operação em um único parceiro,
            com ciclos curtos e decisões guiadas pelo negócio.
          </p>
        </Reveal>

        <div className="process-grid">
          <div className="process-line" aria-hidden="true" />
          {process.map((item, i) => (
            <Reveal as="div" className="process-step" delay={i * 90} key={item.step}>
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
