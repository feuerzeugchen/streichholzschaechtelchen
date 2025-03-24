import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  /* Retrieve all Markdown files in your pages directory. */
  loader: glob({ pattern: "**/*.md", base: "./src/pages" }),
  schema: undefined
});
const audio = defineCollection({
    /* Retrieve all Markdown files in your pages directory. */
    loader: glob({ pattern: "**/*.mp3", base: "./src/assets/" }),
    schema: undefined
  });

const authors = defineCollection({
  /* Retrieve all JSON files in your authors directory while retaining
   * uppercase letters in the ID. */
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/authors",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: undefined
});