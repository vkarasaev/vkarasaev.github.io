import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://karasaev.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/premium/') && !page.includes('/lp/'),
    }),
  ],
});
