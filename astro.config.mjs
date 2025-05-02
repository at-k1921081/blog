// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://at-k1921081.github.io",
  base: "/blog",
  integrations: [preact()],
});