import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkArticleToc from './src/plugins/remark-article-toc.mjs';

export default defineConfig({
  site: 'https://karasaev.com',
  trailingSlash: 'always',
  // Старые адреса остаются рабочими через meta-refresh редиректы.
  // Сопровождение и диагностика сняты (W02, релиз 2026-11): их адреса и прежний
  // /premium/ ведут на терапию. Главной стала бывшая /home.
  redirects: {
    '/premium/': '/therapy/',
    '/soprovozhdenie/': '/therapy/',
    '/diagnostika/': '/therapy/',
    '/home/': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/premium/') && !page.includes('/soprovozhdenie/') && !page.includes('/diagnostika/') && !page.includes('/lp/') && !page.includes('/home/') && !page.includes('/sos/') && !page.includes('/oferta/') && !page.includes('-a/') && !page.includes('-b/'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkArticleToc],
  },
});
