import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Wrench, Clock, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export const metadata = {
  title: "Devis Époxy pour Sol de Garage à Toulouse (70€/m²) | ARCASOLID31",
  description: "Revêtement en résine époxy pour sol de garage à Toulouse : 70 € le M², diagnostic 30 min. Résistant aux pneus chauds, huiles et chocs mécaniques. Devis rapide.",
};

export default function EpoxyGaragePage() {
  const technicalSpecs = [
    { label: "Résistance aux pneus chauds", val: "Anti-arrachement garanti (pas de traces noires)" },
    { label: "Résistance chimique", val: "Huiles de moteur, liquide de freins, essence, sels" },
    { label: "Épaisseur moyenne", val: "2 à 3 mm en couches successives haute densité" },
    { label: "Options décoratives", val: "Finition unie grise/noire ou saupoudrage paillettes quartz" },
    { label: "Facilité de nettoyage", val: "Totalement étanche, lavable au jet haute pression" },
    { label: "Durée de chantier", val: "2 à 3 jours avec remise en circulation rapide" }
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
              <span style={{ color: "#FFFFFF" }}>Époxy Sol de Garage</span>
            </nav>
            <h1 className="page-banner-title">Devis Époxy pour Sol de Garage</h1>
            <p className="page-banner-desc">
              Transformez votre garage en un espace de rangement premium et showroom automobile. Tarif imbattable à <strong>70 € le M²</strong>, consultation technique 30 min.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="tech-grid" style={{ alignItems: "flex-start" }}>
              <div>
                <h2 className="section-title">
                  La Protection Ultime Contre l&apos;Usure, l&apos;Huile et les Pneus Chauds
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Un sol de garage brut en béton s&apos;effrite, produit de la poussière constante et absorbe irréversiblement les taches d&apos;huile. Le revêtement en résine époxy ARCASOLID31 scelle définitivement votre dalle et lui confère une robustesse industrielle tout en rehaussant la valeur de votre bien.
                </p>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-main)", margin: "2rem 0 1rem 0" }}>
                  Caractéristiques Techniques Spécial Garage
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {technicalSpecs.map((spec, i) => (
                    <div key={i} style={{ background: "var(--bg-subtle)", padding: "1.1rem", borderRadius: "10px", border: "1px solid var(--border-light)" }}>
                      <div style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>
                        {spec.label}
                      </div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-main)", marginTop: "0.25rem" }}>
                        {spec.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "2.5rem", background: "#F0F7F7", padding: "1.5rem", borderRadius: "12px", border: "1.5px solid rgba(10, 65, 64, 0.15)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.4rem" }}>
                    Pourquoi notre préparation fait toute la différence ?
                  </h4>
                  <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    Contrairement aux peintures de sol de grande surface qui s&apos;écaillent au bout de 6 mois sous les pneus chauds, nous effectuons un <strong>rabotage mécanique au diamant</strong> pour ouvrir les pores du béton et appliquons une <strong>résine époxy bi-composante professionnelle</strong> qui fusionne chimiquement avec la dalle.
                  </p>
                </div>
              </div>

              <div>
                <div style={{ background: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1.5px solid var(--border-light)", boxShadow: "var(--shadow-lg)" }}>
                  <img
                    src="/images/garage_epoxy.jpg"
                    alt="Sol époxy de garage haute performance avec éclairage moderne par ArcaSolid31"
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Tarif Officiel</span>
                        <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--brand-primary)" }}>
                          70 € <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)" }}>le M²</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Consultation</span>
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>
                          30 min
                        </div>
                      </div>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Finition showroom anti-poussière</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Résistance aux pneus et chocs lourds</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Nettoyage sans effort</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Intervention rapide Toulouse &amp; 31</li>
                    </ul>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <Link
                        href="/contact?projet=Devis%20Epoxy%20pour%20sol%20de%20garage%20(70%20%E2%82%AC%20le%20M%C2%B2)"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        <span>Demander mon Devis Garage 70€/m²</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/calculateur"
                        className="btn btn-secondary"
                        style={{ width: "100%" }}
                      >
                        <span>Calculer le coût total de mon garage</span>
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
