import { astroImageTools } from "astro-imagetools";
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://jannisreinelt.com',
  integrations: [astroImageTools]
})