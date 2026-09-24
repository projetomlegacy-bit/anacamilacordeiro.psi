import React, { useState } from "react";
import {
  ArrowLeft,
  Copy,
  Check,
  Download,
  Printer,
  Sparkles,
  Palette,
  Type,
  Image as ImageIcon,
  Instagram,
  Presentation,
  FileCheck2,
  Share2,
  AlertCircle,
  Eye,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface BrandColor {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  textColor: string;
  tag: string;
  usage: string;
}

const BRAND_COLORS: BrandColor[] = [
  {
    name: "Cacau",
    role: "Cor Principal Institucional",
    hex: "#59463C",
    rgb: "89, 70, 60",
    cmyk: "45, 55, 60, 40",
    textColor: "#FAF4F0",
    tag: "Primária",
    usage: "Títulos principais, fundos nobres em capas de carrossel, aberturas de apresentações, rodapés e caixas de alta importância.",
  },
  {
    name: "Argila Rosada",
    role: "Cor de Ação e Destaque",
    hex: "#C78169",
    rgb: "199, 129, 105",
    cmyk: "18, 55, 55, 5",
    textColor: "#FFFFFF",
    tag: "Acento / CTA",
    usage: "Botões de ação (WhatsApp/Agendamento), grifos em palavras-chave, ícones, marcadores e setas de transição em carrosséis.",
  },
  {
    name: "Lavanda Acinzentada",
    role: "Secundária de Acolhimento",
    hex: "#82748E",
    rgb: "130, 116, 142",
    cmyk: "45, 48, 25, 5",
    textColor: "#FFFFFF",
    tag: "Secundária",
    usage: "Cards secundários, tags de categorias, selos de acolhimento e equilíbrio visual contra o calor da argila.",
  },
  {
    name: "Oliva Suave",
    role: "Equilíbrio & Conexão",
    hex: "#7E8164",
    rgb: "126, 129, 100",
    cmyk: "42, 30, 55, 10",
    textColor: "#FFFFFF",
    tag: "Apoio / Natureza",
    usage: "Símbolos de acolhimento, selos de CRP, detalhes botânicos e diferenciação de tópicos nos slides.",
  },
  {
    name: "Rosa-Marfinizado",
    role: "Fundo Neutro e Respiro",
    hex: "#F3E9E3",
    rgb: "243, 233, 227",
    cmyk: "4, 7, 9, 0",
    textColor: "#332A29",
    tag: "Fundo Acolhedor",
    usage: "Fundo padrão para slides de leitura, interior de posts de carrossel, caixas de citação e papelaria timbrada.",
  },
  {
    name: "Chocolate Profundo",
    role: "Texto de Alta Leitura",
    hex: "#332A29",
    rgb: "51, 42, 41",
    cmyk: "50, 60, 60, 65",
    textColor: "#FAF4F0",
    tag: "Tipografia",
    usage: "Substitui o preto puro (100% black) em todos os textos corridos, legendas e parágrafos para maior conforto visual.",
  },
  {
    name: "Bege Aveludado",
    role: "Fundo Suave de Seção",
    hex: "#FAF4F0",
    rgb: "250, 244, 240",
    cmyk: "2, 3, 5, 0",
    textColor: "#332A29",
    tag: "Base Web / Feed",
    usage: "Fundo do site, cartões de depoimentos e planos de fundo de stories para criar ambiente suave e silencioso.",
  },
  {
    name: "Branco Puro",
    role: "Pontos de Luz e Contraste",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
    textColor: "#332A29",
    tag: "Respiro",
    usage: "Cards destacados sobre fundo bege, caixas de perguntas no Instagram e áreas de texto com máxima nitidez.",
  },
];

interface BrandGuideProps {
  onClose: () => void;
}

export const BrandGuide: React.FC<BrandGuideProps> = ({ onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "colors" | "typography" | "social" | "slides" | "voice"
  >("overview");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(label);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF4F0] text-[#332A29] selection:bg-[#C78169]/20 selection:text-[#59463C]">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF4F0]/95 backdrop-blur-md border-b border-[#59463C]/15 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#59463C]/20 text-[#59463C] hover:bg-[#59463C] hover:text-white transition-all text-xs sm:text-sm font-medium shadow-xs cursor-pointer"
            aria-label="Voltar para a página principal"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </button>

          <div className="h-4 w-px bg-[#59463C]/20 hidden sm:block" />

          <div>
            <span className="font-playfair font-bold text-sm sm:text-base text-[#59463C] block leading-tight">
              Ana Camila Cordeiro
            </span>
            <span className="text-[10px] sm:text-xs text-[#82748E] font-medium tracking-wide">
              Manual de Identidade Visual &amp; Branding
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#59463C]/10 hover:bg-[#59463C]/15 text-[#59463C] text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            title="Imprimir ou Salvar em PDF"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#59463C] to-[#45362E] text-white py-14 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C78169]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-[#82748E]/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F3E9E3] text-xs tracking-wider uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C78169]" />
            <span>Guia Oficial de Diretrizes de Marca</span>
          </div>

          <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FAF4F0] leading-tight">
            Manual da Marca <br />
            <span className="text-[#C78169] italic">Ana Camila Cordeiro</span>
          </h1>

          <p className="text-[#F3E9E3]/90 text-base sm:text-xl max-w-3xl leading-relaxed font-light">
            Referência completa de cores, tipografia, tom de voz e regras de aplicação para a criação de <strong>posts de Instagram, carrosséis, apresentações de slides, receituários e materiais impressos</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs sm:text-sm text-[#F3E9E3]/80">
            <span className="px-3 py-1 rounded-lg bg-white/10">
              Paleta Oficial: <strong>Terra &amp; Lavanda</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/10">
              CRP: <strong>06/162019 SP</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/10">
              Versão: <strong>2.0 (2026)</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav aria-label="Navegação do manual" className="border-b border-[#59463C]/15 bg-white/60 sticky top-14 z-30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex gap-2 sm:gap-4 overflow-x-auto py-2.5 no-scrollbar text-xs sm:text-sm font-medium">
          {[
            { id: "overview", label: "Visão Geral", icon: BookmarkCheck },
            { id: "colors", label: "Paleta de Cores", icon: Palette },
            { id: "typography", label: "Tipografia", icon: Type },
            { id: "social", label: "Posts & Instagram", icon: Instagram },
            { id: "slides", label: "Slides & Apresentações", icon: Presentation },
            { id: "voice", label: "Tom de Voz & Ética", icon: FileCheck2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#59463C] text-white shadow-xs"
                    : "text-[#59463C] hover:bg-[#59463C]/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-16">
        {/* ========================================================= */}
        {/* TAB 1: VISÃO GERAL */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "colors") && (
          <section id="colors" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                <Palette className="w-4 h-4" />
                <span>01. Cores Institucionais</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Paleta 2 – Terra &amp; Lavanda
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Desenvolvida especificamente para comunicar <strong>sensibilidade adulta, profundidade clínica, afeto e acolhimento</strong> sem cair no infantil ou no corporativo frio.
              </p>
            </div>

            {/* Colors Grid with 1-click copy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {BRAND_COLORS.map((c) => {
                const isCopied = copiedHex === c.hex;
                return (
                  <div
                    key={c.name}
                    className="bg-white rounded-2xl border border-[#59463C]/15 shadow-xs overflow-hidden flex flex-col justify-between group hover:shadow-warm transition-all"
                  >
                    <div>
                      {/* Color swatch block */}
                      <div
                        className="h-28 sm:h-32 w-full p-3.5 flex flex-col justify-between transition-transform relative"
                        style={{ backgroundColor: c.hex }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md self-start"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.15)",
                            color: c.textColor,
                          }}
                        >
                          {c.tag}
                        </span>

                        <button
                          onClick={() => copyToClipboard(c.hex, c.hex)}
                          className="self-end px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-md"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.25)",
                            color: c.textColor,
                          }}
                          title="Clique para copiar o código HEX"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 opacity-80" />
                              <span>{c.hex}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Color Information */}
                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="font-playfair font-bold text-lg text-[#59463C]">
                            {c.name}
                          </h3>
                          <p className="text-xs text-[#82748E] font-medium">
                            {c.role}
                          </p>
                        </div>

                        {/* Technical values */}
                        <div className="space-y-1 text-xs font-mono text-[#59463C]/90 bg-[#FAF4F0] p-2.5 rounded-xl">
                          <div className="flex justify-between">
                            <span className="text-[#82748E] font-sans">HEX:</span>
                            <span className="font-bold">{c.hex}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#82748E] font-sans">RGB:</span>
                            <span>{c.rgb}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#82748E] font-sans">CMYK:</span>
                            <span>{c.cmyk}</span>
                          </div>
                        </div>

                        <p className="text-xs text-[#59463C]/80 leading-relaxed">
                          {c.usage}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contrast and Accessibility Matrix */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
              <h3 className="font-playfair font-bold text-xl text-[#59463C]">
                Regra de Ouro de Contraste para Posts &amp; Slides
              </h3>
              <p className="text-sm text-[#59463C]/85 leading-relaxed">
                Para garantir que qualquer pessoa leia com facilidade até na tela do celular sob luz solar, use exclusivamente as combinações aprovadas abaixo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#59463C] text-[#FAF4F0] space-y-1">
                  <div className="text-xs font-mono opacity-75">Fundo Cacau</div>
                  <div className="font-bold font-playfair text-base">Texto Bege / Marfim</div>
                  <div className="text-[11px] opacity-85">Alto contraste para capas de posts e aberturas.</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F3E9E3] text-[#332A29] space-y-1">
                  <div className="text-xs font-mono opacity-75">Fundo Rosa-Marfinizado</div>
                  <div className="font-bold font-playfair text-base">Texto Chocolate Profundo</div>
                  <div className="text-[11px] opacity-85">Perfeito para miolo de carrosséis e leitura longa.</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#C78169] text-white space-y-1">
                  <div className="text-xs font-mono opacity-75">Fundo Argila Rosada</div>
                  <div className="font-bold font-playfair text-base">Texto Branco Puro</div>
                  <div className="text-[11px] opacity-85">Ideal para botões de CTA, caixas de perguntas e destaques.</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB 2: TIPOGRAFIA */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "typography") && (
          <section id="typography" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                <Type className="w-4 h-4" />
                <span>02. Sistema Tipográfico</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Tipografia da Marca
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                A combinação entre uma serifa nobre e uma sans-serif geométrica limpa constrói a autoridade clínica sem perder a doçura do acolhimento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Font 1: Playfair Display */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#59463C]/10 text-[#59463C] text-xs font-semibold">
                    Fonte Principal / Display
                  </span>
                  <span className="text-xs text-[#82748E] font-mono">Serif</span>
                </div>

                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-[#59463C]">
                  Playfair Display
                </h3>

                <p className="text-xs text-[#82748E] leading-relaxed">
                  Utilizada em <strong>títulos de impacto, capas de carrosséis, início de slides e citações reflexivas</strong>. Transmite afeto, tradição psicanalítica e elegância.
                </p>

                <div className="border-t border-[#59463C]/10 pt-4 space-y-2">
                  <div className="font-playfair font-bold text-2xl text-[#59463C]">
                    "Um espaço para você compreender o que está vivendo."
                  </div>
                  <div className="font-playfair italic text-lg text-[#C78169]">
                    Sensibilidade adulta &bull; Escuta atenta &bull; Cuidado singular
                  </div>
                  <div className="text-xs text-[#82748E] font-mono pt-2">
                    Pesos recomendados: Bold (700), SemiBold (600), Italic (400)
                  </div>
                </div>
              </div>

              {/* Font 2: Inter / Sans-serif */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#82748E]/15 text-[#82748E] text-xs font-semibold">
                    Fonte de Apoio / Leitura
                  </span>
                  <span className="text-xs text-[#82748E] font-mono">Sans-Serif</span>
                </div>

                <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#59463C]">
                  Inter / Plus Jakarta Sans
                </h3>

                <p className="text-xs text-[#82748E] leading-relaxed">
                  Utilizada em <strong>textos corridos, explicações clínicas, legendas de posts, bullets de apresentações e documentos impressos</strong>. Alta legibilidade em telas pequenas.
                </p>

                <div className="border-t border-[#59463C]/10 pt-4 space-y-2">
                  <p className="font-sans text-sm text-[#332A29] leading-relaxed">
                    A ansiedade se torna pesada quando rouba sua presença e te faz viver no futuro. Na psicoterapia de orientação psicanalítica, abrimos espaço para acolher essas angústias no seu próprio tempo.
                  </p>
                  <div className="flex gap-4 text-xs font-sans font-semibold text-[#59463C] pt-2">
                    <span>Regular 400</span>
                    <span>Medium 500</span>
                    <span>SemiBold 600</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hierarchy table for designers / creators */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
              <h3 className="font-playfair font-bold text-xl text-[#59463C]">
                Guia de Escala para Posts (Instagram) e Slides
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#59463C]/15 text-[#82748E] uppercase tracking-wider text-[11px]">
                      <th className="pb-3">Elemento</th>
                      <th className="pb-3">Fonte</th>
                      <th className="pb-3">Tamanho (Post Feed)</th>
                      <th className="pb-3">Tamanho (Slide 16:9)</th>
                      <th className="pb-3">Uso Recomendado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#59463C]/10 text-[#332A29]">
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Kicker / Categoria</td>
                      <td className="py-3 font-sans">Inter (SemiBold)</td>
                      <td className="py-3 font-mono">18px - 22px</td>
                      <td className="py-3 font-mono">20px - 24px</td>
                      <td className="py-3 text-[#59463C]/80">Caixa alta com espaçamento largo acima do título</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Título Principal (H1)</td>
                      <td className="py-3 font-playfair font-bold">Playfair Display</td>
                      <td className="py-3 font-mono">48px - 64px</td>
                      <td className="py-3 font-mono">54px - 72px</td>
                      <td className="py-3 text-[#59463C]/80">Capa de carrossel ou slide de abertura</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Subtítulo / Destaque</td>
                      <td className="py-3 font-playfair italic">Playfair Display</td>
                      <td className="py-3 font-mono">28px - 34px</td>
                      <td className="py-3 font-mono">32px - 38px</td>
                      <td className="py-3 text-[#59463C]/80">Frases reflexivas e conceitos-chave</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Corpo de Texto</td>
                      <td className="py-3 font-sans">Inter (Regular)</td>
                      <td className="py-3 font-mono">22px - 26px</td>
                      <td className="py-3 font-mono">24px - 28px</td>
                      <td className="py-3 text-[#59463C]/80">Parágrafos internos (entrelinha 1.6x)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Rodapé / Assinatura</td>
                      <td className="py-3 font-sans font-medium">Inter</td>
                      <td className="py-3 font-mono">14px - 16px</td>
                      <td className="py-3 font-mono">16px - 18px</td>
                      <td className="py-3 text-[#59463C]/80">@anacamilacordeiro.psi • CRP 06/162019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB 3: INSTAGRAM E REDES SOCIAIS */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "social") && (
          <section id="social" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                <Instagram className="w-4 h-4" />
                <span>03. Redes Sociais &amp; Instagram</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Modelos e Diretrizes para o Instagram
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Orientações para criar posts de carrossel, capas de reels e stories que transmitam profundidade e estética refinada.
              </p>
            </div>

            {/* Anatomy of a High-Impact Post */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Mockup 1: Capa de Carrossel */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#59463C] flex items-center justify-between">
                  <span>Modelo 1: Capa de Carrossel (1080x1080)</span>
                  <span className="text-[10px] text-[#82748E] font-mono">Slide 1</span>
                </div>

                {/* Simulated Post Card */}
                <div className="aspect-square bg-[#59463C] text-white p-7 rounded-3xl shadow-warm flex flex-col justify-between relative overflow-hidden border border-white/10">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-widest text-[#C78169] font-semibold block">
                      Psicoterapia Feminina
                    </span>
                    <h4 className="font-playfair font-bold text-2xl leading-snug text-[#FAF4F0]">
                      Por que você sente que nunca é o suficiente?
                    </h4>
                  </div>

                  <div className="py-2">
                    <p className="text-xs text-[#F3E9E3]/85 leading-relaxed italic">
                      Um olhar psicanalítico sobre a autocrítica silenciosa que tantas mulheres carregam.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#F3E9E3]/70">
                    <span>Ana Camila Cordeiro • CRP 06/162019</span>
                    <span className="text-[#C78169] font-semibold">Arrasta &rarr;</span>
                  </div>
                </div>
                <p className="text-xs text-[#59463C]/75">
                  Fundo Cacau escuro com texto Bege e destaque Terracota. Garante pausa imediata no feed.
                </p>
              </div>

              {/* Mockup 2: Slide de Conteúdo Interno */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#59463C] flex items-center justify-between">
                  <span>Modelo 2: Miolo do Carrossel (1080x1080)</span>
                  <span className="text-[10px] text-[#82748E] font-mono">Slide 2 a 5</span>
                </div>

                {/* Simulated Post Card */}
                <div className="aspect-square bg-[#F3E9E3] text-[#332A29] p-7 rounded-3xl shadow-warm flex flex-col justify-between relative overflow-hidden border border-[#59463C]/10">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#82748E] font-semibold block">
                      Ponto de Reflexão 01
                    </span>
                    <h4 className="font-playfair font-bold text-xl leading-snug text-[#59463C]">
                      Cobranças invisíveis
                    </h4>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#332A29]/90 leading-relaxed">
                    <p>
                      Muitas mulheres aprenderam desde cedo que cuidar dos outros era a única maneira de se sentirem amadas.
                    </p>
                    <p className="p-3 rounded-xl bg-white/80 border-l-3 border-[#C78169] font-medium italic text-[#59463C]">
                      "Cuidar de si mesma não é egoísmo. É a condição básica para viver sem se anular."
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#59463C]/10 flex items-center justify-between text-[11px] text-[#82748E]">
                    <span>@anacamilacordeiro.psi</span>
                    <span className="font-semibold text-[#C78169]">02/06</span>
                  </div>
                </div>
                <p className="text-xs text-[#59463C]/75">
                  Fundo Rosa-Marfinizado limpo, com respiro visual, fácil de ler em qualquer tamanho de celular.
                </p>
              </div>

              {/* Mockup 3: Slide Final / CTA */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#59463C] flex items-center justify-between">
                  <span>Modelo 3: Encerramento / CTA</span>
                  <span className="text-[10px] text-[#82748E] font-mono">Slide Final</span>
                </div>

                {/* Simulated Post Card */}
                <div className="aspect-square bg-white text-[#332A29] p-7 rounded-3xl shadow-warm flex flex-col justify-between relative overflow-hidden border border-[#59463C]/15">
                  <div className="text-center space-y-2 pt-2">
                    <img
                      src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                      alt="Ana Camila Cordeiro"
                      className="w-14 h-14 rounded-full mx-auto object-cover border border-[#C78169]/30"
                    />
                    <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                      Ana Camila Cordeiro
                    </h4>
                    <p className="text-[11px] text-[#82748E]">
                      Psicóloga Clínica • Orientação Psicanalítica <br />
                      CRP 06/162019 SP
                    </p>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-xs text-[#59463C] font-medium leading-snug">
                      Você não precisa carregar todo esse peso sozinha.
                    </p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-[#C78169] text-white text-xs font-semibold shadow-xs">
                      Agende pelo link da bio
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#59463C]/10 flex items-center justify-around text-[10px] text-[#82748E]">
                    <span>Salvar post</span>
                    <span>&bull;</span>
                    <span>Compartilhar</span>
                    <span>&bull;</span>
                    <span>Comentar</span>
                  </div>
                </div>
                <p className="text-xs text-[#59463C]/75">
                  Fechamento com chamada gentil e acolhedora, sem parecer anúncio agressivo.
                </p>
              </div>
            </div>

            {/* Checklist: O que fazer vs O que NÃO fazer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Boas Práticas para Posts &amp; Redes</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#332A29]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span>Use formatos verticais (1080x1350 px no feed e 1080x1920 nos stories) para ocupar mais tela.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span>Deixe margem de respiro mínima de 60px em volta do texto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span>Destaque no máximo 1 a 2 palavras por parágrafo com a cor Argila Rosada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span>Inclua sempre o CRP 06/162019 de forma discreta em materiais públicos.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>O que EVITAR nos Materiais</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#332A29]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Nunca use preto 100% puro (#000000); prefira o Chocolate Profundo (#332A29).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Evite tons neon, rosas fluorescentes ou amarelos berrantes que tirem o clima de calma.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Evite textos longos aglomerados; quebre parágrafos a cada 2 linhas no máximo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Não use promessas de resultado rápido ("Cure a ansiedade em 3 dias").</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB 4: SLIDES E APRESENTAÇÕES */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "slides") && (
          <section id="slides" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                <Presentation className="w-4 h-4" />
                <span>04. Apresentações &amp; Slides</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Diretrizes para Apresentações (16:9 Widescreen)
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Padronização para palestras, aulas, workshops e reuniões clínicas com proporção 1920x1080 px.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Slide 1: Cover */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#59463C]">Slide de Abertura / Capa</div>
                <div className="aspect-video bg-[#59463C] text-white p-6 sm:p-8 rounded-2xl shadow-warm flex flex-col justify-between border border-white/10 relative overflow-hidden">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#C78169]">
                      Palestra Clínica &bull; Saúde Mental Feminina
                    </span>
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#FAF4F0] leading-snug">
                      Perdas Invisíveis: O Luto nas Transições da Mulher
                    </h3>
                  </div>

                  <div className="space-y-1 border-t border-white/15 pt-3 text-[11px] sm:text-xs text-[#F3E9E3]/80">
                    <div className="font-semibold text-white">Ana Camila Cordeiro</div>
                    <div>Psicóloga Clínica • CRP 06/162019 SP</div>
                  </div>
                </div>
                <p className="text-xs text-[#59463C]/75">
                  Fundo Cacau escuro transmite respeito e autoridade desde o primeiro segundo no projetor.
                </p>
              </div>

              {/* Slide 2: Content Slide */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#59463C]">Slide de Conteúdo / Tópicos</div>
                <div className="aspect-video bg-[#F3E9E3] text-[#332A29] p-6 sm:p-8 rounded-2xl shadow-warm flex flex-col justify-between border border-[#59463C]/10 relative overflow-hidden">
                  <div>
                    <h4 className="font-playfair font-bold text-lg sm:text-xl text-[#59463C] mb-3">
                      Os Três Pilares da Elaboração Emocional
                    </h4>

                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#C78169] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          1
                        </span>
                        <span><strong>Nomear o que dói:</strong> Dar palavras àquilo que o corpo manifesta.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#82748E] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          2
                        </span>
                        <span><strong>Acolher o ritmo:</strong> Sem cobrança de superação acelerada.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#7E8164] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          3
                        </span>
                        <span><strong>Reconstruir a autonomia:</strong> Resgatar os próprios desejos.</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-[#82748E] border-t border-[#59463C]/10 pt-2 flex justify-between">
                    <span>Ana Camila Cordeiro • Psicoterapia</span>
                    <span>04</span>
                  </div>
                </div>
                <p className="text-xs text-[#59463C]/75">
                  Fundo claro e acolhedor, fácil de ler em auditórios e apresentações virtuais via Google Meet/Zoom.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB 5: TOM DE VOZ E ÉTICA CLÍNICA */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "voice") && (
          <section id="voice" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                <FileCheck2 className="w-4 h-4" />
                <span>05. Tom de Voz &amp; Comunicação Ética</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Linguagem e Expressão da Marca
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Como a marca se expressa por escrito em posts, mensagens de boas-vindas, e-mails e materiais institucionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#C78169]/15 text-[#C78169] flex items-center justify-center font-playfair font-bold text-lg">
                  01
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#59463C]">
                  Afeto com Rigor Técnico
                </h3>
                <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed">
                  Acolher com carinho, mas sem infantilizar a mulher. O respeito à inteligência e à dor da paciente vem em primeiro lugar.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#82748E]/15 text-[#82748E] flex items-center justify-center font-playfair font-bold text-lg">
                  02
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#59463C]">
                  Respeito ao Tempo
                </h3>
                <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed">
                  Não existem fórmulas mágicas nem soluções instantâneas. A comunicação convida à pausa e ao processo gradual de autocompreensão.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#7E8164]/15 text-[#7E8164] flex items-center justify-center font-playfair font-bold text-lg">
                  03
                </div>
                <h3 className="font-playfair font-bold text-lg text-[#59463C]">
                  Conformidade com CFP
                </h3>
                <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed">
                  Nunca prometer cura, nunca expor pacientes sem sigilo absoluto e sempre manter a divulgação ética conforme o Código de Ética Profissional.
                </p>
              </div>
            </div>

            {/* Vocabulary / Wordbank */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
              <h3 className="font-playfair font-bold text-xl text-[#59463C]">
                Vocabulário Recomendado (Banco de Palavras da Marca)
              </h3>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Espaço de escuta",
                  "Compreender o que está vivendo",
                  "Pausa necessária",
                  "Autocompreensão",
                  "Elaboração psíquica",
                  "Singularidade",
                  "Acolhimento profundo",
                  "Sem fórmulas prontas",
                  "No seu próprio ritmo",
                  "Alívio da sobrecarga",
                  "Vínculo terapêutico",
                  "Cuidado gentil",
                ].map((word) => (
                  <span
                    key={word}
                    className="px-3 py-1.5 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-xs text-[#59463C] font-medium"
                  >
                    &ldquo;{word}&rdquo;
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to top CTA */}
        <div className="text-center pt-8 border-t border-[#59463C]/15 space-y-4">
          <p className="text-sm text-[#59463C]/80">
            Dúvidas ou novos materiais? Este manual pode ser impresso ou consultado a qualquer momento pelo link do rodapé.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-all font-semibold text-sm shadow-warm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a Página Principal</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
