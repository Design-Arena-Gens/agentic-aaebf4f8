import { AnimatedSection } from "@/components/AnimatedSection";
import { ChatWidget } from "@/components/ChatWidget";
import { ContactSection } from "@/components/ContactSection";
import { Engagements } from "@/components/Engagements";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Showcase } from "@/components/Showcase";

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <div className="grid-overlay" />
      <Navbar />
      <Hero />
      <AnimatedSection
        id="expertises"
        badge="Expertises"
        title="Des agents conversationnels conçus pour performer"
        subtitle="Nous orchestrons les meilleures briques IA, de la donnée à l'expérience, pour créer des chatbots qui déploient votre vision avec précision."
      >
        <Features />
      </AnimatedSection>
      <AnimatedSection
        id="processus"
        badge="Processus"
        title="Un cadre rigoureux pour une exécution rapide"
        subtitle="De la première étincelle à la mise en production, Intelliwave fluidifie chaque étape et sécurise vos ambitions."
      >
        <Process />
      </AnimatedSection>
      <AnimatedSection
        id="realisations"
        badge="Réalisations"
        title="Des expériences conversationnelles iconiques"
        subtitle="Nos agents apprennent votre business, amplifient vos équipes et transforment vos interactions client."
      >
        <Showcase />
      </AnimatedSection>
      <AnimatedSection
        id="engagements"
        badge="Engagements"
        title="Excellence, contrôle et confiance"
        subtitle="Nous livrons des agents puissants et alignés sur vos exigences métiers, juridiques et éthiques."
      >
        <Engagements />
      </AnimatedSection>
      <AnimatedSection
        badge="Contact"
        title="Imaginons ensemble votre prochain chatbot signature"
        subtitle="Nous sélectionnons 3 projets par mois pour garantir un accompagnement premium et un lancement maîtrisé."
      >
        <ContactSection />
      </AnimatedSection>
      <Footer />
      <ChatWidget />
    </div>
  );
}
