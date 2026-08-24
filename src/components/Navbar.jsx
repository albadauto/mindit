import React, { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { nav } from "../data/content.js";
import { IconMenu, IconClose } from "./Icons.jsx";

export default function Navbar({ home = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const anchor = (href) => (home ? href : `/${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled || open ? "navbar--scrolled" : ""}`}>
        <div className="container">
          <a href={home ? "#top" : "/"} aria-label="Mind it! — página inicial">
            <Logo size={34} />
          </a>

          <nav className="nav-links" aria-label="Navegação principal">
            {nav.map((item) => (
              <a key={item.href} href={anchor(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a href={anchor("#contato")} className="btn btn-ghost btn-sm">
              Conhecer soluções
            </a>
            <a href={anchor("#contato")} className="btn btn-primary btn-sm">
              Criar meu SaaS
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {nav.map((item) => (
          <a key={item.href} href={anchor(item.href)} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={anchor("#contato")} className="btn btn-primary" onClick={() => setOpen(false)}>
          Conversar sobre meu SaaS
        </a>
      </div>
    </>
  );
}
