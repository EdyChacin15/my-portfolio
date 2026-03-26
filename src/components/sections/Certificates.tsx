import { Award, Trophy, BookOpen } from "lucide-react";
import { certificatesData } from '../../data/index.ts';
import styles from './Certificates.module.css';

const getIcon = (type: string) => {
  switch (type) {
    case 'course': return <BookOpen size={20} />;
    case 'trophy': return <Trophy size={20} />;
    default: return <Award size={20} />;
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Certificates & Achievements</h2>
        <p className={styles.subtitle}>Continuous learning and competitive programming history.</p>

        <div className={styles.grid}>
          {certificatesData.map((cert, index) => {
            const CardContent = (
              <>
                <div className={styles.iconWrapper}>
                  {getIcon(cert.type)}
                </div>
                <div className={styles.certContent}>
                  <h3 className={styles.certTitle}>
                    {cert.title}
                  </h3>
                  <p className={styles.certDetails}>
                    {cert.provider} · {cert.year}
                  </p>
                </div>
              </>
            );

            return cert.link ? (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.certCard}
              >
                {CardContent}
              </a>
            ) : (
              <div key={index} className={styles.certCard}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;