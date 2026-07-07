// Коллекции контента (docs/04-контентная-модель.md)
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['ru', 'en']).default('ru'),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    source_channel: z.enum(['telegram', 'b17', 'dzen', 'vc', 'linkedin', 'original']).default('original'),
    source_url: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog };
