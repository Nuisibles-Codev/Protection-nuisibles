import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Facebook from '@/components/Facebook'
import Footer from '@/components/Footer'

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18366446985"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18366446985');
          `}
        </Script>

        <Header />
        <Breadcrumb /> {/* Généré automatiquement sur toutes les pages sauf l'accueil */}
        {children}
        <Facebook />
        <Footer />
      </body>
    </html>
  )
}