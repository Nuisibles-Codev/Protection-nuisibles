import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceLocalLinks from '@/components/ServiceLocalLinks'

const canonical = 'https://www.protection-nuisibles.fr/depigeonnage'

export const metadata: Metadata = {
  title: 'Dépigeonnage à Perpignan : pics et filets anti-pigeons | Protection Nuisibles',
  description: "Dépigeonnage à Perpignan et dans les Pyrénées-Orientales : protection des balcons, façades et toitures contre les pigeons, pics et filets anti-pigeons, diagnostic et devis gratuit.",
  alternates: { canonical },
  openGraph: {
    title: 'Dépigeonnage à Perpignan et protection anti-pigeons dans le 66',
    description: "Pigeons sur balcon, corniche ou toiture ? Solutions de dépigeonnage à Perpignan : pics, filets, sécurisation des accès et prévention des salissures.",
    url: canonical,
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

const problems = [
  {
    title: 'Balcons, terrasses et rebords de fenêtres',
    text: "Les pigeons peuvent utiliser les garde-corps, climatiseurs, appuis de fenêtres et corniches comme zones de repos. Les fientes rendent ces espaces difficiles à entretenir et peuvent endommager certaines surfaces. La solution se choisit selon la largeur des supports, leur accès et l'occupation des lieux.",
  },
  {
    title: 'Toitures, gouttières et panneaux solaires',
    text: "Les débords de toit, chéneaux, équipements techniques et espaces sous panneaux peuvent offrir des points d'accès ou de stationnement. Avant toute pose, il faut vérifier la toiture, la ventilation des équipements et la présence éventuelle d'oiseaux ou de nids.",
  },
  {
    title: 'Façades et immeubles collectifs',
    text: "Les pigeons reviennent volontiers sur des points de perchage favorables. Sur une copropriété, l'analyse doit intégrer les façades, balcons, cours intérieures et contraintes d'entretien, afin de ne pas déplacer simplement le problème vers une zone voisine.",
  },
  {
    title: 'Commerces, hôtels et locaux professionnels',
    text: "Au-dessus d'une entrée, d'une terrasse de restaurant ou d'une zone de livraison, les salissures créent des contraintes de nettoyage et d'accueil du public. Le diagnostic prend en compte les horaires du site, la circulation des personnes et l'accessibilité des supports.",
  },
]

const methods = [
  {
    label: 'Pics anti-pigeons',
    title: 'Pose de pics anti-pigeons sur les zones de perchage',
    text: "Les dispositifs de dissuasion peuvent être étudiés pour certains rebords, corniches, enseignes ou appuis. Leur format et leur fixation dépendent du support, de sa largeur et des possibilités d'entretien. Une pose sur quelques centimètres sans prise en compte des accès voisins peut s'avérer insuffisante.",
  },
  {
    label: 'Filets de protection',
    title: 'Installation de filets anti-pigeons sur les volumes à protéger',
    text: "Un filet adapté peut être envisagé pour empêcher l'accès à un balcon, une cour, un renfoncement ou un espace technique. Le projet doit tenir compte de l'esthétique, des fixations, des accès de maintenance et du risque d'enfermement d'oiseaux. Un contrôle préalable est donc indispensable.",
  },
  {
    label: 'Protection du bâti',
    title: 'Fermeture ciblée des points d’accès et prévention',
    text: "Selon la configuration, une adaptation des accès, une protection de certaines ouvertures ou d'autres dispositifs de dissuasion peuvent être étudiés. La priorité consiste à décourager le stationnement sans endommager la façade, perturber la ventilation ou piéger des animaux.",
  },
  {
    label: 'Assainissement',
    title: 'Nettoyage des fientes de pigeons et conseils d’entretien',
    text: "L'accumulation de fientes doit être traitée avec des précautions adaptées pour éviter de disperser des poussières. Selon le diagnostic, nous évaluons les besoins de nettoyage et les mesures préventives ; l'étendue exacte d'une prestation d'assainissement est précisée au devis.",
  },
]

const faqs = [
  {
    question: 'Quel est le prix d’un dépigeonnage à Perpignan ?',
    answer: "Le coût dépend de la hauteur, des surfaces à protéger, du type de support, de l'accessibilité et du dispositif retenu. Une pose de pics sur un appui n'implique pas le même travail qu'un filet sur plusieurs balcons. Un devis permet de déterminer les moyens adaptés.",
  },
  {
    question: 'Les pics anti-pigeons empêchent-ils toujours les pigeons de revenir ?',
    answer: "Un dispositif bien choisi peut réduire le stationnement sur la zone protégée, mais aucun résultat absolu ne peut être promis sans examiner les autres points de perchage. Un diagnostic de l'ensemble des accès aide à limiter le déplacement des oiseaux vers une zone proche.",
  },
  {
    question: 'Faut-il installer des pics ou un filet anti-pigeons ?',
    answer: "Les pics conviennent à certains supports étroits ou zones de pose ; les filets peuvent être étudiés pour fermer un volume. Le choix dépend de l'architecture, de l'accès pour l'entretien, de la visibilité souhaitée et de la présence éventuelle de nids.",
  },
  {
    question: 'Peut-on retirer un nid de pigeon sur un balcon ?',
    answer: "Il faut d'abord identifier l'espèce et vérifier si le nid est occupé. La réglementation diffère suivant les oiseaux, et certaines espèces ou périodes de reproduction imposent des protections particulières. Aucun enlèvement ou obturation ne doit être entrepris sans cette vérification.",
  },
  {
    question: 'Comment nettoyer les fientes de pigeons sans risque ?',
    answer: "Évitez de balayer à sec ou de projeter des poussières. L'importance des dépôts, les matériaux et l'accès peuvent nécessiter des protections et une méthode spécifique. Nous pouvons examiner la situation et préciser les prestations possibles au devis.",
  },
  {
    question: 'Intervenez-vous pour un balcon, une copropriété ou un commerce dans le 66 ?',
    answer: "Vous pouvez solliciter un diagnostic pour une habitation, un immeuble, un local professionnel, une terrasse ou un bâtiment collectif à Perpignan et dans les Pyrénées-Orientales. Les modalités et la faisabilité de la protection sont évaluées à partir des lieux.",
  },
]

const servicedCities = [
  'Perpignan', 'Cabestany', 'Saint-Estève', 'Canet-en-Roussillon', 'Saint-Cyprien',
  'Rivesaltes', 'Toulouges', 'Le Barcarès', 'Argelès-sur-Mer', 'Elne', 'Thuir', 'Céret',
]

export default function DepigeonnagePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': canonical + '#service',
    name: 'Dépigeonnage et protection anti-pigeons à Perpignan',
    serviceType: 'Dépigeonnage, protection anti-pigeons et dispositifs de dissuasion',
    description: 'Diagnostic de présence de pigeons, protection de balcons, façades et toitures, étude de pics et filets anti-pigeons à Perpignan et dans le 66.',
    url: canonical,
    provider: {
      '@type': 'Organization',
      name: 'Protection Nuisibles',
      url: 'https://www.protection-nuisibles.fr',
      telephone: '+33757516414',
    },
    areaServed: [
      { '@type': 'City', name: 'Perpignan' },
      { '@type': 'AdministrativeArea', name: 'Pyrénées-Orientales' },
    ],
  }

  return (
    <main className="w-full text-slate-700">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <header className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue">Protection anti-pigeons · Balcons · Toitures · Façades</p>
          <h1 className="mb-5 max-w-5xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Dépigeonnage à Perpignan : protection des bâtiments contre les pigeons
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed">
            Des pigeons s'installent régulièrement sur votre balcon, votre toiture ou les rebords d'un immeuble ? Protection Nuisibles étudie les demandes de <strong>dépigeonnage à Perpignan</strong> et dans les Pyrénées-Orientales (66). L'objectif est de protéger durablement les supports sensibles grâce à des solutions adaptées au bâtiment, sans intervention aveugle sur les oiseaux.
          </p>
        </header>

        <section className="mb-16 grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" aria-labelledby="constat-pigeons">
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <div className="relative h-[260px] w-full sm:h-[360px]">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Bird_control_spikes.JPG"
                alt="Pigeon installé sur une corniche avec nid et dispositif anti-pigeons, montrant l’importance de choisir une protection adaptée"
                fill
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-slate-500">
              Photo : <a className="underline" href="https://commons.wikimedia.org/wiki/File:Bird_control_spikes.JPG" target="_blank" rel="noopener noreferrer">Rselzer1 · Wikimedia Commons · CC BY-SA 4.0</a>
            </figcaption>
          </figure>
          <div className="space-y-4 leading-relaxed">
            <h2 id="constat-pigeons" className="text-2xl font-black text-slate-900">Pourquoi protéger un bâtiment contre les pigeons ?</h2>
            <p>Des stationnements répétés peuvent entraîner des accumulations de fientes, des salissures sur les façades, des désagréments sur les terrasses et des contraintes d'entretien pour les occupants. Les gouttières, enseignes, auvents, appuis de fenêtres ou installations techniques doivent parfois être examinés séparément.</p>
            <p>La bonne question n'est pas seulement « comment éloigner les pigeons ? », mais <strong>où se posent-ils, par où accèdent-ils aux volumes et quels supports doivent réellement être protégés ?</strong> Une intervention ciblée évite des installations inutiles ou mal adaptées.</p>
            <p>Les protections envisagées peuvent comprendre des <strong>pics anti-pigeons</strong>, des <strong>filets anti-pigeons</strong> ou des aménagements limitant l'accès aux zones concernées. La solution est déterminée au cas par cas, en respectant les espèces et la réglementation applicables.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition-colors hover:bg-red-700">Demander un devis gratuit</Link>
              <a href="tel:+33757516414" className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-brand-blue transition-colors hover:bg-slate-50">Appeler le 07 57 51 64 14</a>
            </div>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="depigeonnage-lieux">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Lieux concernés</p>
          <h2 id="depigeonnage-lieux" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Dépigeonnage de balcons, toitures, façades et locaux professionnels</h2>
          <p className="mb-7 max-w-4xl leading-relaxed">Un appartement avec balcon, un immeuble en copropriété, un commerce ou un bâtiment industriel ne nécessitent pas la même protection. Le diagnostic tient compte des accès, des points de repos et de l'entretien futur.</p>
          <div className="grid gap-5 md:grid-cols-2">
            {problems.map(item => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="solutions-anti-pigeons">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Solutions de protection</p>
          <h2 id="solutions-anti-pigeons" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Pics anti-pigeons, filets et dispositifs de dissuasion : quelle méthode choisir ?</h2>
          <p className="mb-7 max-w-4xl leading-relaxed">Les solutions physiques sont sélectionnées en fonction du support, de l'étendue de la zone à protéger et de la possibilité d'assurer un entretien ultérieur. Une étude préalable évite les poses qui déplacent les pigeons vers un autre rebord.</p>
          <div className="grid gap-5 lg:grid-cols-2">
            {methods.map(item => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">{item.label}</p>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9" aria-labelledby="demarche-depigeonnage">
          <h2 id="demarche-depigeonnage" className="mb-6 text-2xl font-black text-slate-900">Comment se prépare une intervention de dépigeonnage ?</h2>
          <ol className="grid gap-6 md:grid-cols-2">
            <li><h3 className="mb-2 text-lg font-bold text-slate-900">1. Identifier les espèces et les zones occupées</h3><p className="leading-relaxed">Repérage des points de perchage et des accès, vérification des nids éventuels et de l'occupation des lieux avant tout aménagement.</p></li>
            <li><h3 className="mb-2 text-lg font-bold text-slate-900">2. Étudier l'accessibilité du bâtiment</h3><p className="leading-relaxed">Analyse des supports, hauteurs, possibilités de fixation, contraintes de toiture et besoins d'entretien ou d'accès technique.</p></li>
            <li><h3 className="mb-2 text-lg font-bold text-slate-900">3. Définir les protections adaptées</h3><p className="leading-relaxed">Proposition de solutions physiques proportionnées aux zones réellement concernées, dans le respect des espèces et des règles applicables.</p></li>
            <li><h3 className="mb-2 text-lg font-bold text-slate-900">4. Prévoir la maintenance et le suivi</h3><p className="leading-relaxed">Vérification des accès protégés, entretien des dispositifs et conseils pour limiter la présence récurrente de pigeons.</p></li>
          </ol>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-2" aria-labelledby="depigeonnage-prevention">
          <div>
            <h2 id="depigeonnage-prevention" className="mb-4 text-2xl font-black text-slate-900">Éviter le retour des pigeons sans mettre les oiseaux en danger</h2>
            <p className="mb-4 leading-relaxed">Une installation de dépigeonnage doit empêcher l'accès aux zones ciblées sans enfermer d'oiseaux derrière un filet ou un dispositif. Avant toute intervention sur une toiture ou une façade, l'identification des oiseaux et la vérification de nids occupés sont indispensables.</p>
            <p className="leading-relaxed">D'autres espèces, notamment des oiseaux protégés, peuvent utiliser les mêmes bâtiments. Leur statut et les périodes de reproduction influencent les travaux possibles. Un nid ne doit donc pas être retiré ou obstrué systématiquement.</p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7">
            <h3 className="mb-4 text-xl font-bold text-slate-900">Quelles informations fournir pour un devis ?</h3>
            <ul className="list-disc space-y-3 pl-5 leading-relaxed">
              <li>La commune et la nature du bâtiment : maison, copropriété, commerce, entrepôt.</li>
              <li>Les zones fréquentées : balcons, fenêtres, façade, enseigne ou toiture.</li>
              <li>L'étendue des salissures et la présence éventuelle d'oiseaux ou de nids.</li>
              <li>L'accessibilité des supports et, si possible, des photos prises sans prendre de risque.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">Les dispositifs et les éventuels travaux de nettoyage sont précisés au devis selon la faisabilité et les contraintes du site.</p>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="zones-depigeonnage">
          <h2 id="zones-depigeonnage" className="mb-4 text-2xl font-black text-slate-900">Dépigeonnage à Perpignan et dans les Pyrénées-Orientales (66)</h2>
          <p className="mb-5 max-w-4xl leading-relaxed">Nos informations de dépigeonnage concernent les demandes à Perpignan et dans les communes du Roussillon, de la Salanque, du littoral catalan, des Aspres, des Albères et du Conflent. Les possibilités d'intervention sont confirmées à partir de l'adresse et de la configuration du bâtiment.</p>
          <div className="flex flex-wrap gap-2">
            {servicedCities.map(city => (
              <span key={city} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800">{city}</span>
            ))}
          </div>
          <Link href="/zones-intervention" className="mt-5 inline-block font-bold text-brand-blue underline underline-offset-4">Consulter toutes les zones autour de Perpignan</Link>
        </section>

        <section className="mb-14" aria-labelledby="questions-depigeonnage">
          <h2 id="questions-depigeonnage" className="mb-6 text-2xl font-black text-slate-900">Questions fréquentes sur le dépigeonnage</h2>
          <div className="space-y-4">
            {faqs.map(item => (
              <details key={item.question} className="rounded-xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{item.question}</summary>
                <p className="mt-3 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-14 rounded-3xl bg-brand-blue p-8 text-center text-white sm:p-10" aria-labelledby="devis-depigeonnage">
          <h2 id="devis-depigeonnage" className="mb-4 text-2xl font-black">Des pigeons sur votre balcon, votre façade ou votre toiture ?</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-relaxed">Décrivez les points de perchage et les surfaces à protéger. Nous étudierons une solution de dépigeonnage adaptée à votre bâtiment à Perpignan ou dans le 66.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Demander un devis gratuit</Link>
            <a href="tel:+33757516414" className="rounded-xl border border-white/70 px-7 py-3 font-bold text-white">07 57 51 64 14</a>
          </div>
        </section>
      </div>

      <ServiceLocalLinks service="depigeonnage" />
    </main>
  )
}
