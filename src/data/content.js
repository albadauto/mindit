// Conteúdo central do site — textos, serviços, FAQ, etc.
// Centralizar aqui facilita trocar copy sem mexer nos componentes.

export const site = {
  name: "mindit.",
  legalName: "mindit. Inteligência Artificial",
  tagline: "Inteligência Artificial sob demanda",
  url: "https://mindit.dev",
  email: "contato@mindit.dev",
  phoneDisplay: "+55 (11) 99002-9866",
  phoneHref: "+551140000000",
  locale: "pt-BR",
  addressLocality: "São Paulo",
  addressRegion: "SP",
  addressCountry: "BR",
  social: {
    linkedin: "https://www.linkedin.com/company/mindit",
    instagram: "https://www.instagram.com/mindit.ai",
    x: "https://x.com/mindit_ai",
  },
};

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "IA sob demanda para empresas",
  title: "Inteligência Artificial sob demanda para o seu negócio.",
  highlight: "sob demanda",
  subtitle:
    "A mindit. conecta sua empresa aos serviços de IA mais avançados do mercado: agentes autônomos, automação, dados e IA generativa — implementados por um time sênior, sem complexidade técnica e sem contratos engessados.",
  primaryCta: { label: "Solicitar diagnóstico gratuito", href: "#contato" },
  secondaryCta: { label: "Ver serviços de IA", href: "#servicos" },
  stats: [
    { value: "48h", label: "para o primeiro protótipo funcional" },
    { value: "+35", label: "modelos e provedores de IA integrados" },
    { value: "24/7", label: "agentes de IA operando sem pausa" },
  ],
};

export const trustBar = {
  label: "Tecnologia por trás da mindit.",
  items: [
    "GPT-4 / GPT-5",
    "Claude",
    "Gemini",
    "Llama",
    "LangChain",
    "Vector DB",
    "MLOps",
    "AWS · GCP · Azure",
  ],
};

export const services = [
  {
    icon: "agent",
    title: "Agentes de IA sob demanda",
    description:
      "Agentes autônomos que executam tarefas, respondem clientes e tomam decisões operacionais 24 horas por dia, integrados aos seus sistemas.",
    tags: ["Automação", "Atendimento", "Operações"],
  },
  {
    icon: "automation",
    title: "Automação inteligente de processos",
    description:
      "Unimos RPA e IA para eliminar tarefas repetitivas, reduzir erros manuais e acelerar fluxos internos de ponta a ponta.",
    tags: ["RPA + IA", "Eficiência", "Integrações"],
  },
  {
    icon: "chat",
    title: "Chatbots & atendimento inteligente",
    description:
      "Assistentes virtuais que entendem contexto, resolvem em segundos e escalam seu atendimento sem perder qualidade.",
    tags: ["Suporte 24/7", "WhatsApp", "Omnichannel"],
  },
  {
    icon: "generative",
    title: "IA generativa sob demanda",
    description:
      "Geração de texto, imagem, vídeo e código treinada na voz da sua marca — do conteúdo de marketing ao software interno.",
    tags: ["Conteúdo", "Criativo", "Código"],
  },
  {
    icon: "data",
    title: "Análise de dados & machine learning",
    description:
      "Modelos preditivos e pipelines de dados que transformam informação dispersa em decisões de negócio confiáveis.",
    tags: ["Previsão", "BI", "MLOps"],
  },
  {
    icon: "vision",
    title: "Visão computacional",
    description:
      "Reconhecimento de imagens e vídeo em tempo real para inspeção de qualidade, segurança e automação industrial.",
    tags: ["Inspeção", "Segurança", "Indústria 4.0"],
  },
  {
    icon: "nlp",
    title: "Processamento de linguagem natural",
    description:
      "Extração de insights, sumarização e classificação de texto em escala — de contratos a milhões de interações.",
    tags: ["NLP", "Sumarização", "Classificação"],
  },
  {
    icon: "consulting",
    title: "Consultoria & integração de IA",
    description:
      "Arquitetura, governança e integração de IA aos sistemas que sua empresa já usa, com segurança e conformidade.",
    tags: ["Arquitetura", "Governança", "LGPD"],
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos processos, dados e oportunidades reais de IA no seu negócio em uma sessão gratuita de descoberta.",
  },
  {
    step: "02",
    title: "Arquitetura sob medida",
    description:
      "Desenhamos a solução ideal — modelo, provedores e integrações — para o seu caso, sem tecnologia genérica.",
  },
  {
    step: "03",
    title: "Implementação ágil",
    description:
      "Colocamos o primeiro protótipo no ar em dias, não meses, com ciclos curtos de validação com o seu time.",
  },
  {
    step: "04",
    title: "Escala & suporte contínuo",
    description:
      "Monitoramos, otimizamos e escalamos a solução sob demanda, com suporte técnico sênior sempre disponível.",
  },
];

