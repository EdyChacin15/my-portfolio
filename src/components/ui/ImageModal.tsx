import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  imageUrls: string[];
  startIndex?: number;
  altText?: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrls, startIndex = 0, altText = 'Image', onClose }: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const isGallery = imageUrls.length > 1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  const prev = () => setCurrentIndex((i) => (i === 0 ? imageUrls.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === imageUrls.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={32} />
        </button>

        {isGallery && (
          <>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prev}>
              <ChevronLeft size={48} />
            </button>
            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next}>
              <ChevronRight size={48} />
            </button>
            <div className={styles.counter}>
              {currentIndex + 1} / {imageUrls.length}
            </div>
          </>
        )}

        <img 
          src={imageUrls[currentIndex]} 
          alt={`${altText} ${currentIndex + 1}`} 
          className={styles.image} 
        />
      </div>
    </div>
  );
};

export default ImageModal;