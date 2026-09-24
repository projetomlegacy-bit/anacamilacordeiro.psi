import React, { useRef, useEffect } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  Video,
} from "lucide-react";
import { ACQUISITION_LPS, getWhatsAppUrl } from "../data/content";

interface AcquisitionLPsProps {
  currentLpSlug: string | null;
  onClose: () => void;
  onSelectLp: (slug: string) => void;
}

export const AcquisitionLPs: React.FC<AcquisitionLPsProps> = ({
  currentLpSlug,
  onClose,
  onSelectLp,
}) => {
  const currentLp =
    ACQUISITION_LPS.find((lp) => lp.slug === currentLpSlug) || ACQUISITION_LPS[0];

  const pillContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active pill into view on mobile
  useEffect(() => {
    if (pillContainerRef.current) {
      const activeBtn = pillContainerRef.current.querySelector(
        `[data-active="true"]`
      ) as HTMLElement | null;
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentLp.slug]);

  const whatsappUrl = getWhatsAppUrl(currentLp.whatsappMessage);

  // Dynamic SEO Synchronization for Landing Pages
  useEffect(() => {
    const originalTitle = document.title;
    const descMeta = document.querySelector('meta[name="description"]');
    const originalDesc = descMeta?.getAttribute("content") || "";

    // 1. Update Title tag
    document.title = currentLp.seoTitle;

    // 2. Update Meta Description
    if (descMeta) {
      descMeta.setAttribute("content", currentLp.seoDescription);
    }

    // 3. Update OpenGraph & Twitter tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", currentLp.seoTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", currentLp.seoDescription);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", currentLp.seoTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", currentLp.seoDescription);

    // 4. Inject or Update JSON-LD for MedicalWebPage / Psychologist
    const schemaId = "schema-lp-jsonld";
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = schemaId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${window.location.origin}/#lp=${currentLp.slug}`,
      "url": `${window.location.origin}/#lp=${currentLp.slug}`,
      "name": currentLp.seoTitle,
      "headline": currentLp.headline,
      "description": currentLp.seoDescription,
      "inLanguage": "pt-BR",
      "mainEntity": {
        "@type": "MedicalCondition",
        "name": currentLp.navTitle,
        "possibleTreatment": {
          "@type": "MedicalTherapy",
          "name": "Psicoterapia com Orientação Psicanalítica"
        },
        "signOrSymptom": currentLp.signs.map((sign) => ({
          "@type": "MedicalSignOrSymptom",
          "name": sign
        }))
      },
      "author": {
        "@type": "Person",
        "name": "Ana Camila Cordeiro",
        "jobTitle": "Psicóloga Clínica",
        "identifier": "CRP 06/162019 SP"
      },
      "provider": {
        "@type": "Psychologist",
        "name": "Ana Camila Cordeiro - Psicóloga Clínica",
        "telephone": "+55-11-94668-0856",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jundiaí",
          "addressRegion": "SP",
          "addressCountry": "BR"
        }
      }
    };

    scriptTag.textContent = JSON.stringify(jsonLdData);

    return () => {
      // Revert on unmount
      document.title = originalTitle;
      if (descMeta) descMeta.setAttribute("content", originalDesc);
      if (ogTitle) ogTitle.setAttribute("content", originalTitle);
      if (ogDesc) ogDesc.setAttribute("content", originalDesc);
      if (twitterTitle) twitterTitle.setAttribute("content", originalTitle);
      if (twitterDesc) twitterDesc.setAttribute("content", originalDesc);
      const existingScript = document.getElementById(schemaId);
      if (existingScript) existingScript.remove();
    };
  }, [currentLp]);

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto animate-in fade-in duration-200">
      {/* Top Header & Single-Line Tabs Navigation */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md shadow-soft border-b border-border/60">
        {/* Top Header Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          {/* Back button alinhado à esquerda */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 py-1.5 px-2 -ml-2 rounded-lg text-xs sm:text-sm font-semibold text-primary hover:text-accent hover:bg-muted/40 transition-colors cursor-pointer active:scale-95"
            aria-label="Voltar para a página principal"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao site</span>
          </button>

          {/* Botão Falar com Ana Camila alinhado à direita */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl gradient-orange text-orange-foreground shadow-sm hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Falar com Ana Camila</span>
            <span className="sm:hidden font-medium">WhatsApp</span>
          </a>
        </div>

        {/* Menu de Abas (Tabs) em Linha Única sem quebra - flex-nowrap */}
        <nav
          aria-label="Navegação entre Especialidades"
          className="border-t border-border/40 bg-muted/20"
        >
          <div
            ref={pillContainerRef}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start lg:justify-center gap-1 sm:gap-2 overflow-x-auto flex-nowrap scrollbar-none scroll-smooth"
          >
            {ACQUISITION_LPS.map((lp) => {
              const isActive = lp.slug === currentLp.slug;
              return (
                <button
                  key={lp.id}
                  data-active={isActive ? "true" : "false"}
                  onClick={() => onSelectLp(lp.slug)}
                  className={`py-3 px-3.5 sm:px-4 shrink-0 whitespace-nowrap text-xs sm:text-sm font-medium transition-all relative border-b-2 cursor-pointer select-none ${
                    isActive
                      ? "border-accent text-accent font-semibold bg-accent/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/60"
                  }`}
                >
                  {lp.navTitle}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Main Landing Page Content - Com espaçamento vertical (respiro) aprimorado */}
      <main className="pt-10 sm:pt-16 lg:pt-20 pb-32 sm:pb-24">
        <div className="px-4 sm:px-6 max-w-3xl mx-auto space-y-10 sm:space-y-14">
          {/* Breadcrumb Navigation for SEO */}
          <nav aria-label="Breadcrumb" className="pt-1">
            <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <button
                  onClick={onClose}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li>
                <span>Especialidades</span>
              </li>
              <li aria-hidden="true" className="opacity-50">/</li>
              <li className="text-[#7A3B28] font-semibold" aria-current="page">
                {currentLp.navTitle}
              </li>
            </ol>
          </nav>

          {/* Tag & Heading */}
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A3B28]/10 border border-[#7A3B28]/20 text-[#7A3B28] font-semibold text-[11px] sm:text-xs uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#7A3B28] shrink-0" />
              <span>Especialidade Clínica · {currentLp.navTitle}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-snug tracking-tight">
              {currentLp.headline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-foreground/90 font-medium leading-relaxed">
              {currentLp.subheadline}
            </p>
          </div>

          {/* Trust Highlights - Mobile First 3-Item Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1">
            <div className="bg-[#FAF4F0] p-3 sm:p-4 rounded-2xl text-center space-y-1 shadow-soft">
              <Clock className="w-4 h-4 mx-auto text-accent" />
              <div className="text-[11px] sm:text-xs font-semibold text-primary">50 Minutos</div>
              <div className="text-[10px] sm:text-[11px] text-muted-foreground hidden sm:block">Sessões semanais</div>
            </div>
            <div className="bg-[#FAF4F0] p-3 sm:p-4 rounded-2xl text-center space-y-1 shadow-soft">
              <div className="flex justify-center gap-1 text-accent">
                <MapPin className="w-4 h-4" />
                <Video className="w-4 h-4" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-primary">Presencial & On-line</div>
              <div className="text-[10px] sm:text-[11px] text-muted-foreground hidden sm:block">Jundiaí ou onde você estiver</div>
            </div>
            <div className="bg-[#FAF4F0] p-3 sm:p-4 rounded-2xl text-center space-y-1 shadow-soft">
              <ShieldCheck className="w-4 h-4 mx-auto text-accent" />
              <div className="text-[11px] sm:text-xs font-semibold text-primary">Sigilo & Ética</div>
              <div className="text-[10px] sm:text-[11px] text-muted-foreground hidden sm:block">CRP 06/162019 SP</div>
            </div>
          </div>

          {/* Intro Text Card (Acolhimento da Dor) */}
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF4F0] shadow-soft text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3.5">
            <p>{currentLp.introText}</p>
            <div className="pt-2 border-t border-border/40">
              <p className="text-primary font-medium italic">
                {currentLp.approachText}
              </p>
            </div>
          </div>

          {/* Manifestations / Signs */}
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-primary">
              {currentLp.signsTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              {currentLp.signs.map((sign, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAF4F0] shadow-soft flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
                    {sign}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Therapist Info & Credentials */}
          <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FAF4F0] shadow-soft flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <img
              src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
              alt="Foto de perfil de Ana Camila Cordeiro, psicóloga clínica com orientação psicanalítica em Jundiaí e on-line"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-accent shadow-md shrink-0"
              loading="lazy"
              decoding="async"
              width="80"
              height="80"
            />
            <div className="space-y-1.5">
              <h3 className="font-playfair font-bold text-lg sm:text-xl text-primary">
                Ana Camila Cordeiro
              </h3>
              <p className="text-[11px] sm:text-xs text-[#7A3B28] font-semibold tracking-wide uppercase">
                Psicóloga Clínica · CRP 06/162019 SP · 6 anos de experiência
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Especialista em Perdas e Luto, com Orientação Psicanalítica e escuta singular. Atendimento em consultório acolhedor em Jundiaí e sessões on-line para todo o Brasil.
              </p>
            </div>
          </div>

          {/* Desktop/Tablet In-Page CTA */}
          <div className="text-center space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-semibold px-6 sm:px-8 py-3.5 sm:py-4 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{currentLp.ctaButtonText}</span>
            </a>
            <p className="text-[11px] sm:text-xs text-muted-foreground">
              Conversa inicial direta no WhatsApp, sem compromisso, para tirar dúvidas e alinhar horários.
            </p>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Bar for Mobile Thumb Conversion */}
      <div className="fixed bottom-0 inset-x-0 p-3 bg-card/95 backdrop-blur-md border-t border-border z-40 sm:hidden shadow-xl animate-in slide-in-from-bottom-3 duration-300">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold h-12 px-4 gradient-orange text-orange-foreground shadow-warm active:scale-98 transition-all"
        >
          <MessageCircle className="w-5 h-5 shrink-0" />
          <span className="truncate">{currentLp.ctaButtonText}</span>
        </a>
      </div>
    </div>
  );
};
