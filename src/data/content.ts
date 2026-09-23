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
    experienceHeadline: "Quando a mente não desacelera, a preocupação ocupa espaço demais e fica difícil simplesmente estar presente.",
    shortDesc: "Pensamentos acelerados, sensação de aperto no peito e a sensação constante de que algo vai dar errado.",
    fullDesc: "A ansiedade se torna pesada quando rouba sua presença e te faz viver no futuro, antecipando problemas e cobrando de si um controle que ninguém pode ter. Na psicoterapia, abrimos um espaço para acolher essas angústias, compreender de onde elas vêm e construir formas mais gentis e possíveis de viver o dia a dia.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para momentos de ansiedade."),
    signs: [
      "Dificuldade de desacelerar os pensamentos antes de dormir ou ao acordar",
      "Sintomas no corpo: aperto no peito, respiração curta ou tensão muscular constante",
      "Medo contínuo de errar, desagradar ou perder o controle",
      "Sensação de urgência permanente, como se sempre houvesse algo pendente"
    ]
  },
  {
    id: "luto",
    emoji: "🕊️",
    title: "Luto e Perdas",
    experienceHeadline: "Quando uma perda muda sua rotina, seus vínculos ou a forma como você enxergava a própria vida.",
    shortDesc: "A dor de uma ausência significativa, o fim de um relacionamento ou uma ruptura profunda na sua história.",
    fullDesc: "Nem toda perda envolve a morte. Fim de ciclos, término de relações, mudanças bruscas e sonhos interrompidos também demandam luto. Dedico parte significativa da minha formação e prática a compreender as singularidades desses processos, oferecendo um acolhimento respeitoso ao seu ritmo, sem pressa para que você 'supere'.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre acolhimento e psicoterapia para perdas e luto."),
    signs: [
      "Sensação de vazio ou desestruturação após uma ruptura ou perda",
      "Dificuldade em assimilar o fim de um ciclo ou a ausência de alguém",
      "Oscilações entre tristeza profunda, anestesia e momentos de angústia",
      "A sensação de que o mundo seguiu em frente, mas algo em você parou"
    ]
  },
  {
    id: "autoestima",
    emoji: "🪞",
    title: "Autoestima e Autocuidado",
    experienceHeadline: "Quando você se cobra demais, se coloca sempre por último ou sente dificuldade em reconhecer suas próprias necessidades.",
    shortDesc: "Insegurança persistente, comparação silenciosa com os outros e a sensação de nunca ser o bastante.",
    fullDesc: "Muitas mulheres aprenderam a cuidar de todos ao seu redor antes de olhar para si mesmas. Isso gera um cansaço silencioso e uma autocrítica dura. A terapia é o seu momento de pausar, reconstruir o vínculo com a sua história e reconhecer o seu valor sem precisar provar nada a ninguém.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para questões de autoestima e autocuidado."),
    signs: [
      "Sensação de que o que você faz nunca é suficiente",
      "Dificuldade em dizer 'não' por medo de rejeição ou culpa",
      "Hábito de se comparar com os outros e se diminuir silenciosamente",
      "Dificuldade de ter momentos de descanso genuíno sem sentir culpa"
    ]
  },
  {
    id: "depressao",
    emoji: "🌧️",
    title: "Depressão",
    experienceHeadline: "Quando o desânimo, a tristeza ou a falta de energia começam a interferir naquilo que antes fazia parte do seu cotidiano.",
    shortDesc: "Sensação prolongada de vazio, perda do prazer nas coisas simples e sensação de peso no corpo.",
    fullDesc: "Diferente de uma tristeza passageira, a depressão afeta a vitalidade e a perspectiva de futuro. Na psicoterapia de orientação psicanalítica, criamos um espaço seguro para escutar essa dor sem julgamentos, entendendo o sentido do que você está sentindo e reconstruindo aos poucos a sua relação com a vida.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para momentos de desânimo e depressão."),
    signs: [
      "Perda de interesse ou prazer por atividades que antes traziam sentido",
      "Sensação constante de cansaço que não passa após o sono",
      "Sentimentos de culpa, desesperança ou isolamento involuntário",
      "Dificuldade para encontrar motivação nas tarefas diárias"
    ]
  },
  {
    id: "sobrecarga",
    emoji: "⚖️",
    title: "Burnout e Sobrecarga",
    experienceHeadline: "Quando a necessidade de dar conta de tudo começa a cobrar um preço emocional.",
    shortDesc: "Exaustão mental e física pelo acúmulo de papéis, responsabilidades e exigências diárias.",
    fullDesc: "Carregar o peso de ser forte o tempo todo e tentar abraçar todas as demandas da família, do trabalho e da vida pessoal esgota qualquer pessoa. A psicoterapia oferece um espaço para desacelerar, nomear os seus limites e encontrar formas mais sustentáveis e humanas de viver.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para sobrecarga emocional e burnout."),
    signs: [
      "Sensação de estar no limite físico e emocional todos os dias",
      "Irritabilidade involuntária, esquecimentos e dificuldade de foco",
      "Falta de tempo para si mesma e sensação de viver apenas para resolver urgências",
      "Corpo manifestando sinais de estresse: dores de cabeça, insônia ou tensão constante"
    ]
  },
  {
    id: "transicoes",
    emoji: "🧭",
    title: "Transições de Vida & Relacionamentos",
    experienceHeadline: "Quando novas fases, términos ou mudanças nos vínculos despertam inseguranças e pedem reorganização interna.",
    shortDesc: "Términos afetivos, mudanças de carreira, novas fases da vida e a necessidade de se reencontrar.",
    fullDesc: "Mudanças significativas nos vínculos e nos ciclos de vida — sejam términos de relacionamento, novos desafios profissionais ou transformações familiares — colocam nossas certezas em suspensão. Na psicoterapia, você encontra um espaço para elaborar o que ficou para trás, reconhecer seus sentimentos e resgatar sua autonomia para construir novos caminhos com serenidade.",
    whatsappUrl: getWhatsAppUrl("Olá, Ana Camila! Gostaria de conversar sobre atendimento para transições de vida e relacionamentos."),
    signs: [
      "Dificuldade em assimilar o fim de um relacionamento ou uma mudança de fase",
      "Insegurança para tomar decisões ou lidar com o medo do desconhecido",
      "Sensação de perda de identidade ao assumir novos papéis e responsabilidades",
      "Conflitos recorrentes nos vínculos e dificuldade em estabelecer limites saudáveis"
    ]
  }
];

