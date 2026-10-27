export const CATEGORY_IDS = ["makiyaj", "uz-baximi", "sac", "beden", "etir", "aksesuar"] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export function isCategoryId(value: string | null): value is CategoryId {
  return value !== null && (CATEGORY_IDS as readonly string[]).includes(value);
}
