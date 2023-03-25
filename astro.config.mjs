import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import solidJs from "@astrojs/solid-js";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig( {
  site: 'https://example.com',
  integrations: [
    astroI18next(), // a11y
    mdx(), sitemap(), // Basic support
    preact(), solidJs(), // JSX support! NO REACT.
    vue(), svelte(), // Template support
    image(), prefetch(), partytown(), // Optimisations
  ]
} );