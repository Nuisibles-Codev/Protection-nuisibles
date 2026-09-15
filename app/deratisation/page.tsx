import React from 'react'
import type { Metadata } from 'next'
import DeratisationMenu from '@/components/DeratisationMenu'

export const metadata: Metadata = {
  title: 'Dératisation à Perpignan - Protection Nuisibles 66',
  description: "Expert en dératisation à Perpignan et dans les Pyrénées-Orientales (66). Élimination rapide et durable des rats et souris avec Protection Nuisibles.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/deratisation',
  },
  openGraph: {
    title: 'Dératisation à Perpignan - Protection Nuisibles 66',
    description: "Expert en dératisation à Perpignan et dans les Pyrénées-Orientales (66). Élimination rapide et durable des rats et souris avec Protection Nuisibles.",
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
    </main>    
  )
}