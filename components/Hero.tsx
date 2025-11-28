'use client';

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-backdrop" />
      <motion.p
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        Agence de création de chatbots sur mesure
      </motion.p>
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        L&apos;intelligence conversationnelle à la vitesse de votre vision.
      </motion.h1>
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        Nous concevons des expériences chatbot premium, capables de comprendre
        votre marque, d&apos;anticiper les besoins utilisateurs et de créer des
        interactions mémorables.
      </motion.p>
      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <a className="cta-button" href="#contact">
          Discuter de votre projet
        </a>
        <a className="hero-secondary" href="#realisations">
          Voir nos réalisations
        </a>
      </motion.div>
      <motion.div
        className="hero-metrics"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="metric-card glow-border">
          <span className="metric-value">+120</span>
          <span className="metric-label">chatbots propulsés</span>
        </div>
        <div className="metric-card glow-border">
          <span className="metric-value">98%</span>
          <span className="metric-label">de satisfaction client</span>
        </div>
        <div className="metric-card glow-border">
          <span className="metric-value">12h</span>
          <span className="metric-label">pour un MVP opérationnel</span>
        </div>
      </motion.div>
    </section>
  );
}
