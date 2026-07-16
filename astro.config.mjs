import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://karasaev.com',
  trailingSlash: 'always',
  // Линейка 10_01: /premium переехал в /soprovozhdenie; главной стала бывшая /home,
  // старые URL остаются рабочими через meta-refresh редиректы.
  redirects: {
    '/premium/': '/soprovozhdenie/',
    '/home/': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/premium/') && !page.includes('/lp/') && !page.includes('/home/') && !page.includes('/sos/') && !page.includes('/oferta/') && !page.includes('-a/') && !page.includes('-b/'),
    }),
  ],
});
