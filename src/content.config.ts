import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Entry ids are `<lang>/<slug>` (folder per language). The slug must be
// identical across languages so hreflang alternates line up.

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    tech: z.array(z.string()),
    year: z.number(),
    demo: z.string().url().optional(),
    source: z.string().url().optional(),
    /** Site-relative path to a project brief, e.g. /files/foo.pdf */
    pdf: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    kind: z.enum(['software', 'course']),
    features: z.array(z.string()),
    order: z.number().default(99),
  }),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, products, tutorials };
