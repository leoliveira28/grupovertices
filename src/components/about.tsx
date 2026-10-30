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
            Quem conduz a análise
          </p>
          <blockquote>
            A consultoria se responsabiliza pelo crédito e pelo benefício{" "}
            <em>durante cinco anos</em>.
          </blockquote>
        </div>

        <div className="about-founder rv">
          <h3>Equipe técnica, conferência integral</h3>
          <p className="role">Gestão sênior em cada trabalho</p>
          <p>
            A análise é conduzida por equipe de profissionais experientes na
            área tributária e integralmente conferida pela gestora e CEO do
            Grupo Vértices, que soma mais de 20 anos de experiência na área
            trabalhista.
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
