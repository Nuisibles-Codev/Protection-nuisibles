import Link from 'next/link'
import ServiceVisual from '@/components/ServiceVisual'

const services = [
  {
    id: 'deratisation',
    topic: 'deratisation' as const,
    title: 'Dératisation à Perpignan : rats et souris',
    text1: "Des bruits dans les combles, des emballages rongés ou des déjections dans une réserve peuvent révéler la présence de rongeurs. Un traitement efficace commence par l'identification de l'espèce, la localisation des passages et l'analyse des ressources accessibles.",
    text2: "Protection Nuisibles accompagne particuliers, syndics, commerces et établissements disposant de zones de stockage. Selon le diagnostic, des dispositifs adaptés et sécurisés sont mis en place, puis complétés par des recommandations d'obturation et de surveillance pour limiter de nouvelles intrusions.",
    url: '/deratisation',
    link: 'Notre prestation de dératisation',
    points: ['Inspection des accès et des indices', 'Mesures ciblées et prévention', 'Maisons, commerces et réserves'],
  },
  {
    id: 'desinsectisation',
    topic: 'blattes' as const,
    title: 'Désinsectisation : cafards, blattes, fourmis et puces',
    text1: "Une invasion de cafards dans une cuisine, un passage régulier de fourmis près des aliments ou une infestation de puces nécessite de reconnaître précisément l'insecte. Les produits et les méthodes diffèrent selon les espèces et les pièces touchées.",
    text2: "Nous étudions les points chauds, l'humidité, les refuges et les conditions d'utilisation du bâtiment avant de proposer un traitement de désinsectisation. Les locaux professionnels et restaurants demandent notamment des mesures adaptées à leurs contraintes sanitaires et à la présence de denrées.",
    url: '/desinsectisation',
    link: 'Découvrir la désinsectisation',
    points: ['Identification de l’insecte', 'Traitements selon les foyers', 'Conseils d’hygiène et de suivi'],
  },
  {
    id: 'punaises',
    topic: 'punaises' as const,
    title: 'Traitement des punaises de lit dans le 66',
    text1: "Les punaises de lit peuvent se dissimuler dans les coutures de matelas, les sommiers, les têtes de lit et le mobilier voisin. Des piqûres ou des traces sombres peuvent alerter, mais la confirmation du nuisible demande un examen attentif des zones concernées.",
    text2: "Que vous occupiez un appartement, une maison ou un hébergement touristique, nous vous aidons à préparer les pièces pour un protocole adapté. Le traitement, les consignes de réoccupation et les contrôles éventuels sont définis selon le diagnostic, sans promettre un résultat identique dans tous les logements.",
    url: '/punaises',
    link: 'Traiter les punaises de lit',
    points: ['Inspection de la literie', 'Préparation des chambres', 'Traitement et contrôle adaptés'],
  },
  {
    id: 'frelons',
    topic: 'frelons' as const,
    title: 'Destruction de nids de frelons et de guêpes',
    text1: "Un nid de frelons asiatiques dans un arbre, une activité de guêpes sous une toiture ou des allées et venues près d'un volet nécessitent d'abord une identification à distance. La hauteur, l'accessibilité et les zones fréquentées déterminent les précautions.",
    text2: "Nos interventions de destruction de nids sont préparées pour sécuriser les occupants et choisir une technique adaptée au site. Ne tentez jamais de brûler, d'arroser ou d'obstruer un nid actif : un diagnostic professionnel limite les risques de piqûres et de mauvaises manipulations.",
    url: '/frelons',
    link: 'Faire traiter un nid de guêpes ou de frelons',
    points: ['Identification des espèces', 'Sécurisation des abords', 'Intervention selon l’accès au nid'],
  },
]

