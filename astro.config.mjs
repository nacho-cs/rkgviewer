import { defineConfig } from "astro/config";
import { kaitai } from "vite-plugin-kaitai";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [kaitai()]
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: vercel()
});