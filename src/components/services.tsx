import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="servicos" className="section section-line" aria-labelledby="servicos-title">
      <div className="wrap">
        <div className="section-head rv">
          <h2 id="servicos-title">Serviços</h2>
          <p className="lead">
            Cada frente existe para mapear tributo pago a mais, sustentar a tese
            com jurisprudência e trazer o valor de volta ao caixa.
          </p>
        </div>

        <div className="services rv">
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className="service-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-chips">
                {service.citations.map((citation) => (
                  <span className="chip" key={citation}>
                    {citation}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
