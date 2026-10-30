import { faq } from "@/lib/content";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Urgency } from "@/components/urgency";
import { Services } from "@/components/services";
import { Sectors } from "@/components/sectors";
import { Method } from "@/components/method";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "ProfessionalService"],
      "@id": `${site.url}/#organizacao`,
      name: site.name,
      url: site.url,
      description: site.description,
      email: site.email,
      telephone: site.whatsapp,
      areaServed: { "@type": "Country", name: "Brasil" },
      address: site.cities.map((city) => ({
        "@type": "PostalAddress",
        addressLocality: city.split("/")[0],
        addressRegion: city.split("/")[1],
        addressCountry: "BR",
      })),
      knowsAbout: [
        "Recuperação de créditos tributários",
        "PIS/COFINS",
        "IRPJ/CSLL",
        "Contribuições previdenciárias",
        "Reforma Tributária (LC 214/2025)",
        "Teses tributárias pacificadas no STF e no STJ",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Recuperação de créditos tributários",
              description:
                "PIS/COFINS, ICMS, IRPJ/CSLL e contribuições previdenciárias pagos indevidamente nos últimos cinco anos.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Revisão tributária e compliance",
              description:
                "Regime mais adequado, revisão da folha de pagamento, subvenções e obrigações acessórias.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Laudos técnicos",
              description:
                "Perícias de energia elétrica, combustíveis, perdas e quebras que sustentam créditos e exclusões.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Preparação para a Reforma Tributária",
              description:
                "Transição para CBS e IBS: créditos remanescentes, preços, contratos e sistemas.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#site`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${site.url}/#organizacao` },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Urgency />
        <Services />
        <Sectors />
        <Method />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
