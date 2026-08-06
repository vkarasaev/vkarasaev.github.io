import type { CollectionEntry } from 'astro:content';

export const BLOG_FORMAT_LABELS = {
  article: 'Статья',
  analysis: 'Разбор',
  case: 'Кейс',
  personal: 'Личное',
  series: 'Цикл',
} as const;

export type BlogFormat = keyof typeof BLOG_FORMAT_LABELS;

export function getBlogSlug(post: CollectionEntry<'blog'>) {
  return post.data.slug ?? post.id.replace(/^(ru|en)\//, '');
}

export function getBlogHref(post: CollectionEntry<'blog'>) {
  return `/blog/${getBlogSlug(post)}/`;
}

export function getBlogFormatLabel(format: BlogFormat) {
  return BLOG_FORMAT_LABELS[format];
}
