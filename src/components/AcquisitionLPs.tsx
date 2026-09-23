import React, { useState } from "react";
import { ArrowLeft, MessageCircle, Sparkles, CheckCircle2, MapPin, Heart, Shield } from "lucide-react";
import { ACQUISITION_LPS, AcquisitionLP, getWhatsAppUrl } from "../data/content";

interface AcquisitionLPsProps {
  currentLpSlug: string | null;
  onClose: () => void;
  onSelectLp: (slug: string) => void;
}

export const AcquisitionLPs: React.FC<AcquisitionLPsProps> = ({
  currentLpSlug,
  onClose,
  onSelectLp
}) => {
  const currentLp = ACQUISITION_LPS.find((lp) => lp.slug === currentLpSlug) || ACQUISITION_LPS[0];

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto animate-in fade-in duration-200">
      {/* Top Banner Navigation */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container-max section-padding py-3.5 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao site principal</span>
          </button>

          {/* Quick switcher between LPs */}
          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto py-1">
            {ACQUISITION_LPS.map((lp) => {
              const isActive = lp.slug === currentLp.slug;
              return (
                <button
                  key={lp.id}
                  onClick={() => onSelectLp(lp.slug)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all font-medium whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {lp.navTitle}
                </button>
              );
            })}
          </div>

          <a
            href={getWhatsAppUrl(currentLp.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg gradient-orange text-orange-foreground shadow-sm hover:brightness-110"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Falar com Ana Camila</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>

        {/* Mobile pills */}
        <div className="md:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 border-t border-border/40 scrollbar-none">
          {ACQUISITION_LPS.map((lp) => {
            const isActive = lp.slug === currentLp.slug;
            return (
              <button
                key={lp.id}
                onClick={() => onSelectLp(lp.slug)}
                className={`text-xs px-2.5 py-1 rounded-full shrink-0 font-medium ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground bg-muted/40"
                }`}
              >
                {lp.navTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Landing Page Content */}
      <main className="py-12 sm:py-20">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Tag & Heading */}
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-medium text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Página Dedicada · {currentLp.navTitle}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
                {currentLp.headline}
              </h1>

              <p className="text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
                {currentLp.subheadline}
              </p>
            </div>

            {/* Intro text */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/60 shadow-soft text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>{currentLp.introText}</p>
              <p className="text-primary font-medium">{currentLp.approachText}</p>
            </div>

            {/* Manifestations / Signs */}
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-primary">
                {currentLp.signsTitle}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {currentLp.signs.map((sign, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-card border border-border/40 shadow-soft flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {sign}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Therapist Info & Ethics */}
            <div className="p-6 sm:p-8 rounded-3xl gradient-warm border border-border/60 flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                alt="Foto de perfil de Ana Camila Cordeiro, psicóloga clínica com orientação psicanalítica em Jundiaí e on-line"
                className="w-20 h-20 rounded-full object-cover border-2 border-accent shadow-md shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-playfair font-bold text-xl text-primary">
                  Ana Camila Cordeiro
                </h3>
                <p className="text-xs text-accent font-semibold tracking-wide uppercase">
                  Psicóloga Clínica · CRP 06/162019 SP · Orientação Psicanalítica
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Atendimento humanizado, ético e sigiloso para mulheres. Consultório presencial em Jundiaí e sessões on-line para todo o Brasil.
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="text-center space-y-4 pt-4">
              <a
                href={getWhatsAppUrl(currentLp.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold px-8 py-4 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{currentLp.ctaButtonText}</span>
              </a>
              <p className="text-xs text-muted-foreground">
                Primeiro contato direto e sem compromisso para tirar suas dúvidas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
