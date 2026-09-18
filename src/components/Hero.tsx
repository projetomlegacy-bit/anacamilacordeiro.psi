import React from "react";
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background md:bg-transparent"
      aria-labelledby="hero-title"
    >
      {/* Background Visuals with Responsive Pictures and Warm Gradients */}
      <div className="absolute inset-0">
        {/* Desktop Image */}
        <picture>
          <source
            type="image/webp"
            srcSet="/images/hero-desktop-ana.webp"
            media="(min-width: 768px)"
          />
          <img
            src="/images/hero-desktop-ana-v2.webp"
            alt="Ana Camila Cordeiro, psicóloga clínica em ambiente acolhedor"
            className="hidden md:block w-full h-full object-cover object-center lg:object-[center_right]"
            fetchPriority="high"
            decoding="async"
            width="1280"
            height="720"
          />
        </picture>

        {/* Mobile Image */}
        <picture className="md:hidden absolute inset-x-0 top-0">
          <source
            type="image/webp"
            srcSet="/images/hero-mobile-ana.webp"
          />
          <img
            src="/images/hero-mobile-ana.webp"
            alt="Ana Camila Cordeiro, psicóloga"
            className="w-full h-auto object-cover max-h-[500px]"
            fetchPriority="high"
            decoding="async"
            width="720"
            height="1054"
          />
        </picture>

        {/* Soft atmospheric gradient overlays for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background md:hidden" />
        <div className="hidden md:block absolute inset-y-0 left-0 w-3/5 lg:w-[62%] bg-gradient-to-r from-background via-background/95 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 min-h-[90vh] md:min-h-screen flex items-center pt-[380px] sm:pt-[440px] md:pt-0">
        <div className="container-max section-padding py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 max-w-2xl">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-medium text-xs sm:text-sm tracking-wide">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span>Especialista em Autoestima Feminina • Ansiedade &  Luto e Depressão</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight text-center md:text-left tracking-tight"
                >
                  <span>Sua jornada de</span>
                  <br />
                  <span className="text-orange">Autocuidado</span>
                  <br />
                  <span>começa aqui.</span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                  Te ajudo a lidar com a{" "}
                  <span className="text-primary font-semibold">Ansiedade</span> de
                  forma saudável e alcançar seu bem-estar emocional.
                  <br className="hidden sm:inline" />
                  Atendimento on-line e presencial{" "}
                  <span className="text-primary font-medium">em Jundiaí</span>.
                </p>
              </div>

              {/* CTA & Highlights */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1%2C+Ana%21+Vim+atrav%C3%A9s+do+seu+site+e+gostaria+de+agendar+uma+Consulta.+%EF%BF%BD&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-smooth font-semibold h-12 rounded-lg px-8 text-base group"
                >
                  <span>Agendar atendimento!</span>
                  <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>

              {/* Sub-features list */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground border-t border-border/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Sigilo & Ética Profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-orange" />
                  <span>Ambiente Acolhedor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-oliva"></span>
                  <span>CRP 06/162019 SP</span>
                </div>
              </div>
            </div>

            {/* Right Column Spacer for Desktop */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};
