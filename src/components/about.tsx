import { site } from "@/lib/site";

const principles = [
  {
    strong: "Evidência",
    span: "toda tese apoiada em lei, tema repetitivo e jurisprudência do CARF",
  },
  {
    strong: "Risco calibrado",
    span: "prioridade às teses pacificadas; as demais, só com risco medido",
  },
  {
    strong: "Responsabilidade",
    span: "monitoria por cinco anos após cada crédito aproveitado",
  },
];

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="sobre-title">
      <div className="wrap about-grid">
        <div className="rv">
          <p className="eyebrow" id="sobre-title">
            Quem assina a análise
          </p>
          <blockquote>
            A consultoria se responsabiliza pelo crédito e pelo benefício{" "}
            <em>durante cinco anos</em>.
          </blockquote>
        </div>

        <div className="about-founder rv">
          <h3>{site.founder.name}</h3>
          <p className="role">{site.founder.role}</p>
          <p>
            À frente do Grupo Vertices, conduz a análise de cada empresa: mapeia
            as teses aplicáveis, calibra o risco de cada operação e responde
            pela execução até o recebimento.
          </p>
          <ul className="principles">
            {principles.map((principle) => (
              <li key={principle.strong}>
                <strong>{principle.strong}</strong>
                <span>{principle.span}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
