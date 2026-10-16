"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JotformEmbed from "@/components/JotformEmbed";
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare } from "lucide-react";

export default function ContactPage() {


  return (
    <>
      <Header />
      <main>
        <section className="page-header-banner">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span style={{ color: "#FFFFFF" }}>Contact</span>
            </nav>
            <h1 className="page-banner-title">Contactez ARCASOLID31</h1>
            <p className="page-banner-desc">
              Une question, un devis précis ou une visite diagnostic sur place ? Notre équipe est à votre écoute pour vous conseiller et concrétiser vos projets à Toulouse.
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="container">
            <div className="contact-layout" style={{ marginTop: 0 }}>
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
                    Coordonnées Officielles
                  </span>
                  <h2 className="contact-info-title">ARCASOLID31</h2>
                  <p className="contact-info-desc">
                    Artisan créateur de surfaces d&apos;exception à Toulouse et en Haute-Garonne. Nous répondons à toutes vos questions sous 24h ouvrées.
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
                        <span className="contact-item-label">Adresse Siège &amp; Dépôt</span>
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
                        <span className="contact-item-label">Horaires d&apos;Ouverture</span>
                        <span className="contact-item-val">
                          Lundi au Samedi : 08h00 - 19h00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="https://wa.me/33670882843?text=Bonjour%20ArcaSolid31%2C%20je%20souhaite%20un%20devis..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ width: "100%", marginBottom: "1rem" }}
                  >
                    <MessageSquare size={18} />
                    <span>Échanger en direct sur WhatsApp</span>
                  </a>

                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "12px",
                      padding: "1rem",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem"
                    }}
                  >
                    <ShieldCheck size={24} color="#DFC692" />
                    <div style={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.9)" }}>
                      Assurance <strong>Garantie Décennale</strong> et respect strict des normes DTU bâtiment.
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Panel with Official JotForm */}
              <div className="contact-form-panel">
                <JotformEmbed formId="262884025857367" />
              </div>
            </div>

            {/* Map / Local presence info */}
            <div className="responsive-banner-card" style={{ marginTop: "4rem" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "0.75rem" }}>
                  Déplacement &amp; Étude Gratuite à Domicile
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.65, fontSize: "0.95rem" }}>
                  Basés <strong>8 Rue du Général Maurel, 31140 Aucamville</strong>, nous nous déplaçons rapidement dans un rayon de 50 km autour de Toulouse : Toulouse Métropole, Aucamville, Blagnac, Colomiers, Tournefeuille, Cugnaux, Balma, L&apos;Union, Muret, Ramonville, Castanet-Tolosan et Montauban.
                </p>
              </div>

              <div
                style={{
                  background: "#FFFFFF",
                  padding: "1.75rem",
                  borderRadius: "12px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem"
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-main)" }}>
                  Zone d&apos;Intervention Privilégiée :
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["31000 Toulouse", "Blagnac", "Tournefeuille", "Colomiers", "Balma", "Cugnaux", "Muret", "Castanet", "Haute-Garonne (31)", "Occitanie"].map((z, i) => (
                    <span
                      key={i}
                      style={{
                        background: "var(--brand-teal-glow)",
                        color: "var(--brand-primary)",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.825rem",
                        fontWeight: 600
                      }}
                    >
                      {z}
                    </span>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "0.75rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Appelez directement Ahmad Chehade au <a href="tel:+33670882843" style={{ color: "var(--brand-primary)", fontWeight: 700 }}>+33 6 70 88 28 43</a> pour planifier un créneau.
                </div>
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
