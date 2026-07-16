// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: دامین خودت را اینجا بگذار (مثلاً https://ali.dev)
  site: 'https://alirezaalamshah.ir',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fa',
        locales: { fa: 'fa-IR', en: 'en-US', de: 'de-DE' },
      },
    }),
  ],
});
