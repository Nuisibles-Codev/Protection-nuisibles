import React from 'react'
import type { Metadata } from 'next'
import FrelonsMenu from '@/components/FrelonsMenu'

export const metadata: Metadata = {
  title: 'Destruction Nids de Frelons & Guêpes à Perpignan - Protection Nuisibles 66',
  description: "Intervention d'urgence pour la destruction rapide et sécurisée de nids de frelons asiatiques, européens et guêpes dans tout le 66 (Pyrénées-Orientales).",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/frelons',
  },
  openGraph: {
    title: 'Destruction Nids de Frelons & Guêpes à Perpignan - Protection Nuisibles 66',
    description: "Éradication sécurisée et rapide des nids de frelons et guêpes dans les Pyrénées-Orientales par des désinsectiseurs certifiés.",
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
    </main>
  )
}