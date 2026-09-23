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
      className="relative overflow-hidden bg-background py-10 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="container-max section-padding">
        {/* Desktop 50%/50% Grid: Text & Main Image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Column 1 (50% Desktop): Text Content & CTAs */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-medium text-xs sm:text-sm tracking-wide">
              <Sparkles className="w-4 h-4 text-accent shrink-0 animate-pulse" />
              <span>Acolhimento Profundo | Sigilo &amp; Ética | Escuta Singular</span>
            </div>

            {/* Main Headline with Explicit SEO H1 */}
            <div className="space-y-4">
              <h1 id="hero-title" className="space-y-2">
                <span className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent font-sans">
                  Psicoterapia para Mulheres em Jundiaí e On-line
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight tracking-tight">
                  Um espaço para você <br className="hidden sm:inline" />
                  <span className="text-orange">compreender</span> <br className="hidden sm:inline" />
                  o que está vivendo.
                </span>
              </h1>

              {/* Subheadline with User's Requested Quote */}
              <p className="text-base sm:text-lg text-primary font-medium italic">
                "Cuidar da sua história é o primeiro passo para construir o futuro que você deseja viver."
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Psicoterapia para mulheres que estão passando por momentos de ansiedade, luto, perdas, dificuldades com autoestima, depressão e transições de vida.
                <br className="hidden sm:inline" />{" "}
                Atendimento on-line e presencial <span className="text-primary font-semibold">em Jundiaí - SP</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <a
                href={getWhatsAppUrl("Olá, Ana Camila! Vim pelo site e gostaria de conversar sobre atendimento psicológico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-all font-semibold h-12 rounded-xl px-8 text-base group"
              >
                <span>Falar com a Psicóloga</span>
                <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#about"
                onClick={handleScrollToAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xl border border-border/80 bg-card/80 hover:bg-card text-foreground font-medium h-12 px-6 text-base transition-colors shadow-soft"
              >
                <span>Conhecer meu trabalho</span>
                <ArrowDown className="h-4 w-4 text-accent" />
              </a>
            </div>

            {/* Identification & Credibility Badges */}
            <div className="pt-4 space-y-2.5 border-t border-border/60">
              <div className="text-sm font-semibold text-primary">
                Ana Camila Cordeiro · Psicóloga Clínica · Orientação Psicanalítica
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>Sigilo &amp; Ética Profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-orange shrink-0" />
                  <span>Ambiente Acolhedor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-oliva shrink-0" />
                  <span>CRP 06/162019 SP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 (50% Desktop): Main Image with Smoothed Border-Radius & Shadow-sm */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-sm border border-[#C78169]/20 bg-[#FAF4F0] p-2 sm:p-3 transition-all duration-300 hover:shadow-soft">
              <img
                src="/images/psicoterapia-mulheres-jundiai-hero-mobile.webp"
                alt="Foto da psicóloga clínica Ana Camila Cordeiro em seu consultório, oferecendo psicoterapia com foco em acolhimento e escuta psicanalítica"
                className="w-full h-auto max-h-[520px] lg:max-h-[580px] object-cover object-top rounded-2xl shadow-sm"
                fetchPriority="high"
                decoding="async"
                width="1696"
                height="2496"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
