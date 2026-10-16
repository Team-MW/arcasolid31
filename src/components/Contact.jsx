"use client";

import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import JotformEmbed from "@/components/JotformEmbed";

export default function Contact() {

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

          {/* Form Panel with Official JotForm */}
          <div className="contact-form-panel">
            <JotformEmbed formId="262884025857367" />
          </div>
        </div>
      </div>
    </section>
  );
}
