"use client";

import { motion } from "framer-motion";
import { ArrowRight, House, Layers, Ruler, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    category: "Treppen Sanierung",
    title: "Neuer Aufgang. Neues Gefühl.",
    description: "Sanierung und Modernisierung einer Treppe.",
    before: "https://picsum.photos/600/400?random=10",
    after: "https://picsum.photos/600/400?random=11",
    highlights: [
      { icon: <Sparkles size={26} />, title: "Moderne Optik", text: "stilvoll & zeitlos" },
      { icon: <ShieldCheck size={26} />, title: "Hochwertige Verarbeitung", text: "für maximale Langlebigkeit" },
      { icon: <House size={26} />, title: "Mehr Wohnkomfort", text: "jeden Tag" },
    ],
  },
  {
    category: "Innenausbau",
    title: "Wohntraum. Wirklichkeit.",
    description: "Komplette Neugestaltung eines Wohnbereichs.",
    before: "https://picsum.photos/600/400?random=20",
    after: "https://picsum.photos/600/400?random=21",
    highlights: [
      { icon: <Layers size={26} />, title: "Raumkonzept", text: "durchdacht & stimmig" },
      { icon: <ShieldCheck size={26} />, title: "Qualitätsmaterialien", text: "langlebig & robust" },
      { icon: <House size={26} />, title: "Wohlfühlatmosphäre", text: "zum Leben gemacht" },
    ],
  },
  {
    category: "Sanierung",
    title: "Alt wird Neu.",
    description: "Umfassende Modernisierung einer Bestandsimmobilie.",
    before: "https://picsum.photos/600/400?random=30",
    after: "https://picsum.photos/600/400?random=31",
    highlights: [
      { icon: <Ruler size={26} />, title: "Präzise Ausführung", text: "sauber & pünktlich" },
      { icon: <ShieldCheck size={26} />, title: "Wertsteigerung", text: "für Ihre Immobilie" },
      { icon: <Wrench size={26} />, title: "Fachgerechte Arbeit", text: "von Profis ausgeführt" },
    ],
  },
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

        <div className="projects-grid" ref={scrollRef} onScroll={handleScroll}>
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-images">
                <div className="project-before">
                  <img src={project.before} alt={`${project.title} – vorher`} />
                  <span className="project-badge">Vorher</span>
                </div>

                <div className="project-divider">
                  <ArrowRight size={20} />
                </div>

                <div className="project-after">
                  <img src={project.after} alt={`${project.title} – nachher`} />
                  <span className="project-badge">Nachher</span>
                </div>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-highlights">
                  {project.highlights.map((item) => (
                    <div className="project-highlight" key={item.title}>
                      {item.icon}
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
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
