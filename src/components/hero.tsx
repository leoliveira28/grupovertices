import { heroFacts } from "@/lib/content";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow hero-in">Consultoria tributária · Brasil</p>
          <h1 id="hero-title" className="hero-in">
            Recuperamos tributos pagos indevidamente <em>nos últimos cinco anos</em>
          </h1>
          <p className="hero-sub hero-in">
            Teses pacificadas no STF e no STJ, laudos técnicos e revisão de folha
            para empresas de Lucro Real e Lucro Presumido. Diagnóstico preliminar
            sem compromisso.
          </p>
          <div className="hero-actions hero-in">
            <a
              className="btn btn-ink"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Falar com um especialista
            </a>
            <a className="btn btn-ghost" href="#setores">
              Ver setores atendidos
            </a>
            <p className="hero-note">Resposta direta com a equipe, sem formulário.</p>
          </div>
        </div>

        <div className="facts" aria-label="Referências-chave">
          {heroFacts.map((fact) => (
            <div className="fact" key={fact.value}>
              <div className="fact-value">{fact.value}</div>
              <span className="fact-label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
