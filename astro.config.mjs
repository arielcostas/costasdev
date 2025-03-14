import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	compressHTML: true,
	site: "https://www.costas.dev",
	integrations: [sitemap({
		priority: 0.5,
		changefreq: 'weekly'
	})],
	build: {
		assets: 'assets',
		inlineStylesheets: 'never',
	},
});
