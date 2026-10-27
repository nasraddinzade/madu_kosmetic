"use client";

import { PlusIcon } from "./icons";
import { cart, useCartLines } from "@/lib/cart";
import { t } from "@/lib/i18n";
import { productTitle, type Product } from "@/lib/products";
import { showToast } from "@/lib/toast";

export function AddToCart({ product, size = "card" }: { product: Product; size?: "card" | "page" }) {
  const qty = useCartLines().find((l) => l.slug === product.slug)?.qty ?? 0;

  function add() {
    cart.add(product.slug);
    showToast(t.product.added, productTitle(product));
  }

  const big = size === "page";
  return (
    <button
      type="button"
      onClick={add}
      className={`flex w-full items-center justify-center gap-1.5 rounded-[4px] bg-pink font-medium text-white transition-transform active:scale-[0.98] ${
        big ? "h-12 text-[16px]" : "h-9 text-[13px]"
      }`}
    >
      <PlusIcon width={big ? 18 : 15} height={big ? 18 : 15} strokeWidth={2.2} />
      {t.product.addToCart}
      {qty > 0 && (
        <span className="ml-1 min-w-[20px] rounded-full bg-white px-1.5 text-[11px] leading-[18px] text-ink tabular-nums">
          {qty}
        </span>
      )}
    </button>
  );
}
