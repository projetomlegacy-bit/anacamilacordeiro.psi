import React, { useState } from "react";
import {
  Sparkles,
  Wind,
  Feather,
  CloudRain,
  Scale,
  Compass,
  X,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { DEMANDS_DATA, Demand, getWhatsAppUrl } from "../data/content";

interface SymptomsProps {
  onOpenBooking?: () => void;
}

// Minimalist line-art icons mapped in institutional color #C78169
const DEMAND_ICONS: Record<string, LucideIcon> = {
  ansiedade: Wind,
  luto: Feather,
  autoestima: Sparkles,
  depressao: CloudRain,
  sobrecarga: Scale,
  transicoes: Compass,
};

export const Symptoms: React.FC<SymptomsProps> = ({ onOpenBooking }) => {
  const [selectedDemand, setSelectedDemand] = useState<Demand | null>(null);

  const SelectedIcon = selectedDemand
    ? DEMAND_ICONS[selectedDemand.id] || Sparkles
    : Sparkles;

  return (
    <section id="symptoms" className="py-20 bg-background" aria-labelledby="symptoms-title">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-xs uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Você está passando por isso?</span>
          </div>

          <h2
            id="symptoms-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary leading-tight"
          >
            Algumas coisas podem estar pesando mais do que você gostaria.
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cada vivência é única. Na psicoterapia, olhamos para a sua experiência real, sem rótulos ou fórmulas prontas.
          </p>
        </div>

        {/* 6 Human Experience Cards in Symmetrical 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {DEMANDS_DATA.map((item) => {
            const Icon = DEMAND_ICONS[item.id] || Sparkles;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedDemand(item)}
                className="group bg-[#FAF4F0] p-7 sm:p-8 rounded-3xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1.5 cursor-pointer text-left border-0 focus:outline-none focus:ring-2 focus:ring-[#C78169]/30 flex flex-col justify-between"
                aria-label={`Ver detalhes sobre ${item.title}`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Minimalist Line-art Icon in institutional #C78169 */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C78169]/10 text-[#C78169] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C78169]/20">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-semibold text-accent/80 tracking-wider uppercase">
                      Experiência
                    </span>
                  </div>

                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-primary group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-foreground/90 font-medium text-sm sm:text-base leading-snug italic">
                    "{item.experienceHeadline}"
                  </p>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-1">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:text-primary transition-colors">
                    <span>Entender como a terapia ajuda</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="h-0.5 bg-[#C78169]/40 rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Reassurance Callout Box */}
        <div className="text-center mt-16">
          <div className="bg-[#FAF4F0] p-8 sm:p-10 rounded-3xl max-w-4xl mx-auto shadow-soft">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Se você se reconhece em alguma dessas vivências, saiba que{" "}
              <span className="text-primary font-semibold">não precisa carregar tudo sozinha</span>. A psicoterapia é um primeiro passo para respirar, ser ouvida e se reencontrar.
            </p>
            <div className="mt-6">
              <a
                href={getWhatsAppUrl("Olá, Ana Camila! Estava lendo sobre as vivências no seu site e gostaria de conversar sobre atendimento psicoterapêutico.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md font-semibold text-sm px-7 py-3 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                <span>Falar com a Psicóloga</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Demand Detail Modal */}
      {selectedDemand && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedDemand(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-[#FAF4F0] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-warm space-y-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#C78169]/15 text-[#C78169] flex items-center justify-center shrink-0">
                  <SelectedIcon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 id="modal-title" className="text-2xl font-playfair font-bold text-primary">
                    {selectedDemand.title}
                  </h3>
                  <p className="text-xs text-accent font-medium mt-0.5 uppercase tracking-wider">
                    Como a psicoterapia acolhe
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDemand(null)}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Fechar janela"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Experience quote */}
            <div className="p-4 rounded-2xl bg-accent/10 text-primary text-sm font-medium italic">
              "{selectedDemand.experienceHeadline}"
            </div>

            {/* Full description */}
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {selectedDemand.fullDesc}
            </p>

            {/* Signs / Manifestations */}
            {selectedDemand.signs && selectedDemand.signs.length > 0 && (
              <div className="space-y-3 pt-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Sinais e sensações comuns:
                </div>
                <div className="space-y-2">
                  {selectedDemand.signs.map((sign, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
              <a
                href={selectedDemand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm h-11 px-5 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 transition-all"
              >
                <span>Conversar sobre {selectedDemand.title}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setSelectedDemand(null)}
                className="border border-border/60 text-foreground px-5 py-2.5 rounded-lg text-sm hover:bg-black/5 transition-colors cursor-pointer"
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
