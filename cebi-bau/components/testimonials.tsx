"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Sehr professionelle Arbeit und ein tolles Team. Unser Umbau wurde termingerecht und sauber umgesetzt. Klare Empfehlung!",
    name: "Familie K.",
  },
  {
    text: "Von der Planung bis zur Fertigstellung hat alles perfekt geklappt. Wir sind mehr als zufrieden!",
    name: "M. Schmitz",
  },
  {
    text: "Zuverlässig, freundlich und kompetent. So wünscht man sich eine Zusammenarbeit.",
    name: "T. Özdemir",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container testimonials-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="eyebrow">Kundenstimmen</p>
          <h2>Das sagen unsere Kunden</h2>

          <motion.div
            className="small-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <motion.article
              className="testimonial-card"
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="quote"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.12 + 0.15,
                  ease: "easeOut",
                }}
              >
                “
              </motion.div>

              <p>{item.text}</p>
              <span>– {item.name}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}