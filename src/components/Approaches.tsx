import React from "react";
import { Compass, HeartHandshake, Sparkles } from "lucide-react";

export const Approaches: React.FC = () => {
  return (
    <section id="approaches" className="py-20 gradient-warm" aria-labelledby="approaches-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Compass className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              COMO FUNCIONA MEU TRABALHO
            </span>
          </div>

          <h2
            id="approaches-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight"
          >
            Orientação Psicanalítica e Escuta Humanizada
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Escuta atenta ao inconsciente, elaboração psíquica da dor e respeito à singularidade de cada mulher sem fórmulas prontas ou diagnósticos reducionistas.
          </p>
        </div>

        {/* 3 Approach Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Escuta do Inconsciente */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <Compass className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    Escuta do Inconsciente
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Acolhemos aquilo que está por trás dos sintomas. Na orientação psicanalítica, olhamos para a sua história, para os conflitos inconscientes e para os padrões que se repetem, compreendendo a raiz da angústia em vez de apenas mascarar os incômodos.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* Card 2: Elaboração Psíquica da Dor */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-oliva/20 rounded-2xl flex items-center justify-center group-hover:bg-oliva/30 transition-colors duration-300">
                  <HeartHandshake className="h-8 w-8 text-oliva" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-oliva transition-colors duration-300">
                    Elaboração Psíquica da Dor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Um espaço seguro para nomear e dar sentido ao que machuca. Sem pressões por positividade forçada ou receitas de manual, oferecemos tempo e escuta para que perdas, traumas e dores emocionais possam ser elaborados no seu próprio ritmo.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-oliva to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* Card 3: Singularidade e Respeito à sua História */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/40 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center group-hover:bg-orange/30 transition-colors duration-300">
                  <Sparkles className="h-8 w-8 text-orange" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-orange transition-colors duration-300">
                    Singularidade sem Fórmulas Prontas
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Você não é um protocolo pré-definido nem uma categoria estatística. Cada sessão é conduzida com ética, confidencialidade e respeito absoluto à sua individualidade, construindo recursos internos e autonomia para a sua vida.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-orange to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>

        {/* Featured Horizontal Image Frame (Bordas suavizadas e leves) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative bg-[#FAF4F0] p-3 sm:p-5 md:p-6 rounded-3xl sm:rounded-[2.25rem] shadow-soft border-0 transition-all duration-500 hover:shadow-warm">
            {/* Subtle Tone-on-Tone Decorative Dots */}
            <div
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-2 h-2 rounded-full bg-[#C78169]/25"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 w-2 h-2 rounded-full bg-[#C78169]/25"
              aria-hidden="true"
            />

            {/* Inner Soft Rounded Image */}
            <div className="overflow-hidden rounded-2xl sm:rounded-[1.75rem]">
              <img
                src="/images/psicologa-ana-camila-cordeiro-consultorio-jundiai.webp"
                alt="Psicóloga clínica Ana Camila Cordeiro em atendimento em seu consultório em Jundiaí - Psicoterapia acolhedora para mulheres presencial e on-line"
                title="Consultório de Psicologia Ana Camila Cordeiro - Atendimento em Jundiaí e On-line"
                className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
                width="1200"
                height="675"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
