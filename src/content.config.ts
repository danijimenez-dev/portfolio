import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      problem: z.string(),
      solution: z.string(),
      techStack: z.array(z.string()),
      status: z.enum(['completed', 'coming-soon']),
      featured: z.boolean().default(false),
      order: z.number(),
      image: image().optional(),
      liveUrl: z.url().optional(),
      repoUrl: z.url().optional(),
      grade: z.string().optional(),
    }),
});

export const collections = { projects };
