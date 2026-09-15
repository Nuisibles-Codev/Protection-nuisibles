import React from 'react'
import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'Notre Savoir-Faire & Expertise – Protection Nuisibles 66',
  description: "Découvrez l'expertise de Protection Nuisibles à Perpignan : dératisation, désinsectisation, dépigeonnage et solutions de prévention sur mesure dans les Pyrénées-Orientales.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/savoir-faire',
  },
  openGraph: {
    title: 'Notre Savoir-Faire & Expertise – Protection Nuisibles 66',
    description: "Experts agréés en gestion des nuisibles dans le 66. Découvrez notre histoire, nos certifications et nos engagements de qualité.",
    url: 'https://www.protection-nuisibles.fr/savoir-faire',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function SavoirFairePage() {
  return (
    <main className="w-full">
      <About />    
    </main>
  )
}