import React from 'react'
import Image from 'next/image'

export default function PunaisesMenu() {
  return (
    /* pt-28 pour passer sous le Header fixe. max-w-5xl pour une mise en page aérée */
    <section 
      className="pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-slate-700 leading-relaxed" 
      aria-label="Traitement punaises de lit à Perpignan et dans les Pyrénées-Orientales"
    >
      
      {/* 1. TITRE PRINCIPAL H1 TOUT EN HAUT (SEO) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center mb-12 border-b border-slate-100 pb-6">
        Traitement Punaises de Lit à Perpignan et dans les Pyrénées-Orientales (66)
      </h1>

      {/* 2. SECTION PRÉSENTATION / ACCROCHE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xs border border-slate-200">
          <Image
            src="/image13.png"
            alt="Inspection et détection de punaises de lit"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-base sm:text-lg text-slate-800 font-medium">
          <p>
            Chez <strong className="text-brand-blue font-semibold">Protection Nuisibles</strong>, nous sommes experts dans le <strong className="text-slate-900 font-bold">traitement des punaises de lit à Perpignan</strong> et dans tout le département 66. 
            Nos méthodes professionnelles permettent d’<strong className="text-brand-blue font-semibold">éliminer les punaises de lit et leurs œufs</strong> de manière rapide, sécurisée et durable.
          </p>
        </div>
      </section>

      {/* 3. LES DANGERS ET NUISANCES DES PUNAISES DE LIT */}
      <section aria-labelledby="dangers-punaises" className="mb-16">       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white">
          <div className="md:col-span-1 relative w-full h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
            <Image 
              src="/image10.png" 
              alt="Dégâts et démangeaisons causés par les punaises de lit" 
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 id="dangers-punaises" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Pourquoi faut-il agir immédiatement contre les punaises de lit ?
            </h2>
            <div className="space-y-3 text-base">
              <p>
                Les <strong className="text-slate-900 font-semibold">punaises de lit</strong> se multiplient à une vitesse fulgurante et se glissent dans le moindre interstice (sommiers, matelas, plinthes, prises électriques). 
                Leurs <strong className="text-slate-900 font-semibold">piqûres répétées</strong> provoquent des démangeaisons intenses, des réactions allergiques et des troubles sévères du sommeil.
              </p>
              <p>
                Au-delà des impacts physiques, une infestation génère un fort <strong className="text-slate-900 font-semibold">stress psychologique et de l'anxiété</strong> au quotidien. 
                Tenter de les éradiquer soi-même avec des produits grand public s'avère souvent inefficace et risque de les disperser dans d'autres pièces de votre logement.
              </p>
              <p>
                Pour stopper l'infestation avant qu'elle ne devienne incontrôlable, l'intervention d'un expert est indispensable. 
                <strong className="text-brand-blue font-medium"> Protection Nuisibles</strong> déploie des solutions professionnelles pour détruire les adultes, les larves et les œufs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOTRE PROCESSUS D'INTERVENTION */}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-8 text-center">
        Notre protocole d'éradication professionnel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* ÉTAPE 1 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image13.png" alt="Détection et inspection" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">1. Diagnostic & Détection</h3>
            <p className="text-sm text-slate-600">Inspection minutieuse des nids potentiels (literie, mobilier, plinthes) pour évaluer le niveau d'infestation et choisir la méthode adaptée.</p>
          </div>
        </div>

        {/* ÉTAPE 2 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image16.png" alt="Préparation des lieux" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">2. Protocoles de préparation</h3>
            <p className="text-sm text-slate-600">Recommandations précises pour préparer les pièces et le linge avant notre passage afin d'optimiser l'efficacité du traitement.</p>
          </div>
        </div>

        {/* ÉTAPE 3 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image19.png" alt="Traitement choc" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">3. Traitement choc & Éradication</h3>
            <p className="text-sm text-slate-600">Application de traitements biocides et/ou thermiques professionnels ciblant les punaises à tous les stades de leur développement (œufs, larves, adultes).</p>
          </div>
        </div>

        {/* ÉTAPE 4 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image18.png" alt="Contrôle et suivi" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">4. Passage de contrôle & Garantie</h3>
            <p className="text-sm text-slate-600">Deuxième passage systématique pour s'assurer de l'élimination totale du cycle de reproduction et mise en place de pièges de détection.</p>
          </div>
        </div>

      </div>

      {/* 5. DERNIÈRE SECTION CONSEIL */}
      <section aria-labelledby="conseils-accompagnement" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12">    
        <div className="md:col-span-2">
          <h2 id="conseils-accompagnement" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Conseils et accompagnement sur-mesure
          </h2>
          <p className="text-base">
            Nous vous accompagnons à chaque étape, du lavage à haute température de votre linge jusqu'aux gestes de prévention lors de vos déplacements pour éviter toute réinfestation.
          </p>
        </div>
        <div className="md:col-span-1 relative w-full h-[150px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
          <Image 
            src="/image17.png" 
            alt="Technicien prodiguant des conseils anti-punaises de lit" 
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </div>
      </section>

      {/* 6. CONCLUSION / CALL TO ACTION */}
      <div className="text-center bg-brand-blue text-white p-6 rounded-2xl shadow-xs mt-8">
        <p className="text-base sm:text-lg font-medium leading-relaxed">
          Contactez notre équipe pour toute <strong className="underline">intervention contre les punaises de lit à Perpignan</strong>, Canet-en-Roussillon, Saint-Estève, ou ailleurs dans les <strong className="font-bold">Pyrénées-Orientales</strong>.<br className="hidden sm:inline"/>
          Nous intervenons rapidement, avec une discrétion absolue et des résultats garantis.
        </p>
      </div>

    </section>
  )
}