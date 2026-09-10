/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://www.protection-nuisibles.fr',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*'],
};