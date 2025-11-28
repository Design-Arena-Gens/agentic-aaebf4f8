'use client';

import { motion } from "framer-motion";

const steps = [
  {
    title: "Exploration & cadrage",
    description:
      "Atelier immersif pour comprendre vos utilisateurs, vos flux de données et définir les KPI conversationnels."
  },
  {
    title: "Design conversationnel",
    description:
      "Cartographie des scénarios, rédaction des prompts stratégiques et modélisation du ton de voix."
  },
  {
    title: "Intégration orchestrée",
    description:
      "Connexion aux API métier, automatisation n8n, mise en place des boucles de feedback et de la gouvernance."
  },
  {
    title: "Optimisation continue",
    description:
      "Suivi des performances, itérations rapides, entraînement sur mesures et alignement humain."
  }
];

export function Process() {
  return (
    <div className="process-grid">
      {steps.map((step, index) => (
        <motion.div
          className="process-card glow-border"
          key={step.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.12 * index,
            duration: 0.75,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
