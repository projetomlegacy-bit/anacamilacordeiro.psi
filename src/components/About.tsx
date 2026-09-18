import React from "react";
import { Heart, Shield, Target } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 gradient-warm" aria-labelledby="about-title">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight text-center md:text-left"
              >
                Hoje, você pode estar lidando com:
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-accent text-center md:text-left leading-snug">
                  Ansiedade Constante, Sensação de Esgotamento ou outras Dificuldades Emocionais.
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                  Muitas pessoas acreditam que sentir ansiedade é algo raro, mas os sintomas são mais
                  comuns do que se imagina. Ainda assim, milhares de pessoas passam anos sem apoio por não
                  conhecerem as possibilidades de tratamento. Por isso, reconhecer o que você sente já é um
                  passo importante e buscar ajuda profissional pode transformar sua relação com a ansiedade
                  e com você mesma.
                </p>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-playfair font-bold text-primary">Cuidado</div>
                <div className="text-sm text-muted-foreground font-medium">Humanizado</div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Shield className="h-8 w-8 text-oliva mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-playfair font-bold text-primary">Métodos</div>
                <div className="text-sm text-muted-foreground font-medium">Comprovados</div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Target className="h-8 w-8 text-orange mx-auto mb-3" />
                <div className="text-xl sm:text-2xl font-playfair font-bold text-primary">Resultados</div>
                <div className="text-sm text-muted-foreground font-medium">Eficazes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Quote Card */}
          <div className="relative">
            <div className="relative z-10 bg-primary p-8 lg:p-12 rounded-3xl shadow-warm text-primary-foreground border border-accent/20">
              <div className="text-6xl font-playfair text-orange/60 mb-2 select-none leading-none">
                “
              </div>
              <blockquote className="text-xl lg:text-2xl font-playfair italic leading-relaxed mb-4">
                Cuidar da sua saúde mental é também construir o futuro que você deseja viver.
              </blockquote>
              <p className="text-sm text-primary-foreground/85 leading-relaxed mb-8">
                Processos reais para mulheres reais — escuta profissional, presença e acolhimento para uma vida com mais sentido e leveza.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/20">
                <img
                  src="/images/ana-avatar.webp"
                  alt="Ana Camila Cordeiro - Psicóloga"
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange shadow-md"
                  loading="lazy"
                  decoding="async"
                  width="64"
                  height="64"
                />
                <div>
                  <div className="font-playfair font-semibold text-lg text-primary-foreground">
                    Ana Camila Cordeiro
                  </div>
                  <div className="text-primary-foreground/80 text-sm font-medium">
                    Psicóloga Clínica • CRP 06/162019
                  </div>
                  <div className="text-accent text-xs mt-0.5 font-medium">
                    Escuta com Sensibilidade & Ciência
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background blurs */}
            <div
              className="absolute -top-4 -right-4 w-28 h-28 bg-accent/25 rounded-full blur-xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange/20 rounded-full blur-lg pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
