import React from "react";
import DingoPolicyLayout from "./DingoPolicyLayout.jsx";
import LegalSections from "./LegalSections.jsx";
import { privacySections } from "../../data/dingo-content.js";

export default function DingoPrivacidade() {
  return (
    <DingoPolicyLayout
      eyebrow="Dingo · mindit."
      title="Política de Privacidade"
      subtitle="Como o Dingo, assistente de Inteligência Artificial da mindit. para WhatsApp, coleta, usa e protege os seus dados pessoais."
      activePath="/dingo/privacidade"
    >
      <LegalSections sections={privacySections} />
    </DingoPolicyLayout>
  );
}
