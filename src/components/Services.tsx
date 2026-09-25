import React from "react";
import { Sparkles, MapPin, Video, MessageCircle, CalendarCheck, Compass } from "lucide-react";
import { getWhatsAppUrl } from "../data/content";
import { trackWhatsAppConversion } from "../utils/analytics";

interface ServicesProps {
  onOpenBooking?: (modalidade: "presencial" | "online") => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: "01",
      title: "Primeiro contato",
      desc: "Entre em contato comigo para verificar disponibilidade, modalidade de atendimento e esclarecer dúvidas práticas antes de agendarmos o primeiro encontro.",
      icon: MessageCircle,
    },
    {
      step: "02",
      title: "Primeiros encontros",
      desc: "Esse é o momento de compreender o que motivou sua busca pela psicoterapia e como as situações que te atravessam têm ocupado espaço na sua vida.",
      icon: CalendarCheck,
    },
    {
      step: "03",
      title: "Ao longo do percurso",
      desc: "O trabalho vai sendo construído ao longo do tempo, a partir do que é trazido nas sessões, vamos desatando os nós e dando lugar às questões que precisam ser compreendidas e elaboradas.",
      icon: Compass,
    },
  ];

  return (
    <section id="services" className="py-20 gradient-warm" aria-labelledby="services-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-[#7A3B28]" />
            <span className="text-[#7A3B28] font-semibold uppercase tracking-wider text-sm">
              PRIMEIROS PASSOS
            </span>
          </div>

          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight"
          >
            Como começa a psicoterapia
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cada processo é único, mas entender como os primeiros passos acontecem pode tornar esse início mais tranquilo.
          </p>
        </div>

        {/* 3 Step Timeline Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-card p-7 sm:p-8 rounded-3xl shadow-soft border border-border/40 hover:shadow-warm transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="font-playfair text-3xl font-bold text-[#7A3B28] select-none"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-primary mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Subhead: Modalidades */}
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-2">
            Modalidades de Atendimento
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Escolha o formato que melhor se adapta à sua rotina e às suas preferências.
          </p>
        </div>

        {/* 2 Modality Cards Grid (Lado a lado, mesma altura, visual limpo e fluido) */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Consulta Presencial */}
          <div className="group h-full flex flex-col">
            <div className="bg-card p-8 sm:p-9 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300 shrink-0">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      Consulta Presencial
                    </h3>
                    <p className="text-xs text-[#7A3B28] font-semibold mt-0.5">Jundiaí - SP</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Atendimento personalizado em consultório acolhedor e privativo
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Sessões semanais com duração de 50 minutos
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Ambiente estritamente confidencial, ético e seguro
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Localização central em Jundiaí com fácil acesso
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={getWhatsAppUrl("Olá Ana, vim do seu site e gostaria de agendar uma Consulta Presencial em Jundiaí.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppConversion("Serviços - Consulta Presencial (Jundiaí)")}
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-11 px-6"
                >
                  Agendar Consulta Presencial
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Terapia On-line */}
          <div className="group h-full flex flex-col">
            <div className="bg-card p-8 sm:p-9 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center group-hover:bg-orange/30 transition-colors duration-300 shrink-0">
                    <Video className="h-8 w-8 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-primary group-hover:text-orange transition-colors duration-300">
                      Terapia On-line
                    </h3>
                    <p className="text-xs text-[#7A3B28] font-semibold mt-0.5">Todo o Brasil e Exterior</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Atendimento no conforto da sua casa ou onde você se sinta à vontade
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Sessões semanais com duração de 50 minutos
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Plataforma de vídeo segura com criptografia e total sigilo
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Flexibilidade e pontualidade para a sua rotina
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={getWhatsAppUrl("Olá Ana, vim do seu site e gostaria de agendar uma Consulta On-line.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppConversion("Serviços - Consulta On-line")}
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-11 px-6"
                >
                  Agendar Consulta On-line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
