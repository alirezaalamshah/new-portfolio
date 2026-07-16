import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../../i18n/ui';

export async function GET(context) {
  const posts = (
    await getCollection('tutorials', (e) => e.id.startsWith('de/') && !e.data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${ui.de.site.fullName} — ${ui.de.tutorials.title}`,
    description: ui.de.tutorials.metaDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/de/tutorials/${post.id.split('/').slice(1).join('/')}/`,
    })),
    customData: '<language>de-DE</language>',
  });
}
