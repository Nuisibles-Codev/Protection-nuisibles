import React from 'react'

export default function Equipment() {
  return (
    <section className="pt-20 pb-12 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* TITRE ET ACCROCHE */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-3 py-1 rounded-full">
            Expertise Locale & Certifiée
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Votre Partenaire Anti-Nuisibles dans le 66
          </h2>
        </div>

        {/* BLOC DE TEXTE RESTRUCTURÉ */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 shadow-sm">
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
            Implantée dans les <strong className="text-slate-900 font-bold">Pyrénées-Orientales</strong>, <span className="text-brand-blue font-bold">Protection Nuisibles</span> accompagne les particuliers et les professionnels dans la lutte contre les rats, souris, blattes, punaises de lit, guêpes, frelons et pigeons occupant les bâtiments. Chaque situation nécessite de distinguer le nuisible, les signes d'activité et les conditions d'occupation des lieux.
          </p>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Notre démarche repose sur un diagnostic utile, la définition des zones à traiter ou à protéger et des conseils pour prévenir les réinfestations ou les stationnements répétés de pigeons. Une habitation, un restaurant, une réserve ou un hébergement saisonnier n'imposent pas les mêmes précautions. Nous expliquons les étapes proposées et les consignes de sécurité selon le protocole retenu.
          </p>

          {/* PETITS BADGES DE RASSURANCE EN BAS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 text-center">
            <div className="flex flex-col items-center p-3">
              <span className="text-2xl mb-1" role="img" aria-label="Localisation">📍</span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Tout le 66</span>
            </div>
            <div className="flex flex-col items-center p-3 border-y sm:border-y-0 sm:border-x border-slate-200/60">
              <span className="text-2xl mb-1" role="img" aria-label="Horloge">⏱️</span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Intervention Rapide</span>
            </div>
            <div className="flex flex-col items-center p-3">
              <span className="text-2xl mb-1" role="img" aria-label="Document">📜</span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Devis 100% Gratuit</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}