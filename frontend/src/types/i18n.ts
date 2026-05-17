export type Locale = 'pt-BR' | 'es-ES' | 'en-US'

export type LanguageOption = {
  code: Locale
  label: string
  shortLabel: string
  flag: string
}

export type TextPair = {
  title: string
  text: string
}

export type SectionCopy = {
  eyebrow: string
  title: string
  description?: string
}

export type PackageCopy = {
  name: string
  tag: string
  idealFor: string
  items: string[]
}

export type ProcessCopy = {
  step: string
  title: string
  text: string
}

export type SiteCopy = {
  brand: string
  navigation: {
    services: string
    solutions: string
    process: string
    quote: string
  }
  footer: {
    description: string
    badge: string
  }
  common: {
    requestQuote: string
    askProposal: string
    seeAllServices: string
    seeWhatICanBuild: string
    backHome: string
  }
  languageSelector: {
    label: string
  }
  hero: {
    eyebrow: string
    title: string
    copy: string
    primaryAction: string
    secondaryAction: string
    proofAria: string
    showcaseAria: string
    browserPath: string
    miniLabel: string
    showcaseTitle: string
    showcaseText: string
    leadsLabel: string
    leadsValue: string
    showcaseItems: string[]
  }
  proofPoints: string[]
  resultMetrics: Array<{
    value: string
    label: string
  }>
  why: SectionCopy
  homeServices: SectionCopy
  homeSolutions: SectionCopy
  homeProcess: SectionCopy
  servicesPage: {
    hero: SectionCopy
    noteTitle: string
    noteText: string
    section: SectionCopy
    ctaTitle: string
    ctaText: string
  }
  solutionsPage: {
    hero: SectionCopy
    checklist: string[]
    section: SectionCopy
    comparison: SectionCopy
    comparisonItems: TextPair[]
    ctaTitle: string
    ctaText: string
  }
  processPage: {
    hero: SectionCopy
    noteTitle: string
    noteText: string
    section: SectionCopy
    delivery: SectionCopy
    deliveryItems: TextPair[]
    ctaTitle: string
    ctaText: string
  }
  quotePage: {
    hero: SectionCopy
    noteTitle: string
    noteText: string
  }
  notFound: {
    eyebrow: string
    title: string
    description: string
  }
  quoteForm: {
    eyebrow: string
    title: string
    description: string
    responseTime: string
    successTitle: string
    successText: string
    sendAnother: string
    continueWhatsApp: string
    needLabel: string
    needPlaceholder: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    customerFallback: string
    send: string
    sending: string
    confirm: string
    minMessageError: string
    genericError: string
  }
  cta: {
    eyebrow: string
    title: string
    text: string
  }
  faq: SectionCopy
  quality: SectionCopy
  benefits: TextPair[]
  services: TextPair[]
  packages: PackageCopy[]
  processSteps: ProcessCopy[]
  qualityPoints: TextPair[]
  faqs: Array<{
    question: string
    answer: string
  }>
}
