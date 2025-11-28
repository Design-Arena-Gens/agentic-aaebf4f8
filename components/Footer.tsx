'use client';

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <div>
          <span className="brand">Intelliwave</span>
          <p>Agents conversationnels sur mesure. Conçus pour performer, pensés pour durer.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:bonjour@intelliwave.ai">bonjour@intelliwave.ai</a>
          <a href="#expertises">Expertises</a>
          <a href="#processus">Processus</a>
          <a href="#realisations">Réalisations</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Intelliwave. Tous droits réservés.</span>
        <span>Built with precision & wave intelligence.</span>
      </div>
    </motion.footer>
  );
}
