import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { interventionZones } from '@/lib/intervention-zones'

const baseUrl = 'https://www.protection-nuisibles.fr'

export const metadata: Metadata = {
  title: 'Zones d’intervention anti-nuisibles dans le 66 | Protection Nuisibles',
  description: "Dératisation, désinsectisation, punaises de lit et nids de guêpes dans les Pyrénées-Orientales : Perpignan, Canet, Argelès, Céret, Prades et alentours.",
  alternates: { canonical: `${baseUrl}/zones-intervention` },
  openGraph: {
    title: 'Zones d’intervention dans les Pyrénées-Orientales (66)',
    description: 'Protection Nuisibles intervient à Perpignan et dans les communes du 66.',
    url: `${baseUrl}/zones-intervention`,
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ZonesInterventionPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6">
      <header className="mb-12 max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-blue">Pyrénées-Orientales • 66</p>
        <h1 className="mb-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Nos zones d’intervention contre les nuisibles
        </h1>
        <p className="text-lg leading-relaxed text-slate-700">
          Protection Nuisibles intervient à Perpignan et dans l’ensemble des Pyrénées-Orientales pour la dératisation, la désinsectisation, les traitements contre les punaises de lit et la destruction sécurisée de nids de guêpes et frelons. Retrouvez les informations locales de votre commune.
        </p>
      </header>

      <div className="mb-12 grid items-center gap-8 rounded-3xl border border-slate-100 bg-slate-50 p-6 md:grid-cols-2">
        <div className="relative h-64 overflow-hidden rounded-2xl md:h-80">
          <Image src="/image12.png" alt="Matériel professionnel de lutte contre les nuisibles" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Particuliers et professionnels du département</h2>
          <p className="mb-4 leading-relaxed text-slate-700">
            Maisons, appartements, commerces, hébergements touristiques ou locaux d’activité : le diagnostic s’adapte aux lieux, aux nuisibles identifiés et aux contraintes d’accès. Les communes ci-dessous disposent d’une présentation dédiée ; les autres localités du 66 restent comprises dans notre zone d’intervention annoncée.
          </p>
          <Link href="/contact" className="inline-flex rounded-xl bg-brand-red px-6 py-3 font-bold text-white transition-colors hover:bg-red-700">Demander un devis gratuit</Link>
        </div>
      </div>

      <section aria-labelledby="communes" className="mb-14">
        <h2 id="communes" className="mb-6 text-2xl font-black text-slate-900">Les communes desservies</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interventionZones.map((zone) => (
            <Link key={zone.slug} href={`/zones-intervention/${zone.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-brand-blue hover:shadow-md">
              <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-brand-blue">{zone.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{zone.setting.charAt(0).toUpperCase() + zone.setting.slice(1)}</p>
              <span className="mt-4 block text-sm font-semibold text-brand-blue">Voir les interventions à {zone.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-brand-blue p-7 text-white">
        <h2 className="mb-3 text-2xl font-bold">Votre commune n’est pas dans la liste ?</h2>
        <p className="mb-5 leading-relaxed text-blue-50">Nous couvrons les Pyrénées-Orientales (66). Contactez-nous en indiquant votre commune et le nuisible rencontré pour vérifier les modalités d’intervention.</p>
        <a href="tel:+33757516414" className="inline-block rounded-xl bg-white px-6 py-3 font-bold text-brand-blue">07 57 51 64 14</a>
      </section>
    </main>
  )
}
