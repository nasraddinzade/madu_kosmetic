import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Price } from "@/components/price";
import { ProductGrid } from "@/components/product-card";
import { CategoryStrip } from "@/components/category-strip";
import { HOME_BLOCK_SIZE, HOME_BUDGET_LIMIT, HOME_BUDGET_SIZE, HOME_CATEGORY_BLOCKS, PRICE_TILES } from "@/lib/config";
import { t } from "@/lib/i18n";
import { countUpTo, PRODUCTS } from "@/lib/products";

function SectionHead({ title, href, count }: { title: string; href: string; count: number }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <h2 className="display text-[24px] leading-none font-extrabold">{title}</h2>
      <Link href={href} className="flex shrink-0 items-center gap-1 text-[13px] font-medium underline-offset-4 hover:underline">
        {t.home.seeAll} <span className="text-stone tabular-nums">{count}</span>
        <ArrowRightIcon width={16} height={16} />
      </Link>
    </div>
  );
}

export default function Home() {
  const budget = PRODUCTS.filter((p) => p.price <= HOME_BUDGET_LIMIT);

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Entry through the budget, not through a hero image. */}
      <section className="pt-5" aria-labelledby="price-title">
        <h1 id="price-title" className="display mb-3 text-[28px] leading-none font-extrabold">
          {t.home.priceTitle}
        </h1>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PRICE_TILES.map((max) => (
            <Link
              key={max}
              href={`/katalog?max=${max}`}
              className="flex flex-col justify-between rounded-[4px] bg-blush px-3.5 pt-3 pb-3 transition-transform active:scale-[0.98]"
            >
              <Price value={max} className="text-[52px] leading-[0.9]" />
              <span className="mt-3 flex flex-col text-[13px] leading-snug">
                <span className="font-medium">{t.home.priceTileSuffix}</span>
                <span className="text-[12px] text-ink/60 tabular-nums">{t.productsCount(countUpTo(max))}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6" aria-label={t.home.categoriesTitle}>
        <CategoryStrip />
      </section>

      <section className="mt-8">
        <SectionHead title={t.home.budgetTitle(HOME_BUDGET_LIMIT)} href={`/katalog?max=${HOME_BUDGET_LIMIT}`} count={budget.length} />
        <ProductGrid products={budget.slice(0, HOME_BUDGET_SIZE)} />
      </section>

      {HOME_CATEGORY_BLOCKS.map((cat) => {
        const items = PRODUCTS.filter((p) => p.category === cat);
        return (
          <section key={cat} className="mt-10">
            <SectionHead title={t.categories[cat]} href={`/katalog?kat=${cat}`} count={items.length} />
            <ProductGrid products={items.slice(0, HOME_BLOCK_SIZE)} />
          </section>
        );
      })}
    </div>
  );
}
