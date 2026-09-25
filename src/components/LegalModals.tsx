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
            A privacidade, a inviolabilidade e a confidencialidade são premissas fundamentais da atuação clínica de
            <strong className="text-primary font-semibold"> Dra. Ana Camila Cordeiro</strong> (CRP 06/162019 SP), em estrita
            observância ao Código de Ética Profissional do Psicólogo (Resolução CFP nº 010/2005) e à
            <strong className="text-primary font-semibold"> Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</strong>.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">1. Identificação do Controlador e Encarregado (DPO)</h4>
          <p>
            O tratamento de dados decorrente das interações neste site é realizado sob responsabilidade da psicóloga clínica
            <strong className="text-foreground"> Ana Camila Cordeiro</strong>. Para quaisquer dúvidas, solicitações ou exercício de
            direitos garantidos pela LGPD, o canal oficial de atendimento é o telefone/WhatsApp <strong className="text-foreground">(11) 94668-0856</strong>.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">2. Princípio da Minimização de Dados (Privacy by Design)</h4>
          <p>
            Este website adota a arquitetura de <em className="text-foreground">Privacidade por Padrão</em>:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>
              <strong className="text-foreground">Zero Armazenamento no Servidor:</strong> As informações inseridas no modal de agendamento (nome, WhatsApp, modalidade e preferências) não são gravadas em nenhum banco de dados ou servidor externo. Elas são processadas exclusivamente na memória volátil do seu navegador para estruturar a mensagem direcionada ao WhatsApp oficial.
            </li>
            <li>
              <strong className="text-foreground">Criptografia de Ponta a Ponta:</strong> Toda a comunicação posterior e o agendamento de sessões ocorrem diretamente pelo aplicativo seguro do WhatsApp, protegido por criptografia de ponta a ponta.
            </li>
          </ul>

          <h4 className="font-semibold text-primary text-base pt-2">3. Bases Legais do Tratamento (Art. 7º e 11 da LGPD)</h4>
          <p>
            O tratamento dos dados de contato preliminares fundamenta-se no <strong>consentimento do titular (Art. 7º, I)</strong> e na
            <strong>execução de procedimentos preliminares a pedido do titular (Art. 7º, V)</strong> para fins exclusivos de contato profissional e agendamento de consultas.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">4. Cookies e Tecnologias de Medição</h4>
          <p>
            Este site utiliza cookies técnicos essenciais (como a memorização de sua preferência de privacidade) e tecnologias de medição de tráfego e conversão (Google Analytics e Meta Pixel). Esses recursos nos ajudam a entender a navegação sem identificar pessoalmente a paciente. Você pode configurar ou bloquear cookies a qualquer momento nas configurações do seu navegador de internet.
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">5. Sigilo Profissional Absoluto e Dados de Saúde</h4>
          <p>
            Nenhum dado sensível de saúde mental é coletado ou exposto através deste site. Todas as questões compartilhadas no espaço de psicoterapia (presencial ou on-line) são resguardadas por sigilo profissional incondicional, conforme determina o artigo 9º do Código de Ética Profissional do Psicólogo e normas do Conselho Federal de Psicologia (CFP).
          </p>

          <h4 className="font-semibold text-primary text-base pt-2">6. Direitos do Titular (Art. 18 da LGPD)</h4>
          <p>
            Você possui o direito de solicitar a qualquer momento a confirmação da existência de tratamento, a correção de dados, a eliminação de dados de contato ou a revogação de consentimento, mediante simples mensagem pelo WhatsApp oficial.
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
