import { getCollection } from 'astro:content';
import siteData from '../data/site.json';

const SITE = siteData;

export async function get() {
  // Get all pages
  const pages = import.meta.glob('./**/*.{md,mdx,astro}');
  const pageUrls = Object.keys(pages)
    .filter(page => 
      !page.includes('404.astro') && 
      !page.includes('sitemap.xml.js') &&
      !page.startsWith('./api/') &&
      !page.includes('_') &&
      !page.endsWith('/index.astro')
    )
    .map(page => {
      const path = page
        .replace('./', '/')
        .replace('/index.astro', '')
        .replace('.astro', '')
        .replace('.mdx', '')
        .replace('.md', '');
      
      // Set priority based on URL depth
      let priority = 0.8;
      const depth = path.split('/').filter(Boolean).length;
      if (depth === 1) priority = 1.0;
      else if (depth === 2) priority = 0.9;
      
      // Set change frequency based on section
      let changefreq = 'monthly';
      if (path === '/') changefreq = 'daily';
      else if (path.startsWith('/blog')) changefreq = 'weekly';
      
      return {
        url: path,
        lastmod: new Date().toISOString(),
        changefreq,
        priority
      };
    });

  // Get all blog posts
  const blogPosts = (await getCollection('blog')).map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: post.data.updatedDate || post.data.pubDate,
    changefreq: 'weekly',
    priority: 0.7
  }));

  const allPages = [...pageUrls, ...blogPosts];

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

  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'noindex, follow'
    }
  };
}
