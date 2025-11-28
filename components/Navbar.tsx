"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Processus", href: "#processus" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Engagements", href: "#engagements" }
];

export function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="navbar-container">
        <Link href="/" className="brand">
          Intelliwave
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="#contact" className="cta-button nav-cta">
          Planifier un appel
        </Link>
      </div>
    </motion.nav>
  );
}
