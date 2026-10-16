import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Un travail d'art sur le béton. La finition est impeccable et le résultat est d'une élégance rare.",
      author: "Marc D.",
      role: "Architecte d'Intérieur",
      location: "Toulouse Centre (31000)",
      project: "Béton Ciré Sol & Mobilier",
      rating: 5,
      avatar: "MD"
    },
    {
      id: 2,
      quote: "L'époxy décoratif a transformé notre garage en un espace de rangement premium. Une expertise rare.",
      author: "Thomas L.",
      role: "Propriétaire Résidence Privée",
      location: "Tournefeuille (31)",
      project: "Sol Époxy Haute Résistance",
      rating: 5,
      avatar: "TL"
    },
    {
      id: 3,
      quote: "La moquette de pierre est une pièce maîtresse. ArcaSolid31 a su allier fonctionnalité et design.",
      author: "Sophie & Laurent V.",
      role: "Rénovation Extérieure & Piscine",
      location: "Balma (31)",
      project: "Terrasse Moquette de Pierre Drainante",
      rating: 5,
      avatar: "SL"
    }
  ];

  return (
    <section className="section-padding testimonials-section" id="temoignages">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
          <h2 className="section-title">ÉCHO DE L&apos;EXCELLENCE</h2>
          <p className="section-subtitle mx-auto">
            La satisfaction de nos clients particuliers et professionnels à Toulouse est notre plus belle signature.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div className="testimonial-card" key={r.id}>
              <div className="testi-stars">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="testi-quote">« {r.quote} »</p>

              <div className="testi-author-row">
                <div className="testi-avatar">{r.avatar}</div>
                <div className="testi-author-info">
                  <span className="testi-name">{r.author}</span>
                  <span className="testi-project-type">
                    {r.role} • {r.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
