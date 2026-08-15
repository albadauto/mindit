import React from "react";
import Logo from "./Logo.jsx";
import { site, services, nav } from "../data/content.js";
import { IconLinkedin, IconInstagram, IconX } from "./Icons.jsx";

const currentYear = 2026;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo tone="light" size={24} />
            <p>
              Plataforma de Inteligência Artificial sob demanda: agentes
              autônomos, automação, IA generativa e ciência de dados para
              empresas que querem competir na era da IA.
            </p>
            <div className="footer-social">
              <a href={site.social.linkedin} aria-label="mindit. no LinkedIn" target="_blank" rel="noreferrer noopener">
                <IconLinkedin />
              </a>
              <a href={site.social.instagram} aria-label="mindit. no Instagram" target="_blank" rel="noreferrer noopener">
                <IconInstagram />
              </a>
              <a href={site.social.x} aria-label="mindit. no X" target="_blank" rel="noreferrer noopener">
                <IconX />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Serviços de IA</h4>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#servicos">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <span>{site.addressLocality} · {site.addressRegion}, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} mindit. Inteligência Artificial. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00 · Feito com IA sob demanda.</span>
        </div>
      </div>
    </footer>
  );
}
