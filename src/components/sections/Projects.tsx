// src/components/Projects.tsx
import ProjectCard from "../ui/ProjectCard";
import { projectsData } from "../../data/index.ts";
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>A selection of applications and algorithms I've built.</p>
        
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