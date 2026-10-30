"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/content";
import { site, waLink } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap header-bar">
        <Link href="/" className="brand" aria-label={`${site.name} — início`}>
          <Image
            src="/images/logo-verticalices.png"
            alt=""
            width={813}
            height={236}
            priority
            style={{ height: "2.75rem", width: "auto" }}
          />
        </Link>

        <nav className="header-nav" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-gold"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="menu-mobile" className="mobile-menu" data-open={open}>
        <nav aria-label="Menu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-gold"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            Falar com um especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
