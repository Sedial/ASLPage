import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://asl-theta.vercel.app',
  server: {
    port: 3000,
    host: true
  },
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  compressHTML: true,
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
    format: 'file',
    assetFileNames: 'assets/[name]-[hash][extname]',
    minify: true
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
    syntaxHighlight: 'shiki',
    gfm: true
  },
  // View Transitions are now stable in Astro 5.9.2
  viewTransitions: true
});
