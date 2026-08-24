// Conteúdo central do site — textos, serviços, FAQ, etc.
// Centralizar aqui facilita trocar copy sem mexer nos componentes.

export const site = {
  name: "Mind it!",
  legalName: "Mind it! Software",
  cnpj: "66.806.593/0001-96",
  tagline: "SaaS sob demanda e SaaS pronto",
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
  { label: "Soluções SaaS", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "SaaS sob demanda + SaaS pronto",
  title: "Software que transforma ideias em SaaS de verdade.",
  highlight: "SaaS de verdade",
  subtitle:
    "A Mind it! desenha, desenvolve e evolui produtos SaaS sob medida para o seu negócio — e oferece soluções prontas para quem precisa começar agora.",
  primaryCta: { label: "Quero criar meu SaaS", href: "#contato" },
  secondaryCta: { label: "Conhecer as soluções", href: "#servicos" },
  stats: [
    { value: "01", label: "parceiro da estratégia à operação" },
    { value: "100%", label: "produto alinhado ao seu negócio" },
    { value: "Contínuo", label: "suporte e evolução do SaaS" },
  ],
};

export const trustBar = {
  label: "Tudo o que um SaaS moderno precisa",
  items: [
    "Produto & UX",
    "Web & Mobile",
    "Cloud",
    "APIs & Integrações",
    "Assinaturas",
    "Dashboards",
    "Automação",
    "IA aplicada",
  ],
};

export const services = [
  {
    icon: "agent",
    title: "SaaS sob demanda",
    description:
      "Planejamos e construímos uma plataforma exclusiva para resolver o desafio da sua empresa e sustentar seu modelo de negócio.",
    tags: ["Descoberta", "MVP", "Escala"],
  },
  {
    icon: "automation",
    title: "SaaS pronto para usar",
    description:
      "Soluções próprias, validadas e configuráveis para sua operação começar mais rápido, com suporte da Mind it!.",
    tags: ["Implantação", "Configuração", "Suporte"],
  },
  {
    icon: "chat",
    title: "Portais e plataformas B2B",
    description:
      "Ambientes para clientes, parceiros e equipes, com permissões, fluxos, indicadores e integrações em um só lugar.",
    tags: ["B2B", "Multiempresa", "Gestão"],
  },
  {
    icon: "generative",
    title: "Aplicações web e mobile",
    description:
      "Experiências rápidas, responsivas e intuitivas para transformar processos complexos em rotinas simples.",
    tags: ["Web", "Mobile", "Experiência"],
  },
  {
    icon: "data",
    title: "Dados e dashboards",
    description:
      "Centralize informações, acompanhe indicadores e tome decisões com painéis claros e dados confiáveis.",
    tags: ["Analytics", "Indicadores", "BI"],
  },
  {
    icon: "vision",
    title: "Integrações e automações",
    description:
      "Conectamos seu SaaS ao ecossistema da empresa e automatizamos tarefas para reduzir retrabalho e ganhar velocidade.",
    tags: ["APIs", "ERP & CRM", "Workflows"],
  },
  {
    icon: "nlp",
    title: "IA aplicada ao produto",
    description:
      "Incluímos inteligência artificial onde ela gera valor real: atendimento, análise, recomendação e produtividade.",
    tags: ["Assistentes", "Análise", "Automação"],
  },
  {
    icon: "consulting",
    title: "Evolução e sustentação",
    description:
      "Monitoramos, corrigimos e evoluímos o produto com base no uso, nos objetivos e nas novas oportunidades do negócio.",
    tags: ["Cloud", "Segurança", "Roadmap"],
  },
];

export const process = [
  {
    step: "01",
    title: "Descoberta",
    description:
      "Entendemos o problema, o público, a operação e o modelo de negócio antes de definir a solução.",
  },
  {
    step: "02",
    title: "Estratégia de produto",
    description:
      "Priorizamos funcionalidades, desenhamos a experiência e definimos uma arquitetura preparada para crescer.",
  },
  {
    step: "03",
    title: "Construção e validação",
    description:
      "Entregamos em ciclos curtos, validando o produto com usuários e ajustando o caminho com transparência.",
  },
  {
    step: "04",
    title: "Lançamento e evolução",
    description:
      "Colocamos o SaaS em produção e seguimos ao seu lado com suporte, métricas e evolução contínua.",
  },
];

export const differentiators = [
  {
    title: "Visão de produto",
    description: "Tecnologia orientada ao problema, ao usuário e ao resultado do negócio.",
  },
  {
    title: "Arquitetura escalável",
    description: "Base técnica preparada para novos clientes, integrações e funcionalidades.",
  },
  {
    title: "Experiência simples",
    description: "Interfaces claras para aumentar adoção e reduzir esforço operacional.",
  },
  {
    title: "Entrega transparente",
    description: "Ciclos visíveis, prioridades compartilhadas e decisões sem caixa-preta.",
  },
  {
    title: "Segurança e LGPD",
    description: "Boas práticas desde a arquitetura até a operação do produto.",
  },
  {
    title: "Parceria de longo prazo",
    description: "Suporte e evolução para o SaaS acompanhar o crescimento da empresa.",
  },
];

export const resultsStats = [
  { value: "MVP", label: "para validar antes de escalar" },
  { value: "Cloud", label: "infraestrutura preparada para crescer" },
  { value: "UX", label: "experiência pensada para adoção" },
  { value: "Dados", label: "decisões guiadas pelo uso real" },
];

export const testimonials = [
  {
    quote:
      "Você traz a visão do negócio. A Mind it! transforma essa visão em produto, da primeira decisão ao software em produção.",
    author: "SaaS sob demanda",
    role: "Para ideias e operações únicas",
  },
  {
    quote:
      "Quando velocidade é prioridade, nossas soluções prontas encurtam o caminho entre a necessidade e o resultado.",
    author: "SaaS pronto",
    role: "Para começar com mais agilidade",
  },
  {
    quote:
      "Depois do lançamento, seguimos medindo, melhorando e preparando o produto para a próxima fase do negócio.",
    author: "Evolução contínua",
    role: "Para crescer com segurança",
  },
];

export const faq = [
  {
    question: "O que é desenvolvimento de SaaS sob demanda?",
    answer:
      "É a criação de um produto de software por assinatura desenhado para uma necessidade específica. A Mind it! cuida da estratégia, experiência, desenvolvimento, infraestrutura e evolução.",
  },
  {
    question: "Quanto tempo leva para lançar um SaaS?",
    answer:
      "O prazo depende do escopo e das integrações. Após a descoberta, definimos um MVP com prioridades e cronograma claro para colocar valor nas mãos dos usuários o quanto antes.",
  },
  {
    question: "Preciso ter equipe técnica interna?",
    answer:
      "Não. Atuamos como parceiro de produto e tecnologia. Sua equipe participa das decisões do negócio enquanto cuidamos da construção e da operação técnica.",
  },
  {
    question: "Qual é a diferença entre SaaS sob demanda e SaaS pronto?",
    answer:
      "O SaaS sob demanda é criado para o seu contexto. O SaaS pronto já possui uma base funcional validada e recebe configurações para sua operação, reduzindo tempo de implantação.",
  },
  {
    question: "A Mind it! também mantém o produto depois do lançamento?",
    answer:
      "Sim. Podemos cuidar do monitoramento, suporte, infraestrutura, correções e evolução do roadmap para que o SaaS acompanhe o crescimento do negócio.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim. Seguimos boas práticas de segurança da informação e conformidade com a LGPD em todos os projetos, com opções de arquitetura on-premise, em nuvem privada ou híbrida conforme a necessidade do cliente.",
  },
];

export const seo = {
  title: "Mind it! | Desenvolvimento de SaaS sob Demanda e SaaS Pronto",
  description:
    "A Mind it! cria produtos SaaS sob medida e oferece soluções SaaS prontas para empresas que querem lançar, digitalizar e escalar operações.",
  keywords: [
    "desenvolvimento SaaS",
    "SaaS sob demanda",
    "SaaS pronto",
    "software sob medida",
    "desenvolvimento de plataforma",
    "MVP SaaS",
    "produto digital",
    "software para empresas",
  ],
};
