"use client";

import { useEffect, useRef, useState } from "react";

export default function JotformEmbed({ formId = "262884025857367" }) {
  const containerRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Inject JotForm responsive iframe resizer script if not present
    const existingScript = document.getElementById("jotform-resizer-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "jotform-resizer-script";
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      script.onload = () => {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler(
            `iframe[id='JotFormIFrame-${formId}']`,
            `https://form.jotform.com/`
          );
        }
      };
      document.body.appendChild(script);
    } else if (window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        `iframe[id='JotFormIFrame-${formId}']`,
        `https://form.jotform.com/`
      );
    }
  }, [formId]);

  return (
    <div className="jotform-embed-container" style={{ width: "100%", position: "relative", backgroundColor: "#FFFFFF" }}>
      <iframe
        id={`JotFormIFrame-${formId}`}
        title="Formulaire de Devis ARCASOLID31"
        onLoad={() => {
          setIframeLoaded(true);
          if (typeof window !== "undefined" && window.jotformEmbedHandler) {
            window.jotformEmbedHandler(
              `iframe[id='JotFormIFrame-${formId}']`,
              `https://form.jotform.com/`
            );
          }
        }}
        allowTransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src={`https://form.jotform.com/${formId}`}
        frameBorder="0"
        style={{
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          height: "760px",
          border: "none",
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          display: "block",
        }}
        scrolling="no"
      />
    </div>
  );
}
