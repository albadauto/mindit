import React, { useState } from "react";
import { faq } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow" style={{ color: "var(--accent-violet)" }}>
            Perguntas frequentes
          </span>
          <h2>Tudo o que você precisa saber sobre IA sob demanda</h2>
        </Reveal>

        <Reveal as="div" className="faq-list">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq-item ${open ? "open" : ""}`} key={item.question}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    {item.question}
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-answer" id={`faq-panel-${i}`} role="region">
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
