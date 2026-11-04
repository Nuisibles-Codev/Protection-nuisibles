import Link from 'next/link'
import ServiceVisual from '@/components/ServiceVisual'

export default function FrelonsMenu() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 text-slate-700 sm:px-6">
      <header className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue">Guêpes · Frelons européens · Frelons asiatiques</p>
        <h1 className="mb-5 text-3xl font-black text-slate-900 sm:text-5xl">Destruction de nids de guêpes et de frelons à Perpignan (66)</h1>
        <p className="max-w-4xl text-lg leading-relaxed">Un nid sous une toiture, près d'une terrasse ou dans un arbre ? Protection Nuisibles étudie les demandes de <strong>destruction de nids de frelons à Perpignan</strong> et dans les Pyrénées-Orientales. L'identification des insectes et la localisation du nid sont essentielles avant toute intervention.</p>
      </header>

      <section className="mb-14 grid items-start gap-8 lg:grid-cols-2">
        <ServiceVisual topic="frelons" priority />
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900">Localiser le nid et protéger les occupants</h2>
          <p>Un trafic de guêpes sous une génoise, dans un volet ou à proximité des combles peut signaler un nid difficile à voir. Les frelons asiatiques peuvent également construire des nids en hauteur dans les arbres ou les bâtiments.</p>
          <p>La méthode dépend de l'espèce, de la taille et de la hauteur du nid, ainsi que de son accessibilité. Il faut aussi sécuriser les zones de passage : portes, fenêtres, jardins, terrasses et lieux fréquentés par les enfants.</p>
          <p><strong>N'approchez pas et ne tentez pas de brûler, noyer ou obstruer un nid actif.</strong> Une intervention improvisée peut provoquer des piqûres. Signalez sa position à distance lors de votre prise de contact.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="rounded-xl bg-brand-red px-5 py-3 font-bold text-white">Demander un devis</Link>
            <a href="tel:+33757516414" className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-brand-blue">07 57 51 64 14</a>
          </div>
        </div>
      </section>

      <section className="mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Guêpe, frelon européen ou frelon asiatique : pourquoi identifier l'espèce ?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Guêpes</h3><p className="leading-relaxed">Les nids peuvent se trouver dans des cavités, coffres de volets, abris ou sous des toitures. La localisation précise est nécessaire avant toute neutralisation.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Frelons européens</h3><p className="leading-relaxed">Leurs nids peuvent être installés dans des volumes abrités. L'observation des trajectoires permet de comprendre où se situe l'activité.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Frelons asiatiques</h3><p className="leading-relaxed">Ils peuvent installer des nids primaires protégés ou des nids plus volumineux en hauteur. L'accès et la sécurité du périmètre sont déterminants.</p></article>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Notre méthode pour une destruction de nid de frelons</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ['1. Reconnaissance du site', "Identification du type d'insecte, repérage des trajectoires et évaluation de la hauteur du nid."],
            ['2. Sécurisation des abords', "Prise en compte des entrées, fenêtres, zones fréquentées et contraintes de voisinage avant intervention."],
            ['3. Neutralisation adaptée', "Choix d'une technique professionnelle proportionnée à l'espèce et au site, avec équipements de protection et produits autorisés si nécessaires."],
            ['4. Vérification et conseils', "Surveillance de l'activité autour du nid, retrait éventuel si accessible et recommandations pour limiter les risques futurs."],
          ].map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3><p className="leading-relaxed">{description}</p></article>)}
        </div>
      </section>

      <section className="mb-14 grid gap-8 lg:grid-cols-2">
        <article>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Nid dans une toiture, une haie ou un arbre</h2>
          <p className="leading-relaxed">Chaque emplacement impose des précautions particulières : un nid en façade ne s'aborde pas comme un nid dissimulé dans une charpente ou situé au sommet d'un arbre. Une reconnaissance permet de déterminer les moyens d'accès adaptés, sans risque inutile pour les occupants et les passants.</p>
        </article>
        <article>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Intervention pour particuliers et professionnels</h2>
          <p className="leading-relaxed">Nous étudions les demandes provenant de maisons, jardins, terrasses, restaurants et locaux recevant du public à Perpignan, Cabestany, Canet-en-Roussillon, Saint-Estève, Argelès-sur-Mer, Rivesaltes et dans le 66.</p>
        </article>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-black text-slate-900">Questions fréquentes : nids de guêpes et frelons</h2>
        <div className="space-y-4">
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Combien coûte la destruction d'un nid de frelons à Perpignan ?</summary><p className="mt-3 leading-relaxed">Le prix dépend de la hauteur, de l'emplacement, des accès et de l'espèce concernée. Un devis doit tenir compte de ces éléments.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Doit-on enlever le nid après traitement ?</summary><p className="mt-3 leading-relaxed">Le retrait physique dépend de son accessibilité et des conditions de sécurité. La neutralisation et le retrait ne sont pas toujours la même opération.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Est-il dangereux de boucher l'entrée d'un nid ?</summary><p className="mt-3 leading-relaxed">Oui, cela peut déplacer l'activité des insectes et augmenter le danger. Éloignez les personnes et faites évaluer la situation.</p></details>
        </div>
      </section>

      <div className="rounded-3xl bg-brand-blue p-8 text-center text-white">
        <h2 className="mb-3 text-2xl font-black">Un nid de guêpes ou de frelons dans le 66 ?</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">Décrivez la position du nid et les accès, sans vous approcher. Nous vérifierons les conditions de l'intervention et la méthode adaptée.</p>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Demander une intervention</Link>
      </div>
    </section>
  )
}
