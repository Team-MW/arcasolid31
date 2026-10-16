import { Wrench, CheckCircle, ShieldAlert, Layers, ShieldCheck, Gauge } from "lucide-react";

export default function TechnicalMastery() {
  const steps = [
    {
      num: "01",
      title: "Diagnostic Structurel & Analyse d'Humidité",
      desc: "Mesure hygrométrique précise au carbure de calcium, sondage de dureté superficielle et détection des zones creuses pour garantir l'adhérence optimale des résines."
    },
    {
      num: "02",
      title: "Rabotage & Ponçage Diamant Industriel",
      desc: "Décapage mécanique lourd avec aspirateurs industriels HEPA en circuit fermé pour ouvrir les pores du béton sans générer de poussière nocive dans vos locaux."
    },
    {
      num: "03",
      title: "Traitement Fissures & Pontage Carbone",
      desc: "Ouverture des fissures en biseau, pontage avec agrafes en acier ondulé et injection de coulis époxy thixotrope pour neutraliser tout mouvement résiduel."
    },
    {
      num: "04",
      title: "Nivellement Laser & Ragréage Fibré P4S",
      desc: "Coulage d'un mortier auto-lissant fibré de haute technicité contrôlé par nivellement laser pour garantir une planéité absolue avant finition."
    }
  ];

  return (
    <section className="section-padding technical-section" id="maitrise-technique">
      <div className="container">
        <div className="tech-grid">
          <div>
            <h2 className="section-title" style={{ color: "#FFFFFF" }}>
              MAÎTRISE TECHNIQUE
            </h2>

            <div className="tech-quote-box">
              <p className="tech-quote-text">
                « Nivellement et réparation précise des dalles. Nous intervenons avec une rigueur technique absolue pour restaurer l&apos;intégrité structurelle et esthétique de vos surfaces bétonnées. »
              </p>
            </div>

            <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "1.025rem", marginBottom: "2rem", lineHeight: 1.65 }}>
              La réussite et la pérennité d&apos;un sol en résine époxy ou d&apos;un béton ciré dépendent à 80% de la qualité de sa préparation. Chez ARCASOLID31, aucune étape n&apos;est laissée au hasard.
            </p>

            <div className="tech-steps-list">
              {steps.map((st) => (
                <div className="tech-step-item" key={st.num}>
                  <div className="tech-step-num">{st.num}</div>
                  <div>
                    <h3 className="tech-step-title">{st.title}</h3>
                    <p className="tech-step-desc">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="tech-media-card">
              <img
                src="/images/renovation_beton.jpg"
                alt="Matériel de ponçage diamant et nivellement de dalle béton par ArcaSolid31"
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
                    Tolérance Millimétrique
                  </div>
                  <div style={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.75)" }}>
                    Contrôle de planéité laser et cohésion mécanique certifiée
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
