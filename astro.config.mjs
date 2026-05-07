// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const isBuild = process.argv.includes('build');

let adapterConfig = {};
if (isBuild) {
  const cloudflare = await import('@astrojs/cloudflare');
  adapterConfig.adapter = cloudflare.default();
}

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  ...adapterConfig
});