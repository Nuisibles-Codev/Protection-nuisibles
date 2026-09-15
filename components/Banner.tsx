'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const images: string[] = [
  '/image1.png',
  '/image2.png',
  '/image3.png', 
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 secondes pour laisser le temps de lire

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-slate-950 mt-20">
      
      {/* 1. CARROUSEL D'IMAGES EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }} // Opacité à 0.4 pour faire ressortir le texte
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
        </AnimatePresence>
        {/* Overlay de dégradé pour garantir le contraste du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/70" />
      </div>

      {/* 2. CONTENU PRINCIPAL (Texte + Boutons) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Badge Certibiocide */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 max-w-[200px] sm:max-w-[260px]"
        >
          <Image
            src="/garantie.png"
            alt="Garantie certibiocide contre les nuisibles"
            title="Garantie Certibiocide"
            width={260}
            height={100}
            priority
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </motion.div>

        {/* Titre H1 pour le SEO */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none uppercase mb-4"
        >
          Invasion de Nuisibles ? <br />
          <span className="text-brand-red">Intervention Rapide 7j/7</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-200 text-base sm:text-xl max-w-2xl font-medium mb-10 drop-shadow-sm leading-relaxed"
        >
          Experts en dératisation, désinsectisation et destruction de nids de frelons dans les Pyrénées-Orientales (66). Devis gratuit et immédiat.
        </motion.p>

        {/* LES BOUTONS D'ACTION (CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col xs:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link 
            href="/contact"
            className="w-full xs:w-auto bg-brand-red hover:bg-red-700 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-brand-red/30 transition-all uppercase tracking-wider text-center"
          > 
            Devis gratuit
          </Link>
          
          <Link 
            href="/pictures"
            className="w-full xs:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl border border-white/20 transition-all text-center"
          > 
            Nos interventions 
          </Link>
        </motion.div>
           
      </div>
    </div>
  );
}