import React, { useState } from "react";
import { MapPin, Plus, Minus, ArrowRight } from "lucide-react";
import { FAQ_DATA } from "../data/content";

interface FaqProps {
  onOpenBooking?: () => void;
}

export const Faq: React.FC<FaqProps> = () => {
  // First item open by default just like the original site
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 gradient-warm" aria-labelledby="faq-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Perguntas frequentes
            </span>
          </div>
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
          >
            Tire Suas Dúvidas
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Respostas claras para as dúvidas mais comuns sobre o atendimento psicológico.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-16">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl shadow-soft border border-border/40 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors duration-200 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-playfair font-semibold text-lg text-primary pr-4">
                      {item.question}
                    </h3>
                    <div className="shrink-0 text-accent">
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 animate-in fade-in-0 duration-200">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base border-t border-border/30 pt-3">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact / Final CTA Banner */}
          <div id="contact" className="text-center scroll-mt-24">
            <div className="bg-primary p-8 lg:p-12 rounded-3xl shadow-warm text-primary-foreground border border-accent/20 relative overflow-hidden">
              <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold">
                  Pronta para começar sua jornada?
                </h3>
                <p className="text-lg sm:text-xl text-primary-foreground/90 font-light">
                  Dê o primeiro passo em direção a uma vida mais equilibrada e plena.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511948627334&text=Ol%C3%A1%2C+Ana%21+Li+suas+informa%C3%A7%C3%B5es+no+site+e+gostaria+de+agendar+minha+primeira+Consulta.+%EF%BF%BD&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-12 rounded-lg px-8 text-base group"
                  >
                    <span>Agendar Primeira Consulta</span>
                    <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative glows */}
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
