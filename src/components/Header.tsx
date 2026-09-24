import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/content";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Experiências", href: "#symptoms" },
    { label: "Abordagem", href: "#approaches" },
    { label: "Atendimento", href: "#services" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappAppointmentUrl = getWhatsAppUrl("Olá, Ana Camila! Vim pelo site e gostaria de agendar uma consulta psicológica.");

  return (
    <header className="sticky top-0 z-50 gradient-warm border-b border-border shadow-soft transition-all duration-300">
      <div className="container-max section-padding">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center transition-transform hover:opacity-90"
            aria-label="Ana Camila Cordeiro, Psicóloga Clínica"
            title="Ana Camila Cordeiro, Psicóloga Clínica"
          >
            <img
              src="/images/logo-psicologa-ana-camila-cordeiro-dourada.webp"
              alt="Logotipo oficial da psicóloga Ana Camila Cordeiro - Atendimento presencial em Jundiaí e on-line"
              title="Ana Camila Cordeiro, Psicóloga Clínica"
              className="h-8 md:h-9 w-auto object-contain"
              width="350"
              height="60"
              fetchPriority="high"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Button (Direct WhatsApp) */}
          <div className="hidden lg:block">
            <a
              href={whatsappAppointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-10 px-5 py-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-accent hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/60 py-4 px-2 space-y-2 animate-in fade-in-0 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-4 py-2.5 rounded-lg text-foreground hover:text-accent hover:bg-accent/10 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-2">
              <a
                href={whatsappAppointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold h-11 px-4 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
