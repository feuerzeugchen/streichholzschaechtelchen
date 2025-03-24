import { defineCollection, z } from 'astro:content';
import { defineConfig } from 'astro/config'

const stimmeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  stimme: stimmeCollection,
};

export default defineConfig({
  site: 'https://streichholzschaechtelchen.eu/'

})