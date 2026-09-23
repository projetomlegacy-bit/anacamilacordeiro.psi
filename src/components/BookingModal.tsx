import React, { useState } from "react";
import { X, Send, MapPin, Monitor, CheckCircle, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/content";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModalidade?: "presencial" | "online";
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialModalidade = "presencial",
}) => {
  const [modalidade, setModalidade] = useState<"presencial" | "online">(initialModalidade);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [periodo, setPeriodo] = useState("manha");
  const [motivo, setMotivo] = useState("Ansiedade");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá, psicóloga Ana Camila! Meu nome é ${nome || "paciente"}.\n` +
      `Gostaria de agendar uma consulta ${modalidade === "presencial" ? "Presencial (Jundiaí)" : "On-line"}.\n` +
      `Principal motivo: ${motivo}.\n` +
      `Melhor período para mim: ${periodo === "manha" ? "Manhã (8h às 12h)" : periodo === "tarde" ? "Tarde (13h às 18h)" : "Flexível"}.\n` +
      (telefone ? `Contato: ${telefone}\n` : "") +
      (mensagem ? `Observações: ${mensagem}` : "");

    const url = getWhatsAppUrl(texto);
    setLastWhatsAppUrl(url);

    // Open safely via secure anchor with rel="noopener noreferrer"
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setEnviado(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-warm border border-border space-y-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-playfair font-bold text-2xl text-primary">
              Agendar Atendimento
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Preencha os dados abaixo para alinharmos o melhor horário.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {enviado ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-playfair font-semibold text-xl text-primary">
              Mensagem iniciada no WhatsApp!
            </h4>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              Caso o aplicativo do WhatsApp não tenha aberto automaticamente, clique no botão abaixo para iniciar a conversa com a mensagem preenchida.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={lastWhatsAppUrl || getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 gradient-orange text-orange-foreground font-semibold px-6 py-2.5 rounded-lg text-sm shadow-warm hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setEnviado(false);
                  onClose();
                }}
                className="border border-border text-foreground px-5 py-2.5 rounded-lg text-sm hover:bg-muted/40 transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Modalidade Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Modalidade de Atendimento
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setModalidade("presencial")}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                    modalidade === "presencial"
                      ? "border-accent bg-accent/15 text-primary font-semibold shadow-soft"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Presencial (Jundiaí)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalidade("online")}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                    modalidade === "online"
                      ? "border-accent bg-accent/15 text-primary font-semibold shadow-soft"
                      : "border-border bg-card text-muted-foreground hover:border-accent/50"
                  }`}
                >
                  <Monitor className="w-4 h-4 text-accent shrink-0" />
                  <span>On-line (Vídeo)</span>
                </button>
              </div>
            </div>

            {/* Nome */}
            <div>
              <label htmlFor="booking-name" className="block text-xs font-semibold text-primary mb-1">
                Seu Nome Completo
              </label>
              <input
                id="booking-name"
                type="text"
                required
                placeholder="Ex: Mariana Silva"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            {/* WhatsApp / Telefone */}
            <div>
              <label htmlFor="booking-phone" className="block text-xs font-semibold text-primary mb-1">
                WhatsApp com DDD
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                placeholder="(11) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              />
            </div>

            {/* Área de Interesse / Motivo */}
            <div>
              <label htmlFor="booking-reason" className="block text-xs font-semibold text-primary mb-1">
                O que você busca trabalhar na terapia?
              </label>
              <select
                id="booking-reason"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
              >
                <option value="Ansiedade">Ansiedade constante ou crises</option>
                <option value="Depressão">Depressão e desânimo prolongado</option>
                <option value="Autocobrança">Autocobrança e perfeccionismo</option>
                <option value="Sobrecarga Emocional">Sobrecarga emocional e burnout</option>
                <option value="Baixa Autoestima">Insegurança e baixa autoestima</option>
                <option value="Luto">Elaboração de luto e perdas</option>
                <option value="Transições">Transições de vida e relacionamentos</option>
                <option value="Outro">Outro motivo</option>
              </select>
            </div>

            {/* Período de preferência */}
            <div>
              <label className="block text-xs font-semibold text-primary mb-1">
                Melhor período para as sessões
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "manha", label: "Manhã" },
                  { id: "tarde", label: "Tarde" },
                  { id: "flexivel", label: "Flexível" },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPeriodo(p.id)}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      periodo === p.id
                        ? "border-accent bg-accent/20 text-primary font-semibold"
                        : "border-border text-muted-foreground hover:bg-muted/30"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 mx-auto mb-1 opacity-70" />
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mensagem Opcional */}
            <div>
              <label htmlFor="booking-msg" className="block text-xs font-semibold text-primary mb-1">
                Observações adicionais (opcional)
              </label>
              <textarea
                id="booking-msg"
                rows={2}
                placeholder="Conte brevemente o que você está vivenciando..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full p-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent resize-none"
              />
            </div>

            {/* Conformidade LGPD & Segurança */}
            <div className="p-3 rounded-xl bg-muted/40 border border-border/50 text-[11px] text-muted-foreground flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-foreground font-semibold">Segurança &amp; LGPD:</strong> Seus dados não são armazenados em nenhum banco de dados ou servidor. O formulário apenas direciona você ao WhatsApp oficial da psicóloga com criptografia ponta a ponta.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-base h-12 gradient-orange text-orange-foreground shadow-warm hover:brightness-110 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Conversar no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
