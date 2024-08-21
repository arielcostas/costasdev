import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
	const collection = await getCollection('blog');

	return rss({
		title: "Blog de Ariel Costas",
		description: "Artículos del blog de Ariel Costas",
		site: context.site,
		items: collection.map((post) => ({
			title: post.data.title,
			link: `${context.site}blog/${post.slug}`,
			description: post.data.metaDescription,
			pubDate: post.data.publishedAt
		}))
	})
}
