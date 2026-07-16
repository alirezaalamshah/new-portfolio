/** URL slug for a tag: keep unicode, replace whitespace with dashes. */
export function slugifyTag(tag: string): string {
  return tag.trim().replace(/\s+/g, '-');
}
