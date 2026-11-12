import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: (context) =>
      docsSchema({ extend: (ctx) => blogSchema(ctx) })(context).transform((data) => ({
        ...data,
        // List pages render the full post when excerpt is missing.
        excerpt: data.excerpt ?? data.description,
      })),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
