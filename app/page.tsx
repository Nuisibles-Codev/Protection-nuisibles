import React from 'react'
import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import GoogleReviews from '@/components/GoogleReviews'
import Equipment from '@/components/Equipment'
import Description from '@/components/Description'

export const metadata: Metadata = {
  title: 'Dératisation et désinsectisation à Perpignan (66) | Protection Nuisibles',
  description: "Dératisation à Perpignan, désinsectisation, traitement des punaises de lit et destruction de nids de frelons dans le 66. Diagnostic adapté et devis gratuit.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr',
  },
  openGraph: {
    title: 'Protection Nuisibles – Dératisation & Désinsectisation Perpignan (66)',
    description: "Rats, souris, cafards, punaises de lit et nids de frelons dans les Pyrénées-Orientales : découvrez nos traitements anti-nuisibles et nos zones d'intervention.",
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