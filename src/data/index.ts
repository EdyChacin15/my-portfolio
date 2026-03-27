import type { ProjectType, SkillCategoryType, CertificateType } from '../types/index.ts';
export const projectsData: ProjectType[] = [
  {
    title: "Personal Portfolio Web App",
    description: "[2026] Interactive personal portfolio website. Built with React, TypeScript, and CSS Modules for the interface. It uses EmailJS to handle the contact form.",
    tags: ["React", "TypeScript", "Vite", "CSS Modules"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/edychacin15/my-portfolio",
    demo: "https://portfolio-edymar-chacin.vercel.app/"
  },
  {
    title: "Spiderverse Web Platform",
    description: "[2026] Collaborative web platform about the Spider-Man universe. Co-developed using React 19, Tailwind CSS, and Supabase.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
    image: "/projects/spider.jpg",
    github: "https://github.com/Enma0101/Spiderverse_page",
    demo: "https://comicsspider.vercel.app/"
  },
  {
    title: "Custom Music Player",
    description: "[2024] Custom web-based music player developed with Vanilla JavaScript and the HTML5 Audio API. It includes track switching, a progress bar, and playlist controls.",
    tags: ["JavaScript", "HTML5 Audio", "CSS3"],
    image: "/projects/music-player.jpg", 
    github: "https://github.com/edychacin15/music-player",
    demo: "https://music-player-nu-pearl.vercel.app/"
  },
  {
    title: "Pokédex Web App",
    description: "[2024] Single Page Application that displays Pokémon data from the PokéAPI. Built with Vanilla JavaScript and Axios for data fetching.",
    tags: ["JavaScript", "REST API", "HTML/CSS", "Axios"],
    image: "/projects/pokedex.jpg",
    github: "https://github.com/edychacin15/pokedex",
    demo: "https://pokedex-weld-kappa.vercel.app/"
  },
  {
    title: "Lexical & Syntactic Analyzer",
    description: "[2025] Desktop text editor and compiler frontend. Built in Java using Swing. It uses JFlex for lexical analysis and Java CUP for syntactic validation.",
    tags: ["Java", "Swing", "JFlex", "Java CUP"],
    image: "/projects/editor.jpg",
    github: "https://github.com/edychacin15/analizador-lexico-sintactico",
  },
  {
    title: "Competitive Programming Algorithms",
    description: "[2025] Collection of Java algorithms for the URBE Programming Marathons.",
    tags: ["Java", "Algorithms", "Data Structures", "Problem Solving"],
    image: "/projects/java.jpg",
    github: "https://github.com/edychacin15/maraton-urbe",
  }, 
  {
    title: "Academic Management System",
    description: "[2024] System for educational management. It handles user roles, enrollments, and billing. Built with Node.js, Express, MySQL, and JavaScript. It also generates PDF reports.",
    tags: ["Node.js", "Express", "MySQL", "JavaScript"],
    image: "/projects/centro-educativo.jpg",
    github: "https://github.com/edychacin15/centro-educativo-c",
    demo: "https://centro-educativo-c.vercel.app/home.html"
  },
];

export const skillsData: SkillCategoryType[] = [
  {
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "React.js", "TypeScript", "HTML/CSS"],
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
    images: ["/certificates/diploma-nodejs.jpg"],
    type: "course"
  },
  {
    title: "Java SE",
    provider: "Platzi",
    year: "2025",
    link: "https://platzi.com/@edychacin15/",
    images: ["/certificates/diploma-java.jpg"],
    type: "course"
  },
  {
    title: "HTML and CSS for Web Designers",
    provider: "Udemy",
    year: "2026",
    link: "https://ude.my/UC-e017564e-5e97-4174-9666-c014ff534390",
    images: ["/certificates/udemy-html-css.jpg"],
    type: "course"
  },
  {
    title: "URBE Programming Marathons",
    provider: "URBE University",
    year: "2024-2025",
    images: [
      "/certificates/maraton-nov-2025-1.jpg",
      "/certificates/maraton-jul-2025-1.jpg",
      "/certificates/maraton-mar-2025-1.jpg",
      "/certificates/maraton-2024.jpg"
    ],
    type: "trophy"
  },
  {
    title: "English Program Scholarship",
    provider: "CEVAZ",
    year: "2024 - Present",
    type: "book" 
  }
];