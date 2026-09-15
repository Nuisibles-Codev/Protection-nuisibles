import React from 'react'

export default function About() {
  return (
    /* py-16 : Espace régulier en haut et en bas. max-w-3xl pour une lecture optimale */
    <section className="py-16 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">       
        {/* TITRE PRINCIPAL DE LA PAGE */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8 border-b border-slate-100 pb-4 text-center md:text-left"> 
          Qui sommes-nous ? 
        </h1>
        
        <p className="text-base sm:text-lg mb-8 font-medium text-slate-800">
          Protection Nuisibles, c’est avant tout une équipe d’experts dédiée à la protection de votre cadre de vie, 
          avec des solutions efficaces contre tous types de nuisibles. Basée dans les Pyrénées-Orientales (66), 
          notre entreprise repose sur des valeurs solides : réactivité, professionnalisme et engagement qualité.
        </p>

        {/* SOUS-TITRE 1 */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-10 mb-4"> 
          Une entreprise à taille humaine, proche de ses clients 
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Chez Protection Nuisibles, chaque intervention est personnalisée. Nous plaçons l'écoute et le conseil au cœur de notre démarche, 
          pour vous proposer des traitements adaptés à votre situation. Particuliers, professionnels ou collectivités, 
          nous intervenons rapidement et en toute discrétion.
        </p>

        {/* SOUS-TITRE 2 */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-10 mb-4"> 
          Des techniciens certifiés, un savoir-faire reconnu 
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Notre équipe est composée de techniciens formés aux méthodes les plus récentes de lutte anti-nuisibles 
          (dératisation, désinsectisation, désinfection). Nous utilisons des produits homologués et des techniques 
          respectueuses de l’environnement et de votre sécurité.
        </p>

        {/* SOUS-TITRE 3 */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-10 mb-4"> 
          Une exigence de qualité à chaque étape 
        </h2>
        <p className="text-base sm:text-lg mb-8">
          De votre premier appel à la finalisation de l’intervention, nous veillons à respecter les délais, 
          à garantir une intervention soignée, et à assurer votre satisfaction totale. Chaque prestation est suivie 
          d’un contrôle qualité rigoureux et, si nécessaire, de recommandations pour éviter toute récidive.
        </p>

        {/* ENCADRÉ DE CONCLUSION */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center font-semibold text-brand-blue text-base sm:text-lg shadow-xs">
          Protection Nuisibles, votre partenaire de confiance dans le 66 pour un environnement sain, sécurisé et sans nuisibles.
        </div>
    </section>
  )
}