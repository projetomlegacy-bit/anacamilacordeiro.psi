import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Abordagens", href: "#approaches" },
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
              src="/images/logo-completo-dourada.webp"
              alt="Ana Camila Cordeiro, Psicóloga Clínica"
              title="Ana Camila Cordeiro, Psicóloga Clínica"
              className="h-8 md:h-9 w-auto object-contain"
              width="931"
              height="160"
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

          {/* Desktop Action Button */}
          <div className="hidden lg:block">
            <a
              href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+Consulta.+%EF%BF%BD&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-10 px-5 py-2"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-b border-border shadow-warm animate-in fade-in slide-in-from-top duration-200">
          <div className="section-padding py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-foreground hover:text-accent hover:bg-accent/5 font-medium px-3 py-2 rounded-lg transition-colors text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+Consulta.+%EF%BF%BD&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base cursor-pointer transition-all duration-300 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 font-semibold h-11 px-5 py-2.5"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
