import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { CONTACT_PHONE, getWhatsAppUrl, DEMANDS_DATA } from "../data/content";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectSpecialty?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onSelectSpecialty,
}) => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-1 space-y-6">
            <a href="#home" className="inline-block hover:opacity-90 transition-opacity">
              <img
                src="/images/logo-psicologa-ana-camila-cordeiro-branca.webp"
                alt="Logotipo oficial da psicóloga Ana Camila Cordeiro - Atendimento presencial em Jundiaí e on-line (CRP 06/162019)"
                title="Ana Camila Cordeiro, Psicóloga Clínica"
                className="h-8 md:h-9 w-auto object-contain"
                width="1862"
                height="320"
                loading="lazy"
              />
            </a>
            <div className="text-sm text-primary-foreground/70 font-medium">
              CRP 06/162019 • São Paulo
            </div>

            {/* Desktop Social Links */}
            <div className="hidden lg:block space-y-3">
              <h3 className="font-playfair font-semibold text-lg text-primary-foreground">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da psicóloga Ana Camila Cordeiro"
                  className="w-10 h-10 bg-accent/25 rounded-full flex items-center justify-center hover:bg-accent/40 text-primary-foreground transition-all duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da psicóloga Ana Camila Cordeiro"
                  className="w-10 h-10 bg-accent/25 rounded-full flex items-center justify-center hover:bg-accent/40 text-primary-foreground transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da psicóloga Ana Camila Cordeiro"
                  className="w-10 h-10 bg-accent/25 rounded-full flex items-center justify-center hover:bg-accent/40 text-primary-foreground transition-all duration-200"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Atendimentos */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg text-primary-foreground">
              Atendimentos
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div className="text-primary-foreground/80 text-sm leading-relaxed">
                  <div>Jundiaí - SP (Presencial)</div>
                  <div>Atendimento On-line</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/[^0-9]/g, "")}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Horários */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg text-primary-foreground">
              Horários
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  Segunda a Sexta: 8h às 18h
                </div>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-primary-foreground/70">
              Atendimento presencial e on-line
            </div>

            {/* Mobile Social Links */}
            <div className="lg:hidden pt-3 space-y-2">
              <h4 className="font-playfair font-semibold text-sm text-primary-foreground">
                Redes Sociais
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 bg-accent/25 rounded-full flex items-center justify-center hover:bg-accent/40 text-primary-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 bg-accent/25 rounded-full flex items-center justify-center hover:bg-accent/40 text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 bg-accent/25 rounded-full flex items-center justify-center hover:bg-accent/40 text-primary-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Especialidades */}
          <div className="space-y-4">
            <h3 className="font-playfair font-semibold text-lg text-primary-foreground">
              Especialidades
            </h3>
            <ul className="text-sm text-primary-foreground/80 space-y-2">
              {DEMANDS_DATA.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (onSelectSpecialty) onSelectSpecialty(item.id);
                    }}
                    className="hover:text-accent transition-colors hover:translate-x-1 duration-150 inline-flex items-center gap-1.5 focus:outline-none cursor-pointer"
                  >
                    <span>• {item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ethical Notice & Emergencies */}
        <div className="border-t border-primary-foreground/15 pt-8 pb-4 text-xs text-primary-foreground/60 space-y-2 text-center md:text-left">
          <p>
            Atendimento psicológico realizado em conformidade com o Código de Ética Profissional do Psicólogo e as diretrizes do CFP.
          </p>
          <p>
            Este site não presta serviços de urgência psicológica. Em caso de crise, procure o serviço de emergência mais próximo ou ligue para o <strong>CVV no número 188</strong> (ligação gratuita).
          </p>
        </div>

        {/* Bottom Legal bar */}
        <div className="border-t border-primary-foreground/15 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-primary-foreground/70">
            <div>
              © {new Date().getFullYear()} Ana Camila Cordeiro · CRP 06/162019. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-primary-foreground transition-colors cursor-pointer focus:outline-none"
              >
                Política de Privacidade
              </button>
              <button
                onClick={onOpenTerms}
                className="hover:text-primary-foreground transition-colors cursor-pointer focus:outline-none"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
