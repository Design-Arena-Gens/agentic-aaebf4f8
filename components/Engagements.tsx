'use client';

import { motion } from "framer-motion";

const commitments = [
  {
    title: "Gouvernance & conformité",
    items: [
      "Données hébergées en Europe",
      "Audit de prompts et des outputs",
      "Traçabilité conversationnelle"
    ]
  },
  {
    title: "Performance responsable",
    items: [
      "Optimisation énergétique des modèles",
      "Scorecard d'inclusion linguistique",
      "Supervision humaine renforcée"
    ]
  },
  {
    title: "Transparence totale",
    items: [
      "Roadmap partagée en continu",
      "Dashboards personnalisés",
      "SLA premium et cellule d'astreinte"
    ]
  }
];

export function Engagements() {
  return (
    <div className="engagements-grid">
      {commitments.map((commitment, index) => (
        <motion.div
          className="engagement-card glow-border"
          key={commitment.title}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delay: 0.12 * index,
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <h3>{commitment.title}</h3>
          <ul>
            {commitment.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
