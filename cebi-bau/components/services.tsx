"use client";

import { motion } from "framer-motion";

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
            whileTap={{ scale: 0.96 }}
          >
            Alle Leistungen ansehen →
          </motion.a>
        </motion.div>

        <div className="card-grid services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-image">
                <motion.span
                  className="floating-icon"
                  initial={{ opacity: 0, scale: 0.75, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.12 + 0.2,
                    ease: "easeOut",
                  }}
                >
                  {service.icon}
                </motion.span>

                <motion.img
                  src={service.image}
                  alt={service.title}
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                />
              </div>

              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#">Mehr erfahren →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}