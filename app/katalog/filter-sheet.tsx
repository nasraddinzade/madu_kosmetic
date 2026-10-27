"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons";
import { PRICE_TILES } from "@/lib/config";
import { t } from "@/lib/i18n";
import { BRANDS, CATEGORIES_IN_USE, formatAmount, queryProducts, type CatalogQuery } from "@/lib/products";

type Props = {
  query: CatalogQuery;
  onClose: () => void;
  onApply: (next: CatalogQuery) => void;
};

function toPrice(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) && n >= 0 ? n : null;
}

const chipBase = "rounded-[4px] px-3 py-2 text-[14px] font-medium";
const chipOff = "border border-ink/15 bg-white text-ink";
const chipOn = "border border-pink bg-pink text-white";

// Exactly three filters: category, price range, brand.
export function FilterSheet({ query, onClose, onApply }: Props) {
  const [category, setCategory] = useState(query.category);
  const [min, setMin] = useState(query.min !== null ? formatAmount(query.min) : "");
  const [max, setMax] = useState(query.max !== null ? formatAmount(query.max) : "");
  const [brands, setBrands] = useState(query.brands);

  const draft: CatalogQuery = { ...query, category, min: toPrice(min), max: toPrice(max), brands };
  const count = queryProducts(draft).length;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const toggleBrand = (b: string) => setBrands((list) => (list.includes(b) ? list.filter((x) => x !== b) : [...list, b]));

  return (
    <div className="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-labelledby="filter-title">
      <button type="button" aria-label={t.filters.close} onClick={onClose} className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-h-[88dvh] max-w-2xl flex-col rounded-t-[4px] bg-cream">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <h2 id="filter-title" className="display text-[20px] font-extrabold">
            {t.catalog.filters}
          </h2>
          <button type="button" onClick={onClose} aria-label={t.filters.close} className="-mr-2 p-2">
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
          <fieldset>
            <legend className="mb-2 text-[13px] font-medium text-stone">{t.filters.category}</legend>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                aria-pressed={category === null}
                onClick={() => setCategory(null)}
                className={`${chipBase} ${category === null ? chipOn : chipOff}`}
              >
                {t.filters.all}
              </button>
              {CATEGORIES_IN_USE.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={`${chipBase} ${category === c ? chipOn : chipOff}`}
                >
                  {t.categories[c]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-[13px] font-medium text-stone">{t.filters.price}</legend>
            <div className="flex items-center gap-2">
              <label className="min-w-0 flex-1">
                <span className="sr-only">{t.filters.min}</span>
                <input
                  inputMode="decimal"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                  placeholder={t.filters.min}
                  className="h-11 w-full rounded-[4px] border border-ink/15 bg-white px-3 text-[16px] tabular-nums"
                />
              </label>
              <span className="text-stone">–</span>
              <label className="min-w-0 flex-1">
                <span className="sr-only">{t.filters.max}</span>
                <input
                  inputMode="decimal"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                  placeholder={t.filters.max}
                  className="h-11 w-full rounded-[4px] border border-ink/15 bg-white px-3 text-[16px] tabular-nums"
                />
              </label>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PRICE_TILES.map((tile) => {
                const on = min === "" && toPrice(max) === tile;
                return (
                  <button
                    key={tile}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setMin("");
                      setMax(String(tile));
                    }}
                    className={`${chipBase} tabular-nums ${on ? chipOn : chipOff}`}
                  >
                    {t.catalog.priceUpTo(String(tile))}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-[13px] font-medium text-stone">{t.filters.brand}</legend>
            <div className="grid grid-cols-2 gap-x-3 sm:grid-cols-3">
              {BRANDS.map((b) => {
                const on = brands.includes(b);
                return (
                  <label key={b} className="flex min-w-0 cursor-pointer items-center gap-2 py-1.5 text-[14px]">
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggleBrand(b)}
                      className="size-[18px] shrink-0 accent-pink"
                    />
                    <span className={`truncate ${on ? "font-medium" : ""}`}>{b}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="flex gap-2 border-t border-line px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={() => {
              setCategory(null);
              setMin("");
              setMax("");
              setBrands([]);
            }}
            className="h-12 rounded-[4px] border border-ink/20 bg-white px-4 text-[15px] font-medium"
          >
            {t.filters.reset}
          </button>
          <button
            type="button"
            onClick={() => onApply(draft)}
            className="h-12 flex-1 rounded-[4px] bg-ink px-4 text-[15px] font-medium text-cream"
          >
            {t.filters.apply(count)}
          </button>
        </div>
      </div>
    </div>
  );
}
