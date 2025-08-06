import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-site.com',
  server: {
    port: 3000, // Especifica un puerto
    host: true // Permite acceso desde otros dispositivos
  },
  compressHTML: true,
  build: {
    assets: 'assets'
  }
});
