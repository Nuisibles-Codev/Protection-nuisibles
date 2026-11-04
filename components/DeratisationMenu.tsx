import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DeratisationMenu() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-10 leading-relaxed text-slate-700 sm:px-6" aria-label="Dératisation à Perpignan et dans les Pyrénées-Orientales">
      <h1 className="mb-10 border-b border-slate-100 pb-6 text-center text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
        Dératisation à Perpignan (66) : traitement des rats et des souris
      </h1>

      <div className="mb-14 grid items-center gap-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 md:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-xl sm:h-72">
          <Image src="/image12.png" alt="Équipement professionnel pour lutter contre les nuisibles" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Une dératisation adaptée à votre bâtiment</h2>
          <p className="mb-4">
            Protection Nuisibles intervient à Perpignan et dans les Pyrénées-Orientales pour identifier les signes de présence de rats et de souris. Nous recherchons les passages et les lieux de refuge avant de définir un traitement ciblé.
          </p>
          <p>Maisons, appartements, commerces et espaces de stockage peuvent nécessiter des méthodes différentes selon la configuration des lieux.</p>
        </div>
      </div>

      <section className="mb-14">
        <h2 className="mb-5 text-2xl font-black text-slate-900">Pourquoi agir contre les rongeurs ?</h2>
        <p className="mb-4">Les rats et souris peuvent souiller les denrées, détériorer les isolants et endommager les matériaux ou câbles. Une activité inhabituelle dans les combles, des emballages rongés ou des traces de déjections doivent être examinés rapidement.</p>
        <p>Une intervention professionnelle permet d’identifier l’espèce et d’adapter la lutte aux risques présents, sans multiplier des produits inappropriés.</p>
      </section>

      <section aria-labelledby="deratisation-etapes" className="mb-14">
        <h2 id="deratisation-etapes" className="mb-6 text-2xl font-black text-slate-900">Notre méthode de dératisation</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['1. Inspection et diagnostic', 'Recherche des traces d’activité, des points de passage et des sources de nourriture.'],
            ['2. Choix du traitement', 'Sélection de pièges, postes sécurisés ou autres mesures adaptées à la situation.'],
            ['3. Mise en place', 'Installation des dispositifs et traitement des zones identifiées dans le respect des précautions d’usage.'],
            ['4. Suivi et prévention', 'Vérification de l’efficacité, conseils d’entretien et recommandations pour limiter les réintrusions.'],
          ].map(([title, detail]) => (
            <article key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-black text-slate-900">Intervention à Perpignan et dans tout le 66</h2>
        <p>Nos interventions de dératisation concernent notamment Perpignan, Canet-en-Roussillon, Saint-Estève, Cabestany, Rivesaltes, Argelès-sur-Mer, Céret et Prades, ainsi que les autres communes des Pyrénées-Orientales.</p>
        <Link href="/zones-intervention" className="mt-4 inline-block font-semibold text-brand-blue underline">Voir toutes nos zones d’intervention</Link>
      </section>

      <div className="rounded-2xl bg-brand-blue p-7 text-center text-white">
        <h2 className="mb-4 text-xl font-bold">Des rats ou des souris dans votre logement ou vos locaux ?</h2>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-6 py-3 font-bold text-brand-blue">Demander un devis gratuit</Link>
      </div>
    </section>
  )
}
