import React, { useState } from "react";
import {
  ArrowLeft,
  Copy,
  Check,
  Printer,
  Sparkles,
  Palette,
  Type,
  Instagram,
  Presentation,
  FileCheck2,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  MessageSquare,
  StickyNote,
  Twitter,
  Layers,
  Smartphone,
  Sparkle,
  Heart,
  HelpCircle,
  Bookmark,
  Share2,
  Send,
  SlidersHorizontal,
  Compass,
  FileText,
  Quote,
  Download,
  Youtube,
  Linkedin,
  Video,
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  Monitor,
  Tv,
  Box,
  Globe,
  FileDown,
  MousePointerClick,
  ChevronRight,
  ChevronLeft,
  User,
  Play,
  Bell,
  Repeat,
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
    usage: "Títulos principais, fundos nobres em capas de carrossel, thumbnails do YouTube, banners e caixas de alta importância.",
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
    name: "Argila Acessível (WCAG AA)",
    role: "Tags Pequenas & Contraste Web",
    hex: "#A85D46",
    rgb: "168, 93, 70",
    cmyk: "25, 65, 70, 15",
    textColor: "#FFFFFF",
    tag: "WCAG / Acessibilidade",
    usage: "Tags pequenas, subtítulos em caixa-alta e textos finos sobre fundos claros (#F3E9E3 / #FAF4F0) para garantir contraste > 4.5:1 exigido pelo WCAG AA.",
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
    usage: "Fundo padrão para posts de bloco de notas, interior de posts de carrossel, caixas de citação e papelaria timbrada.",
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
    usage: "Fundo do site, posts de frase única clara e planos de fundo de stories para criar ambiente suave e silencioso.",
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
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "logo" | "colors" | "typography" | "downloads" | "social" | "multichannel" | "slides" | "voice"
  >("overview");
  const [instagramFilter, setInstagramFilter] = useState<string>("all");
  const [channelFilter, setChannelFilter] = useState<"all" | "youtube" | "linkedin" | "tiktok">("all");
  const [colorFilter, setColorFilter] = useState<"all" | "primary" | "accent" | "secondary" | "neutral">("all");
  const [customSampleText, setCustomSampleText] = useState<string>(
    "Acolhimento, escuta atenta e respeito ao seu próprio tempo."
  );
  const [sampleFontSize, setSampleFontSize] = useState<"sm" | "md" | "lg" | "xl">("lg");
  const [carouselSlide, setCarouselSlide] = useState<number>(0);
  const [activeScriptTab, setActiveScriptTab] = useState<number>(0);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(label);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const copyColorHex = (hex: string, colorName?: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setCopiedSnippet(colorName ? `color-${colorName}` : `color-${hex}`);
    setTimeout(() => {
      setCopiedHex(null);
      setCopiedSnippet(null);
    }, 2500);
  };

  const copySnippet = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(label);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const copyAllHexForCanva = () => {
    const hexList = BRAND_COLORS.map((c) => `${c.name}: ${c.hex}`).join("\n");
    navigator.clipboard.writeText(hexList);
    setCopiedSnippet("all-canva-hex");
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const copyLogoSvg = (type: "official" | "white" | "monogram") => {
    let svgContent = "";
    if (type === "official") {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 100" width="520" height="100">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .monogram { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 700; fill: #C78169; letter-spacing: -2px; }
      .separator { stroke: #59463C; stroke-opacity: 0.35; stroke-width: 1.5; }
      .brand-title { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; fill: #59463C; letter-spacing: 0.5px; }
      .brand-subtitle { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; fill: #82748E; letter-spacing: 4px; text-transform: uppercase; }
    </style>
  </defs>
  <text x="12" y="68" class="monogram">AC</text>
  <line x1="96" y1="22" x2="96" y2="78" class="separator" />
  <text x="115" y="47" class="brand-title">Ana Camila Cordeiro</text>
  <text x="116" y="68" class="brand-subtitle">Psicóloga Clínica</text>
</svg>`;
    } else if (type === "white") {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 100" width="520" height="100">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&amp;family=Inter:wght@400;500;600&amp;display=swap');
      .monogram-white { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 700; fill: #FFFFFF; letter-spacing: -2px; }
      .separator-white { stroke: #FFFFFF; stroke-opacity: 0.45; stroke-width: 1.5; }
      .brand-title-white { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; fill: #FAF4F0; letter-spacing: 0.5px; }
      .brand-subtitle-white { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; fill: #F3E9E3; letter-spacing: 4px; text-transform: uppercase; opacity: 0.9; }
    </style>
  </defs>
  <text x="12" y="68" class="monogram-white">AC</text>
  <line x1="96" y1="22" x2="96" y2="78" class="separator-white" />
  <text x="115" y="47" class="brand-title-white">Ana Camila Cordeiro</text>
  <text x="116" y="68" class="brand-subtitle-white">Psicóloga Clínica</text>
</svg>`;
    } else {
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&amp;display=swap');
      .mono-ac { font-family: 'Playfair Display', serif; font-size: 78px; font-weight: 700; font-style: italic; fill: #C78169; }
      .mono-circle { fill: none; stroke: #59463C; stroke-width: 2.5; stroke-opacity: 0.25; }
    </style>
  </defs>
  <circle cx="60" cy="60" r="54" class="mono-circle" />
  <text x="60" y="85" text-anchor="middle" class="mono-ac">AC</text>
</svg>`;
    }
    navigator.clipboard.writeText(svgContent);
    setCopiedSnippet(`svg-${type}`);
    setTimeout(() => setCopiedSnippet(null), 2500);
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
              Manual de Identidade Visual &amp; Branding &bull; Versão 2.0
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C78169]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-[#82748E]/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F3E9E3] text-xs tracking-wider uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C78169]" />
            <span>Manual Oficial de Marca &bull; Assets, Templates &amp; Diretrizes</span>
          </div>

          <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FAF4F0] leading-tight">
            Manual da Marca &amp; Assets <br />
            <span className="text-[#C78169] italic">Ana Camila Cordeiro</span>
          </h1>

          <p className="text-[#F3E9E3]/90 text-base sm:text-xl max-w-3xl leading-relaxed font-light">
            Guia completo contendo <strong>logotipo oficial, paleta com cópia instantânea, downloads vetoriais, templates e especificações para Instagram, YouTube, LinkedIn, TikTok e Canva</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs sm:text-sm text-[#F3E9E3]/85">
            <span className="px-3 py-1 rounded-lg bg-white/10">
              Paleta Oficial: <strong>Terra &amp; Lavanda</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/10">
              CRP: <strong>06/162019 SP</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/10">
              MBA: <strong>Gestão de Pessoas (USP ESALQ)</strong>
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#C78169] text-white font-semibold">
              Canva Ready &bull; Downloads Disponíveis
            </span>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav aria-label="Navegação do manual" className="border-b border-[#59463C]/15 bg-white/70 sticky top-14 z-30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex gap-2 sm:gap-3 overflow-x-auto py-2.5 no-scrollbar text-xs sm:text-sm font-medium">
          {[
            { id: "overview", label: "Visão Geral", icon: BookmarkCheck },
            { id: "logo", label: "O Logotipo", icon: Sparkle },
            { id: "colors", label: "Paleta de Cores", icon: Palette },
            { id: "typography", label: "Tipografia & Fontes", icon: Type },
            { id: "downloads", label: "Downloads & Kit Canva", icon: Download },
            { id: "social", label: "Instagram", icon: Instagram },
            { id: "multichannel", label: "YouTube, LinkedIn & TikTok", icon: Video },
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
        {/* SEÇÃO NOVO: O LOGOTIPO & REGRAS DE USO */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "logo") && (
          <section id="logo" className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <Sparkle className="w-4 h-4" />
                <span>Identidade Visual &bull; Logotipo</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                O Logotipo Oficial e seu Significado
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                A identidade visual de Ana Camila Cordeiro foi desenhada para comunicar <strong>alta sofisticação clínica, vínculo psicanalítico e serenidade acolhedora</strong>. Cada detalhe do logotipo carrega um propósito técnico e humano:
              </p>
            </div>

            {/* Conceptual Meaning of the Logo: 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#59463C]/15 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#C78169]/15 text-[#C78169] flex items-center justify-center font-playfair font-bold text-sm">
                  AC
                </div>
                <h4 className="font-playfair font-bold text-sm text-[#59463C]">
                  1. Monograma Entrelaçado
                </h4>
                <p className="text-xs text-[#59463C]/80 leading-relaxed">
                  As iniciais "A" e "C" unidas simbolizam a <strong>aliança terapêutica</strong> e a escuta clínica sem julgamento. O traço fluido representa o acolhimento seguro da subjetividade feminina.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#59463C]/15 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#59463C]/10 text-[#59463C] flex items-center justify-center font-playfair font-bold text-sm">
                  Aa
                </div>
                <h4 className="font-playfair font-bold text-sm text-[#59463C]">
                  2. Playfair Display
                </h4>
                <p className="text-xs text-[#59463C]/80 leading-relaxed">
                  A tipografia serifada de alta nobreza confere <strong>autoridade acadêmica, solidez e tradição psicanalítica</strong>, posicionando a prática com elegância e credibilidade.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#59463C]/15 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#82748E]/15 text-[#82748E] flex items-center justify-center font-sans font-bold text-xs uppercase">
                  CRP
                </div>
                <h4 className="font-playfair font-bold text-sm text-[#59463C]">
                  3. Tipografia Inter (Clareza)
                </h4>
                <p className="text-xs text-[#59463C]/80 leading-relaxed">
                  O subtítulo em caixa-alta transmite <strong>ética e rigor técnico</strong>, garantindo legibilidade perfeita para identificação profissional e credenciamento (CRP 06/162019).
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#59463C]/15 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#7E8164]/15 text-[#7E8164] flex items-center justify-center font-mono font-bold text-sm">
                  |
                </div>
                <h4 className="font-playfair font-bold text-sm text-[#59463C]">
                  4. A Linha de Contorno
                </h4>
                <p className="text-xs text-[#59463C]/80 leading-relaxed">
                  A divisória vertical sutil representa a <strong>construção de limites saudáveis</strong> — o eixo central do trabalho com mulheres sobrecarregadas para delimitar o Eu e o Outro.
                </p>
              </div>
            </div>

            {/* Quick Download Banner for Logo Assets */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#59463C] to-[#45362E] text-white shadow-warm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                    <Download className="w-3.5 h-3.5" />
                    <span>Central de Download Direto</span>
                  </div>
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#FAF4F0]">
                    Arquivos do Logotipo para Download Imediato
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F3E9E3]/85 max-w-2xl font-light">
                    Disponível em <strong>Vetor SVG</strong> (resolução infinita para gráficas, bordados, jalecos e Canva) e em <strong>Imagens HD transparentes</strong> para redes sociais e documentos.
                  </p>
                </div>

                <button
                  onClick={() => copyLogoSvg("official")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-xs font-semibold shrink-0 cursor-pointer"
                >
                  {copiedSnippet === "svg-official" ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>SVG Oficial Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Código SVG Oficial</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action buttons row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                <a
                  href="/logos/logo-ana-camila-oficial.svg"
                  download="logo-ana-camila-cordeiro-oficial.svg"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#C78169] hover:bg-[#b5725c] text-white transition-colors text-xs font-semibold shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Logo Principal (SVG)</span>
                </a>

                <a
                  href="/logos/logo-ana-camila-branco.svg"
                  download="logo-ana-camila-cordeiro-branca.svg"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors text-xs font-semibold shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Logo Negativa Branca (SVG)</span>
                </a>

                <a
                  href="/logos/monograma-ac-circulo.svg"
                  download="monograma-ana-camila-cordeiro.svg"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors text-xs font-semibold shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Monograma Selo (SVG)</span>
                </a>

                <a
                  href="/images/logo-psicologa-ana-camila-cordeiro-dourada.webp"
                  download="logo-ana-camila-cordeiro-hd.webp"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors text-xs font-semibold shadow-xs"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Logo Transparente (HD)</span>
                </a>
              </div>
            </div>

            {/* 4 Official Logo Variations Grid with Direct Downloads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Variation 1: Horizontal Dourada / Terracota (fundo claro) */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#59463C] uppercase tracking-wider">
                      01. Versão Principal (Fundo Claro)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#59463C]/10 text-[#59463C] font-mono">
                      Oficial
                    </span>
                  </div>

                  <div className="h-32 bg-[#FAF4F0] rounded-2xl flex items-center justify-center p-6 border border-[#59463C]/10">
                    <img
                      src="/images/logo-psicologa-ana-camila-cordeiro-dourada.webp"
                      alt="Logo oficial Ana Camila Cordeiro"
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>

                  <div className="space-y-1.5 text-xs text-[#59463C]/85">
                    <p>
                      <strong>Aplicação:</strong> Cabeçalho do site, documentos timbrados, cartões de visita claros, papelaria e materiais impressos.
                    </p>
                    <p className="text-[11px] text-[#82748E]">
                      Monograma em tom terracota/dourado com tipografia institucional Cacau.
                    </p>
                  </div>
                </div>

                {/* Download Actions for Variation 1 */}
                <div className="pt-3 border-t border-[#59463C]/10 space-y-2">
                  <div className="flex gap-2">
                    <a
                      href="/logos/logo-ana-camila-oficial.svg"
                      download="logo-ana-camila-cordeiro-oficial.svg"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar SVG (Vetor)</span>
                    </a>
                    <a
                      href="/images/logo-psicologa-ana-camila-cordeiro-dourada.webp"
                      download="logo-ana-camila-cordeiro-hd.webp"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C]/10 transition-colors text-xs font-medium"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Imagem HD</span>
                    </a>
                  </div>

                  <button
                    onClick={() => copyLogoSvg("official")}
                    className="w-full inline-flex items-center justify-center gap-1 text-[11px] text-[#82748E] hover:text-[#59463C] pt-1 cursor-pointer transition-colors"
                  >
                    {copiedSnippet === "svg-official" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Código SVG copiado para a área de transferência!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar código SVG para colar no Canva ou Illustrator</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Variation 2: Versão Negativa Branca (fundo escuro) */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#59463C] uppercase tracking-wider">
                      02. Versão Negativa (Fundo Escuro)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/20 text-[#59463C] font-mono">
                      Invertida
                    </span>
                  </div>

                  <div className="h-32 bg-[#59463C] rounded-2xl flex items-center justify-center p-6 border border-white/10">
                    <img
                      src="/images/logo-psicologa-ana-camila-cordeiro-branca.webp"
                      alt="Logo oficial Ana Camila Cordeiro versão branca"
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>

                  <div className="space-y-1.5 text-xs text-[#59463C]/85">
                    <p>
                      <strong>Aplicação:</strong> Capas de carrosséis escuras, rodapés nobres, banners de YouTube e sobreposição em vídeos e fotos.
                    </p>
                    <p className="text-[11px] text-[#82748E]">
                      Monograma e textos em Branco Puro com excelente contraste sobre Cacau ou tons escuros.
                    </p>
                  </div>
                </div>

                {/* Download Actions for Variation 2 */}
                <div className="pt-3 border-t border-[#59463C]/10 space-y-2">
                  <div className="flex gap-2">
                    <a
                      href="/logos/logo-ana-camila-branco.svg"
                      download="logo-ana-camila-cordeiro-branca.svg"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar SVG (Branco)</span>
                    </a>
                    <a
                      href="/images/logo-psicologa-ana-camila-cordeiro-branca.webp"
                      download="logo-ana-camila-branca-hd.webp"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C]/10 transition-colors text-xs font-medium"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Imagem HD</span>
                    </a>
                  </div>

                  <button
                    onClick={() => copyLogoSvg("white")}
                    className="w-full inline-flex items-center justify-center gap-1 text-[11px] text-[#82748E] hover:text-[#59463C] pt-1 cursor-pointer transition-colors"
                  >
                    {copiedSnippet === "svg-white" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Código SVG branco copiado com sucesso!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar código SVG branco para colar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Variation 3: Monograma Circular "AC" */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#59463C] uppercase tracking-wider">
                      03. Monograma Circular "AC"
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#C78169]/15 text-[#C78169] font-mono">
                      Selo / Avatar
                    </span>
                  </div>

                  <div className="h-32 bg-[#FAF4F0] rounded-2xl flex items-center justify-center p-6 border border-[#59463C]/10">
                    <div className="w-16 h-16 rounded-full border-2 border-[#59463C]/25 bg-white flex items-center justify-center shadow-xs">
                      <span className="font-playfair font-bold text-2xl text-[#C78169] italic">
                        AC
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#59463C]/85">
                    <p>
                      <strong>Aplicação:</strong> Foto de perfil de WhatsApp profissional, favicon do navegador, carimbos, adesivos de envelope e selos de cera.
                    </p>
                    <p className="text-[11px] text-[#82748E]">
                      Monograma circular sintetizado para uso em espaços reduzidos (16px a 128px).
                    </p>
                  </div>
                </div>

                {/* Download Actions for Variation 3 */}
                <div className="pt-3 border-t border-[#59463C]/10 space-y-2">
                  <div className="flex gap-2">
                    <a
                      href="/logos/monograma-ac-circulo.svg"
                      download="monograma-ana-camila-cordeiro.svg"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar SVG (Selo)</span>
                    </a>
                    <a
                      href="/images/ana-avatar.webp"
                      download="avatar-ana-camila-cordeiro.webp"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C]/10 transition-colors text-xs font-medium"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Avatar HD</span>
                    </a>
                  </div>

                  <button
                    onClick={() => copyLogoSvg("monogram")}
                    className="w-full inline-flex items-center justify-center gap-1 text-[11px] text-[#82748E] hover:text-[#59463C] pt-1 cursor-pointer transition-colors"
                  >
                    {copiedSnippet === "svg-monogram" ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Código SVG do selo copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar código SVG do selo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Variation 4: Versão Completa Horizontal Ampla */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#59463C] uppercase tracking-wider">
                      04. Versão Ampla com Assinatura
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#82748E]/15 text-[#82748E] font-mono">
                      Banner
                    </span>
                  </div>

                  <div className="h-32 bg-[#59463C]/10 rounded-2xl flex items-center justify-center p-6 border border-[#59463C]/10">
                    <img
                      src="/images/logo-completo-dourada.webp"
                      alt="Logo completo dourada"
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>

                  <div className="space-y-1.5 text-xs text-[#59463C]/85">
                    <p>
                      <strong>Aplicação:</strong> Capas de apostilas, banners institucionais do LinkedIn e YouTube e abertura de workshops.
                    </p>
                    <p className="text-[11px] text-[#82748E]">
                      Versão ampla que agrega o monograma e assinatura em composição expandida.
                    </p>
                  </div>
                </div>

                {/* Download Actions for Variation 4 */}
                <div className="pt-3 border-t border-[#59463C]/10 space-y-2">
                  <div className="flex gap-2">
                    <a
                      href="/images/logo-completo-dourada.webp"
                      download="logo-completo-dourada.webp"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar Dourada HD</span>
                    </a>
                    <a
                      href="/images/logo-completo-branco.webp"
                      download="logo-completo-branco.webp"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C]/10 transition-colors text-xs font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar Branca HD</span>
                    </a>
                  </div>
                  <span className="block text-[11px] text-[#82748E] text-center pt-1">
                    Formato WebP com fundo transparente de altíssima definição
                  </span>
                </div>
              </div>
            </div>

            {/* Clearspace & Minimum Size Guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#59463C] font-semibold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Área de Proteção &amp; Tamanho Mínimo</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#332A29]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span><strong>Área de não intervenção:</strong> Mantenha uma margem de respiro mínima equivalente à altura da letra "A" ao redor do logotipo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span><strong>Tamanho Mínimo Digital:</strong> 120 pixels de largura (para manter perfeita legibilidade do subtítulo "Psicóloga Clínica").</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span><strong>Tamanho Mínimo Impresso:</strong> 25 milímetros de largura.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
                  <ShieldAlert className="w-5 h-5 text-rose-600" />
                  <span>Proibições Estritas com o Logotipo</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#332A29]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Nunca distorça ou estique o logotipo horizontal ou verticalmente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Nunca altere as fontes oficiais nem substitua o monograma.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Não aplique sombras duras, chanfros 3D, gradientes arco-íris ou bordas neon.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">&bull;</span>
                    <span>Não aplique a versão escura sobre fundos escuros sem contraste adequado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SEÇÃO: PALETA DE CORES (COM CÓPIA INSTANTÂNEA AO CLICAR) */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "colors") && (
          <section id="colors" className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <Palette className="w-4 h-4" />
                <span>Paleta Oficial &bull; Harmonia Emocional</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                    Paleta de Cores Oficial
                  </h2>
                  <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed mt-1">
                    Cores inspiradas na terra, argila e lavanda, desenhadas para transmitir <strong>acolhimento psicanalítico, serenidade e sofisticação clínica</strong>.
                  </p>
                </div>

                <button
                  onClick={copyAllHexForCanva}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-all text-xs font-semibold shadow-xs cursor-pointer shrink-0 self-start sm:self-auto"
                >
                  {copiedSnippet === "all-canva-hex" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Todas Cores Copiadas!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Todos os HEX para o Canva</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instructional click notice banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-600/20 text-[#59463C] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-600/15 text-amber-800 flex items-center justify-center shrink-0">
                  <MousePointerClick className="w-5 h-5 text-[#C78169]" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#59463C] block sm:inline">Cópia Instantânea: </strong>
                  <span>Clique em qualquer cartão ou botão de cor abaixo para copiar o código <strong>HEX (#)</strong> diretamente para sua área de transferência.</span>
                </div>
              </div>

              {copiedHex && (
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold shadow-xs animate-bounce">
                  <Check className="w-3.5 h-3.5" />
                  <span>{copiedHex} Copiado!</span>
                </div>
              )}
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/70 rounded-2xl border border-[#59463C]/15 w-fit">
              {[
                { id: "all", label: "Todas as Cores (8)" },
                { id: "primary", label: "Primária & Ação (Cacau & Argila)" },
                { id: "secondary", label: "Acolhimento & Natureza (Lavanda & Oliva)" },
                { id: "neutral", label: "Bases, Fundos & Textos" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setColorFilter(filter.id as any)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                    colorFilter === filter.id
                      ? "bg-[#59463C] text-white shadow-2xs"
                      : "text-[#59463C] hover:bg-[#59463C]/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Colors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {BRAND_COLORS.filter((color) => {
                if (colorFilter === "primary") return color.hex === "#59463C" || color.hex === "#C78169";
                if (colorFilter === "secondary") return color.hex === "#82748E" || color.hex === "#7E8164";
                if (colorFilter === "neutral")
                  return (
                    color.hex === "#F3E9E3" ||
                    color.hex === "#332A29" ||
                    color.hex === "#FAF4F0" ||
                    color.hex === "#FFFFFF"
                  );
                return true;
              }).map((color) => {
                const isCopied = copiedHex === color.hex;
                return (
                  <div
                    key={color.hex}
                    onClick={() => copyColorHex(color.hex, color.name)}
                    className="group bg-white rounded-3xl border border-[#59463C]/15 shadow-xs hover:shadow-warm hover:border-[#C78169] transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer relative"
                    title={`Clique para copiar ${color.hex}`}
                  >
                    {/* Swatch block */}
                    <div
                      className="h-32 sm:h-36 w-full p-4 flex flex-col justify-between transition-transform duration-200 group-hover:scale-[1.02] relative"
                      style={{ backgroundColor: color.hex, color: color.textColor }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-xs">
                          {color.tag}
                        </span>

                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 transition-all ${
                            isCopied
                              ? "bg-emerald-500 text-white shadow-xs"
                              : "bg-black/25 text-white/90 group-hover:bg-white group-hover:text-[#332A29]"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copiar HEX</span>
                            </>
                          )}
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        <div className="font-mono font-bold text-lg sm:text-xl tracking-wide drop-shadow-2xs">
                          {color.hex}
                        </div>
                        <div className="text-xs font-semibold opacity-90">{color.name}</div>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#59463C]">{color.role}</span>
                        </div>

                        <p className="text-[11px] text-[#59463C]/80 leading-relaxed">
                          {color.usage}
                        </p>
                      </div>

                      {/* Technical specifications */}
                      <div className="pt-3 border-t border-[#59463C]/10 space-y-1.5 text-[11px] font-mono">
                        <div className="flex justify-between items-center text-[#59463C]/70">
                          <span>RGB:</span>
                          <span className="text-[#332A29] font-medium">{color.rgb}</span>
                        </div>
                        <div className="flex justify-between items-center text-[#59463C]/70">
                          <span>CMYK:</span>
                          <span className="text-[#332A29] font-medium">{color.cmyk}</span>
                        </div>

                        {/* Interactive Click-to-Copy Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyColorHex(color.hex, color.name);
                          }}
                          className={`w-full mt-2 py-1.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            isCopied
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : "bg-[#FAF4F0] hover:bg-[#59463C] hover:text-white text-[#59463C] border-[#59463C]/20"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>HEX Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar {color.hex}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Harmonies & Combinations Matrix */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-6">
              <div className="space-y-1">
                <h3 className="font-playfair font-bold text-xl text-[#59463C] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C78169]" />
                  <span>Harmonias Recomendadas para Postagens &amp; Materiais</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#82748E]">
                  Combinações equilibradas com taxas de contraste aprovadas pela acessibilidade visual (WCAG AA).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Combination 1 */}
                <div className="rounded-2xl border border-[#59463C]/15 p-4 space-y-3 bg-[#FAF4F0]">
                  <div className="h-16 rounded-xl bg-[#59463C] flex items-center justify-center text-[#FAF4F0] p-3 text-center">
                    <span className="font-playfair font-bold text-sm">Cacau Nobre</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#C78169] text-white text-center font-semibold text-[10px]">
                      Argila (Acento)
                    </div>
                    <div className="flex-1 py-1 px-2 rounded-md bg-white border border-[#59463C]/15 text-[#332A29] text-center font-semibold text-[10px]">
                      Bege (Fundo)
                    </div>
                  </div>
                  <p className="text-[11px] text-[#59463C]/80 leading-relaxed">
                    <strong>Equilíbrio Clássico:</strong> Capas de carrossel, thumbnails do YouTube e cabeçalhos formais.
                  </p>
                </div>

                {/* Combination 2 */}
                <div className="rounded-2xl border border-[#59463C]/15 p-4 space-y-3 bg-[#FAF4F0]">
                  <div className="h-16 rounded-xl bg-[#F3E9E3] border border-[#59463C]/15 flex items-center justify-center text-[#332A29] p-3 text-center">
                    <span className="font-playfair font-bold text-sm text-[#59463C]">Rosa-Marfim</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#332A29] text-white text-center font-semibold text-[10px]">
                      Chocolate (Texto)
                    </div>
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#82748E] text-white text-center font-semibold text-[10px]">
                      Lavanda (Tag)
                    </div>
                  </div>
                  <p className="text-[11px] text-[#59463C]/80 leading-relaxed">
                    <strong>Leitura Acolhedora:</strong> Lâminas internas de carrosséis, posts de notas e documentos timbrados.
                  </p>
                </div>

                {/* Combination 3 */}
                <div className="rounded-2xl border border-[#59463C]/15 p-4 space-y-3 bg-[#FAF4F0]">
                  <div className="h-16 rounded-xl bg-[#82748E] flex items-center justify-center text-white p-3 text-center">
                    <span className="font-playfair font-bold text-sm">Lavanda Suave</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#FAF4F0] border border-[#59463C]/15 text-[#332A29] text-center font-semibold text-[10px]">
                      Bege Aveludado
                    </div>
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#C78169] text-white text-center font-semibold text-[10px]">
                      Argila (CTA)
                    </div>
                  </div>
                  <p className="text-[11px] text-[#59463C]/80 leading-relaxed">
                    <strong>Serenidade &amp; Acolhimento:</strong> Posts reflexivos sobre ansiedade, pausas e caixinhas de perguntas.
                  </p>
                </div>

                {/* Combination 4 */}
                <div className="rounded-2xl border border-[#59463C]/15 p-4 space-y-3 bg-[#FAF4F0]">
                  <div className="h-16 rounded-xl bg-[#7E8164] flex items-center justify-center text-white p-3 text-center">
                    <span className="font-playfair font-bold text-sm">Oliva Conexão</span>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#FAF4F0] border border-[#59463C]/15 text-[#332A29] text-center font-semibold text-[10px]">
                      Fundo Claro
                    </div>
                    <div className="flex-1 py-1 px-2 rounded-md bg-[#59463C] text-white text-center font-semibold text-[10px]">
                      Cacau (Título)
                    </div>
                  </div>
                  <p className="text-[11px] text-[#59463C]/80 leading-relaxed">
                    <strong>Equilíbrio &amp; Natureza:</strong> Selos de CRP, ícones botânicos e tópicos de slides de apresentação.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility & Contrast Directives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#59463C] font-semibold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Regras de Contraste e Conforto Visual</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#332A29]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span><strong>Substituição do Preto Puro:</strong> Nunca use preto 100% (#000000). Use sempre <strong>Chocolate Profundo (#332A29)</strong> para reduzir o cansaço ocular dos leitores em mais de 60%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span><strong>Legibilidade do Argila Rosada:</strong> A cor #C78169 deve ser usada em botões com texto branco ou como elemento de destaque. Nunca use como cor de parágrafos longos sobre fundo branco.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#59463C] font-semibold text-sm">
                  <Download className="w-5 h-5 text-[#C78169]" />
                  <span>Exportação de Tokens de Cores</span>
                </div>
                <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed">
                  Baixe a paleta oficial em arquivo JSON ou copie a lista completa de códigos HEX para importar instantaneamente nas ferramentas:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="/brand/paleta-terra-lavanda.json"
                    download="paleta-terra-lavanda-oficial.json"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C] hover:text-white transition-colors text-xs font-semibold"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Baixar Paleta em JSON</span>
                  </a>
                  <button
                    onClick={copyAllHexForCanva}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Todos os Códigos HEX</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SEÇÃO: TIPOGRAFIA & FONTES (COM DOWNLOADS DAS FONTES) */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "typography") && (
          <section id="typography" className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <Type className="w-4 h-4" />
                <span>Tipografia &bull; Expressão &amp; Leitura</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Tipografia &amp; Fontes Oficiais
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                A marca utiliza duas fontes complementares gratuitas do <strong>Google Fonts</strong> (livres para qualquer uso comercial): <strong>Playfair Display</strong> para títulos sofisticados e calorosos, e <strong>Inter</strong> para parágrafos límpidos e alta legibilidade em celulares.
              </p>
            </div>

            {/* Direct Downloads Bar for the Fonts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Font 1: Playfair Display */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#A85D46]/15 text-[#A85D46]">
                      Fonte de Destaques &bull; Serifada
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Google Fonts Grátis
                    </span>
                  </div>

                  <div>
                    <h3 className="font-playfair font-bold text-3xl sm:text-4xl text-[#59463C]">
                      Playfair Display
                    </h3>
                    <p className="text-xs text-[#82748E] mt-0.5">
                      Desenhada por Claus Eggers Sørensen &bull; Licença Open Font License (OFL)
                    </p>
                  </div>

                  {/* Character preview */}
                  <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/10 space-y-2">
                    <p className="font-playfair font-bold text-lg text-[#59463C]">
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                    </p>
                    <p className="font-playfair italic text-base text-[#C78169]">
                      0 1 2 3 4 5 6 7 8 9 &bull; &ldquo;A singularidade de cada história escutada.&rdquo;
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#59463C]/85">
                    <p>
                      <strong>Pesos Oficiais:</strong> Regular (400), Italic (400), SemiBold (600), Bold (700).
                    </p>
                    <p>
                      <strong>Onde Aplicar:</strong> Títulos principais (H1/H2), monograma AC, frases de impacto em carrosséis e citações poéticas.
                    </p>
                  </div>
                </div>

                {/* Download Actions */}
                <div className="pt-4 border-t border-[#59463C]/10 space-y-2">
                  <a
                    href="https://fonts.google.com/download?family=Playfair%20Display"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Pacote de Fontes (ZIP com TTF)</span>
                  </a>

                  <div className="flex gap-2">
                    <a
                      href="https://fonts.google.com/specimen/Playfair+Display"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium"
                    >
                      <span>Ver no Google Fonts</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() =>
                        copySnippet("font-family: 'Playfair Display', serif;", "css-playfair")
                      }
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium cursor-pointer"
                    >
                      {copiedSnippet === "css-playfair" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar CSS</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Font 2: Inter */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#82748E]/15 text-[#82748E]">
                      Fonte de Leitura &bull; Sem Serifa
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Google Fonts Grátis
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-3xl sm:text-4xl text-[#59463C]">
                      Inter
                    </h3>
                    <p className="text-xs text-[#82748E] mt-0.5">
                      Desenhada por Rasmus Andersson &bull; Licença Open Font License (OFL)
                    </p>
                  </div>

                  {/* Character preview */}
                  <div className="p-4 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/10 space-y-2">
                    <p className="font-sans font-medium text-lg text-[#59463C]">
                      Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                    </p>
                    <p className="font-sans text-sm text-[#59463C]/85">
                      0 1 2 3 4 5 6 7 8 9 &bull; Um espaço seguro para falar sobre suas angústias sem pressa.
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#59463C]/85">
                    <p>
                      <strong>Pesos Oficiais:</strong> Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700).
                    </p>
                    <p>
                      <strong>Onde Aplicar:</strong> Parágrafos explicativos, legendas de redes sociais, botões de ação (CTA) e cartões de depoimento.
                    </p>
                  </div>
                </div>

                {/* Download Actions */}
                <div className="pt-4 border-t border-[#59463C]/10 space-y-2">
                  <a
                    href="https://fonts.google.com/download?family=Inter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Pacote de Fontes (ZIP com TTF)</span>
                  </a>

                  <div className="flex gap-2">
                    <a
                      href="https://fonts.google.com/specimen/Inter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium"
                    >
                      <span>Ver no Google Fonts</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => copySnippet("font-family: 'Inter', sans-serif;", "css-inter")}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium cursor-pointer"
                    >
                      {copiedSnippet === "css-inter" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar CSS</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Live Font Tester */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#59463C]/10 pb-4">
                <div>
                  <h3 className="font-playfair font-bold text-xl text-[#59463C] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#C78169]" />
                    <span>Testador Interativo de Tipografia</span>
                  </h3>
                  <p className="text-xs text-[#82748E]">
                    Digite seu próprio texto ou título para testar a renderização nas duas fontes
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#82748E] font-medium">Tamanho:</span>
                  {(["sm", "md", "lg", "xl"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSampleFontSize(size)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        sampleFontSize === size
                          ? "bg-[#59463C] text-white"
                          : "bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10"
                      }`}
                    >
                      {size === "sm" && "P"}
                      {size === "md" && "M"}
                      {size === "lg" && "G"}
                      {size === "xl" && "XG"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input for custom text */}
              <div className="space-y-2">
                <label htmlFor="customSample" className="text-xs font-semibold text-[#59463C] block">
                  Digite uma frase para testar em tempo real:
                </label>
                <input
                  id="customSample"
                  type="text"
                  value={customSampleText}
                  onChange={(e) => setCustomSampleText(e.target.value)}
                  placeholder="Ex: Acolhimento, escuta atenta e respeito ao seu próprio tempo."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#59463C]/20 bg-[#FAF4F0] text-sm text-[#332A29] focus:outline-hidden focus:ring-2 focus:ring-[#C78169]/50"
                />
              </div>

              {/* Live Preview Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {/* Playfair Display Preview */}
                <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 space-y-3">
                  <div className="flex justify-between items-center text-xs text-[#82748E]">
                    <span className="font-semibold text-[#59463C]">Playfair Display (Títulos &amp; Citações)</span>
                    <span>Serifada</span>
                  </div>

                  <div className="space-y-3 py-2">
                    <div>
                      <span className="text-[10px] text-[#82748E] uppercase tracking-wider block mb-1">
                        Bold 700:
                      </span>
                      <p
                        className={`font-playfair font-bold text-[#59463C] leading-snug ${
                          sampleFontSize === "sm"
                            ? "text-base"
                            : sampleFontSize === "md"
                            ? "text-xl"
                            : sampleFontSize === "lg"
                            ? "text-2xl sm:text-3xl"
                            : "text-3xl sm:text-4xl"
                        }`}
                      >
                        {customSampleText || "Acolhimento e respeito ao seu próprio tempo."}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#82748E] uppercase tracking-wider block mb-1">
                        Italic 400 (Expressivo):
                      </span>
                      <p
                        className={`font-playfair italic text-[#C78169] leading-snug ${
                          sampleFontSize === "sm"
                            ? "text-base"
                            : sampleFontSize === "md"
                            ? "text-xl"
                            : sampleFontSize === "lg"
                            ? "text-2xl"
                            : "text-3xl"
                        }`}
                      >
                        {customSampleText || "Acolhimento e respeito ao seu próprio tempo."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Inter Preview */}
                <div className="p-5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 space-y-3">
                  <div className="flex justify-between items-center text-xs text-[#82748E]">
                    <span className="font-semibold text-[#59463C]">Inter (Parágrafos &amp; Leitura Móvel)</span>
                    <span>Sem Serifa</span>
                  </div>

                  <div className="space-y-3 py-2">
                    <div>
                      <span className="text-[10px] text-[#82748E] uppercase tracking-wider block mb-1">
                        Regular 400 (Corpo de Texto):
                      </span>
                      <p
                        className={`font-sans text-[#332A29] leading-relaxed ${
                          sampleFontSize === "sm"
                            ? "text-xs"
                            : sampleFontSize === "md"
                            ? "text-sm"
                            : sampleFontSize === "lg"
                            ? "text-base"
                            : "text-lg"
                        }`}
                      >
                        {customSampleText || "Acolhimento e respeito ao seu próprio tempo."}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#82748E] uppercase tracking-wider block mb-1">
                        SemiBold 600 (Botões &amp; Tópicos):
                      </span>
                      <p
                        className={`font-sans font-semibold text-[#59463C] leading-snug ${
                          sampleFontSize === "sm"
                            ? "text-sm"
                            : sampleFontSize === "md"
                            ? "text-base"
                            : sampleFontSize === "lg"
                            ? "text-lg sm:text-xl"
                            : "text-xl sm:text-2xl"
                        }`}
                      >
                        {customSampleText || "Acolhimento e respeito ao seu próprio tempo."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typographic Scale & Canva Guidelines */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
              <h3 className="font-playfair font-bold text-xl text-[#59463C]">
                Tabela de Hierarquia Tipográfica para Redes Sociais &amp; Canva
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#59463C]/15 text-[#82748E] uppercase tracking-wider text-[11px]">
                      <th className="pb-3">Nível</th>
                      <th className="pb-3">Família Tipográfica</th>
                      <th className="pb-3">Peso</th>
                      <th className="pb-3">Tamanho (Feed)</th>
                      <th className="pb-3">Aplicação Recomendada</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#59463C]/10 text-[#332A29]">
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">H1 &bull; Capa / Título</td>
                      <td className="py-3 font-playfair font-bold">Playfair Display</td>
                      <td className="py-3">Bold (700)</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">42 &ndash; 56 px</td>
                      <td className="py-3 text-[#59463C]/80">Primeira tela do carrossel e capas de vídeos</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">H2 &bull; Subtítulo</td>
                      <td className="py-3 font-playfair italic">Playfair Display</td>
                      <td className="py-3">Italic (400) ou 600</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">24 &ndash; 32 px</td>
                      <td className="py-3 text-[#59463C]/80">Frases reflexivas e subtítulos de apoio</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">H3 &bull; Tópicos de Slide</td>
                      <td className="py-3 font-sans font-semibold">Inter</td>
                      <td className="py-3">SemiBold (600)</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">18 &ndash; 22 px</td>
                      <td className="py-3 text-[#59463C]/80">Listas numeradas e cabeçalhos de cards</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Corpo &bull; Parágrafo</td>
                      <td className="py-3 font-sans">Inter</td>
                      <td className="py-3">Regular (400)</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">14 &ndash; 16 px</td>
                      <td className="py-3 text-[#59463C]/80">Explicações clínicas com entrelinha 1.6</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Selos &bull; CRP / Tags</td>
                      <td className="py-3 font-sans uppercase">Inter</td>
                      <td className="py-3">Medium (500)</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">10 &ndash; 12 px</td>
                      <td className="py-3 text-[#59463C]/80">Número de CRP, arroba do Instagram e tags</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Installation Instructions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-[#59463C]/15 space-y-1.5 text-xs text-[#59463C]/85">
                <strong className="block text-[#59463C] text-sm">1. No Windows</strong>
                Baixe o arquivo ZIP, extraia a pasta, clique duas vezes nos arquivos .ttf e clique em &ldquo;Instalar&rdquo;.
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#59463C]/15 space-y-1.5 text-xs text-[#59463C]/85">
                <strong className="block text-[#59463C] text-sm">2. No Mac (macOS)</strong>
                Abra o arquivo .ttf e clique no botão &ldquo;Instalar Fonte&rdquo; no aplicativo Catálogo de Fontes.
              </div>
              <div className="p-4 bg-white rounded-2xl border border-[#59463C]/15 space-y-1.5 text-xs text-[#59463C]/85">
                <strong className="block text-[#59463C] text-sm">3. No Canva</strong>
                Ambas já estão nativamente disponíveis na barra de fontes do Canva: basta buscar por &ldquo;Playfair Display&rdquo; e &ldquo;Inter&rdquo;.
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SEÇÃO NOVO: DOWNLOADS DE ASSETS & KIT CANVA */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "downloads") && (
          <section id="downloads" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <Download className="w-4 h-4" />
                <span>Central de Arquivos &bull; Kit de Marca</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Downloads de Logos, Fontes &amp; Templates Canva
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Baixe os arquivos vetoriais oficiais, copie a paleta de cores para o <strong>Canva, Figma ou Illustrator</strong> e acesse as fontes tipográficas com 1 clique.
              </p>
            </div>

            {/* Quick Action: Copy All Canva Colors */}
            <div className="bg-gradient-to-r from-[#59463C] to-[#45362E] text-white p-6 sm:p-8 rounded-3xl shadow-warm flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-xs uppercase tracking-widest text-[#C78169] font-semibold">
                  Atalho Rápido para o Canva
                </span>
                <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#FAF4F0]">
                  Copiar Todos os Códigos HEX da Paleta
                </h3>
                <p className="text-xs sm:text-sm text-[#F3E9E3]/80 max-w-xl">
                  Clique para copiar a lista completa dos 8 códigos HEX oficiais para colar diretamente no seu bloco de notas ou nas configurações do seu <strong>Kit de Marca do Canva</strong>.
                </p>
              </div>

              <button
                onClick={copyAllHexForCanva}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C78169] text-white hover:brightness-110 transition-all font-semibold text-xs sm:text-sm whitespace-nowrap shadow-soft cursor-pointer shrink-0"
              >
                {copiedSnippet === "all-canva-hex" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    <span>Cores Copiadas!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Todos os Códigos HEX</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Downloads: Logos & Assets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Asset 1: Logo Dourado Oficial */}
              <div className="bg-white p-5 rounded-2xl border border-[#59463C]/15 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#82748E] font-medium mb-1">
                    <span>Vetor &amp; Imagem</span>
                    <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                      SVG / PNG
                    </span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-[#59463C]">
                    Logotipo Oficial (Terracota / Dourado)
                  </h4>
                  <p className="text-xs text-[#59463C]/75 pt-1">
                    Versão para fundos claros, timbrados e cabeçalho do site.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="/logos/logo-ana-camila-oficial.svg"
                    download="logo-ana-camila-cordeiro-oficial.svg"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar Vetor SVG</span>
                  </a>
                  <a
                    href="/images/logo-psicologa-ana-camila-cordeiro-dourada.webp"
                    download="logo-ana-camila-dourada-alta-resolucao.webp"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Baixar Imagem Alta Resolução</span>
                  </a>
                </div>
              </div>

              {/* Asset 2: Logo Branco Negativo */}
              <div className="bg-white p-5 rounded-2xl border border-[#59463C]/15 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#82748E] font-medium mb-1">
                    <span>Fundo Escuro</span>
                    <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                      SVG / PNG
                    </span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-[#59463C]">
                    Logotipo Negativo (Branco Puro)
                  </h4>
                  <p className="text-xs text-[#59463C]/75 pt-1">
                    Versão transparente para sobrepor capas escuras, vídeos e fotos.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="/logos/logo-ana-camila-branco.svg"
                    download="logo-ana-camila-branco-transparente.svg"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar Vetor SVG</span>
                  </a>
                  <a
                    href="/images/logo-psicologa-ana-camila-cordeiro-branca.webp"
                    download="logo-ana-camila-branca-alta-resolucao.webp"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Baixar Imagem Alta Resolução</span>
                  </a>
                </div>
              </div>

              {/* Asset 3: Monograma AC Circular */}
              <div className="bg-white p-5 rounded-2xl border border-[#59463C]/15 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#82748E] font-medium mb-1">
                    <span>Avatar &bull; Ícone</span>
                    <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">
                      SVG / JSON
                    </span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-[#59463C]">
                    Monograma Circular "AC" + Paleta JSON
                  </h4>
                  <p className="text-xs text-[#59463C]/75 pt-1">
                    Selo circular para WhatsApp, favicon e arquivo de paleta JSON para design tokens.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="/logos/monograma-ac-circulo.svg"
                    download="monograma-ac-circulo.svg"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar Monograma SVG</span>
                  </a>
                  <a
                    href="/brand/paleta-terra-lavanda.json"
                    download="paleta-terra-lavanda-oficial.json"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10 border border-[#59463C]/15 transition-colors text-xs font-medium"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Baixar Paleta Oficial (JSON)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Typography Downloads */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
              <h3 className="font-playfair font-bold text-xl text-[#59463C] flex items-center gap-2">
                <Type className="w-5 h-5 text-[#C78169]" />
                <span>Fontes Oficiais Gratuitas (Google Fonts)</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                As duas fontes da marca são 100% livres e gratuitas para uso comercial no Google Fonts, prontas para instalar no seu computador e usar no Canva:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 flex flex-col justify-between gap-3">
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-[#59463C]">Playfair Display</h4>
                    <span className="text-xs text-[#82748E] block">Fonte de Destaques &amp; Títulos (Serifada)</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://fonts.google.com/download?family=Playfair%20Display"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar ZIP (TTF)</span>
                    </a>
                    <a
                      href="https://fonts.google.com/specimen/Playfair+Display"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-white border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C]/10 transition-colors text-xs font-medium cursor-pointer"
                    >
                      <span>Web</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 flex flex-col justify-between gap-3">
                  <div>
                    <h4 className="font-sans font-bold text-lg text-[#59463C]">Inter</h4>
                    <span className="text-xs text-[#82748E] block">Fonte de Leitura &amp; Textos Corridos (Sem serifa)</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://fonts.google.com/download?family=Inter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar ZIP (TTF)</span>
                    </a>
                    <a
                      href="https://fonts.google.com/specimen/Inter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-white border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C]/10 transition-colors text-xs font-medium cursor-pointer"
                    >
                      <span>Web</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Canva Templates Dimensions Cheat-Sheet */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#59463C]/15 pb-3">
                <div>
                  <h3 className="font-playfair font-bold text-xl text-[#59463C]">
                    Dimensões Pré-Configuradas para Criar no Canva
                  </h3>
                  <p className="text-xs text-[#82748E]">
                    Tamanhos oficiais recomendados para abrir diretamente no Canva
                  </p>
                </div>
                <a
                  href="https://www.canva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C78169] font-semibold hover:underline"
                >
                  <span>Abrir Canva.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#59463C]/15 text-[#82748E] uppercase tracking-wider text-[11px]">
                      <th className="pb-3">Plataforma / Peça</th>
                      <th className="pb-3">Proporção</th>
                      <th className="pb-3">Dimensões Exatas</th>
                      <th className="pb-3">Dica de Design</th>
                      <th className="pb-3">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#59463C]/10 text-[#332A29]">
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Instagram Feed Retrato</td>
                      <td className="py-3">4:5</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">1080 x 1350 px</td>
                      <td className="py-3 text-[#59463C]/80">Ocupa mais tela no celular que o formato quadrado</td>
                      <td className="py-3">
                        <button
                          onClick={() => copySnippet("1080x1350", "d-feed-p")}
                          className="text-xs text-[#59463C] hover:text-[#C78169] font-medium cursor-pointer"
                        >
                          {copiedSnippet === "d-feed-p" ? "Copiado!" : "Copiar px"}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Instagram Stories &bull; Reels &bull; TikTok</td>
                      <td className="py-3">9:16</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">1080 x 1920 px</td>
                      <td className="py-3 text-[#59463C]/80">Área segura centralizada para não cobrir botões</td>
                      <td className="py-3">
                        <button
                          onClick={() => copySnippet("1080x1920", "d-stories")}
                          className="text-xs text-[#59463C] hover:text-[#C78169] font-medium cursor-pointer"
                        >
                          {copiedSnippet === "d-stories" ? "Copiado!" : "Copiar px"}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Miniatura / Thumbnail do YouTube</td>
                      <td className="py-3">16:9</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">1280 x 720 px</td>
                      <td className="py-3 text-[#59463C]/80">Foto da psicóloga à direita e título de 4 palavras à esquerda</td>
                      <td className="py-3">
                        <button
                          onClick={() => copySnippet("1280x720", "d-yt-thumb")}
                          className="text-xs text-[#59463C] hover:text-[#C78169] font-medium cursor-pointer"
                        >
                          {copiedSnippet === "d-yt-thumb" ? "Copiado!" : "Copiar px"}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Banner de Canal do YouTube</td>
                      <td className="py-3">16:9</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">2560 x 1440 px</td>
                      <td className="py-3 text-[#59463C]/80">Zona segura móvel: 1546 x 423 px bem ao centro</td>
                      <td className="py-3">
                        <button
                          onClick={() => copySnippet("2560x1440", "d-yt-banner")}
                          className="text-xs text-[#59463C] hover:text-[#C78169] font-medium cursor-pointer"
                        >
                          {copiedSnippet === "d-yt-banner" ? "Copiado!" : "Copiar px"}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Banner de Perfil do LinkedIn</td>
                      <td className="py-3">4:1</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">1584 x 396 px</td>
                      <td className="py-3 text-[#59463C]/80">Foto à direita para não ser encoberta pela foto de perfil</td>
                      <td className="py-3">
                        <button
                          onClick={() => copySnippet("1584x396", "d-li-banner")}
                          className="text-xs text-[#59463C] hover:text-[#C78169] font-medium cursor-pointer"
                        >
                          {copiedSnippet === "d-li-banner" ? "Copiado!" : "Copiar px"}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-[#59463C]">Carrossel Infinito (5 Lâminas)</td>
                      <td className="py-3">Panorâmico</td>
                      <td className="py-3 font-mono font-bold text-[#C78169]">5400 x 1080 px</td>
                      <td className="py-3 text-[#59463C]/80">Criar em lâmina única e fatiar no app PineTools ou Canva</td>
                      <td className="py-3">
                        <button
                          onClick={() => copySnippet("5400x1080", "d-pan")}
                          className="text-xs text-[#59463C] hover:text-[#C78169] font-medium cursor-pointer"
                        >
                          {copiedSnippet === "d-pan" ? "Copiado!" : "Copiar px"}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SEÇÃO NOVO: MULTICANAL - YOUTUBE, LINKEDIN & TIKTOK */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "multichannel") && (
          <section id="multichannel" className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <Video className="w-4 h-4" />
                <span>Presença Multicanal &bull; Expansão da Marca</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Diretrizes para YouTube, LinkedIn &amp; TikTok
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Como expandir a autoridade da psicóloga <strong>Ana Camila Cordeiro</strong> para além do Instagram, criando <strong>thumbnails que geram cliques no YouTube, banners institucionais para o LinkedIn corporativo e vídeos que retêm atenção no TikTok</strong>.
              </p>
            </div>

            {/* Platform Sub-Tabs */}
            <div className="flex gap-2 p-1.5 bg-white/70 rounded-2xl border border-[#59463C]/15 w-fit">
              {[
                { id: "all", label: "Todas as Plataformas", icon: Globe },
                { id: "youtube", label: "YouTube (Thumbnails & Banners)", icon: Youtube },
                { id: "linkedin", label: "LinkedIn (Autoridade & Banners)", icon: Linkedin },
                { id: "tiktok", label: "TikTok (Vídeos 9:16)", icon: Smartphone },
              ].map((plat) => {
                const Icon = plat.icon;
                return (
                  <button
                    key={plat.id}
                    onClick={() => setChannelFilter(plat.id as any)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      channelFilter === plat.id
                        ? "bg-[#59463C] text-white shadow-2xs"
                        : "text-[#59463C] hover:bg-[#59463C]/10"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{plat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* ========================================================= */}
            {/* SUB-SEÇÃO: YOUTUBE */}
            {/* ========================================================= */}
            {(channelFilter === "all" || channelFilter === "youtube") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      YouTube: Miniaturas (Thumbnails 1280x720) &amp; Banner
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Proporção 16:9 Widescreen
                  </span>
                </div>

                {/* 1. YouTube Thumbnail Blueprint */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                    <span>Modelo de Thumbnail de Alta Conversão (Sem Sensacionalismo)</span>
                    <button
                      onClick={() =>
                        copySnippet(
                          "Título da Thumb: Por que a culpa te paralisa? (Um olhar psicanalítico sobre a cobrança de agradar)",
                          "yt-thumb-copy"
                        )
                      }
                      className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSnippet === "yt-thumb-copy" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar título de exemplo</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Simulated YouTube Thumbnail Canvas */}
                  <div className="aspect-video w-full max-w-2xl mx-auto bg-[#59463C] text-white rounded-3xl p-6 sm:p-8 shadow-warm border-2 border-white/20 relative overflow-hidden flex justify-between items-center group">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C78169]/20 blur-3xl pointer-events-none" />

                    {/* Left text column */}
                    <div className="max-w-[60%] space-y-3 z-10">
                      <span className="inline-block px-3 py-1 rounded-md bg-[#C78169] text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                        Psicologia Feminina
                      </span>

                      <h4 className="font-playfair font-bold text-xl sm:text-3xl lg:text-4xl text-[#FAF4F0] leading-tight drop-shadow-sm">
                        Por que a <br />
                        <span className="text-[#C78169] underline decoration-[#C78169]/60 underline-offset-4">
                          culpa
                        </span>{" "}
                        te paralisa?
                      </h4>

                      <p className="text-xs sm:text-sm text-[#F3E9E3]/85 font-sans font-light hidden sm:block">
                        O medo silencioso de desagradar e a sobrecarga que você carrega.
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-[10px] sm:text-xs text-[#F3E9E3]/70">
                        <span>Ana Camila Cordeiro</span>
                        <span>&bull;</span>
                        <span>CRP 06/162019</span>
                      </div>
                    </div>

                    {/* Right photo portrait */}
                    <div className="relative z-10 w-[35%] flex justify-end">
                      <div className="relative">
                        <img
                          src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                          alt="Ana Camila Cordeiro"
                          className="w-28 sm:w-40 lg:w-48 aspect-square rounded-2xl object-cover border-2 border-[#C78169]/40 shadow-soft"
                        />
                        <div className="absolute -bottom-2 -left-2 bg-[#FAF4F0] text-[#59463C] px-2 py-0.5 rounded-md text-[9px] font-bold shadow-xs">
                          Psicanálise
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Best Practices */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#59463C]/85">
                    <div className="p-3 bg-white rounded-xl border border-[#59463C]/15">
                      <strong className="block text-[#59463C] mb-1">1. Máximo 4 Palavras</strong>
                      Títulos gigantes não cabem na tela do celular. Use apenas o termo que dói (ex: "Culpa", "Esgotamento", "Luto").
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#59463C]/15">
                      <strong className="block text-[#59463C] mb-1">2. Contraste Fundo Cacau</strong>
                      O fundo nobre #59463C se destaca imediatamente no feed claro do YouTube, transmitindo sofisticação.
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#59463C]/15">
                      <strong className="block text-[#59463C] mb-1">3. Olhar Conectado</strong>
                      A foto da psicóloga deve olhar em direção à câmera para gerar empatia e confiança instantânea.
                    </div>
                  </div>
                </div>

                {/* 2. YouTube Banner (2560x1440 com Safe Zone 1546x423) */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                        Banner do Canal do YouTube (2560 x 1440 px)
                      </h4>
                      <p className="text-xs text-[#82748E]">
                        Área de exibição total em TVs (16:9) e área segura para Celulares (centro)
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#C78169] bg-[#C78169]/10 px-2.5 py-1 rounded-md">
                      Safe Zone: 1546 x 423 px
                    </span>
                  </div>

                  {/* Visual Blueprint of YouTube Banner Safe Area */}
                  <div className="w-full bg-[#332A29] rounded-2xl p-3 sm:p-5 relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mb-2">
                      Área total visível apenas em Smart TVs (2560x1440)
                    </span>

                    {/* Central Mobile/Desktop Safe Strip */}
                    <div className="w-full max-w-xl bg-[#59463C] text-white py-5 px-6 rounded-xl border-2 border-dashed border-[#C78169] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-warm">
                      <div className="text-left space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-playfair font-bold text-lg text-[#FAF4F0]">
                            Ana Camila Cordeiro
                          </span>
                          <span className="text-[10px] text-[#C78169] font-mono">CRP 06/162019</span>
                        </div>
                        <p className="text-xs text-[#F3E9E3]/85 font-light">
                          Psicoterapia para Mulheres &bull; Ansiedade, Luto e Psicanálise
                        </p>
                        <span className="text-[10px] text-emerald-300 font-semibold block pt-1">
                          🔔 Vídeos novos todas as terças-feiras às 19h
                        </span>
                      </div>

                      <div className="shrink-0 flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                        <span>Jundiaí &bull; On-line</span>
                      </div>
                    </div>

                    <span className="text-[10px] text-white/40 uppercase tracking-widest mt-2">
                      Mantenha todos os textos dentro do retângulo tracejado
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* SUB-SEÇÃO: LINKEDIN */}
            {/* ========================================================= */}
            {(channelFilter === "all" || channelFilter === "linkedin") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      LinkedIn: Posicionamento Executivo &amp; Banner (1584x396)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Alavanca a formação MBA USP ESALQ
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  Ana Camila possui um diferencial ímpar para o LinkedIn: além de <strong>Psicóloga Clínica</strong>, tem <strong>MBA em Gestão de Pessoas pela USP ESALQ</strong>. Esse canal é ideal para abordar burnout, síndrome da impostora e saúde emocional no trabalho corporativo.
                </p>

                {/* Simulated LinkedIn Banner Canvas */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#59463C] flex items-center justify-between">
                    <span>Modelo de Banner para Perfil do LinkedIn (1584 x 396 px)</span>
                    <button
                      onClick={() =>
                        copySnippet(
                          "Psicóloga Clínica (CRP 06/162019) • MBA em Gestão de Pessoas (USP ESALQ) • Saúde Mental Feminina, Liderança Empática e Prevenção ao Burnout",
                          "li-headline-copy"
                        )
                      }
                      className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {copiedSnippet === "li-headline-copy" ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Título Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar título para perfil</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="aspect-[4/1] w-full bg-[#59463C] text-white rounded-3xl p-6 sm:p-8 shadow-warm border border-white/10 relative overflow-hidden flex items-center justify-between">
                    {/* Left space reserved for the LinkedIn avatar circle */}
                    <div className="hidden sm:block w-32 shrink-0" />

                    {/* Central Brand messaging */}
                    <div className="space-y-2 max-w-xl z-10 text-center sm:text-left">
                      <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-[#C78169] font-semibold uppercase tracking-wider">
                        <span>Psicologia Clínica &bull; Gestão de Pessoas (USP ESALQ)</span>
                      </div>

                      <h4 className="font-playfair font-bold text-lg sm:text-2xl text-[#FAF4F0] leading-snug">
                        Saúde mental não é ausência de estresse. É a capacidade de não se anular.
                      </h4>

                      <p className="text-xs text-[#F3E9E3]/85 hidden sm:block">
                        Atendimento clínico individual (Jundiaí e On-line) &bull; Palestras sobre saúde emocional no trabalho.
                      </p>
                    </div>

                    {/* Right side monogram */}
                    <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-white/10 border border-white/20 text-[#FAF4F0] font-playfair font-bold text-3xl italic">
                      AC
                    </div>
                  </div>
                </div>

                {/* LinkedIn Strategy Tips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-3xl border border-[#59463C]/15 shadow-xs text-xs sm:text-sm">
                  <div className="space-y-2">
                    <h5 className="font-bold text-[#59463C] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Formatos com Maior Alcance no LinkedIn:</span>
                    </h5>
                    <ul className="space-y-1.5 text-[#332A29]/85 text-xs">
                      <li>&bull; <strong>Carrossel em PDF (Slides 1080x1350):</strong> Excelente taxa de retenção.</li>
                      <li>&bull; <strong>Artigos de opinião:</strong> Reflexões sobre a pressão da mulher equilibrar carreira, maternidade e saúde psíquica.</li>
                      <li>&bull; <strong>Estudos de caso éticos (sem nomes):</strong> Como a psicanálise ajuda profissionais de alta performance a destravarem a autocrítica.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-bold text-[#59463C] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Chamadas para Ação no LinkedIn:</span>
                    </h5>
                    <p className="text-xs text-[#332A29]/85 leading-relaxed">
                      "Para conversas sobre psicoterapia individual ou palestras corporativas sobre saúde mental da mulher, envie uma mensagem direta ou acesse o link no perfil."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* SUB-SEÇÃO: TIKTOK */}
            {/* ========================================================= */}
            {(channelFilter === "all" || channelFilter === "tiktok") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      TikTok: Vídeos Curtos Verticais (1080x1920 &bull; 9:16)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Retenção rápida &bull; Conversão em acolhimento
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-xs">
                  {/* Visual Simulation of TikTok video structure */}
                  <div className="flex justify-center">
                    <div className="w-64 h-[440px] bg-[#332A29] rounded-3xl p-3 shadow-warm relative overflow-hidden flex flex-col justify-between border-4 border-[#59463C]">
                      {/* Top bar */}
                      <div className="flex justify-between items-center text-[10px] text-white/60 pt-1">
                        <span>Seguindo</span>
                        <span className="font-bold text-white border-b-2 border-white pb-0.5">Para Você</span>
                        <span>🔍</span>
                      </div>

                      {/* Video center screen */}
                      <div className="my-auto text-center space-y-2 px-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#59463C]/90 border border-white/20 text-[#FAF4F0] text-[10px] font-semibold">
                          Psicóloga Ana Camila Cordeiro
                        </div>
                        <p className="font-playfair font-bold text-lg text-white leading-snug drop-shadow-md">
                          "Se você se sente culpada ao descansar, pare este vídeo agora."
                        </p>
                        <span className="text-[10px] text-[#C78169] bg-white/10 px-2 py-0.5 rounded-md inline-block">
                          Gancho de 2 segundos ⏱️
                        </span>
                      </div>

                      {/* Bottom overlay with text & profile */}
                      <div className="space-y-1.5 pb-2 text-left text-white text-[11px]">
                        <div className="font-semibold text-xs flex items-center gap-1">
                          <span>@anacamilacordeiro.psi</span>
                          <span className="text-[9px] bg-[#C78169] px-1 rounded-sm">CRP</span>
                        </div>
                        <p className="text-[10px] text-white/80 line-clamp-2">
                          Descansar não é uma recompensa que você precisa merecer. É sobrevivência emocional. #psicoterapia #ansiedade
                        </p>
                        <div className="text-[9px] text-white/60">
                          🎵 Áudio original - Ana Camila Cordeiro
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4 Pillars of TikTok for Psychologists */}
                  <div className="space-y-4 my-auto">
                    <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                      Diretrizes para Gravação no TikTok:
                    </h4>

                    <div className="space-y-3 text-xs sm:text-sm text-[#332A29]">
                      <div className="p-3 bg-[#FAF4F0] rounded-xl border border-[#59463C]/10 space-y-1">
                        <strong className="text-[#59463C] block">1. Cenário: A Poltrona de Atendimento</strong>
                        Grave sentada na poltrona do consultório em Jundiaí com a planta ao lado. Evite fundos brancos frios ou com eco.
                      </div>

                      <div className="p-3 bg-[#FAF4F0] rounded-xl border border-[#59463C]/10 space-y-1">
                        <strong className="text-[#59463C] block">2. Gancho Imediato (0 a 2s)</strong>
                        A primeira frase deve verbalizar o que a paciente está sentindo em silêncio. Ex: "Você também sente que está sempre atrasada na própria vida?"
                      </div>

                      <div className="p-3 bg-[#FAF4F0] rounded-xl border border-[#59463C]/10 space-y-1">
                        <strong className="text-[#59463C] block">3. Legendas com Destaque Terracota</strong>
                        Ative as legendas automáticas do CapCut ou TikTok e configure a palavra-chave na cor da marca `#C78169`.
                      </div>

                      <div className="p-3 bg-[#FAF4F0] rounded-xl border border-[#59463C]/10 space-y-1">
                        <strong className="text-[#59463C] block">4. Duração Ideal: 45 a 75 segundos</strong>
                        Vídeos de até 1 minuto com ritmo calmo e pausas reflexivas geram maior retenção e comentários do que vídeos apressados.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB: INSTAGRAM (MANTIDA E INTEGRADA) */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "social") && (
          <section id="social" className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <Instagram className="w-4 h-4" />
                <span>Instagram &bull; Modelos de Feed &amp; Stories</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#59463C]">
                Formatos de Posts e Inspiração Visual
              </h2>
              <p className="text-sm sm:text-base text-[#59463C]/80 max-w-3xl leading-relaxed">
                Inspirado nos maiores perfis de psicologia contemporânea (como a referência <strong>@andressandrade.psi</strong>), combine <strong>posts simples de frase reflexiva, notas em formato post-it, publicações estilo tweet, comparações ("o que parece vs o que é"), caixinhas de perguntas e carrosséis profundos</strong>.
              </p>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-2 bg-white/70 rounded-2xl border border-[#59463C]/15 shadow-2xs">
              <span className="text-xs font-semibold text-[#59463C] px-3 py-1 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C78169]" />
                <span>Filtrar formato:</span>
              </span>
              {[
                { id: "all", label: "Todos os Formatos" },
                { id: "simple", label: "Posts Simples (Frase/Pílula)" },
                { id: "notes", label: "Post-it / Bloco de Notas" },
                { id: "tweet", label: "Estilo Tweet / Notificação" },
                { id: "comparison", label: "Comparativos (O que parece vs O que é)" },
                { id: "qa", label: "Caixinha de Perguntas" },
                { id: "carousel", label: "Carrossel Educativo" },
                { id: "reels", label: "Capas de Reels (9:16)" },
                { id: "bio", label: "Bio & Destaques" },
                { id: "copy", label: "Roteiros de Legenda" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setInstagramFilter(filter.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                    instagramFilter === filter.id
                      ? "bg-[#59463C] text-white shadow-2xs"
                      : "bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* FORMATO 1: POSTS SIMPLES */}
            {(instagramFilter === "all" || instagramFilter === "simple") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Quote className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      1. Post Simples (Frase de Impacto &bull; Post Único)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Proporção ideal: 1080x1350 px (4:5) ou 1080x1080 px (1:1)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Variation A: Fundo Cacau Escuro */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Variação A: Fundo Cacau Nobre (#59463C)</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Nem todo silêncio é calma. Às vezes, é apenas o cansaço de ter que explicar o óbvio para quem não quer ouvir.",
                            "simple-dark"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "simple-dark" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="aspect-[4/5] sm:aspect-square bg-[#59463C] text-white p-8 sm:p-10 rounded-3xl shadow-warm flex flex-col justify-between relative overflow-hidden border border-white/10 group">
                      <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#F3E9E3]/70 uppercase tracking-widest font-sans">
                        <span>Reflexão Clínica</span>
                        <Quote className="w-6 h-6 text-[#C78169]/50" />
                      </div>

                      <div className="space-y-4 my-auto py-4">
                        <p className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FAF4F0] leading-snug">
                          Nem todo silêncio é calma.
                        </p>
                        <p className="font-playfair italic text-lg sm:text-xl text-[#C78169] leading-relaxed">
                          Às vezes, é apenas o cansaço de ter que explicar o óbvio para quem nunca quis escutar.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-[#F3E9E3]/75 font-sans">
                        <span>Ana Camila Cordeiro &bull; CRP 06/162019</span>
                        <span className="text-[#C78169] font-medium">@anacamilacordeiro.psi</span>
                      </div>
                    </div>
                  </div>

                  {/* Variation B: Fundo Bege Claro */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Variação B: Fundo Bege Aveludado (#FAF4F0)</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Descansar antes de chegar ao limite não é luxo. É a condição básica para você não adoecer.",
                            "simple-light"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "simple-light" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="aspect-[4/5] sm:aspect-square bg-[#FAF4F0] text-[#332A29] p-8 sm:p-10 rounded-3xl shadow-warm flex flex-col justify-between relative overflow-hidden border border-[#59463C]/15 group">
                      <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#82748E] uppercase tracking-widest font-sans">
                        <span>Lembrete Importante</span>
                        <Sparkle className="w-5 h-5 text-[#C78169]" />
                      </div>

                      <div className="space-y-3 my-auto py-4">
                        <p className="font-playfair font-bold text-2xl sm:text-3xl lg:text-4xl text-[#59463C] leading-tight">
                          Descansar antes de chegar ao limite não é luxo.
                        </p>
                        <p className="font-sans text-sm sm:text-base text-[#59463C]/85 leading-relaxed">
                          É preservação da sua saúde psíquica. Você não precisa esperar desabar para se dar o direito de parar.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#59463C]/10 flex items-center justify-between text-[11px] text-[#82748E] font-sans">
                        <span>Psicoterapia para Mulheres</span>
                        <span className="font-semibold text-[#59463C]">@anacamilacordeiro.psi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 2: POST-IT / BLOCO DE NOTAS */}
            {(instagramFilter === "all" || instagramFilter === "notes") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <StickyNote className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      2. Formato "Bloco de Notas" / Post-it Suave
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Simula papel timbrado acolhedor
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Note Card 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Bilhete: "4 Verdades que Você Precisa Lembrar"</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Lembrete gentil para a sua semana:\n• Você não tem que dar conta de tudo sozinha.\n• O seu ritmo de cicatrização é só seu.\n• Dizer 'não' para o outro costuma ser um 'sim' para você.\n• Não confunda culpa com responsabilidade.",
                            "note-1"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "note-1" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-[#59463C]/10 p-6 sm:p-8 rounded-3xl flex items-center justify-center">
                      <div className="w-full max-w-sm bg-[#FAF4F0] p-6 sm:p-7 rounded-2xl shadow-warm border border-[#59463C]/15 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#C78169]/30 rounded-xs backdrop-blur-xs border-x border-[#C78169]/40" />

                        <div className="space-y-4 pt-2">
                          <div className="border-b border-[#59463C]/15 pb-2 text-center">
                            <span className="font-playfair font-bold text-base sm:text-lg text-[#59463C] block">
                              Lembrete gentil para a sua semana:
                            </span>
                            <span className="text-[10px] text-[#82748E] font-medium">
                              (Guarde este bilhete se precisar)
                            </span>
                          </div>

                          <ul className="space-y-2.5 text-xs sm:text-sm text-[#332A29]">
                            <li className="flex items-start gap-2">
                              <span className="text-[#C78169] font-bold">&bull;</span>
                              <span>Você não tem que dar conta de tudo sozinha.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#C78169] font-bold">&bull;</span>
                              <span>O seu ritmo de cicatrização é só seu.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#C78169] font-bold">&bull;</span>
                              <span>Dizer "não" para o outro costuma ser um "sim" para você.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#C78169] font-bold">&bull;</span>
                              <span>Não confunda culpa com responsabilidade.</span>
                            </li>
                          </ul>

                          <div className="pt-3 border-t border-[#59463C]/10 flex items-center justify-between text-[10px] text-[#82748E]">
                            <span>Ana Camila Cordeiro</span>
                            <span className="text-[#C78169] font-semibold">Salvar post 🔖</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note Card 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Bilhete: "Pergunta para Levar para a Terapia"</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Pergunta para refletir hoje:\nO que em você continua aceitando migalhas por medo de encarar o silêncio da sua própria companhia?",
                            "note-2"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "note-2" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-[#59463C]/10 p-6 sm:p-8 rounded-3xl flex items-center justify-center">
                      <div className="w-full max-w-sm bg-white p-6 sm:p-7 rounded-2xl shadow-warm border border-[#59463C]/15 relative">
                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#82748E]" />

                        <div className="space-y-4">
                          <span className="text-[10px] uppercase tracking-wider text-[#C78169] font-semibold block">
                            Reflexão para o seu caderno:
                          </span>

                          <p className="font-playfair font-bold text-lg sm:text-xl text-[#59463C] leading-snug">
                            "O que em você continua aceitando migalhas apenas pelo medo de encarar o silêncio da sua própria companhia?"
                          </p>

                          <p className="text-xs text-[#59463C]/80 leading-relaxed italic">
                            O medo da solidão muitas vezes nos faz tolerar relações onde já nos sentimos completamente sós.
                          </p>

                          <div className="pt-3 border-t border-[#59463C]/10 flex items-center justify-between text-[10px] text-[#82748E]">
                            <span>Psicologia &bull; Orientação Psicanalítica</span>
                            <span>Jundiaí &bull; On-line</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 3: ESTILO TWEET / NOTIFICAÇÃO */}
            {(instagramFilter === "all" || instagramFilter === "tweet") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Twitter className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      3. Formato "Estilo Tweet" e Notificação de Celular
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Simula diálogo rápido e pensamento do cotidiano
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  Esse formato gera um dos maiores índices de <strong>compartilhamento nos Stories</strong> porque soa como uma reflexão espontânea dita em voz alta, sem a rigidez de um post formal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tweet Card 1 - Fundo Claro */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Variação A: Tweet Nobre (Fundo Bege)</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Você não é difícil de amar. Você só cansou de implorar pelo básico e, quando começou a colocar limites, chamaram sua postura de frieza ou orgulho.\n\nEstabelecer contornos não é egoísmo; é autopreservação psíquica.",
                            "tweet-1"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "tweet-1" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-warm space-y-4">
                      {/* Author Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                            alt="Ana Camila Cordeiro"
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#C78169]/40 shadow-xs"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-playfair font-bold text-sm sm:text-base text-[#59463C]">
                                Ana Camila Cordeiro
                              </span>
                              <div className="w-4 h-4 rounded-full bg-[#C78169] text-white flex items-center justify-center text-[9px] font-bold">
                                ✓
                              </div>
                            </div>
                            <span className="text-xs text-[#82748E] font-sans">@anacamilacordeiro.psi</span>
                          </div>
                        </div>
                        <Twitter className="w-5 h-5 text-[#82748E]/40" />
                      </div>

                      {/* Tweet Content */}
                      <div className="space-y-3 pt-1">
                        <p className="font-sans text-sm sm:text-base text-[#332A29] leading-relaxed">
                          Você não é difícil de amar. Você só cansou de implorar pelo básico e, quando começou a colocar limites, chamaram sua postura de &ldquo;frieza&rdquo; ou &ldquo;orgulho&rdquo;.
                        </p>
                        <p className="font-playfair italic font-semibold text-sm sm:text-base text-[#C78169] leading-relaxed">
                          Estabelecer contornos não é egoísmo; é autopreservação psíquica.
                        </p>
                      </div>

                      {/* Tweet Meta */}
                      <div className="pt-3 border-t border-[#59463C]/10 text-xs text-[#82748E] flex justify-between items-center">
                        <span>09:42 &bull; 20 de set &bull; Jundiaí/SP</span>
                        <span className="text-[11px] font-mono text-[#59463C]/70">CRP 06/162019</span>
                      </div>

                      {/* Simulated Twitter Metrics */}
                      <div className="pt-2 border-t border-[#59463C]/10 flex items-center justify-between text-xs text-[#82748E]">
                        <span className="flex items-center gap-1.5 hover:text-[#C78169]">
                          <MessageSquare className="w-4 h-4" /> <span>84</span>
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-[#7E8164]">
                          <Repeat className="w-4 h-4" /> <span>412</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-rose-700 font-semibold">
                          <Heart className="w-4 h-4 fill-rose-600 text-rose-600" /> <span>1.8k</span>
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-[#59463C]">
                          <Bookmark className="w-4 h-4" /> <span>940</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Share2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Push Notification / Lembrete iOS */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Variação B: Notificação Push de Cuidado</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "🌿 Lembrete de Bem-Estar Mental:\nVocê não precisa resolver a sua vida inteira antes das 18h de hoje.\nSeus sentimentos são válidos e o seu tempo de cicatrização é sagrado. Respire fundo.",
                            "push-1"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "push-1" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-[#59463C]/10 p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-center min-h-[340px]">
                      {/* Simulated iOS Lockscreen Notification Card */}
                      <div className="w-full max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-warm border border-white/60 space-y-3">
                        <div className="flex items-center justify-between text-xs text-[#82748E]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[#59463C] text-white flex items-center justify-center font-playfair font-bold text-[10px]">
                              AC
                            </div>
                            <span className="font-semibold text-[#59463C]">Lembrete de Bem-Estar</span>
                          </div>
                          <span className="text-[10px] text-[#82748E]">Agora</span>
                        </div>

                        <div className="space-y-1.5 pt-1">
                          <h4 className="font-playfair font-bold text-sm sm:text-base text-[#59463C]">
                            Pausa necessária 🌿
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-[#332A29]/90 leading-relaxed">
                            Você não precisa resolver a sua vida inteira antes das 18h de hoje. Seus sentimentos são válidos e o seu tempo de cicatrização é sagrado. Respire fundo.
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#59463C]/10 flex items-center justify-between text-[10px] text-[#82748E]">
                          <span>Ana Camila Cordeiro &bull; Psicoterapia</span>
                          <span className="text-[#C78169] font-medium">Toque para refletir</span>
                        </div>
                      </div>

                      <span className="text-[11px] text-[#59463C]/70 mt-4 text-center">
                        Ideal para postar como Story matinal ou carrossel com fundo texturizado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 4: COMPARATIVOS (O QUE PARECE VS O QUE É) */}
            {(instagramFilter === "all" || instagramFilter === "comparison") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      4. Comparativos: "O Que Parece" vs "O Que a Psicanálise Enxerga"
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Campeão de salvamentos e compartilhamentos
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  Esse layout desconstrói julgamentos rasos e mostra o olhar profundo da clínica, acolhendo o sintoma da mulher em vez de culpabilizá-la.
                </p>

                {/* Comparison Card 1 */}
                <div className="bg-white rounded-3xl border border-[#59463C]/15 shadow-warm overflow-hidden">
                  <div className="p-5 sm:p-6 bg-gradient-to-r from-[#59463C] to-[#45362E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#C78169] font-semibold block">
                        Modelo de Post Comparativo &bull; 1080x1350 px (4:5)
                      </span>
                      <h4 className="font-playfair font-bold text-lg sm:text-2xl text-[#FAF4F0]">
                        Desconstruindo a Culpa Invisível
                      </h4>
                    </div>

                    <button
                      onClick={() =>
                        copySnippet(
                          "O QUE PARECE VS O QUE A PSICANÁLISE ENXERGA:\n\n• Parece: 'Você é sensível demais e se magoa com tudo'\n↳ É: Hipervigilância desenvolvida para antecipar conflitos e se proteger.\n\n• Parece: 'Você é insegura e precisa de aprovação constante'\n↳ É: Ferida arcaica de desamparo e falta de validação na infância.\n\n• Parece: 'Você não sabe dizer não porque é boba'\n↳ É: Medo inconsciente de abandono condicionado a ter que ser sempre 'útil'.\n\n• Parece: 'Você pensa demais e não relaxa'\n↳ É: A mente tentando controlar o futuro para diminuir a angústia do imprevisível.\n\nAna Camila Cordeiro • CRP 06/162019",
                          "comp-1"
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#C78169] text-white hover:brightness-110 transition-all text-xs font-semibold shrink-0 cursor-pointer"
                    >
                      {copiedSnippet === "comp-1" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-200" />
                          <span>Texto Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Estrutura Completa</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#59463C]/15">
                    {/* Left Column: O que parece */}
                    <div className="p-6 sm:p-8 space-y-4 bg-[#F3E9E3]/40">
                      <div className="flex items-center gap-2 text-rose-800 font-semibold text-sm">
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>O Que Dizem / O Que Parece:</span>
                      </div>

                      <div className="space-y-4 text-xs sm:text-sm text-[#332A29]">
                        <div className="p-3.5 rounded-2xl bg-white/80 border border-rose-200 space-y-1">
                          <strong className="text-rose-900 block font-sans">
                            &ldquo;Você é sensível demais e se magoa por nada&rdquo;
                          </strong>
                          <p className="text-xs text-[#59463C]/75">
                            Rotulam sua percepção como fraqueza ou drama.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/80 border border-rose-200 space-y-1">
                          <strong className="text-rose-900 block font-sans">
                            &ldquo;Você é insegura e precisa de aprovação&rdquo;
                          </strong>
                          <p className="text-xs text-[#59463C]/75">
                            Tratam a busca por segurança como mero capricho.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/80 border border-rose-200 space-y-1">
                          <strong className="text-rose-900 block font-sans">
                            &ldquo;Você não sabe dizer não porque é boba&rdquo;
                          </strong>
                          <p className="text-xs text-[#59463C]/75">
                            Culpam você por assumir o papel de salvadora.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white/80 border border-rose-200 space-y-1">
                          <strong className="text-rose-900 block font-sans">
                            &ldquo;Você pensa demais em tudo que faz&rdquo;
                          </strong>
                          <p className="text-xs text-[#59463C]/75">
                            Ignoram o peso da exaustão mental feminina.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: O que a Psicanálise enxerga */}
                    <div className="p-6 sm:p-8 space-y-4 bg-white">
                      <div className="flex items-center gap-2 text-[#59463C] font-semibold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>O Que a Psicanálise Enxerga:</span>
                      </div>

                      <div className="space-y-4 text-xs sm:text-sm text-[#332A29]">
                        <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 space-y-1">
                          <strong className="text-[#59463C] block font-playfair font-bold">
                            Hipervigilância de Autoproteção
                          </strong>
                          <p className="text-xs text-[#59463C]/85">
                            Seu corpo aprendeu a antecipar o humor do outro para não sofrer rejeição súbita.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 space-y-1">
                          <strong className="text-[#59463C] block font-playfair font-bold">
                            Ferida Arcaica de Validação
                          </strong>
                          <p className="text-xs text-[#59463C]/85">
                            A falta de um olhar acolhedor na infância fez você depender do espelho alheio para existir.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 space-y-1">
                          <strong className="text-[#59463C] block font-playfair font-bold">
                            Amor Condicionado à Servidão
                          </strong>
                          <p className="text-xs text-[#59463C]/85">
                            Você aprendeu muito cedo que só teria afeto se fosse a &ldquo;boazinha&rdquo; que nunca dá trabalho.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#FAF4F0] border border-[#59463C]/15 space-y-1">
                          <strong className="text-[#59463C] block font-playfair font-bold">
                            Tentativa de Conter o Imprevisível
                          </strong>
                          <p className="text-xs text-[#59463C]/85">
                            O pensamento acelerado é um escudo que seu psiquismo criou para não ser pega de surpresa pela dor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF4F0] border-t border-[#59463C]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#59463C] gap-2">
                    <span className="italic">
                      &ldquo;O sintoma não é um erro; é a melhor tentativa que o seu inconsciente encontrou para sobreviver.&rdquo;
                    </span>
                    <span className="font-semibold text-[#C78169] shrink-0">@anacamilacordeiro.psi</span>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 5: CAIXINHA DE PERGUNTAS */}
            {(instagramFilter === "all" || instagramFilter === "qa") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      5. Caixinha de Perguntas (Stories &amp; Reels)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Humaniza o consultório e atrai pacientes ideais
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  Responder caixinhas de perguntas nos Stories demonstra escuta atenta, ética e acolhimento clínico, permitindo que a futura paciente sinta como é o estilo de raciocínio de Ana Camila antes de agendar a primeira sessão.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* QA Story 1: Culpa ao Descansar */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Story 01: Sobre Culpa e Descanso</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Pergunta: 'Sinto muita culpa quando descanso e não estou produzindo. Isso é normal?'\n\nResposta da Psicóloga Ana Camila Cordeiro:\n'É comum na nossa sociedade, mas não é saudável. Essa culpa quase sempre vem de uma infância onde o amor e a validação estavam condicionados ao seu desempenho ou à sua utilidade para os outros.\n\nQuando você para, seu inconsciente interpreta o repouso como um risco de rejeição ou abandono.\n\nNa psicoterapia, trabalhamos para você se descolar da ideia de que seu valor depende do quanto você aguenta carregar.'",
                            "qa-story-1"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "qa-story-1" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar P&amp;R</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Simulated Story Canvas 9:16 */}
                    <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-b from-[#59463C] to-[#3E3029] text-white p-6 rounded-3xl shadow-warm border-2 border-white/20 relative flex flex-col justify-between overflow-hidden">
                      {/* Top Story Bar */}
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          <div className="h-1 flex-1 bg-white rounded-full" />
                          <div className="h-1 flex-1 bg-white/40 rounded-full" />
                          <div className="h-1 flex-1 bg-white/40 rounded-full" />
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <img
                            src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                            alt="Ana Camila Cordeiro"
                            className="w-7 h-7 rounded-full object-cover border border-white/40"
                          />
                          <span className="font-semibold text-white">anacamilacordeiro.psi</span>
                          <span className="text-white/60 text-[10px]">2h</span>
                        </div>
                      </div>

                      {/* Instagram Question Sticker */}
                      <div className="my-auto space-y-4 py-4">
                        <div className="bg-white text-[#332A29] rounded-2xl p-4 shadow-lg border border-white/40 space-y-2">
                          <div className="bg-[#C78169] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg text-center">
                            Pergunta de Seguidora
                          </div>
                          <p className="font-sans font-medium text-xs sm:text-sm text-center text-[#59463C]">
                            &ldquo;Sinto muita culpa quando descanso e não estou produzindo. Isso é normal?&rdquo;
                          </p>
                        </div>

                        {/* Professional Answer Card */}
                        <div className="bg-[#FAF4F0] text-[#332A29] rounded-2xl p-4 shadow-lg border border-[#59463C]/10 space-y-2.5">
                          <p className="font-sans text-xs sm:text-sm text-[#332A29] leading-relaxed">
                            É comum na nossa sociedade, mas <strong>não é saudável</strong>. Essa culpa quase sempre vem de uma história onde o afeto e o valor estavam condicionados ao seu desempenho ou ao cuidado com os outros.
                          </p>
                          <p className="font-playfair italic text-xs sm:text-sm text-[#C78169] leading-relaxed">
                            Na psicoterapia, trabalhamos para você se descolar da ideia de que seu valor depende do quanto você aguenta carregar.
                          </p>
                        </div>
                      </div>

                      {/* Bottom Story Footer */}
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-white/75">
                        <span>Ana Camila Cordeiro &bull; CRP 06/162019</span>
                        <span className="flex items-center gap-1 text-[#C78169] font-semibold">
                          <Send className="w-3 h-3" /> Enviar mensagem
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* QA Story 2: Sobrecarga Corporativa & MBA USP */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#59463C] font-semibold">
                      <span>Story 02: Burnout &amp; Gestão de Pessoas</span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Pergunta: 'Estou sempre fingindo que dou conta de tudo no trabalho. O que fazer?'\n\nResposta da Psicóloga Ana Camila Cordeiro (MBA USP ESALQ):\n'A 'síndrome da mulher forte' no ambiente corporativo costuma ser um atalho perigoso para o burnout.\n\nVocê não precisa ser impecável para ser competente. Quando o trabalho consome a sua capacidade de dormir, de rir ou de ter vida própria, não é dedicação: é violência contra o seu corpo.\n\nAprender a negociar prazos e colocar limites éticos à própria entrega é um processo de autocompreensão.'",
                            "qa-story-2"
                          )
                        }
                        className="text-[11px] text-[#C78169] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippet === "qa-story-2" ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar P&amp;R</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Simulated Story Canvas 9:16 Claro */}
                    <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-b from-[#FAF4F0] to-[#F3E9E3] text-[#332A29] p-6 rounded-3xl shadow-warm border-2 border-[#59463C]/15 relative flex flex-col justify-between overflow-hidden">
                      {/* Top Story Bar */}
                      <div className="space-y-2">
                        <div className="flex gap-1">
                          <div className="h-1 flex-1 bg-[#59463C] rounded-full" />
                          <div className="h-1 flex-1 bg-[#59463C]/30 rounded-full" />
                          <div className="h-1 flex-1 bg-[#59463C]/30 rounded-full" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#59463C]">
                          <img
                            src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                            alt="Ana Camila Cordeiro"
                            className="w-7 h-7 rounded-full object-cover border border-[#59463C]/30"
                          />
                          <span className="font-semibold">anacamilacordeiro.psi</span>
                          <span className="text-[#82748E] text-[10px]">4h</span>
                        </div>
                      </div>

                      {/* Instagram Question Sticker */}
                      <div className="my-auto space-y-4 py-4">
                        <div className="bg-white text-[#332A29] rounded-2xl p-4 shadow-sm border border-[#59463C]/15 space-y-2">
                          <div className="bg-[#82748E] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-lg text-center">
                            Pergunta de Seguidora
                          </div>
                          <p className="font-sans font-medium text-xs sm:text-sm text-center text-[#59463C]">
                            &ldquo;Estou sempre fingindo que dou conta de tudo no trabalho. O que fazer?&rdquo;
                          </p>
                        </div>

                        {/* Professional Answer Card */}
                        <div className="bg-white text-[#332A29] rounded-2xl p-4 shadow-sm border border-[#59463C]/15 space-y-2.5">
                          <span className="text-[10px] font-semibold text-[#C78169] uppercase tracking-wider block">
                            MBA em Gestão de Pessoas (USP ESALQ)
                          </span>
                          <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#332A29]">
                            A <strong>&ldquo;síndrome da mulher forte&rdquo;</strong> no trabalho costuma ser o primeiro passo em direção ao esgotamento físico e mental.
                          </p>
                          <p className="font-playfair italic text-xs sm:text-sm text-[#59463C] leading-relaxed">
                            Quando a entrega profissional consome seu sono e sua dignidade, não é competência: é violação do seu limite psíquico.
                          </p>
                        </div>
                      </div>

                      {/* Bottom Story Footer */}
                      <div className="pt-2 border-t border-[#59463C]/10 flex items-center justify-between text-[10px] text-[#82748E]">
                        <span>Atendimento On-line &amp; Jundiaí</span>
                        <span className="flex items-center gap-1 text-[#C78169] font-semibold">
                          <Send className="w-3 h-3" /> Responder nos Stories
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 6: CARROSSEL EDUCATIVO */}
            {(instagramFilter === "all" || instagramFilter === "carousel") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Presentation className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      6. Carrossel Educativo Completo (5 Lâminas Interativas)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Formato líder em atração de novos seguidores
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  O carrossel educa, aprofunda e guia a paciente da identificação do problema até o desejo de iniciar psicoterapia. Clique nos botões para navegar entre os 5 slides:
                </p>

                {/* Interactive Carousel Box */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-warm space-y-6">
                  {/* Slide Stepper Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#59463C]/10 pb-4">
                    <div className="flex items-center gap-2">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <button
                          key={index}
                          onClick={() => setCarouselSlide(index)}
                          className={`w-8 h-8 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                            carouselSlide === index
                              ? "bg-[#59463C] text-white shadow-xs scale-105"
                              : "bg-[#FAF4F0] text-[#59463C] hover:bg-[#59463C]/10"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      <span className="text-xs text-[#82748E] font-medium ml-2">
                        {carouselSlide === 0 && "Slide 1: Capa com Gancho"}
                        {carouselSlide === 1 && "Slide 2: O Primeiro Sinal"}
                        {carouselSlide === 2 && "Slide 3: O Segundo Sinal"}
                        {carouselSlide === 3 && "Slide 4: O Olhar da Psicanálise"}
                        {carouselSlide === 4 && "Slide 5: Conclusão & Agendamento"}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        copySnippet(
                          "ROTEIRO DO CARROSSEL DE 5 SLIDES:\n\nSLIDE 1 (CAPA):\n'5 Sinais de que você se abandonou para caber na vida de alguém.' (Deslize para ler →)\n\nSLIDE 2:\n'1. Pedir desculpas por expressar o que sente.'\nVocê mede cada palavra com medo de que sua dor cause desconforto no outro.\n\nSLIDE 3:\n'2. Exaustão crônica sem explicação médica.'\nO corpo manifesta em forma de cansaço aquilo que você cala para não gerar atrito.\n\nSLIDE 4:\n'3. O medo constante de ser abandonada se disser NÃO.'\nQuem só é amada enquanto obedece nunca foi amada de verdade: foi apenas conveniente.\n\nSLIDE 5 (CTA):\n'A psicoterapia é o lugar seguro para você resgatar sua própria voz.'\nAtendimento presencial em Jundiaí e on-line para todo o Brasil. Vagas na bio 🔖",
                          "carousel-script"
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-[#59463C] hover:bg-[#59463C] hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                    >
                      {copiedSnippet === "carousel-script" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Roteiro Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Roteiro dos 5 Slides</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Simulated Carousel Canvas */}
                  <div className="max-w-md mx-auto aspect-[4/5] rounded-3xl p-8 sm:p-10 shadow-warm relative overflow-hidden flex flex-col justify-between transition-all duration-300"
                    style={{
                      backgroundColor: carouselSlide === 0 ? "#59463C" : carouselSlide === 4 ? "#45362E" : "#FAF4F0",
                      color: carouselSlide === 0 || carouselSlide === 4 ? "#FAF4F0" : "#332A29",
                    }}
                  >
                    {/* Top Slide Header */}
                    <div className="flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-widest font-sans opacity-80">
                      <span>Psicologia Clínica &bull; Psicanálise</span>
                      <span className="font-mono font-bold px-2 py-0.5 rounded-md bg-black/10">
                        {carouselSlide + 1} / 5
                      </span>
                    </div>

                    {/* Middle Slide Content */}
                    <div className="space-y-4 my-auto py-2">
                      {carouselSlide === 0 && (
                        <div className="space-y-4">
                          <span className="inline-block px-3 py-1 rounded-md bg-[#C78169] text-white text-[11px] font-bold uppercase tracking-wider">
                            Relações &amp; Limites
                          </span>
                          <h4 className="font-playfair font-bold text-2xl sm:text-4xl text-[#FAF4F0] leading-snug">
                            5 Sinais de que você se <span className="text-[#C78169] italic">abandonou</span> para caber na vida de alguém.
                          </h4>
                          <p className="text-xs sm:text-sm text-[#F3E9E3]/85 font-light">
                            Quando o medo da solidão faz você silenciar seus próprios desejos até não se reconhecer mais no espelho.
                          </p>
                        </div>
                      )}

                      {carouselSlide === 1 && (
                        <div className="space-y-4">
                          <span className="text-xs font-bold text-[#C78169] uppercase tracking-wider block">
                            Sinal 01
                          </span>
                          <h4 className="font-playfair font-bold text-xl sm:text-3xl text-[#59463C] leading-snug">
                            Pedir desculpas constantes por expressar o que sente.
                          </h4>
                          <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed font-sans">
                            Você mede cada vírgula antes de falar, temendo ser rotulada como &ldquo;complicada&rdquo; ou &ldquo;dramática&rdquo;. Sua dor é engolida para manter a harmonia da casa.
                          </p>
                        </div>
                      )}

                      {carouselSlide === 2 && (
                        <div className="space-y-4">
                          <span className="text-xs font-bold text-[#82748E] uppercase tracking-wider block">
                            Sinal 02
                          </span>
                          <h4 className="font-playfair font-bold text-xl sm:text-3xl text-[#59463C] leading-snug">
                            Exaustão crônica sem causa física aparente.
                          </h4>
                          <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed font-sans">
                            O corpo somatiza o que a boca cala. Manter um personagem que nunca reclama consome uma quantidade absurda de energia psíquica diária.
                          </p>
                        </div>
                      )}

                      {carouselSlide === 3 && (
                        <div className="space-y-4">
                          <span className="text-xs font-bold text-[#7E8164] uppercase tracking-wider block">
                            O Olhar Clínico
                          </span>
                          <h4 className="font-playfair font-bold text-xl sm:text-3xl text-[#59463C] leading-snug">
                            Quem só te ama enquanto você serve, nunca te amou.
                          </h4>
                          <p className="text-xs sm:text-sm text-[#59463C]/85 leading-relaxed font-sans">
                            Agradar os outros pelo medo do abandono não cria conexão verdadeira: cria servidão emocional. Colocar limites é o primeiro passo para resgatar sua dignidade.
                          </p>
                        </div>
                      )}

                      {carouselSlide === 4 && (
                        <div className="space-y-4 text-center sm:text-left">
                          <span className="inline-block px-3 py-1 rounded-md bg-[#C78169] text-white text-[11px] font-bold uppercase tracking-wider">
                            O Próximo Passo
                          </span>
                          <h4 className="font-playfair font-bold text-2xl sm:text-3xl text-[#FAF4F0] leading-snug">
                            A psicoterapia é o seu espaço para resgatar a própria voz.
                          </h4>
                          <p className="text-xs sm:text-sm text-[#F3E9E3]/85 font-light leading-relaxed">
                            Um lugar confidencial, sem julgamentos e com acolhimento psicanalítico para você voltar a ser prioridade na sua história.
                          </p>
                          <div className="pt-2">
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C78169] text-white font-semibold text-xs shadow-soft">
                              Link de Agendamento na Bio 🌿
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Slide Footer with Next/Prev Navigation */}
                    <div className="pt-4 border-t border-current/15 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold block">Ana Camila Cordeiro</span>
                        <span className="text-[10px] opacity-75">CRP 06/162019 &bull; Jundiaí/SP</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          disabled={carouselSlide === 0}
                          onClick={() => setCarouselSlide((prev) => Math.max(0, prev - 1))}
                          className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors disabled:opacity-30 cursor-pointer"
                          aria-label="Slide anterior"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          disabled={carouselSlide === 4}
                          onClick={() => setCarouselSlide((prev) => Math.min(4, prev + 1))}
                          className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors disabled:opacity-30 cursor-pointer"
                          aria-label="Próximo slide"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 7: CAPAS DE REELS (9:16) */}
            {(instagramFilter === "all" || instagramFilter === "reels") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      7. Capas de Reels (9:16) com Área Segura para o Feed (1:1)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Dimensões: 1080 x 1920 px (Safe zone central: 1080 x 1080 px)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  Para que o feed do Instagram permaneça esteticamente harmonioso e profissional, as capas dos Reels devem concentrar a foto da psicóloga e o título principal <strong>exatamente no quadrado central (1080x1080)</strong>, evitando cortes no feed.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Simulated 9:16 Reel Cover Blueprint */}
                  <div className="aspect-[9/16] max-w-xs mx-auto bg-[#332A29] rounded-3xl p-4 shadow-warm relative overflow-hidden flex flex-col justify-between border-2 border-[#59463C]/20">
                    {/* Top Danger Zone */}
                    <div className="h-20 bg-rose-950/40 rounded-xl border border-dashed border-rose-400/40 flex items-center justify-center p-2 text-center">
                      <span className="text-[10px] text-rose-200">
                        Topo (Cuidado: encoberto por botões de stories/reels)
                      </span>
                    </div>

                    {/* Central 1:1 Safe Zone */}
                    <div className="aspect-square w-full bg-[#59463C] rounded-2xl p-5 border-2 border-emerald-400 shadow-lg flex flex-col justify-between relative overflow-hidden text-white">
                      <div className="absolute top-2 right-2 bg-emerald-600 text-white font-mono text-[9px] px-2 py-0.5 rounded-md font-bold">
                        Feed 1:1 (Safe Zone)
                      </div>

                      <div className="space-y-1 pt-2">
                        <span className="text-[10px] text-[#C78169] font-bold uppercase tracking-wider block">
                          Psicanálise Prática
                        </span>
                        <h4 className="font-playfair font-bold text-lg leading-snug text-[#FAF4F0]">
                          3 Frases de quem foi criada para não incomodar.
                        </h4>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[10px]">
                        <span className="text-white/80">Ana Camila Cordeiro</span>
                        <span className="text-[#C78169] font-mono">CRP 06/162019</span>
                      </div>
                    </div>

                    {/* Bottom Danger Zone */}
                    <div className="h-24 bg-rose-950/40 rounded-xl border border-dashed border-rose-400/40 flex items-center justify-center p-2 text-center">
                      <span className="text-[10px] text-rose-200">
                        Rodapé (Encoberto pelo nome de usuário e legenda)
                      </span>
                    </div>
                  </div>

                  {/* 4 High Performing Reel Hooks Bank */}
                  <div className="space-y-4">
                    <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                      Banco de Ganchos Magnéticos para Capas de Reels
                    </h4>
                    <p className="text-xs text-[#82748E]">
                      Títulos testados em psicologia para colocar na Safe Zone da capa:
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          tag: "Ansiedade & Controle",
                          title: "Você não tem insônia: você tem medo do que vai sentir se silenciar.",
                          hook: "Gancho: 'Por que a sua mente só acelera quando você deita na cama?'",
                          id: "hook-1",
                        },
                        {
                          tag: "Autoestima Feminina",
                          title: "O que o seu perfeccionismo está tentando esconder do mundo?",
                          hook: "Gancho: 'Ser impecável é a defesa de quem morre de medo de ser rejeitada.'",
                          id: "hook-2",
                        },
                        {
                          tag: "Vínculos & Relações",
                          title: "Por que você sempre se apaixona por quem não pode te acolher?",
                          hook: "Gancho: 'A compulsão à repetição na escolha dos nossos parceiros amorosos.'",
                          id: "hook-3",
                        },
                        {
                          tag: "Luto & Transições",
                          title: "A dor de admitir que uma fase da sua vida chegou ao fim.",
                          hook: "Gancho: 'O luto não acontece só quando alguém morre; acontece quando você muda.'",
                          id: "hook-4",
                        },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-2xl bg-white border border-[#59463C]/15 shadow-xs flex items-center justify-between gap-3"
                        >
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-bold text-[#C78169] uppercase tracking-wider">
                              {item.tag}
                            </span>
                            <h5 className="font-playfair font-bold text-sm text-[#59463C]">
                              {item.title}
                            </h5>
                            <p className="text-xs text-[#59463C]/75">{item.hook}</p>
                          </div>

                          <button
                            onClick={() => copySnippet(`${item.title}\n${item.hook}`, item.id)}
                            className="p-2 rounded-xl bg-[#FAF4F0] hover:bg-[#59463C] hover:text-white text-[#59463C] transition-colors shrink-0 cursor-pointer"
                            title="Copiar gancho"
                          >
                            {copiedSnippet === item.id ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 8: BIO & DESTAQUES */}
            {(instagramFilter === "all" || instagramFilter === "bio") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      8. Bio Oficial &amp; Estrutura Estratégica dos Destaques
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Converte visitantes casuais em pacientes agendadas
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Simulated Instagram Bio Header */}
                  <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#59463C]/15 shadow-warm space-y-5">
                    <div className="flex items-center justify-between border-b border-[#59463C]/10 pb-4">
                      <span className="text-xs font-semibold text-[#59463C]">
                        Estrutura Oficial de Bio de Alta Conversão
                      </span>
                      <button
                        onClick={() =>
                          copySnippet(
                            "Ana Camila Cordeiro | Psicóloga Clínica\n@anacamilacordeiro.psi\n\n🌿 Psicóloga Clínica • CRP 06/162019 SP\n🧠 MBA em Gestão de Pessoas (USP ESALQ)\n🛋️ Psicoterapia individual para mulheres: ansiedade, limites e luto\n📍 Atendimentos On-line (Brasil/Exterior) e Presencial em Jundiaí/SP\n👇 Agende sua primeira sessão pelo WhatsApp:",
                            "official-bio"
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer"
                      >
                        {copiedSnippet === "official-bio" ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-300" />
                            <span>Bio Copiada!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Bio Completa</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Profile layout */}
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <img
                          src="/images/psicologa-jundiai-ana-camila-cordeiro-perfil.webp"
                          alt="Ana Camila Cordeiro"
                          className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover p-0.5 border-2 border-[#C78169]"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#59463C] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                          AC
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-playfair font-bold text-base sm:text-lg text-[#59463C] leading-tight">
                          Ana Camila Cordeiro | Psicóloga
                        </h4>
                        <span className="text-xs text-[#82748E] block">@anacamilacordeiro.psi</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF4F0] text-[#59463C] border border-[#59463C]/10 font-mono inline-block">
                          CRP 06/162019 SP
                        </span>
                      </div>
                    </div>

                    {/* Bio text lines */}
                    <div className="space-y-2 text-xs sm:text-sm text-[#332A29] pt-2">
                      <p className="flex items-center gap-2">
                        <span>🌿</span> <span>Psicoterapia de orientação psicanalítica para mulheres</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>🧠</span> <span>MBA em Gestão de Pessoas (USP ESALQ)</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>🛋️</span> <span>Um espaço para falar da sua dor sem pressa de curar</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📍</span> <span>Presencial em Jundiaí &bull; On-line (Brasil e exterior)</span>
                      </p>
                    </div>

                    {/* Simulated Link Button */}
                    <div className="pt-2">
                      <div className="w-full py-2.5 px-4 rounded-xl bg-[#FAF4F0] border border-[#59463C]/15 text-center text-xs font-semibold text-[#59463C] flex items-center justify-center gap-2">
                        <span>🔗</span>
                        <span>anacamilacordeiro.com.br (Agendar Consulta)</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid (5 Destaques Oficiais) */}
                  <div className="space-y-4">
                    <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                      Os 5 Destaques Estratégicos dos Stories
                    </h4>
                    <p className="text-xs text-[#82748E]">
                      Capas minimalistas utilizando a paleta oficial com ícones acolhedores:
                    </p>

                    <div className="grid grid-cols-5 gap-2 sm:gap-3 text-center">
                      {[
                        { name: "Sobre Mim", icon: "AC", color: "#59463C", desc: "Formação, CRP e história pessoal" },
                        { name: "Consultório", icon: "🛋️", color: "#C78169", desc: "Fotos do espaço em Jundiaí" },
                        { name: "On-line", icon: "🌐", color: "#82748E", desc: "Como funciona a sessão por vídeo" },
                        { name: "Dúvidas", icon: "💬", color: "#7E8164", desc: "Duração, frequência e sigilo" },
                        { name: "Depoimentos", icon: "✨", color: "#332A29", desc: "Feedback anônimo e ético" },
                      ].map((highlight, idx) => (
                        <div key={idx} className="space-y-1.5 flex flex-col items-center">
                          <div
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-xs font-playfair font-bold text-sm sm:text-base border-2 border-white ring-2 ring-[#59463C]/20"
                            style={{ backgroundColor: highlight.color }}
                          >
                            {highlight.icon}
                          </div>
                          <span className="text-[11px] font-semibold text-[#59463C] leading-tight block">
                            {highlight.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-white rounded-2xl border border-[#59463C]/15 space-y-2 text-xs text-[#59463C]/85">
                      <strong className="block text-[#59463C]">Dica de Ouro para os Destaques:</strong>
                      <p>
                        No destaque <strong>&ldquo;Dúvidas&rdquo;</strong>, esclareça com clareza: a duração da sessão (50 minutos), a política de sigilo absoluto conforme o Código de Ética do CFP e a emissão de recibo para reembolso em planos de saúde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORMATO 9: ROTEIROS DE LEGENDA */}
            {(instagramFilter === "all" || instagramFilter === "copy") && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#59463C]/15 pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#C78169]" />
                    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#59463C]">
                      9. Roteiros de Legendas Completas (Prontas para Postar)
                    </h3>
                  </div>
                  <span className="text-xs text-[#82748E] font-medium hidden sm:inline">
                    Com gancho inicial, desenvolvimento e CTA ético
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#59463C]/80 leading-relaxed">
                  Três modelos de legendas estruturadas para prender a atenção na primeira linha, conduzir a leitora pela reflexão clínica e convidá-la com elegância para o agendamento:
                </p>

                {/* Sub-tabs for scripts */}
                <div className="flex gap-2 p-1.5 bg-white/70 rounded-2xl border border-[#59463C]/15 w-fit">
                  {[
                    { id: 0, label: "Legenda 1: Sobrecarga & Cansaço" },
                    { id: 1, label: "Legenda 2: Quando Iniciar Psicoterapia" },
                    { id: 2, label: "Legenda 3: Luto & Fim de Ciclos" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveScriptTab(tab.id)}
                      className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                        activeScriptTab === tab.id
                          ? "bg-[#59463C] text-white shadow-2xs"
                          : "text-[#59463C] hover:bg-[#59463C]/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Script Display Card */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#59463C]/15 shadow-warm space-y-4">
                  {activeScriptTab === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#59463C]/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C78169]">
                            Tema: Cansaço Emocional &bull; Mulher Forte
                          </span>
                          <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                            O peso silencioso de ser aquela que &ldquo;aguenta tudo&rdquo;
                          </h4>
                        </div>
                        <button
                          onClick={() =>
                            copySnippet(
                              `Você já percebeu que ninguém pergunta se a "mulher forte" precisa de ajuda?\n\nCriou-se a ilusão de que você é autossuficiente. Que você resolve qualquer problema com um sorriso no rosto e que a sua capacidade de engolir a própria dor é infinita.\n\nMas a verdade é que você está exausta.\n\nExausta de ser o pilar que sustenta todo mundo enquanto ninguém percebe que as suas próprias bases estão tremendo. Na psicanálise, vemos com frequência que essa força desmedida não nasceu por escolha: nasceu como uma defesa na infância para você não ser abandonada ou sobrecarregar quem já estava fragilizado.\n\nVocê não precisa desabar para ter o direito de descansar. O seu valor não está na quantidade de peso que você consegue carregar nas costas.\n\n🛋️ Se você sente que chegou a hora de cuidar de você com a mesma dedicação com que sempre cuidou dos outros, as sessões de psicoterapia acontecem no consultório em Jundiaí e também na modalidade on-line para todo o Brasil.\n\nPara consultar horários disponíveis, o link está na minha bio.\n\n---\n#psicologiafeminina #psicologajundiai #psicanalise #saudemental #acolhimento #terapiaonline #limitesemocionais #anacamilacordeiro`,
                              "caption-1"
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer shrink-0"
                        >
                          {copiedSnippet === "caption-1" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-300" />
                              <span>Legenda Copiada!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Legenda Completa</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-[#332A29] leading-relaxed bg-[#FAF4F0] p-5 rounded-2xl border border-[#59463C]/10 font-sans">
                        <p className="font-bold text-[#59463C]">
                          Você já percebeu que quase ninguém pergunta se a &ldquo;mulher forte&rdquo; precisa de ajuda?
                        </p>
                        <p>
                          Criou-se a ilusão de que você é autossuficiente. Que você resolve qualquer problema sem pestanejar e que a sua capacidade de engolir a própria angústia é infinita. Mas a verdade é que você está exausta.
                        </p>
                        <p>
                          Exausta de ser o pilar que sustenta todo mundo enquanto ninguém percebe que as suas próprias bases estão tremendo. Na clínica psicanalítica, vemos com frequência que essa força extrema quase nunca é uma escolha: é uma defesa arcaica construída para não ser abandonada.
                        </p>
                        <p className="font-playfair italic text-[#C78169] font-semibold">
                          Você não precisa desabar para finalmente se dar o direito de parar.
                        </p>
                        <p className="pt-2 border-t border-[#59463C]/10 text-xs text-[#59463C]">
                          🛋️ <strong>Atendimentos:</strong> Presencial em Jundiaí/SP e On-line para todo o Brasil. Vagas disponíveis pelo link na bio.
                        </p>
                        <p className="text-[11px] text-[#82748E] font-mono">
                          #psicologiafeminina #psicologajundiai #psicanalise #saudemental #limitesemocionais #anacamilacordeiro
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScriptTab === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#59463C]/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C78169]">
                            Tema: Quebra de Tabu &bull; Entrada em Análise
                          </span>
                          <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                            Como saber se é hora de procurar ajuda profissional?
                          </h4>
                        </div>
                        <button
                          onClick={() =>
                            copySnippet(
                              `Muitas pessoas adiam o início da psicoterapia porque acreditam que precisam estar "à beira do abismo" para justificar uma consulta.\n\nMas a terapia não serve apenas para apagar incêndios urgentes.\n\nAlguns sinais sutis indicam que o seu inconsciente está pedindo um espaço de escuta:\n\n1. Você sente uma irritabilidade constante que parece desproporcional aos fatos do dia.\n2. Suas escolhas amorosas ou profissionais parecem repetir sempre o mesmo desfecho doloroso.\n3. Você tem dificuldade em saber o que realmente deseja quando não está tentando agradar os outros.\n4. O corpo começou a dar sinais: insônia, aperto no peito, dores musculares sem explicação médica.\n\nA psicanálise não oferece fórmulas prontas. Ela oferece o rigor de uma escuta que respeita a sua singularidade.\n\n🌿 Quer iniciar esse processo com acolhimento e respeito ao seu tempo? O link para consulta de horários está disponível na bio.\n\n---\n#psicoterapia #saudeemocional #psicanalisecampinas #psicologajundiai #autocuidado #anacamilacordeiro`,
                              "caption-2"
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer shrink-0"
                        >
                          {copiedSnippet === "caption-2" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-300" />
                              <span>Legenda Copiada!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Legenda Completa</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-[#332A29] leading-relaxed bg-[#FAF4F0] p-5 rounded-2xl border border-[#59463C]/10 font-sans">
                        <p className="font-bold text-[#59463C]">
                          Muitas mulheres adiam o início da terapia acreditando que precisam estar &ldquo;à beira do colapso&rdquo; para merecer um espaço de cuidado.
                        </p>
                        <p>
                          Mas a psicoterapia não serve apenas para emergências. Ela serve para quando você percebe que está vivendo no piloto automático, repetindo os mesmos erros e sentindo um vazio silencioso que nenhuma distração consegue preencher.
                        </p>
                        <p className="font-playfair italic text-[#C78169] font-semibold">
                          Dar palavras à dor é o único caminho para que o corpo não precise mais gritar através de sintomas.
                        </p>
                        <p className="pt-2 border-t border-[#59463C]/10 text-xs text-[#59463C]">
                          🌿 <strong>Ana Camila Cordeiro:</strong> Psicóloga Clínica (CRP 06/162019 SP). Informações e agendamento pelo link na bio.
                        </p>
                        <p className="text-[11px] text-[#82748E] font-mono">
                          #psicoterapia #saudeemocional #psicanalise #psicologajundiai #autocuidado #anacamilacordeiro
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScriptTab === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#59463C]/10 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C78169]">
                            Tema: Luto &bull; Fechamento de Ciclos
                          </span>
                          <h4 className="font-playfair font-bold text-lg text-[#59463C]">
                            O luto de quem precisou ir embora ainda amando
                          </h4>
                        </div>
                        <button
                          onClick={() =>
                            copySnippet(
                              `Existe uma dor muito particular em ter que se afastar de alguém ou de um projeto que você ainda ama, apenas porque compreendeu que ficar ali custaria a sua sanidade.\n\nO fim de um ciclo nem sempre é acompanhado de ódio ou mágoa; muitas vezes, é acompanhado de um silêncio triste e de uma saudade do que poderia ter sido.\n\nPermita-se viver esse luto sem pressa de demonstrar que já superou. Toda transição exige tempo de recolhimento para que novas raízes possam brotar.\n\n🛋️ Na clínica, acolhemos essas perdas invisíveis com o respeito e o afeto que a sua história merece. Atendimentos em Jundiaí e on-line. Link na bio.\n\n---\n#lutoemocional #fechamentodeciclos #psicologia #psicanalise #anacamilacordeiro #jundiai`,
                              "caption-3"
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#59463C] text-white hover:bg-[#45362E] transition-colors text-xs font-semibold cursor-pointer shrink-0"
                        >
                          {copiedSnippet === "caption-3" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-300" />
                              <span>Legenda Copiada!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Legenda Completa</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-[#332A29] leading-relaxed bg-[#FAF4F0] p-5 rounded-2xl border border-[#59463C]/10 font-sans">
                        <p className="font-bold text-[#59463C]">
                          Existe uma dor muito particular em ter que se afastar de alguém que você ainda ama, apenas porque entendeu que ficar ali custaria a sua sanidade.
                        </p>
                        <p>
                          O fim de um ciclo nem sempre é acompanhado de raiva: muitas vezes, é acompanhado de um silêncio doloroso e da saudade do que poderia ter sido. Permita-se viver esse processo sem a cobrança de fingir que já superou.
                        </p>
                        <p className="font-playfair italic text-[#C78169] font-semibold">
                          Toda transição requer acolhimento para que novas raízes possam brotar.
                        </p>
                        <p className="pt-2 border-t border-[#59463C]/10 text-xs text-[#59463C]">
                          🛋️ <strong>Sessões de Psicoterapia:</strong> Presencial em Jundiaí e On-line. Link na bio.
                        </p>
                        <p className="text-[11px] text-[#82748E] font-mono">
                          #lutoemocional #fechamentodeciclos #psicologia #psicanalise #anacamilacordeiro #jundiai
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB: APRESENTAÇÕES & SLIDES (16:9) */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "slides") && (
          <section id="slides" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
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
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* TAB: TOM DE VOZ & ÉTICA */}
        {/* ========================================================= */}
        {(activeTab === "overview" || activeTab === "voice") && (
          <section id="voice" className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A85D46] font-semibold">
                <FileCheck2 className="w-4 h-4" />
                <span>Tom de Voz &amp; Comunicação Ética</span>
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

            {/* Vocabulary bank */}
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
