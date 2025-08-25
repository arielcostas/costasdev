import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";

import compressor from "astro-compressor";

export default defineConfig({
  compressHTML: true,
  site: "https://www.costas.dev",
  integrations: [sitemap({
    priority: 0.5,
    changefreq: "weekly",
  }), mdx(), icon(), compressor()],
  build: {
    assets: "assets",
    inlineStylesheets: "never",
  },
  scopedStyleStrategy: "where",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          "rel": ["nofollow", "noopener"],
          "properties": {
            "className": "external",
          }
        }
      ]
    ]
  }
});