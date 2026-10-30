/**
 * Conteúdo da landing page.
 * Fontes: apresentações internas de oportunidades tributárias por setor
 * ("Teses Tributárias Federais", edição 2026) e jurisprudência citada nelas.
 */

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#setores", label: "Setores" },
  { href: "#metodo", label: "Método" },
  { href: "#faq", label: "Perguntas" },
] as const;

export const heroFacts = [
  {
    value: "5 anos",
    label: "prazo para recuperar créditos (art. 168 do CTN)",
  },
  {
    value: "Tema 69",
    label: "STF: ICMS fora da base do PIS/COFINS",
  },
  {
    value: "2027",
    label: "fim do PIS/COFINS com a LC 214/2025",
  },
] as const;

export const services = [
  {
    title: "Recuperação de créditos",
    description:
      "PIS/COFINS, ICMS, IRPJ/CSLL e contribuições previdenciárias pagos indevidamente nos últimos cinco anos, pela via administrativa ou judicial.",
    citations: ["Tema 69 STF", "Tema 1.125 STJ", "Art. 168 CTN"],
  },
  {
    title: "Revisão tributária e compliance",
    description:
      "Regime mais adequado ao perfil da empresa, revisão da folha de pagamento, subvenções e obrigações acessórias em dia.",
    citations: ["LC 160/2019", "Indébitos previdenciários"],
  },
  {
    title: "Laudos técnicos",
    description:
      "Perícias de energia elétrica, combustíveis, perdas e quebras que dão base técnica a créditos e exclusões na fonte.",
    citations: ["Energia", "Combustíveis", "Perdas e quebras"],
  },
  {
    title: "Reforma Tributária",
    description:
      "Transição para CBS e IBS sem sobressalto: créditos remanescentes, adequação de preços, contratos e sistemas antes de 2027.",
    citations: ["LC 214/2025", "CBS · IBS"],
  },
] as const;

export const sectors = [
  {
    name: "Supermercados, distribuidoras e cerealistas",
    note: "ICMS e ICMS-ST fora da base do PIS/COFINS; produtos monofásicos.",
    image: {
      src: "/images/setores/supermercados.jpg",
      alt: "Cliente compara preços em corredor de supermercado abastecido",
    },
  },
  {
    name: "Hospitais e saúde",
    note: "Teses federais pacificadas e revisão previdenciária da folha.",
    image: {
      src: "/images/setores/hospitais.jpg",
      alt: "Corredor iluminado de hospital com equipe de saúde",
    },
  },
  {
    name: "Postos e combustíveis",
    note: "Oportunidades fiscais e previdenciárias com laudos técnicos do setor.",
    image: {
      src: "/images/setores/combustiveis.jpg",
      alt: "Bico de abastecimento em veículo em posto de combustíveis",
    },
  },
  {
    name: "Construção civil",
    note: "Créditos e retenções sobre insumos, subempreitadas e empreitadas.",
    image: {
      src: "/images/setores/construcao.jpg",
      alt: "Equipe de obra com capacetes ao lado de guindaste em canteiro",
    },
  },
  {
    name: "Indústrias e metalúrgicas",
    note: "Créditos sobre insumos, ativo imobilizado e energia (CIAP).",
    image: {
      src: "/images/setores/industrias.jpg",
      alt: "Soldador trabalhando em estrutura metálica na fábrica",
    },
  },
  {
    name: "Faculdades e educação",
    note: "Revisão de PIS/COFINS, IRPJ/CSLL e encargos da folha.",
    image: {
      src: "/images/setores/faculdades.jpg",
      alt: "Auditório universitário com fileiras de cadeiras",
    },
  },
  {
    name: "Mineradoras",
    note: "Créditos sobre energia, insumos e ativo imobilizado.",
    image: {
      src: "/images/setores/mineracao.jpg",
      alt: "Caminhões de mineração em cava a céu aberto",
    },
  },
  {
    name: "Confecção e calçados",
    note: "Créditos na cadeia produtiva e revisão previdenciária.",
    image: {
      src: "/images/setores/confeccao.jpg",
      alt: "Chão de fábrica de confecção com máquinas de costura",
    },
  },
  {
    name: "Concessionárias e autopeças",
    note: "Tema 1.182 do STJ, com crédito acompanhado por cinco anos.",
    image: {
      src: "/images/setores/concessionarias.jpg",
      alt: "Loja de veículos com showroom de vidros ao entardecer",
    },
  },
] as const;

export const method = [
  {
    title: "Diagnóstico preliminar",
    description:
      "Análise das operações e das obrigações principais dos últimos cinco anos, sem compromisso, para estimar o potencial de crédito.",
  },
  {
    title: "Mapa de teses",
    description:
      "Cada oportunidade documentada com fundamento legal, jurisprudência e grau de risco. As teses pacificadas vêm primeiro.",
  },
  {
    title: "Execução",
    description:
      "Restituição e compensação pela via administrativa ou judicial, com a consultoria responsável pelo crédito do início ao fim.",
  },
  {
    title: "Acompanhamento",
    description:
      "Monitoria do benefício por cinco anos, com prestação de contas de cada etapa do recebimento.",
  },
] as const;

export const faq = [
  {
    question: "O que são teses pacificadas?",
    answer:
      "Teses com entendimento fixado pelo STF ou pelo STJ em recursos repetitivos, que vincula os julgamentos seguintes e o CARF. São as oportunidades de menor risco jurídico, como o Tema 69, que exclui o ICMS da base do PIS/COFINS.",
  },
  {
    question: "Quanto a empresa pode recuperar?",
    answer:
      "Depende do regime tributário, do setor e do volume de operações. A análise cruza as obrigações dos últimos cinco anos com as teses aplicáveis e aponta o valor recuperável de cada tese antes de qualquer execução.",
  },
  {
    question: "Quais empresas podem recuperar créditos?",
    answer:
      "Empresas dos regimes de Lucro Real e Lucro Presumido com operações nos últimos cinco anos. O levantamento é preparado por setor de atividade, com as teses de maior segurança jurídica de cada segmento.",
  },
  {
    question: "A Reforma Tributária encerra as recuperações?",
    answer:
      "Não de imediato. PIS e COFINS serão extintos em 2027, na transição para CBS e IBS prevista na LC 214/2025. Créditos dos últimos cinco anos continuam recuperáveis até a prescrição, e por isso a revisão é urgente: cada mês sem análise alcança novos valores.",
  },
  {
    question: "Como funciona a análise inicial?",
    answer:
      "A partir de informações básicas da empresa (regime, setor, faturamento e obrigações principais), identificamos as teses aplicáveis e estimamos o potencial de crédito. A conversa inicial é pelo WhatsApp, sem compromisso.",
  },
  {
    question: "Em quanto tempo o valor volta para o caixa?",
    answer:
      "Depende da via escolhida. Restituição e compensação na esfera administrativa costumam ser mais rápidas; ações judiciais seguem o prazo processual. O cronograma esperado faz parte do mapa de teses apresentado antes da execução.",
  },
] as const;
