import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../i18n/ui';

export async function GET(context) {
  const posts = (
    await getCollection('tutorials', (e) => e.id.startsWith('fa/') && !e.data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${ui.fa.site.fullName} — ${ui.fa.tutorials.title}`,
    description: ui.fa.tutorials.metaDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/tutorials/${post.id.split('/').slice(1).join('/')}/`,
    })),
    customData: '<language>fa-IR</language>',
  });
}
