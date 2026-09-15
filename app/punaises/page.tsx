import React from 'react'
import type { Metadata } from 'next'
import PunaiseDeLitMenu from '@/components/PunaisesMenu'

export const metadata: Metadata = {
  title: 'Traitement Punaises de Lit à Perpignan - Protection Nuisibles 66',
  description: "Expert en traitement des punaises de lit à Perpignan et dans les Pyrénées-Orientales (66). Éradication rapide, discrète et garantie avec Protection Nuisibles.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/punaises-de-lit',
  },
  openGraph: {
    title: 'Traitement Punaises de Lit à Perpignan - Protection Nuisibles 66',
    description: "Expert en traitement des punaises de lit à Perpignan et dans les Pyrénées-Orientales (66). Éradication rapide, discrète et garantie avec Protection Nuisibles.",
    url: 'https://www.protection-nuisibles.fr/punaises-de-lit',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function PunaiseDeLitPage() {
  return (
    <main className="w-full">       
      <PunaiseDeLitMenu />
    </main>    
  )
}