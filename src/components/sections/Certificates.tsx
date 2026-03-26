import { Award, Trophy, BookOpen } from "lucide-react";
import styles from './Certificates.module.css';

const certificates = [
  // --- Diplomas de Platzi (Quitamos Java) ---
  {
    title: "Backend con Node.js: API REST con Express.js",
    provider: "Platzi",
    year: "2025",
    link: "https://platzi.com/@edychacin15/",
    type: "course"
  },
  
  // --- NUEVO: Certificados de Maratones (Participación) ---
  {
    title: "URBE Programming Marathon Participation",
    provider: "URBE University",
    year: "2025",
    link: "https://link-a-tu-certificado-maraton-2025.com",
    type: "trophy"
  },
  {
    title: "URBE Programming Marathon Participation",
    provider: "URBE University",
    year: "2024",
    link: "https://link-a-tu-certificado-maraton-2024.com",
    type: "trophy"
  },

  // --- Otros (CEVAZ sigue siendo relevante) ---
  {
    title: "English Program Scholarship",
    provider: "CEVAZ",
    year: "2024 - Present",
    type: "book"
  }
];

// Función auxiliar para elegir el icono según el tipo de certificado
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
          {certificates.map((cert, index) => {
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

            // Si tiene link, es una tarjeta clickeable (<a>)
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
              // Si no tiene link, es un div estático
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