import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import { DEFAULT_LANGUAGE, LANGUAGE_CODES } from './src/i18n';

export default defineConfig({
    compressHTML: true,
    site: "https://www.costas.dev",
    i18n: {
        defaultLocale: DEFAULT_LANGUAGE,
        locales: LANGUAGE_CODES,
        routing: {
            prefixDefaultLocale: false,
            fallbackType: 'redirect',
            redirectToDefaultLocale: true
        }
    },
    integrations: [
        sitemap({
            priority: 0.5,
            changefreq: 'weekly'
        }),
        mdx()
    ],
    build: {
        assets: 'assets',
        inlineStylesheets: 'never',
    },
    scopedStyleStrategy: 'where'
});