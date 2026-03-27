import { Award, Trophy, BookOpen, ExternalLink } from "lucide-react";
import type { CertificateType } from '../../types';
import styles from './CertificateCard.module.css';

// 1. AQUÍ ESTÁ LA CLAVE: Le decimos a TypeScript exactamente qué va a recibir
interface CertificateCardProps {
  cert: CertificateType;
  onImageClick: (url: string) => void; 
}

// 2. Aquí usamos esa interfaz (CertificateCardProps)
const CertificateCard = ({ cert, onImageClick }: CertificateCardProps) => {
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen size={20} />;
      case 'trophy': return <Trophy size={20} />;
      default: return <Award size={20} />;
    }
  };

  return (
    <div className={styles.certCard}>
      {/* Usamos cert.images[0] porque ahora es un arreglo de galería */}
      {cert.images && cert.images.length > 0 && (
        <div 
          className={styles.imageWrapper} 
          onClick={() => onImageClick(cert.images![0])}
        >
          <img src={cert.images[0]} alt={cert.title} className={styles.certThumbnail} />
        </div>
      )}

      <div className={styles.certContent}>
        <div className={styles.headerRow}>
          <div className={styles.iconWrapper}>{getIcon(cert.type)}</div>
          <h3 className={styles.certTitle}>{cert.title}</h3>
        </div>
        
        <p className={styles.certDetails}>
          {cert.provider} · {cert.year}
        </p>

        {cert.link && (
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkButton}
          >
            <ExternalLink size={14} /> View Credential
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;