export const SYMPTOMS_DATA = DEMANDS_DATA;

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Nunca fiz terapia. Como funciona?",
    answer: "A terapia é um espaço seguro, confidencial e sem julgamentos, onde você pode falar abertamente sobre o que está sentindo e vivendo. Você não precisa ter experiência prévia nem seguir um roteiro pré-determinado: o processo se constrói no diálogo, no seu próprio tempo e com todo o respeito à sua história."
  },
  {
    id: "faq-2",
    question: "Preciso saber exatamente o que está acontecendo comigo?",
    answer: "Não. Muitas mulheres chegam à terapia apenas com uma sensação difusa de incômodo, cansaço ou a percepção de que 'algo não está bem'. Parte fundamental do processo terapêutico é justamente colocar em palavras aquilo que você está vivendo e ir compreendendo, passo a passo, o que está acontecendo."
  },
  {
    id: "faq-3",
    question: "E se eu não souber o que falar?",
    answer: "Isso é absolutamente comum e natural. Você não precisa preparar um discurso nem se preocupar com pausas ou silêncios. Como psicóloga, estou aqui para acolher o seu ritmo e guiar a conversa com perguntas cuidadosas, ajudando você a se sentir confortável e ouvida desde o início."
  },
  {
    id: "faq-4",
    question: "Posso fazer terapia on-line?",
    answer: "Sim! Os atendimentos on-line ocorrem por meio de videochamadas seguras e sigilosas, em ambiente criptografado, para mulheres de qualquer cidade do Brasil ou residentes no exterior. A eficácia e o vínculo do processo on-line são amplamente reconhecidos pelo Conselho Federal de Psicologia e trazem a comodidade do seu próprio espaço."
  },
  {
    id: "faq-5",
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é um primeiro encontro de acolhimento. É o momento de você compartilhar o que te motivou a buscar ajuda, tirar dúvidas sobre o atendimento e conhecer a forma de trabalho. A partir dessa conversa, avaliamos juntas a continuidade do processo terapêutico."
  },
  {
    id: "faq-6",
    question: "Como saber se a terapia é para mim?",
    answer: "Se você percebe que está se cobrando além da conta, sentindo um peso difícil de carregar sozinha, lidando com perdas, ansiedade ou apenas deseja um espaço de escuta profunda para compreender melhor a si mesma, a psicoterapia é para você. Não é preciso esperar a situação se tornar insuportável para se permitir cuidar de si."
  },
  {
    id: "faq-7",
    question: "Como funciona o agendamento?",
    answer: "O primeiro passo é simples e sem burocracia: basta me enviar uma mensagem pelo WhatsApp. Conversaremos brevemente para entender sua disponibilidade, tirar qualquer dúvida e agendar o melhor dia e horário para o nosso primeiro encontro, seja presencial em Jundiaí/SP ou on-line."
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
    seoTitle: "Psicóloga para ansiedade em mulheres | Jundiaí e online",
    seoDescription: "Psicoterapia com orientação psicanalítica para mulheres com pensamentos acelerados, autocobrança e angústia. Atendimento presencial em Jundiaí e on-line.",
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
    id: "autoestima",
    slug: "autoestima",
    navTitle: "Autoestima e Autocuidado",
    seoTitle: "Psicóloga para autoestima feminina | Jundiaí e online",
    seoDescription: "Psicoterapia para mulheres com autocrítica excessiva, dificuldade de dizer não e baixa autoestima. Atendimento em Jundiaí e on-line.",
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
    id: "luto",
    slug: "luto",
    navTitle: "Luto e Perdas",
    seoTitle: "Psicóloga especialista em luto e perdas | Jundiaí e online",
    seoDescription: "Acolhimento profissional para perdas, morte de pessoas queridas, rupturas e fins de ciclo. Atendimento sensível com a psicóloga Ana Camila Cordeiro.",
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
  }
];
