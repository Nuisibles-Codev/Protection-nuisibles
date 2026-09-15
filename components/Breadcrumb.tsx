"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

// Dictionnaire pour traduire les URLs en titres lisibles (et optimisés SEO)
const routeLabels: Record<string, string> = {
  punaises: 'Punaises de lit',
  desinsectisation: 'Désinsectisation',
  deratisation: 'Dératisation',
  frelons: 'Guêpes & Frelons',
  pictures: 'Galerie Photos',
  'savoir-faire': 'Qui sommes-nous ?',
  contact: 'Contact',
  cgv: 'CGV',
  'mentions-legales': 'Mentions légales',
  'politique-confidentialite': 'Politique de confidentialité',
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Ne pas afficher le fil d'Ariane sur la page d'accueil
  if (pathname === '/') return null;

  // Découpage de l'URL (ex: "/services/deratisation" -> ["services", "deratisation"])
  const segments = pathname.split('/').filter(Boolean);

  // Construction des éléments pour le Fil d'Ariane & Données structurées
  const breadcrumbItems = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.replace(/-/g, ' ');
    return { label, href };
  });

  // Schema.org JSON-LD pour Google
  const schemaItems = [
    { label: 'Accueil', href: '/' },
    ...breadcrumbItems,
  ].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: `https://www.protection-nuisibles.fr${item.href}`,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <>
      {/* Script JSON-LD injecté dynamiquement pour le SEO */}
      <Script
        id={`breadcrumb-jsonld-${pathname}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Rendu Visuel */}
      <div className="w-full bg-slate-50 border-b border-slate-100 pt-24 pb-3 px-4 sm:px-6">
        <nav aria-label="Fil d'Ariane" className="max-w-5xl mx-auto text-xs sm:text-sm text-slate-500">
          <ol className="flex items-center space-x-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-brand-blue font-medium transition-colors">
                Accueil
              </Link>
            </li>
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              return (
                <li key={item.href} className="flex items-center space-x-2">
                  <span className="text-slate-300">/</span>
                  {isLast ? (
                    <span className="font-bold text-slate-800 capitalize" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-brand-blue font-medium transition-colors capitalize">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </>
  );
}