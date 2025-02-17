import { defineConfig } from "astro/config";


import htmx from 'astro-htmx';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx()],

  vite: {
    plugins: [tailwindcss()]
  }
});