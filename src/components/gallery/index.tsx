import React, { useState, useEffect, useCallback } from 'react';
import {
  GalleryGrid,
  ImageCard,
  ModalBackground,
  ModalImage,
  CloseButton,
} from './styles';
import type { ImageType } from '../../types';

type GalleryProps = {
  images: ImageType[];
};

export default function Gallery({ images }: GalleryProps) {
  const [selectedImg, setSelectedImg] = useState<ImageType | null>(null);

  // Close modal on Escape key press
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImg(null);
      }
    },
    []
  );

  useEffect(() => {
    if (selectedImg) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden'; // prevent background scroll
    } else {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImg, onKeyDown]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedImg(null);
    }
  };

  return (
    <>
      <GalleryGrid>
        {images.map((img, idx) => (
          <ImageCard
            key={idx}
            src={img.src}
            alt={img.alt}
            tabIndex={0}
            onClick={() => setSelectedImg(img)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedImg(img);
              }
            }}
            role="button"
            aria-label={`View image: ${img.alt}`}
          />
        ))}
      </GalleryGrid>

      {selectedImg && (
        <ModalBackground
          onClick={onBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-image"
        >
          <ModalImage id="modal-image" src={selectedImg.src} alt={selectedImg.alt} />
          <CloseButton
            aria-label="Close modal"
            onClick={() => setSelectedImg(null)}
          >
            ×
          </CloseButton>
        </ModalBackground>
      )}
    </>
  );
}
