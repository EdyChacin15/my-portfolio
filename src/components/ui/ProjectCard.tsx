import type { ProjectType } from '../../types';
import { Github, ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';
import Badge from './Badge';

const ProjectCard = ({ title, description, tags, image, github, demo }: ProjectType) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>

        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github size={20} /> Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;