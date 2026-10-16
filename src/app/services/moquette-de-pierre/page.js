import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Sun, Droplets, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export const metadata = {
  title: "Moquette de Pierre à Toulouse | Terrasses & Plages de Piscine | ARCASOLID31",
  description: "Moquette de pierre (granulat de marbre & résine polyuréthane) à Toulouse. Revêtement drainant, antidérapant et anti-UV pour terrasses, plages de piscine et allées.",
};

export default function MoquetteDePierrePage() {
  const advantages = [
    {
      title: "Drainage Naturel Ultra Efficace",
      desc: "Grâce à sa structure ouverte, l'eau de pluie ou les éclaboussures de piscine traversent naturellement la couche de marbre vers le sous-sol. Fini les flaques stagnantes et la formation de mousse glissante."
    },
    {
      title: "Antidérapant & Confort Pieds Nus",
      desc: "Les granulats de marbre roulés sont doux au contact des pieds nus et procurent une adhérence naturelle sécurisante, même lorsque le sol est gorgé d'eau."
    },
    {
      title: "Résine Aliphatique Anti-Jaunissement",
      desc: "Nous utilisons exclusivement des résines polyuréthanes aliphatiques certifiées 100% résistantes aux rayons UV du soleil toulousain, garantissant que les couleurs du marbre ne jauniront jamais."
    },
    {
      title: "Résistance au Gel & aux Intempéries",
      desc: "Ne craint ni le gel hivernal ni les chaleurs caniculaires d'Occitanie. Le matériau absorbe les dilatations sans fissurer."
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
              <span style={{ color: "#FFFFFF" }}>Moquette de Pierre Extérieure</span>
            </nav>
            <h1 className="page-banner-title">Moquette de Pierre Extérieure</h1>
            <p className="page-banner-desc">
              Le tapis de pierre naturelle : élégant, drainant et hautement résistant aux intempéries. Sublimez vos extérieurs à Toulouse avec un revêtement noble sans flaques.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="tech-grid" style={{ alignItems: "flex-start" }}>
              <div>
                <h2 className="section-title">
                  L&apos;Harmonie Minérale au Cœur de Vos Espaces Extérieurs
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  La moquette de pierre (ou tapis de marbre) est composée de granulats de marbre naturel soigneusement calibrés (2-4 mm ou 4-8 mm), lavés, séchés et enrobés d&apos;une résine polyuréthane haute performance. Elle habille vos terrasses, allées carrossables et contours de piscine avec une élégance naturelle incomparable.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "2rem 0" }}>
                  {advantages.map((adv, i) => (
                    <div key={i} style={{ background: "var(--bg-subtle)", padding: "1.2rem", borderRadius: "10px", border: "1px solid var(--border-light)" }}>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.3rem" }}>
                        {adv.title}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {adv.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "#F0F7F7", padding: "1.5rem", borderRadius: "12px", border: "1.5px solid rgba(10, 65, 64, 0.15)", marginTop: "2rem" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.4rem" }}>
                    Pose sur carrelage ou dalle béton existante
                  </h4>
                  <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    Dans la majorité des cas de rénovation extérieure, il n&apos;est pas nécessaire de casser votre ancien carrelage ou votre dalle béton. Avec une épaisseur de seulement 8 à 10 mm, la moquette de pierre s&apos;applique directement après ponçage et primaire, évitant les surcoûts et les gravats.
                  </p>
                </div>
              </div>

              <div>
                <div style={{ background: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1.5px solid var(--border-light)", boxShadow: "var(--shadow-lg)" }}>
                  <img
                    src="/images/moquette_pierre.jpg"
                    alt="Terrasse et plage de piscine en moquette de pierre par ArcaSolid31"
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
                      <div>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Tarification</span>
                        <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--brand-primary)" }}>
                          Dès 110€ <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-secondary)" }}>/ m²</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>Diagnostic</span>
                        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-main)" }}>
                          Sur Place
                        </div>
                      </div>
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Perméable et drainant (évite les flaques)</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Antidérapant pieds mouillés</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Résine polyuréthane garantie anti-UV</li>
                      <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--brand-primary)" /> Large gamme de teintes de marbre naturel</li>
                    </ul>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <Link
                        href="/contact?projet=Projet%20Ext%C3%A9rieur%20-%20Moquette%20de%20Pierre"
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                      >
                        <span>Demander une Étude sur Site</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        href="/calculateur"
                        className="btn btn-secondary"
                        style={{ width: "100%" }}
                      >
                        <span>Simuler mon métré terrasse</span>
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
