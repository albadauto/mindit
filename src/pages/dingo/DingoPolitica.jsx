import React from "react";
import DingoPolicyLayout from "./DingoPolicyLayout.jsx";
import LegalSections from "./LegalSections.jsx";
import { policySections } from "../../data/dingo-content.js";

export default function DingoPolitica() {
  return (
    <DingoPolicyLayout
      eyebrow="Dingo · mindit."
      title="Política de Uso"
      subtitle="Regras e condições de utilização do Dingo, o assistente de Inteligência Artificial da mindit. para WhatsApp."
      activePath="/dingo/politica"
    >
      <LegalSections sections={policySections} />
    </DingoPolicyLayout>
  );
}
