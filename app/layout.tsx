import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Facebook from '@/components/Facebook'
import Footer from '@/components/Footer'
import TrackingRoot from '@/components/tracking/TrackingRoot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Protection Nuisibles – Dératisation & Désinsectisation Perpignan (66)',
  description:
    "Protection Nuisibles – Experts en élimination de nuisibles dans le 66. Interventions rapides et efficaces pour éradiquer rats, insectes et autres nuisibles.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>

        <Header />
        <Breadcrumb />
        {children}
        <Facebook />
        <Footer />
        <Analytics />
        <SpeedInsights />
        <TrackingRoot
          adsId="AW-18366446985"
          phoneConversion="AW-18366446985/yGpHCMjW0docEIn75rVE"
          privacyHref="/politique-confidentialite"
        />
      </body>
    </html>
  )
}
