"use client";

import { useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/cebi_bau" : "";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <img src={`${basePath}/logo.png`} alt="CEBI Baudienstleistungen" style={{ width: "150px", height: "auto" }} />
        </a>

        <nav className="nav-links">
          <a href="#about">Über uns</a>
          <a href="#services">Leistungen</a>
          <a href="#projects">Projekte</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <a href="#contact" className="btn btn-primary nav-btn">
          Kontakt aufnehmen
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-menu ${open ? "is-open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>Über uns</a>
        <a href="#services" onClick={() => setOpen(false)}>Leistungen</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projekte</a>
        <a href="#contact" onClick={() => setOpen(false)}>Kontakt</a>
        <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
          Kontakt aufnehmen
        </a>
      </nav>
    </header>
  );
}
