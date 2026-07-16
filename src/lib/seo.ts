import { localizePath, type Lang } from '../i18n';

export function breadcrumbJsonLd(
  site: URL,
  lang: Lang,
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(localizePath(lang, item.path), site).href,
    })),
  };
}
