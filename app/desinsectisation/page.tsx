import React from 'react'
import type { Metadata } from 'next'
import DesinsectisationMenu from '@/components/DesinsectisationMenu'

export const metadata: Metadata = {
  title: 'Désinsectisation à Perpignan – Cafards, Blattes & Puces | Protection Nuisibles 66',
  description: "Traitement professionnel contre les cafards, blattes, puces, punaises et autres insectes. Service de désinsectisation dans les Pyrénées-Orientales par des experts agréés.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/desinsectisation',
  },
  openGraph: {
    title: 'Désinsectisation à Perpignan – Protection Nuisibles 66',
    description: "Traitement professionnel et récurrent contre tous types d'insectes dans les Pyrénées-Orientales par des techniciens certifiés.",
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
    </main>
  )
}
