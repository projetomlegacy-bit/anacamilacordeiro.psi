import React from "react";
import { Compass, MessageSquare, Repeat, Eye, Clock } from "lucide-react";

export const Approaches: React.FC = () => {
  const pillars = [
    {
      icon: MessageSquare,
      title: "A fala como ponto de partida",
      desc: "Na sessão, não existe um roteiro que você precise seguir. Você pode falar sobre aquilo que vier à mente, acontecimentos, pensamentos, lembranças, sonhos, relações, incômodos ou até aquilo que parece não ter importância. É a partir dessa fala que o trabalho começa a se construir.",
    },
    {
      icon: Repeat,
      title: "Aquilo que se repete também importa",
      desc: "Às vezes, percebemos determinadas situações, conflitos ou formas de se relacionar aparecerem novamente em diferentes momentos da vida. Na psicoterapia, essas repetições podem ser observadas e compreendidas com mais profundidade.",
    },
    {
      icon: Eye,
      title: "Nem tudo que nos atravessa é consciente",
      desc: "Há sentimentos, conflitos e desejos que nem sempre conseguimos reconhecer imediatamente. Por isso, o processo não se limita apenas ao que já sabemos, mas também ao que aparece nas entrelinhas da fala, nas associações livres, e nos conteúdos que surgem durante a sessão.",
    },
    {
      icon: Clock,
      title: "A compreensão é construída ao longo do processo",
      desc: "Algumas questões não mudam simplesmente porque conseguimos explicá-las racionalmente. A elaboração acontece ao longo do tempo, à medida que determinados sentidos podem ser reconhecidos, revisitados e trabalhados na experiência terapêutica.",
    },
  ];

  return (
    <section id="approaches" className="py-20 gradient-warm" aria-labelledby="approaches-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A3B28]/10 border border-[#7A3B28]/20 text-[#7A3B28] font-semibold text-xs uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5 text-[#7A3B28]" />
            <span>Fundamentação Clínica</span>
          </div>

          <h2
            id="approaches-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight"
          >
            O que orienta meu trabalho clínico
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            <p>
              Minha prática clínica é orientada pela <strong className="text-primary font-semibold">Psicanálise</strong>, que compreende o sofrimento psíquico para além daquilo que conseguimos explicar racionalmente sobre nós mesmos.
            </p>
            <p>
              Aquilo que sentimos, desejamos, evitamos ou repetimos pode estar atravessado por conflitos e sentidos que nem sempre se apresentam de forma evidente. Ao longo das sessões, eles podem aparecer na fala, nas relações, nos silêncios, nas contradições e naquilo que insiste em se repetir.
            </p>
            <p className="text-foreground/90 font-medium">
              O trabalho parte da singularidade de cada pessoa. Não se trata de oferecer respostas prontas sobre como você deve agir, mas de sustentar um processo em que seja possível se aproximar de seus conflitos, de seus desejos e das formas particulares pelas quais você se relaciona consigo mesma e com os outros.
            </p>
          </div>
        </div>

        {/* Section Subtitle */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-primary">
            Como funcionam as sessões
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Princípios fundamentais que guiam cada encontro terapêutico.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 on desktop) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-card p-7 sm:p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-border/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[1.4]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-playfair font-bold text-primary">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Horizontal Image Frame */}
        <div className="mt-14 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative bg-[#FAF4F0] p-3 sm:p-5 md:p-6 rounded-3xl sm:rounded-[2.25rem] shadow-soft border border-border/40 transition-all duration-500 hover:shadow-warm">
            <div className="overflow-hidden rounded-2xl sm:rounded-[1.75rem]">
              <img
                src="/images/psicologa-ana-camila-cordeiro-consultorio-jundiai.webp"
                alt="Consultório acolhedor de psicologia da Dra. Ana Camila Cordeiro em Jundiaí - SP"
                title="Consultório de Psicologia Ana Camila Cordeiro - Jundiaí e On-line"
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
