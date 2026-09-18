import React, { useState } from "react";
import { MapPin, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { SYMPTOMS_DATA, Symptom } from "../data/content";

interface SymptomsProps {
  onOpenBooking: () => void;
}

export const Symptoms: React.FC<SymptomsProps> = ({ onOpenBooking }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);

  return (
    <section className="py-20 bg-background" aria-labelledby="symptoms-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              UM ESPAÇO SEGURO
            </span>
          </div>
          <h2
            id="symptoms-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
          >
            Como Posso te Ajudar
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Clique em cada área para entender como a psicoterapia aborda e transforma esses sentimentos.
          </p>
        </div>

        {/* 6 Symptoms Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SYMPTOMS_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedSymptom(item)}
              className="group bg-card p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left border border-border/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
              aria-label={`Ver detalhes sobre ${item.title}`}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 select-none">
                  {item.emoji}
                </div>
                <h3 className="font-playfair font-semibold text-base sm:text-xl text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
              </div>
              {/* Expanding accent underline */}
              <div className="h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="text-center mt-16">
          <div className="bg-accent/10 border border-accent/20 p-8 rounded-3xl max-w-4xl mx-auto shadow-soft">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Se você se identifica com algum desses sintomas, saiba que{" "}
              <span className="text-primary font-semibold">não está sozinha</span> e que{" "}
              <span className="text-primary font-semibold">existe solução</span>. A terapia pode ser
              o primeiro passo para o seu bem-estar emocional.
            </p>
            <div className="mt-6">
              <a
                href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1%2C+Ana%21+Vim+atrav%C3%A9s+do+seu+site+e+gostaria+de+agendar+uma+Consulta.+%EF%BF%BD&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md font-semibold text-sm px-6 py-2.5 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Falar com a Psicóloga
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Symptom Detail Modal */}
      {selectedSymptom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedSymptom(null)}
        >
          <div
            className="bg-card w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-warm border border-border space-y-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl select-none">{selectedSymptom.emoji}</span>
                <div>
                  <h3 className="font-playfair font-bold text-2xl text-primary">
                    {selectedSymptom.title}
                  </h3>
                  <p className="text-xs text-accent font-medium uppercase tracking-wider">
                    Psicoterapia Especializada
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSymptom(null)}
                className="p-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {selectedSymptom.fullDesc}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-border/50">
              <h4 className="text-sm font-semibold text-primary">
                Sinais frequentes no dia a dia:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {selectedSymptom.signs.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              {selectedSymptom.whatsappUrl ? (
                <a
                  href={selectedSymptom.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm h-11 px-5 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 transition-smooth"
                >
                  <span>Agendar para {selectedSymptom.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedSymptom(null);
                    onOpenBooking();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm h-11 px-5 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 transition-smooth"
                >
                  <span>Agendar para {selectedSymptom.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setSelectedSymptom(null)}
                className="px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-muted/40 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
