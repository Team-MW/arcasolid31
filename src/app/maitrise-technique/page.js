import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Wrench, ShieldCheck, Gauge, Layers, CheckCircle2, ArrowRight, Zap, Target } from "lucide-react";

export const metadata = {
  title: "Maîtrise Technique & Nivellement de Dalles Béton | ARCASOLID31 Toulouse",
  description: "Nivellement et réparation précise des dalles béton à Toulouse. Rigueur technique absolue, ponçage diamanté, traitement des fissures et ragréage fibré haute résistance.",
};

export default function MaitriseTechniquePage() {
  const technicalPoints = [
    {
      icon: Gauge,
      title: "Contrôle Hygrométrique au Carbure de Calcium",
      desc: "L'humidité résiduelle est l'ennemi numéro un de la résine. Nous mesurons avec précision le taux d'humidité à cœur de la dalle (limite stricte < 4%) avant toute application pour éliminer tout risque de cloquage futur."
    },
    {
      icon: Layers,
      title: "Rabotage & Surfaçage Diamanté sans Poussière",
      desc: "Nous utilisons des surfaceuses tri-têtes industrielles équipées de segments diamantés HTC. Cette action mécanique retire la laitance superficielle et crée la micro-rugosité idéale pour une adhérence moléculaire."
    },
    {
      icon: Target,
      title: "Couture des Fissures & Agrafage Acier",
      desc: "Chaque fissure active est ouverte à la disqueuse diamantée, pontée perpendiculairement par des agrafes en acier ondulé et coulée avec une résine époxy pure thixotrope de résistance supérieure au béton lui-même."
    },
    {
      icon: ShieldCheck,
      title: "Nivellement Laser & Ragréage Fibré P4S",
      desc: "Repérage des points hauts et bas à la mire laser millimétrique. Application d'un mortier d'égalisation fibré haute densité supportant le roulage de charges lourdes et assurant une planéité sous règle de 2 mm / 2 m."
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
              <span style={{ color: "#FFFFFF" }}>Maîtrise Technique</span>
            </nav>
            <h1 className="page-banner-title">MAÎTRISE TECHNIQUE</h1>
            <p className="page-banner-desc">
              « Nivellement et réparation précise des dalles. Nous intervenons avec une rigueur technique absolue pour restaurer l&apos;intégrité structurelle et esthétique de vos surfaces bétonnées. »
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="tech-grid" style={{ alignItems: "center", marginBottom: "4rem" }}>
              <div>
                <h2 className="section-title">
                  Pourquoi Aucun Sol Ne Peut Réussir Sans Une Préparation Irréprochable
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Dans les métiers des résines époxy et du béton ciré, le talent artistique ne vaut rien sans rigueur géométrique et chimique. Une dalle mal préparée, poussiéreuse, humide ou instable entraîne irrémédiablement le décollement de la résine.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Chez ARCASOLID31, nous considérons la dalle béton comme les fondations d&apos;un édifice. Nous disposons du parc de machines lourdes (aspirateurs haute dépression classe M/H, ponceuses orbitales planétaires) et de la compétence d&apos;ingénierie nécessaires pour diagnostiquer et consolider tous types de supports.
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    <span>Demander un Diagnostic de Dalle</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:+33670882843" className="btn btn-secondary">
                    <span>Parler à un Spécialiste</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="tech-media-card">
                  <img
                    src="/images/renovation_beton.jpg"
                    alt="Ponçage diamanté industriel et nivellement de dalles béton par ArcaSolid31"
                    className="tech-media-img"
                  />
                  <div className="tech-badge-float">
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "var(--brand-gold)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#062828",
                        flexShrink: 0
                      }}
                    >
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "1rem", color: "#FFFFFF" }}>
                        Contrôle Norme DTU &amp; P4S
                      </div>
                      <div style={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.75)" }}>
                        Adhérence par traction directe &gt; 1,5 MPa certifiée
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Pillars */}
            <div style={{ marginTop: "4rem" }}>
              <div className="text-center mx-auto" style={{ maxWidth: "780px", marginBottom: "3rem" }}>
                <h3 className="section-title">Les 4 Piliers de Notre Rigueur Technique</h3>
                <p className="section-subtitle mx-auto">
                  De la première inspection au coulage final, découvrez comment nous garantissons la longévité de votre investissement.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                {technicalPoints.map((pt, i) => {
                  const Icon = pt.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        background: "#FFFFFF",
                        borderRadius: "16px",
                        padding: "2rem",
                        border: "1.5px solid var(--border-light)",
                        boxShadow: "var(--shadow-sm)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          background: "var(--brand-teal-glow)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--brand-primary)"
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-main)" }}>
                        {pt.title}
                      </h4>
                      <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                        {pt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote banner */}
            <div
              style={{
                marginTop: "4.5rem",
                background: "var(--brand-teal-glow)",
                border: "1.5px solid rgba(10, 65, 64, 0.15)",
                borderRadius: "16px",
                padding: "2.5rem",
                textAlign: "center"
              }}
            >
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "0.75rem" }}>
                Votre dalle béton est fissurée, creusée ou bosselée ?
              </h3>
              <p style={{ color: "var(--text-secondary)", maxWidth: "680px", margin: "0 auto 1.5rem auto", lineHeight: 1.6 }}>
                Ne recouvrez jamais une dalle abîmée sans avis technique préalable. Nous réalisons une visite diagnostique sur place à Toulouse pour évaluer la solution la plus pérenne et économique.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Programmer mon Diagnostic Technique
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
