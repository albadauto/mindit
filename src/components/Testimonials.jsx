import React from "react";
import { testimonials } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Testimonials() {
  return (
    <section className="section testimonials-section" aria-label="Formas de trabalhar com a Mind it!">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ color: "var(--accent-violet)" }}>
            Escolha o melhor caminho
          </span>
          <h2>Uma parceria para cada momento do seu produto</h2>
          <p>Comece do zero, implante uma solução pronta ou evolua o que já está em operação.</p>
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
