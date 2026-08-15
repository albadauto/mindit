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
          <h2>Da ideia à IA em produção, em quatro etapas</h2>
          <p>
            Um processo enxuto, pensado para empresas que precisam de
            resultado rápido — sem abrir mão de arquitetura sólida e
            governança.
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
