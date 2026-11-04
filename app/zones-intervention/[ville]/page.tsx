import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { geoZones, regions } from '@/lib/zones-geo'
import { getInterventionZone, interventionZones } from '@/lib/intervention-zones'
import { getLocalEditorial } from '@/lib/local-seo-editorial'
import { serviceGuides } from '@/lib/local-service-guides'

type Props = { params: Promise<{ ville: string }> }
const baseUrl = 'https://www.protection-nuisibles.fr'
const phone = '07 57 51 64 14'

export const dynamicParams = false

export function generateStaticParams() {
  return interventionZones.map(({ slug }) => ({ ville: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params
  const zone = getInterventionZone(ville)
  if (!zone) return { robots: { index: false } }
  const location = `${zone.name} (${zone.department})`
  const canonical = `${baseUrl}/zones-intervention/${zone.slug}`
  const title = `Dératisation à ${location} | Désinsectisation et frelons`
  const description = `Dératisation, désinsectisation et destruction de nids de frelons à ${zone.name} : rats, souris, cafards et punaises de lit. Diagnostic et devis gratuit.`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: 'Protection Nuisibles', locale: 'fr_FR', type: 'website' },
  }
}

export default async function InterventionVillePage({ params }: Props) {
  const { ville } = await params
  const zone = getInterventionZone(ville)
  if (!zone) notFound()
  const local = getLocalEditorial(zone)
  const practical = serviceGuides(zone)
  const area = local.sector
  const isAude = zone.department === '11'
  const region = regions[zone.region]
  const neighborZones = zone.neighbors.map(code => geoZones.find(item => item.code === code)).filter((item): item is (typeof geoZones)[number] => Boolean(item))
  const canonical = `${baseUrl}/zones-intervention/${zone.slug}`
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `Lutte contre les nuisibles à ${zone.name}`,
    serviceType: ['Dératisation', 'Désinsectisation', 'Traitement des punaises de lit', 'Destruction de nids de guêpes et de frelons', 'Dépigeonnage et protection anti-pigeons'],
    provider: { '@type': 'Organization', name: 'Protection Nuisibles', url: baseUrl, telephone: '+33757516414' },
    areaServed: { '@type': 'Place', name: `${zone.name} (${zone.department}), France` },
    url: canonical,
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 text-slate-700 sm:px-6">
      {!isAude && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }} />}

      <header className="mb-12 rounded-3xl bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14">
        <p className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-200">
          Protection Nuisibles · {zone.department === '66' ? 'Pyrénées-Orientales' : 'Aude'} · {region.sector}
        </p>
        <h1 className="mb-6 max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          Dératisation, désinsectisation et destruction de nids de frelons à {zone.name}
        </h1>
        <p className="max-w-4xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {zone.intro || `À ${zone.name}, dans le secteur ${region.label}, une demande de lutte contre les nuisibles peut concerner les rats, souris, insectes rampants, punaises de lit ou nids de guêpes et frelons. L'identification de l'espèce et l'examen du bâtiment orientent le traitement ; chaque situation demande un diagnostic adapté.`}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-brand-red px-6 py-3 text-center font-bold text-white transition-colors hover:bg-red-700">Demander un devis gratuit</Link>
          <a href="tel:+33757516414" className="rounded-xl border border-slate-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-slate-800">Appeler le {phone}</a>
        </div>
        {isAude && (
          <p className="mt-6 max-w-4xl border-t border-slate-700 pt-4 text-sm text-slate-300">
            {zone.name} est située dans l'Aude, à environ {zone.km} km de Perpignan à vol d'oiseau. Les possibilités de déplacement et les délais sont à confirmer lors de votre demande.
          </p>
        )}
      </header>

      <nav aria-label="Accès rapide aux prestations locales" className="mb-14 flex flex-wrap gap-2 text-sm font-semibold">
        <a href="#deratisation" className="rounded-full border border-slate-200 px-4 py-2 text-brand-blue hover:bg-slate-50">Dératisation {zone.name}</a>
        <a href="#desinsectisation" className="rounded-full border border-slate-200 px-4 py-2 text-brand-blue hover:bg-slate-50">Désinsectisation</a>
        <a href="#punaises" className="rounded-full border border-slate-200 px-4 py-2 text-brand-blue hover:bg-slate-50">Punaises de lit</a>
        <a href="#frelons" className="rounded-full border border-slate-200 px-4 py-2 text-brand-blue hover:bg-slate-50">Guêpes et frelons</a>
        <a href="#depigeonnage" className="rounded-full border border-slate-200 px-4 py-2 text-brand-blue hover:bg-slate-50">Dépigeonnage</a>
        <a href="#questions" className="rounded-full border border-slate-200 px-4 py-2 text-brand-blue hover:bg-slate-50">Questions fréquentes</a>
      </nav>

      <section aria-labelledby="localite" className="mb-14 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-blue">{area.heading}</p>
          <h2 id="localite" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Une intervention pensée pour les lieux à {zone.name}</h2>
          <p className="mb-4 leading-relaxed">{area.habitat}</p>
          {local.city && <p className="mb-4 leading-relaxed">{local.city}</p>}
          <p className="leading-relaxed">
            Depuis Perpignan, le centre de {zone.name} se situe à environ {zone.km} km à vol d'oiseau. Il s'agit d'une indication géographique, pas d'un délai d'arrivée ni d'un tarif de déplacement.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
          <h3 className="mb-5 text-xl font-black text-slate-900">Quel nuisible avez-vous repéré ?</h3>
          <ul className="space-y-4 leading-relaxed">
            <li><strong className="text-slate-900">Bruits, déjections, dégâts :</strong> identifiez où les indices de rats ou souris apparaissent.</li>
            <li><strong className="text-slate-900">Insectes dans la cuisine :</strong> repérez les zones d'activité des cafards, blattes ou fourmis.</li>
            <li><strong className="text-slate-900">Traces près d'un couchage :</strong> faites confirmer une éventuelle présence de punaises de lit.</li>
            <li><strong className="text-slate-900">Vol d'insectes près d'un toit :</strong> gardez vos distances avec un possible nid de frelons ou guêpes.</li>
          </ul>
          <p className="mt-5 text-sm text-slate-600">Une photo prise en sécurité et une description des lieux peuvent faciliter le premier échange.</p>
        </div>
      </section>

      <section id="deratisation" aria-labelledby="title-deratisation" className="scroll-mt-28 border-t border-slate-200 py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Rats · Souris · Prévention</p>
        <h2 id="title-deratisation" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Dératisation à {zone.name} : éliminer rats et souris</h2>
        <p className="mb-4 leading-relaxed">{zone.rodents || area.rongeurs}</p>
        {zone.rodents && <p className="mb-4 leading-relaxed">{area.rongeurs}</p>}
        <p className="mb-4 leading-relaxed">{practical.rats} {local.rTip}</p>
        <p className="leading-relaxed">Pour une <strong>dératisation à {zone.name}</strong>, l'objectif n'est pas seulement de réduire l'activité visible : la recherche de points d'entrée et les conseils de protection des denrées limitent le risque de réapparition.</p>
        <Link href="/deratisation" className="mt-5 inline-block font-bold text-brand-blue underline">Découvrir notre méthode de dératisation</Link>
      </section>

      <section id="desinsectisation" aria-labelledby="title-desinsectisation" className="scroll-mt-28 border-t border-slate-200 py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Cafards · Blattes · Fourmis · Puces</p>
        <h2 id="title-desinsectisation" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Désinsectisation à {zone.name} : identifier le foyer avant de traiter</h2>
        <p className="mb-4 leading-relaxed">{zone.insects || area.insectes}</p>
        {zone.insects && <p className="mb-4 leading-relaxed">{area.insectes}</p>}
        <p className="mb-4 leading-relaxed">{practical.insects} {local.iTip}</p>
        <p className="leading-relaxed">Une <strong>désinsectisation à {zone.name}</strong> commence par la confirmation de l'insecte : un traitement contre les blattes n'est pas interchangeable avec une prise en charge de puces ou de fourmis.</p>
        <Link href="/desinsectisation" className="mt-5 inline-block font-bold text-brand-blue underline">Voir les étapes de désinsectisation</Link>
      </section>

      <section id="punaises" aria-labelledby="title-punaises" className="scroll-mt-28 border-t border-slate-200 py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Literie · Chambres · Logements</p>
        <h2 id="title-punaises" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Traitement des punaises de lit à {zone.name}</h2>
        <p className="mb-4 leading-relaxed">Une suspicion de punaises de lit nécessite de rechercher des indices dans la literie, le sommier, les recoins proches des couchages et les textiles concernés. Les piqûres seules ne suffisent pas à confirmer leur présence.</p>
        <p className="mb-4 leading-relaxed">{practical.bedbugs}</p>
        <p className="leading-relaxed">Évitez de déplacer des meubles infestés d'une chambre à l'autre avant le diagnostic. Les méthodes de traitement et le nombre d'interventions éventuelles sont déterminés selon la situation, sans promettre une élimination immédiate universelle.</p>
        <Link href="/punaises" className="mt-5 inline-block font-bold text-brand-blue underline">Comprendre le traitement anti-punaises de lit</Link>
      </section>

      <section id="frelons" aria-labelledby="title-frelons" className="scroll-mt-28 border-t border-slate-200 py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Frelons asiatiques · Frelons européens · Guêpes</p>
        <h2 id="title-frelons" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Destruction de nids de frelons à {zone.name} et élimination de nids de guêpes</h2>
        <p className="mb-4 leading-relaxed">{zone.nests || area.frelons}</p>
        {zone.nests && <p className="mb-4 leading-relaxed">{area.frelons}</p>}
        <p className="mb-4 leading-relaxed">{practical.nests} {local.fTip}</p>
        <p className="leading-relaxed">Pour une <strong>destruction de nid de frelons à {zone.name}</strong>, évitez toute tentative au feu, à l'eau ou avec un produit inadapté. Signalez la localisation, les accès et les zones fréquentées lors de votre prise de contact.</p>
        <Link href="/frelons" className="mt-5 inline-block font-bold text-brand-blue underline">Consulter notre prestation guêpes et frelons</Link>
      </section>

      <section id="depigeonnage" aria-labelledby="title-depigeonnage" className="scroll-mt-28 border-t border-slate-200 py-12">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-blue">Pigeons · Pics anti-pigeons · Filets de protection</p>
        <h2 id="title-depigeonnage" className="mb-5 text-2xl font-black text-slate-900 sm:text-3xl">Dépigeonnage à {zone.name} : protéger balcons, toitures et façades</h2>
        <p className="mb-4 leading-relaxed">
          Pour un problème de pigeons à {zone.name}, le diagnostic commence par la recherche des points de stationnement : rebords de fenêtres, terrasses, corniches, toitures ou installations techniques. Les supports doivent être étudiés avant de décider si des pics anti-pigeons, des filets ou des protections d'accès sont appropriés.
        </p>
        <p className="mb-4 leading-relaxed">
          {['littoral66', 'littoral11', 'coteVermeille'].includes(zone.region)
            ? "Dans les logements et hébergements du littoral, l'accessibilité des balcons, les contraintes d'entretien et les périodes d'occupation influencent les dispositifs à envisager."
            : ['metropole', 'salanque', 'roussillon'].includes(zone.region)
              ? "Dans les immeubles, maisons et locaux professionnels, la présence de pigeons peut concerner les rebords, enseignes, cours ou appuis. La protection doit tenir compte des façades et des zones voisines de perchage."
              : "Pour les maisons, dépendances ou bâtiments anciens, l'état des supports et la possibilité d'accéder aux avancées de toit doivent être vérifiés avant toute pose."}
        </p>
        <p className="mb-4 leading-relaxed">
          La présence de nids occupés ou d'autres espèces d'oiseaux impose une vérification préalable de la réglementation. {isAude
            ? "Pour cette commune de l'Aude, les possibilités de déplacement sont à confirmer avant toute intervention."
            : "Les modalités de protection et les éventuels travaux de nettoyage sont confirmés après examen des lieux."}
        </p>
        <Link href="/depigeonnage" className="mt-2 inline-block font-bold text-brand-blue underline">Découvrir nos solutions de dépigeonnage et protection anti-pigeons</Link>
      </section>

      <section aria-labelledby="prevenir" className="mb-14 rounded-3xl border border-slate-100 bg-slate-50 p-7 sm:p-9">
        <h2 id="prevenir" className="mb-5 text-2xl font-black text-slate-900">Prévention et suivi à {zone.name}</h2>
        <p className="mb-4 leading-relaxed">{zone.prevention || area.conseils}</p>
        {zone.prevention && <p className="mb-4 leading-relaxed">{area.conseils}</p>}
        <p className="leading-relaxed">{practical.followUp} Les recommandations restent adaptées au nuisible rencontré et ne remplacent pas l'examen des lieux.</p>
      </section>

      <section id="questions" aria-labelledby="faq-title" className="mb-14 scroll-mt-28">
        <h2 id="faq-title" className="mb-6 text-2xl font-black text-slate-900">Questions fréquentes à {zone.name}</h2>
        <div className="space-y-4">
          <details className="group rounded-xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-bold text-slate-900">Quel est le prix d'une dératisation à {zone.name} ?</summary>
            <p className="mt-4 leading-relaxed">Le devis dépend de l'espèce, des surfaces concernées, des accès et du protocole nécessaire. Un tarif fixe annoncé sans inspection serait peu fiable. Vous pouvez décrire votre situation via le formulaire pour recevoir une proposition adaptée.</p>
          </details>
          <details className="group rounded-xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-bold text-slate-900">Peut-on demander une destruction de nid de frelons à {zone.name} ?</summary>
            <p className="mt-4 leading-relaxed">{isAude ? `Le déplacement vers ${zone.name}, dans l'Aude, doit être confirmé au préalable. Signalez l'emplacement du nid pour vérifier la faisabilité.` : `Oui, ${zone.name} est comprise dans la zone annoncée d'intervention dans les Pyrénées-Orientales. La faisabilité dépend de la localisation et des conditions d'accès au nid.`} Évitez d'approcher ou de manipuler le nid.</p>
          </details>
          <details className="group rounded-xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-bold text-slate-900">Les traitements contre les punaises de lit nécessitent-ils plusieurs passages ?</summary>
            <p className="mt-4 leading-relaxed">Cela dépend de l'ampleur de l'infestation, de la méthode choisie et du contrôle après intervention. Le diagnostic permet d'expliquer la préparation des chambres, le suivi recommandé et l'organisation éventuelle de plusieurs passages.</p>
          </details>
          <details className="group rounded-xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-bold text-slate-900">Comment préparer une demande de désinsectisation à {zone.name} ?</summary>
            <p className="mt-4 leading-relaxed">Indiquez le type d'insecte supposé, les pièces concernées, les observations et les produits déjà utilisés. Une photo prise en sécurité peut être utile. Les consignes précises de préparation sont ensuite définies selon le traitement retenu.</p>
          </details>
        </div>
      </section>

      <section aria-labelledby="voisinage" className="mb-14 border-t border-slate-200 pt-10">
        <h2 id="voisinage" className="mb-3 text-2xl font-black text-slate-900">Communes proches de {zone.name}</h2>
        <p className="mb-5 leading-relaxed">Retrouvez nos informations de dératisation, désinsectisation et destruction de nids dans les communes voisines, classées selon la proximité géographique de leurs centres.</p>
        <div className="flex flex-wrap gap-3">
          {neighborZones.map(near => <Link key={near.code} href={`/zones-intervention/${near.slug}`} className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-brand-blue hover:bg-slate-50">{near.name}</Link>)}
          <Link href="/zones-intervention" className="rounded-xl border border-brand-blue px-4 py-3 font-semibold text-brand-blue hover:bg-blue-50">Toutes les communes autour de Perpignan</Link>
        </div>
      </section>

      <section className="rounded-3xl bg-brand-blue p-8 text-center text-white sm:p-10">
        <h2 className="mb-4 text-2xl font-black">Un problème de nuisibles à {zone.name} ?</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">{isAude ? "Précisez votre adresse dans l'Aude et la nature du nuisible : nous vous confirmerons les possibilités de déplacement." : "Protection Nuisibles intervient dans les Pyrénées-Orientales pour étudier votre situation et définir une réponse adaptée."}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-xl bg-white px-6 py-3 font-bold text-brand-blue">Demander un devis gratuit</Link>
          <a href="tel:+33757516414" className="rounded-xl border border-white/60 px-6 py-3 font-bold text-white">Appeler le {phone}</a>
        </div>
      </section>
    </main>
  )
}
