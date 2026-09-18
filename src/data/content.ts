export interface Symptom {
  id: string;
  emoji: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  signs: string[];
  whatsappUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  age: number;
  initial: string;
}

export const SYMPTOMS_DATA: Symptom[] = [
  {
    id: "ansiedade",
    emoji: "🧠",
    title: "Ansiedade",
    shortDesc: "Preocupação excessiva, pensamentos acelerados e sintomas físicos.",
    fullDesc: "A ansiedade se torna prejudicial quando paralisa ou gera sofrimento contínuo. Sintomas comuns incluem inquietação, aperto no peito, taquicardia, insônia e medo constante do futuro.",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5511948627334&text=Gostaria+de+falar+sobre+Ansiedade.&type=phone_number&app_absent=0",
    signs: [
      "Pensamentos catastróficos e dificuldade de relaxar",
      "Sintomas físicos: palpitações, falta de ar, tensão muscular",
      "Medo desproporcional de errar ou perder o controle",
      "Dificuldade de concentração e sono agitado"
    ]
  },
  {
    id: "depressao",
    emoji: "💙",
    title: "Depressão",
    shortDesc: "Tristeza profunda, desânimo prolongado e perda de interesse nas atividades.",
    fullDesc: "Muito mais que tristeza passageira, a depressão afeta a energia vital, a perspectiva de futuro e a disposição diária. A terapia oferece ferramentas práticas para reencontrar significado e motivação.",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5511948627334&text=Gostaria+de+falar+sobre+Depressão.&type=phone_number&app_absent=0",
    signs: [
      "Sensação constante de vazio ou apatia",
      "Perda de interesse por coisas que antes davam prazer",
      "Cansaço extremo sem esforço físico correspondente",
      "Sentimentos persistentes de culpa ou desesperança"
    ]
  },
  {
    id: "autocobranca",
    emoji: "⚖️",
    title: "Autocobrança",
    shortDesc: "Perfeccionismo excessivo e a sensação de que nunca é o bastante.",
    fullDesc: "O padrão interno rígido e a exigência de perfeição geram constante frustração e medo de falhar. Trabalhamos a autocompaixão e o estabelecimento de metas saudáveis e realistas.",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5511948627334&text=Gostaria+de+falar+sobre+Autocobrança.&type=phone_number&app_absent=0",
    signs: [
      "Dificuldade de celebrar conquistas próprias",
      "Sensação constante de estar devendo algo a si ou aos outros",
      "Medo paralisante de julgamentos e críticas",
      "Exaustão mental por tentar manter tudo sob controle"
    ]
  },
  {
    id: "sobrecarga",
    emoji: "📈",
    title: "Sobrecarga Emocional",
    shortDesc: "Dificuldade em dizer não, acúmulo de funções e esgotamento mental.",
    fullDesc: "Assumir responsabilidades além do limite leva ao estresse crônico e ao burnout. Na psicoterapia, você aprende a estabelecer limites saudáveis e a priorizar sua saúde emocional.",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5511948627334&text=Gostaria+de+falar+sobre+Sobrecarga+Emocional.&type=phone_number&app_absent=0",
    signs: [
      "Dificuldade em dizer 'não' por culpa ou receio de desagradar",
      "Sensação de estar sempre no limite físico e psicológico",
      "Irritabilidade frequente e oscilações bruscas de humor",
      "Falta de tempo e energia para momentos de autocuidado"
    ]
  },
  {
    id: "autoestima",
    emoji: "🪞",
    title: "Baixa Autoestima",
    shortDesc: "Insegurança constante, comparação com os outros e desvalorização pessoal.",
    fullDesc: "Uma relação desgastada consigo mesma impacta relacionamentos, escolhas de carreira e bem-estar. O processo terapêutico fortalece sua autoconfiança e a percepção do seu verdadeiro valor.",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5511948627334&text=Gostaria+de+falar+sobre+Baixa+Autoestima.&type=phone_number&app_absent=0",
    signs: [
      "Comparação frequente e desfavorável com outras pessoas",
      "Necessidade constante de validação e aprovação externa",
      "Dúvida contínua da própria capacidade e mérito",
      "Dificuldade em se expressar com firmeza e autenticidade"
    ]
  },
  {
    id: "luto",
    emoji: "🕊️",
    title: "Luto",
    shortDesc: "Acolhimento da dor da perda e travessia respeitosa de todas as fases do luto.",
    fullDesc: "A perda de alguém significativo, o fim de um ciclo ou rupturas profundas geram uma dor única e desestruturante. A psicoterapia oferece um espaço de escuta sem pressa nem julgamentos, acolhendo suas emoções para ressignificar a dor e reconstruir o sentido da vida.",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=5511948627334&text=Gostaria+de+falar+sobre+Luto.&type=phone_number&app_absent=0",
    signs: [
      "Sensação de vazio profundo e dor constante pela ausência",
      "Dificuldade em assimilar a realidade da perda ou seguir a rotina",
      "Oscilações entre tristeza profunda, culpa, raiva ou anestesia emocional",
      "Sensação de solidão e falta de perspectiva sobre o futuro"
    ]
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quando devo iniciar a terapia?",
    answer: "O melhor momento para começar é quando você percebe que questões emocionais estão impactando sua qualidade de vida, relacionamentos ou desempenho no trabalho/estudos. Não deixe seu incômodo se tornar insuportável para buscar ajuda."
  },
  {
    id: "faq-2",
    question: "Qual a frequência e duração das sessões?",
    answer: "As sessões são semanais, com duração de 50 minutos cada. Essa frequência permite um acompanhamento consistente e a evolução gradual dos seus objetivos terapêuticos."
  },
  {
    id: "faq-3",
    question: "Você atende quais tipos de questões?",
    answer: "Atendo principalmente mulheres e adultos que lidam com Ansiedade, Depressão, Transtorno Bipolar, Borderline, Insegurança, Baixa Autoestima, Autocobrança, Sobrecarga Emocional e outras questões que afetam a saúde mental."
  },
  {
    id: "faq-4",
    question: "Como funciona a terapia online?",
    answer: "A terapia online acontece em plataformas de videochamada seguras e criptografadas, garantindo total privacidade e sigilo profissional. Possui a mesma eficácia científica comprovada da terapia presencial, sendo uma alternativa prática, flexível e no conforto da sua casa."
  },
  {
    id: "faq-5",
    question: "Como faço para marcar minha primeira sessão?",
    answer: "É muito simples: basta clicar no botão 'Agendar Consulta' ou no ícone do WhatsApp para entrar em contato diretamente. Alinharemos juntos a melhor modalidade (presencial ou online) e os horários disponíveis."
  },
  {
    id: "faq-6",
    question: "Você aceita planos de saúde ou convênios?",
    answer: "Os atendimentos são particulares, o que garante um cuidado individualizado, sem limites de tempo ou restrições impostas por convênios. No entanto, forneço recibo detalhado para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    rating: 5,
    text: "Apesar de ter muita dificuldade em me abrir com as pessoas, me senti muito confortável com a psicóloga Ana Camila desde a primeira sessão. Estava passando por um momento difícil, de muitas mudanças na minha vida, e ela me ajudou a lidar com essa fase de forma muito mais saudável.",
    author: "M. S.",
    age: 24,
    initial: "M"
  },
  {
    id: "t2",
    rating: 5,
    text: "A terapia com a Ana Camila foi um divisor de águas na minha vida! Ela é uma psicóloga extremamente atenciosa e competente. Me ajudou a enfrentar a Ansiedade que lutei anos para me livrar. Agradeço imensamente por seu trabalho!",
    author: "A. C.",
    age: 35,
    initial: "A"
  },
  {
    id: "t3",
    rating: 5,
    text: "Encontrei na Ana Camila uma profissional acolhedora, humana e com uma fundamentação científica impecável. Aprendi a lidar com a autocobrança e hoje consigo viver com muito mais leveza e equilíbrio emocional.",
    author: "L. R.",
    age: 31,
    initial: "L"
  }
];

export const CONTACT_PHONE = "(11) 94862-7334";
export const WHATSAPP_RAW_PHONE = "5511948627334";
export const WHATSAPP_DEFAULT_MESSAGE = "Olá, Ana Camila! Gostaria de informações sobre atendimento psicológico para ansiedade e agendamento de consulta.";

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${text}`;
}
