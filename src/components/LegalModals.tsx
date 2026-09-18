import React from "react";
import { X, Shield, FileText } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-warm border border-border space-y-5 animate-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-accent" />
            <h3 className="font-playfair font-bold text-2xl text-primary">
              Política de Privacidade
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            A privacidade e a confidencialidade são pilares fundamentais do exercício da psicologia e do
            Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005), bem como da Lei Geral de
            Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">1. Coleta e Uso de Informações</h4>
          <p>
            Os dados coletados neste site (como nome e telefone) destinam-se exclusivamente para contato
            inicial, agendamento de consultas e esclarecimento de dúvidas sobre os serviços terapêuticos.
            Nenhum dado é compartilhado com terceiros ou utilizado para fins de marketing sem autorização.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">2. Sigilo Profissional</h4>
          <p>
            Todo o conteúdo compartilhado durante as sessões de psicoterapia é protegido por sigilo absoluto,
            conforme determina o Código de Ética Profissional. O sigilo só poderá ser quebrado em situações
            excepcionais previstas expressamente por lei.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">3. Segurança no Atendimento On-line</h4>
          <p>
            Os atendimentos on-line ocorrem por plataformas que utilizam criptografia de ponta a ponta.
            Recomenda-se que a paciente esteja em local privativo, com fones de ouvido e conexão segura.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">4. Contato do Encarregado</h4>
          <p>
            Para qualquer dúvida ou solicitação sobre o tratamento de seus dados, entre em contato pelo telefone
            (11) 94862-7334.
          </p>
        </div>

        <div className="pt-4 border-t border-border/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg gradient-orange text-orange-foreground font-semibold text-sm shadow-warm"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-card w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-warm border border-border space-y-5 animate-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-accent" />
            <h3 className="font-playfair font-bold text-2xl text-primary">
              Termos de Uso
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Bem-vinda ao site de Ana Camila Cordeiro — Psicóloga Clínica (CRP 06/162019). Ao utilizar
            este site, você concorda com os seguintes termos:
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">1. Natureza Informativa do Site</h4>
          <p>
            O conteúdo deste site tem finalidade informativa e institucional sobre a prática clínica,
            ansiedade feminina e modalidades de atendimento. Ele não substitui consulta ou avaliação clínica
            individualizada.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">2. Situações de Emergência</h4>
          <p>
            Este canal e os agendamentos não são indicados para emergências psicológicas ou psiquiátricas
            graves imediatas. Em situações de crise extrema, procure a Unidade de Pronto Atendimento (UPA),
            ligue 192 (SAMU) ou contate o CVV (Centro de Valorização da Vida) pelo número 188.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">3. Sessões e Cancelamentos</h4>
          <p>
            As condições de reagendamento, faltas e cancelamento de sessões serão devidamente explicadas no
            enquadre terapêutico durante o primeiro contato ou sessão inicial de avaliação.
          </p>
        </div>

        <div className="pt-4 border-t border-border/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg gradient-orange text-orange-foreground font-semibold text-sm shadow-warm"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
