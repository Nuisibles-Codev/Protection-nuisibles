import React from 'react'
import type { Metadata } from 'next'
import ServiceLocalLinks from '@/components/ServiceLocalLinks'
import DeratisationMenu from '@/components/DeratisationMenu'

export const metadata: Metadata = {
  title: 'Dératisation à Perpignan : rats et souris | Protection Nuisibles',
  description: "Dératisation à Perpignan et dans le 66 : recherche des passages de rats et souris, traitement ciblé et prévention des intrusions. Devis gratuit.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/deratisation',
  },
  openGraph: {
    title: 'Dératisation à Perpignan : rats et souris | Protection Nuisibles',
    description: "Dératisation à Perpignan et dans le 66 : recherche des passages de rats et souris, traitement ciblé et prévention des intrusions. Devis gratuit.",
    url: 'https://www.protection-nuisibles.fr/deratisation',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function DeratisationPage() {
  return (
    <main className="w-full">       
      <DeratisationMenu />
      <ServiceLocalLinks service="deratisation" />
    </main>    
  )
}