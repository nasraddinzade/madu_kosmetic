"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FilterSheet } from "./filter-sheet";
import { CloseIcon, FilterIcon } from "@/components/icons";
import { ProductGrid } from "@/components/product-card";
import { catalogHref, parseCatalogQuery } from "@/lib/catalog-params";
import { t } from "@/lib/i18n";
import { formatAmount, queryProducts, type CatalogQuery, type SortKey } from "@/lib/products";

type Chip = { key: string; label: string; next: CatalogQuery };

function activeChips(query: CatalogQuery): Chip[] {
  const chips: Chip[] = [];
  if (query.q) chips.push({ key: "q", label: t.catalog.searchFor(query.q), next: { ...query, q: "" } });
  if (query.category)
    chips.push({ key: "kat", label: t.categories[query.category], next: { ...query, category: null } });
  if (query.min !== null || query.max !== null) {
    const min = query.min !== null ? formatAmount(query.min) : null;
    const max = query.max !== null ? formatAmount(query.max) : null;
    const label =
      min && max ? t.catalog.priceRange(min, max) : max ? t.catalog.priceUpTo(max) : t.catalog.priceFrom(min!);
    chips.push({ key: "price", label, next: { ...query, min: null, max: null } });
  }
  query.brands.forEach((b) =>
    chips.push({ key: `b-${b}`, label: b, next: { ...query, brands: query.brands.filter((x) => x !== b) } }),
  );
  return chips;
}

export function Catalog() {
  const router = useRouter();
  const query = parseCatalogQuery(new URLSearchParams(useSearchParams().toString()));
  const products = queryProducts(query);
  const chips = activeChips(query);
  const [sheetOpen, setSheetOpen] = useState(false);

  const go = (next: CatalogQuery) => router.replace(catalogHref(next), { scroll: false });
  const filterCount = (query.category ? 1 : 0) + (query.min !== null || query.max !== null ? 1 : 0) + query.brands.length;

  return (
    <>
      <p className="mt-1.5 text-[13px] text-stone" aria-live="polite">
        {t.catalog.found(products.length)}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="flex h-10 items-center gap-2 rounded-[4px] bg-ink px-3.5 text-[14px] font-medium text-cream"
        >
          <FilterIcon width={18} height={18} />
          {t.catalog.filters}
          {filterCount > 0 && (
            <span className="min-w-[20px] rounded-full bg-cream px-1 text-center text-[11px] leading-[20px] text-ink tabular-nums">
              {filterCount}
            </span>
          )}
        </button>
        <label className="relative ml-auto min-w-0">
          <span className="sr-only">{t.catalog.sort}</span>
          <select
            value={query.sort}
            onChange={(e) => go({ ...query, sort: e.target.value as SortKey })}
            className="h-10 max-w-full appearance-none truncate rounded-[4px] border border-ink/15 bg-white pr-8 pl-3 text-[14px]"
          >
            {(Object.keys(t.catalog.sortOptions) as SortKey[]).map((key) => (
              <option key={key} value={key}>
                {t.catalog.sortOptions[key]}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 10 6"
            className="pointer-events-none absolute top-1/2 right-3 h-1.5 w-2.5 -translate-y-1/2"
          >
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </label>
      </div>

      {chips.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {chips.map((chip) => (
            <li key={chip.key} className="min-w-0">
              <button
                type="button"
                onClick={() => go(chip.next)}
                aria-label={t.catalog.removeFilter(chip.label)}
                className="flex max-w-full items-center gap-1 rounded-[4px] bg-pink py-1.5 pr-2 pl-3 text-[13px] font-medium text-white"
              >
                <span className="truncate">{chip.label}</span>
                <CloseIcon width={14} height={14} strokeWidth={2.2} />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="rounded-[4px] border border-line bg-white px-4 py-10 text-center">
            <p className="text-[15px]">{t.catalog.empty}</p>
            <button
              type="button"
              onClick={() => go({ q: "", category: null, min: null, max: null, brands: [], sort: query.sort })}
              className="mt-4 h-10 rounded-[4px] bg-ink px-4 text-[14px] font-medium text-cream"
            >
              {t.catalog.resetAll}
            </button>
          </div>
        )}
      </div>

      {sheetOpen && (
        <FilterSheet
          query={query}
          onClose={() => setSheetOpen(false)}
          onApply={(next) => {
            setSheetOpen(false);
            go(next);
          }}
        />
      )}
    </>
  );
}
