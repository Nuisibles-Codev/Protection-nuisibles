import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - Protection Nuisibles 66',
  description: 'Mentions légales, informations éditoriales et hébergement du site Protection Nuisibles à Perpignan.',
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-100 pb-4">
        Mentions légales
      </h1>
      
      <div className="space-y-8">
        {/* ÉDITEUR DU SITE */}
        <section aria-labelledby="editeur-site">
          <h2 id="editeur-site" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Éditeur du site
          </h2>
          <p className="text-base sm:text-lg space-y-1">
            <span className="block"><strong>Nom :</strong> GREGORY ROBLES</span>
            <span className="block"><strong>Forme juridique :</strong> Auto-entrepreneur</span>
            <span className="block"><strong>Dénomination commerciale :</strong> Protection Nuisibles</span>
            <span className="block"><strong>Adresse :</strong> 88 chemin des charettes, 66000 Perpignan, France</span>
            <span className="block">
              <strong>Téléphone :</strong>{' '}
              <a href="tel:+33757516414" className="text-brand-blue hover:underline font-medium">
                +33 7 57 51 64 14
              </a>
            </span>
            <span className="block">
              <strong>Email :</strong>{' '}
              <a href="mailto:contact@protection-nuisibles.fr" className="text-brand-blue hover:underline font-medium">
                contact@protection-nuisibles.fr
              </a>
            </span>
            <span className="block"><strong>Directeur de publication :</strong> Gregory ROBLES</span>
            <span className="block"><strong>SIREN :</strong> 834 799 751</span>
            <span className="block"><strong>SIRET :</strong> 834 799 751 00013</span>
            <span className="block"><strong>TVA Intracommunautaire :</strong> FR87838906659</span>
          </p>
        </section>

        {/* HÉBERGEUR */}
        <section aria-labelledby="hebergeur-site">
          <h2 id="hebergeur-site" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Hébergeur
          </h2>
          <p className="text-base sm:text-lg">
            <strong>Nom :</strong> Vercel Inc.<br />
            <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <strong>Site web :</strong>{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">
              https://vercel.com
            </a>
          </p>
        </section>

        {/* CONDITIONS D'UTILISATION */}
        <section aria-labelledby="conditions-utilisation">
          <h2 id="conditions-utilisation" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Conditions d'utilisation
          </h2>
          <p className="text-base sm:text-lg">
            Le site Protection Nuisibles est accessible à l'adresse : <span className="font-medium text-slate-900">https://www.protection-nuisibles.fr</span>.<br />
            Son utilisation est régie par les présentes conditions. En utilisant le site, vous acceptez ces conditions. Elles peuvent être modifiées à tout moment sans préavis.
          </p>
        </section>

        {/* LIMITATION DE RESPONSABILITÉ */}
        <section aria-labelledby="limitation-responsabilite">
          <h2 id="limitation-responsabilite" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Limitation de responsabilité
          </h2>
          <p className="text-base sm:text-lg">
            Les informations présentes sur ce site sont fournies de bonne foi, mais peuvent contenir des inexactitudes ou omissions. L'entreprise Protection Nuisibles ne saurait être tenue responsable de toute utilisation ou interprétation erronée.
          </p>
        </section>

        {/* LITIGES */}
        <section aria-labelledby="litiges">
          <h2 id="litiges" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Litiges
          </h2>
          <p className="text-base sm:text-lg">
            Les présentes conditions sont régies par la loi française et tout litige relève des tribunaux français. La langue de référence pour tout contentieux est le français.
          </p>
        </section>
      </div>

    </main>
  )
}