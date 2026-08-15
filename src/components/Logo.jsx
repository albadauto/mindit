import React from "react";

/**
 * Wordmark "mindit." — réplica fiel da identidade visual oficial:
 * sans-serif geométrica em peso bold, minúsculas, com o ponto final
 * na mesma cor do texto (versão branca/cream sobre fundo navy).
 */
export default function Logo({ tone = "light", size = 24, className = "", withTagline = false }) {
  const color = tone === "light" ? "var(--cream-100)" : "var(--navy-950)";
  return (
    <span
      className={`logo-mark ${className}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        lineHeight: 1,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          fontFamily: '"Poppins", "Segoe UI", sans-serif',
          fontWeight: 700,
          fontSize: size,
          letterSpacing: "-0.03em",
          color,
        }}
      >
        mindit
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: size * 0.16,
            height: size * 0.16,
            borderRadius: "50%",
            background: color,
            marginLeft: size * 0.05,
            transform: `translateY(${size * 0.02}px)`,
          }}
        />
      </span>
      {withTagline && (
        <span
          style={{
            marginTop: 4,
            fontSize: size * 0.28,
            fontWeight: 500,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: tone === "light" ? "var(--muted-on-navy)" : "var(--muted)",
          }}
        >
          IA sob demanda
        </span>
      )}
    </span>
  );
}
