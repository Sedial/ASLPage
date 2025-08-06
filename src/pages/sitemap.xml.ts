import type { APIRoute } from 'astro';
// Importamos el blog data usando import type para evitar errores
import type { BlogData } from '../types';

// Carga dinámica de los datos del blog
const getBlogData = async (): Promise<BlogData> => {
  try {
    const data = await import('../data/blog.json');
    return data.default || data;
  } catch (error) {
    console.error('Error loading blog data:', error);
    return { posts: [] };
  }
};

const SITE_URL = 'https://yourwebsite.com'; // Reemplazar con tu dominio actual

export const GET: APIRoute = async () => {
  // Formato de fecha para el sitemap
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toISOString();
  };

  // Obtener fecha actual para páginas estáticas
  const now = new Date().toISOString();

  // Definir páginas estáticas
  const staticPages = [
    {
      url: '/',
      lastmod: now,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/about',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/services',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/contact',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/blog',
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9'
    },
  ];

  // Cargar datos del blog
  const blogData = await getBlogData();

  // Generar URLs para posts del blog
  const blogUrls = blogData.posts.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: formatDate(post.date),
    changefreq: 'monthly',
    priority: '0.7'
  }));

  // Combinar todas las URLs
  const allUrls = [...staticPages, ...blogUrls];

  // Generar XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      page => `<url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
