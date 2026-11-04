import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getInterventionZone, interventionZones } from '@/lib/intervention-zones'

type Props = { params: Promise<{ ville: string }> }
const baseUrl = 'https://www.protection-nuisibles.fr'

export const dynamicParams = false

export function generateStaticParams() {
  return interventionZones.map(({ slug }) => ({ ville: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params
  const zone = getInterventionZone(ville)
  if (!zone) return {}
  const url = `${baseUrl}/zones-intervention/${zone.slug}`
  const title = `Dératisation et désinsectisation à ${zone.name} (66) | Protection Nuisibles`
  const description = `Besoin d’un spécialiste anti-nuisibles à ${zone.name} ? Dératisation, désinsectisation, punaises de lit, guêpes et frelons. Devis gratuit dans le 66.`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Protection Nuisibles', locale: 'fr_FR', type: 'website' },
  }
}

const services = [
  { href: '/deratisation', title: 'Dératisation : rats et souris', summary: 'Repérage des passages, traitement ciblé et conseils de prévention.' },
  { href: '/desinsectisation', title: 'Désinsectisation : insectes rampants', summary: 'Identification des foyers de cafards, blattes, fourmis ou puces et traitement adapté.' },
  { href: '/punaises', title: 'Traitement des punaises de lit', summary: 'Diagnostic des espaces infestés, protocole adapté et recommandations de suivi.' },
  { href: '/frelons', title: 'Nids de guêpes et frelons', summary: 'Évaluation des risques et neutralisation sécurisée des nids accessibles.' },
]

export default async function InterventionVillePage({ params }: Props) {
  const { ville } = await params
  const zone = getInterventionZone(ville)
  if (!zone) notFound()
  const url = `${baseUrl}/zones-intervention/${zone.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Lutte contre les nuisibles à ${zone.name}`,
    serviceType: ['Dératisation', 'Désinsectisation', 'Traitement des punaises de lit', 'Destruction de nids de guêpes et frelons'],
    provider: { '@type': 'Organization', name: 'Protection Nuisibles', url: baseUrl, telephone: '+33757516414' },
    areaServed: { '@type': 'Place', name: `${zone.name}, Pyrénées-Orientales, France` },
    url,
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <header className="mb-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-blue">Intervention à {zone.name} • Pyrénées-Orientales (66)</p>
        <h1 className="mb-6 max-w-4xl text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Dératisation et désinsectisation à {zone.name}
        </h1>
        <p className="max-w-4xl text-lg leading-relaxed text-slate-700">{zone.intro}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition-colors hover:bg-red-700">Devis gratuit à {zone.name}</Link>
          <a href="tel:+33757516414" className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-900 hover:bg-slate-50">Appeler le 07 57 51 64 14</a>
        </div>
      </header>

      <section aria-labelledby="situations" className="mb-14 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
        <h2 id="situations" className="mb-4 text-2xl font-black text-slate-900">Quels problèmes de nuisibles à {zone.name} ?</h2>
        <p className="mb-5 text-slate-700">Nous intervenons notamment dans les {zone.setting}. Les méthodes sont définies après identification du nuisible et examen des lieux.</p>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-brand-blue">Rats et souris</h3>
            <p className="leading-relaxed text-slate-700">{zone.rodents}</p>
          </article>
          <article className="rounded-xl bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-brand-blue">Insectes et parasites</h3>
            <p className="leading-relaxed text-slate-700">{zone.insects}</p>
          </article>
          <article className="rounded-xl bg-white p-5">
            <h3 className="mb-3 text-lg font-bold text-brand-blue">Guêpes et frelons</h3>
            <p className="leading-relaxed text-slate-700">{zone.nests}</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="prestations" className="mb-14">
        <h2 id="prestations" className="mb-6 text-2xl font-black text-slate-900">Nos prestations à {zone.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group rounded-2xl border border-slate-200 p-6 transition-all hover:border-brand-blue hover:shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-slate-900 group-hover:text-brand-blue">{service.title}</h3>
              <p className="leading-relaxed text-slate-600">{service.summary}</p>
              <span className="mt-4 block text-sm font-semibold text-brand-blue">Consulter la prestation</span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="methode" className="mb-14 grid gap-8 rounded-3xl bg-slate-50 p-6 sm:p-8 md:grid-cols-2">
        <div>
          <h2 id="methode" className="mb-4 text-2xl font-black text-slate-900">Diagnostic, traitement et prévention</h2>
          <p className="mb-4 leading-relaxed text-slate-700">
            Décrivez les signes observés à {zone.name} : bruits, déjections, insectes visibles, piqûres ou allées et venues près d’un nid. Une inspection permet ensuite de choisir une méthode proportionnée au problème.
          </p>
          <p className="leading-relaxed text-slate-700">{zone.prevention}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold text-slate-900">Comment se déroule une demande ?</h3>
          <ol className="list-decimal space-y-3 pl-5 leading-relaxed text-slate-700">
            <li>Premier échange pour décrire le nuisible, la commune et les accès.</li>
            <li>Évaluation de la situation et proposition de traitement adaptée.</li>
            <li>Intervention professionnelle, puis conseils de prévention et de suivi.</li>
          </ol>
        </div>
      </section>

      <section className="mb-12 border-t border-slate-200 pt-8">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">Intervenez-vous dans les communes autour de {zone.name} ?</h2>
        <p className="leading-relaxed text-slate-700">
          Oui, la zone d’intervention annoncée couvre l’ensemble des Pyrénées-Orientales (66). Consultez <Link href="/zones-intervention" className="font-semibold text-brand-blue underline">les communes desservies</Link> ou contactez-nous pour préciser l’adresse et les modalités de déplacement.
        </p>
      </section>

      <div className="rounded-2xl bg-brand-blue p-7 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Besoin d’une intervention anti-nuisibles à {zone.name} ?</h2>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Demander un devis gratuit</Link>
      </div>
    </main>
  )
}
