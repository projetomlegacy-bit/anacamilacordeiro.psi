import React, { useState } from "react";
import { HelpCircle, Plus, Minus, MessageCircle } from "lucide-react";
import { FAQ_DATA, getWhatsAppUrl } from "../data/content";

interface FaqProps {
  onOpenBooking?: () => void;
}

export const Faq: React.FC<FaqProps> = () => {
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
            <HelpCircle className="h-5 w-5 text-[#A85D46]" />
            <span className="text-[#A85D46] font-semibold uppercase tracking-wider text-sm">
              Perguntas frequentes
            </span>
          </div>

          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
          >
            Tire Suas Dúvidas
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Respostas claras para as dúvidas mais comuns sobre o atendimento psicológico.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
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
                  <div className="px-6 pb-6 pt-1 text-muted-foreground text-base leading-relaxed border-t border-border/30 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA Box */}
        <div
          id="contact"
          className="mt-16 bg-primary p-8 lg:p-12 rounded-3xl shadow-warm text-primary-foreground text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 text-primary-foreground">
            Ainda tem alguma dúvida?
          </h3>
          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Estou à disposição para esclarecer qualquer questão. Fale diretamente comigo pelo WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl("Olá, Ana! Vim pelo site e gostaria de tirar uma dúvida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 font-semibold h-11 px-8"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Conversar pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
