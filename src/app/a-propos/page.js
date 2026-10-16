import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ShieldCheck, Award, Heart, CheckCircle2, ArrowRight, MapPin, Sparkles, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "À Propos d'ARCASOLID31 | Artisan Sols Époxy & Béton Ciré à Toulouse",
  description: "Découvrez l'histoire, les engagements et le savoir-faire artisanal d'ARCASOLID31, spécialiste toulousain des sols décoratifs en résine époxy, béton ciré et moquette de pierre.",
};

export default function AProposPage() {
  const values = [
    {
      title: "Rigueur Technique Absolue",
      desc: "Nivellement laser, contrôle hygrométrique et préparation diamantée. Nous refusons les raccourcis pour garantir des sols qui résistent des décennies sans bouger."
    },
    {
      title: "Excellence Artisanale & Esthétique",
      desc: "Chaque sol en résine ou en béton ciré est travaillé à la main. Nous ajustons les nuances, les reflets et les textures selon la sensibilité de chaque client."
    },
    {
      title: "Transparence Tarifaire",
      desc: "Nos tarifs sont clairs dès le premier échange (70€/m² pour l'époxy garage, 130€/m² pour l'époxy décoratif et le béton ciré), sans mauvaises surprises ni coûts cachés."
    },
    {
      title: "Garantie Décennale Française",
      desc: "Toutes nos interventions sont couvertes par des assurances professionnelles complètes pour vous apporter une tranquillité d'esprit totale."
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="page-header-banner">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span style={{ color: "#FFFFFF" }}>À Propos</span>
            </nav>
            <h1 className="page-banner-title">L&apos;Exigence du Geste, la Passion de la Matière</h1>
            <p className="page-banner-desc">
              ARCASOLID31 est né d&apos;une conviction : créer des surfaces intemporelles où la rigueur de l&apos;ingénierie rencontre la noblesse des matières contemporaines.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="tech-grid" style={{ alignItems: "center", marginBottom: "4.5rem" }}>
              <div>
                <h2 className="section-title">
                  Créateur de Sols d&apos;Exception en Haute-Garonne
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Implanté au cœur de Toulouse, au <strong>Rue du général maurel (31000)</strong>, ARCASOLID31 intervient auprès des particuliers et des professionnels exigeants : propriétaires de villas, architectes d&apos;intérieur, gérants de commerces et passionnés d&apos;automobiles.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Notre emblème – réunissant <strong>Béton Ciré, Moquette de Pierre et Résine Décorative Époxy</strong> – symbolise notre triple maîtrise des revêtements minéraux, drainants et polymères.
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/portfolio" className="btn btn-primary">
                    <span>Explorer nos Réalisations</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    <span>Prendre Contact</span>
                  </Link>
                </div>
              </div>

              <div>
                <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "2px solid var(--border-light)", boxShadow: "var(--shadow-xl)" }}>
                  <img
                    src="/images/hero.jpg"
                    alt="Atelier et finitions haut de gamme ArcaSolid31 Toulouse"
                    style={{ width: "100%", height: "420px", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      right: "20px",
                      background: "rgba(10, 65, 64, 0.94)",
                      backdropFilter: "blur(10px)",
                      padding: "1.25rem",
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem"
                    }}
                  >
                    <img
                      src="/logo.png"
                      alt="Logo ArcaSolid31"
                      width={44}
                      height={44}
                      style={{ borderRadius: "8px", objectFit: "contain" }}
                    />
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>ARCASOLID31</div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.8)" }}>
                        Artisan Spécialiste Revêtements de Sols &bull; Toulouse (31)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div style={{ marginTop: "3rem" }}>
              <div className="text-center mx-auto" style={{ maxWidth: "780px", marginBottom: "3rem" }}>
                <h3 className="section-title">Ce Qui Fait Notre Différence</h3>
                <p className="section-subtitle mx-auto">
                  La garantie d&apos;un travail exécuté selon les règles de l&apos;art et le respect scrupuleux de votre habitat.
                </p>
              </div>

              <div className="responsive-grid-2">
                {values.map((val, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "16px",
                      padding: "2rem",
                      border: "1.5px solid var(--border-light)",
                      boxShadow: "var(--shadow-sm)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                      <CheckCircle2 size={20} color="var(--brand-primary)" />
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-main)" }}>
                        {val.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                      {val.desc}
                    </p>
                  </div>
                ))}
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
