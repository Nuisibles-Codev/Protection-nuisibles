import type { Metadata } from 'next'
import Link from 'next/link'
import { interventionZones, featuredInterventionZones } from '@/lib/intervention-zones'
import { regions } from '@/lib/zones-geo'

const url = 'https://www.protection-nuisibles.fr/zones-intervention'
const departments = { '66': 'Pyrénées-Orientales', '11': 'Aude' }

export const metadata: Metadata = {
  title: "Zones d’intervention dératisation et frelons autour de Perpignan | 50 km",
  description: "Toutes nos pages locales anti-nuisibles dans les 50 km de Perpignan : dératisation, désinsectisation, punaises de lit, destruction de nids de frelons et guêpes.",
  alternates: { canonical: url },
  openGraph: {
    title: "Zones anti-nuisibles autour de Perpignan | Protection Nuisibles",
    description: "Consultez les pages par ville pour dératisation, désinsectisation et destruction de nids de frelons.",
    url,
    siteName: "Protection Nuisibles",
    locale: "fr_FR",
    type: "website",
  },
}

const departmentsData = (['66', '11'] as const).map(department => ({
  department,
  label: departments[department],
  zones: interventionZones.filter(zone => zone.department === department).sort((a, b) => a.name.localeCompare(b.name, 'fr')),
}))

const sectorData = Object.entries(regions).map(([key, sector]) => ({
  key,
  ...sector,
  zones: interventionZones.filter(zone => zone.region === key).sort((a, b) => a.name.localeCompare(b.name, 'fr')),
})).filter(sector => sector.zones.length > 0)

export default function ZonesInterventionPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 text-slate-700 sm:px-6">
      <header className="mb-12 max-w-5xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-blue">Dératisation · Désinsectisation · Frelons · Punaises de lit</p>
        <h1 className="mb-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">Zones d’intervention anti-nuisibles autour de Perpignan</h1>
        <p className="mb-5 text-lg leading-relaxed">
          Protection Nuisibles intervient dans les Pyrénées-Orientales (66). Retrouvez nos informations de lutte contre les rats et souris, cafards, punaises de lit et nids de guêpes ou de frelons pour chaque commune du secteur. Nous recensons aussi les communes de l'Aude situées à proximité, pour lesquelles un déplacement doit être confirmé.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="tel:+33757516414" className="rounded-xl bg-brand-red px-6 py-3 font-bold text-white">07 57 51 64 14</a>
          <Link href="/contact" className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-900 hover:bg-slate-50">Obtenir un devis gratuit</Link>
        </div>
      </header>

      <section aria-labelledby="priorites" className="mb-14">
        <h2 id="priorites" className="mb-5 text-2xl font-black text-slate-900">Principales communes autour de Perpignan</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredInterventionZones.map(zone => (
            <Link key={zone.slug} href={`/zones-intervention/${zone.slug}`} className="group rounded-2xl border border-slate-200 p-5 transition-all hover:border-brand-blue hover:shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-brand-blue">{zone.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">Dératisation, désinsectisation et destruction de nids</p>
              <span className="mt-3 block text-sm font-semibold text-brand-blue">Consulter la fiche locale</span>
            </Link>
          ))}
        </div>
      </section>

      <nav aria-label="Accès direct aux secteurs géographiques" className="mb-12 rounded-2xl bg-slate-50 p-6">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Rechercher par secteur</h2>
        <div className="flex flex-wrap gap-2">
          {sectorData.map(sector => <a key={sector.key} href={`#${sector.key}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50">{sector.sector} ({sector.zones.length})</a>)}
        </div>
      </nav>

      <section aria-labelledby="secteurs" className="mb-14">
        <h2 id="secteurs" className="mb-7 text-2xl font-black text-slate-900">Toutes les communes par secteur</h2>
        <div className="space-y-9">
          {sectorData.map(sector => (
            <section id={sector.key} key={sector.key} className="scroll-mt-28 border-t border-slate-200 pt-7" aria-labelledby={`title-${sector.key}`}>
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                <h3 id={`title-${sector.key}`} className="text-xl font-black text-slate-900 sm:text-2xl">{sector.sector}</h3>
                <span className="text-sm text-slate-500">{sector.zones.length} communes</span>
              </div>
              <p className="mb-5 max-w-4xl text-sm leading-relaxed text-slate-600">
                Consultez les conseils de dératisation, désinsectisation, traitement de punaises de lit et destruction de nids de guêpes ou frelons adaptés au contexte de chaque commune.
              </p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {sector.zones.map(zone => (
                  <Link key={zone.code} href={`/zones-intervention/${zone.slug}`} className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-blue hover:text-brand-blue">
                    <span>{zone.name}</span><span className="shrink-0 text-xs font-normal text-slate-400">{zone.department}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section aria-labelledby="departements" className="mb-14 rounded-3xl bg-slate-50 p-7 sm:p-9">
        <h2 id="departements" className="mb-6 text-2xl font-black text-slate-900">Couverture et conditions d’intervention</h2>
        <div className="grid gap-7 md:grid-cols-2">
          {departmentsData.map(data => (
            <article key={data.department} className="rounded-2xl bg-white p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">{data.label} ({data.department})</h3>
              <p className="mb-3 leading-relaxed">{data.department === '66'
                ? 'Protection Nuisibles annonce intervenir dans tout le département des Pyrénées-Orientales, y compris les communes situées au-delà du rayon de 50 km.'
                : "Les communes audoises figurent ici parce qu'elles sont géographiquement proches de Perpignan. La disponibilité et les conditions de déplacement doivent être vérifiées avant toute réservation."}</p>
              <p className="text-sm text-slate-500">{data.zones.length} communes recensées dans le rayon défini.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-blue p-8 text-center text-white sm:p-10">
        <h2 className="mb-4 text-2xl font-black">Vous ne trouvez pas votre commune ?</h2>
        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">Contactez-nous en indiquant votre adresse et le type de nuisible. Nous vous renseignerons sur la possibilité d'intervention et les modalités du diagnostic.</p>
        <Link href="/contact" className="inline-block rounded-xl bg-white px-7 py-3 font-bold text-brand-blue">Demander un devis gratuit</Link>
      </section>
    </main>
  )
}
