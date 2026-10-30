import { method } from "@/lib/content";

export function Method() {
  return (
    <section id="metodo" className="section section-line" aria-labelledby="metodo-title">
      <div className="wrap">
        <div className="section-head rv">
          <h2 id="metodo-title">Método</h2>
          <p className="lead">
            Um processo documentado em quatro etapas. Você sabe onde está cada
            crédito antes da execução começar.
          </p>
        </div>

        <ol className="steps rv">
          {method.map((step, index) => (
            <li className="step" key={step.title}>
              <span className="step-num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
