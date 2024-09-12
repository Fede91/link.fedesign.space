import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://link.fedesign.space",
  integrations: [react(), sitemap(), robotsTxt()],
  output: "hybrid",
  adapter: vercel(),
});
