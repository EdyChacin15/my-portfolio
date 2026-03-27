import { useState } from 'react';
import { certificatesData } from '../../data/index.ts';
import SectionHeader from '../ui/SectionHeader';
import CertificateCard from '../ui/CertificateCard';
import ImageModal from '../ui/ImageModal';
import styles from './Certificates.module.css';

const Certificates = () => {
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          title="Certificates & Achievements" 
          subtitle="Continuous learning and competitive programming history." 
        />

        <div className={styles.grid}>
          {certificatesData.map((cert, index) => (
            <CertificateCard 
              key={index} 
              cert={cert} 
              onImageClick={(_url) => setSelectedGallery({ images: cert.images!, index: 0 })} 
            />
          ))}
        </div>
      </div>

      {selectedGallery && (
        <ImageModal 
          imageUrls={selectedGallery.images} 
          startIndex={selectedGallery.index} 
          altText="Certificate Full View" 
          onClose={() => setSelectedGallery(null)} 
        />
      )}
    </section>
  );
};

export default Certificates;