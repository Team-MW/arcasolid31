import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="footer-brand-header">
              <img
                src="/logo.png"
                alt="ARCASOLID31 Logo"
                width={48}
                height={48}
                className="footer-logo-img"
              />
              <div>
                <div className="footer-brand-name">
                  ARCA<span>SOLID</span>31
                </div>
                <div className="footer-brand-sub">
                  Toulouse &bull; Haute-Garonne
                </div>
              </div>
            </Link>

            <p className="footer-brand-desc">
              Entreprise artisanale toulousaine d&apos;excellence. Spécialiste des sols continus sans joints : résine époxy décorative, béton ciré minéral, époxy garage et moquette de pierre naturelle.
            </p>

            <div className="footer-decennale-badge">
              <ShieldCheck size={18} />
              <span>Garantie Décennale Artisans Français</span>
            </div>
          </div>

          {/* Prestations Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Prestations &amp; Tarifs</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/services/sols-epoxy-decoratif" className="footer-link">
                  Sols Époxy Décoratif (130 €/m²)
                </Link>
              </li>
              <li>
                <Link href="/services/epoxy-garage" className="footer-link">
                  Époxy Sol de Garage (70 €/m²)
                </Link>
              </li>
              <li>
                <Link href="/services/beton-cire" className="footer-link">
                  Béton Ciré Contemporain (130 €/m²)
                </Link>
              </li>
              <li>
                <Link href="/services/moquette-de-pierre" className="footer-link">
                  Moquette de Pierre Extérieure
                </Link>
              </li>
              <li>
                <Link href="/maitrise-technique" className="footer-link">
                  Rénovation &amp; Surfaçage Dalles
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Tables Époxy Artisanales
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/services" className="footer-link">
                  Catalogue Services &amp; Tarifs
                </Link>
              </li>
              <li>
                <Link href="/maitrise-technique" className="footer-link">
                  Maîtrise Technique &amp; Dalles
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link">
                  Galerie &amp; 6 Réalisations
                </Link>
              </li>
              <li>
                <Link href="/calculateur" className="footer-link">
                  Calculateur de Budget en Ligne
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="footer-link">
                  À Propos d&apos;ArcaSolid31
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact &amp; Demande de Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Coordonnées Col */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Coordonnées</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+33670882843" className="footer-contact-item">
                  <Phone size={16} className="footer-contact-icon" />
                  <span>+33 6 70 88 28 43</span>
                </a>
              </li>
              <li>
                <a href="mailto:ahmad.chehade31@gmail.com" className="footer-contact-item">
                  <Mail size={16} className="footer-contact-icon" />
                  <span className="footer-email-text">ahmad.chehade31@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="footer-contact-item">
                  <MapPin size={16} className="footer-contact-icon" />
                  <span>8 Rue du Général Maurel, 31140 Aucamville (Toulouse)</span>
                </div>
              </li>
            </ul>

            <div className="footer-cta-wrap">
              <Link href="/contact" className="btn btn-gold footer-cta-btn">
                <span>Demander un Devis Gratuit</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {currentYear} ARCASOLID31 &bull; Tous droits réservés &bull; SAS au capital social &bull; SIREN 106 564 875 &bull; Aucamville &bull; Toulouse Métropole
          </div>
          <div className="footer-bottom-nav">
            <Link href="/" className="footer-bottom-link">Accueil</Link>
            <Link href="/services" className="footer-bottom-link">Services</Link>
            <Link href="/portfolio" className="footer-bottom-link">Portfolio</Link>
            <Link href="/calculateur" className="footer-bottom-link">Calculateur</Link>
            <Link href="/contact" className="footer-bottom-link">Contact</Link>
            <Link href="/mentions-legales" className="footer-bottom-link" style={{ fontWeight: 600, color: "var(--brand-gold)" }}>Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
