import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Calculator, MessageSquare, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-wrapper">
        <img
          src="/images/hero.jpg"
          alt="Revêtements de sol d'exception ArcaSolid31 Toulouse"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            L&apos;Art du Revêtement, <span>la Précision Technique</span> Absolue.
          </h1>

          <p className="hero-desc">
            ARCASOLID31 sublime vos espaces avec des surfaces continues sans joints de très haute technicité :
            sols époxy décoratifs haut de gamme, résines de garage ultra-résistantes, béton ciré minéral contemporain
            et moquette de pierre naturelle pour terrasses et extérieurs.
          </p>

          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-gold">
              <span>Demander un Devis Gratuit</span>
              <ArrowRight size={17} />
            </Link>

            <Link href="/calculateur" className="btn btn-outline-white">
              <Calculator size={17} />
              <span>Calculer le coût au m²</span>
            </Link>

            <Link href="/portfolio" className="btn btn-outline-white">
              <Layers size={17} />
              <span>Nos 6 Réalisations</span>
            </Link>

            <a
              href="https://wa.me/33670882843?text=Bonjour%20ArcaSolid31%2C%20je%20souhaite%20un%20renseignement%20pour%20un%20projet%20de%20rev%C3%AAtement%20de%20sol."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              <MessageSquare size={17} color="#4ADE80" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Key Quick Rates & Guarantees */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-num">
                130€ <span>/m²</span>
              </span>
              <span className="stat-label">Sols Époxy Décoratif &amp; Béton Ciré</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">
                70€ <span>/m²</span>
              </span>
              <span className="stat-label">Époxy Garage Haute Résistance</span>
            </div>

            <div className="stat-item">
              <span className="stat-num">
                100% <span>Qualité</span>
              </span>
              <span className="stat-label">Garantie Décennale &amp; Nivellement Rigoureux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
