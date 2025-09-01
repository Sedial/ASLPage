import { getCollection } from 'astro:content';
import siteData from '../data/site.json';

const SITE = siteData;

export async function GET() {
  // Static pages
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.9 },
    { url: '/services', changefreq: 'monthly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 }
  ].map(page => ({
    ...page,
    lastmod: new Date().toISOString()
  }));

  // Get all blog posts
  const blogPosts = (await getCollection('blog')).map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: (post.data.updatedDate || post.data.pubDate || new Date()).toISOString ? 
             (post.data.updatedDate || post.data.pubDate || new Date()).toISOString() : 
             new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7
  }));

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${allPages
        .map(
          (page) => `
            <url>
              <loc>${SITE.url}${page.url}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>${page.changefreq}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'noindex, follow'
    }
  });
}
