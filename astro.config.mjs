import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig( {
  site: 'https://example.com',
  integrations: [
    mdx(), sitemap(), // Basic support
    react(), preact(), solidJs(), // JSX support
    vue(), svelte(), // Template support
    image(), prefetch(), partytown(), // Optimisations
  ]
} );