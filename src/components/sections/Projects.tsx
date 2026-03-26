// src/components/Projects.tsx
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "../../data/index.ts";
import styles from './Projects.module.css';
import SectionHeader from "../ui/SectionHeader";

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of applications and algorithms I've built." 
        />
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;