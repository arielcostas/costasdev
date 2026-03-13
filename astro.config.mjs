import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";
import rehypeExternalLinks from "rehype-external-links";

import compressor from "astro-compressor";

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
    compressor({
      zstd: false,
      fileExtensions: [".html", ".css", ".js", ".json", ".xml"],
    })
  ],
  build: {
    assets: "assets",
    inlineStylesheets: "never",
  },
  scopedStyleStrategy: "where",
  markdown: {
    remarkRehype: {
      footnoteLabel: "Notas"
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          "rel": ["nofollow", "noopener"],
          "properties": {
            "className": "external",
          },
        }
      ]
    ]
  },
  security: {
    csp: {
      algorithm: "SHA-384"
    }
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Archivo",
      cssVariable: "--font-archivo"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter"
    }
  ],
  experimental: {
    rustCompiler: true,
    chromeDevtoolsWorkspace: true,
    contentIntellisense: true
  }
});
