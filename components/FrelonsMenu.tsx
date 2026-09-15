import React from 'react'

export default function FrelonsMenu() {
  return (
    /* py-16 : Espacement idéal entre le haut de page et le bas */
    <section 
      className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full text-slate-700 leading-relaxed" 
      aria-label="Destruction de nids de guêpes et frelons dans les Pyrénées-Orientales"
    >
        
        {/* TITRE PRINCIPAL H1 (Optimisé SEO avec accents) */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-6">
          L'élimination des nids de guêpes et frelons avec Protection Nuisibles
        </h1>
        
        {/* PARAGRAPHE D'ACCROCHE */}
        <p className="text-base sm:text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
          Chez <strong className="text-brand-blue font-semibold">Protection Nuisibles</strong>, nous intervenons rapidement et en toute sécurité pour détruire 
          les nids de guêpes et frelons dans les Pyrénées-Orientales (66). Protégez votre famille, vos clients ou vos employés grâce à notre expertise professionnelle.
        </p>

        {/* STRUCTURE DES ÉTAPES */}
        <div className="space-y-6 mb-16">
          
          {/* ÉTAPE 1 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">1</span>
              Évaluation de la situation & Diagnostic
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous réalisons une inspection complète pour localiser précisément le ou les nids 
              (toitures, arbres, combles, génoises, cloisons) et évaluer la dangerosité de l'espèce. 
              Un devis clair vous est remis avant toute intervention.
            </p>    
          </div>

          {/* ÉTAPE 2 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">2</span>
              Préparation sécurisée de l'intervention
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Avant d'agir, nous établissons un périmètre de sécurité pour protéger les habitants et 
              limiter les risques d'attaques. Nos techniciens interviennent équipés de combinaisons de protection intégrales contre les piqûres.
            </p> 
          </div>

          {/* ÉTAPE 3 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">3</span>
              Destruction et neutralisation du nid
            </h2>
            <div className="sm:pl-11 space-y-4">
              <ul className="list-disc pl-5 space-y-1 text-base text-slate-600">
                <li>Traitement spécifique pour guêpes, frelons européens et frelons asiatiques</li>
                <li>Utilisation d'insecticides professionnels homologués Certibiocide</li>
                <li>Poudrage sous pression ou perches télescopiques pour les nids en hauteur</li>
                <li>Intervention rapide, discrète et garantie</li>
              </ul>
              <p className="text-base text-slate-600 font-medium">
                Nos méthodes garantissent une élimination totale de la colonie, supprimant tout risque de réinstallation immédiate.
              </p>
            </div>
          </div>

          {/* ÉTAPE 4 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">4</span>
              Conseils de prévention
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Après la destruction, nous vous prodiguons des recommandations sur mesure pour éviter le retour des frelons : 
              obturation des fentes d'accès, conseils d'entretien des toitures et surveillance des zones à risques.
            </p>
          </div>

          {/* ÉTAPE 5 */}
          <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-blue text-white text-sm font-black shrink-0">5</span>
              Nettoyage et contrôle de sécurité
            </h2>
            <p className="text-base text-slate-600 sm:pl-11">
              Nous nous assurons que l'activité autour du nid est définitivement éteinte avant de quitter les lieux 
              et procédons à l'enlèvement du nid si celui-ci est accessible et sécurisé.
            </p>
          </div>

        </div>

        {/* ENCADRÉ BLOC DE FIN */}
        <div className="bg-brand-blue text-white p-6 rounded-2xl text-center shadow-xs">
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            Avec <strong className="underline">Protection Nuisibles</strong>, éliminez en toute sécurité les nids de guêpes et frelons grâce à des techniciens certifiés 
            et des interventions d'urgence dans tout le département des Pyrénées-Orientales (66).
          </p>
        </div>

    </section>
  )
}