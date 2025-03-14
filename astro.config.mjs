import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
    compressHTML: true,
    site: "https://www.costas.dev",
    integrations: [sitemap({
        priority: 0.5,
        changefreq: 'weekly'
    }), mdx()],
    build: {
        assets: 'assets',
        inlineStylesheets: 'never',
    },
});