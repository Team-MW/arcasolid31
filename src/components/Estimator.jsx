"use client";

import { useState } from "react";
import { Calculator, ArrowRight, Check, Sparkles } from "lucide-react";

export default function Estimator({ onTransferToForm }) {
  const [selectedType, setSelectedType] = useState("garage");
  const [area, setArea] = useState(40);
  const [includePreparation, setIncludePreparation] = useState(true);

  const rates = {
    garage: {
      name: "Époxy Sol de Garage",
      baseRate: 70,
      description: "Résine bicomposante robuste, résistant aux huiles et pneus chauds",
      prepRate: 15
    },
    decoratif: {
      name: "Sols Époxy Décoratif",
      baseRate: 130,
      description: "Finition miroir marbrée ou métallisée sans joints pour intérieur",
      prepRate: 20
    },
    beton: {
      name: "Béton Ciré Minéral",
      baseRate: 130,
      description: "Micro-béton architectural continu pour sols & murs contemporains",
      prepRate: 20
    },
    moquette: {
      name: "Moquette de Pierre Extérieure",
      baseRate: 110,
      description: "Granulats de marbre drainants & résine anti-UV pour terrasses",
      prepRate: 15
    }
  };

  const currentRate = rates[selectedType];
  const costSurface = area * currentRate.baseRate;
  const costPrep = includePreparation ? area * currentRate.prepRate : 0;
  const totalEstimate = costSurface + costPrep;

  const handleApplyToQuote = () => {
    if (onTransferToForm) {
      onTransferToForm({
        projectType: currentRate.name,
        area: area,
        includePrep: includePreparation,
        estimate: totalEstimate
      });
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding estimator-section" id="calculateur">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
          <h2 className="section-title">Estimez le Budget de Votre Projet</h2>
          <p className="section-subtitle mx-auto">
            Sélectionnez votre type de surface et ajustez la superficie en m² pour obtenir une estimation budgétaire transparente en direct.
          </p>
        </div>

        <div className="estimator-card">
          <div className="estimator-layout">
            <div>
              <label className="form-group-label">1. Choisissez votre type de revêtement</label>
              <div className="estimator-type-selector">
                <button
                  type="button"
                  className={`estimator-type-btn ${selectedType === "garage" ? "active" : ""}`}
                  onClick={() => setSelectedType("garage")}
                >
                  <span className="estimator-type-name">Époxy Garage &amp; Atelier</span>
                  <span className="estimator-type-price">70 € / m²</span>
                </button>

                <button
                  type="button"
                  className={`estimator-type-btn ${selectedType === "decoratif" ? "active" : ""}`}
                  onClick={() => setSelectedType("decoratif")}
                >
                  <span className="estimator-type-name">Époxy Décoratif Intérieur</span>
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
                    2. Surface à traiter
                  </span>
                  <span className="surface-display">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="custom-range"
                  aria-label="Sélectionnez la surface en mètres carrés"
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                  <span>15 m²</span>
                  <span>100 m²</span>
                  <span>200+ m²</span>
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label className="estimator-prep-label">
                  <input
                    type="checkbox"
                    checked={includePreparation}
                    onChange={(e) => setIncludePreparation(e.target.checked)}
                  />
                  <span>Inclure la préparation technique (ponçage diamant &amp; primaire d&apos;accroche)</span>
                </label>
              </div>
            </div>

            {/* Results Side */}
            <div>
              <div className="estimator-result-card">
                <span className="result-badge">Estimation Budgétaire Indicative</span>
                <div className="result-price-amount">
                  {totalEstimate.toLocaleString("fr-FR")} <span>€ TTC</span>
                </div>
                <div style={{ fontSize: "0.95rem", color: "#E0F2F1", marginBottom: "0.5rem", fontWeight: 600 }}>
                  Pour {area} m² en {currentRate.name}
                </div>
                <p className="result-notes">
                  * Tarif indicatif basé sur notre barème standard. Le montant définitif est validé lors de notre diagnostic technique gratuit sur place.
                </p>

                <button
                  type="button"
                  className="btn btn-gold btn-full-responsive"
                  onClick={handleApplyToQuote}
                  style={{ width: "100%" }}
                >
                  <span>Valider &amp; Demander le Devis Officiel</span>
                  <ArrowRight size={16} style={{ flexShrink: 0 }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
