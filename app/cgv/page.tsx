import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) - Protection Nuisibles 66',
  description: 'Conditions générales de vente des prestations de dératisation, désinsectisation et dépigeonnage par Protection Nuisibles dans les Pyrénées-Orientales.',
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/cgv',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CGVPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-3xl mx-auto w-full text-slate-700 leading-relaxed">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-100 pb-4">
        Conditions Générales de Vente (CGV)
      </h1>

      <div className="space-y-8">
        {/* PREAMBULE */}
        <section>
          <p className="text-base sm:text-lg italic text-slate-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </section>

        {/* SECTION 1 */}
        <section aria-labelledby="cgv-produits-services">
          <h2 id="cgv-produits-services" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            1. Prestations et Champ d'application
          </h2>
          <p className="text-base sm:text-lg">
            Les présentes Conditions Générales de Vente s’appliquent à l’ensemble des prestations de dératisation, désinsectisation, dépigeonnage et traitement anti-nuisibles proposées par <strong>Protection Nuisibles</strong> dans le département des Pyrénées-Orientales (66) et ses environs. Toute commande implique l’acceptation sans réserve des présentes CGV.
          </p>
        </section>

        {/* SECTION 2 */}
        <section aria-labelledby="cgv-tarifs">
          <h2 id="cgv-tarifs" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            2. Tarifs et Modalités de Paiement
          </h2>
          <p className="text-base sm:text-lg">
            Les prix indiqués sur les devis ou le site internet s'entendent en Euros (€), Toutes Taxes Comprises (TTC) ou Hors Taxes (HT) selon la qualité du client (particulier ou professionnel). Un devis écrit préalable est communiqué au client avant toute intervention.
          </p>
          <p className="text-base sm:text-lg mt-2">
            Le règlement s'effectue immédiatement à l’issue de l'intervention par Carte Banciare, Espèces ou Virement bancaire, sauf accord préalable ou conditions spécifiques stipulées sur le devis.
          </p>
        </section>

        {/* SECTION 3 */}
        <section aria-labelledby="cgv-interventions">
          <h2 id="cgv-interventions" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            3. Délais et Conditions d'Intervention
          </h2>
          <p className="text-base sm:text-lg">
            Les interventions ont lieu sur rendez-vous selon la disponibilité des équipes et l'urgence de la situation. Le client s'engage à rendre les lieux accessibles à l'heure convenue et à respecter l'ensemble des consignes de sécurité communiquées par le technicien (évacuation temporaire des lieux, aération, éloignement des animaux domestiques).
          </p>
        </section>

        {/* SECTION 4 - OBLIGATOIRE (Code de la Consommation) */}
        <section aria-labelledby="cgv-retractation">
          <h2 id="cgv-retractation" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            4. Droit de Rétractation et Annulation
          </h2>
          <p className="text-base sm:text-lg">
            Conformément aux articles L.221-18 et suivants du Code de la consommation, les clients particuliers (consommateurs) disposent d'un délai de 14 jours calendaires pour exercer leur droit de rétractation pour les contrats conclus à distance.
          </p>
          <p className="text-base sm:text-lg mt-2">
            <strong>Interventions d'urgence / Renonciation expresse :</strong> En cas de demande d'intervention immédiate ou avant la fin du délai de rétractation, le client accepte expressément l'exécution immédiate du service. Dès lors que la prestation est pleinement exécutée, le droit de rétractation ne peut plus être exercé (article L.221-28 du Code de la consommation).
          </p>
        </section>

        {/* SECTION 5 */}
        <section aria-labelledby="cgv-garanties">
          <h2 id="cgv-garanties" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            5. Garanties et Responsabilité
          </h2>
          <p className="text-base sm:text-lg">
            Protection Nuisibles met en œuvre des moyens professionnels homologués et conformes aux réglementations sanitaires en vigueur. L'obligation de la société est une obligation de moyens. 
          </p>
          <p className="text-base sm:text-lg mt-2">
            La responsabilité de la société ne saurait être engagée en cas de non-respect par le client des consignes post-intervention (ex. colmatage d'accès non réalisé par le client, hygiène inappropriée, réintroduction volontaire de nuisibles).
          </p>
        </section>

        {/* SECTION 6 */}
        <section aria-labelledby="cgv-litiges">
          <h2 id="cgv-litiges" className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            6. Droit Applicable et Droit des Litiges
          </h2>
          <p className="text-base sm:text-lg">
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord amiable, le tribunal compétent sera celui du ressort de la juridiction compétente de Perpignan.
          </p>
        </section>
      </div>
    </main>
  )
}