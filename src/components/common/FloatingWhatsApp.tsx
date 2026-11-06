import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const url = getWhatsAppUrl({ context: "general" });

  return (
    <aside
      aria-label="Quick WhatsApp contact"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center group select-none"
    >
      {/* Desktop Tooltip */}
      <span
        className="hidden sm:inline-block bg-deep-brown/95 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-lg mr-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap border border-white/10"
      >
        Order on WhatsApp
      </span>

      {/* Circular Floating WhatsApp Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_3px_12px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_16px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Ambient pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          style={{ animationDuration: "2.5s" }}
        />

        {/* Centered WhatsApp icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-6 sm:h-6 text-white relative z-10 transition-transform duration-200" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
