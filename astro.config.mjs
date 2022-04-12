import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  markdown:{
    drafts: true,
  },
  integrations: [tailwind(), turbolinks()]
});