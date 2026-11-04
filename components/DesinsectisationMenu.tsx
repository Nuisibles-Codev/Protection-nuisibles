import Link from 'next/link'
import ServiceVisual from '@/components/ServiceVisual'

export default function DesinsectisationMenu() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 text-slate-700 sm:px-6">
      <header className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue">Cafards · Blattes · Fourmis · Puces</p>
        <h1 className="mb-5 text-3xl font-black text-slate-900 sm:text-5xl">Désinsectisation à Perpignan : traitement des insectes nuisibles dans le 66</h1>
        <p className="max-w-4xl text-lg leading-relaxed">Cafards dans la cuisine, fourmis dans les pièces de vie, puces dans un logement ou insectes dans un commerce ? Protection Nuisibles réalise une <strong>désinsectisation à Perpignan</strong> et dans les Pyrénées-Orientales, après identification des nuisibles et de leurs foyers.</p>
      </header>

      <section className="mb-14 grid items-start gap-8 lg:grid-cols-2">
        <ServiceVisual topic="blattes" priority />
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900">Un traitement différent selon chaque espèce</h2>
          <p>Le mot « désinsectisation » recouvre des problèmes très différents. Une blatte cachée derrière un appareil électroménager, une colonie de fourmis près d'un accès et des puces installées dans des textiles ne se traitent pas avec le même protocole.</p>
          <p>Notre démarche consiste à identifier l'insecte, comprendre où il se réfugie, examiner les surfaces concernées et choisir une solution compatible avec le lieu. La protection des aliments, des animaux et des personnes doit être prise en compte.</p>
          <p>Nous intervenons dans les maisons, appartements, commerces, restaurants, bureaux et locaux professionnels. Les contraintes sanitaires ou les horaires d'exploitation doivent être précisés avant toute application.</p>
          <Link href="/contact" className="inline-block rounded-xl bg-brand-red px-6 py-3 font-bold text-white">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Quels insectes traitons-nous à Perpignan ?</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Cafards et blattes</h3><p className="leading-relaxed">Présents notamment dans les recoins, conduites, cuisines et zones chaudes ou humides, ces insectes réclament un repérage des refuges. Les gels ou autres méthodes ne se choisissent qu'après identification.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Fourmis</h3><p className="leading-relaxed">Des trajets répétés le long des murs ou à proximité des aliments peuvent permettre d'identifier les points d'entrée et les zones d'activité. Les mesures doivent viser le foyer et les accès.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Puces</h3><p className="leading-relaxed">L'inspection peut concerner les tapis, textiles et espaces de repos des animaux. Les traitements de l'environnement se réfléchissent en fonction de l'origine des puces et des zones infestées.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Punaises de lit</h3><p className="leading-relaxed">Elles nécessitent une recherche particulière dans la literie et les meubles adjacents. Cette prestation dispose d'un protocole dédié : <Link href="/punaises" className="font-bold text-brand-blue underline">traitement des punaises de lit à Perpignan</Link>.</p></article>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Notre méthode de désinsectisation professionnelle</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ['1. Identification des insectes', "Recueil des observations, recherche des foyers et examen des pièces ou locaux concernés."],
            ['2. Analyse des conditions', "Vérification des accès, de l'humidité, des denrées et des contraintes d'occupation pour choisir une méthode pertinente."],
            ['3. Traitement ciblé', "Selon la situation, mise en œuvre de mesures mécaniques ou de produits professionnels autorisés, avec consignes de sécurité appropriées."],
            ['4. Prévention et suivi', "Recommandations d'entretien, de surveillance et de colmatage des accès ; contrôle complémentaire si le diagnostic le justifie."],
          ].map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3><p className="leading-relaxed">{description}</p></article>)}
        </div>
      </section>

      <section className="mb-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Désinsectisation chez les particuliers</h2>
          <p className="leading-relaxed">Un logement nécessite des précautions adaptées aux habitants, aux animaux domestiques et aux surfaces utilisées quotidiennement. Le traitement d'une cuisine ne s'organise pas comme celui d'une chambre ou d'une cave. Des consignes précises sont fournies avant et après une intervention.</p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Désinsectisation de locaux professionnels</h2>
          <p className="leading-relaxed">Pour les restaurants, réserves alimentaires, commerces et bureaux, le repérage des insectes doit tenir compte des zones de stockage et de l'activité du site. Un plan de prévention et des contrôles adaptés peuvent compléter le traitement curatif.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-black text-slate-900">FAQ désinsectisation</h2>
        <div className="space-y-4">
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Quel est le prix d'une désinsectisation à Perpignan ?</summary><p className="mt-3 leading-relaxed">Le montant dépend de l'insecte, des surfaces touchées, de l'accessibilité et du protocole nécessaire. Un devis personnalisé permet de préciser la prestation.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Faut-il quitter les locaux après le traitement ?</summary><p className="mt-3 leading-relaxed">Cela dépend de la technique et des produits retenus. Les consignes de sécurité et de réoccupation sont expliquées avant intervention.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Quels secteurs sont concernés ?</summary><p className="mt-3 leading-relaxed">Perpignan, Cabestany, Canet-en-Roussillon, Saint-Estève, Rivesaltes, Argelès-sur-Mer et les autres communes des Pyrénées-Orientales.</p></details>
        </div>
      </section>

      <div className="rounded-3xl bg-brand-blue p-8 text-center text-white">
        <h2 className="mb-3 text-2xl font-black">Une infestation d'insectes dans votre logement ou commerce ?</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">Décrivez les insectes observés et les pièces concernées. Nous vous orienterons vers un traitement adapté à votre situation dans les Pyrénées-Orientales.</p>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Obtenir un devis gratuit</Link>
      </div>
    </section>
  )
}
