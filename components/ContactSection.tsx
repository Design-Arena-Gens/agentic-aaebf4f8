'use client';

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.div
      className="contact-card glow-border"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="contact-content">
        <h3>Prêt à activer Intelliwave ?</h3>
        <p>
          Réservez un audit stratégique gratuit de 30 minutes pour définir la trajectoire
          de votre agent conversationnel sur mesure.
        </p>
        <a className="cta-button" href="mailto:bonjour@intelliwave.ai">
          Écrire à l&apos;équipe
        </a>
      </div>
      <div className="contact-divider" />
      <div className="contact-details">
        <div>
          <span className="contact-label">Disponibilité</span>
          <span className="contact-value">Lun → Ven · 8h - 20h CET</span>
        </div>
        <div>
          <span className="contact-label">Localisation</span>
          <span className="contact-value">Paris · Montréal</span>
        </div>
      </div>
    </motion.div>
  );
}
