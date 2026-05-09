import { ArrowRightIcon, LocationPin, PhoneIcon } from "./svgs";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="location"> <LocationPin /> Düren & Umgebung</p>

          <h1>
            Wir bauen <br />
            <span>Zukunft.</span>
          </h1>

          <p className="hero-text">
            Ihr zuverlässiger Partner für Innenausbau, Sanierung und
            Handwerkslösungen in Düren und Umgebung.
          </p>

          <div className="hero-actions">
            <a href="#about" className="gap-4 btn btn-primary">
              Mehr über uns <ArrowRightIcon />
            </a>
            <a href="#contact" className="btn btn-outline">
              Kontakt <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

