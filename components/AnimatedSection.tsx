'use client';

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedSectionProps = {
  id?: string;
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1]
    }
  })
};

export function AnimatedSection({
  id,
  badge,
  title,
  subtitle,
  children
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const transitionVariants = prefersReducedMotion ? {} : fadeIn;

  return (
    <motion.section
      id={id}
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={transitionVariants}
      custom={0}
    >
      <div className="floating-orb" />
      <motion.div
        variants={transitionVariants}
        custom={0.1}
        className="section-header"
      >
        <span className="badge">{badge}</span>
        <motion.div variants={transitionVariants} custom={0.2}>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>
      </motion.div>
      <motion.div variants={transitionVariants} custom={0.25}>
        {children}
      </motion.div>
    </motion.section>
  );
}
