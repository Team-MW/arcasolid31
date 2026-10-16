"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechnicalMastery from "@/components/TechnicalMastery";
import Portfolio from "@/components/Portfolio";
import Estimator from "@/components/Estimator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "",
    message: ""
  });

  const handleSelectService = (serviceTitle) => {
    let matchedOption = "";
    if (serviceTitle.includes("Sols Époxy Décoratif")) {
      matchedOption = "Devis Sols époxy décoratif (130€ le m²)";
    } else if (serviceTitle.includes("Sol de Garage")) {
      matchedOption = "Devis Epoxy pour sol de garage (70 € le M²)";
    } else if (serviceTitle.includes("Béton Ciré")) {
      matchedOption = "Devis Béton Ciré (130€ le m²)";
    } else if (serviceTitle.includes("Moquette de Pierre")) {
      matchedOption = "Projet Extérieur - Moquette de Pierre";
    } else if (serviceTitle.includes("Dalles")) {
      matchedOption = "Rénovation & Nivellement de Dalles Béton";
    } else if (serviceTitle.includes("Table")) {
      matchedOption = "Table Époxy Artisanale sur-mesure";
    }

    setFormData((prev) => ({
      ...prev,
      typeProjet: matchedOption || prev.typeProjet,
      message: `Bonjour ArcaSolid31, je souhaite obtenir un devis pour ma demande : ${serviceTitle}. Merci de me recontacter pour fixer un rendez-vous diagnostic.`
    }));

    const devisEl = document.getElementById("contact");
    if (devisEl) {
      devisEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTransferEstimate = ({ projectType, area, includePrep, estimate }) => {
    let matchedOption = "";
    if (projectType.includes("Garage")) {
      matchedOption = "Devis Epoxy pour sol de garage (70 € le M²)";
    } else if (projectType.includes("Décoratif")) {
      matchedOption = "Devis Sols époxy décoratif (130€ le m²)";
    } else if (projectType.includes("Béton Ciré")) {
      matchedOption = "Devis Béton Ciré (130€ le m²)";
    } else if (projectType.includes("Moquette")) {
      matchedOption = "Projet Extérieur - Moquette de Pierre";
    }

    setFormData((prev) => ({
      ...prev,
      typeProjet: matchedOption || prev.typeProjet,
      message: `Bonjour ArcaSolid31, j'ai simulé mon projet sur votre calculateur en ligne :
- Type de revêtement : ${projectType}
- Surface approximative : ${area} m²
- Préparation de dalle incluse : ${includePrep ? "Oui (rabotage/ponçage diamant)" : "Non"}
- Estimation calculée : ~${estimate.toLocaleString("fr-FR")} € TTC.

Merci de me confirmer la faisabilité technique et de planifier un diagnostic sur place.`
    }));
  };

  const handleSelectProjectForQuote = (projectTitle) => {
    let matchedOption = "";
    if (projectTitle.includes("Rénovation")) {
      matchedOption = "Rénovation & Nivellement de Dalles Béton";
    } else if (projectTitle.includes("Garages")) {
      matchedOption = "Devis Epoxy pour sol de garage (70 € le M²)";
    } else if (projectTitle.includes("Tables")) {
      matchedOption = "Table Époxy Artisanale sur-mesure";
    } else if (projectTitle.includes("Moquette")) {
      matchedOption = "Projet Extérieur - Moquette de Pierre";
    } else if (projectTitle.includes("Béton Ciré")) {
      matchedOption = "Devis Béton Ciré (130€ le m²)";
    } else if (projectTitle.includes("Résidences")) {
      matchedOption = "Devis Sols époxy décoratif (130€ le m²)";
    }

    setFormData((prev) => ({
      ...prev,
      typeProjet: matchedOption || prev.typeProjet,
      message: `Bonjour, j'ai particulièrement apprécié votre réalisation "${projectTitle}" dans votre portfolio. J'aimerais un devis pour un projet comparable chez moi.`
    }));

    const devisEl = document.getElementById("contact");
    if (devisEl) {
      devisEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services onSelectService={handleSelectService} />
        <TechnicalMastery />
        <Portfolio onSelectProjectForQuote={handleSelectProjectForQuote} />
        <Estimator onTransferToForm={handleTransferEstimate} />
        <Testimonials />
        <Contact formData={formData} setFormData={setFormData} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
