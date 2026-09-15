import React from 'react'
import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import GoogleReviews from '@/components/GoogleReviews'
import Equipment from '@/components/Equipment'
import Description from '@/components/Description'

export const metadata: Metadata = {
  title: 'Protection Nuisibles – Dératisation & Désinsectisation Perpignan (66)',
  description: "Experts en dératisation, désinsectisation, punaises de lit et frelons dans les Pyrénées-Orientales (66). Interventions rapides 7j/7 par des professionnels agréés.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr',
  },
  openGraph: {
    title: 'Protection Nuisibles – Dératisation & Désinsectisation Perpignan (66)',
    description: "Experts en dératisation, désinsectisation, punaises de lit et frelons dans le 66. Interventions rapides, efficaces et discrètes.",
    url: 'https://www.protection-nuisibles.fr',
    siteName: 'Protection Nuisibles',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden">
      <Banner />
      <GoogleReviews />
      <Equipment />
      <Description />    
    </main>
  )
}