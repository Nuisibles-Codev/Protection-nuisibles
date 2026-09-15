import React from 'react'
import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Nos Interventions en Images – Protection Nuisibles 66',
  description: "Découvrez nos photos d'interventions de dératisation, désinsectisation et dépigeonnage dans le département des Pyrénées-Orientales (66).",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/pictures',
  },
  openGraph: {
    title: 'Nos Interventions en Images – Protection Nuisibles 66',
    description: "Galerie photo de nos interventions sur le terrain dans le 66 : dératisation, traitement anti-punaises et destruction de nids.",
    url: 'https://www.protection-nuisibles.fr/pictures',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function PicturesPage() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-12 border-b border-slate-100 pb-4">  
        Nos interventions en images
      </h1>      
      <Gallery />   
    </main>
  )
}