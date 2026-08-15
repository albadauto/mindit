import React from "react";
import { testimonials } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Testimonials() {
  return (
    <section className="section testimonials-section" aria-label="Depoimentos de clientes">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ color: "var(--accent-violet)" }}>
            Depoimentos
          </span>
          <h2>Empresas que já aceleraram com IA sob demanda</h2>
          <p>Exemplos representativos dos resultados que buscamos entregar em cada projeto.</p>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="testimonial-card" delay={i * 90} key={t.author}>
              <span className="quote-mark" aria-hidden="true">
                "
              </span>
              <p className="quote">{t.quote}</p>
              <figcaption className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true" />
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
