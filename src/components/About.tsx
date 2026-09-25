import React from "react";
import { Heart, Sparkles, Shield, Compass, CheckCircle2 } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text copy & Empathic list */}
          <div className="space-y-8">
            <div className="space-y-5">
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
                  Um espaço para você ser escutada com cuidado e sem julgamentos. Aqui, sua história, seus sentimentos e suas experiências encontram lugar para serem acolhidos e compreendidos.
                </p>
                <p>
                  Ao longo da psicoterapia, podemos olhar para aquilo que hoje dói, para o que insiste ou se repete e para aspectos da sua experiência que ainda parecem difíceis de entender ou nomear.
                </p>
              </div>
            </div>

            {/* 3 Ethical Professional Credentials */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card p-5 sm:p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Compass className="h-7 w-7 text-accent mx-auto mb-2.5" />
                <div className="text-base sm:text-lg font-playfair font-bold text-primary leading-snug">
                  Mais de 6 anos
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  de experiência clínica
                </div>
              </div>

              <div className="bg-card p-5 sm:p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Sparkles className="h-7 w-7 text-oliva mx-auto mb-2.5" />
                <div className="text-base sm:text-lg font-playfair font-bold text-primary leading-snug">
                  Orientação
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  psicanalítica e escuta singular
                </div>
              </div>

              <div className="bg-card p-5 sm:p-6 rounded-2xl shadow-soft text-center border border-border/40 hover:-translate-y-1 transition-transform duration-300">
                <Shield className="h-7 w-7 text-orange mx-auto mb-2.5" />
                <div className="text-base sm:text-lg font-playfair font-bold text-primary leading-snug">
                  Atendimento
                </div>
                <div className="text-xs text-muted-foreground font-medium mt-0.5">
                  ético e seguro
                </div>
              </div>
            </div>

            {/* Reflective Empathy Box */}
            <div className="bg-card/70 p-6 sm:p-8 rounded-3xl border border-border/60 shadow-soft space-y-4">
              <h3 className="text-lg sm:text-xl font-playfair font-bold text-primary">
                Talvez você se reconheça em algumas dessas experiências...
              </h3>

              <ul className="space-y-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7A3B28] shrink-0 mt-0.5" />
                  <span>
                    Talvez esteja cansada de tentar dar conta de tudo e percebe que quase sempre deixa a si mesma por último.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7A3B28] shrink-0 mt-0.5" />
                  <span>
                    Pode ser que a ansiedade apareça nos pensamentos, no corpo ou naquela sensação de que é difícil desacelerar, mesmo quando você não entende exatamente o motivo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7A3B28] shrink-0 mt-0.5" />
                  <span>
                    Talvez algumas situações pareçam se repetir nos seus relacionamentos, ou esteja difícil reconhecer o que você deseja, colocar limites e dar espaço às próprias necessidades.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7A3B28] shrink-0 mt-0.5" />
                  <span>
                    Pode ser também que uma perda tenha mudado a forma como você olha para a vida.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7A3B28] shrink-0 mt-0.5" />
                  <span>
                    Ou talvez exista apenas aquela sensação de que algo não está bem, mesmo sem conseguir explicar o quê.
                  </span>
                </li>
              </ul>

              <div className="pt-2 border-t border-border/50 text-[#7A3B28] font-semibold text-sm sm:text-base">
                Você não precisa chegar à psicoterapia sabendo nomear tudo o que sente. Podemos começar pelo que está acontecendo agora!
              </div>
            </div>

            {/* Smooth transition link to symptoms */}
            <div className="text-center md:text-left pt-1">
              <a
                href="#symptoms"
                onClick={handleScrollToSymptoms}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7A3B28] hover:text-primary transition-colors cursor-pointer group"
              >
                <span>O que podemos olhar juntas na psicoterapia?</span>
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dark quote card from live site */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative z-10 bg-primary p-8 lg:p-12 rounded-3xl shadow-warm text-primary-foreground border border-accent/20">
              <div className="text-6xl font-playfair text-orange/60 mb-2 select-none leading-none">
                “
              </div>

              <blockquote className="text-xl lg:text-2xl font-playfair italic leading-relaxed mb-6">
                “Entre aquilo que você sente e aquilo que consegue dizer, existe um espaço que também merece ser cuidado”
              </blockquote>

              <p className="text-sm text-primary-foreground/85 leading-relaxed mb-8">
                Escuta profissional, sigilosa e sensível. Um processo que respeita o seu tempo e acolhe aquilo que é único na sua história.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/20">
                <img
                  src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil-160.webp"
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
                    Psicóloga Clínica • CRP 06/162019 SP
                  </div>
                  <div className="text-accent-foreground/90 text-xs mt-0.5 font-medium">
                    Orientação Psicanalítica • Jundiaí &amp; On-line
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
