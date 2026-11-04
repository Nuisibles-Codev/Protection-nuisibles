import type { MetadataRoute } from 'next'
import { interventionZones } from '@/lib/intervention-zones'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.protection-nuisibles.fr'
  // Éviter d'annoncer artificiellement une mise à jour de toutes les pages à chaque build.
  const actualLocalPublicationDate = new Date('2026-11-04T00:00:00+01:00')

  // Vos routes statiques et de services
  const routes = [
    '',
    '/savoir-faire',
    '/pictures',
    '/contact',
    '/deratisation',
    '/desinsectisation',
    '/punaises',
    '/frelons',
    '/zones-intervention',
    ...interventionZones.map((zone) => `/zones-intervention/${zone.slug}`),
    '/politique-confidentialite',
    '/cgv',
    '/mentions-legales',
  ]

  return routes.map((route) => {
    // Fréquence de mise à jour et priorité selon le type de page
    let priority = 0.8
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (['/deratisation', '/desinsectisation', '/punaises', '/frelons'].includes(route)) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (route === '/zones-intervention' || route.startsWith('/zones-intervention/')) {
      priority = route === '/zones-intervention' ? 0.85 : 0.65
      changeFrequency = 'monthly'
    } else if (['/politique-confidentialite', '/cgv', '/mentions-legales'].includes(route)) {
      priority = 0.3
      changeFrequency = 'monthly'
    }

    return {
      url: `${baseUrl}${route}`,
      ...(route === '/zones-intervention' || route.startsWith('/zones-intervention/') ? { lastModified: actualLocalPublicationDate } : {}),
      changeFrequency,
      priority,
    }
  })
}
