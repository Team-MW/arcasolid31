"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JotformEmbed from "@/components/JotformEmbed";
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function CalculateurPage() {
  const [selectedType, setSelectedType] = useState("garage");
  const [area, setArea] = useState(40);
  const [includePreparation, setIncludePreparation] = useState(true);
  const [includePlinths, setIncludePlinths] = useState(false);
  const [finishQuality, setFinishQuality] = useState("standard");


  const rates = {
    garage: {
      name: "Époxy Sol de Garage",
      baseRate: 70,
      description: "Résine bicomposante haute résistance pour véhicules, charges lourdes et huiles",
      prepRate: 15
    },
    decoratif: {
      name: "Sols Époxy Décoratif",
      baseRate: 130,
      description: "Coulée marbrée ou métallisée sans joints pour salons, cuisines et lofts",
      prepRate: 20
    },
    beton: {
      name: "Béton Ciré Contemporain",
      baseRate: 130,
      description: "Micro-béton minéral taloché main pour sols, murs et pièces d'eau",
      prepRate: 20
    },
    moquette: {
      name: "Moquette de Pierre Extérieure",
      baseRate: 110,
      description: "Granulats de marbre naturel drainants et résine aliphatique anti-UV",
      prepRate: 15
    }
  };

  const current = rates[selectedType];
  const surfaceCost = area * current.baseRate;
  const prepCost = includePreparation ? area * current.prepRate : 0;
  const plinthCost = includePlinths ? Math.round(Math.sqrt(area) * 4 * 18) : 0;
  const finishBonus = finishQuality === "premium" ? Math.round(area * 10) : 0;
  const total = surfaceCost + prepCost + plinthCost + finishBonus;

  return (
    <>
      <Header />
      <main>
        <section className="page-header-banner">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span style={{ color: "#FFFFFF" }}>Calculateur de Devis</span>
            </nav>
            <h1 className="page-banner-title">Calculateur de Budget au m²</h1>
            <p className="page-banner-desc">
              Obtenez une estimation budgétaire transparente et immédiate pour votre projet de sol en résine ou béton ciré à Toulouse et en Haute-Garonne.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="estimator-card" style={{ marginTop: 0 }}>
              <div className="estimator-layout">
                <div>
                  <label className="form-group-label">1. Sélectionnez votre type de revêtement</label>
                  <div className="estimator-type-selector">
                    <button
                      type="button"
                      className={`estimator-type-btn ${selectedType === "garage" ? "active" : ""}`}
                      onClick={() => setSelectedType("garage")}
                    >
                      <span className="estimator-type-name">Époxy Sol de Garage</span>
                      <span className="estimator-type-price">70 € / m²</span>
                    </button>

                    <button
                      type="button"
                      className={`estimator-type-btn ${selectedType === "decoratif" ? "active" : ""}`}
                      onClick={() => setSelectedType("decoratif")}
                    >
                      <span className="estimator-type-name">Époxy Décoratif</span>
                      <span className="estimator-type-price">130 € / m²</span>
                    </button>

                    <button
                      type="button"
                      className={`estimator-type-btn ${selectedType === "beton" ? "active" : ""}`}
                      onClick={() => setSelectedType("beton")}
                    >
                      <span className="estimator-type-name">Béton Ciré Contemporain</span>
                      <span className="estimator-type-price">130 € / m²</span>
                    </button>

                    <button
                      type="button"
                      className={`estimator-type-btn ${selectedType === "moquette" ? "active" : ""}`}
                      onClick={() => setSelectedType("moquette")}
                    >
                      <span className="estimator-type-name">Moquette de Pierre Extérieure</span>
                      <span className="estimator-type-price">Dès 110 € / m²</span>
                    </button>
                  </div>

                  <div className="slider-container">
                    <div className="slider-header">
                      <span className="form-group-label" style={{ margin: 0 }}>
                        2. Superficie approximative
                      </span>
                      <span className="surface-display">{area} m²</span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="250"
                      step="5"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="custom-range"
                      aria-label="Superficie en mètres carrés"
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                      <span>15 m²</span>
                      <span>100 m²</span>
                      <span>250+ m²</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
                    <label className="estimator-prep-label">
                      <input
                        type="checkbox"
                        checked={includePreparation}
                        onChange={(e) => setIncludePreparation(e.target.checked)}
                      />
                      <span><strong>Préparation technique incluse :</strong> rabotage diamant, ouverture des pores &amp; primaire époxy</span>
                    </label>

                    <label className="estimator-prep-label">
                      <input
                        type="checkbox"
                        checked={includePlinths}
                        onChange={(e) => setIncludePlinths(e.target.checked)}
                      />
                      <span>Gorge / plinthes étanches périphériques</span>
                    </label>
                  </div>
                </div>

                {/* Estimate Result Box */}
                <div>
                  <div className="estimator-result-card">
                    <span className="result-badge">Estimation Budgétaire Indicative</span>
                    <div className="result-price-amount">
                      {total.toLocaleString("fr-FR")} <span>€ TTC</span>
                    </div>
                    <div style={{ fontSize: "1rem", color: "#E0F2F1", marginBottom: "0.5rem", fontWeight: 700 }}>
                      Pour {area} m² de {current.name}
                    </div>

                    <div style={{ textAlign: "left", background: "rgba(255, 255, 255, 0.08)", padding: "1rem", borderRadius: "8px", margin: "1rem 0", fontSize: "0.825rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Revêtement ({current.baseRate}€/m²) :</span>
                        <strong>{surfaceCost.toLocaleString("fr-FR")} €</strong>
                      </div>
                      {includePreparation && (
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Préparation &amp; Primaire :</span>
                          <strong>{prepCost.toLocaleString("fr-FR")} €</strong>
                        </div>
                      )}
                      {includePlinths && (
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <span>Plinthes étanches :</span>
                          <strong>{plinthCost.toLocaleString("fr-FR")} €</strong>
                        </div>
                      )}
                    </div>

                    <p className="result-notes">
                      * Tarif indicatif basé sur notre barème officiel. Validé lors de notre diagnostic technique gratuit sur place.
                    </p>

                    <a
                      href="#formulaire-confirmation"
                      className="btn btn-gold btn-full-responsive"
                      style={{ width: "100%" }}
                    >
                      <span>Transférer vers ma demande de devis</span>
                      <ArrowRight size={16} style={{ flexShrink: 0 }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmation & Contact Form */}
            <div id="formulaire-confirmation" style={{ maxWidth: "820px", margin: "3.5rem auto 0 auto" }}>
              <div className="contact-form-panel">
                <div style={{ marginBottom: "1.75rem", textAlign: "center" }}>
                  <h3 className="section-title" style={{ fontSize: "clamp(1.5rem, 4vw, 1.8rem)", marginBottom: "0.5rem" }}>
                    Confirmez Votre Demande de Devis Gratuit
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                    Votre estimation de <strong>~{total.toLocaleString("fr-FR")} € TTC</strong> ({area} m² en {current.name}) sera directement transmise à notre responsable technique Ahmad Chehade.
                  </p>
                </div>

                <JotformEmbed formId="262884025857367" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
