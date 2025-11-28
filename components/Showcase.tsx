'use client';

import { motion } from "framer-motion";

const projects = [
  {
    name: "WaveCare",
    sector: "Santé connectée",
    description:
      "Agent IA omnicanal qui coordonne les parcours patients, envoie des notifications médicales et assiste le personnel."
  },
  {
    name: "Nexa Finance",
    sector: "Fintech",
    description:
      "Conseiller virtuel qui personnalise les recommandations d'investissement et automatise la conformité réglementaire."
  },
  {
    name: "Galerie Lumière",
    sector: "Retail premium",
    description:
      "Assistant de vente qui scénarise l'expérience client, de la découverte à l'achat, et booste le panier moyen."
  }
];

export function Showcase() {
  return (
    <div className="showcase-grid">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          className="showcase-card glow-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delay: 0.1 * index,
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <span className="showcase-sector">{project.sector}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="showcase-glow" />
        </motion.article>
      ))}
    </div>
  );
}
