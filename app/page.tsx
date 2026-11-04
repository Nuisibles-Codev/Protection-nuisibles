import React from 'react'
import type { Metadata } from 'next'
import Banner from '@/components/Banner'
import GoogleReviews from '@/components/GoogleReviews'
import Equipment from '@/components/Equipment'
import Description from '@/components/Description'

export const metadata: Metadata = {
  title: 'Dératisation et désinsectisation à Perpignan (66) | Protection Nuisibles',
  description: "Dératisation à Perpignan, désinsectisation, punaises de lit, nids de frelons et dépigeonnage dans le 66. Diagnostic adapté et devis gratuit.",
  alternates: {
    canonical: 'https://www.protection-nuisibles.fr',
  },
  openGraph: {
    title: 'Dératisation et désinsectisation à Perpignan (66) | Protection Nuisibles',
    description: "Dératisation à Perpignan, désinsectisation, punaises de lit, nids de frelons et dépigeonnage dans le 66. Diagnostic adapté et devis gratuit.",
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