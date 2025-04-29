import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  compressHTML: true,
  site: "https://www.costas.dev",
  integrations: [
    sitemap({
      priority: 0.5,
      changefreq: "weekly",
    }),
    mdx(),
    icon(),
  ],
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
