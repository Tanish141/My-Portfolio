import type { IconType } from "react-icons";

export type NavItem = {
  id: string;
  label: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Project = {
  title: string;
  description: string;
  domain: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  bannerGradient: string;
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: IconType;
};
