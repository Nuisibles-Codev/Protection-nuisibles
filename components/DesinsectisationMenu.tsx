import React from 'react'

export default function DesinsectisationMenu() {
  return (
    /* py-16 : Donne de l'air entre le haut de la page et le bas */
    <section 
      className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full text-slate-700 leading-relaxed" 
      aria-label="Désinsectisation à Perpignan et dans les Pyrénées-Orientales"
    >
        
        {/* TITRE PRINCIPAL H1 */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-6">
          Le déroulement de vos interventions de désinsectisation avec Protection Nuisibles
        </h1>
        
        {/* PARAGRAPHE D'ACCROCHE */}
        <p className="text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Chez <strong className="text-brand-blue font-semibold">Protection Nuisibles</strong>, nous intervenons rapidement pour éliminer tous types d'insectes nuisibles dans les Pyrénées-Orientales (66). 
          Que ce soit pour des fourmis, des cafards, des blattes, des puces ou d'autres envahisseurs, notre équipe agit efficacement pour assainir votre environnement.
        </p>

        {/* GRILLE DU PROTOCOLE */}
        <div className="space-y-6 mb-16">
          
          {/* ÉTAPE 1 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">1</span>
              Diagnostic et identification des insectes
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous réalisons une visite complète de votre domicile ou de vos locaux pour identifier 
              précisément les espèces d'insectes présentes et évaluer l'ampleur de l'infestation. 
              Un devis clair et adapté vous est remis après analyse.
            </p> 
          </div>

          {/* ÉTAPE 2 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">2</span>
              Préparation de l'intervention
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous sécurisons les lieux, protégeons vos biens et planifions les méthodes d'intervention 
              les plus adaptées selon le type d'insectes détectés : traitements chimiques, biologiques ou mécaniques.
            </p> 
          </div>

          {/* ÉTAPE 3 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">3</span>
              Traitement de désinsectisation
            </h2>
            <div className="sm:pl-11 space-y-4">
              <ul className="list-disc pl-5 space-y-1 text-base text-slate-600">
                <li>Éradication de cafards, blattes, fourmis, puces, moustiques, punaises, etc.</li>
                <li>Utilisation de produits professionnels certifiés</li>
                <li>Application de gels, pulvérisations ou fumigations selon les besoins</li>
                <li>Traitement curatif et préventif</li>
              </ul>
              <p className="text-base text-slate-600 font-medium">
                Nos interventions sont précises et respectueuses de votre environnement pour assurer 
                une désinsectisation efficace et durable.
              </p>
            </div>
          </div>

          {/* ÉTAPE 4 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">4</span>
              Prévention et recommandations
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Après le traitement, nous vous conseillons sur les bonnes pratiques pour éviter 
              toute nouvelle infestation : hygiène, colmatage des accès, entretien régulier, etc.
            </p>
          </div>

          {/* ÉTAPE 5 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">5</span>
              Contrôle et suivi post-intervention
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous réalisons un contrôle final pour s'assurer de l'efficacité du traitement et 
              vous proposons des solutions d'entretien et de suivi si nécessaire.
            </p>
          </div>

        </div>

        {/* ENCADRÉ DE CONCLUSION / CTA */}
        <div className="bg-brand-blue text-white p-6 rounded-2xl text-center shadow-xs">
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            Avec <strong className="underline">Protection Nuisibles</strong>, débarrassez-vous rapidement et durablement des insectes grâce à l’expertise 
            d’une équipe professionnelle, réactive et à votre écoute à Perpignan et dans toutes les Pyrénées-Orientales.
          </p>
        </div>

    </section>
  )
}