export const differentiators = [
  {
    title: "Velocidade de implantação",
    description: "Primeiros resultados em dias, com metodologia ágil e times dedicados.",
  },
  {
    title: "Segurança & governança",
    description: "Arquitetura em conformidade com LGPD e boas práticas de segurança de dados.",
  },
  {
    title: "Time sênior multidisciplinar",
    description: "Engenheiros de IA, cientistas de dados e especialistas de produto no seu projeto.",
  },
  {
    title: "Modelo sob demanda",
    description: "Pague pelo que usar — sem contratos longos ou equipe interna para manter.",
  },
  {
    title: "Tecnologia de ponta",
    description: "Os melhores LLMs, visão computacional e MLOps, sempre atualizados.",
  },
  {
    title: "Suporte contínuo 24/7",
    description: "Monitoramento e evolução constante das soluções após o lançamento.",
  },
];

export const resultsStats = [
  { value: "+120", label: "projetos de IA entregues" },
  { value: "92%", label: "de automação em processos elegíveis" },
  { value: "3.4x", label: "ROI médio reportado pelos clientes" },
  { value: "48h", label: "para o primeiro protótipo funcional" },
];

export const testimonials = [
  {
    quote:
      "Em poucas semanas, a mindit. automatizou boa parte do nosso atendimento e liberou o time para focar no que realmente importa.",
    author: "Diretor de Operações",
    role: "Varejo & E-commerce",
  },
  {
    quote:
      "A implementação foi surpreendentemente rápida. Tínhamos um agente de IA em produção antes do que qualquer fornecedor havia prometido.",
    author: "Head de Tecnologia",
    role: "Serviços Financeiros",
  },
  {
    quote:
      "O time da mindit. traduziu um problema complexo de dados em uma solução simples de usar. Suporte excelente do início ao fim.",
    author: "Gerente de Inovação",
    role: "Indústria",
  },
];

export const faq = [
  {
    question: "O que significa \"IA sob demanda\"?",
    answer:
      "É a possibilidade de acessar os principais serviços de Inteligência Artificial — agentes autônomos, automação, IA generativa, análise de dados e mais — sem precisar montar uma equipe técnica interna nem investir em infraestrutura própria. Você contrata sob demanda, conforme a necessidade e o crescimento do seu negócio.",
  },
  {
    question: "Quanto tempo leva para implementar uma solução de IA?",
    answer:
      "O primeiro protótipo funcional costuma ficar pronto em até 48 horas após o diagnóstico. Projetos completos, dependendo da complexidade, vão de 2 a 8 semanas até a entrada em produção.",
  },
  {
    question: "Preciso ter uma equipe técnica interna?",
    answer:
      "Não. A mindit. atua como sua equipe de IA sob demanda: cuidamos da arquitetura, implementação, integração e suporte contínuo. Sua equipe participa das decisões de negócio, não da parte técnica.",
  },
  {
    question: "A mindit. atende empresas de qualquer porte?",
    answer:
      "Sim. Trabalhamos com startups, scale-ups e grandes empresas, adaptando o escopo e o investimento à realidade e à maturidade digital de cada cliente.",
  },
  {
    question: "Como funciona o modelo de cobrança?",
    answer:
      "Trabalhamos com planos sob demanda, por projeto ou por assinatura mensal, conforme o volume de uso e o escopo dos serviços de IA contratados. Não exigimos contratos longos.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. Seguimos boas práticas de segurança da informação e conformidade com a LGPD em todos os projetos, com opções de arquitetura on-premise, em nuvem privada ou híbrida conforme a necessidade do cliente.",
  },
];

export const seo = {
  title: "mindit. | Inteligência Artificial sob Demanda para Empresas",
  description:
    "A mindit. é a plataforma de Inteligência Artificial sob demanda: agentes de IA, automação inteligente, chatbots, IA generativa, análise de dados e visão computacional para empresas de qualquer porte.",
  keywords: [
    "inteligência artificial",
    "IA sob demanda",
    "agentes de IA",
    "automação inteligente",
    "IA para empresas",
    "chatbot com IA",
    "IA generativa",
    "machine learning",
    "consultoria de IA",
    "visão computacional",
  ],
};
