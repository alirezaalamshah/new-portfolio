export const languages = {
  fa: 'فارسی',
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fa';

export const localeTags: Record<Lang, string> = {
  fa: 'fa-IR',
  en: 'en-US',
  de: 'de-DE',
};

export function dirFor(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'fa' ? 'rtl' : 'ltr';
}

/**
 * `/portfolio` + `en` → `/en/portfolio/`; default locale keeps the bare path.
 * Always emits a trailing slash — GitHub Pages serves directory URLs, so this
 * avoids 301 redirects and keeps canonicals exact.
 */
export function localizePath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const base = lang === defaultLang ? clean : `/${lang}${clean}`;
  return `${base}/`;
}

export function formatDate(lang: Lang, date: Date): string {
  return new Intl.DateTimeFormat(localeTags[lang], { dateStyle: 'long' }).format(date);
}

/** Collection entry ids look like `fa/some-slug` — split lang and slug. */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}
