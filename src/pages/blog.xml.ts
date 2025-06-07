import rss from "@astrojs/rss";
import type { APIContext, APIRoute } from "astro";
import { getCollection } from "astro:content";

const spanishPubDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  return date.toLocaleDateString("es-ES", options);
}

export const GET: APIRoute = async (context) => {
  const collection = (await getCollection("blog"))
    .filter((post) => post.data.publishedAt && post.data.title && post.data.description)
    .sort((a, b) => {
      return new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime();
    })
    .slice(0, 20); // Limit to the latest 20 posts

  return rss({
    title: "Blog de Ariel Costas",
    description: "Artículos del blog de Ariel Costas",
    site: context.site!,
    customData: `<link rel="self" type="application/rss+xml" href="${context.url}" />`,
    xmlns: {
      "cdrss": "urn:costas.dev#rss",
    },
    items: collection.map((post) => ({
      title: post.data.title,
      link: `${context.url.origin}/blog/${post.id}`,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      categories: post.data.tags,
      customData: `<cdrss:spanishPubDate>${spanishPubDate(post.data.publishedAt)}</cdrss:spanishPubDate>`,
    })),
    stylesheet: "/rss/styles.xsl"
  });
}
