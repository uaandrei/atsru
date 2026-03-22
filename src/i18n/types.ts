export type Locale = 'en' | 'ro'

export type NavigationItem = {
  href: string
  label: string
}

export type StatItem = {
  value: string
  label: string
}

export type ServiceItem = {
  icon: string
  title: string
  description: string
}

export type ProjectItem = {
  title: string
  description: string
  tags: string[]
  href: string
  cta: string
  image?: string
}

export type Translation = {
  meta: {
    title: string
    description: string
  }
  nav: NavigationItem[]
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    titleTail: string
    description: string
    primaryCta: string
    secondaryCta: string
    imageAlt: string
  }
  stats: StatItem[]
  services: {
    eyebrow: string
    title: string
    description: string
    items: ServiceItem[]
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    items: ProjectItem[]
  }
  contact: {
    title: string
    description: string
    emailCta: string
    resumeCta: string
  }
  footer: {
    madeWith: string
  }
  languageToggle: {
    label: string
    english: string
    romanian: string
  }
}
