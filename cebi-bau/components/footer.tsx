export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <img src="/logo.png" alt="CEBI Baudienstleistungen" className="footer-logo" />
          <p>
            Ihr zuverlässiger Partner für Innenausbau, Sanierung und
            Handwerkslösungen in Düren und Umgebung.
          </p>

          <div className="socials">
            <a href="#">f</a>
            <a href="#">◎</a>
            <a href="#">☏</a>
          </div>
        </div>

        <div>
          <h3>Navigation</h3>
          <a href="#about">Über uns</a>
          <a href="#services">Leistungen</a>
          <a href="#projects">Projekte</a>
          <a href="#process">Ablauf</a>
          <a href="#contact">Kontakt</a>
        </div>

        <div>
          <h3>Leistungen</h3>
          <a href="#">Innenausbau</a>
          <a href="#">Sanierung</a>
          <a href="#">Umbau</a>
          <a href="#">Handwerkslösungen</a>
        </div>

        <div>
          <h3>Kontakt</h3>
          <p>CEBI Baudienstleistungen<br />Düren & Umgebung</p>
          <p>+49 176 84162018</p>
          <p>info@cebi-baudienstleistungen.de</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2025 CEBI Baudienstleistungen. Alle Rechte vorbehalten.</p>
        <div>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}