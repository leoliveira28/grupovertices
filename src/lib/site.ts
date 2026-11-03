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

  /** WhatsApp do CTA principal e telefone de contato (55 + DDD + número) */
  whatsapp: "5517991141566",
  whatsappDisplay: "(17) 99114-1566",
  whatsappMessage:
    "Olá! Vim pelo site do Grupo Vértices e quero um diagnóstico das oportunidades tributárias da minha empresa.",

  email: "atendimento@grupovertices.com.br",

  /** Cidade-sede; renderiza no rodapé e no schema */
  cities: ["São José do Rio Preto/SP"],
} as const;

/** Monta o deep link do WhatsApp com mensagem pré-preenchida. */
export function waLink(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
