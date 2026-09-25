import React, { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("lgpd_cookie_consent");
      if (!consent) {
        // Small delay so the page loads smoothly before showing banner
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage unavailable (private browsing), keep hidden
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("lgpd_cookie_consent", "accepted");
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e Cookies LGPD"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-card/95 backdrop-blur-md border-t border-border shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground/85 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p>
            <strong className="text-primary font-semibold">Privacidade &amp; LGPD:</strong>{" "}
            Utilizamos cookies essenciais e tecnologias de medição para proporcionar uma navegação segura e eficiente, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018) e o sigilo ético do CFP. Ao continuar, você concorda com a nossa{" "}
            <button
              onClick={onOpenPrivacy}
              className="text-[#7A3B28] font-semibold underline underline-offset-2 hover:text-primary transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            .
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-end pt-1 md:pt-0">
          <button
            onClick={onOpenPrivacy}
            className="text-xs text-muted-foreground hover:text-primary px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Ver Detalhes
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold gradient-orange text-orange-foreground shadow-sm hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </aside>
  );
};
