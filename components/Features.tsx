'use client';

import { motion } from "framer-motion";

const features = [
  {
    title: "Identité conversationnelle",
    description:
      "Une personnalité qui reprend vos codes de marque, vocabulaire, ton et émotions.",
    highlight: "Brand Voice Engine"
  },
  {
    title: "Expériences multimodales",
    description:
      "Texte, voix, images et données en temps réel pour des scénarios plus intuitifs.",
    highlight: "Context aware"
  },
  {
    title: "Orchestration n8n",
    description:
      "Workflows pilotés par n8n pour automatiser vos opérations et intégrer vos outils.",
    highlight: "Automation ready"
  },
  {
    title: "Monitoring augmenté",
    description:
      "Observabilité complète, alertes proactives et optimisation continue des conversations.",
    highlight: "Live Intelligence"
  }
];

export function Features() {
  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <motion.article
          className="feature-card glow-border"
          key={feature.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.1 * index,
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <span className="feature-highlight">{feature.highlight}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
