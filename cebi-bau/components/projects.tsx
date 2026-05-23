"use client";

import { motion } from "framer-motion";

const projects = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <p className="eyebrow">Projekte</p>
            <h2>Ein Blick auf unsere Arbeiten</h2>
          </div>

          <motion.a
            href="#projects"
            className="btn btn-outline"
            whileTap={{ scale: 0.96 }}
          >
            Alle Projekte ansehen →
          </motion.a>
        </motion.div>

        <div className="projects-grid">
          {projects.map((image, index) => (
            <div className="project-card" key={image}>
              <img src={image} alt={`Projekt ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}