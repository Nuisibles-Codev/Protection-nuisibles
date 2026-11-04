import React from 'react'
import type { Metadata } from 'next'
import ServiceLocalLinks from '@/components/ServiceLocalLinks'
import PunaiseDeLitMenu from '@/components/PunaisesMenu'

export const metadata: Metadata = {
  title: 'Punaises de lit à Perpignan : traitement et diagnostic | Protection Nuisibles',
  description: "Punaises de lit à Perpignan : reconnaître les signes, préparer le logement et connaître les étapes du traitement professionnel dans les Pyrénées-Orientales (66).",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/punaises',
  },
  openGraph: {
    title: 'Traitement Punaises de Lit à Perpignan - Protection Nuisibles 66',
    description: "Expert en traitement des punaises de lit à Perpignan et dans les Pyrénées-Orientales (66). Éradication rapide, discrète et garantie avec Protection Nuisibles.",
    url: 'https://www.protection-nuisibles.fr/punaises',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function PunaiseDeLitPage() {
  return (
    <main className="w-full">       
      <PunaiseDeLitMenu />
      <ServiceLocalLinks service="punaises" />
    </main>    
  )
}