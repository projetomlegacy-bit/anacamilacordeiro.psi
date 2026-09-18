import React from "react";
import { MapPin, Brain, Lightbulb, Heart } from "lucide-react";

export const Approaches: React.FC = () => {
  return (
    <section id="approaches" className="py-20 gradient-warm" aria-labelledby="approaches-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              COMO FUNCIONA MEU TRABALHO
            </span>
          </div>
          <h2
            id="approaches-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
          >
            Abordagem Científica e Humanizada
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utilizo métodos comprovados e uma abordagem humanizada para te oferecer o melhor cuidado possível.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: PBE */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-3 h-full border border-border/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    Terapia Baseada em Evidências (PBE)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Uma terapia sólida, respaldada por pesquisas, que oferece tratamentos eficazes.
                    Cada intervenção é escolhida com base em resultados científicos, garantindo que
                    você receba o melhor cuidado possível.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* Card 2: TCC */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-3 h-full border border-border/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-oliva/20 rounded-2xl flex items-center justify-center group-hover:bg-oliva/30 transition-colors duration-300">
                  <Lightbulb className="h-8 w-8 text-oliva" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-oliva transition-colors duration-300">
                    Terapia Cognitivo Comportamental (TCC)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Uma abordagem dinâmica que desafia e transforma padrões de pensamento e comportamento.
                    Ao compreender como seus pensamentos moldam emoções e atitudes, você desenvolve
                    habilidades práticas para mudanças duradouras.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-oliva to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* Card 3: Abordagem Humanizada */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-3 h-full border border-border/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center group-hover:bg-orange/30 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-orange" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-orange transition-colors duration-300">
                    Abordagem Humanizada
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Um espaço de acolhimento e respeito, feito para que se sinta à vontade para
                    compartilhar o que sente, sem medo de julgamentos. Ofereço um atendimento pensado
                    para você, respeitando sua história e seu tempo.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-orange to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>

        {/* Photography showcase */}
        <div className="mt-16 text-center">
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-4 sm:p-8 rounded-3xl shadow-warm">
                <div className="bg-card/90 p-4 sm:p-6 rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="/images/ana-horizontal.webp"
                    alt="Ana Camila Cordeiro, psicóloga em seu consultório"
                    className="w-full h-auto object-cover rounded-xl"
                    loading="lazy"
                    decoding="async"
                    width="1600"
                    height="1042"
                  />
                </div>
              </div>
              {/* Decorative accent spots */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent/30 rounded-full" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/30 rounded-full" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
