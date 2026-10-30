/**
 * Configuração central do site.
 * Dados de contato conforme cartão de visitas oficial (Grupo Vértices).
 */
export const site = {
  name: "Grupo Vértices",
  shortName: "Vértices",
  url: "https://grupovertices.com.br",
  tagline: "Consultoria tributária e recuperação de créditos",
  description:
    "Recuperação de tributos pagos indevidamente nos últimos cinco anos, com teses pacificadas no STF e no STJ. Atendimento em todo o Brasil para empresas de Lucro Real e Lucro Presumido.",

  /** Fundadora */
  founder: {
    name: "Re Lima",
    role: "Tributarista e fundadora",
  },

  /** WhatsApp do CTA principal (formato internacional: 55 + DDD + número) */
  whatsapp: "5517991159605",
  whatsappDisplay: "(17) 99115-9605",
  whatsappMessage:
    "Olá! Vim pelo site do Grupo Vértices e quero um diagnóstico das oportunidades tributárias da minha empresa.",

  /** Telefone fixo da sede BH (cartão) */
  phone: "+553191887510",
  phoneDisplay: "(31) 9188-7510",

  email: "atendimento@grupovertices.com.br",

  /** Cidades do cartão; renderizam no rodapé */
  cities: ["Belo Horizonte/MG", "São José do Rio Preto/SP"],
} as const;

/** Monta o deep link do WhatsApp com mensagem pré-preenchida. */
export function waLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
