'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: '/image1.png', alt: 'Intervention anti-nuisibles - Protection Nuisibles 66' },
    { src: '/image2.png', alt: 'Traitement contre les rongeurs et insectes à Perpignan' },
    { src: '/image3.png', alt: 'Désinsectisation professionnelle Pyrénées-Orientales' },
    { src: '/image4.png', alt: 'Équipement d’éradication de nuisibles' },
    { src: '/image5.png', alt: 'Pose de dispositifs anti-rats et souris' },
    { src: '/image6.png', alt: 'Dératisation sur le terrain - Protection Nuisibles' },
    { src: '/image7.png', alt: 'Technicien en pleine désinsectisation locale' },
    { src: '/image8.png', alt: 'Destruction de nid de frelons et guêpes' },
    { src: '/image9.png', alt: 'Traitement curatif des surfaces habitées' },
    { src: '/image10.png', alt: 'Protection et prévention contre les envahisseurs' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  const openLightbox = (imageSrc: string): void => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = (): void => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* GRILLE DE GALERIE RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image: GalleryImage, index: number) => (
          <div 
            className="group relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs cursor-pointer bg-slate-100 transition-all duration-300 hover:shadow-md hover:scale-[1.02]" 
            key={image.src || index} 
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 250px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Effet de survol discret */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODALE IMMERSIVE */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 transition-all duration-300 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Bouton de fermeture */}
          <button 
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-slate-300 transition-colors cursor-pointer w-10 h-10 flex items-center justify-center bg-white/10 rounded-full"
            onClick={closeLightbox}
            aria-label="Fermer la galerie"
          >
            &times;
          </button>
          
          {/* Conteneur de l'image zoomée */}
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={currentImage} 
              alt="Intervention agrandie Protection Nuisibles" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10" 
            />
          </div>
        </div>
      )}
    </div>
  );
}