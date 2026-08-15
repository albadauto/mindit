import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Differentiators from "./components/Differentiators.jsx";
import Results from "./components/Results.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Faq from "./components/Faq.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      {/* Definição única do gradiente de marca, usada pelos ícones em SVG */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c6cff" />
            <stop offset="55%" stopColor="#5b8bff" />
            <stop offset="100%" stopColor="#35e0c8" />
          </linearGradient>
        </defs>
      </svg>

      <a href="#servicos" className="visually-hidden">
        Pular para o conteúdo principal
      </a>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Differentiators />
        <Results />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
