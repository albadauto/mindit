import React from "react";

/* Ícone de serviço — traço fino, cantos arredondados, gradiente da marca */
const base = {
  fill: "none",
  stroke: "url(#icon-gradient)",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
};

export function IconAgent(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M9 3.5 12 7l3-3.5" />
      <circle cx="9" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.1" fill="currentColor" stroke="none" />
      <path d="M9.5 16.5c.9.7 2.1.7 3 0" />
      <path d="M2 12h2M20 12h2" />
    </svg>
  );
}

export function IconAutomation(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="16" r="3" />
      <path d="M9.5 9.5 14.5 14.5" />
      <path d="M17 8v2M17 3v2" />
      <path d="M7 16v2M7 21v2" />
      <path d="M4 13h2M4 13a3 3 0 0 0-2 2.8" opacity="0" />
    </svg>
  );
}

export function IconChat(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H6a2 2 0 0 1-2-2Z" />
      <circle cx="8" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <path d="M17 16.2c1.8.3 3 1.6 3 3.3" />
    </svg>
  );
}

export function IconGenerative(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 13.6 8l4.4 1.6L13.6 11.2 12 15.7 10.4 11.2 6 9.6 10.4 8Z" />
      <path d="M19 15.5 19.7 17.3 21.5 18l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
      <path d="M4.5 16 5 17.4 6.4 18 5 18.6 4.5 20 4 18.6 2.6 18 4 17.4Z" />
    </svg>
  );
}

export function IconData(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
      <path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" />
    </svg>
  );
}

export function IconVision(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconNlp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16" />
      <path d="M4 9.5h10" />
      <path d="M4 14h16" />
      <path d="M4 18.5h7" />
      <circle cx="19" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="18.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconConsulting(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4 7v5c0 4.6 3.4 8.2 8 9 4.6-.8 8-4.4 8-9V7Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export const serviceIcons = {
  agent: IconAgent,
  automation: IconAutomation,
  chat: IconChat,
  generative: IconGenerative,
  data: IconData,
  vision: IconVision,
  nlp: IconNlp,
  consulting: IconConsulting,
};

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconLinkedin(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M8 10.5v6M8 7.9v.01" strokeLinecap="round" />
      <path d="M12 16.5v-3.4c0-1.2.9-2 2-2s2 .8 2 2v3.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}
