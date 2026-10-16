"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronDown,
  Sparkles,
  Calculator,
  Layers,
  Wrench,
  Image as ImageIcon,
  Info,
  CalendarCheck
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const serviceItems = [
    {
      name: "Sols Époxy Décoratif",
      href: "/services/sols-epoxy-decoratif",
      tag: "130€/m²",
      desc: "Finition miroir marbrée ou métallisée haut de gamme"
    },
    {
      name: "Époxy Sol de Garage",
      href: "/services/epoxy-garage",
      tag: "70€/m²",
      desc: "Ultra-résistant aux hydrocarbures & charges lourdes"
    },
    {
      name: "Béton Ciré Artisanal",
      href: "/services/beton-cire",
      tag: "130€/m²",
      desc: "Rendu minéral épuré sans joint, intérieur & bain"
    },
    {
      name: "Moquette de Pierre",
      href: "/services/moquette-de-pierre",
      tag: "Extérieur",
      desc: "Granulat de marbre naturel drainant pour terrasses"
    },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        {/* Top bar with contact info - visible on screens >= 1024px */}
        <div className="header-topbar">
          <div className="container header-topbar-inner">
            <div className="topbar-info">
              <a href="tel:+33670882843" className="topbar-item" title="Appelez-nous directement">
                <Phone size={13} className="topbar-icon" />
                <span>+33 6 70 88 28 43</span>
              </a>
              <span className="topbar-sep">•</span>
              <a href="mailto:ahmad.chehade31@gmail.com" className="topbar-item" title="Envoyez-nous un email">
                <Mail size={13} className="topbar-icon" />
                <span>ahmad.chehade31@gmail.com</span>
              </a>
              <span className="topbar-sep">•</span>
              <span className="topbar-item">
                <MapPin size={13} className="topbar-icon" />
                <span>Rue du général maurel, 31000 Toulouse</span>
              </span>
            </div>
            <div className="topbar-info topbar-right">
              <span className="topbar-item">
                <Clock size={13} className="topbar-icon" />
                <span>Lun - Sam : 08h00 - 19h00</span>
              </span>
              <span className="topbar-sep">•</span>
              <span className="topbar-item topbar-badge-gold">
                <ShieldCheck size={14} />
                <span>Garantie Décennale 10 Ans</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div className="header-nav-wrap">
            {/* Brand Logo & Name */}
            <Link href="/" className="brand-link" aria-label="ARCASOLID31 Accueil">
              <img
                src="/logo.png"
                alt="ARCASOLID31 - Sols Époxy & Béton Ciré Toulouse"
                className="brand-emblem"
                width={44}
                height={44}
              />
              <div className="brand-text-block">
                <span className="brand-title">
                  ARCA<span>SOLID</span>31
                </span>
                <span className="brand-tagline">
                  Béton Ciré • Époxy Décoratif • Moquette de Pierre
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="desktop-nav" aria-label="Navigation principale">
              <ul className="nav-menu">
                <li>
                  <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  >
                    Accueil
                  </Link>
                </li>

                {/* Services with dropdown */}
                <li
                  className="nav-item-dropdown"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={`nav-link dropdown-trigger ${isActive("/services") ? "active" : ""}`}
                  >
                    <span>Services & Tarifs</span>
                    <ChevronDown size={14} className={`dropdown-chevron ${servicesOpen ? "rotate" : ""}`} />
                  </Link>

                  <div className={`services-dropdown ${servicesOpen ? "show" : ""}`}>
                    <div className="dropdown-grid">
                      {serviceItems.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="dropdown-item"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="dropdown-item-header">
                            <span className="dropdown-item-title">{s.name}</span>
                            <span className="dropdown-item-price">{s.tag}</span>
                          </div>
                          <span className="dropdown-item-desc">{s.desc}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="dropdown-footer">
                      <Link
                        href="/services"
                        className="dropdown-footer-link"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>Voir le comparatif complet des tarifs</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/maitrise-technique"
                    className={`nav-link ${isActive("/maitrise-technique") ? "active" : ""}`}
                  >
                    Maîtrise Technique
                  </Link>
                </li>

                <li>
                  <Link
                    href="/portfolio"
                    className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
                  >
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link
                    href="/calculateur"
                    className={`nav-link ${isActive("/calculateur") ? "active" : ""}`}
                  >
                    Calculateur m²
                  </Link>
                </li>

                <li>
                  <Link
                    href="/a-propos"
                    className={`nav-link ${isActive("/a-propos") ? "active" : ""}`}
                  >
                    À Propos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Header Actions (Call + CTA + Mobile Toggle) */}
            <div className="header-actions">
              {/* Desktop Direct Phone CTA */}
              <a
                href="tel:+33670882843"
                className="header-phone-link"
                title="Appeler ARCASOLID31 au 06 70 88 28 43"
              >
                <div className="phone-icon-wrap">
                  <Phone size={14} />
                </div>
                <div className="phone-text-wrap">
                  <span className="phone-label">Conseil & Devis</span>
                  <span className="phone-number">06 70 88 28 43</span>
                </div>
              </a>

              {/* Mobile Quick-Call Circle Button (Visible on mobile/tablet) */}
              <a
                href="tel:+33670882843"
                className="header-call-icon-btn"
                aria-label="Appeler directement ARCASOLID31"
              >
                <Phone size={18} />
              </a>

              {/* Primary Quote CTA Button */}
              <Link
                href="/contact"
                className="header-quote-btn"
                title="Demander un devis gratuit en 30 minutes"
              >
                <span>Devis Gratuit</span>
                <ArrowRight size={14} className="quote-btn-icon" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer (Off-canvas) */}
      <aside
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Menu mobile"
      >
        <div className="mobile-drawer-header">
          <Link
            href="/"
            className="brand-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="ARCASOLID31 Logo"
              width={38}
              height={38}
              className="brand-emblem"
            />
            <div className="brand-text-block">
              <span className="brand-title">
                ARCA<span>SOLID</span>31
              </span>
              <span className="brand-tagline">Toulouse • Occitanie</span>
            </div>
          </Link>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Guarantee Banner in drawer */}
        <div className="mobile-drawer-guarantee">
          <ShieldCheck size={16} />
          <span>Garantie Décennale 10 Ans • Artisan Certifié</span>
        </div>

        {/* Mobile Navigation Links */}
        <div className="mobile-drawer-body">
          <nav className="mobile-nav-list">
            <Link
              href="/"
              className={`mobile-nav-item ${pathname === "/" ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Accueil</span>
              <ArrowRight size={15} className="mobile-nav-arrow" />
            </Link>

            {/* Accordion Services */}
            <div className="mobile-accordion">
              <div
                className={`mobile-nav-item mobile-accordion-header ${
                  isActive("/services") ? "active" : ""
                }`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services & Tarifs</span>
                <ChevronDown
                  size={16}
                  className={`mobile-accordion-chevron ${
                    mobileServicesOpen ? "rotate" : ""
                  }`}
                />
              </div>

              {mobileServicesOpen && (
                <div className="mobile-subnav">
                  <Link
                    href="/services"
                    className="mobile-subnav-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Tous les services & comparatif</span>
                  </Link>
                  <Link
                    href="/services/sols-epoxy-decoratif"
                    className="mobile-subnav-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Sol Époxy Décoratif</span>
                    <span className="mobile-subnav-badge">130€/m²</span>
                  </Link>
                  <Link
                    href="/services/epoxy-garage"
                    className="mobile-subnav-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Sol Garage Haute Résistance</span>
                    <span className="mobile-subnav-badge">70€/m²</span>
                  </Link>
                  <Link
                    href="/services/beton-cire"
                    className="mobile-subnav-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Béton Ciré Contemporain</span>
                    <span className="mobile-subnav-badge">130€/m²</span>
                  </Link>
                  <Link
                    href="/services/moquette-de-pierre"
                    className="mobile-subnav-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Moquette de Pierre Extérieure</span>
                    <span className="mobile-subnav-badge">Extérieur</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/maitrise-technique"
              className={`mobile-nav-item ${
                isActive("/maitrise-technique") ? "active" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Maîtrise Technique</span>
              <ArrowRight size={15} className="mobile-nav-arrow" />
            </Link>

            <Link
              href="/portfolio"
              className={`mobile-nav-item ${
                isActive("/portfolio") ? "active" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Portfolio & Réalisations</span>
              <ArrowRight size={15} className="mobile-nav-arrow" />
            </Link>

            <Link
              href="/calculateur"
              className={`mobile-nav-item ${
                isActive("/calculateur") ? "active" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Calculateur de Budget m²</span>
              <ArrowRight size={15} className="mobile-nav-arrow" />
            </Link>

            <Link
              href="/a-propos"
              className={`mobile-nav-item ${
                isActive("/a-propos") ? "active" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>À Propos d'ARCASOLID31</span>
              <ArrowRight size={15} className="mobile-nav-arrow" />
            </Link>

            <Link
              href="/contact"
              className={`mobile-nav-item ${
                isActive("/contact") ? "active" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact & Devis</span>
              <ArrowRight size={15} className="mobile-nav-arrow" />
            </Link>
          </nav>
        </div>

        {/* Mobile Drawer Footer Actions */}
        <div className="mobile-drawer-footer">
          <div className="mobile-action-buttons">
            <a href="tel:+33670882843" className="btn btn-secondary mobile-btn-call">
              <Phone size={16} />
              <span>06 70 88 28 43</span>
            </a>
            <Link
              href="/contact"
              className="btn btn-primary mobile-btn-quote"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Demander un Devis Gratuit</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mobile-drawer-contact-info">
            <div className="drawer-info-line">
              <Clock size={13} />
              <span>Lun - Sam : 08h00 - 19h00</span>
            </div>
            <div className="drawer-info-line">
              <MapPin size={13} />
              <span>Rue du général maurel, 31000 Toulouse</span>
            </div>
            <div className="drawer-info-line">
              <Mail size={13} />
              <span>ahmad.chehade31@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
