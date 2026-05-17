import type { LanguageOption, Locale, SiteCopy } from '../types/i18n'

export const defaultLocale: Locale = 'pt-BR'

export const languageOptions: LanguageOption[] = [
  { code: 'pt-BR', label: 'Português (Brasil)', shortLabel: 'PT-BR', flag: '🇧🇷' },
  { code: 'es-ES', label: 'Español (España)', shortLabel: 'ES', flag: '🇪🇸' },
  { code: 'en-US', label: 'English (United States)', shortLabel: 'EN-US', flag: '🇺🇸' },
]

export const translations: Record<Locale, SiteCopy> = {
  'pt-BR': {
    brand: 'Zentrus Tecnologia',
    navigation: {
      services: 'Serviços',
      solutions: 'Soluções',
      process: 'Processo',
      quote: 'Orçamento',
    },
    footer: {
      description: 'Sites, sistemas e suporte para empresas.',
      badge: 'Projetos objetivos e bem organizados',
    },
    common: {
      requestQuote: 'Solicitar orçamento',
      askProposal: 'Pedir proposta',
      seeAllServices: 'Ver todos os serviços',
      seeWhatICanBuild: 'Ver o que posso criar',
      backHome: 'Voltar para a home',
    },
    languageSelector: {
      label: 'Selecionar idioma',
    },
    hero: {
      eyebrow: 'Sites profissionais para empresas',
      title: 'Seu site precisa gerar confiança antes de pedir um clique.',
      copy: 'A Zentrus Tecnologia cria sites, páginas de venda e sistemas simples para empresas que querem aparecer melhor, explicar seus serviços com clareza e receber pedidos de orçamento sem depender de improviso.',
      primaryAction: 'Quero pedir um orçamento',
      secondaryAction: 'Ver o que posso criar',
      proofAria: 'Diferenciais principais',
      showcaseAria: 'Prévia de site profissional',
      browserPath: 'zentrus.dev/orcamento',
      miniLabel: 'Página pronta para vender',
      showcaseTitle: 'Transforme visitas em conversas comerciais.',
      showcaseText: 'Oferta clara, serviços organizados, prova de confiança e chamada para contato.',
      leadsLabel: 'Leads captados',
      leadsValue: '32',
      showcaseItems: [
        'Home estratégica',
        'Formulário conectado',
        'Layout responsivo',
        'Suporte pós-entrega',
      ],
    },
    proofPoints: [
      'Site responsivo para celular, tablet e computador',
      'Formulário de orçamento conectado ao seu email',
      'Publicação, ajustes e suporte para você não ficar sozinho',
    ],
    resultMetrics: [
      {
        value: '24h',
        label: 'para receber um primeiro retorno após o pedido',
      },
      {
        value: '3x',
        label: 'mais clareza para apresentar serviços e fechar contatos',
      },
      {
        value: '100%',
        label: 'pensado para a realidade da sua empresa',
      },
    ],
    why: {
      eyebrow: 'Por que investir',
      title: 'Um bom site trabalha como uma primeira reunião bem feita.',
      description:
        'Ele mostra quem você é, organiza suas ofertas, antecipa dúvidas e facilita o contato de quem já está procurando uma solução.',
    },
    homeServices: {
      eyebrow: 'Serviços',
      title: 'O que eu posso construir para sua empresa.',
      description:
        'Cada projeto pode começar pequeno e evoluir conforme sua empresa ganha clareza, público e necessidade de novas funcionalidades.',
    },
    homeSolutions: {
      eyebrow: 'Soluções',
      title: 'Escolha o tipo de projeto que combina com o seu momento.',
    },
    homeProcess: {
      eyebrow: 'Processo',
      title: 'Do primeiro contato até o site publicado.',
      description:
        'O caminho é organizado para você saber o que está sendo feito, o que falta decidir e quando o projeto fica pronto para ir ao ar.',
    },
    servicesPage: {
      hero: {
        eyebrow: 'Serviços',
        title: 'Serviços digitais para sua empresa vender e operar melhor.',
        description:
          'Aqui ficam as possibilidades principais de projeto. Você pode contratar algo simples, como um site institucional, ou evoluir para páginas de venda, sistemas e suporte técnico.',
      },
      noteTitle: 'Comece pelo essencial.',
      noteText:
        'Depois o projeto pode receber novas páginas, formulários, integrações e banco de dados.',
      section: {
        eyebrow: 'O que posso criar',
        title: 'Escolha o serviço que mais combina com a sua necessidade atual.',
        description:
          'Se ainda não souber exatamente qual caminho seguir, o pedido de orçamento ajuda a entender o melhor formato.',
      },
      ctaTitle: 'Tem uma ideia de site ou sistema?',
      ctaText:
        'Envie uma descrição do que você quer criar e eu ajudo a transformar isso em um escopo claro.',
    },
    solutionsPage: {
      hero: {
        eyebrow: 'Soluções',
        title: 'Projetos organizados pelo momento da sua empresa.',
        description:
          'Nem todo negócio precisa começar com um sistema completo. Por isso as soluções são separadas por objetivo: presença, conversão ou operação.',
      },
      checklist: [
        'Escopo claro antes de começar',
        'Projeto pensado para publicar sem complicação',
        'Base preparada para crescer quando fizer sentido',
      ],
      section: {
        eyebrow: 'Formatos',
        title: 'Escolha uma direção inicial para a proposta.',
        description:
          'Os formatos ajudam a definir o tamanho do projeto. O escopo final pode ser ajustado conforme sua necessidade real.',
      },
      comparison: {
        eyebrow: 'Como decidir',
        title: 'Uma escolha simples para não inflar o projeto antes da hora.',
      },
      comparisonItems: [
        {
          title: 'Preciso aparecer melhor',
          text: 'Comece pelo projeto Presença, com uma home profissional e contato claro.',
        },
        {
          title: 'Quero receber mais pedidos',
          text: 'Use Conversão, com formulário, email de confirmação e copy mais direta.',
        },
        {
          title: 'Tenho processo para organizar',
          text: 'Vá para Operação, com backend, integrações e base para banco de dados.',
        },
      ],
      ctaTitle: 'Quer descobrir qual solução faz sentido?',
      ctaText: 'Conte o objetivo da sua empresa e eu retorno com uma sugestão de caminho.',
    },
    processPage: {
      hero: {
        eyebrow: 'Processo',
        title: 'Um processo claro evita retrabalho e deixa o projeto mais leve.',
        description:
          'A construção é dividida em etapas para você saber o que precisa aprovar, o que está sendo desenvolvido e quando o site pode ir para o ar.',
      },
      noteTitle: 'Transparência no caminho.',
      noteText: 'Menos surpresa, mais clareza sobre escopo, prazo e prioridades.',
      section: {
        eyebrow: 'Etapas',
        title: 'Do primeiro contato até a publicação.',
        description: 'Cada etapa tem um objetivo simples: entender, propor, criar e colocar no ar.',
      },
      delivery: {
        eyebrow: 'Durante o projeto',
        title: 'Você acompanha o que está sendo feito sem precisar entender de código.',
      },
      deliveryItems: [
        {
          title: 'Briefing objetivo',
          text: 'As primeiras informações definem oferta, público, páginas e funcionalidades.',
        },
        {
          title: 'Ajustes com direção',
          text: 'As mudanças são feitas com foco em clareza, conversão e experiência do cliente.',
        },
        {
          title: 'Entrega orientada',
          text: 'Você recebe o projeto com explicação sobre publicação, formulário e próximos passos.',
        },
      ],
      ctaTitle: 'Quer iniciar com um escopo bem definido?',
      ctaText: 'Envie o que você tem em mente e eu retorno com uma proposta organizada.',
    },
    quotePage: {
      hero: {
        eyebrow: 'Orçamento',
        title: 'Solicite uma proposta para seu site, sistema ou suporte.',
        description:
          'Quanto mais claro for o pedido, melhor consigo entender o escopo. Mas não precisa estar perfeito: descreva sua ideia com suas palavras.',
      },
      noteTitle: 'O que enviar?',
      noteText: 'Tipo de empresa, objetivo do site, páginas desejadas e exemplos de funcionalidades.',
    },
    notFound: {
      eyebrow: 'Página não encontrada',
      title: 'Essa página não existe.',
      description: 'O endereço pode ter mudado ou sido digitado incorretamente.',
    },
    quoteForm: {
      eyebrow: 'Pedido de orçamento',
      title: 'Me conte o que você quer vender, divulgar ou organizar.',
      description:
        'Descreva sua ideia em poucas linhas. Depois informe seus dados para eu receber a solicitação no email e retornar com os próximos passos.',
      responseTime: 'Retorno o mais breve possível',
      successTitle: 'Solicitação enviada.',
      successText: 'Recebi seu pedido de orçamento e vou retornar o mais breve possível.',
      sendAnother: 'Enviar outro pedido',
      continueWhatsApp: 'Continuar no WhatsApp',
      needLabel: 'O que você precisa?',
      needPlaceholder:
        'Exemplo: Preciso de um site para minha empresa apresentar serviços, receber pedidos de orçamento e passar mais confiança.',
      nameLabel: 'Nome',
      emailLabel: 'Email',
      phoneLabel: 'Telefone ou WhatsApp',
      customerFallback: 'cliente',
      send: 'Enviar',
      sending: 'Enviando...',
      confirm: 'Confirmar solicitação',
      minMessageError: 'Descreva sua ideia com pelo menos 10 caracteres.',
      genericError: 'Não foi possível enviar sua solicitação agora.',
    },
    cta: {
      eyebrow: 'Próximo passo',
      title: 'Vamos transformar sua ideia em uma proposta clara.',
      text: 'Me conte o que sua empresa precisa e eu retorno com um caminho de projeto objetivo.',
    },
    faq: {
      eyebrow: 'Dúvidas comuns',
      title: 'Perguntas que geralmente aparecem antes do orçamento.',
    },
    quality: {
      eyebrow: 'Padrão de entrega',
      title: 'Mais do que uma página bonita: uma base para sua empresa evoluir.',
      description:
        'A estrutura do projeto considera performance, organização do código, manutenção e próximos passos como domínio, hospedagem e integrações.',
    },
    benefits: [
      {
        title: 'O cliente entende rápido o que você vende',
        text: 'Estrutura de páginas, textos e chamadas pensadas para reduzir dúvidas e levar a pessoa até o contato.',
      },
      {
        title: 'Sua empresa passa mais confiança',
        text: 'Visual profissional, informações claras, email de contato e experiência organizada em qualquer tela.',
      },
      {
        title: 'Você recebe pedidos com dados completos',
        text: 'O formulário pede descrição, nome, email e telefone antes de enviar a solicitação para você.',
      },
    ],
    services: [
      {
        title: 'Site institucional',
        text: 'Página inicial, serviços, sobre a empresa, contato e uma estrutura clara para vender sua oferta.',
      },
      {
        title: 'Landing page de venda',
        text: 'Uma página direta para divulgar um produto, campanha, curso, serviço ou atendimento específico.',
      },
      {
        title: 'Sistema web simples',
        text: 'Painel, cadastro, controle interno e automações para tirar processos da planilha quando fizer sentido.',
      },
      {
        title: 'Melhoria em site existente',
        text: 'Ajustes visuais, performance, conteúdo, responsividade e correções para deixar seu site mais profissional.',
      },
      {
        title: 'Suporte técnico',
        text: 'Acompanhamento para manter páginas, formulários e pequenas rotinas funcionando com estabilidade.',
      },
      {
        title: 'Publicação e orientação',
        text: 'Ajuda com domínio, hospedagem, email, deploy e configurações para colocar o projeto no ar.',
      },
    ],
    packages: [
      {
        name: 'Presença',
        tag: 'Projeto Presença',
        idealFor: 'Para empresas que precisam começar com um site profissional.',
        items: [
          'Home completa',
          'Seção de serviços',
          'Contato por email ou WhatsApp',
          'Design responsivo',
        ],
      },
      {
        name: 'Conversão',
        tag: 'Projeto Conversão',
        idealFor: 'Para quem quer captar pedidos e transformar visitas em contatos.',
        items: [
          'Tudo do projeto Presença',
          'Formulário de orçamento',
          'Email de confirmação',
          'Copys mais comerciais',
        ],
      },
      {
        name: 'Operação',
        tag: 'Projeto Operação',
        idealFor: 'Para negócios que também precisam de sistema ou painel interno.',
        items: [
          'Frontend sob medida',
          'API própria',
          'Integrações externas',
          'Base pronta para banco de dados',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entendimento',
        text: 'Conversamos sobre seu negócio, público, objetivo e o que precisa aparecer no site.',
      },
      {
        step: '02',
        title: 'Proposta',
        text: 'Você recebe um escopo claro com páginas, funcionalidades, prazo e próximos passos.',
      },
      {
        step: '03',
        title: 'Criação',
        text: 'Eu construo a interface, conecto o formulário e ajusto a experiência para celular.',
      },
      {
        step: '04',
        title: 'Publicação',
        text: 'Depois da aprovação, o projeto fica pronto para ir ao ar com orientação de uso.',
      },
    ],
    qualityPoints: [
      {
        title: 'Performance e clareza',
        text: 'Páginas leves, objetivas e organizadas para carregar bem e comunicar rápido.',
      },
      {
        title: 'Código pronto para evoluir',
        text: 'Estrutura separada por componentes para facilitar novas páginas e funcionalidades.',
      },
      {
        title: 'Suporte após a entrega',
        text: 'Orientação para publicar, ajustar conteúdo e manter o projeto funcionando.',
      },
    ],
    faqs: [
      {
        question: 'Preciso já ter texto e imagens?',
        answer:
          'Não. Você pode enviar o que tiver, e eu organizo a estrutura inicial com base no seu tipo de empresa.',
      },
      {
        question: 'Dá para começar simples e melhorar depois?',
        answer:
          'Sim. O projeto pode nascer como site institucional e depois ganhar formulários, painel, banco de dados ou novas páginas.',
      },
      {
        question: 'O site funciona no celular?',
        answer: 'Sim. A interface é pensada desde o início para funcionar bem em telas pequenas e grandes.',
      },
    ],
  },
  'es-ES': {
    brand: 'Zentrus Tecnología',
    navigation: {
      services: 'Servicios',
      solutions: 'Soluciones',
      process: 'Proceso',
      quote: 'Presupuesto',
    },
    footer: {
      description: 'Sitios web, sistemas y soporte para empresas.',
      badge: 'Proyectos objetivos y bien organizados',
    },
    common: {
      requestQuote: 'Solicitar presupuesto',
      askProposal: 'Pedir propuesta',
      seeAllServices: 'Ver todos los servicios',
      seeWhatICanBuild: 'Ver qué puedo crear',
      backHome: 'Volver al inicio',
    },
    languageSelector: {
      label: 'Seleccionar idioma',
    },
    hero: {
      eyebrow: 'Sitios profesionales para empresas',
      title: 'Tu sitio necesita generar confianza antes de pedir un clic.',
      copy: 'Zentrus Tecnología crea sitios web, páginas de venta y sistemas simples para empresas que quieren verse mejor, explicar sus servicios con claridad y recibir solicitudes de presupuesto sin improvisar.',
      primaryAction: 'Quiero pedir un presupuesto',
      secondaryAction: 'Ver qué puedo crear',
      proofAria: 'Diferenciales principales',
      showcaseAria: 'Vista previa de sitio profesional',
      browserPath: 'zentrus.dev/presupuesto',
      miniLabel: 'Página lista para vender',
      showcaseTitle: 'Convierte visitas en conversaciones comerciales.',
      showcaseText: 'Oferta clara, servicios organizados, prueba de confianza y llamada al contacto.',
      leadsLabel: 'Leads captados',
      leadsValue: '32',
      showcaseItems: [
        'Inicio estratégico',
        'Formulario conectado',
        'Diseño responsivo',
        'Soporte posentrega',
      ],
    },
    proofPoints: [
      'Sitio responsivo para móvil, tablet y computadora',
      'Formulario de presupuesto conectado a tu email',
      'Publicación, ajustes y soporte para que no te quedes solo',
    ],
    resultMetrics: [
      {
        value: '24h',
        label: 'para recibir una primera respuesta después del pedido',
      },
      {
        value: '3x',
        label: 'más claridad para presentar servicios y cerrar contactos',
      },
      {
        value: '100%',
        label: 'pensado para la realidad de tu empresa',
      },
    ],
    why: {
      eyebrow: 'Por qué invertir',
      title: 'Un buen sitio funciona como una primera reunión bien hecha.',
      description:
        'Muestra quién eres, organiza tus ofertas, anticipa dudas y facilita el contacto de quien ya está buscando una solución.',
    },
    homeServices: {
      eyebrow: 'Servicios',
      title: 'Lo que puedo construir para tu empresa.',
      description:
        'Cada proyecto puede empezar pequeño y evolucionar conforme tu empresa gana claridad, público y necesidad de nuevas funcionalidades.',
    },
    homeSolutions: {
      eyebrow: 'Soluciones',
      title: 'Elige el tipo de proyecto que encaja con tu momento.',
    },
    homeProcess: {
      eyebrow: 'Proceso',
      title: 'Del primer contacto al sitio publicado.',
      description:
        'El camino está organizado para que sepas qué se está haciendo, qué falta decidir y cuándo el proyecto queda listo para salir al aire.',
    },
    servicesPage: {
      hero: {
        eyebrow: 'Servicios',
        title: 'Servicios digitales para que tu empresa venda y opere mejor.',
        description:
          'Aquí están las principales posibilidades de proyecto. Puedes contratar algo simple, como un sitio institucional, o avanzar hacia páginas de venta, sistemas y soporte técnico.',
      },
      noteTitle: 'Empieza por lo esencial.',
      noteText:
        'Después el proyecto puede recibir nuevas páginas, formularios, integraciones y base de datos.',
      section: {
        eyebrow: 'Qué puedo crear',
        title: 'Elige el servicio que más combina con tu necesidad actual.',
        description:
          'Si todavía no sabes exactamente qué camino seguir, la solicitud de presupuesto ayuda a entender el mejor formato.',
      },
      ctaTitle: '¿Tienes una idea de sitio o sistema?',
      ctaText:
        'Envía una descripción de lo que quieres crear y te ayudo a transformarlo en un alcance claro.',
    },
    solutionsPage: {
      hero: {
        eyebrow: 'Soluciones',
        title: 'Proyectos organizados según el momento de tu empresa.',
        description:
          'No todo negocio necesita empezar con un sistema completo. Por eso las soluciones se separan por objetivo: presencia, conversión u operación.',
      },
      checklist: [
        'Alcance claro antes de comenzar',
        'Proyecto pensado para publicar sin complicaciones',
        'Base preparada para crecer cuando tenga sentido',
      ],
      section: {
        eyebrow: 'Formatos',
        title: 'Elige una dirección inicial para la propuesta.',
        description:
          'Los formatos ayudan a definir el tamaño del proyecto. El alcance final puede ajustarse según tu necesidad real.',
      },
      comparison: {
        eyebrow: 'Cómo decidir',
        title: 'Una elección simple para no inflar el proyecto antes de tiempo.',
      },
      comparisonItems: [
        {
          title: 'Necesito aparecer mejor',
          text: 'Empieza por el proyecto Presencia, con una home profesional y contacto claro.',
        },
        {
          title: 'Quiero recibir más pedidos',
          text: 'Usa Conversión, con formulario, email de confirmación y copy más directa.',
        },
        {
          title: 'Tengo procesos para organizar',
          text: 'Ve a Operación, con backend, integraciones y base para banco de datos.',
        },
      ],
      ctaTitle: '¿Quieres descubrir qué solución tiene sentido?',
      ctaText: 'Cuéntame el objetivo de tu empresa y te devuelvo una sugerencia de camino.',
    },
    processPage: {
      hero: {
        eyebrow: 'Proceso',
        title: 'Un proceso claro evita retrabajo y hace el proyecto más ligero.',
        description:
          'La construcción se divide en etapas para que sepas qué necesitas aprobar, qué se está desarrollando y cuándo el sitio puede publicarse.',
      },
      noteTitle: 'Transparencia en el camino.',
      noteText: 'Menos sorpresas, más claridad sobre alcance, plazo y prioridades.',
      section: {
        eyebrow: 'Etapas',
        title: 'Del primer contacto a la publicación.',
        description: 'Cada etapa tiene un objetivo simple: entender, proponer, crear y publicar.',
      },
      delivery: {
        eyebrow: 'Durante el proyecto',
        title: 'Acompañas lo que se está haciendo sin necesitar entender código.',
      },
      deliveryItems: [
        {
          title: 'Briefing objetivo',
          text: 'Las primeras informaciones definen oferta, público, páginas y funcionalidades.',
        },
        {
          title: 'Ajustes con dirección',
          text: 'Los cambios se hacen con foco en claridad, conversión y experiencia del cliente.',
        },
        {
          title: 'Entrega orientada',
          text: 'Recibes el proyecto con explicación sobre publicación, formulario y próximos pasos.',
        },
      ],
      ctaTitle: '¿Quieres empezar con un alcance bien definido?',
      ctaText: 'Envía lo que tienes en mente y te devuelvo una propuesta organizada.',
    },
    quotePage: {
      hero: {
        eyebrow: 'Presupuesto',
        title: 'Solicita una propuesta para tu sitio, sistema o soporte.',
        description:
          'Cuanto más claro sea el pedido, mejor puedo entender el alcance. Pero no necesita estar perfecto: describe tu idea con tus palabras.',
      },
      noteTitle: '¿Qué enviar?',
      noteText: 'Tipo de empresa, objetivo del sitio, páginas deseadas y ejemplos de funcionalidades.',
    },
    notFound: {
      eyebrow: 'Página no encontrada',
      title: 'Esta página no existe.',
      description: 'La dirección puede haber cambiado o haberse escrito incorrectamente.',
    },
    quoteForm: {
      eyebrow: 'Solicitud de presupuesto',
      title: 'Cuéntame qué quieres vender, divulgar u organizar.',
      description:
        'Describe tu idea en pocas líneas. Luego informa tus datos para que reciba la solicitud por email y pueda responder con los próximos pasos.',
      responseTime: 'Respondo lo antes posible',
      successTitle: 'Solicitud enviada.',
      successText: 'Recibí tu pedido de presupuesto y responderé lo antes posible.',
      sendAnother: 'Enviar otro pedido',
      continueWhatsApp: 'Continuar en WhatsApp',
      needLabel: '¿Qué necesitas?',
      needPlaceholder:
        'Ejemplo: Necesito un sitio para que mi empresa presente servicios, reciba pedidos de presupuesto y transmita más confianza.',
      nameLabel: 'Nombre',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono o WhatsApp',
      customerFallback: 'cliente',
      send: 'Enviar',
      sending: 'Enviando...',
      confirm: 'Confirmar solicitud',
      minMessageError: 'Describe tu idea con al menos 10 caracteres.',
      genericError: 'No fue posible enviar tu solicitud ahora.',
    },
    cta: {
      eyebrow: 'Próximo paso',
      title: 'Vamos a transformar tu idea en una propuesta clara.',
      text: 'Cuéntame qué necesita tu empresa y te devuelvo un camino de proyecto objetivo.',
    },
    faq: {
      eyebrow: 'Dudas frecuentes',
      title: 'Preguntas que suelen aparecer antes del presupuesto.',
    },
    quality: {
      eyebrow: 'Estándar de entrega',
      title: 'Más que una página bonita: una base para que tu empresa evolucione.',
      description:
        'La estructura del proyecto considera performance, organización del código, mantenimiento y próximos pasos como dominio, hosting e integraciones.',
    },
    benefits: [
      {
        title: 'El cliente entiende rápido lo que vendes',
        text: 'Estructura de páginas, textos y llamadas pensadas para reducir dudas y llevar a la persona hasta el contacto.',
      },
      {
        title: 'Tu empresa transmite más confianza',
        text: 'Visual profesional, información clara, email de contacto y experiencia organizada en cualquier pantalla.',
      },
      {
        title: 'Recibes pedidos con datos completos',
        text: 'El formulario pide descripción, nombre, email y teléfono antes de enviarte la solicitud.',
      },
    ],
    services: [
      {
        title: 'Sitio institucional',
        text: 'Página inicial, servicios, sobre la empresa, contacto y una estructura clara para vender tu oferta.',
      },
      {
        title: 'Landing page de venta',
        text: 'Una página directa para divulgar un producto, campaña, curso, servicio o atención específica.',
      },
      {
        title: 'Sistema web simple',
        text: 'Panel, registro, control interno y automatizaciones para sacar procesos de la hoja de cálculo cuando tenga sentido.',
      },
      {
        title: 'Mejora de sitio existente',
        text: 'Ajustes visuales, performance, contenido, responsividad y correcciones para dejar tu sitio más profesional.',
      },
      {
        title: 'Soporte técnico',
        text: 'Acompañamiento para mantener páginas, formularios y pequeñas rutinas funcionando con estabilidad.',
      },
      {
        title: 'Publicación y orientación',
        text: 'Ayuda con dominio, hosting, email, deploy y configuraciones para poner el proyecto online.',
      },
    ],
    packages: [
      {
        name: 'Presencia',
        tag: 'Proyecto Presencia',
        idealFor: 'Para empresas que necesitan empezar con un sitio profesional.',
        items: [
          'Home completa',
          'Sección de servicios',
          'Contacto por email o WhatsApp',
          'Diseño responsivo',
        ],
      },
      {
        name: 'Conversión',
        tag: 'Proyecto Conversión',
        idealFor: 'Para quien quiere captar pedidos y transformar visitas en contactos.',
        items: [
          'Todo del proyecto Presencia',
          'Formulario de presupuesto',
          'Email de confirmación',
          'Copys más comerciales',
        ],
      },
      {
        name: 'Operación',
        tag: 'Proyecto Operación',
        idealFor: 'Para negocios que también necesitan sistema o panel interno.',
        items: [
          'Frontend a medida',
          'API propia',
          'Integraciones externas',
          'Base lista para banco de datos',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Entendimiento',
        text: 'Conversamos sobre tu negocio, público, objetivo y lo que necesita aparecer en el sitio.',
      },
      {
        step: '02',
        title: 'Propuesta',
        text: 'Recibes un alcance claro con páginas, funcionalidades, plazo y próximos pasos.',
      },
      {
        step: '03',
        title: 'Creación',
        text: 'Construyo la interfaz, conecto el formulario y ajusto la experiencia para móvil.',
      },
      {
        step: '04',
        title: 'Publicación',
        text: 'Después de la aprobación, el proyecto queda listo para salir al aire con orientación de uso.',
      },
    ],
    qualityPoints: [
      {
        title: 'Performance y claridad',
        text: 'Páginas ligeras, objetivas y organizadas para cargar bien y comunicar rápido.',
      },
      {
        title: 'Código listo para evolucionar',
        text: 'Estructura separada por componentes para facilitar nuevas páginas y funcionalidades.',
      },
      {
        title: 'Soporte después de la entrega',
        text: 'Orientación para publicar, ajustar contenido y mantener el proyecto funcionando.',
      },
    ],
    faqs: [
      {
        question: '¿Necesito tener textos e imágenes?',
        answer:
          'No. Puedes enviar lo que tengas y organizo la estructura inicial según el tipo de empresa.',
      },
      {
        question: '¿Puedo empezar simple y mejorar después?',
        answer:
          'Sí. El proyecto puede nacer como sitio institucional y luego ganar formularios, panel, banco de datos o nuevas páginas.',
      },
      {
        question: '¿El sitio funciona en móvil?',
        answer: 'Sí. La interfaz se piensa desde el inicio para funcionar bien en pantallas pequeñas y grandes.',
      },
    ],
  },
  'en-US': {
    brand: 'Zentrus Technology',
    navigation: {
      services: 'Services',
      solutions: 'Solutions',
      process: 'Process',
      quote: 'Quote',
    },
    footer: {
      description: 'Websites, systems, and support for companies.',
      badge: 'Clear and well-organized projects',
    },
    common: {
      requestQuote: 'Request a quote',
      askProposal: 'Request proposal',
      seeAllServices: 'View all services',
      seeWhatICanBuild: 'See what I can build',
      backHome: 'Back to home',
    },
    languageSelector: {
      label: 'Select language',
    },
    hero: {
      eyebrow: 'Professional websites for companies',
      title: 'Your website needs to build trust before asking for a click.',
      copy: 'Zentrus Technology creates websites, sales pages, and simple systems for companies that want to look better, explain their services clearly, and receive quote requests without improvising.',
      primaryAction: 'I want to request a quote',
      secondaryAction: 'See what I can build',
      proofAria: 'Main differentiators',
      showcaseAria: 'Professional website preview',
      browserPath: 'zentrus.dev/quote',
      miniLabel: 'Page ready to sell',
      showcaseTitle: 'Turn visits into sales conversations.',
      showcaseText: 'Clear offer, organized services, trust signals, and a call to contact.',
      leadsLabel: 'Leads captured',
      leadsValue: '32',
      showcaseItems: [
        'Strategic homepage',
        'Connected form',
        'Responsive layout',
        'Post-delivery support',
      ],
    },
    proofPoints: [
      'Responsive website for mobile, tablet, and desktop',
      'Quote form connected to your email',
      'Publishing, adjustments, and support so you are not left alone',
    ],
    resultMetrics: [
      {
        value: '24h',
        label: 'to receive an initial response after the request',
      },
      {
        value: '3x',
        label: 'more clarity to present services and close contacts',
      },
      {
        value: '100%',
        label: 'designed around your company reality',
      },
    ],
    why: {
      eyebrow: 'Why invest',
      title: 'A good website works like a well-run first meeting.',
      description:
        'It shows who you are, organizes your offers, anticipates questions, and makes contact easier for people already looking for a solution.',
    },
    homeServices: {
      eyebrow: 'Services',
      title: 'What I can build for your company.',
      description:
        'Each project can start small and evolve as your company gains clarity, audience, and the need for new features.',
    },
    homeSolutions: {
      eyebrow: 'Solutions',
      title: 'Choose the type of project that fits your current stage.',
    },
    homeProcess: {
      eyebrow: 'Process',
      title: 'From first contact to published website.',
      description:
        'The path is organized so you know what is being done, what still needs to be decided, and when the project is ready to go live.',
    },
    servicesPage: {
      hero: {
        eyebrow: 'Services',
        title: 'Digital services to help your company sell and operate better.',
        description:
          'Here are the main project possibilities. You can hire something simple, such as a business website, or evolve into sales pages, systems, and technical support.',
      },
      noteTitle: 'Start with what matters.',
      noteText:
        'Later, the project can receive new pages, forms, integrations, and a database.',
      section: {
        eyebrow: 'What I can create',
        title: 'Choose the service that best matches your current need.',
        description:
          'If you still do not know exactly which path to follow, the quote request helps identify the best format.',
      },
      ctaTitle: 'Do you have a website or system idea?',
      ctaText:
        'Send a description of what you want to create and I will help turn it into a clear scope.',
    },
    solutionsPage: {
      hero: {
        eyebrow: 'Solutions',
        title: 'Projects organized by your company stage.',
        description:
          'Not every business needs to start with a complete system. That is why the solutions are separated by goal: presence, conversion, or operation.',
      },
      checklist: [
        'Clear scope before starting',
        'Project designed to publish without complications',
        'Foundation ready to grow when it makes sense',
      ],
      section: {
        eyebrow: 'Formats',
        title: 'Choose an initial direction for the proposal.',
        description:
          'The formats help define the project size. The final scope can be adjusted according to your real need.',
      },
      comparison: {
        eyebrow: 'How to decide',
        title: 'A simple choice to avoid inflating the project too early.',
      },
      comparisonItems: [
        {
          title: 'I need to look more professional',
          text: 'Start with the Presence project, with a professional homepage and clear contact path.',
        },
        {
          title: 'I want to receive more requests',
          text: 'Use Conversion, with a form, confirmation email, and more direct copy.',
        },
        {
          title: 'I have processes to organize',
          text: 'Go with Operation, including backend, integrations, and a database-ready foundation.',
        },
      ],
      ctaTitle: 'Want to discover which solution makes sense?',
      ctaText: 'Tell me your company goal and I will return with a suggested path.',
    },
    processPage: {
      hero: {
        eyebrow: 'Process',
        title: 'A clear process avoids rework and makes the project lighter.',
        description:
          'The build is divided into steps so you know what needs approval, what is being developed, and when the website can go live.',
      },
      noteTitle: 'Transparency along the way.',
      noteText: 'Fewer surprises, more clarity about scope, timeline, and priorities.',
      section: {
        eyebrow: 'Steps',
        title: 'From first contact to publication.',
        description: 'Each step has a simple goal: understand, propose, create, and publish.',
      },
      delivery: {
        eyebrow: 'During the project',
        title: 'You follow what is being done without needing to understand code.',
      },
      deliveryItems: [
        {
          title: 'Objective briefing',
          text: 'The first information defines the offer, audience, pages, and features.',
        },
        {
          title: 'Directed adjustments',
          text: 'Changes are made with focus on clarity, conversion, and customer experience.',
        },
        {
          title: 'Guided delivery',
          text: 'You receive the project with guidance on publishing, the form, and next steps.',
        },
      ],
      ctaTitle: 'Want to start with a well-defined scope?',
      ctaText: 'Send what you have in mind and I will return with an organized proposal.',
    },
    quotePage: {
      hero: {
        eyebrow: 'Quote',
        title: 'Request a proposal for your website, system, or support.',
        description:
          'The clearer the request, the better I can understand the scope. But it does not need to be perfect: describe your idea in your own words.',
      },
      noteTitle: 'What should you send?',
      noteText: 'Company type, website goal, desired pages, and examples of features.',
    },
    notFound: {
      eyebrow: 'Page not found',
      title: 'This page does not exist.',
      description: 'The address may have changed or been typed incorrectly.',
    },
    quoteForm: {
      eyebrow: 'Quote request',
      title: 'Tell me what you want to sell, promote, or organize.',
      description:
        'Describe your idea in a few lines. Then enter your details so I can receive the request by email and reply with the next steps.',
      responseTime: 'I will reply as soon as possible',
      successTitle: 'Request sent.',
      successText: 'I received your quote request and will reply as soon as possible.',
      sendAnother: 'Send another request',
      continueWhatsApp: 'Continue on WhatsApp',
      needLabel: 'What do you need?',
      needPlaceholder:
        'Example: I need a website for my company to present services, receive quote requests, and build more trust.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone or WhatsApp',
      customerFallback: 'customer',
      send: 'Send',
      sending: 'Sending...',
      confirm: 'Confirm request',
      minMessageError: 'Describe your idea with at least 10 characters.',
      genericError: 'It was not possible to send your request right now.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Let us turn your idea into a clear proposal.',
      text: 'Tell me what your company needs and I will return with an objective project path.',
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Questions that usually come up before requesting a quote.',
    },
    quality: {
      eyebrow: 'Delivery standard',
      title: 'More than a beautiful page: a foundation for your company to evolve.',
      description:
        'The project structure considers performance, code organization, maintenance, and next steps such as domain, hosting, and integrations.',
    },
    benefits: [
      {
        title: 'Customers quickly understand what you sell',
        text: 'Page structure, copy, and calls to action designed to reduce doubts and lead people to contact.',
      },
      {
        title: 'Your company builds more trust',
        text: 'Professional visuals, clear information, contact email, and an organized experience on any screen.',
      },
      {
        title: 'You receive requests with complete data',
        text: 'The form asks for description, name, email, and phone before sending the request to you.',
      },
    ],
    services: [
      {
        title: 'Business website',
        text: 'Homepage, services, about the company, contact, and a clear structure to sell your offer.',
      },
      {
        title: 'Sales landing page',
        text: 'A direct page to promote a product, campaign, course, service, or specific offer.',
      },
      {
        title: 'Simple web system',
        text: 'Dashboard, registration, internal control, and automation to move processes out of spreadsheets when it makes sense.',
      },
      {
        title: 'Existing website improvement',
        text: 'Visual adjustments, performance, content, responsiveness, and fixes to make your site more professional.',
      },
      {
        title: 'Technical support',
        text: 'Support to keep pages, forms, and small routines running reliably.',
      },
      {
        title: 'Publishing and guidance',
        text: 'Help with domain, hosting, email, deployment, and configuration to put the project online.',
      },
    ],
    packages: [
      {
        name: 'Presence',
        tag: 'Presence Project',
        idealFor: 'For companies that need to start with a professional website.',
        items: ['Complete home', 'Services section', 'Email or WhatsApp contact', 'Responsive design'],
      },
      {
        name: 'Conversion',
        tag: 'Conversion Project',
        idealFor: 'For those who want to capture requests and turn visits into contacts.',
        items: [
          'Everything in Presence',
          'Quote form',
          'Confirmation email',
          'More commercial copy',
        ],
      },
      {
        name: 'Operation',
        tag: 'Operation Project',
        idealFor: 'For businesses that also need a system or internal dashboard.',
        items: ['Custom frontend', 'Own API', 'External integrations', 'Database-ready foundation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery',
        text: 'We talk about your business, audience, goal, and what needs to appear on the website.',
      },
      {
        step: '02',
        title: 'Proposal',
        text: 'You receive a clear scope with pages, features, timeline, and next steps.',
      },
      {
        step: '03',
        title: 'Creation',
        text: 'I build the interface, connect the form, and adjust the mobile experience.',
      },
      {
        step: '04',
        title: 'Publication',
        text: 'After approval, the project is ready to go live with usage guidance.',
      },
    ],
    qualityPoints: [
      {
        title: 'Performance and clarity',
        text: 'Light, objective, and organized pages that load well and communicate quickly.',
      },
      {
        title: 'Code ready to evolve',
        text: 'Component-based structure to make new pages and features easier to add.',
      },
      {
        title: 'Support after delivery',
        text: 'Guidance to publish, adjust content, and keep the project running.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to already have text and images?',
        answer:
          'No. You can send what you have, and I will organize the initial structure based on your type of company.',
      },
      {
        question: 'Can I start simple and improve later?',
        answer:
          'Yes. The project can start as a business website and later gain forms, dashboards, a database, or new pages.',
      },
      {
        question: 'Does the website work on mobile?',
        answer: 'Yes. The interface is designed from the start to work well on small and large screens.',
      },
    ],
  },
}
