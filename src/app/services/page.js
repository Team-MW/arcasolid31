import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Sparkles, Clock, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Nos Services & Tarifs Revêtements | ARCASOLID31 Toulouse",
  description: "Découvrez notre catalogue complet de revêtements de sols continus à Toulouse : Sols époxy décoratifs (130€/m²), époxy garage (70€/m²), béton ciré (130€/m²), moquette de pierre et préparation de dalles.",
};

export default function ServicesPage() {
  const servicesList = [
    {
      slug: "sols-epoxy-decoratif",
      title: "Devis Sols Époxy Décoratif",
      price: "130€",
      priceUnit: "le m²",
      duration: "30 min de diagnostic",
      image: "/images/epoxy_decoratif.jpg",
      badge: "Résidences & Prestige",
      description:
        "Création d'espaces de vie prestigieux avec nos sols en résine époxy décorative. Finition sans joints, personnalisation infinie (effets marbrés, nacrés ou unis) et haute résistance au quotidien.",
      features: [
        "Finition poli miroir, satinée ou mate soyeuse",
        "Aucun joint de dilatation : continuité visuelle absolue",
        "Résistance élevée aux rayures et nettoyants ménagers",
        "Idéal salons, cuisines, suites parentales et showrooms"
      ]
    },
    {
      slug: "epoxy-garage",
      title: "Devis Époxy pour Sol de Garage",
      price: "70 €",
      priceUnit: "le M²",
      duration: "30 min de diagnostic",
      image: "/images/garage_epoxy.jpg",
      badge: "Haute Performance",
      description:
        "Transformation de garages et ateliers en espaces fonctionnels et esthétiques grâce à nos revêtements époxy ultra-robustes. Résistance éprouvée aux hydrocarbures, chocs et pneus chauds.",
      features: [
        "Résistant aux huiles, liquides de freins et solvants",
        "Ne marque pas au contact des pneus chauds de véhicules",
        "Possibilité d'ajouter des paillettes de quartz décoratives",
        "Nettoyage ultra rapide au jet d'eau ou serpillère"
      ]
    },
    {
      slug: "beton-cire",
      title: "Devis Béton Ciré Contemporain",
      price: "130€",
      priceUnit: "le m²",
      duration: "1 h de diagnostic",
      image: "/images/beton_cire.jpg",
      badge: "Pureté Minérale",
      description:
        "Aménagement d'espaces professionnels et résidentiels modernes avec du béton ciré artisanal. Ambiance industrielle et minérale raffinée, facile d'entretien pour sols et murs.",
      features: [
        "Application artisanale talochée pour un veinage unique",
        "Compatible sol chauffant et pièces d'eau",
        "Traitement bouche-pores et vernis haute protection",
        "Ambiance loft épurée, chic et chaleureuse"
      ]
    },
    {
      slug: "moquette-de-pierre",
      title: "Moquette de Pierre Extérieure",
      price: "Sur Devis",
      priceUnit: "sur-mesure",
      duration: "Audit sur site",
      image: "/images/moquette_pierre.jpg",
      badge: "Extérieurs & Terrasses",
      description:
        "Revêtement d'extérieur drainant combinant granulats de marbre naturel et résine polyuréthane aliphatique anti-jaunissement. Parfait pour terrasses, allées et contours de piscine.",
      features: [
        "Perméabilité totale : aucune flaque d'eau résiduelle",
        "Antidérapant même mouillé, agréable pieds nus",
        "Insensible aux gels d'hiver et rayons UV estivaux",
        "Coloris naturels variés (marbre blanc, beige, gris)"
      ]
    },
    {
      slug: "tables-epoxy",
      title: "Tables Époxy Artisanales",
      price: "Sur Mesure",
      priceUnit: "pièce unique",
      duration: "Conception sur-mesure",
      image: "/images/table_epoxy.jpg",
      badge: "Artisanat d'Art",
      description:
        "Création de tables uniques et personnalisées avec incrustations en résine époxy. Combinaison de matériaux nobles et résine pour des pièces maîtresses alliant art et fonctionnalité.",
      features: [
        "Sélection de plateaux de bois massifs nobles (chêne, noyer)",
        "Coulées de résine transparente ou colorée en profondeur",
        "Finition résistante aux rayures et vernis protecteur",
        "Chaque table est numérotée et unique au monde"
      ]
    },
    {
      slug: "renovation-dalles",
      title: "Rénovation de Dalles Béton",
      price: "Diagnostic",
      priceUnit: "technique",
      duration: "Audit sur place",
      image: "/images/renovation_beton.jpg",
      badge: "Maîtrise Technique",
      description:
        "Solutions techniques pour la mise à niveau, le surfaçage au diamant et la réparation précise des dalles en béton dégradées avant tout nouveau revêtement.",
      features: [
        "Nivellement et rectification des dénivelés au laser",
        "Agrafage et injection époxy des fissures structurelles",
        "Décapage mécanique et ouverture de porosité",
        "Assurance d'une adhérence parfaite et durable"
      ]
    }
  ];

  const comparisonData = [
    {
      criteria: "Destination",
      epoxyDeco: "Intérieur (salons, cuisines, chambres)",
      epoxyGarage: "Garages, ateliers, zones stockage",
      betonCire: "Intérieur (sols, murs, salles de bain)",
      moquettePierre: "Extérieur (terrasses, piscines, allées)"
    },
    {
      criteria: "Tarif standard",
      epoxyDeco: "130 € / m²",
      epoxyGarage: "70 € / m²",
      betonCire: "130 € / m²",
      moquettePierre: "Dès 110 € / m² (sur devis)"
    },
    {
      criteria: "Consultation préalable",
      epoxyDeco: "30 min de diagnostic",
      epoxyGarage: "30 min de diagnostic",
      betonCire: "1 heure de diagnostic",
      moquettePierre: "Visite sur site"
    },
    {
      criteria: "Aspect & Finition",
      epoxyDeco: "Miroir lisse, marbré ou nacré",
      epoxyGarage: "Satiné robuste, quartz ou paillettes",
      betonCire: "Minéral texturé, soyeux et doux",
      moquettePierre: "Grain naturel de marbre drainant"
    },
    {
      criteria: "Résistance aux chocs",
      epoxyDeco: "Très bonne (usage résidentiel)",
      epoxyGarage: "Extrême (véhicules, charges lourdes)",
      betonCire: "Très bonne (traitement P4S)",
      moquettePierre: "Excellente (passage piéton & carrossable)"
    },
    {
      criteria: "Entretien",
      epoxyDeco: "Serpillère microfibre & eau tiède",
      epoxyGarage: "Nettoyage haute pression ou serpillère",
      epoxyGarage: "Savon noir neutre doux",
      moquettePierre: "Jet d'eau ou balai-brosse"
    }
  ];

  const faqs = [
    {
      q: "Combien de temps faut-il pour poser un sol époxy ou un béton ciré ?",
      a: "Pour une surface moyenne de 40 à 80 m², comptez entre 3 et 5 jours ouvrés. Ce délai comprend la préparation minutieuse du support (ponçage diamant, réparation des fissures, primaire d'accroche), l'application des couches de résine ou béton ciré, et les temps de séchage rigoureux."
    },
    {
      q: "Quelle est la différence entre l'époxy de garage à 70€/m² et l'époxy décoratif à 130€/m² ?",
      a: "L'époxy pour garage à 70€/m² est formulé pour une résistance mécanique extrême aux pneus chauds, aux huiles moteur et au passage de charges lourdes. L'époxy décoratif à 130€/m² intègre un travail artistique approfondi de teintes, d'effets métallisés marbrés et une finition sans bulles ni grains pour un rendu miroir d'exception."
    },
    {
      q: "Intervenez-vous en dehors de Toulouse ?",
      a: "Oui, nous intervenons dans toute l'agglomération toulousaine (Blagnac, Tournefeuille, Colomiers, Balma, Muret, Cugnaux) et dans toute la Haute-Garonne (31) ainsi que les départements limitrophes pour les projets d'envergure."
    },
    {
      q: "Vos prestations bénéficient-elles d'une garantie ?",
      a: "Absolument. Tous nos chantiers de revêtements de sol sont couverts par une assurance Responsabilité Civile Professionnelle et une Garantie Décennale d'artisan français."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Banner */}
        <section className="page-header-banner">
          <div className="container">
            <nav className="breadcrumbs" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span style={{ color: "#FFFFFF" }}>Services &amp; Tarifs</span>
            </nav>
            <h1 className="page-banner-title">Nos Prestations &amp; Tarifs au m²</h1>
            <p className="page-banner-desc">
              Tarification transparente, savoir-faire technique certifié et matériaux haut de gamme.
              Découvrez en détail nos solutions de revêtements de sol à Toulouse.
            </p>
          </div>
        </section>

        {/* Services Cards List */}
        <section className="section-padding">
          <div className="container">
            <div className="services-grid" style={{ marginTop: 0 }}>
              {servicesList.map((svc) => (
                <div className="service-card" key={svc.slug}>
                  <div className="service-card-image-wrap">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="service-card-image"
                      loading="lazy"
                    />
                    <div className="service-badge-time">
                      <Clock size={13} />
                      <span>{svc.duration}</span>
                    </div>
                    <div className="service-badge-pricing">
                      <span className="highlight-price">{svc.price}</span>{" "}
                      <span>{svc.priceUnit}</span>
                    </div>
                  </div>

                  <div className="service-card-body">
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                      {svc.badge}
                    </span>
                    <h2 className="service-card-title">{svc.title}</h2>
                    <p className="service-card-desc">{svc.description}</p>

                    <ul className="service-features-list">
                      {svc.features.map((feat, idx) => (
                        <li className="service-feature-item" key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="service-card-footer">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="btn btn-secondary"
                        style={{ fontSize: "0.85rem", flex: 1 }}
                      >
                        <span>Fiche Détaillée</span>
                      </Link>
                      <Link
                        href={`/contact?projet=${encodeURIComponent(svc.title)}`}
                        className="btn btn-primary"
                        style={{ fontSize: "0.85rem", flex: 1 }}
                      >
                        <span>Devis Express</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table Section */}
            <div style={{ marginTop: "5rem" }}>
              <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
                <h2 className="section-title">Quel Revêtement Choisir pour Votre Espace ?</h2>
                <p className="section-subtitle mx-auto">
                  Comparez nos différentes technologies selon vos contraintes d&apos;usage, votre budget et le rendu esthétique désiré.
                </p>
              </div>

              <div className="comparison-table-wrap">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Critère</th>
                      <th>Sols Époxy Décoratif</th>
                      <th>Époxy Sol de Garage</th>
                      <th>Béton Ciré</th>
                      <th>Moquette de Pierre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 700, color: "var(--text-main)" }}>{row.criteria}</td>
                        <td>{row.epoxyDeco}</td>
                        <td>{row.epoxyGarage}</td>
                        <td>{row.betonCire}</td>
                        <td>{row.moquettePierre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQs */}
            <div style={{ marginTop: "5rem" }}>
              <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
                <h2 className="section-title">Tout Ce Qu&apos;il Faut Savoir</h2>
                <p className="section-subtitle mx-auto">
                  Des réponses précises à vos interrogations sur la pose, l&apos;entretien et la garantie de nos sols.
                </p>
              </div>

              <div className="faq-grid" style={{ maxWidth: "860px", margin: "2.5rem auto 0 auto" }}>
                {faqs.map((faq, i) => (
                  <div className="faq-item" key={i}>
                    <h3 className="faq-question">{faq.q}</h3>
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="cta-conversion-banner">
              <div>
                <h3 style={{ fontSize: "clamp(1.4rem, 4vw, 1.75rem)", fontWeight: 800, marginBottom: "0.5rem" }}>
                  Prêt à transformer votre sol ?
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.95rem", maxWidth: "540px" }}>
                  Obtenez votre estimation gratuite en 2 minutes avec notre calculateur de prix en ligne ou contactez notre équipe toulousaine.
                </p>
              </div>
              <div className="cta-conversion-buttons">
                <Link href="/calculateur" className="btn btn-gold">
                  Simulateur au m²
                </Link>
                <Link href="/contact" className="btn btn-outline-white">
                  Contacter un Conseiller
                </Link>
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
