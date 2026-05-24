"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, LocationPin, PhoneIcon } from "./svgs";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="location"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <LocationPin /> Düren & Umgebung
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
          >
            Wir bauen <br />
            <span>Zukunft.</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            Ihr zuverlässiger Partner für Innenausbau, Sanierung und
            Handwerkslösungen in Düren und Umgebung.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="#about"
              className="gap-4 btn btn-primary"
              whileTap={{ scale: 0.96 }}
            >
              Mehr über uns <ArrowRightIcon />
            </motion.a>

            <motion.a
              href="#cta"
              className="btn btn-outline"
              whileTap={{ scale: 0.96 }}
            >
              Kontakt <PhoneIcon />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}