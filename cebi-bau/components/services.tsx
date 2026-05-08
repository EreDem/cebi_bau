const services = [
  {
    title: "Innenausbau",
    text: "Individuelle Lösungen für Wohn- und Geschäftsräume.",
    image: "https://picsum.photos/600/400?random=1",
    icon: "🔧",
  },
  {
    title: "Sanierung",
    text: "Wert erhalten. Modernisieren. Nachhaltig sanieren.",
    image: "https://picsum.photos/600/400?random=2",
    icon: "❖",
  },
  {
    title: "Umbau",
    text: "Neue Raumkonzepte für mehr Lebensqualität.",
    image: "https://picsum.photos/600/400?random=3",
    icon: "⌂",
  },
  {
    title: "Handwerkslösungen",
    text: "Ein starkes Netzwerk für Ihr Bauprojekt.",
    image: "https://picsum.photos/600/400?random=4",
    icon: "⚒",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">Unsere Leistungen</p>
            <h2>Kompetenz, die überzeugt</h2>
          </div>

          <a href="#services" className="btn btn-outline">
            Alle Leistungen ansehen →
          </a>
        </div>

        <div className="card-grid services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="card-image">
                <img src={service.image} alt={service.title} />
                <span className="floating-icon">{service.icon}</span>
              </div>

              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#">Mehr erfahren →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}