import React from "react";
import { Sparkles, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/content";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-background" aria-labelledby="testimonials-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              RELATOS E EXPERIÊNCIAS
            </span>
          </div>

          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight"
          >
            O que as Mulheres Atendidas Dizem
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Depoimentos reais sobre o impacto de ter um espaço seguro para falar, sentir e se transformar.
          </p>
        </div>

        {/* Two Columns Grid with items-stretch for identical height */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Testimonial Cards stretched evenly */}
          <div className="flex flex-col justify-between gap-6 h-full">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-[#FAF4F0] p-7 sm:p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-[#C78169]/15 flex-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex gap-1" aria-label="5 estrelas">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                    “{t.text}”
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 mt-4 border-t border-[#C78169]/15">
                  <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-playfair font-semibold text-accent text-base">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.age} anos</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Professional Credential Card (stretched to exact same height) */}
          <div className="h-full flex flex-col">
            <div className="h-full bg-gradient-to-br from-primary to-accent p-8 sm:p-10 rounded-3xl text-primary-foreground shadow-warm border border-accent/20 flex flex-col justify-between">
              <div>
                <div className="text-center mb-7">
                  <img
                    src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                    alt="Retrato profissional de Ana Camila Cordeiro, psicóloga clínica com orientação psicanalítica e 6 anos de experiência"
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover mx-auto mb-4 border-4 border-primary-foreground/20 shadow-lg"
                    loading="lazy"
                    decoding="async"
                    width="144"
                    height="144"
                  />
                  <h3 className="text-2xl font-playfair font-bold mb-1 text-primary-foreground">
                    Ana Camila Cordeiro
                  </h3>
                  <p className="text-primary-foreground/90 font-medium text-sm sm:text-base">
                    Psicóloga Clínica • Orientação Psicanalítica
                  </p>
                  <div className="text-accent-foreground/80 text-xs mt-1">
                    CRP 06/162019 SP
                  </div>
                </div>

                <ul className="space-y-3.5 pt-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                    <span className="text-primary-foreground/95 text-sm leading-relaxed">
                      Bacharelado em Psicologia – Universidade Nove de Julho
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                    <span className="text-primary-foreground/95 text-sm leading-relaxed">
                      Formação e Aprofundamento em Perdas e Luto – Dra. Ana Clara Bastos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                    <span className="text-primary-foreground/95 text-sm leading-relaxed">
                      Orientação Psicanalítica (Escuta individualizada e ética)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                    <span className="text-primary-foreground/95 text-sm leading-relaxed">
                      MBA em Gestão de Pessoas – USP ESALQ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                    <span className="text-primary-foreground/95 text-sm leading-relaxed">
                      6 anos de experiência no acompanhamento clínico de adultos
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
                <p className="text-primary-foreground/90 text-xs sm:text-sm font-medium">
                  Atendimento Presencial em Jundiaí e On-line para todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
