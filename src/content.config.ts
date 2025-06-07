import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubLink: z.string().url().optional(),
    onlineLink: z.string().url().optional(),
    demoLink: z.string().url().optional(),
    images: z.array(
      z.object({ src: z.string(), alt: z.string() })
    ).default([])
  }),
});

export const collections = {
  blog,
  portfolio,
};
