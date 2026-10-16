"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function Contact({ formData, setFormData }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const projectOptions = [
    "Devis Sols époxy décoratif (130€ le m²)",
    "Devis Epoxy pour sol de garage (70 € le M²)",
    "Devis Béton Ciré (130€ le m²)",
    "Projet Extérieur - Moquette de Pierre",
    "Rénovation & Nivellement de Dalles Béton",
    "Table Époxy Artisanale sur-mesure",
    "Autre projet de revêtement"
  ];

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
          <h2 className="section-title" id="devis">
            Concrétisez Votre Projet de Revêtement
          </h2>
          <p className="section-subtitle mx-auto">
            Remplissez notre formulaire pour recevoir un devis personnalisé sous 24 à 48 heures.
            Nos experts se déplacent gratuitement à Toulouse et dans toute la Haute-Garonne.
          </p>
        </div>

        <div className="contact-layout">
          {/* Coordinates Panel */}
          <div className="contact-info-panel">
            <div>
              <span
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--brand-gold-light)",
                  fontWeight: 700
                }}
              >
                Informations de Contact
              </span>
              <h3 className="contact-info-title">ARCASOLID31</h3>
              <p className="contact-info-desc">
                Artisan créateur de surfaces d&apos;exception à Toulouse. Nous vous accompagnons de la conception à la réalisation finale.
              </p>

              <div className="contact-items-list">
                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <Phone size={20} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Téléphone Direct</span>
                    <span className="contact-item-val">
                      <a href="tel:+33670882843">+33 6 70 88 28 43</a>
                    </span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <Mail size={20} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Adresse E-mail</span>
                    <span className="contact-item-val">
                      <a href="mailto:ahmad.chehade31@gmail.com">
                        ahmad.chehade31@gmail.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Siège &amp; Atelier</span>
                    <span className="contact-item-val">
                      8 Rue du Général Maurel, 31140 Aucamville (Toulouse Métropole)
                    </span>
                  </div>
                </div>

                <div className="contact-item-row">
                  <div className="contact-icon-bubble">
                    <Clock size={20} />
                  </div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">Disponibilité</span>
                    <span className="contact-item-val">
                      Du Lundi au Samedi : 08h00 - 19h00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "1.25rem",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <ShieldCheck size={28} color="#DFC692" />
              <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.9)" }}>
                Interventions assurées avec <strong>Garantie Décennale</strong> et respect strict des normes DTU.
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    background: "#ECFDF5",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto"
                  }}
                >
                  <CheckCircle2 size={38} />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "0.75rem" }}>
                  Demande envoyée avec succès !
                </h3>
                <p style={{ color: "var(--text-secondary)", maxWidth: "460px", margin: "0 auto 2rem auto", lineHeight: 1.6 }}>
                  Merci <strong>{formData.nom}</strong>. Ahmad Chehade et l&apos;équipe ARCASOLID31 examineront votre projet et vous recontacteront sous 24h ouvrées.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label className="form-label" htmlFor="nom">
                      Nom complet*
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      placeholder="Ex : Jean Dupont"
                      className="form-input"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="email">
                      Adresse e-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="exemple@domaine.fr"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label className="form-label" htmlFor="telephone">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      placeholder="Ex : 06 12 34 56 78"
                      className="form-input"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="projet">
                      Type de projet*
                    </label>
                    <select
                      id="projet"
                      required
                      className="form-select"
                      value={formData.typeProjet}
                      onChange={(e) => setFormData({ ...formData, typeProjet: e.target.value })}
                    >
                      <option value="">Sélectionnez votre projet</option>
                      {projectOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="message">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin : surface approximative (m²), état du sol actuel, localisation exacte, délais souhaités..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "1rem", fontSize: "1.05rem" }}
                >
                  {loading ? (
                    <span>Traitement en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
