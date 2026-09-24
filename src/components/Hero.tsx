import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { getWhatsAppUrl } from "../data/content";

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background md:bg-transparent"
      aria-labelledby="hero-title"
    >
      {/* Background Visual Identity: Responsive Pictures & Fading Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Desktop / Tablet Landscape Background Image (min-width: 768px) */}
        <picture>
          <source
            type="image/webp"
            srcSet="/images/psicoterapia-mulheres-jundiai-hero-desktop.webp"
            media="(min-width: 768px)"
          />
          <img
            src="/images/psicoterapia-mulheres-jundiai-hero-desktop.webp"
            alt="Ana Camila Cordeiro, psicóloga clínica com orientação psicanalítica em Jundiaí e atendimento on-line"
            className="hidden md:block w-full h-full object-cover object-[80%_center] lg:object-[85%_top]"
            fetchPriority="high"
            decoding="async"
            width="1600"
            height="900"
          />
        </picture>

        {/* Mobile / Tablet Vertical Hero Photo: Centered with max-w constraint to avoid giant zoom */}
        <div className="md:hidden absolute inset-x-0 top-0 h-[380px] sm:h-[420px] flex justify-center overflow-hidden">
          <div className="relative w-full max-w-sm sm:max-w-md h-full">
            <img
              src="/images/psicoterapia-mulheres-jundiai-hero-mobile.webp"
              alt="Psicóloga Ana Camila Cordeiro - Psicoterapia feminina em Jundiaí e on-line com foco em ansiedade e luto"
              className="w-full h-full object-cover object-top"
              fetchPriority="high"
              decoding="async"
              width="720"
              height="1054"
            />
            {/* Smooth bottom fade into the page background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
            {/* Subtle side fade for tablet screens */}
            <div className="hidden sm:block absolute inset-y-0 -left-6 w-12 bg-gradient-to-r from-background to-transparent" />
            <div className="hidden sm:block absolute inset-y-0 -right-6 w-12 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>

        {/* Desktop Gradient: Horizontal fade from left background over to the image on the right */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-3/5 lg:w-[58%] bg-gradient-to-r from-background via-background/95 to-transparent" />
      </div>

      {/* Hero Content Container: Responsive spacing so text never overlaps awkwardly */}
      <div className="relative z-10 min-h-[90vh] md:min-h-screen flex items-center pt-[310px] sm:pt-[360px] md:pt-0">
        <div className="container-max section-padding py-8 sm:py-12 md:py-20 w-full">
          <div className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6 md:space-y-7 text-center md:text-left mx-auto md:mx-0">
            {/* Main Headline with Explicit SEO H1 */}
            <div className="space-y-3 sm:space-y-4">
              <h1 id="hero-title" className="space-y-1.5 sm:space-y-2">
                <span className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A85D46] font-sans">
                  Psicoterapia para Mulheres em Jundiaí e On-line
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-primary leading-tight tracking-tight">
                  Um espaço para você <br className="hidden sm:inline" />
                  <span className="text-[#A85D46]">compreender</span> <br className="hidden sm:inline" />
                  o que está vivendo.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed font-normal">
                Psicoterapia para mulheres que estão passando por momentos de ansiedade, dificuldades com autoestima, perdas, luto, depressão e outras questões emocionais. Atendimento on-line e presencial <strong className="font-semibold text-primary">em Jundiaí</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center md:justify-start items-center pt-1 sm:pt-2">
              <a
                href={getWhatsAppUrl("Olá, Ana Camila! Vim pelo site e gostaria de conversar sobre atendimento psicológico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-all font-semibold h-11 sm:h-12 rounded-xl px-7 sm:px-8 text-sm sm:text-base group"
              >
                <span>Falar comigo</span>
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#about"
                onClick={handleScrollToAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xl border border-border/80 bg-card/90 hover:bg-card text-foreground font-medium h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base transition-colors shadow-soft"
              >
                <span>Conhecer meu trabalho</span>
                <ArrowDown className="h-4 w-4 text-accent" />
              </a>
            </div>

            {/* Identification & Credibility Badges */}
            <div className="pt-2 text-xs sm:text-sm text-foreground/80 font-medium space-y-1">
              <div className="text-primary font-semibold">
                Orientação Psicanalítica
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <span>Ambiente Acolhedor</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/70" />
                <span>CRP 06/162019 SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
