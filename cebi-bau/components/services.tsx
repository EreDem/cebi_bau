"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HammerIcon, HousePlusIcon, PaintRollerIcon, WrenchIcon } from "./svgs";

const services = [
  {
    title: "Innenausbau",
    text: "Individuelle Lösungen für Wohn- und Geschäftsräume.",
    details:
      "Wir übernehmen Trockenbau, Bodenarbeiten, Wandgestaltung und individuelle Innenraumlösungen. Dabei achten wir auf saubere Ausführung, hochwertige Materialien und ein Ergebnis, das zu Ihren Räumen passt.",
    image: "https://picsum.photos/600/400?random=1",
    icon: <PaintRollerIcon />,
  },
  {
    title: "Sanierung",
    text: "Wert erhalten. Modernisieren. Nachhaltig sanieren.",
    details:
      "Ob einzelne Räume oder komplette Immobilien: Wir modernisieren bestehende Bausubstanz zuverlässig und sauber. Ziel ist eine langlebige, moderne und wirtschaftlich sinnvolle Lösung.",
    image: "https://picsum.photos/600/400?random=2",
    icon: <HammerIcon />,
  },
  {
    title: "Umbau",
    text: "Neue Raumkonzepte für mehr Lebensqualität.",
    details:
      "Wir helfen dabei, bestehende Räume neu zu denken. Von kleinen Anpassungen bis zu größeren Umbauten sorgen wir für eine praktische und optisch stimmige Umsetzung.",
    image: "https://picsum.photos/600/400?random=3",
    icon: <HousePlusIcon />,
  },
  {
    title: "Handwerkslösungen",
    text: "Ein starkes Netzwerk für Ihr Bauprojekt.",
    details:
      "Für verschiedene Gewerke arbeiten wir mit zuverlässigen Partnern zusammen. So erhalten Sie koordinierte Lösungen aus einer Hand und behalten den Überblick über Ihr Projekt.",
    image: "https://picsum.photos/600/400?random=4",
    icon: <WrenchIcon />,
  },
];

export default function Services() {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  function toggleCard(title: string) {
    setFlippedCards((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  }

  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <p className="eyebrow">Unsere Leistungen</p>
            <h2>Kompetenz, die überzeugt</h2>
          </div>

          <motion.a
            href="#services"
            className="btn btn-outline"
            // whileTap={{ scale: 0.96 }}
          >
            Alle Leistungen ansehen →
          </motion.a>
        </motion.div>

        <div className="card-grid services-grid">
          {services.map((service, index) => {
            const isFlipped = flippedCards.includes(service.title);

            return (
              <motion.article
                className="service-card-flip"
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <div className={`service-card-inner ${isFlipped ? "is-flipped" : ""}`}>
                  <div className="service-card service-card-front">
                    <div className="card-image">
                      <span className="floating-icon">{service.icon}</span>
                      <img src={service.image} alt={service.title} />
                    </div>

                    <div className="card-body">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>

                      <button
                        type="button"
                        className="card-link"
                        onClick={() => toggleCard(service.title)}
                      >
                        Mehr erfahren →
                      </button>
                    </div>
                  </div>

                  <div className="service-card service-card-back">
                    <div>
                      <span className="back-icon">{service.icon}</span>
                      <h3>{service.title}</h3>
                      <p>{service.details}</p>
                    </div>

                    <button
                      type="button"
                      className="card-link card-link-light"
                      onClick={() => toggleCard(service.title)}
                    >
                      Zurück →
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}