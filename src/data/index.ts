import type { ProjectType, SkillCategoryType, CertificateType } from '../types/index.ts';

export const projectsData: ProjectType[] = [
  {
    title: "Personal Portfolio Web App",
    description: "A responsive and interactive personal portfolio built from scratch. Designed with a focus on clean architecture and UI/UX best practices, featuring custom React hooks, CSS Modules for scoped styling, and dynamic staggered animations.",
    tags: ["React", "TypeScript", "Vite", "CSS Modules"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/edychacin15/my-portfolio",
    // demo: "https://tu-enlace-de-vercel.vercel.app/" // Puedes descomentar esta línea y poner el link cuando lo subas
  },
  {
    title: "Custom Music Player",
    description: "A fully functional web-based music player built with Vanilla JavaScript and the HTML5 Audio API. It features dynamic track switching, real-time progress tracking, custom UI controls (shuffle, repeat), and interactive playlist management.",
    tags: ["JavaScript", "HTML5 Audio", "CSS3", "DOM Manipulation"],
    image: "/projects/music-player.jpg", 
    github: "https://github.com/edychacin15/music-player",
    demo: "https://music-player-nu-pearl.vercel.app/"
  },
  {
    title: "Pokédex Web App",
    description: "A Single Page Application (SPA) built with Vanilla JavaScript that consumes the PokéAPI. It features asynchronous data fetching using Axios, dynamic DOM manipulation, advanced filtering by Pokémon type, and numerical search capabilities.",
    tags: ["JavaScript", "REST API", "HTML/CSS", "Axios"],
    image: "/projects/pokedex.jpg",
    github: "https://github.com/edychacin15/pokedex",
    demo: "https://pokedex-weld-kappa.vercel.app/"
  },
  {
    title: "Academic Management System",
    description: "A full-stack platform for educational institutions to manage user roles, course enrollments, and billing. Features include debt tracking, installment payments, and automated PDF report generation.",
    tags: ["Node.js", "Express", "MySQL", "JavaScript"],
    image: "/projects/centro-educativo.jpg",
    github: "https://github.com/edychacin15/centro-educativo-c",
    demo: "https://centro-educativo-c.vercel.app/home.html"
  },
  {
    title: "Spiderverse Web Platform",
    description: "A collaborative full-stack application dedicated to the Spider-Man universe. Co-developed using React 19 and Tailwind CSS, featuring interactive 3D elements with Three.js, smooth UI transitions via Framer Motion, and robust backend data management powered by Supabase.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Supabase", "Three.js"],
    image: "/projects/spider.jpg",
    github: "https://github.com/Enma0101/Spiderverse_page",
    demo: "https://comicsspider.vercel.app/"
  },
  {
    title: "Lexical & Syntactic Analyzer",
    description: "A desktop text editor integrated with a custom compiler frontend. Built with Java Swing, it features multi-tab management, a lexical analyzer generated with JFlex for token identification, and a syntactic analyzer built with Java CUP for grammar validation.",
    tags: ["Java", "Swing", "JFlex", "Java CUP"],
    image: "/projects/editor.jpg",
    github: "https://github.com/edychacin15/analizador-lexico-sintactico",
  },
  {
    title: "Competitive Programming Algorithms",
    description: "A collection of algorithmic solutions developed in Java for the URBE Programming Marathons. The repository demonstrates problem-solving skills under time constraints, implementing efficient data structures, and handling file I/O for automated test case validation.",
    tags: ["Java", "Algorithms", "Data Structures", "Problem Solving"],
    image: "/projects/java.jpg",
    github: "https://github.com/edychacin15/maraton-urbe",
  }
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
    year: "2025",
    images: [
      "/certificates/maraton-nov-2025-1.jpg",
      "/certificates/maraton-jul-2025-1.jpg",
      "/certificates/maraton-mar-2025-1.jpg"
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