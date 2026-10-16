import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Sparkles, Clock, CheckCircle2, ArrowRight, ShieldCheck, Palette, Layers, Award } from "lucide-react";

export const metadata = {
  title: "Devis Sols Époxy Décoratif à Toulouse (130€/m²) | ARCASOLID31",
  description: "Création de sols en résine époxy décorative à Toulouse. Finition marbrée ou métallisée sans joints, 130€ le m², consultation 30 min. Garantie décennale.",
};

export default function EpoxyDecoratifPage() {
  const benefits = [
    {
      title: "Continuité Visuelle Sans Joints",
      desc: "Aucune rainure ni joint de carrelage qui s'encrasse. La surface agrandit visuellement vos pièces de vie et offre une modernité épurée."
    },
    {
      title: "Effets Artistiques & Nuances Sur Mesure",
      desc: "Marbré fluide, paillettes métallisées, reflets nacrés ou teinte unie architecturale. Chaque sol est coulé à la main et constitue une œuvre unique."
    },
    {
      title: "Imperméabilité & Hygiène Totale",
      desc: "Non poreux et résistant aux éclaboussures d'eau, vin, huile ou produits ménagers. Un simple passage de serpillère suffit à raviver l'éclat."
    },
    {
      title: "Compatible Chauffage au Sol",
      desc: "Excellente conductivité thermique, garantissant une montée en température rapide et homogène sans risque de fissuration."
    }
  ];

  const steps = [
    "Diagnostic hygrométrique du support et mesure de planéité (30 min)",
    "Ponçage mécanique diamanté et dépoussiérage industriel sous vide",
    "Application d'un primaire d'accrochage époxy bi-composant",
    "Coulage de la résine époxy autolissante teintée et travail des pigments",
    "Finition top-coat polyuréthane haute résistance (finition mate, satinée ou brillante)",
    "Contrôle qualité final et remise en circulation"
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
              <span style={{ color: "#FFFFFF" }}>Sols Époxy Décoratif</span>
            </nav>
            <h1 className="page-banner-title">Devis Sols Époxy Décoratif</h1>
            <p className="page-banner-desc">
              Le luxe d&apos;une surface continue sans joints au style contemporain. Tarif clair et garanti à <strong>130€ le m²</strong> avec consultation et diagnostic initial en 30 minutes.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="tech-grid" style={{ alignItems: "flex-start" }}>
              <div>
                <h2 className="section-title">
                  L&apos;Élégance Contemporaine au Service de Vos Intérieurs
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Nos sols en résine époxy décorative subliment les résidences privées, lofts, appartements d&apos;architecte et boutiques de prestige à Toulouse. Grâce à notre technique de coulée autolissante sans joints, vos espaces gagnent en luminosité, en volume et en distinction.
                </p>

                <div className="service-benefits-grid">
                  {benefits.map((b, i) => (
                    <div key={i} style={{ background: "var(--bg-subtle)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.35rem" }}>
                        {b.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "2.5rem" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-main)", marginBottom: "1rem" }}>
                    Notre Protocole d&apos;Application Rigoureux
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {steps.map((st, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.925rem", color: "var(--text-secondary)" }}>
                        <CheckCircle2 size={18} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="service-pricing-card">
                  <img
                    src="/images/epoxy_decoratif.jpg"
                    alt="Sol époxy décoratif marbré de luxe par ArcaSolid31"
                  />
                  <div className="service-pricing-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Tarif Officiel</span>
                        <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--brand-primary)" }}>
                          130€ <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)" }}>/ m²</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Diagnostic</span>
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>
                          30 min
                        </div>
                      </div>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Finition haute brillance ou satinée</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Choix illimité du nuancier RAL</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Effets marbrés tridimensionnels</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Couvert par Garantie Décennale</li>
                    </ul>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <Link
                        href="/contact?projet=Devis%20Sols%20époxy%20décoratif%20(130€%20le%20m²)"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        <span>Réserver mon Devis 30 min</span>
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
