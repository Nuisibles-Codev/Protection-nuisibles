import React from 'react'
import type { Metadata } from 'next'
import ServiceLocalLinks from '@/components/ServiceLocalLinks'
import FrelonsMenu from '@/components/FrelonsMenu'

export const metadata: Metadata = {
  title: 'Nids de frelons et guêpes à Perpignan | Protection Nuisibles',
  description: "Destruction de nids de frelons asiatiques, frelons européens et guêpes à Perpignan (66) : diagnostic, sécurisation et intervention adaptée.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/frelons',
  },
  openGraph: {
    title: 'Destruction Nids de Frelons & Guêpes à Perpignan - Protection Nuisibles 66',
    description: "Localisation et neutralisation de nids de guêpes ou frelons dans les Pyrénées-Orientales : intervention étudiée selon les risques et les accès.",
    url: 'https://www.protection-nuisibles.fr/frelons',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function FrelonsPage() {
  return (
    <main className="w-full">
      <FrelonsMenu /> 
      <ServiceLocalLinks service="frelons" />
    </main>
  )
}