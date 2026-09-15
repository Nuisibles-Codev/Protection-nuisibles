import React from 'react'
import Image from 'next/image'

export default function DeratisationMenu() {
  return (
    /* pt-28 pour passer sous le Header fixe. max-w-5xl pour une mise en page aérée */
    <section className="pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto w-full text-slate-700 leading-relaxed" aria-label="Destruction de nids de frelons et guêpes à Perpignan et dans les Pyrénées-Orientales">
      
      {/* 1. TITRE PRINCIPAL H1 TOUT EN HAUT (SEO) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center mb-12 border-b border-slate-100 pb-6">
        Destruction Nids de Frelons & Guêpes à Perpignan (66)
      </h1>

      {/* 2. SECTION PRÉSENTATION / ACCROCHE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xs border border-slate-200">
          <Image
            src="/image13.png"
            alt="Intervention de destruction de nid de frelons et guêpes"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-base sm:text-lg text-slate-800 font-medium">
          <p>
            Chez <strong className="text-brand-blue font-semibold">Protection Nuisibles</strong>, nous sommes spécialistes de la <strong className="text-slate-900 font-bold">destruction de nids de frelons et guêpes à Perpignan</strong> et dans l'ensemble des Pyrénées-Orientales. 
            Nous intervenons en urgence pour <strong className="text-brand-blue font-semibold">neutraliser les nids en toute sécurité</strong>, même situés à grande hauteur.
          </p>
        </div>
      </section>

      {/* 3. LES DANGERS DES FRELONS ET GUÊPES */}
      <section aria-labelledby="dangers-frelons" className="mb-16">       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white">
          <div className="md:col-span-1 relative w-full h-[220px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
            <Image 
              src="/image10.png" 
              alt="Danger des piqûres de frelons asiatiques et guêpes" 
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 id="dangers-frelons" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Pourquoi faut-il détruire un nid de frelons ou de guêpes rapidement ?
            </h2>
            <div className="space-y-3 text-base">
              <p>
                Les <strong className="text-slate-900 font-semibold">frelons asiatiques, frelons européens et guêpes</strong> représentent une menace directe lorsqu'ils s'installent près des habitations, toitures ou jardins. 
                Leurs <strong className="text-slate-900 font-semibold">piqûres multiples</strong> peuvent déclencher des chocs anaphylactiques graves, particulièrement dangereux pour les personnes allergiques et les enfants.
              </p>
              <p>
                Le <strong className="text-slate-900 font-semibold">frelon asiatique</strong> est extrêmement agressif lorsqu'il défend son nid et cause de lourds dégâts sur la biodiversité locale. 
                Tenter de détruire soi-même un nid (au jet d'eau, au feu ou avec un aérosol classique) provoque une attaque collective massive et comporte d'importants risques de chute.
              </p>
              <p>
                Faire appel à <strong className="text-brand-blue font-medium">Protection Nuisibles</strong> vous garantit une élimination rapide, équipée de tenues de protection renforcées et d'outils adaptés aux nids difficiles d'accès.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOTRE PROCESSUS D'INTERVENTION */}
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-8 text-center">
        Notre protocole d'intervention sécurisé
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        
        {/* ÉTAPE 1 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image13.png" alt="Localisation du nid" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">1. Localisation & Analyse</h3>
            <p className="text-sm text-slate-600">Identification de l'espèce (frelon asiatique, européen, guêpe) et évaluation de l'accès au nid (toiture, arbre, génoise, cloison).</p>
          </div>
        </div>

        {/* ÉTAPE 2 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image16.png" alt="Sécurisation de la zone" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">2. Sécurisation des lieux</h3>
            <p className="text-sm text-slate-600">Périmètre de sécurité établi pour protéger les occupants et les voisins avant toute manipulation du nid.</p>
          </div>
        </div>

        {/* ÉTAPE 3 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image19.png" alt="Injection du produit biocide" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">3. Traitement & Éradication</h3>
            <p className="text-sm text-slate-600">Injection directe de poudre biocide homologuée au cœur du nid (à l'aide de perches télescopiques jusqu'à 15 mètres si nécessaire).</p>
          </div>
        </div>

        {/* ÉTAPE 4 */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex gap-4 items-start">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-slate-200">
            <Image src="/image18.png" alt="Retrait du nid et conseils" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-1">4. Enlèvement & Prévention</h3>
            <p className="text-sm text-slate-600">Retrait du nid neutralisé lorsque cela est accessible et conseils d'obturation pour éviter toute réinstallation la saison suivante.</p>
          </div>
        </div>

      </div>

      {/* 5. DERNIÈRE SECTION CONSEIL */}
      <section aria-labelledby="conseils-accompagnement" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-12">    
        <div className="md:col-span-2">
          <h2 id="conseils-accompagnement" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Intervention d'urgence & conseils de sécurité
          </h2>
          <p className="text-base">
            Si vous repérez un nid, ne vous en approchez pas et ne tentez pas de le boucher. Contactez immédiatement nos techniciens qualifiés Certibiocide pour une neutralisation garantie.
          </p>
        </div>
        <div className="md:col-span-1 relative w-full h-[150px] rounded-xl overflow-hidden border border-slate-200 shadow-xs">
          <Image 
            src="/image17.png" 
            alt="Technicien équipé pour la destruction de nids de frelons" 
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </div>
      </section>

      {/* 6. CONCLUSION / CALL TO ACTION */}
      <div className="text-center bg-brand-blue text-white p-6 rounded-2xl shadow-xs mt-8">
        <p className="text-base sm:text-lg font-medium leading-relaxed">
          Besoin d'une <strong className="underline">destruction de nid de frelons ou guêpes à Perpignan</strong>, Canet-en-Roussillon, Argeles-sur-Mer ou dans tout le département <strong className="font-bold">66</strong> ?<br className="hidden sm:inline"/>
          Contactez-nous pour une intervention d'urgence sécurisée et efficace.
        </p>
      </div>

    </section>
  )
}