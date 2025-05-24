export interface ApiDataInterface {
  avatar: string;
  person: PersonInterface;
  education: EducationInterface[];
  techs: TechsInterface;
  projects: ProjectInterface[];
  contact: ContactInterface;
  socialMedia: SocialMediaInterface;
}

export interface PersonInterface {
  name: string;
  about: string;
  role: string;
  level: string;
  location: string;
}

export interface EducationInterface {
  institution: string;
  course: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  description: string;
}

export interface ProjectInterface {
  name: string;
  description: string;
  image: string;
  type: ProjectType;
  technologies: string[];
  repositoryCode: string;
  demoLink: string;
}

export interface ContactInterface {
  email: string;
  phone: string;
}

export interface SocialMediaInterface {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  facebook: string;
  youtube: string;
  tiktok: string;
}

export interface TechsInterface {
  langs: string[];
  frameworks: FrameworksInterface;
  orms: string[];
  tools: string[];
  cloud: string[];
  databases: string[];
  devops: string[];
}

export interface FrameworksInterface {
  backend: BackendFrameworks;
  frontend: FrontendFrameworks;
  mobile: MobileFrameworks;
  desktop: DesktopFrameworks;
  game: GameFrameworks;
}

export interface BackendFrameworks {
  csharp: string[];
  node: string[];
  python: string[];
}

export interface FrontendFrameworks {
  javaScript: string[];
  css: string[];
}

export interface MobileFrameworks {
  javaScript: string[];
  dart: string[];
}

export interface DesktopFrameworks {
  java: string[];
  csharp: string[];
  python: string[];
  javascript: string[];
}

export interface GameFrameworks {
  javascript: string[];
  csharp: string[];
}

export enum ProjectType {
  WEB = "web",
  MOBILE = "mobile",
  DESKTOP = "desktop",
  GAME = "game",
  OTHER = "other",
}
