import {
  Code2,
  Gauge,
  Headphones,
  LayoutDashboard,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import type {
  FaqItem,
  IconContent,
  NavigationItem,
  PackageOption,
  ProcessStep,
  ResultMetric,
} from '../types/content'

export const contactEmail = 'euder.alv@gmail.com'

export const navigationItems: NavigationItem[] = [
  { label: 'Servicos', path: '/servicos' },
  { label: 'Solucoes', path: '/solucoes' },
  { label: 'Processo', path: '/processo' },
  { label: 'Orcamento', path: '/orcamento' },
]

export const proofPoints = [
  'Site responsivo para celular, tablet e computador',
  'Formulario de orcamento conectado ao seu email',
  'Publicacao, ajustes e suporte para voce nao ficar sozinho',
]

export const resultMetrics: ResultMetric[] = [
  {
    value: '24h',
    label: 'para receber um primeiro retorno apos o pedido',
  },
  {
    value: '3x',
    label: 'mais clareza para apresentar servicos e fechar contatos',
  },
  {
    value: '100%',
    label: 'pensado para a realidade da sua empresa',
  },
]

export const benefits: IconContent[] = [
  {
    title: 'O cliente entende rapido o que voce vende',
    text: 'Estrutura de paginas, textos e chamadas pensadas para reduzir duvidas e levar a pessoa ate o contato.',
    icon: Target,
  },
  {
    title: 'Sua empresa passa mais confianca',
    text: 'Visual profissional, informacoes claras, email de contato e experiencia organizada em qualquer tela.',
    icon: ShieldCheck,
  },
  {
    title: 'Voce recebe pedidos com dados completos',
    text: 'O formulario pede descricao, nome, email e telefone antes de enviar a solicitacao para voce.',
    icon: SearchCheck,
  },
]

export const services: IconContent[] = [
  {
    title: 'Site institucional',
    text: 'Pagina inicial, servicos, sobre a empresa, contato e uma estrutura clara para vender sua oferta.',
    icon: Code2,
  },
  {
    title: 'Landing page de venda',
    text: 'Uma pagina direta para divulgar um produto, campanha, curso, servico ou atendimento especifico.',
    icon: TrendingUp,
  },
  {
    title: 'Sistema web simples',
    text: 'Painel, cadastro, controle interno e automacoes para tirar processos da planilha quando fizer sentido.',
    icon: LayoutDashboard,
  },
  {
    title: 'Melhoria em site existente',
    text: 'Ajustes visuais, performance, conteudo, responsividade e correcoes para deixar seu site mais profissional.',
    icon: Wrench,
  },
  {
    title: 'Suporte tecnico',
    text: 'Acompanhamento para manter paginas, formularios e pequenas rotinas funcionando com estabilidade.',
    icon: Headphones,
  },
  {
    title: 'Publicacao e orientacao',
    text: 'Ajuda com dominio, hospedagem, email, deploy e configuracoes para colocar o projeto no ar.',
    icon: Rocket,
  },
]

export const packages: PackageOption[] = [
  {
    name: 'Presenca',
    idealFor: 'Para empresas que precisam comecar com um site profissional.',
    items: ['Home completa', 'Secao de servicos', 'Contato por email ou WhatsApp', 'Design responsivo'],
  },
  {
    name: 'Conversao',
    idealFor: 'Para quem quer captar pedidos e transformar visitas em contatos.',
    items: [
      'Tudo do projeto Presenca',
      'Formulario de orcamento',
      'Email de confirmacao',
      'Copys mais comerciais',
    ],
  },
  {
    name: 'Operacao',
    idealFor: 'Para negocios que tambem precisam de sistema ou painel interno.',
    items: ['Frontend sob medida', 'API propria', 'Integracoes externas', 'Base pronta para banco de dados'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Entendimento',
    text: 'Conversamos sobre seu negocio, publico, objetivo e o que precisa aparecer no site.',
  },
  {
    step: '02',
    title: 'Proposta',
    text: 'Voce recebe um escopo claro com paginas, funcionalidades, prazo e proximos passos.',
  },
  {
    step: '03',
    title: 'Criacao',
    text: 'Eu construo a interface, conecto o formulario e ajusto a experiencia para celular.',
  },
  {
    step: '04',
    title: 'Publicacao',
    text: 'Depois da aprovacao, o projeto fica pronto para ir ao ar com orientacao de uso.',
  },
]

export const qualityPoints: IconContent[] = [
  {
    title: 'Performance e clareza',
    text: 'Paginas leves, objetivas e organizadas para carregar bem e comunicar rapido.',
    icon: Gauge,
  },
  {
    title: 'Codigo pronto para evoluir',
    text: 'Estrutura separada por componentes para facilitar novas paginas e funcionalidades.',
    icon: Code2,
  },
  {
    title: 'Suporte apos a entrega',
    text: 'Orientacao para publicar, ajustar conteudo e manter o projeto funcionando.',
    icon: Headphones,
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Preciso ja ter texto e imagens?',
    answer:
      'Nao. Voce pode enviar o que tiver, e eu organizo a estrutura inicial com base no seu tipo de empresa.',
  },
  {
    question: 'Da para comecar simples e melhorar depois?',
    answer:
      'Sim. O projeto pode nascer como site institucional e depois ganhar formularios, painel, banco de dados ou novas paginas.',
  },
  {
    question: 'O site funciona no celular?',
    answer:
      'Sim. A interface e pensada desde o inicio para funcionar bem em telas pequenas e grandes.',
  },
]
