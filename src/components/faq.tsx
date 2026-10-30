import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="section section-line" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="section-head rv">
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p className="lead">
            O que costumam perguntar antes do primeiro contato.
          </p>
        </div>

        <div className="faq-list rv">
          {faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p className="answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
