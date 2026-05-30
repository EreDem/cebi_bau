"use client";

import { motion } from "framer-motion";
import { ArrowRight, House, Layers, Ruler, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/cebi_bau" : "";

const projects = [
  {
    category: "Treppen Sanierung",
    title: "Neuer Aufgang. Neues Gefühl.",
    description: "Komplette Sanierung und Modernisierung einer Treppe.",
    before: `${basePath}/Projekte/treppe_vorher.jpeg`,
    after: `${basePath}/Projekte/treppe_nachher.jpeg`,
    highlights: [
      { icon: <Sparkles size={26} />, title: "Moderne Optik", text: "stilvoll & zeitlos" },
      { icon: <ShieldCheck size={26} />, title: "Hochwertige Verarbeitung", text: "für maximale Langlebigkeit" },
      { icon: <House size={26} />, title: "Mehr Wohnkomfort", text: "jeden Tag" },
    ],
  },
  {
    category: "Innenausbau",
    title: "Flur neu gestaltet.",
    description: "Modernisierung und Neugestaltung eines Flurbereichs.",
    before: `${basePath}/Projekte/flur_vorher.jpeg`,
    after: `${basePath}/Projekte/flur_nachher.jpeg`,
    highlights: [
      { icon: <Layers size={26} />, title: "Raumgefühl", text: "offen & einladend" },
      { icon: <ShieldCheck size={26} />, title: "Saubere Ausführung", text: "bis ins Detail" },
      { icon: <House size={26} />, title: "Wohnqualität", text: "spürbar gesteigert" },
    ],
  },
  {
    category: "Innenausbau",
    title: "Raum mit neuem Leben.",
    description: "Komplette Neugestaltung eines Wohnraums.",
    before: `${basePath}/Projekte/raum_vorher.jpeg`,
    after: `${basePath}/Projekte/raum_nachher.jpeg`,
    highlights: [
      { icon: <Ruler size={26} />, title: "Präzise Planung", text: "von A bis Z" },
      { icon: <ShieldCheck size={26} />, title: "Qualitätsmaterialien", text: "langlebig & robust" },
      { icon: <Sparkles size={26} />, title: "Moderne Ästhetik", text: "zeitlos & stilvoll" },
    ],
  },
  {
    category: "Dachgeschoss Ausbau",
    title: "Mehr Raum unter dem Dach.",
    description: "Ausbau und Modernisierung eines Dachzimmers.",
    before: `${basePath}/Projekte/dachzimmer_vorher.jpeg`,
    after: `${basePath}/Projekte/dachzimmer_nachher.jpeg`,
    highlights: [
      { icon: <Layers size={26} />, title: "Optimale Raumnutzung", text: "jeder m² zählt" },
      { icon: <ShieldCheck size={26} />, title: "Hochwertige Dämmung", text: "Energie sparen" },
      { icon: <House size={26} />, title: "Wohnkomfort", text: "auf neuer Ebene" },
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
