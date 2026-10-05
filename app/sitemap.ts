import type { MetadataRoute } from 'next'

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
