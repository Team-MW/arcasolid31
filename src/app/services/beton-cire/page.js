import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Sparkles, Clock, CheckCircle2, ArrowRight, ShieldCheck, Home, Brush } from "lucide-react";

export const metadata = {
  title: "Devis Béton Ciré à Toulouse (130€/m²) | ARCASOLID31",
  description: "Béton ciré décoratif pour sols, murs et salles de bain à Toulouse. 130€ le m², consultation approfondie 1h. Esthétique contemporaine minérale sans joints.",
};

export default function BetonCirePage() {
  const applications = [
    {
      title: "Sols Intérieurs & Pièces à Vivre",
      desc: "Idéal pour les salons ouverts, cuisines et couloirs. Il confère une sensation d'espace infini et une lumière douce grâce à son grain minéral naturel."
    },
    {
      title: "Salles de Bain & Douches à l'Italienne",
      desc: "Totalement hydrofugé grâce à nos vernis d'imperméabilisation spécifiques. Zéro joint de faïence moisi, douceur sous les pieds."
    },
    {
      title: "Murs Décoratifs & Escaliers",
      desc: "Continuité parfaite entre sol et parois verticales. Appliqué artisanalement à la lisseuse d'art pour un effet matière chic et unique."
    },
    {
      title: "Bureaux & Showrooms Professionnels",
      desc: "Création d'espaces professionnels modernes et épurés avec du béton ciré alliant ambiance industrielle, confort et facilité d'entretien."
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
              <Link href="/services">Services &amp; Tarifs</Link>
              <span>/</span>
              <span style={{ color: "#FFFFFF" }}>Béton Ciré Contemporain</span>
            </nav>
            <h1 className="page-banner-title">Devis Béton Ciré</h1>
            <p className="page-banner-desc">
              L&apos;alliance de la force minérale et de l&apos;élégance architecturale. Tarif officiel à <strong>130€ le m²</strong> avec <strong>1 heure</strong> de consultation et d&apos;étude de faisabilité technique.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="tech-grid" style={{ alignItems: "flex-start" }}>
              <div>
                <h2 className="section-title">
                  Une Matière Vivante, Sensuelle et Intemporelle
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Le béton ciré ARCASOLID31 est un micro-mortier minéral de haute technicité, formulé à base de liants hydrauliques, de quartz ultra-fin et de résines polymères. Appliqué manuellement en couches millimétriques successives, chaque geste de l&apos;artisan confère un nuançage subtil et une signature esthétique inimitable.
                </p>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", margin: "2rem 0 1rem 0" }}>
                  Domaines d&apos;Application
                </h3>
                <div className="service-benefits-grid">
                  {applications.map((app, i) => (
                    <div key={i} style={{ background: "var(--bg-subtle)", padding: "1.2rem", borderRadius: "10px", border: "1px solid var(--border-light)" }}>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.3rem" }}>
                        {app.title}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {app.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "2.5rem" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "0.75rem" }}>
                    Inclus dans notre prestation de consultation 1h :
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.925rem", color: "var(--text-secondary)" }}>
                    <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Analyse détaillée de la planéité et de l&apos;adhérence du support existant</li>
                    <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Présentation d&apos;échantillons de teintes réelles et de finitions (mat, satiné)</li>
                    <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Conseils sur les raccordements de plinthes, profilés d&apos;arrêt et seuils de portes</li>
                    <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Remise d&apos;un devis technique personnalisé et détaillé sous 24h</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="service-pricing-card">
                  <img
                    src="/images/beton_cire.jpg"
                    alt="Espace contemporain en béton ciré par ArcaSolid31"
                  />
                  <div className="service-pricing-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Tarif Officiel</span>
                        <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--brand-primary)" }}>
                          130€ <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)" }}>le m²</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Consultation</span>
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>
                          1 heure
                        </div>
                      </div>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Application manuelle artisanale à la taloche</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Traitement bouche-pores &amp; vernis bi-composant</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Compatible plancher chauffant</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Garantie Décennale d&apos;artisan</li>
                    </ul>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <Link
                        href="/contact?projet=Devis%20Béton%20Ciré%20(130€%20le%20m²)"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        <span>Réserver ma Consultation 1h</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/calculateur"
                        className="btn btn-secondary"
                        style={{ width: "100%" }}
                      >
                        <span>Simuler mon métré en ligne</span>
                      </Link>
                    </div>
                  </div>
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
