import type { MetadataRoute } from 'next'
import { interventionZones } from '@/lib/intervention-zones'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.protection-nuisibles.fr'
  const currentDate = new Date()

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
      priority = route === '/zones-intervention' ? 0.85 : 0.75
      changeFrequency = 'monthly'
    } else if (['/politique-confidentialite', '/cgv', '/mentions-legales'].includes(route)) {
      priority = 0.3
      changeFrequency = 'monthly'
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    }
  })
}
