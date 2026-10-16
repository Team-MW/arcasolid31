"use client";

import { Clock, CheckCircle2, ArrowRight, Sparkles, Shield, Wrench } from "lucide-react";

export default function Services({ onSelectService }) {
  const servicesData = [
    {
      id: "epoxy-decoratif",
      title: "Devis Sols Époxy Décoratif",
      tagline: "L'art du sol miroir contemporain",
      price: "130€",
      priceUnit: "le m²",
      duration: "30 min de consultation",
      image: "/images/epoxy_decoratif.jpg",
      highlight: true,
      description:
        "Création d'espaces de vie prestigieux avec nos revêtements en résine époxy décorative. Finition sans joints, personnalisation infinie (effets marbrés, métallisés ou unis) et haute résistance au quotidien.",
      features: [
        "Finition sans joints, entretien ultra-facile",
        "Personnalisation des nuances & reflets artistiques",
        "Idéal salons, cuisines et résidences haut de gamme",
        "Durabilité maximale et résistance aux taches"
      ],
      linkText: "Détails & Devis Époxy Décoratif"
    },
    {
      id: "epoxy-garage",
      title: "Devis Époxy pour Sol de Garage",
      tagline: "Robustesse industrielle & esthétique showroom",
      price: "70 €",
      priceUnit: "le M²",
      duration: "30 min de consultation",
      image: "/images/garage_epoxy.jpg",
      highlight: true,
      description:
        "Transformation de garages, ateliers et espaces techniques en zones impeccables. Revêtement époxy haute performance offrant une imperméabilité totale et une résistance extrême aux contraintes mécaniques.",
      features: [
        "Résistance aux hydrocarbures & huiles mécaniques",
        "Insensible aux pneus chauds et chocs de charges lourdes",
        "Finition antidérapante ou brillante avec paillettes quartz",
        "Nettoyage haute pression simplifié"
      ],
      linkText: "Détails & Devis Époxy Garage"
    },
    {
      id: "beton-cire",
      title: "Devis Béton Ciré",
      tagline: "Élégance minérale & pureté architecturale",
      price: "130€",
      priceUnit: "le m²",
      duration: "1 h de consultation",
      image: "/images/beton_cire.jpg",
      highlight: true,
      description:
        "Aménagement d'espaces contemporains et épurés avec notre béton ciré traditionnel. Une matière texturée et chaleureuse qui sublime sols, murs et pièces d'eau dans une atmosphère contemporaine raffinée.",
      features: [
        "Continuité visuelle fluide sols & murs",
        "Texture minérale soyeuse et nuances subtiles",
        "Compatible sols chauffants et pièces humides",
        "Confort tactile et robustesse pérenne"
      ],
      linkText: "Détails & Devis Béton Ciré"
    },
    {
      id: "moquette-pierre",
      title: "Moquette de Pierre Extérieure",
      tagline: "Écrin naturel drainant pour terrasses & piscines",
      price: "Sur Devis",
      priceUnit: "sur-mesure",
      duration: "Diagnostic sur site",
      image: "/images/moquette_pierre.jpg",
      highlight: false,
      description:
        "Alliance noble de granulats de marbre naturel ou quartz sélectionnés et de résine polyuréthane ultra-résistante aux UV. La solution par excellence pour terrasses, plages de piscine et allées carrossables.",
      features: [
        "Drainage naturel des eaux de pluie (surface anti-flaques)",
        "Antidérapant et agréable au toucher pieds nus",
        "Résistance totale au gel, UV et variations climatiques",
        "Esthétique minérale haut de gamme"
      ],
      linkText: "Découvrir la Moquette de Pierre"
    },
    {
      id: "tables-epoxy",
      title: "Tables Époxy Artisanales",
      tagline: "Créations uniques d'artisan d'art",
      price: "Sur Mesure",
      priceUnit: "pièce unique",
      duration: "Conception personnalisée",
      image: "/images/table_epoxy.jpg",
      highlight: false,
      description:
        "Conception artisanale de tables de repas, tables basses et consoles combinant essences de bois nobles massifs (noyer, chêne, olivier) et résine époxy cristalline coulée en profondeur.",
      features: [
        "Sélection rigoureuse de plateaux de bois nobles",
        "Pigmentation sur mesure (vert émeraude, bleu lagon, fumé)",
        "Finition poli miroir ou satinée haute résistance",
        "Pièces d'art uniques certifiées"
      ],
      linkText: "Voir les Créations de Tables"
    },
    {
      id: "renovation-dalles",
      title: "Rénovation de Dalles Béton",
      tagline: "Préparation & nivellement haute rigueur",
      price: "Diagnostic",
      priceUnit: "technique",
      duration: "Audit sur place",
      image: "/images/renovation_beton.jpg",
      highlight: false,
      description:
        "Solutions techniques pour la mise à niveau, le surfaçage diamanté et la réparation structurelle de dalles béton dégradées, fissurées ou irrégulières avant l'application de tout revêtement.",
      features: [
        "Ponçage et rectification de planéité au laser",
        "Traitement des fissures & injections techniques",
        "Ragréage fibré haute résistance P4S",
        "Garantie d'une base saine, solide et pérenne"
      ],
      linkText: "Consulter la Maîtrise Technique"
    }
  ];

  return (
    <section className="section-padding services-section" id="services">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
          <h2 className="section-title">
            Des Revêtements Nobles aux Tarifs Clairs et Transparents
          </h2>
          <p className="section-subtitle mx-auto">
            Chaque surface bénéficie d&apos;une préparation minutieuse et de résines certifiées haut de gamme.
            Découvrez nos tarifs au m² et nos prestations sur mesure à Toulouse.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((svc) => (
            <div className="service-card" key={svc.id}>
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
                <h3 className="service-card-title">{svc.title}</h3>
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
                  <a
                    href="#devis"
                    onClick={() => onSelectService && onSelectService(svc.title)}
                    className="btn btn-primary"
                    style={{ width: "100%", fontSize: "0.875rem" }}
                  >
                    <span>{svc.linkText}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Banner for All Services */}
        <div className="services-cta-banner">
          <div>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-primary)" }}>
              Vous avez un projet spécifique ou une grande surface à aménager ?
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "0.25rem" }}>
              Nous étudions tous vos plans et cahiers des charges sous 24 à 48 heures.
            </p>
          </div>
          <div className="services-cta-buttons">
            <a href="tel:+33670882843" className="btn btn-secondary">
              Appeler un Expert
            </a>
            <a href="#contact" className="btn btn-primary">
              Découvrir tous nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
