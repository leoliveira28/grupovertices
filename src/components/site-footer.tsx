import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/content";
import { site, waLink } from "@/lib/site";

export function SiteFooter() {
  // Fixo porque a página é estática; atualizar anualmente.
  const year = 2026;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand" aria-label={`${site.name} — início`}>
              <Image
                src="/images/logo-verticalices.png"
                alt=""
                width={813}
                height={236}
                style={{ height: "3rem", width: "auto" }}
              />
            </Link>
            <p style={{ marginTop: "1.125rem", maxWidth: "22rem", fontSize: "0.9375rem", color: "var(--dark-muted)" }}>
              Recuperação de créditos, revisão tributária e preparação para a
              Reforma Tributária.
            </p>
          </div>

          <div className="footer-contact">
            <span className="label">Contato</span>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp · {site.whatsappDisplay}
            </a>
            <a href={`tel:${site.whatsapp}`}>
              Telefone · {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>
              {site.cities.join(" · ")} · atendimento em todo o Brasil
            </span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contato">Contato</a>
        </nav>

        <div className="footer-legal">
          <p>
            As informações deste site têm caráter informativo e não configuram
            aconselhamento tributário. Cada caso é analisado individualmente.
          </p>
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
