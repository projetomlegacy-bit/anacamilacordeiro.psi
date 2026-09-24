import React from "react";
import { Heart, Sparkles, Compass } from "lucide-react";

export const About: React.FC = () => {
  const handleScrollToSymptoms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#symptoms");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 gradient-warm" aria-labelledby="about-title">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text copy from Image 2 + 3 Cards from Image 1 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A3B28]/10 border border-[#7A3B28]/20 text-[#7A3B28] font-semibold text-xs uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-[#7A3B28]" />
                <span>Um convite à pausa</span>
              </div>

              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight text-center md:text-left"
              >
                Talvez você esteja acostumada a cuidar de tudo, menos de você.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                <p>
                  Pode ser que você esteja se cobrando demais, sentindo dificuldade para desacelerar, tentando lidar com uma perda ou simplesmente percebendo que alguma coisa dentro de você já não está como antes.
                </p>
                <p className="text-primary font-semibold">
                  Você não precisa ter todas as respostas para procurar ajuda.
                </p>
                <p>
                  A psicoterapia pode ser um espaço para olhar para aquilo que você está vivendo com mais cuidado, escuta e compreensão.
                </p>
                <p className="text-foreground/90 font-medium text-sm sm:text-base border-l-2 border-accent pl-3 mt-2">
                  Psicóloga clínica com orientação psicanalítica e 6 anos de experiência no acompanhamento de adultos, oferecendo um espaço ético, sensível e singular para você elaborar o que sente.
                </p>
              </div>
            </div>

            {/* 3 Metric Cards aligned with Orientação Psicanalítica & Humanized Care */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-lg sm:text-xl font-playfair font-bold text-primary">Acolhimento</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Profundo</div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Compass className="h-8 w-8 text-oliva mx-auto mb-3" />
                <div className="text-lg sm:text-xl font-playfair font-bold text-primary">Escuta</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Singular</div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-orange mx-auto mb-3" />
                <div className="text-lg sm:text-xl font-playfair font-bold text-primary">Elaboração</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Psíquica</div>
              </div>
            </div>

            {/* Smooth transition link to symptoms */}
            <div className="text-center md:text-left pt-1">
              <a
                href="#symptoms"
                onClick={handleScrollToSymptoms}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A3B28] hover:text-primary transition-colors cursor-pointer group"
              >
                <span>Veja se você se reconhece em alguma dessas experiências</span>
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dark quote card from live site */}
          <div className="relative">
            <div className="relative z-10 bg-primary p-8 lg:p-12 rounded-3xl shadow-warm text-primary-foreground border border-accent/20">
              <div className="text-6xl font-playfair text-orange/60 mb-2 select-none leading-none">
                “
              </div>

              <blockquote className="text-xl lg:text-2xl font-playfair italic leading-relaxed mb-4">
                Cuidar da sua história é o primeiro passo para construir o futuro que você deseja viver.
              </blockquote>

              <p className="text-sm text-primary-foreground/85 leading-relaxed mb-8">
                Processos reais para mulheres reais — escuta profissional, presença e acolhimento para uma vida com mais sentido e leveza.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/20">
                <img
                  src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                  alt="Foto de perfil da psicóloga clínica Ana Camila Cordeiro (CRP 06/162019) especializada em orientação psicanalítica e luto"
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange shadow-md shrink-0"
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
                  <div className="text-accent-foreground/90 text-xs mt-0.5 font-medium">
                    Orientação Psicanalítica • Perdas e Luto
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle atmospheric halos */}
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
