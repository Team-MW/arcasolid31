"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Clock, ChevronDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services & Tarifs", href: "/services" },
    { name: "Maîtrise Technique", href: "/maitrise-technique" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Calculateur m²", href: "/calculateur" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        {/* Top bar with contact info */}
        <div className="header-topbar">
          <div className="container header-topbar-inner">
            <div className="topbar-info">
              <a href="tel:+33670882843" className="topbar-item">
                <Phone size={13} />
                <span>+33 6 70 88 28 43</span>
              </a>
              <a href="mailto:ahmad.chehade31@gmail.com" className="topbar-item">
                <Mail size={13} />
                <span>ahmad.chehade31@gmail.com</span>
              </a>
              <span className="topbar-item">
                <MapPin size={13} />
                <span>Rue du général maurel, 31000 Toulouse</span>
              </span>
            </div>
            <div className="topbar-info">
              <span className="topbar-item">
                <Clock size={13} />
                <span>Lun - Sam : 08h00 - 19h00</span>
              </span>
              <span className="topbar-item" style={{ color: "#DFC692" }}>
                <ShieldCheck size={13} />
                <span>Garantie Décennale</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div className="header-nav-wrap">
            <Link href="/" className="brand-link" aria-label="ARCASOLID31 Accueil">
              <img
                src="/logo.png"
                alt="ARCASOLID31 - Sols Époxy & Béton Ciré"
                className="brand-emblem"
                width={50}
                height={50}
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

            {/* Desktop Navigation */}
            <nav>
              <ul className="nav-menu">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                      style={
                        isActive(link.href)
                          ? { color: "var(--brand-primary)", fontWeight: 700 }
                          : {}
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className="header-actions">
              <a
                href="tel:+33670882843"
                className="btn btn-secondary"
                style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}
              >
                <Phone size={14} />
                <span>06 70 88 28 43</span>
              </a>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ padding: "0.55rem 1.15rem", fontSize: "0.85rem" }}
              >
                <span>Devis Gratuit</span>
                <ArrowRight size={14} />
              </Link>

              {/* Mobile menu toggle */}
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Ouvrir le menu de navigation"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            style={
              isActive(link.href)
                ? { color: "var(--brand-primary)", fontWeight: 800 }
                : {}
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          <a
            href="tel:+33670882843"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <Phone size={16} />
            <span>Appeler</span>
          </a>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Devis Express</span>
          </Link>
        </div>
      </div>
    </>
  );
}
