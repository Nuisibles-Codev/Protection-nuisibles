import Link from 'next/link'
import { getInterventionZone, type InterventionZone } from '@/lib/intervention-zones'

type ServiceName = 'deratisation' | 'desinsectisation' | 'frelons' | 'punaises' | 'depigeonnage'

const headings: Record<ServiceName, string> = {
  deratisation: 'Dératisation dans les communes autour de Perpignan',
  desinsectisation: 'Désinsectisation à Perpignan et dans les villes proches',
  frelons: 'Destruction de nids de frelons et de guêpes dans le 66',
  punaises: 'Traitement des punaises de lit dans les Pyrénées-Orientales',
  depigeonnage: 'Dépigeonnage et protection anti-pigeons dans les communes du 66'
}
const labels: Record<ServiceName, string> = {
  deratisation: 'Dératisation à',
  desinsectisation: 'Désinsectisation à',
  frelons: 'Nids de frelons à',
  punaises: 'Punaises de lit à',
  depigeonnage: 'Dépigeonnage à',
}
const prioritySlugs = [
  'perpignan', 'cabestany', 'saint-esteve', 'bompas', 'toulouges',
  'pia', 'baho', 'canohes', 'pollestres', 'canet-en-roussillon',
  'saint-cyprien', 'argeles-sur-mer', 'elne', 'thuir', 'rivesaltes',
  'le-barcares', 'sainte-marie-la-mer', 'saint-laurent-de-la-salanque',
  'le-boulou', 'ceret', 'prades', 'ille-sur-tet', 'millas'
]

export default function ServiceLocalLinks({ service }: { service: ServiceName }) {
  const zones = prioritySlugs.map(getInterventionZone).filter((zone): zone is InterventionZone => Boolean(zone))
  return (
    <section aria-labelledby="service-local-zones" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6">
      <h2 id="service-local-zones" className="mb-4 text-2xl font-black text-slate-900">{headings[service]}</h2>
      <p className="mb-6 max-w-4xl leading-relaxed text-slate-700">
        Découvrez les démarches et conseils propres à votre commune. Les diagnostics dépendent du nuisible, de la configuration des lieux et des contraintes d'accès.
      </p>
      <nav aria-label={headings[service]} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {zones.map(zone => (
          <Link key={zone.slug} href={`/zones-intervention/${zone.slug}`} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue hover:bg-blue-50">
            {labels[service]} {zone.name}
          </Link>
        ))}
      </nav>
      <Link href="/zones-intervention" className="mt-6 inline-block font-bold text-brand-blue underline">Voir toutes les communes dans les 50 km de Perpignan</Link>
    </section>
  )
}
