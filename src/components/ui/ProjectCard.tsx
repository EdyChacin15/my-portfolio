import { ExternalLink, Github } from "lucide-react";
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, tags, image, github, demo }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.links}>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
                <Github size={18} />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;