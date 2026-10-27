import { CATEGORY_IDS, type CategoryId } from "./categories";
import { USE_PLACEHOLDERS } from "./config";
import { ALL_PRODUCTS, type Product } from "./products-data";

export type { Product };

// Products shown anywhere on the site.
export const PRODUCTS: Product[] = USE_PLACEHOLDERS ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => !p.noImage);

const BY_SLUG = new Map(PRODUCTS.map((p) => [p.slug, p]));

export function getProduct(slug: string): Product | undefined {
  return BY_SLUG.get(slug);
}

// 6 -> "6", 4.5 -> "4.50"
export function formatAmount(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

export function productTitle(p: Product): string {
  return p.brand ? `${p.brand} ${p.name}` : p.name;
}

export const BRANDS: string[] = [...new Set(PRODUCTS.flatMap((p) => (p.brand ? [p.brand] : [])))].sort((a, b) =>
  a.localeCompare(b, "az"),
);

export const CATEGORIES_IN_USE: CategoryId[] = CATEGORY_IDS.filter((c) => PRODUCTS.some((p) => p.category === c));

export function countUpTo(max: number): number {
  return PRODUCTS.filter((p) => p.price <= max).length;
}

// "Oxşar qiymətə": nearest prices, same category wins a tie.
export function similarByPrice(product: Product, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.slug !== product.slug)
    .map((p) => ({ p, diff: Math.abs(p.price - product.price) }))
    .sort(
      (a, b) =>
        a.diff - b.diff ||
        Number(b.p.category === product.category) - Number(a.p.category === product.category) ||
        a.p.price - b.p.price,
    )
    .slice(0, count)
    .map((x) => x.p);
}

export type SortKey = "cheap" | "expensive" | "name";

export type CatalogQuery = {
  q: string;
  category: CategoryId | null;
  min: number | null;
  max: number | null;
  brands: string[];
  sort: SortKey;
};

function normalize(text: string): string {
  return text.toLocaleLowerCase("az").normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i").replace(/ə/g, "e");
}

export function queryProducts(query: CatalogQuery): Product[] {
  const needle = normalize(query.q.trim());
  const result = PRODUCTS.filter(
    (p) =>
      (!needle || normalize(`${p.brand ?? ""} ${p.name}`).includes(needle)) &&
      (!query.category || p.category === query.category) &&
      (query.min === null || p.price >= query.min) &&
      (query.max === null || p.price <= query.max) &&
      (query.brands.length === 0 || (p.brand !== null && query.brands.includes(p.brand))),
  );
  const byName = (a: Product, b: Product) => productTitle(a).localeCompare(productTitle(b), "az");
  if (query.sort === "cheap") result.sort((a, b) => a.price - b.price || byName(a, b));
  if (query.sort === "expensive") result.sort((a, b) => b.price - a.price || byName(a, b));
  if (query.sort === "name") result.sort(byName);
  return result;
}
