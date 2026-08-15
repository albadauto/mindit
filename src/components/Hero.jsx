import React from "react";
import { hero } from "../data/content.js";
import HeroNetwork from "./HeroNetwork.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <HeroNetwork />

      <div className="container hero-inner">
        <div>
          <span className="eyebrow hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1>
            Inteligência Artificial{" "}
            <span className="gradient-text">sob demanda</span> para o seu
            negócio.
          </h1>

          <p className="lead">{hero.subtitle}</p>

          <div className="hero-actions">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="hero-stats">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="visually-hidden">{stat.label}</dt>
                <dd className="stat-value gradient-text">{stat.value}</dd>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="ring" />
          <div className="ring ring-2" />
          <div className="orbit-card" />
          <div className="core" />
          <div className="node-chip chip-1">
            <span className="chip-dot" /> Agentes de IA
          </div>
          <div className="node-chip chip-2">
            <span className="chip-dot" /> IA Generativa
          </div>
          <div className="node-chip chip-3">
            <span className="chip-dot" /> Machine Learning
          </div>
        </div>
      </div>
    </section>
  );
}
