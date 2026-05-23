"use client";

import { motion } from "framer-motion";
import { HandshakeIcon, HouseIcon, LeafIcon, StarIcon } from "./svgs";

const features = [
  {
    icon: <HouseIcon />,
    title: "Regional",
    text: "In Düren und Umgebung",
  },
  {
    icon: <StarIcon />,
    title: "Qualität",
    text: "Hochwertige Materialien",
  },
  {
    icon: <HandshakeIcon />,
    title: "Verlässlich",
    text: "Termintreu & transparent",
  },
  {
    icon: <LeafIcon />,
    title: "Nachhaltig",
    text: "Für eine bessere Zukunft",
  },
];

export default function FeatureBar() {
  return (
    <section className="container">
      <motion.div
        className="feature-bar"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {features.map((item, index) => (
          <motion.div
            className="feature-item"
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.45,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="feature-icon"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.12 + 0.1,
                ease: "easeOut",
              }}
            >
              {item.icon}
            </motion.div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}