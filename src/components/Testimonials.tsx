import React from "react";
import { MapPin, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data/content";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-background" aria-labelledby="testimonials-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              O que os pacientes dizem sobre o processo terapêutico
            </span>
          </div>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
          >
            Depoimentos
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Testimonial Cards */}
          <div className="space-y-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="group">
                <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/40">
                  <div className="space-y-6">
                    {/* Star Rating */}
                    <div className="flex gap-1" aria-label="5 estrelas">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-accent text-accent"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                      “{t.text}”
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="font-playfair font-semibold text-accent text-lg">
                          {t.initial}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{t.author}</div>
                        <div className="text-sm text-muted-foreground">{t.age} anos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Professional Credential Card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-3xl text-primary-foreground shadow-warm border border-accent/20">
              <div className="text-center mb-8">
                <img
                  src="/images/ana-avatar.webp"
                  alt="Ana Camila Cordeiro, psicóloga clínica"
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-primary-foreground/20 shadow-lg"
                  loading="lazy"
                  decoding="async"
                  width="160"
                  height="160"
                />
                <h3 className="text-2xl font-playfair font-bold mb-1.5 text-primary-foreground">
                  Ana Camila Cordeiro
                </h3>
                <p className="text-primary-foreground/90 font-medium text-sm sm:text-base">
                  Psicóloga Clínica
                </p>
              </div>

              <ul className="space-y-3.5 pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                  <span className="text-primary-foreground/95 text-sm leading-relaxed">
                    Graduação em Psicologia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                  <span className="text-primary-foreground/95 text-sm leading-relaxed">
                    Especialização em Psicologia Baseada em Evidências
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                  <span className="text-primary-foreground/95 text-sm leading-relaxed">
                    Formação em Terapia Cognitivo-comportamental (TCC)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                  <span className="text-primary-foreground/95 text-sm leading-relaxed">
                    Formação em Terapia Comportamental Dialética (DBT)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-foreground/70 rounded-full mt-2 shrink-0" />
                  <span className="text-primary-foreground/95 text-sm leading-relaxed">
                    Formação em Psicopatologia Clínica
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
                <p className="text-primary-foreground/85 text-xs sm:text-sm font-medium">
                  CRP 06/162019 • São Paulo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
