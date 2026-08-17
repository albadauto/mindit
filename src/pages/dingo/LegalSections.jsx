import React from "react";

/**
 * Renderiza uma lista de seções legais (título + parágrafos + lista
 * opcional) a partir dos dados estruturados em src/data/dingo-content.js.
 */
export default function LegalSections({ sections }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="legal-block">
          <h2>{section.title}</h2>
          {section.paragraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {section.list && (
            <ul className="legal-list">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.paragraphsAfter?.map((p, i) => (
            <p key={`after-${i}`}>{p}</p>
          ))}
        </section>
      ))}
    </>
  );
}
