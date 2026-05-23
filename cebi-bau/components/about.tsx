"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({
  target,
  suffix = "",
  duration = 1.4,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <strong ref={ref}>
      {value}
      {suffix}
    </strong>
  );
}

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            Über uns
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            Bauen mit Leidenschaft
          </motion.h2>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            CEBI Baudienstleistungen steht für Qualität, Zuverlässigkeit und
            ehrliche Arbeit.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          >
            Seit vielen Jahren realisieren wir Bauprojekte in Düren und
            Umgebung – mit einem erfahrenen Team, hochwertigen Materialien und
            einem klaren Anspruch: Ihre Zufriedenheit.
          </motion.p>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
          >
            <motion.img
              src="https://picsum.photos/600/400?random=1"
              alt="Moderner Innenraum"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            />
          </motion.div>

          <div className="stats">
            {[
              { number: 100, suffix: "+", label: "Abgeschlossene Projekte" },
              { number: 10, suffix: "+", label: "Jahre Erfahrung" },
              { number: 100, suffix: "%", label: "Zufriedene Kunden" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.45 + index * 0.12,
                  ease: "easeOut",
                }}
              >
                <CountUp
                  target={stat.number}
                  suffix={stat.suffix}
                  duration={1.3}
                />
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#about"
            className="btn btn-primary"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            whileTap={{ scale: 0.96 }}
          >
            Mehr über uns →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}