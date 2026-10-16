"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Sparkles, ArrowUpRight, X, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "01",
      number: "01",
      category: "renovation",
      title: "Rénovation de Dalles Béton",
      subtitle: "Solutions professionnelles de nivellement & réparation",
      image: "/images/renovation_beton.jpg",
      location: "Toulouse Sud (Haute-Garonne)",
      specs: "Ponçage diamant HTC, pontage carbone, ragréage fibré P4S",
      description:
        "Solutions professionnelles pour la mise à niveau et la réparation de dalles en béton. Ce projet prouve notre capacité à préparer parfaitement les surfaces avant l'application de nouveaux revêtements, assurant ainsi une base solide et pérenne pour tous types de projets de finition."
    },
    {
      id: "02",
      number: "02",
      category: "epoxy",
      title: "Garages et Ateliers - Résine Époxy Haute Performance",
      subtitle: "Revêtement showroom 70 € / m²",
      image: "/images/garage_epoxy.jpg",
      location: "Blagnac (31)",
      specs: "Résine époxy bicomposante, quartz saupoudré, top-coat polyuréthane",
      description:
        "Transformation de garages et espaces de stockage en zones fonctionnelles et esthétiques grâce à nos revêtements époxy robustes. Ce projet démontre la résistance aux produits chimiques, aux chocs et à l'usure, ainsi que la facilité de nettoyage pour une durabilité maximale."
    },
    {
      id: "03",
      number: "03",
      category: "art",
      title: "Tables Époxy Artisanales",
      subtitle: "Incrustations d'art & bois noble massif",
      image: "/images/table_epoxy.jpg",
      location: "Atelier Toulouse",
      specs: "Noyer massif sélectionné, résine époxy cristal teintée émeraude",
      description:
        "Création de tables uniques et personnalisées avec incrustations en résine époxy. Ce projet met en lumière notre savoir-faire artisanal, combinant matériaux nobles et résine pour des pièces maîtresses décoratives alliant art et fonctionnalité pour des intérieurs distingués."
    },
    {
      id: "04",
      number: "04",
      category: "exterieur",
      title: "Projets Extérieurs - Moquette de Pierre",
      subtitle: "Terrasses & plages de piscine drainantes",
      image: "/images/moquette_pierre.jpg",
      location: "Balma (31)",
      specs: "Marbre concassé 2-4 mm, liant polyuréthane aliphatique anti-UV",
      description:
        "Conception d'espaces extérieurs élégants et naturels avec notre revêtement en moquette de pierre. Ce projet met en avant la perméabilité, la résistance aux intempéries et l'esthétique unique pour les terrasses, allées et contours de piscine."
    },
    {
      id: "05",
      number: "05",
      category: "beton",
      title: "Bureaux Modernes - Béton Ciré",
      subtitle: "Espace tertiaire & contemporain 130 € / m²",
      image: "/images/beton_cire.jpg",
      location: "Toulouse Centre",
      specs: "Micro-béton minéral taloché main, bouche-pores & vernis mat haute résistance",
      description:
        "Aménagement d'espaces professionnels modernes et épurés avec du béton ciré. Ce projet illustre la création d'une ambiance alliant esthétique industrielle et confort, tout en garantissant une surface durable et facile d'entretien pour les zones de travail et les espaces communs."
    },
    {
      id: "06",
      number: "06",
      category: "epoxy",
      title: "Résidences de Luxe - Sols Époxy Décoratifs",
      subtitle: "Finition marbrée sans joints 130 € / m²",
      image: "/images/epoxy_decoratif.jpg",
      location: "Tournefeuille (31)",
      specs: "Résine autolissante métallisée, effets nacrés, finition miroir",
      description:
        "Création d'espaces de vie contemporains avec nos sols en résine époxy décorative. Ce projet met en valeur la personnalisation des designs, la résistance et la finition sans joints pour des intérieurs d'exception. Idéal pour les salons, cuisines et chambres dans des propriétés haut de gamme."
    }
  ];

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Header />
      <main>
        <section className="page-header-banner">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span style={{ color: "#FFFFFF" }}>Portfolio</span>
            </nav>
            <h1 className="page-banner-title">Portfolio &amp; Réalisations d&apos;Exception</h1>
            <p className="page-banner-desc">
              Découvrez nos chantiers phares à Toulouse et en Occitanie : sols époxy résidentiels et industriels, béton ciré taloché main, moquette de pierre et créations artistiques.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            {/* Category tabs */}
            <div className="portfolio-tabs" style={{ marginTop: 0 }}>
              <button
                type="button"
                className={`portfolio-tab-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                Tous les Projets (6)
              </button>
              <button
                type="button"
                className={`portfolio-tab-btn ${activeFilter === "epoxy" ? "active" : ""}`}
                onClick={() => setActiveFilter("epoxy")}
              >
                Sols Époxy (Luxe &amp; Garage)
              </button>
              <button
                type="button"
                className={`portfolio-tab-btn ${activeFilter === "beton" ? "active" : ""}`}
                onClick={() => setActiveFilter("beton")}
              >
                Béton Ciré
              </button>
              <button
                type="button"
                className={`portfolio-tab-btn ${activeFilter === "exterieur" ? "active" : ""}`}
                onClick={() => setActiveFilter("exterieur")}
              >
                Moquette de Pierre
              </button>
              <button
                type="button"
                className={`portfolio-tab-btn ${activeFilter === "renovation" ? "active" : ""}`}
                onClick={() => setActiveFilter("renovation")}
              >
                Rénovation Dalles Béton
              </button>
              <button
                type="button"
                className={`portfolio-tab-btn ${activeFilter === "art" ? "active" : ""}`}
                onClick={() => setActiveFilter("art")}
              >
                Tables Artisanales
              </button>
            </div>

            {/* Grid */}
            <div className="portfolio-grid">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="portfolio-item"
                  onClick={() => setSelectedProject(p)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="portfolio-img-box">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="portfolio-img"
                      loading="lazy"
                    />
                    <div className="portfolio-num-tag">{p.number}</div>
                  </div>

                  <div className="portfolio-content">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--brand-primary)", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                      <MapPin size={13} />
                      <span>{p.location}</span>
                    </div>
                    <h2 className="portfolio-item-title">{p.title}</h2>
                    <p className="portfolio-item-desc">{p.description}</p>

                    <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid var(--border-light)" }}>
                      <span className="portfolio-item-action">
                        <span>Consulter la fiche technique</span>
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Lightbox / Modal */}
            {selectedProject && (
              <div
                className="modal-overlay open"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setSelectedProject(null);
                }}
              >
                <div className="modal-card">
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Fermer la fenêtre modale"
                  >
                    <X size={20} />
                  </button>

                  <div className="modal-image-wrap">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="modal-image"
                    />
                  </div>

                  <div className="modal-body">
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-primary)" }}>
                        Projet {selectedProject.number}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                        <MapPin size={14} />
                        {selectedProject.location}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "0.5rem" }}>
                      {selectedProject.title}
                    </h3>
                    <p style={{ fontSize: "1rem", color: "var(--brand-primary)", fontWeight: 600, marginBottom: "1.25rem" }}>
                      {selectedProject.subtitle}
                    </p>

                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                      {selectedProject.description}
                    </p>

                    <div style={{ background: "var(--bg-subtle)", padding: "1.25rem", borderRadius: "10px", marginBottom: "2rem", border: "1px solid var(--border-light)" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-main)", marginBottom: "0.35rem" }}>
                        Spécifications et Mise en Œuvre :
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        {selectedProject.specs}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                      <Link
                        href={`/contact?projet=${encodeURIComponent(selectedProject.title)}`}
                        className="btn btn-primary"
                        style={{ flex: 1 }}
                      >
                        <span>Demander un Devis pour ce type de projet</span>
                        <ArrowRight size={16} />
                      </Link>
                      <a
                        href="tel:+33670882843"
                        className="btn btn-secondary"
                      >
                        <span>06 70 88 28 43</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
