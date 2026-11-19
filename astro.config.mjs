import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkArticleToc from './src/plugins/remark-article-toc.mjs';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Drafts: pages that exist for local preview only. They open on the dev server,
// but are removed from the published build and from the sitemap, even if their
// files get committed. To publish a page, take its pattern out of this list.
//   /career*/  - direction landing and its variants (waiting for acceptance)
//   /*-prev/   - previous version of a page kept for before/after comparison
const draftDirs = [/^career/, /-prev$/];
const isDraftUrl = (url) => draftDirs.some((re) => re.test(new URL(url).pathname.split('/').filter(Boolean)[0] ?? ''));
const dropDraftPages = {
  name: 'drop-draft-pages',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const name of await fs.readdir(root)) {
        if (draftDirs.some((re) => re.test(name))) {
          await fs.rm(path.join(root, name), { recursive: true, force: true });
        }
      }
    },
  },
};

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
      filter: (page) => !isDraftUrl(page) && !page.includes('/premium/') && !page.includes('/soprovozhdenie/') && !page.includes('/diagnostika/') && !page.includes('/lp/') && !page.includes('/home/') && !page.includes('/sos/') && !page.includes('/oferta/') && !page.includes('-a/') && !page.includes('-b/'),
    }),
    dropDraftPages,
  ],
  markdown: {
    remarkPlugins: [remarkArticleToc],
  },
});
