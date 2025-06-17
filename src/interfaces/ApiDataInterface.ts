export interface ApiDataInterface {
  avatar: string
  person: PersonInterface
  techs: TechsInterface
  projects: ProjectInterface[]
  contacts: ContactInterface
}

export interface PersonInterface {
  name: string
  about: string
  role: string
  level: string
  location: string
  languages: string[]
}

export interface TechsInterface {
  langs: string[]
  frameworks: FrameworksInterface
  runtimes: string[]
  orms: string[]
  tools: string[]
  cloud: string[]
  databases: string[]
  devops: string[]
  packageManagers: string[]
  testing: string[]
  design: string[]
  methodologies: string[]
  versionControl: string[]
  architecture: string[]
}

export interface FrameworksInterface {
  backend: string[]
  frontend: string[]
  mobile: string[]
  css: string[]
  desktop: string[]
  game: string[]
}

export interface ProjectInterface {
  name: string
  description: string
  image: string
  type: ProjectsType
  categories: string[]
  technologies: string[]
  repositoryCode: string
  demoLink: string
}

export enum ProjectsType {
  FRONTEND,
  BACKEND,
  FULLSTACK,
  API,
  CLI,
  LIBRARY,
  MOBILE_NATIVE,
  DESKTOP
}

export enum ProjectsCategories {
  CRM,
  ECOMMERCE,
  LP,
  PORTFOLIO,
  BLOG,
  DASHBOARD,
  SOCIAL,
  ADMIN_PANEL,
  CHAT,
  FORUM,
  GAME,
  EDUCATION,
  HEALTHCARE,
  FINANCE,
  ENTERTAINMENT,
  MARKETING,
  NEWS,
  OTHER
}

export interface ContactInterface {
  email: string
  whatsapp: string
  socialMedia: SocialMediaInterface
}

export interface SocialMediaInterface {
  linkedin: string
  github: string
  instagram: string
  twitter: string
  facebook: string
  youtube: string
  tiktok: string
}
