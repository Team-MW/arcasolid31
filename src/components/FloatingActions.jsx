"use client";

import { MessageSquare, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <aside className="floating-actions" aria-label="Actions rapides de contact">
      <a
        href="https://wa.me/33670882843?text=Bonjour%20ArcaSolid31%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet%20de%20rev%C3%AAtement%20de%20sol."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-wa"
        title="Discuter directement sur WhatsApp"
        aria-label="Discuter sur WhatsApp au 06 70 88 28 43"
      >
        <MessageSquare size={26} />
      </a>

      <a
        href="tel:+33670882843"
        className="floating-btn floating-phone"
        title="Appeler directement ArcaSolid31"
        aria-label="Appeler le 06 70 88 28 43"
      >
        <Phone size={24} />
      </a>
    </aside>
  );
}
