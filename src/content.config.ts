import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: "src/data/blog" }),
	schema: z.object({
		title: z.string(),
		metaDescription: z.string(),
		publishedAt: z.coerce.date()
	})
});

const portfolio = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: "src/data/portfolio" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		technologies: z.array(z.string())
	})
})

export const collections = {
	blog,
	portfolio
};
