export interface Demand {
  id: string;
  emoji: string;
  title: string;
  experienceHeadline: string;
  shortDesc: string;
  fullDesc: string;
  signs: string[];
  whatsappUrl: string;
}

export type Symptom = Demand;

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

export interface AcquisitionLP {
  id: string;
  slug: string;
  navTitle: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  subheadline: string;
  introText: string;
  signsTitle: string;
  signs: string[];
  approachText: string;
  whatsappMessage: string;
  ctaButtonText: string;
}

export const CONTACT_PHONE = "(11) 94668-0856";
export const WHATSAPP_RAW_PHONE = "5511946680856";
export const WHATSAPP_DEFAULT_MESSAGE = "Olá, Ana Camila! Gostaria de conversar com você sobre atendimento psicológico.";

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || WHATSAPP_DEFAULT_MESSAGE);
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_RAW_PHONE}&text=${text}&type=phone_number&app_absent=0`;
}

export const DEMANDS_DATA: Demand[] = [
  {
    id: "ansiedade",
    emoji: "🌿",
    title: "Ansiedade",
    experienceHeadline: "Quando a mente não desacelera e a preocupação ocupa espaço demais no seu dia a dia.",
    shortDesc: "Compreender como a ansiedade aparece na sua vida e o que pode estar relacionado ao que você sente.",
    fullDesc: "Compreender como a ansiedade aparece na sua vida, no corpo e nas suas escolhas. Na psicoterapia com orientação psicanalítica, investigamos o que pode estar por trás desse estado de alerta constante, criando um espaço seguro para desacelerar, nomear angústias e construir novas formas de viver.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para momentos de ansiedade."),
    signs: [
      "Sensação contínua de pressa ou urgência, mesmo quando não há nada urgente",
      "Sintomas físicos: aperto no peito, respiração curta ou tensão constante",
      "Dificuldade de desacelerar os pensamentos antes de dormir ou ao acordar",
      "Medo frequente de errar, desagradar ou perder o controle"
    ]
  },
  {
    id: "autoestima",
    emoji: "🪞",
    title: "Autoestima e Relação Consigo",
    experienceHeadline: "Quando você se cobra além da conta e percebe que quase sempre deixa a si mesma por último.",
    shortDesc: "Olhar para a forma como você se percebe, se cobra e se relaciona com suas próprias necessidades.",
    fullDesc: "Olhar para a forma como você se percebe, se cobra e se relaciona com suas próprias necessidades. Um processo para silenciar a autocrítica excessiva, desconstruir padrões de exigência e resgatar uma conexão genuína e generosa com quem você é.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para autoestima e relação comigo mesma."),
    signs: [
      "Sensação persistente de que o que você faz nunca é o bastante",
      "Dificuldade em dizer 'não' e receio constante de decepcionar os outros",
      "Hábito de se comparar e desvalorizar as próprias conquistas",
      "Sentimento de culpa ao tentar descansar ou reservar tempo para si"
    ]
  },
  {
    id: "relacionamentos",
    emoji: "🧭",
    title: "Relacionamentos e Vínculos",
    experienceHeadline: "Quando determinadas situações e conflitos parecem se repetir nas suas relações afetivas, familiares ou sociais.",
    shortDesc: "Perceber conflitos, padrões e repetições que atravessam suas relações familiares, amorosas e sociais.",
    fullDesc: "Perceber conflitos, padrões e repetições que atravessam suas relações familiares, amorosas e sociais. A psicoterapia oferece um espaço para refletir sobre seu posicionamento diante dos outros, colocar limites saudáveis e construir vínculos mais maduros e autênticos.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para relacionamentos e vínculos."),
    signs: [
      "Padrões de conflito ou distanciamento que se repetem em diferentes vínculos",
      "Dificuldade em expressar incômodos e colocar limites necessários",
      "Medo de rejeição ou abandono que compromete a sua autonomia",
      "Sensação de assumir responsabilidade pelo bem-estar de todos ao redor"
    ]
  },
  {
    id: "sobrecarga",
    emoji: "⚖️",
    title: "Sobrecarga Emocional",
    experienceHeadline: "Quando a tentativa de dar conta de tudo cobra um preço alto da sua saúde e disposição.",
    shortDesc: "Reconhecer seus limites e compreender porque cuidar de si, descansar ou não dar conta de tudo pode ser tão difícil.",
    fullDesc: "Reconhecer seus limites e compreender porque cuidar de si, descansar ou não dar conta de tudo pode ser tão difícil. Na psicoterapia, criamos um espaço protegido para desarmar a pressão de ser forte o tempo todo e construir uma rotina mais possível e humana.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para sobrecarga emocional."),
    signs: [
      "Sensação de estar no limite físico e mental todos os dias",
      "Cansaço profundo que não desaparece mesmo após momentos de descanso",
      "Irritabilidade involuntária, esquecimentos e perda de foco",
      "Dificuldade de delegar tarefas por medo de que nada saia perfeito"
    ]
  },
  {
    id: "luto",
    emoji: "🕊️",
    title: "Lutos e Perdas",
    experienceHeadline: "Quando uma perda significativa ou o encerramento de um ciclo mudou a forma como você olha para a vida.",
    shortDesc: "Encontrar espaço para identificar, falar e elaborar uma perda e as mudanças e significados que ela trouxe para sua vida.",
    fullDesc: "Encontrar espaço para identificar, falar e elaborar uma perda e as mudanças e significados que ela trouxe para sua vida. Nem toda perda envolve a morte: términos de relacionamento, mudanças bruscas e rupturas de sonhos também demandam luto e escuta singular, sem pressa para 'superar'.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre acolhimento para momentos de luto e perdas."),
    signs: [
      "Sensação de vazio ou desestruturação após uma ruptura ou ausência",
      "Dificuldade de assimilar o fim de uma fase ou vínculo significativo",
      "Sensação de que o mundo seguiu em frente, mas algo em você ainda precisa de tempo",
      "Oscilações entre tristeza profunda, angústia e anestesia emocional"
    ]
  },
  {
    id: "autoconhecimento",
    emoji: "🌱",
    title: "Autoconhecimento",
    experienceHeadline: "Quando você sente que algo não está bem ou deseja se aproximar daquilo que você realmente sente e deseja.",
    shortDesc: "Aproximar-se dos seus sentimentos, desejos, escolhas e daquilo que talvez não seja tão claro sobre si mesma.",
    fullDesc: "Aproximar-se dos seus sentimentos, desejos, escolhas e daquilo que talvez não seja tão claro sobre si mesma. Na escuta de orientação psicanalítica, você encontra um lugar seguro para falar livremente, compreender suas contradições e se apropriar com serenidade da sua própria história.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento psicoterapêutico e autoconhecimento."),
    signs: [
      "Desejo de compreender suas motivações, escolhas e sentimentos mais profundos",
      "Sensação de que você vive no 'piloto automático' e precisa de uma pausa real",
      "Sensação difusa de que algo não vai bem, mesmo sem saber explicar exatamente o quê",
      "Vontade de construir novos caminhos com mais clareza, autonomia e sentido"
    ]
  }
];

export const SYMPTOMS_DATA = DEMANDS_DATA;

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quando devo iniciar a psicoterapia?",
    answer: "Você pode iniciar a psicoterapia quando perceber que algo tem causado sofrimento, se repetido ou despertado em você o desejo de compreender melhor o que está vivendo. Nem sempre é preciso chegar com a questão bem definida ou esperar que o incômodo se torne intenso. Às vezes, perceber que algo não está bem já pode ser um ponto de partida."
  },
  {
    id: "faq-2",
    question: "Qual a frequência e duração das sessões?",
    answer: "As sessões são semanais e têm duração de 50 minutos. A regularidade dos encontros é primordial para estabelecer o vínculo, favorece a continuidade do processo psicoterapêutico e sustenta o trabalho que vai sendo construído ao longo das sessões."
  },
  {
    id: "faq-3",
    question: "Quais questões você atende?",
    answer: "Atendo mulheres adultas que estejam vivenciando questões relacionadas à ansiedade, autoestima, autocobrança, sobrecarga emocional, dificuldades nos relacionamentos e vínculos, luto e diferentes experiências de perda."
  },
  {
    id: "faq-4",
    question: "Como funciona a psicoterapia on-line?",
    answer: "As sessões acontecem por videochamada, em ambiente reservado e com respeito ao sigilo profissional. Você pode realizá-las de onde estiver, desde que tenha privacidade e condições para conversar com tranquilidade e sem interrupções. O processo mantém a mesma seriedade e compromisso ético do atendimento presencial."
  },
  {
    id: "faq-5",
    question: "Como faço para marcar minha primeira sessão?",
    answer: "Para começar, basta entrar em contato pelo botão 'Agendar Consulta' ou no ícone do WhatsApp. A partir daí, alinhamos a modalidade de atendimento (presencial em Jundiaí ou on-line), os horários disponíveis e tudo o que você precisa saber antes do primeiro encontro."
  },
  {
    id: "faq-6",
    question: "Você aceita planos de saúde ou convênios?",
    answer: "Os atendimentos são realizados de forma particular, sem vínculo direto com planos de saúde ou convênios. No primeiro contato, você poderá tirar suas dúvidas sobre valores, recibo para solicitação de reembolso junto ao seu convênio, formas de pagamento e demais informações do atendimento."
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
    text: "A escuta da Ana Camila fez toda a diferença em um momento em que eu me sentia completamente sobrecarregada. Aprendi a me respeitar, entender de onde vinha a minha ansiedade e desacelerar a autocobrança. Sou muito grata pelo cuidado.",
    author: "A. C.",
    age: 35,
    initial: "A"
  },
  {
    id: "t3",
    rating: 5,
    text: "Encontrei na Ana Camila uma profissional acolhedora, humana e com uma fundamentação clínica impecável. A sensibilidade com que ela conduz cada sessão me trouxe segurança para olhar para coisas que eu guardava há anos.",
    author: "L. R.",
    age: 31,
    initial: "L"
  }
];

export const ACQUISITION_LPS: AcquisitionLP[] = [
  {
    id: "ansiedade",
    slug: "ansiedade",
    navTitle: "Ansiedade Feminina",
    seoTitle: "Psicóloga para Ansiedade em Mulheres em Jundiaí & On-line | Ana Camila Cordeiro",
    seoDescription: "Psicoterapia com orientação psicanalítica para mulheres com ansiedade, pensamentos acelerados e autocobrança. Atendimento em Jundiaí e on-line. Agende sua sessão.",
    headline: "Quando a mente não desacelera e a preocupação ocupa espaço demais.",
    subheadline: "Psicoterapia para mulheres que buscam compreender e transformar sua relação com a ansiedade, reencontrando a leveza e a presença no próprio dia a dia.",
    introText: "A ansiedade feminina muitas vezes não é apenas um sintoma isolado: é reflexo de cobranças acumuladas, da pressão de dar conta de tudo e da dificuldade de encontrar pausas reais. A psicoterapia oferece uma escuta cuidadosa para olhar para o que está por trás dessa agitação e construir um caminho mais calmo e possível.",
    signsTitle: "Como a ansiedade costuma se manifestar na sua rotina:",
    signs: [
      "Pensamentos que não param ao deitar, antecipando preocupações do dia seguinte",
      "Sensação frequente de urgência, aperto no peito ou respiração curta",
      "Medo de errar, falhar com alguém ou não atender às expectativas",
      "Sensação de culpa constante quando você tenta descansar ou não fazer nada"
    ],
    approachText: "Com orientação psicanalítica, não buscamos apagar o que você sente com fórmulas prontas, mas compreender a história e os nós que alimentam essa angústia, proporcionando mudanças que permaneçam com você a longo prazo.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Ansiedade e gostaria de conversar sobre atendimento psicológico.",
    ctaButtonText: "Quero conversar sobre minha ansiedade"
  },
  {
    id: "luto",
    slug: "luto",
    navTitle: "Luto e Perdas",
    seoTitle: "Psicóloga Especialista em Luto e Perdas em Jundiaí & On-line | Ana Camila Cordeiro",
    seoDescription: "Acolhimento profissional e sensível para perdas, luto e términos de ciclos com a psicóloga Ana Camila Cordeiro em Jundiaí e on-line. Agende seu acolhimento.",
    headline: "Um lugar de acolhimento para atravessar o luto no seu próprio tempo.",
    subheadline: "Acolhimento psicológico respeitoso para perdas significativas, términos de relacionamento e transições que desestruturam a sua história.",
    introText: "Viver um luto não significa esquecer ou apagar o vínculo com o que se perdeu. É um processo singular que precisa de espaço, validação e paciência para que a dor possa ser acolhida e novos sentidos de vida possam brotar.",
    signsTitle: "O luto pode se manifestar de maneiras profundas:",
    signs: [
      "Sensação de vazio insuportável e dor intensa pela ausência",
      "Dificuldade de reencontrar ânimo para as tarefas mais básicas",
      "Sensação de que as pessoas ao redor esperam que você 'supere logo'",
      "Sentimentos contraditórios de tristeza, culpa, raiva ou amortecimento"
    ],
    approachText: "Com acolhimento especializado em luto e perdas, caminho ao seu lado respeitando suas pausas, sem julgamentos e com todo o cuidado que a sua história merece.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Luto e gostaria de conversar sobre acolhimento psicológico.",
    ctaButtonText: "Quero apoio para o meu momento de perda"
  },
  {
    id: "autoestima",
    slug: "autoestima",
    navTitle: "Autoestima e Autocuidado",
    seoTitle: "Psicóloga para Autoestima e Autocuidado Feminino | Jundiaí & On-line",
    seoDescription: "Psicoterapia para mulheres que enfrentam autocrítica, insegurança e dificuldade em impor limites. Consultório em Jundiaí e atendimento on-line. Agende.",
    headline: "Aprender a cuidar de você com a mesma dedicação com que cuida de tudo.",
    subheadline: "Um espaço seguro para você silenciar a voz da autocrítica, acolher sua história e construir uma relação de respeito e confiança consigo mesma.",
    introText: "Para muitas mulheres, colocar-se em primeiro lugar parece egoísmo. O resultado costuma ser um esgotamento silencioso e uma autoverificação constante. A psicoterapia é um convite para você reencontrar suas próprias necessidades e viver com menos peso.",
    signsTitle: "Sinais de que sua autoestima pede um olhar mais gentil:",
    signs: [
      "Sensação constante de estar devendo ou de não ser boa o suficiente",
      "Dificuldade de se posicionar ou expressar incômodos por receio do conflito",
      "Comparação contínua com a vida e as conquistas de outras pessoas",
      "Necessidade constante de aprovação e validação dos outros"
    ],
    approachText: "A psicoterapia te ajuda a reconhecer os padrões que te aprisionam na autocrítica e a resgatar uma conexão autêntica e afetuosa com a sua própria identidade.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Autoestima e gostaria de conversar sobre atendimento psicológico.",
    ctaButtonText: "Quero cuidar da minha autoestima"
  },
  {
    id: "depressao",
    slug: "depressao",
    navTitle: "Depressão e Desânimo",
    seoTitle: "Psicóloga para Depressão e Desânimo em Jundiaí & On-line | Ana Camila Cordeiro",
    seoDescription: "Psicoterapia com orientação psicanalítica para momentos de desânimo profundo, perda de sentido e depressão. Atendimento acolhedor em Jundiaí e on-line.",
    headline: "Quando a falta de energia e o vazio tornam os dias difíceis de sustentar.",
    subheadline: "Um espaço seguro e sensível para escutar o que a sua dor está tentando dizer, sem julgamentos ou pressões por positividade forçada.",
    introText: "A depressão não é fraqueza nem falta de vontade. É um sofrimento psíquico real que rouba a vitalidade, o prazer nas pequenas coisas e a perspectiva de futuro. Na psicoterapia de orientação psicanalítica, acolhemos esse desânimo, investigando as raízes do sofrimento e reconstruindo aos poucos os laços com a vida.",
    signsTitle: "Como o desânimo e a depressão costumam se manifestar:",
    signs: [
      "Perda gradual do interesse ou prazer em atividades que antes traziam sentido",
      "Cansaço persistente e sensação de que a energia não se recupera após o descanso",
      "Sentimentos de culpa, desesperança ou vontade de se isolar de quem você ama",
      "Dificuldade de vislumbrar um futuro mais leve ou com horizontes possíveis"
    ],
    approachText: "Através de uma escuta atenta e sem pressa, acolhemos aquilo que parece paralisado. Não trabalhamos com metas irreais, mas com o cuidado humano e ético que o seu momento exige.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Depressão e gostaria de conversar sobre atendimento psicológico.",
    ctaButtonText: "Quero conversar sobre meu momento"
  },
  {
    id: "sobrecarga",
    slug: "sobrecarga",
    navTitle: "Burnout e Sobrecarga",
    seoTitle: "Psicóloga para Burnout e Sobrecarga Feminina | Jundiaí & On-line",
    seoDescription: "Psicoterapia para exaustão emocional, sobrecarga de papéis e estresse crônico. Espaço de escuta e cuidado em Jundiaí e on-line. Converse com a psicóloga.",
    headline: "O cansaço de ser forte o tempo todo e tentar dar conta de tudo.",
    subheadline: "Psicoterapia para mulheres que atingiram o limite físico e emocional pela sobrecarga de demandas, cobranças e responsabilidades.",
    introText: "Cuidar da casa, do trabalho, das relações e ainda ter que manter uma postura impecável adoece qualquer mulher. O burnout e a sobrecarga feminina surgem quando as exigências externas e a autocobrança ultrapassam qualquer limite humano. A terapia é a sua pausa inegociável para respirar, reorganizar prioridades e colocar limites saudáveis.",
    signsTitle: "Sinais de que o esgotamento ultrapassou o limite saudável:",
    signs: [
      "Sensação de exaustão contínua, acordando já cansada e sem fôlego mental",
      "Irritabilidade involuntária com pessoas queridas e esquecimentos frequentes",
      "Sentimento de que você vive apenas para apagar incêndios e resolver urgências",
      "Corpo manifestando sinais claros de estresse: dores, insônia e tensão muscular"
    ],
    approachText: "Na psicoterapia, criamos um espaço protegido para desarmar as cobranças, identificar a origem da sobrecarga e resgatar o seu direito de descansar sem carregar o fardo da culpa.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Burnout e Sobrecarga e gostaria de conversar sobre atendimento psicológico.",
    ctaButtonText: "Quero cuidar da minha sobrecarga"
  },
  {
    id: "relacionamentos",
    slug: "relacionamentos",
    navTitle: "Relacionamentos e Vínculos",
    seoTitle: "Psicóloga para Relacionamentos e Vínculos em Jundiaí & On-line | Ana Camila Cordeiro",
    seoDescription: "Psicoterapia para padrões de repetição nos relacionamentos, conflitos e limites afetivos com a psicóloga Ana Camila Cordeiro em Jundiaí e on-line.",
    headline: "Quando as relações despertam angústias e pedem novos posicionamentos.",
    subheadline: "Apoio psicoterapêutico para reconhecer padrões repetitivos, colocar limites saudáveis e construir vínculos mais autênticos e equilibrados.",
    introText: "A forma como nos relacionamos com as outras pessoas muitas vezes reflete histórias, medos e cobranças construídas ao longo de anos. Na psicoterapia de orientação psicanalítica, criamos um espaço seguro para compreender o que se repete nos seus vínculos e resgatar a sua autonomia e voz.",
    signsTitle: "Como as questões relacionais costumam se manifestar:",
    signs: [
      "Sensação de assumir a responsabilidade pelo humor e bem-estar do outro",
      "Medo de desagradar, dizer 'não' ou expressar incômodos necessários",
      "Percepção de que determinados conflitos e escolhas insistem em se repetir",
      "Dificuldade de saber onde terminam as expectativas do outro e começam as suas"
    ],
    approachText: "Com fundamentação psicanalítica, olhamos para a sua singularidade nos relacionamentos, ajudando você a se posicionar com firmeza e afeto diante da própria vida.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Relacionamentos e Vínculos e gostaria de conversar sobre atendimento psicológico.",
    ctaButtonText: "Quero conversar sobre meus relacionamentos"
  },
  {
    id: "autoconhecimento",
    slug: "autoconhecimento",
    navTitle: "Autoconhecimento",
    seoTitle: "Psicoterapia e Autoconhecimento Feminino em Jundiaí & On-line | Ana Camila Cordeiro",
    seoDescription: "Espaço de escuta profunda para autocompreensão, desejos e sentidos de vida com a psicóloga clínica Ana Camila Cordeiro em Jundiaí e on-line.",
    headline: "Aproximar-se do que você realmente sente, deseja e precisa.",
    subheadline: "Um espaço seguro para desacelerar o piloto automático, escutar a si mesma e construir caminhos com mais clareza e sentido.",
    introText: "Muitas vezes, a rotina e as expectativas externas nos afastam do que realmente importa para nós. O autoconhecimento na psicoterapia não é sobre buscar respostas prontas, mas sobre ter um espaço de escuta profunda para compreender sua própria história e fazer escolhas mais conscientes.",
    signsTitle: "Sinais de que você busca mais conexão consigo mesma:",
    signs: [
      "Sensação de viver no piloto automático e não encontrar tempo para se escutar",
      "Desejo de entender suas contradições, medos e verdadeiras motivações",
      "Percepção de que algo não está bem, mesmo sem saber explicar exatamente o quê",
      "Vontade de construir escolhas mais alinhadas à sua identidade e valores"
    ],
    approachText: "Na escuta psicanalítica, você encontra um lugar seguro para falar livremente, sem julgamentos, elaborando o que sente no seu próprio ritmo.",
    whatsappMessage: "Olá, Ana Camila! Vim pela página de Autoconhecimento e gostaria de conversar sobre atendimento psicológico.",
    ctaButtonText: "Quero iniciar meu processo de autoconhecimento"
  }
];
