'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Description() {
  // Hooks Intersection Observer pour déclencher les animations au défilement
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <AnimatePresence>
      <section className="pt-8 pb-16 bg-white px-4 sm:px-6 max-w-6xl mx-auto">
        
        {/* TITRE 1 : ZONE D'INTERVENTION */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Zone d'intervention
          </h2>
        </div>

        {/* SECTION LOCALISATION (CARTE + TEXTE INTRO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20 bg-slate-50 p-6 rounded-2xl border border-slate-100">
          {/* Conteneur de la carte Google Maps */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-xs border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d2.863226134086672!3d42.69910031702662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1745486342047!5m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
          
          {/* Texte introductif animé */}
          <div className="text-slate-700 text-lg leading-relaxed">
            <motion.p
              ref={ref4}
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 30 }}
              exit={{ opacity: 0, y: 30 }}  
              transition={{ duration: 0.5 }}
            > 
              Basée dans les <strong className="text-brand-blue font-semibold">Pyrénées-Orientales (66)</strong>, Protection Nuisibles intervient rapidement sur tout le département : Perpignan, Canet-en-Roussillon, Argelès-sur-Mer, Céret, Prades et leurs alentours.
              Nous vous proposons des solutions efficaces contre les rats, souris, insectes, guêpes, frelons et autres nuisibles, aussi bien en milieu urbain que rural.
            </motion.p>
          </div>
        </div>

        {/* TITRE 2 : POURQUOI CHOISIR */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Pourquoi choisir Protection Nuisibles ?
          </h2>
        </div>

        {/* LISTE DES ATOUTS / ARTICLES */}
        <div className="bg-white">
          <ul className="space-y-12">
            
            {/* ATOUT 1 */}
            <li className="flex flex-col md:flex-row items-center gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100/80">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  ref={ref6}  
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : -50 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/image12.png"
                    alt="Équipement professionnel contre les rongeurs et insectes"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover shadow-xs"
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <motion.p
                  ref={ref7}  
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: inView7 ? 1 : 0, x: inView7 ? 0 : 50 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                >
                  <span className="block text-xl font-bold text-slate-900 mb-2">Interventions rapides et efficaces</span>
                  Nous agissons en urgence ou sur rendez-vous pour éradiquer durablement les infestations et protéger vos espaces de vie ou de travail.
                </motion.p>
              </div>
            </li>

            {/* ATOUT 2 */}
            <li className="flex flex-col md:flex-row-reverse items-center gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100/80">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  ref={ref9}  
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: inView9 ? 1 : 0, x: inView9 ? 0 : 50 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/image3.png"
                    alt="Traitement contre les insectes volants et rampants"
                    width={200}
                    height={200}
                    className="rounded-xl object-cover shadow-xs"
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <motion.p
                  ref={ref8}  
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: inView8 ? 1 : 0, x: inView8 ? 0 : -50 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                > 
                  <span className="block text-xl font-bold text-slate-900 mb-2">Produits homologués et respectueux de l'environnement</span>
                  Nous utilisons uniquement des traitements agréés, sûrs pour votre famille, vos animaux domestiques et respectueux de l'écosystème local.
                </motion.p>
              </div>
            </li>

            {/* ATOUT 3 */}
            <li className="flex flex-col md:flex-row items-center gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100/80">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  ref={ref10}  
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: inView10 ? 1 : 0, x: inView10 ? 0 : -50 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/image2.png"
                    alt="Expertise anti-nuisibles en milieu rural et urbain"
                    width={200}
                    height={200}
                    className="rounded-xl object-cover shadow-xs"
                  />
                </motion.div>
              </div>
              <div className="w-full md:w-2/3">
                <motion.p
                  ref={ref11}  
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: inView11 ? 1 : 0, x: inView11 ? 0 : 50 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                >
                  <span className="block text-xl font-bold text-slate-900 mb-2">Expertise locale reconnue</span>
                  Notre parfaite connaissance du terrain et des comportements des nuisibles dans les Pyrénées-Orientales nous permet d'agir efficacement en toute situation.
                </motion.p>
              </div>
            </li>

            {/* ATOUT 4 */}
            <li className="flex flex-col md:flex-row-reverse items-center gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100/80">
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div
                  ref={ref13} 
                  initial={{ opacity: 0, x: 50 }} 
                  animate={{ opacity: inView13 ? 1 : 0, x: inView13 ? 0 : 50 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/image1.png"
                    alt="Technicien équipé pour intervention anti-nuisibles"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover shadow-xs"
                  />
                </motion.div>
              </div>
               <div className="w-full md:w-2/3">
                <motion.p
                  ref={ref12}  
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: inView12 ? 1 : 0, x: inView12 ? 0 : -50 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-600 text-base sm:text-lg leading-relaxed"
                >
                  <span className="block text-xl font-bold text-slate-900 mb-2">Matériel professionnel haut de gamme</span>
                  Nous sommes équipés des dernières technologies pour garantir des interventions rapides, précises et sûres contre tous types d'infestations.
                </motion.p>
              </div>
            </li>

          </ul>
        </div>
      </section>
    </AnimatePresence>
  );
}