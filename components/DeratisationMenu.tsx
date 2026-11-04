import Link from 'next/link'
import ServiceVisual from '@/components/ServiceVisual'

export default function DeratisationMenu() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 text-slate-700 sm:px-6">
      <header className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue">Rats · Souris · Prévention des intrusions</p>
        <h1 className="mb-5 text-3xl font-black text-slate-900 sm:text-5xl">Dératisation à Perpignan : traitement des rats et souris dans le 66</h1>
        <p className="max-w-4xl text-lg leading-relaxed">Vous avez découvert des déjections, des emballages rongés ou des bruits dans les combles ? Protection Nuisibles réalise des <strong>interventions de dératisation à Perpignan</strong> et dans les Pyrénées-Orientales, adaptées à la présence de rats et de souris dans les maisons et locaux professionnels.</p>
      </header>

      <section className="mb-14 grid items-start gap-8 lg:grid-cols-2">
        <ServiceVisual topic="deratisation" priority />
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900">Traiter les rongeurs sans négliger leurs points d'entrée</h2>
          <p>Rats et souris peuvent profiter de petits passages autour des portes, gaines, canalisations ou ouvertures mal protégées. Ils peuvent souiller des denrées, endommager des emballages, isolants et installations électriques.</p>
          <p>Une dératisation efficace nécessite d'identifier l'espèce, les déplacements et les ressources disponibles. Le nombre de dispositifs et leur emplacement dépendent du niveau d'activité observé et de l'accessibilité des espaces.</p>
          <p>Pour un appartement, une maison, un restaurant, une boulangerie, un entrepôt ou une cave, les précautions de sécurité ne seront pas les mêmes. Nous vous orientons vers un protocole adapté à l'usage de votre bâtiment.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="rounded-xl bg-brand-red px-6 py-3 font-bold text-white">Demander un devis gratuit</Link>
            <a href="tel:+33757516414" className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-brand-blue">07 57 51 64 14</a>
          </div>
        </div>
      </section>

      <section className="mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Comment repérer la présence de rats ou de souris ?</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Traces de grignotage</h3><p className="leading-relaxed">Emballages percés, matériaux détériorés ou denrées touchées peuvent indiquer un passage de rongeurs. Localiser ces indices permet de cibler l'inspection.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Bruits dans les combles</h3><p className="leading-relaxed">Des grattements nocturnes dans une cloison ou un grenier peuvent orienter les recherches, mais ils ne suffisent pas à eux seuls pour identifier un rat ou une souris.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Déjections et passages</h3><p className="leading-relaxed">Les traces autour d'une cave, d'une réserve ou d'un local technique peuvent révéler une zone d'activité. Évitez de manipuler les souillures sans protection.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Ouvertures et zones de refuge</h3><p className="leading-relaxed">Les passages autour des réseaux, portes et ventilations méritent un examen attentif. Le colmatage des accès identifiés complète généralement les actions curatives.</p></article>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Les étapes d'une dératisation professionnelle</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ['1. Diagnostic des rongeurs', "Inspection des indices, identification des passages, estimation de l'activité et repérage des denrées ou points d'eau."],
            ['2. Plan d'intervention', "Choix de dispositifs adaptés : capture, postes sécurisés et mesures complémentaires suivant les contraintes et le diagnostic."],
            ['3. Traitement des zones concernées', "Mise en place ciblée dans les espaces identifiés, avec précautions tenant compte des enfants, animaux et denrées."],
            ['4. Contrôle et prévention', "Vérification de l'activité, conseils de nettoyage, d'entretien, de surveillance et d'obturation pour limiter les réintrusions."],
          ].map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3><p className="leading-relaxed">{description}</p></article>)}
        </div>
      </section>

      <section className="mb-14 grid gap-8 lg:grid-cols-2">
        <article>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Dératisation pour les habitations</h2>
          <p className="leading-relaxed">Nous étudions les demandes dans les logements individuels, immeubles, caves, garages et combles. Les points de passage, la présence d'occupants et les accès techniques sont pris en compte avant toute mise en place de dispositifs.</p>
        </article>
        <article>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Dératisation des commerces et restaurants</h2>
          <p className="leading-relaxed">Pour les établissements alimentaires, le traitement des rongeurs doit protéger les réserves et limiter les risques pour les denrées. Le diagnostic peut être accompagné de recommandations sur les ouvertures, les stockages et la fréquence du contrôle.</p>
        </article>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-black text-slate-900">Questions fréquentes sur la dératisation</h2>
        <div className="space-y-4">
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Quel est le prix d'une dératisation à Perpignan ?</summary><p className="mt-3 leading-relaxed">Le prix dépend du bâtiment, de l'espèce, des zones touchées et du protocole. Le devis tient compte de ces éléments plutôt que d'un tarif standard sans visite.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Comment empêcher le retour des rats et souris ?</summary><p className="mt-3 leading-relaxed">Après l'inspection, certaines ouvertures peuvent être protégées, les denrées mieux stockées et les zones sensibles surveillées. Ces mesures complètent le traitement.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Dans quelles communes intervenez-vous ?</summary><p className="mt-3 leading-relaxed">Perpignan, Cabestany, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Argelès-sur-Mer, Céret, Prades et les autres communes des Pyrénées-Orientales. <Link href="/zones-intervention" className="font-bold text-brand-blue underline">Consulter nos zones</Link>.</p></details>
        </div>
      </section>

      <div className="rounded-3xl bg-brand-blue p-8 text-center text-white">
        <h2 className="mb-3 text-2xl font-black">Vous suspectez la présence de rongeurs dans vos locaux ?</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">Décrivez les indices observés et les espaces concernés. Nous vous aiderons à préparer une dératisation adaptée à votre situation dans le 66.</p>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Faire une demande de devis</Link>
      </div>
    </section>
  )
}
