import Link from "next/link";
import { t } from "@/lib/i18n";
import { CATEGORIES_IN_USE, PRODUCTS } from "@/lib/products";

export function CategoryStrip() {
  return (
    <nav className="no-scrollbar flex gap-2 overflow-x-auto">
      {CATEGORIES_IN_USE.map((cat) => (
        <Link
          key={cat}
          href={`/katalog?kat=${cat}`}
          className="flex shrink-0 items-baseline gap-1.5 rounded-[4px] border border-ink/15 bg-white px-3.5 py-2.5 text-[14px] font-medium"
        >
          {t.categories[cat]}
          <span className="text-[12px] text-stone tabular-nums">{PRODUCTS.filter((p) => p.category === cat).length}</span>
        </Link>
      ))}
    </nav>
  );
}
