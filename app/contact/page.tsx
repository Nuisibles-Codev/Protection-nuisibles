import React from 'react'
import type { Metadata } from 'next'
import Map from '@/components/Map'
import Form from '@/components/Form'

export const metadata: Metadata = {
  title: 'Contact & Devis Gratuit – Protection Nuisibles Perpignan (66)',
  description: "Contactez Protection Nuisibles pour une intervention rapide contre les nuisibles dans les Pyrénées-Orientales. Demandez votre devis gratuit à domicile.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr/contact',
  },
  openGraph: {
    title: 'Contact & Devis Gratuit – Protection Nuisibles 66',
    description: "Contactez notre équipe pour une intervention rapide de dératisation ou désinsectisation dans les Pyrénées-Orientales. Devis gratuit.",
    url: 'https://www.protection-nuisibles.fr/contact',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full"> 
      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight text-center mb-10">
        Nous contacter
      </h1>         
      <Map />
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center my-10">
        Demandez votre devis gratuit à domicile
      </h2>
      <Form />  
    </main>
  )
}