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
import type { NavigationItem } from '../types/content'

export const navigationRoutes = {
  services: '/servicos',
  solutions: '/solucoes',
  process: '/processo',
  quote: '/orcamento',
}

export const navigationItems: Array<NavigationItem & { key: keyof typeof navigationRoutes }> = [
  { key: 'services', label: 'services', path: navigationRoutes.services },
  { key: 'solutions', label: 'solutions', path: navigationRoutes.solutions },
  { key: 'process', label: 'process', path: navigationRoutes.process },
  { key: 'quote', label: 'quote', path: navigationRoutes.quote },
]

export const benefitIcons = [Target, ShieldCheck, SearchCheck]

export const serviceIcons = [Code2, TrendingUp, LayoutDashboard, Wrench, Headphones, Rocket]

export const qualityIcons = [Gauge, Code2, Headphones]
