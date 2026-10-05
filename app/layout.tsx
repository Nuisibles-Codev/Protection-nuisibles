import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
            document.addEventListener('click', function(event) {
              var target = event.target;
              if (!(target instanceof Element)) return;
              var link = target.closest('a[href^="tel:"]');
              if (!link || event.defaultPrevented) return;
              gtag('event', 'conversion', {
                'send_to': 'AW-18366446985/yGpHCMjW0docEIn75rVE'
              });
            });
          `}
        </Script>

        <Header />
        <Breadcrumb />
        {children}
        <Facebook />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
