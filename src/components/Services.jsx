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
            Nossas soluções
          </span>
          <h2>
            Do SaaS sob medida ao produto pronto para usar
          </h2>
          <p>
            Criamos plataformas alinhadas ao seu modelo de negócio e também
            oferecemos soluções próprias para acelerar operações desde o primeiro dia.
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
