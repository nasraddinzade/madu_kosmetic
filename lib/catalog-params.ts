import { isCategoryId } from "./categories";
import type { CatalogQuery, SortKey } from "./products";

const SORT_KEYS: SortKey[] = ["cheap", "expensive", "name"];

function parsePrice(value: string | null): number | null {
  if (!value) return null;
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : null;
}

export function parseCatalogQuery(params: URLSearchParams): CatalogQuery {
  const kat = params.get("kat");
  const sort = params.get("sirala") as SortKey | null;
  return {
    q: params.get("q") ?? "",
    category: isCategoryId(kat) ? kat : null,
    min: parsePrice(params.get("min")),
    max: parsePrice(params.get("max")),
    brands: params.getAll("brend"),
    sort: sort && SORT_KEYS.includes(sort) ? sort : "cheap",
  };
}

export function catalogHref(query: CatalogQuery): string {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.category) params.set("kat", query.category);
  if (query.min !== null) params.set("min", String(query.min));
  if (query.max !== null) params.set("max", String(query.max));
  query.brands.forEach((b) => params.append("brend", b));
  if (query.sort !== "cheap") params.set("sirala", query.sort);
  const qs = params.toString();
  return qs ? `/katalog?${qs}` : "/katalog";
}
