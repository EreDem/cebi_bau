export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-image">
          <img src="https://picsum.photos/600/400?random=1" alt="Moderner Innenraum" />
        </div>

        <div className="about-content">
          <p className="eyebrow">Über uns</p>
          <h2>Bauen mit Leidenschaft</h2>

          <p className="lead">
            CEBI Baudienstleistungen steht für Qualität, Zuverlässigkeit und
            ehrliche Arbeit.
          </p>

          <p>
            Seit vielen Jahren realisieren wir Bauprojekte in Düren und
            Umgebung – mit einem erfahrenen Team, hochwertigen Materialien und
            einem klaren Anspruch: Ihre Zufriedenheit.
          </p>

          <div className="stats">
            <div>
              <strong>100+</strong>
              <span>Abgeschlossene Projekte</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>Jahre Erfahrung</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Zufriedene Kunden</span>
            </div>
          </div>

          <a href="#about" className="btn btn-primary">
            Mehr über uns →
          </a>
        </div>
      </div>
    </section>
  );
}