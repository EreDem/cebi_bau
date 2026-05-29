"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const projects = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotCount, setDotCount] = useState(projects.length);

  useEffect(() => {
    function updateDotCount() {
      const container = scrollRef.current;
      if (!container) return;
      const firstCard = container.firstElementChild as HTMLElement;
      const cardWidth = firstCard?.offsetWidth;
      if (!cardWidth) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setDotCount(Math.floor(maxScroll / cardWidth) + 1);
    }

    updateDotCount();
    window.addEventListener("resize", updateDotCount);
    return () => window.removeEventListener("resize", updateDotCount);
  }, []);

  function getCardWidth() {
    const container = scrollRef.current;
    if (!container) return 0;
    const firstCard = container.firstElementChild as HTMLElement;
    return firstCard?.offsetWidth ?? container.clientWidth;
  }

  function handleScroll() {
    const container = scrollRef.current;
    if (!container) return;
    const index = Math.round(container.scrollLeft / getCardWidth());
    setActiveIndex(index);
  }

  function scrollToProject(index: number) {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: index * getCardWidth(),
      behavior: "smooth",
    });
  }

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

        <div
          className="projects-grid"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {projects.map((image, index) => (
            <div className="project-card" key={image}>
              <img src={image} alt={`Projekt ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="project-dots">
          {Array.from({ length: dotCount }, (_, index) => (
            <button
              key={index}
              className={`project-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToProject(index)}
              aria-label={`Projekt ${index + 1} anzeigen`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
