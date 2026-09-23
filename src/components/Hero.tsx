import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, ArrowDown } from "lucide-react";
import { getWhatsAppUrl } from "../data/content";

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background md:bg-transparent"
      aria-labelledby="hero-title"
    >
      {/* Visual Identity: Responsive Pictures and Gradients identical to anacamilacordeiro.vercel.app */}
      <div className="absolute inset-0">
        <picture>
          <source
            type="image/webp"
            srcSet="/images/psicoterapia-mulheres-jundiai-hero-desktop.webp"
            media="(min-width: 768px)"
          />
          <img
            src="/images/psicoterapia-mulheres-jundiai-hero-desktop-v2.webp"
            alt="Ana Camila Cordeiro, psicóloga clínica com orientação psicanalítica em Jundiaí e atendimento on-line"
            className="hidden md:block w-full h-full object-cover object-center lg:object-[center_right]"
            fetchPriority="high"
            decoding="async"
            width="1280"
            height="720"
          />
        </picture>

        <picture className="md:hidden absolute inset-x-0 top-0">
          <source
            type="image/webp"
            srcSet="/images/psicoterapia-mulheres-jundiai-hero-mobile.webp"
          />
          <img
            src="/images/psicoterapia-mulheres-jundiai-hero-mobile.webp"
            alt="Psicóloga Ana Camila Cordeiro - Psicoterapia feminina em Jundiaí e on-line com foco em ansiedade e luto"
            className="w-full h-auto object-cover max-h-[500px]"
            fetchPriority="high"
            decoding="async"
            width="720"
            height="1054"
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background md:hidden" />
        <div className="hidden md:block absolute inset-y-0 left-0 w-3/5 lg:w-[62%] bg-gradient-to-r from-background via-background/95 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 min-h-[90vh] md:min-h-screen flex items-center pt-[380px] sm:pt-[440px] md:pt-0">
        <div className="container-max section-padding py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 max-w-2xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-medium text-xs sm:text-sm tracking-wide">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span>Acolhimento Profundo | Sigilo &amp; Ética | Escuta Singular</span>
              </div>

              {/* Main Headline with Explicit SEO H1 */}
              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="space-y-2 text-center md:text-left"
                >
                  <span className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent font-sans">
                    Psicoterapia para Mulheres em Jundiaí e On-line
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight tracking-tight">
                    Um espaço para você <br className="hidden sm:inline" />
                    <span className="text-orange">compreender</span> <br className="hidden sm:inline" />
                    o que está vivendo.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                  Psicoterapia para mulheres que estão passando por momentos de ansiedade, dificuldades com autoestima, perdas, luto, depressão e outras questões emocionais.
                  <br className="hidden sm:inline" />{" "}
                  Atendimento on-line e presencial <span className="text-primary font-medium">em Jundiaí</span>.
                </p>
              </div>

              {/* Action Buttons: [Conhecer meu trabalho] & [Falar comigo] */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <a
                  href={getWhatsAppUrl("Olá, Ana Camila! Vim pelo site e gostaria de conversar sobre atendimento psicológico.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-smooth font-semibold h-12 rounded-lg px-8 text-base group"
                >
                  <span>Falar comigo</span>
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <a
                  href="#about"
                  onClick={handleScrollToAbout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-lg border border-border/80 bg-card/80 hover:bg-card text-foreground font-medium h-12 px-6 text-base transition-colors shadow-soft"
                >
                  <span>Conhecer meu trabalho</span>
                  <ArrowDown className="h-4 w-4 text-accent" />
                </a>
              </div>

              {/* Identification & Credibility Badges */}
              <div className="pt-2 space-y-2 border-t border-border/60">
                <div className="text-sm font-semibold text-primary text-center md:text-left">
                  Ana Camila Cordeiro · Psicóloga Clínica · Orientação Psicanalítica
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span>Sigilo &amp; Ética Profissional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-orange" />
                    <span>Ambiente Acolhedor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-oliva" />
                    <span>CRP 06/162019 SP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
