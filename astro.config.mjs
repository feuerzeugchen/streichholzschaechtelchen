import { astroImageTools } from "astro-imagetools";
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://streichholzschaechtelchen.eu/',
  integrations: [astroImageTools, mdx()]
})