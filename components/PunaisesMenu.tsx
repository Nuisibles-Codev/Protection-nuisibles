import Link from 'next/link'
import ServiceVisual from '@/components/ServiceVisual'

const protocol = [
  ['Inspection et identification', "Recherche d'indices autour des coutures de matelas, sommiers, plinthes et mobiliers. Des piqûres seules ne suffisent pas pour confirmer une infestation."],
  ['Préparation du logement', "Consignes adaptées pour le linge, les objets, la literie et l'accès aux zones concernées. Évitez de déplacer des textiles ou des meubles sans précaution."],
  ['Traitement adapté', "Choix d'une méthode en fonction des pièces touchées et de l'ampleur de la situation. Des techniques thermiques ou des produits autorisés peuvent être envisagés selon le diagnostic."],
  ['Contrôle et prévention', "La nécessité d'un nouveau passage ou d'un contrôle dépend du protocole retenu et des observations ultérieures ; aucune garantie de résultat instantané n'est présumée."],
]

export default function PunaisesMenu() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 text-slate-700 sm:px-6">
      <header className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue">Diagnostic · Traitement · Suivi dans le 66</p>
        <h1 className="mb-5 max-w-5xl text-3xl font-black leading-tight text-slate-900 sm:text-5xl">Traitement des punaises de lit à Perpignan et dans les Pyrénées-Orientales</h1>
        <p className="max-w-4xl text-lg leading-relaxed">Protection Nuisibles vous accompagne pour identifier une infestation, préparer les pièces et définir un <strong>traitement des punaises de lit à Perpignan</strong> adapté au logement. Nous intervenons pour les particuliers et les professionnels dans le département 66.</p>
      </header>

      <section className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-start">
        <ServiceVisual topic="punaises" priority />
        <div className="space-y-4 leading-relaxed">
          <h2 className="text-2xl font-black text-slate-900">Comment reconnaître une punaise de lit ?</h2>
          <p>La punaise de lit est un petit insecte brun, aplati, qui recherche les endroits proches du couchage. Elle peut se cacher dans les coutures du matelas, derrière la tête de lit, dans le sommier ou les fissures du mobilier.</p>
          <p>Des points noirs, des mues, des insectes visibles et des piqûres peuvent faire suspecter une infestation. Toutefois, les réactions cutanées sont variables et d'autres insectes peuvent être confondus avec les punaises. <strong>La confirmation du nuisible est indispensable avant de traiter.</strong></p>
          <p>Une chambre d'hôtel, une location saisonnière, un appartement et une maison ne présentent pas les mêmes contraintes d'accès, de préparation ou de réoccupation. Le protocole doit tenir compte des surfaces et de l'activité constatée.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="rounded-xl bg-brand-red px-5 py-3 font-bold text-white hover:bg-red-700">Demander un devis gratuit</Link>
            <a href="tel:+33757516414" className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-brand-blue">07 57 51 64 14</a>
          </div>
        </div>
      </section>

      <section className="mb-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Les principaux signes d'une infestation de punaises de lit</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Indices dans la literie</h3><p className="leading-relaxed">Recherchez les insectes, mues ou petites traces sombres dans les coutures, à proximité du sommier et dans les recoins du mobilier. La literie peut être concernée même dans un logement entretenu.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Piqûres et démangeaisons</h3><p className="leading-relaxed">Les piqûres peuvent provoquer un inconfort et perturber le sommeil, mais leur apparence ne suffit pas à identifier l'espèce. Une inspection permet de rechercher des indices matériels.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Zones à contrôler</h3><p className="leading-relaxed">Les punaises peuvent se dissimuler dans des interstices proches des lieux de repos. Si plusieurs pièces présentent des indices, leur inspection doit être organisée sans déplacer inutilement les objets.</p></article>
          <article><h3 className="mb-2 text-lg font-bold text-slate-900">Gestes à éviter</h3><p className="leading-relaxed">Évitez les produits improvisés, la dispersion du linge et le déplacement d'un meuble suspect dans une autre chambre. Ces gestes peuvent compliquer le diagnostic et la prise en charge.</p></article>
        </div>
      </section>

      <section className="mb-14">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Intervention professionnelle</p>
        <h2 className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl">Notre protocole de lutte contre les punaises de lit</h2>
        <p className="mb-7 max-w-4xl leading-relaxed">Le protocole est construit à partir du diagnostic, pas d'une procédure identique pour toutes les infestations. Les consignes de sécurité et d'accès aux pièces sont précisées avant l'intervention.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {protocol.map(([title, detail], index) => (
            <article key={title} className="rounded-2xl border border-slate-200 p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue font-black text-white">{index + 1}</span>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
              <p className="leading-relaxed">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14 grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-black text-slate-900">Préparer et sécuriser les pièces concernées</h2>
          <p className="mb-4 leading-relaxed">Signalez les chambres touchées, les éventuels produits déjà utilisés et les observations récentes. La préparation du linge, la protection des objets et le rangement autour des couchages sont définis après l'inspection.</p>
          <p className="leading-relaxed">Le lavage ou traitement thermique des textiles compatibles peut faire partie des recommandations. Ne jetez pas systématiquement votre literie : les mesures doivent être proportionnées à la situation réelle.</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
          <h3 className="mb-4 text-xl font-bold text-slate-900">Particuliers et professionnels du tourisme</h3>
          <p className="mb-4 leading-relaxed">Pour les hôtels, locations saisonnières et hébergements, le diagnostic prend aussi en compte l'occupation des chambres et les conditions de remise en service. Nous adaptons les conseils pour limiter les déplacements d'objets et faciliter le suivi.</p>
          <p className="leading-relaxed">Secteurs : Perpignan, Cabestany, Saint-Estève, Canet-en-Roussillon, Saint-Cyprien, Argelès-sur-Mer et autres communes des Pyrénées-Orientales.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-black text-slate-900">Questions fréquentes sur les punaises de lit</h2>
        <div className="space-y-4">
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Quel est le prix d'un traitement des punaises de lit à Perpignan ?</summary><p className="mt-3 leading-relaxed">Le devis dépend des surfaces, de l'étendue de l'infestation et du protocole. Un prix unique sans diagnostic serait peu fiable.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Faut-il prévoir deux passages systématiquement ?</summary><p className="mt-3 leading-relaxed">Non. Le besoin d'un nouveau passage ou d'un contrôle est déterminé par les observations, le traitement retenu et les vérifications réalisées.</p></details>
          <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">Les punaises de lit sont-elles liées à un manque d'hygiène ?</summary><p className="mt-3 leading-relaxed">Non. Leur présence peut concerner n'importe quel type d'hébergement. La recherche des insectes et une prise en charge adaptée sont prioritaires.</p></details>
        </div>
      </section>

      <div className="rounded-3xl bg-brand-blue p-8 text-center text-white">
        <h2 className="mb-3 text-2xl font-black">Vous suspectez des punaises de lit à Perpignan ?</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">Décrivez les signes, les pièces concernées et l'utilisation du logement. Nous étudierons une intervention adaptée, sans promesse de résultat uniforme pour toutes les situations.</p>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Obtenir un devis gratuit</Link>
      </div>
    </section>
  )
}
