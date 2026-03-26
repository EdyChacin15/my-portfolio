import type { ProjectType, SkillCategoryType, CertificateType } from '../types/index.ts';

export const projectsData: ProjectType[] = [
  {
    title: "Interactive Web Portal",
    description: "Responsive web application designed with modern UI principles. Focused on fast load times and seamless cross-device compatibility.",
    tags: ["React.js", "PostgreSQL", "CSS Modules", "TypeScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop",
    github: "https://github.com/tu-usuario/portal-web",
    demo: "https://tu-demo-aqui.com",
  },
  {
    title: "URBE Marathon Practice '25",
    description: "Implemented efficient data structures and algorithms to solve complex problem sets under tight time constraints.",
    tags: ["Algorithms", "Data Structures", "Problem Solving", "Java"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=340&fit=crop",
    github: "https://github.com/tu-usuario/maraton-practice-2025",
  },
  {
    title: "Community Project Manager",
    description: "Degree thesis full-stack application designed to streamline, organize, and manage community projects efficiently. (In Development)",
    tags: ["Django", "Python", "React DOM", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=340&fit=crop",
    github: "https://github.com/tu-usuario/tesis",
  }
];

export const skillsData: SkillCategoryType[] = [
  {
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "React.js", "React DOM", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
  },
  {
    title: "Database & Tools",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Git/GitHub", "Figma"],
  },
];

export const certificatesData: CertificateType[] = [
  {
    title: "Backend con Node.js: API REST con Express.js",
    provider: "Platzi",
    year: "2025",
    link: "https://platzi.com/@edychacin15/",
    type: "course"
  },
  {
    title: "URBE Programming Marathon Participation",
    provider: "URBE University",
    year: "2025",
    link: "https://link-a-tu-certificado.com",
    type: "trophy"
  },
  {
    title: "English Program Scholarship",
    provider: "CEVAZ",
    year: "2024 - Present",
    type: "book"
  }
];