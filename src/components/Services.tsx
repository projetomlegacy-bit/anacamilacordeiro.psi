import React from "react";
import { MapPin, Map, Monitor, Clock, Shield, Home } from "lucide-react";

interface ServicesProps {
  onOpenBooking: (preferredModalidade?: "presencial" | "online") => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-20 gradient-warm" aria-labelledby="services-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Como posso te ajudar na sua jornada
            </span>
          </div>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
          >
            Modalidades de Atendimento
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Escolha o formato que melhor se adapta à sua rotina e ao seu estilo de vida.
          </p>
        </div>

        {/* Two Main Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Presencial */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    <Map className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      Consulta Presencial
                    </h3>
                    <p className="text-xs text-accent font-medium mt-0.5">Jundiaí - SP</p>
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
                      50 minutos de sessão
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Ambiente confidencial
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Localização central e de fácil acesso
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1+Ana%2C+vim+do+seu+site+e+gostaria+de+agendar+uma+Consulta+Presencial.+%EF%BF%BD&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-11 px-4 py-2"
                >
                  Agendar Consulta Presencial
                </a>
              </div>
            </div>
          </div>

          {/* Online */}
          <div className="group">
            <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 h-full border border-border/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    <Monitor className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      Terapia Online
                    </h3>
                    <p className="text-xs text-accent font-medium mt-0.5">Para todo o Brasil e exterior</p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Atendimento por meio de videochamada
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Flexibilidade de horários
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Conforto da sua casa
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Plataforma segura e sigilosa
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1+Ana%2C+vim+do+seu+site+e+gostaria+de+agendar+uma+Consulta+On-line.+%EF%BF%BD&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-11 px-4 py-2"
                >
                  Agendar Terapia Online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars summary */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/30">
            <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-playfair font-semibold text-primary mb-2 text-lg">
              Duração das Sessões
            </h3>
            <p className="text-muted-foreground text-sm">
              50 minutos para cada sessão terapêutica
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/30">
            <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-playfair font-semibold text-primary mb-2 text-lg">
              Confidencialidade
            </h3>
            <p className="text-muted-foreground text-sm">
              Total sigilo profissional garantido pelo Código de Ética
            </p>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-soft text-center border border-border/30">
            <Home className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-playfair font-semibold text-primary mb-2 text-lg">
              Ambiente Acolhedor
            </h3>
            <p className="text-muted-foreground text-sm">
              Espaço seguro, empático e livre de julgamentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
