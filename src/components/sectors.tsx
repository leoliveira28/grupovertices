import Image from "next/image";
import { sectors } from "@/lib/content";
import { waLink } from "@/lib/site";
import { ArrowUpRight } from "@/components/icons";

export function Sectors() {
  return (
    <section id="setores" className="section sectors-section" aria-labelledby="setores-title">
      <div className="wrap">
        <div className="section-head rv">
          <h2 id="setores-title">Setores atendidos</h2>
          <p className="lead">
            Levantamentos preparados por segmento, com as teses de maior
            segurança jurídica de cada atividade. Toque no seu setor para falar
            com a equipe.
          </p>
        </div>

        <div className="sectors rv">
          {sectors.map((sector) => (
            <a
              className="sector"
              key={sector.name}
              href={waLink(
                `Olá! Vim pelo site do Grupo Vertices e quero um diagnóstico das oportunidades tributárias para o setor de ${sector.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sector-img">
                <Image
                  src={sector.image.src}
                  alt={sector.image.alt}
                  fill
                  sizes="(max-width: 42rem) 100vw, (max-width: 64rem) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </span>
              <span className="sector-body">
                <h3>{sector.name}</h3>
                <p>{sector.note}</p>
                <span className="sector-arrow">
                  <ArrowUpRight />
                </span>
              </span>
            </a>
          ))}

          <div className="sectors-cta">
            <p>Seu setor não está na lista? As teses podem se aplicar do mesmo jeito.</p>
            <a
              className="btn btn-white"
              href={waLink("Olá! Quero saber se há oportunidades tributárias para o meu setor.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar meu setor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
