import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import {
  ShieldCheck,
  Building2,
  FileText,
  UserCheck,
  Server,
  Lock,
  Scale,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Mentions Légales & Informations Juridiques | ARCASOLID31",
  description:
    "Mentions légales, informations juridiques, SIREN, SIRET, garantie décennale et politique de confidentialité de la société ARCASOLID31 (SAS), artisan sols à Aucamville et Toulouse.",
};

export default function MentionsLegalesPage() {
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
              <span style={{ color: "#FFFFFF" }}>Mentions Légales</span>
            </nav>
            <h1 className="page-banner-title">Mentions Légales &amp; Transparence Juridique</h1>
            <p className="page-banner-desc">
              Conformément aux dispositions de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique (LCEN), retrouvez ci-dessous l&apos;ensemble des informations légales régissant le site internet de la société ARCASOLID31.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding" style={{ background: "#FFFFFF" }}>
          <div className="container" style={{ maxWidth: "1080px" }}>
            
            {/* Quick Legal Summary Card */}
            <div className="legal-highlight-card">
              <div className="legal-highlight-header">
                <div className="legal-badge-icon">
                  <Building2 size={24} />
                </div>
                <div>
                  <h2 className="legal-highlight-title">Identité de l&apos;Entreprise</h2>
                  <p className="legal-highlight-sub">
                    Données officielles issues de l&apos;INSEE et du Registre National des Entreprises (RNE) — Mise à jour au 15/10/2026
                  </p>
                </div>
              </div>

              <div className="legal-data-grid">
                <div className="legal-data-item">
                  <span className="legal-data-label">Dénomination Commerciale</span>
                  <span className="legal-data-value">ARCASOLID31</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Forme Juridique</span>
                  <span className="legal-data-value">Société par actions simplifiée (SAS)</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Numéro SIREN</span>
                  <span className="legal-data-value">106 564 875</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Numéro SIRET (Siège social)</span>
                  <span className="legal-data-value">106 564 875 00016</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Numéro de TVA Intracommunautaire</span>
                  <span className="legal-data-value">FR00106564875</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Code Activité (NAF / APE)</span>
                  <span className="legal-data-value">4333Z — Travaux de revêtement des sols et des murs</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Date d&apos;Immatriculation</span>
                  <span className="legal-data-value">10 juillet 2026</span>
                </div>
                <div className="legal-data-item">
                  <span className="legal-data-label">Direction &amp; Présidence</span>
                  <span className="legal-data-value">Alain CHEHADE</span>
                </div>
              </div>
            </div>

            {/* Structured Legal Cards */}
            <div className="legal-sections-stack">
              
              {/* 1. Éditeur du site */}
              <article className="legal-card">
                <div className="legal-card-header">
                  <FileText size={22} className="legal-icon" />
                  <h3>1. Éditeur du Site &amp; Coordonnées</h3>
                </div>
                <div className="legal-card-body">
                  <p>
                    Le site internet <strong>https://www.arcasolid31.fr</strong> est édité et exploité par la société <strong>ARCASOLID31</strong>, Société par actions simplifiée (SAS) au capital social immatriculée sous le SIREN <strong>106 564 875</strong>.
                  </p>
                  <ul className="legal-contact-list">
                    <li>
                      <MapPin size={18} className="legal-list-icon" />
                      <span><strong>Adresse du siège social :</strong> 8 Rue du Général Maurel, 31140 Aucamville, France</span>
                    </li>
                    <li>
                      <Phone size={18} className="legal-list-icon" />
                      <span><strong>Téléphone direct :</strong> <a href="tel:+33670882843">+33 6 70 88 28 43</a></span>
                    </li>
                    <li>
                      <Mail size={18} className="legal-list-icon" />
                      <span><strong>Adresse électronique :</strong> <a href="mailto:ahmad.chehade31@gmail.com">ahmad.chehade31@gmail.com</a></span>
                    </li>
                    <li>
                      <UserCheck size={18} className="legal-list-icon" />
                      <span><strong>Directeur de la publication :</strong> Alain CHEHADE, en sa qualité de dirigeant légal de la société.</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* 2. Hébergement */}
              <article className="legal-card">
                <div className="legal-card-header">
                  <Server size={22} className="legal-icon" />
                  <h3>2. Hébergement du Site</h3>
                </div>
                <div className="legal-card-body">
                  <p>
                    Le site est hébergé par la plateforme d&apos;infrastructure sécurisée cloud :
                  </p>
                  <div className="legal-host-box">
                    <p><strong>Vercel Inc.</strong></p>
                    <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                    <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com <ExternalLink size={12} style={{ display: "inline" }} /></a></p>
                    <p>Conformité : Les données de distribution et d&apos;hébergement respectent les standards internationaux de sécurité et de chiffrement SSL/TLS (HTTPS).</p>
                  </div>
                </div>
              </article>

              {/* 3. Assurance Décennale & Responsabilité Civile */}
              <article className="legal-card">
                <div className="legal-card-header">
                  <ShieldCheck size={22} className="legal-icon" />
                  <h3>3. Assurance Professionnelle &amp; Garantie Décennale 10 Ans</h3>
                </div>
                <div className="legal-card-body">
                  <p>
                    Conformément à l&apos;article L. 241-1 du Code des assurances, <strong>ARCASOLID31</strong> a souscrit une <strong>assurance responsabilité civile professionnelle et garantie décennale</strong> obligatoire couvrant l&apos;ensemble de ses activités de revêtements de sols et de murs (activité NAF 4333Z) :
                  </p>
                  <ul className="legal-checklist">
                    <li>
                      <CheckCircle2 size={16} />
                      <span>Pose de résines époxy décoratives (sols métallisés, marbrés et industriels)</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} />
                      <span>Application de béton ciré artisanal sur sols, murs et pièces humides</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} />
                      <span>Revêtements extérieurs en moquette de pierre (granulat de marbre drainant)</span>
                    </li>
                    <li>
                      <CheckCircle2 size={16} />
                      <span>Préparation mécanique, surfaçage diamant et réparation de dalles béton</span>
                    </li>
                  </ul>
                  <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
                    L&apos;attestation d&apos;assurance décennale en cours de validité est systématiquement annexée à chaque devis officiel et remise au client avant le début de tout chantier. Zone géographique couverte : France métropolitaine, avec intervention principale en Haute-Garonne (31) et région Occitanie.
                  </p>
                </div>
              </article>

              {/* 4. Propriété Intellectuelle */}
              <article className="legal-card">
                <div className="legal-card-header">
                  <Scale size={22} className="legal-icon" />
                  <h3>4. Propriété Intellectuelle &amp; Droits d&apos;Auteur</h3>
                </div>
                <div className="legal-card-body">
                  <p>
                    L&apos;ensemble des éléments constituant ce site internet (notamment les marques, photographies de chantiers, textes, vidéos, ergonomie, charte graphique, simulateur de calcul et logotypes) sont la propriété exclusive d&apos;<strong>ARCASOLID31</strong> ou font l&apos;objet d&apos;une autorisation d&apos;utilisation spécifique.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation totale ou partielle de l&apos;un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans autorisation écrite préalable d&apos;ARCASOLID31, sous peine de poursuites civiles et pénales au titre du Code de la propriété intellectuelle.
                  </p>
                </div>
              </article>

              {/* 5. Données Personnelles (RGPD) */}
              <article className="legal-card">
                <div className="legal-card-header">
                  <Lock size={22} className="legal-icon" />
                  <h3>5. Protection des Données Personnelles (RGPD)</h3>
                </div>
                <div className="legal-card-body">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée :
                  </p>
                  <ul className="legal-bullet-list">
                    <li>
                      <strong>Finalité de la collecte :</strong> Les données personnelles recueillies via le formulaire de contact ou le calculateur de devis (nom, numéro de téléphone, adresse e-mail, surface du projet) ont pour unique finalité l&apos;établissement du devis, la réponse aux demandes d&apos;informations techniques et le suivi opérationnel des chantiers.
                    </li>
                    <li>
                      <strong>Absence de commercialisation :</strong> ARCASOLID31 s&apos;engage formellement à ne jamais vendre, louer ni céder vos données personnelles à des tiers à des fins publicitaires ou de prospection commerciale.
                    </li>
                    <li>
                      <strong>Durée de conservation :</strong> Les données relatives aux devis et échanges sont conservées pour une durée strictement nécessaire à la gestion de la relation commerciale et aux obligations légales de facturation et de garantie décennale (10 ans).
                    </li>
                    <li>
                      <strong>Vos droits :</strong> Vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez exercer ce droit à tout moment par simple message électronique à <a href="mailto:ahmad.chehade31@gmail.com">ahmad.chehade31@gmail.com</a> ou par courrier adressé au siège social : 8 Rue du Général Maurel, 31140 Aucamville.
                    </li>
                  </ul>
                </div>
              </article>

              {/* 6. Médiation & Droit Applicable */}
              <article className="legal-card">
                <div className="legal-card-header">
                  <Scale size={22} className="legal-icon" />
                  <h3>6. Médiation de la Consommation &amp; Juridiction Compétente</h3>
                </div>
                <div className="legal-card-body">
                  <p>
                    Conformément aux articles L. 616-1 et R. 616-1 du Code de la consommation, en cas de litige entre le professionnel et le consommateur non résolu à l&apos;amiable après réclamation écrite préalable, le client particulier peut recourir gratuitement au service d&apos;un médiateur de la consommation agréé.
                  </p>
                  <p>
                    Les présentes mentions légales sont soumises au droit français. Tout différend relatif à l&apos;interprétation, la validité ou l&apos;exécution du présent site internet relève de la compétence exclusive des tribunaux du ressort de la Cour d&apos;appel de Toulouse.
                  </p>
                </div>
              </article>

            </div>

            {/* Bottom Actions */}
            <div className="legal-footer-box">
              <div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "0.35rem" }}>
                  Une question sur nos garanties ou nos prestations ?
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                  Notre équipe technique et nos artisans sont à votre disposition pour vous conseiller et chiffrer votre projet.
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <a href="tel:+33670882843" className="btn btn-outline" style={{ borderColor: "var(--brand-primary)", color: "var(--brand-primary)" }}>
                  <Phone size={16} />
                  <span>06 70 88 28 43</span>
                </a>
                <Link href="/contact" className="btn btn-gold">
                  <span>Demander un Devis Gratuit</span>
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
