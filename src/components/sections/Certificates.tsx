// src/components/sections/Certificates.tsx
import { useState } from 'react';
import { certificatesData } from '../../data/index.ts';
import SectionHeader from '../ui/SectionHeader';
import CertificateCard from '../ui/CertificateCard';
import ImageModal from '../ui/ImageModal';
import styles from './Certificates.module.css';

const Certificates = () => {
  // 1. Ahora el estado guarda un objeto con el array y el índice inicial
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
              // 2. Al hacer clic, pasamos el array de imágenes y el índice 0 (primera foto)
              onImageClick={(_url) => setSelectedGallery({ images: cert.images!, index: 0 })} 
            />
          ))}
        </div>
      </div>

      {/* 3. Renderizamos el Modal con los nuevos datos de galería */}
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