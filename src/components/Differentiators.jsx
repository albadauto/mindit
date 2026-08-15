import React from "react";
import { differentiators } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Differentiators() {
  return (
    <section id="diferenciais" className="section diff-section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ color: "var(--accent-cyan)" }}>
            Por que a mindit.
          </span>
          <h2>Tecnologia de ponta, entregue com velocidade</h2>
          <p>
            Combinamos os melhores modelos de IA do mercado com um processo de
            implementação enxuto — para sua empresa competir com quem já
            nasceu digital.
          </p>
        </Reveal>

        <Reveal className="diff-grid">
          {differentiators.map((item, i) => (
            <div className="diff-card" key={item.title}>
              <span className="diff-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
