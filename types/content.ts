export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface SkillGroup {
  title: string
  description: string
  items: string[]
}

export interface Metric {
  value: string
  label: string
}
