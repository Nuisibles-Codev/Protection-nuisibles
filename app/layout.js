import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header/Header'
import Facebook from '@/components/Facebook/Facebook'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Protection Nuisibles',
  description:
    "Protection Nuisibles – Experts en élimination de nuisibles dans le 66. Interventions rapides et efficaces pour éradiquer rats, insectes, et autres nuisibles. Service de qualité, prévention et conseils personnalisés dans tout le département des Pyrénées-Orientales.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* Chargement du script Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18366446985"
          strategy="afterInteractive"
          async
        />
        {/* Initialisation du dataLayer et configuration de gtag */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18366446985');
          `}
        </Script>
        <Header />
          {children}
          <Facebook />
        <Footer />
      </body>
    </html>
  )
}
