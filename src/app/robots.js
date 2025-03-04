export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/',
          '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
        'http://t.xucongyong.com:7777/'
      ],
    },
    sitemap: 'https://top-websites.xucongyong.com/sitemap.xml',
  }
}