// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kovalovs.lv',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
