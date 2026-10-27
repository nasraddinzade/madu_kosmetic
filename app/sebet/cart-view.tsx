"use client";

import Link from "next/link";
import { MinusIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { Price } from "@/components/price";
import { ProductImage } from "@/components/product-image";
import { cart, useCart, useHydrated } from "@/lib/cart";
import { t } from "@/lib/i18n";
import { whatsappOrderUrl } from "@/lib/order";

export function CartView() {
  const hydrated = useHydrated();
  const { items, total } = useCart();

  if (!hydrated) return <div className="h-64" />;

  if (items.length === 0) {
    return (
      <div className="mt-5 rounded-[4px] border border-line bg-white px-4 py-10 text-center">
        <p>{t.cart.empty}</p>
        <Link href="/katalog" className="mt-4 inline-flex h-11 items-center rounded-[4px] bg-ink px-5 text-[15px] font-medium text-cream">
          {t.cart.toCatalog}
        </Link>
      </div>
    );
  }

  return (
    <>
      <ul className="mt-5 border-t border-line">
        {items.map(({ product, qty }) => (
          <li key={product.slug} className="flex gap-3 border-b border-line py-3">
            <Link href={`/mehsul/${product.slug}`} className="w-20 shrink-0 self-start overflow-hidden rounded-[4px] border border-line">
              <ProductImage product={product} sizes="80px" />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col">
              {product.brand && <p lang="en" className="truncate text-[11px] font-medium tracking-wide text-stone uppercase">{product.brand}</p>}
              <Link href={`/mehsul/${product.slug}`} className="line-clamp-2 text-[14px] leading-snug break-words">
                {product.name}
              </Link>
              <div className="mt-auto flex items-end justify-between gap-2 pt-2">
                <div className="flex items-center rounded-[4px] border border-ink/15 bg-white">
                  <button
                    type="button"
                    onClick={() => cart.setQty(product.slug, qty - 1)}
                    aria-label={t.cart.decrease}
                    className="flex size-9 items-center justify-center"
                  >
                    <MinusIcon width={16} height={16} />
                  </button>
                  <span className="min-w-7 text-center text-[15px] font-medium tabular-nums" aria-label={t.cart.quantity}>
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => cart.setQty(product.slug, qty + 1)}
                    aria-label={t.cart.increase}
                    className="flex size-9 items-center justify-center"
                  >
                    <PlusIcon width={16} height={16} />
                  </button>
                </div>
                <div className="text-right">
                  <Price value={product.price * qty} className="text-[22px] leading-none" />
                  <button
                    type="button"
                    onClick={() => cart.remove(product.slug)}
                    aria-label={t.cart.removeItem(product.name)}
                    className="mt-1 block w-full text-right text-[12px] text-stone underline underline-offset-2"
                  >
                    {t.cart.remove}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-[15px] font-medium">{t.cart.total}</span>
        <Price value={total} className="text-[40px] leading-none" />
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <Link
          href="/sifaris"
          className="flex h-12 items-center justify-center rounded-[4px] bg-ink px-4 text-[15px] font-medium text-cream"
        >
          {t.cart.checkout}
        </Link>
        <a
          href={whatsappOrderUrl(items, total)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-[4px] border border-ink bg-white px-4 text-[15px] font-medium"
        >
          <WhatsAppIcon />
          {t.cart.whatsapp}
        </a>
      </div>
      <p className="mt-2 text-center text-[12px] text-stone sm:text-right">{t.cart.whatsappHint}</p>
    </>
  );
}
