/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://khetarvala.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/api/*', '/_next/*', '/*/*.json', '/*?*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/*.json$', '/*?*'],
      },
    ],
    additionalSitemaps: ['https://khetarvala.com/sitemap.xml'],
  },
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/products/': 0.8,
      '/about/': 0.8,
      '/contact/': 0.8,
      '/faq/': 0.8,
      '/blog/': 0.8,
      '/privacy-policy/': 0.5,
      '/terms-and-conditions/': 0.5,
      '/shipping-policy/': 0.5,
      '/refund-policy/': 0.5,
    };

    const changeFreqMap = {
      '/': 'weekly',
      '/products/': 'weekly',
      '/about/': 'monthly',
      '/contact/': 'monthly',
      '/faq/': 'monthly',
      '/blog/': 'weekly',
      '/privacy-policy/': 'yearly',
      '/terms-and-conditions/': 'yearly',
      '/shipping-policy/': 'yearly',
      '/refund-policy/': 'yearly',
    };

    return {
      loc: path,
      changefreq: changeFreqMap[path] || 'monthly',
      priority: priorityMap[path] || 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};