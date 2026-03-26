import { skillsData } from '../../data/index.ts';
import Badge from '../ui/Badge';
import styles from './Skills.module.css';

const colorMap: Record<string, 'blue' | 'green' | 'yellow' | 'gray'> = {
  'Frontend': 'blue',
  'Backend': 'green',
  'Database & Tools': 'yellow',
};

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>Technologies and tools I work with.</p>

        <div className={styles.grid}>
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className={styles.categoryTitle}>
                {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <Badge key={skill} color={colorMap[category.title] || 'gray'}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;