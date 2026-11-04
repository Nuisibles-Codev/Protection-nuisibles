import React from 'react'
import type { Metadata } from 'next'
import ServiceLocalLinks from '@/components/ServiceLocalLinks'
import DesinsectisationMenu from '@/components/DesinsectisationMenu'

export const metadata: Metadata = {
  title: 'Désinsectisation à Perpignan : cafards, fourmis, puces | Protection Nuisibles',
  description: "Désinsectisation à Perpignan : cafards, blattes, fourmis et puces. Identification, traitement adapté et conseils de prévention dans les Pyrénées-Orientales.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/desinsectisation',
  },
  openGraph: {
    title: 'Désinsectisation à Perpignan – Protection Nuisibles 66',
    description: "Lutte contre les cafards, blattes, fourmis et puces à Perpignan. Diagnostic, protocole de désinsectisation et prévention.",
    url: 'https://www.protection-nuisibles.fr/desinsectisation',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function DesinsectisationPage() {
  return (
    <main className="w-full">
      <DesinsectisationMenu />   
      <ServiceLocalLinks service="desinsectisation" />
    </main>
  )
}