export default function Description() {
  return (
    <div className="w-full bg-white">
      <section aria-labelledby="zone-home" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 max-w-4xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Une entreprise locale dans le 66</p>
          <h2 id="zone-home" className="mb-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Dératisation et désinsectisation à Perpignan et dans les Pyrénées-Orientales</h2>
          <p className="text-lg leading-relaxed text-slate-700">Protection Nuisibles accompagne les particuliers et professionnels confrontés à des rats, souris, insectes rampants, punaises de lit ou nids de guêpes et frelons. Le choix du traitement dépend toujours du nuisible identifié et de la configuration du bâtiment.</p>
        </div>

        <div className="grid items-stretch gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:grid-cols-2 lg:p-8">
          <div className="min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white lg:min-h-[420px]">
            <iframe
              title="Carte de Perpignan et du secteur d'intervention"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d2.863226134086672!3d42.69910031702662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1745486342047!5m2!1sfr!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[300px] w-full border-0 lg:min-h-[420px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 leading-relaxed text-slate-700">
            <h3 className="text-2xl font-bold text-slate-900">Intervention dans le Roussillon et ses communes</h3>
            <p>Notre zone de référence couvre Perpignan et les Pyrénées-Orientales : Cabestany, Saint-Estève, Canet-en-Roussillon, Rivesaltes, Toulouges, Argelès-sur-Mer, Saint-Cyprien, Elne, Thuir, Le Barcarès, Céret et Prades, entre autres.</p>
            <p>Dans un centre-ville, les problèmes de rongeurs peuvent concerner les caves, gaines techniques et commerces. Dans une maison avec jardin, les accès aux annexes, la toiture ou les dépendances peuvent nécessiter un contrôle différent. Sur le littoral, les résidences secondaires et les hébergements saisonniers ajoutent des contraintes d'occupation à anticiper.</p>
            <p>Pour chaque demande, précisez votre commune, les indices repérés et le type de bâtiment. Nous pourrons vous orienter vers une prestation adaptée et confirmer les modalités d'intervention.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/zones-intervention" className="rounded-xl bg-brand-blue px-5 py-3 font-bold text-white hover:bg-blue-800">Voir les communes desservies</Link>
              <Link href="/contact" className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-brand-blue hover:bg-white">Demander un devis</Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="prestations-home" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="mb-9 max-w-4xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Lutte anti-nuisibles professionnelle</p>
          <h2 id="prestations-home" className="mb-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Nos traitements contre les nuisibles dans le 66</h2>
          <p className="text-lg leading-relaxed text-slate-700">Il n'existe pas de traitement unique contre tous les nuisibles. Voici comment nous abordons les principales demandes à Perpignan et dans les communes voisines : inspection, choix d'une méthode adaptée et conseils pour limiter les récidives.</p>
        </div>
        <div className="space-y-7">
          {services.map((service, index) => (
            <article key={service.id} className="grid items-start gap-7 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-9 md:p-7">
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <ServiceVisual topic={service.topic} className="w-full" />
              </div>
              <div className="flex h-full flex-col justify-center">
                <h3 className="mb-4 text-2xl font-black leading-snug text-slate-900">{service.title}</h3>
                <p className="mb-3 leading-relaxed text-slate-700">{service.text1}</p>
                <p className="mb-4 leading-relaxed text-slate-700">{service.text2}</p>
                <ul className="mb-5 flex flex-wrap gap-2">
                  {service.points.map(item => <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">{item}</li>)}
                </ul>
                <Link href={service.url} className="font-bold text-brand-blue underline underline-offset-4">{service.link}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="pourquoi-home" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-7 max-w-4xl">
          <h2 id="pourquoi-home" className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">Pourquoi choisir Protection Nuisibles ?</h2>
          <p className="text-lg leading-relaxed text-slate-700">Notre approche associe un diagnostic concret, des précautions adaptées aux occupants et des conseils de prévention. L'objectif est d'apporter une réponse proportionnée, plutôt que de multiplier les traitements sans avoir localisé l'origine du problème.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-3 text-xl font-bold text-slate-900">Diagnostic avant intervention</h3><p className="leading-relaxed">Nous distinguons les espèces et recherchons leurs points de passage, foyers et causes favorisantes. Cela permet de cibler les zones utiles et de préciser la méthode proposée sur le devis.</p></article>
          <article className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-3 text-xl font-bold text-slate-900">Sécurité et consignes claires</h3><p className="leading-relaxed">La présence d'enfants, d'animaux, d'aliments ou de locaux fréquentés est prise en compte. Les précautions et les conditions de réoccupation sont adaptées aux moyens utilisés.</p></article>
          <article className="rounded-2xl border border-slate-200 p-6"><h3 className="mb-3 text-xl font-bold text-slate-900">Prévention et suivi utiles</h3><p className="leading-relaxed">Une fois le foyer identifié, le colmatage des accès, la surveillance ou l'entretien de certaines zones peuvent limiter les nouvelles intrusions. Le suivi dépend du nuisible traité.</p></article>
        </div>
      </section>
    </div>
  )
}
