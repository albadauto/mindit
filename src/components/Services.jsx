import React from "react";
import { services } from "../data/content.js";
import { serviceIcons } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ color: "var(--accent-violet)" }}>
            Serviços de IA
          </span>
          <h2>
            Os principais serviços de Inteligência Artificial, prontos para o
            seu negócio
          </h2>
          <p>
            Da automação ao atendimento, da análise de dados à IA generativa:
            acesse sob demanda a tecnologia que grandes empresas de IA levam
            meses para construir internamente.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal as="article" className="service-card" delay={(i % 4) * 70} key={service.title}>
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
