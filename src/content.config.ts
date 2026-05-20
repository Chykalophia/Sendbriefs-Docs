// Astro content collections config — declares the `docs` collection that Starlight expects.
// See: https://docs.astro.build/en/guides/content-collections/

import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
