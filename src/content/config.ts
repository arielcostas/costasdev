import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		metaDescription: z.string(),
		publishedAt: z.date()
	})
});

export const collections = {
	'blog': blogCollection
};