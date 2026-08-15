import React, { useEffect, useRef } from "react";

/**
 * Rede de nós animada em <canvas> — reforça a leitura "tecnológica/IA"
 * do hero sem depender de imagens externas. Respeita prefers-reduced-motion
 * e se desliga fora da viewport para economizar CPU.
 */
export default function HeroNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points = [];
    let raf = null;
    let running = true;

    const COUNT_DENSITY = 22000; // px² por ponto
    const LINK_DIST = 130;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.round((width * height) / COUNT_DENSITY));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(150, 160, 255, ${0.16 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(210, 214, 255, 0.55)";
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    if (!prefersReduced) {
      step();
    } else {
      // desenha um frame estático
      step();
      running = false;
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !prefersReduced;
        if (running && !raf) step();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
