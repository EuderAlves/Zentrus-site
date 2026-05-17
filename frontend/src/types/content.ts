import type { LucideIcon } from 'lucide-react'

export type NavigationItem = {
  label: string
  path: string
}

export type IconContent = {
  title: string
  text: string
  icon: LucideIcon
}

export type ResultMetric = {
  value: string
  label: string
}

export type PackageOption = {
  name: string
  tag: string
  idealFor: string
  items: string[]
}

export type ProcessStep = {
  step: string
  title: string
  text: string
}

export type FaqItem = {
  question: string
  answer: string
}
