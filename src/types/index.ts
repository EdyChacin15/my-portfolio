export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface SkillCategoryType {
  title: string;
  skills: string[];
}

export interface CertificateType {
  title: string;
  provider: string;
  year: string;
  link?: string;
  images?: string[];
  type: 'course' | 'trophy' | 'book';
}