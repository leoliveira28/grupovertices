import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function FinalCta() {
  return (
    <section id="contato" className="section final" aria-labelledby="contato-title">
      <div className="wrap final-inner">
        <div className="rv">
          <h2 id="contato-title">
            Cada mês sem revisão é crédito alcançado pela prescrição.
          </h2>
          <p className="sub">
            A conversa é direta, pelo WhatsApp, com a equipe que conduz a
            análise. Traga o regime e o setor da empresa; levantamos o resto.
          </p>
        </div>

        <div className="final-actions rv">
          <a
            className="btn btn-white"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Falar com um especialista
          </a>
          <a className="mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
