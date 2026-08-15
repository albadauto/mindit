import React from "react";
import { resultsStats } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Results() {
  return (
    <section id="resultados" className="section section--tight results-section">
      <div className="container">
        <Reveal as="div" className="results-panel">
          {resultsStats.map((stat) => (
            <div className="result-stat" key={stat.label}>
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
