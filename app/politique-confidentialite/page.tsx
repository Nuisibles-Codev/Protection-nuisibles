import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Protection Nuisibles 66',
  description: 'Politique de confidentialité et protection des données personnelles (RGPD) du site Protection Nuisibles à Perpignan.',
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/politique-confidentialite',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-100 pb-4">
        Politique de confidentialité
      </h1>

      <div className="space-y-8">
        {/* PREAMBULE */}
        <section>
          <p className="text-base sm:text-lg italic text-slate-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
          <p className="text-base sm:text-lg mt-3">
            Dans le cadre de ses activités, <strong>Protection Nuisibles</strong> s’engage à protéger la vie privée et les données à caractère personnel de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la loi « Informatique et Libertés ».
          </p>
        </section>

        {/* COLLECTE DES DONNÉES */}
        <section aria-labelledby="collecte-donnees">
          <h2 id="collecte-donnees" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            1. Collecte des données personnelles
          </h2>
          <p className="text-base sm:text-lg mb-3">
            Nous collectons des informations personnelles via les formulaires de demande de devis et de contact présentés sur le site :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg">
            <li><strong>Identité :</strong> Nom, prénom</li>
            <li><strong>Coordonnées :</strong> Adresse email, numéro de téléphone</li>
            <li><strong>Localisation :</strong> Adresse postale ou commune d'intervention</li>
          </ul>
        </section>

        {/* UTILISATION DES DONNÉES */}
        <section aria-labelledby="utilisation-donnees">
          <h2 id="utilisation-donnees" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            2. Finalité du traitement des données
          </h2>
          <p className="text-base sm:text-lg mb-3">
            Les informations collectées sont destinées exclusivement aux usages suivants :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg">
            <li>Établir un devis gratuit et personnalisé</li>
            <li>Planifier et réaliser les interventions de dératisation/désinsectisation</li>
            <li>Répondre aux demandes de renseignements reçues par formulaire ou téléphone</li>
          </ul>
        </section>

        {/* DUREE DE CONSERVATION */}
        <section aria-labelledby="conservation-donnees">
          <h2 id="conservation-donnees" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            3. Durée de conservation
          </h2>
          <p className="text-base sm:text-lg">
            Les données relatives aux demandes de contact et devis sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact à l'initiative de l'utilisateur. Pour les clients ayant bénéficié d'une prestation, la facture et les documents administratifs associés sont conservés pendant <strong>10 ans</strong> (obligation légale comptable).
          </p>
        </section>

        {/* DROITS DES UTILISATEURS */}
        <section aria-labelledby="droits-rgpd">
          <h2 id="droits-rgpd" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            4. Vos droits (RGPD)
          </h2>
          <p className="text-base sm:text-lg mb-3">
            Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d’opposition au traitement de vos données.
          </p>
          <p className="text-base sm:text-lg mb-3">
            Pour exercer vos droits, vous pouvez nous contacter :
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base sm:text-lg">
            <li>
              <strong>Par email :</strong>{' '}
              <a href="mailto:contact@protection-nuisibles.fr" className="text-brand-blue hover:underline font-medium">
                contact@protection-nuisibles.fr
              </a>
            </li>
            <li><strong>Par courrier :</strong> Protection Nuisibles, 88 chemin des charettes, 66000 Perpignan, France</li>
          </ul>
        </section>

        {/* COOKIES */}
        <section aria-labelledby="cookies-site">
          <h2 id="cookies-site" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            5. Gestion des cookies et traceurs
          </h2>
          <p className="text-base sm:text-lg mb-2">
            Ce site utilise des cookies essentiels au bon fonctionnement et à l'analyse de trafic anonyme (ex. Google Tag Manager / Google Ads) afin d'évaluer la pertinence de nos campagnes.
          </p>
          <p className="text-base sm:text-lg">
            Vous pouvez configurer votre navigateur à tout moment pour refuser le dépôt de cookies. Pour en savoir plus sur la gestion des traceurs :{' '}
            <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-medium">
              CNIL – Guide pratique sur les cookies
            </a>.
          </p>
        </section>
      </div>
      
    </main>
  )
}