import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: "src/data/blog" }),
	schema: z.object({
		title: z.string(),
		metaDescription: z.string(),
		publishedAt: z.date()
	})
});

export const collections = {
	blog
};
