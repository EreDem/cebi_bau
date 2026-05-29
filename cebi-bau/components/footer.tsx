import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <Image src="/logo.png" alt="CEBI Baudienstleistungen" width={300} height={80} style={{ width: "150px", height: "auto" }} className="footer-logo" />
          <p>
            Ihr zuverlässiger Partner für Innenausbau, Sanierung und
            Handwerkslösungen in Düren und Umgebung.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <a href="#about">Über uns</a>
          <a href="#services">Leistungen</a>
          <a href="#projects">Projekte</a>
          <a href="#cta">Kontakt</a>
        </div>

        <div>
          <h3>Kontakt</h3>
          <p>CEBI Baudienstleistungen<br />Düren & Umgebung</p>
          <p>+49 162 2312911</p>
          <p>info@cebi.de</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2025 CEBI Baudienstleistungen. Alle Rechte vorbehalten.</p>
        <div>
          <a href="#">Impressum</a>
        </div>
      </div>
    </footer>
  );
}
