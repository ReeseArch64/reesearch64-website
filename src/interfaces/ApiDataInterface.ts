export interface ApiDataInterface {
  avatar: string;
  person: PersonInterface;
  education: IEducationInterface[];
  techs: string[];
  projects: IProjectInterface[];
  contact: IContactInterface;
  socialMedia: ISocialMediaInterface;
}

interface PersonInterface {
  name: string;
  about: string;
  role: string;
  level: string;
  location: string;
}

interface IEducationInterface {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface IProjectInterface {
  name: string;
  description: string;
  image: string;
  type: ProjectType;
  technologies: string[];
  repositoryCode: string;
  demoLink: string;
}

interface IContactInterface {
  email: string;
  phone: string;
}

interface ISocialMediaInterface {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  facebook: string;
  youtube: string;
  tiktok: string;
}

enum ProjectType {
  WEB = "web",
  MOBILE = "mobile",
  DESKTOP = "desktop",
  GAME = "game",
  OTHER = "other",
}
