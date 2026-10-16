import { Star, CheckCircle2, ShieldCheck } from "lucide-react";

// Official 4-color Google "G" logo
function GoogleLogo({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
      />
    </svg>
  );
}

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
      avatar: "MD",
      date: "Il y a 3 semaines"
    },
    {
      id: 2,
      quote: "L'époxy décoratif a transformé notre garage en un espace de rangement premium. Une expertise rare.",
      author: "Thomas L.",
      role: "Propriétaire Résidence Privée",
      location: "Tournefeuille (31)",
      project: "Sol Époxy Haute Résistance",
      rating: 5,
      avatar: "TL",
      date: "Il y a 1 mois"
    },
    {
      id: 3,
      quote: "La moquette de pierre est une pièce maîtresse. ArcaSolid31 a su allier fonctionnalité et design.",
      author: "Sophie & Laurent V.",
      role: "Rénovation Extérieure & Piscine",
      location: "Balma (31)",
      project: "Terrasse Moquette de Pierre Drainante",
      rating: 5,
      avatar: "SL",
      date: "Il y a 2 mois"
    }
  ];

  return (
    <section className="section-padding testimonials-section" id="temoignages">
      <div className="container">
        {/* Header Block */}
        <div className="text-center mx-auto" style={{ maxWidth: "780px" }}>
          <h2 className="section-title">ÉCHO DE L&apos;EXCELLENCE</h2>
          <p className="section-subtitle mx-auto">
            La satisfaction de nos clients particuliers et professionnels à Toulouse est notre plus belle signature.
          </p>

          {/* Google Reviews Trust Badge */}
          <div className="google-reviews-badge-banner">
            <div className="google-badge-brand">
              <GoogleLogo size={24} />
              <span className="google-badge-brand-text">Avis Google</span>
            </div>
            <div className="google-badge-divider" />
            <div className="google-badge-rating-group">
              <span className="google-badge-score">5.0</span>
              <div className="google-badge-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>
            </div>
            <div className="google-badge-divider" />
            <div className="google-badge-verified">
              <CheckCircle2 size={15} color="#16A34A" />
              <span>Avis 100% Vérifiés</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div className="testimonial-card" key={r.id}>
              {/* Card Top: Stars + Google Pill */}
              <div className="testi-card-top">
                <div className="testi-stars">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={17} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                <div className="testi-google-tag" title="Avis vérifié sur Google My Business">
                  <GoogleLogo size={14} />
                  <span>Avis Google</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="testi-quote">« {r.quote} »</p>

              {/* Author Row */}
              <div className="testi-author-row">
                <div className="testi-avatar">{r.avatar}</div>
                <div className="testi-author-info">
                  <div className="testi-name-row">
                    <span className="testi-name">{r.author}</span>
                    <span className="testi-verified-pill" title="Avis vérifié Google">
                      <CheckCircle2 size={12} color="#16A34A" />
                      <span>Vérifié</span>
                    </span>
                  </div>
                  <span className="testi-project-type">
                    {r.role} • {r.location}
                  </span>
                  <span className="testi-review-date">{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
