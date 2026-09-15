import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, ShieldCheck, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* SECTION PRINCIPALE / PLAN DU SITE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* COLONNE 1 : LOGO ET PRÉSENTATION */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-transform duration-200 hover:scale-105">
              <Image
                src="/logo.png"
                alt="Logo Protection Nuisibles"
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Protection Nuisibles — Votre expert en lutte antiparasitaire et dératisation à Perpignan et dans l’ensemble des Pyrénées-Orientales (66).
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500">
              <ShieldCheck className="w-4 h-4" />
              <span>Interventions 7j/7 & Devis gratuit</span>
            </div>
          </div>

          {/* COLONNE 2 : NOS SERVICES (PLAN DU SITE 1) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Nos Prestations
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/deratisation" className="hover:text-amber-500 transition-colors duration-150">
                  Dératisation (Rats & Souris)
                </Link>
              </li>
              <li>
                <Link href="/desinsectisation" className="hover:text-amber-500 transition-colors duration-150">
                  Désinsectisation générale
                </Link>
              </li>
              <li>
                <Link href="/punaises" className="hover:text-amber-500 transition-colors duration-150">
                  Traitement Punaises de lit
                </Link>
              </li>
              <li>
                <Link href="/frelons" className="hover:text-amber-500 transition-colors duration-150">
                  Nids de Guêpes & Frelons
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : INFORMATIONS & ACCÈS RAPIDE (PLAN DU SITE 2) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              L'Entreprise
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors duration-150">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/savoir-faire" className="hover:text-amber-500 transition-colors duration-150">
                  Notre Savoir-Faire
                </Link>
              </li>
              <li>
                <Link href="/pictures" className="hover:text-amber-500 transition-colors duration-150">
                  Nos Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors duration-150">
                  Demande de Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT & ZONE D'INTERVENTION */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact & Urgences
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Perpignan & Pyrénées-Orientales (66)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:0757516414" className="hover:text-amber-500 font-semibold transition-colors duration-150">
                  07 57 51 64 14
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <Link href="/contact" className="hover:text-amber-500 transition-colors duration-150">
                  Formulaire en ligne
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BARRE INFÉRIEURE : MENTIONS JURIDIQUES & COPYRIGHT */}
      <div className="bg-slate-900 border-t border-slate-800/80 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* LIENS JURIDIQUES */}
          <nav aria-label="Liens juridiques" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/mentions-legales" className="hover:text-amber-500 transition-colors duration-150">
              Mentions légales
            </Link>
            <span className="text-slate-700" aria-hidden="true">•</span>
            <Link href="/politique-confidentialite" className="hover:text-amber-500 transition-colors duration-150">
              Politique de confidentialité
            </Link>
            <span className="text-slate-700" aria-hidden="true">•</span>
            <Link href="/cgv" className="hover:text-amber-500 transition-colors duration-150">
              Conditions Générales (CGV)
            </Link>
          </nav>

          {/* COPYRIGHT & CRÉATEUR */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            <p>© {currentYear} Protection Nuisibles. Tous droits réservés.</p>
            <a 
              className="text-slate-500 hover:text-slate-300 transition-colors duration-150" 
              href="https://code-v.fr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Réalisé par <span className="font-bold text-white hover:underline">Codev</span>
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}