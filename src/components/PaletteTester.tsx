import React, { useState } from "react";
import { Palette, Check, RefreshCw, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface PaletteTesterProps {
  currentTheme: "terra-lavanda" | "original";
  onThemeChange: (theme: "terra-lavanda" | "original") => void;
}

export const PaletteTester: React.FC<PaletteTesterProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const terraLavandaColors = [
    { name: "Cacau", hex: "#59463C", role: "Principal (títulos e capas)", textColor: "#FAF4F0" },
    { name: "Lavanda acinzentada", hex: "#82748E", role: "Secundária (leveza)", textColor: "#FFFFFF" },
    { name: "Oliva suave", hex: "#7E8164", role: "Equilíbrio & Natureza", textColor: "#FFFFFF" },
    { name: "Argila rosada", hex: "#C78169", role: "Destaque (botões e ênfase)", textColor: "#FFFFFF" },
    { name: "Rosa-marfinizado", hex: "#F3E9E3", role: "Fundo neutro e respiro", textColor: "#332A29" },
    { name: "Chocolate profundo", hex: "#332A29", role: "Texto de alta leitura", textColor: "#FAF4F0" },
  ];

  const handleCopy = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <aside
      aria-label="Painel de teste de paleta de cores"
      className="fixed bottom-24 left-4 z-40 max-w-sm sm:max-w-md bg-card/95 backdrop-blur-md border border-border/80 rounded-2xl shadow-warm transition-all duration-300 overflow-hidden"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between p-3 sm:px-4 bg-primary text-primary-foreground">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-orange/90 flex items-center justify-center text-white shrink-0 shadow-sm">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-playfair font-semibold text-sm sm:text-base leading-tight">
              <span>Paleta 2 – Terra & Lavanda</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-accent/30 text-primary-foreground border border-white/20">
                {currentTheme === "terra-lavanda" ? "Em Teste" : "Inativo"}
              </span>
            </div>
            <p className="text-[11px] text-primary-foreground/80 font-normal leading-tight">
              Sensibilidade adulta • profundidade • afeto
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-primary-foreground/90 transition-colors"
            title={isExpanded ? "Minimizar painel" : "Expandir painel"}
            aria-label={isExpanded ? "Minimizar painel de cores" : "Expandir painel de cores"}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-3 sm:p-4 space-y-3.5 text-foreground text-xs sm:text-sm">
          {/* Swatches Grid */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                Cores do Guia Oficial
              </span>
              <span className="text-[11px] text-muted-foreground">
                Clique para copiar o Hex
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {terraLavandaColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleCopy(color.hex, color.name)}
                  className="group relative flex flex-col items-center p-1.5 rounded-xl border border-border/60 hover:scale-105 transition-transform text-center cursor-pointer"
                  title={`${color.name} (${color.hex}) - ${color.role}`}
                >
                  <div
                    className="w-full h-8 sm:h-9 rounded-lg shadow-inner mb-1 flex items-center justify-center transition-all"
                    style={{ backgroundColor: color.hex }}
                  >
                    {copiedColor === color.name ? (
                      <Check className="w-3.5 h-3.5" style={{ color: color.textColor }} />
                    ) : null}
                  </div>
                  <span className="font-semibold text-[10px] truncate max-w-full text-foreground">
                    {color.name.split(" ")[0]}
                  </span>
                  <span className="text-[9px] text-muted-foreground font-mono">
                    {color.hex}
                  </span>
                </button>
              ))}
            </div>
            {copiedColor && (
              <p className="text-[11px] text-orange text-center mt-1.5 font-medium animate-pulse">
                Código copiado para a área de transferência!
              </p>
            )}
          </div>

          {/* Theme Switcher Toggle */}
          <div className="pt-2 border-t border-border/60 flex items-center justify-between gap-2">
            <div className="text-[11px] text-muted-foreground">
              Alternar visualização:
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => onThemeChange("terra-lavanda")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  currentTheme === "terra-lavanda"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Terra & Lavanda
              </button>
              <button
                onClick={() => onThemeChange("original")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  currentTheme === "original"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Original (Âmbar)
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
